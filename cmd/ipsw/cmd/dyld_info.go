/*
Copyright © 2021 blacktop

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
package cmd

import (
	"encoding/json"
	"fmt"
	"math"
	"os"
	"path/filepath"
	"text/tabwriter"

	"github.com/apex/log"
	"github.com/blacktop/go-macho"
	"github.com/blacktop/go-macho/pkg/codesign/types"
	"github.com/blacktop/ipsw/pkg/dyld"
	"github.com/fullsailor/pkcs7"
	"github.com/pkg/errors"
	"github.com/spf13/cobra"
)

func init() {
	dyldCmd.AddCommand(dyldInfoCmd)

	dyldInfoCmd.Flags().BoolP("dylibs", "l", false, "List dylibs and their versions")
	dyldInfoCmd.Flags().BoolP("sig", "s", false, "Print code signature")
	dyldInfoCmd.Flags().BoolP("json", "j", false, "Output as JSON")
	dyldInfoCmd.MarkZshCompPositionalArgumentFile(1, "dyld_shared_cache*")
}

type dylib struct {
	Index       int    `json:"index,omitempty"`
	Name        string `json:"name,omitempty"`
	Version     string `json:"version,omitempty"`
	UUID        string `json:"uuid,omitempty"`
	LoadAddress uint64 `json:"load_address,omitempty"`
}

type dyldInfo struct {
	Magic           string                                      `json:"magic,omitempty"`
	UUID            string                                      `json:"uuid,omitempty"`
	Platform        string                                      `json:"platform,omitempty"`
	MaxSlide        int                                         `json:"max_slide,omitempty"`
	NumSubCaches    int                                         `json:"num_sub_caches,omitempty"`
	SubCacheGroupID int                                         `json:"sub_cache_group_id,omitempty"`
	SymSubCacheUUID string                                      `json:"sym_sub_cache_uuid,omitempty"`
	Mappings        map[string][]dyld.CacheMappingWithSlideInfo `json:"mappings,omitempty"`
	CodeSignature   map[string]types.CodeSignature              `json:"code_signature,omitempty"`
	Dylibs          []dylib                                     `json:"dylibs,omitempty"`
}

// infoCmd represents the info command
var dyldInfoCmd = &cobra.Command{
	Use:   "info <dyld_shared_cache>",
	Short: "Parse dyld_shared_cache",
	Long: `❯ ipsw dyld info -l -s dyld_shared_cache | head -n35

Header
======
Magic            = "dyld_v1  arm64e"
UUID             = 92537455-A74B-3198-96CD-F2D2D2778315
Platform         = iOS
Format           = 10 (BuiltFromChainedFixups)
Max Slide        = 0x33940000 (ASLR entropy: 16-bits)

Local Symbols (nlist array):     78MB,  offset:  0x62144260 -> 0x66F98340
Local Symbols (string pool):    256MB,  offset:  0x66F98340 -> 0x7701333B
Code Signature:                   3MB,  offset:  0x77014000 -> 0x773D0000
ImagesText Info (2072 entries):  64KB,  offset:  0x00000300 -> 0x00010600
Slide Info (v3):                  0KB,  offset:  0x00000000 -> 0x00000000
Branch Pool:                      0MB,  offset:  0x00000000 -> 0x00000000
Accelerate Tab:                   0KB,  address: 0x00000000 -> 0x00000000
Patch Info:                     512KB,  address: 0x1E798654C -> 0x1E7A068BC
Closures:                         6MB,  address: 0x1E7AE0000 -> 0x1E8129748
Closures Trie:                   53KB,  address: 0x1E8129748 -> 0x1E8136D40
Shared Region:                    4GB,  address: 0x180000000 -> 0x280000000

Mappings
========
|    SEG     | INITPROT | MAXPROT |  SIZE   |        ADDRESS         |     FILE OFFSET      |  SLIDE INFO OFFSET   | FLAGS |
|------------|----------|---------|---------|------------------------|----------------------|----------------------|-------|
| __TEXT     | r-x      | r-x     | 1222 MB | 180000000 -> 1CC6C0000 | 00000000 -> 4C6C0000 | 00000000 -> 00000000 | 0     |
| __DATA     | rw-      | rw-     | 116 MB  | 1CE6C0000 -> 1D5B18000 | 4C6C0000 -> 53B18000 | 58CA4000 -> 58CB4000 | 0     |
| __AUTH     | rw-      | rw-     | 81 MB   | 1D7B18000 -> 1DCCA4000 | 53B18000 -> 58CA4000 | 58CB8000 -> 58CC4000 | 1     |
| __LINKEDIT | r--      | r--     | 148 MB  | 1DECA4000 -> 1E8138000 | 58CA4000 -> 62138000 | 00000000 -> 00000000 | 0     |

Code Signature
==============
Code Directory (3963356 bytes)
	Version:     ExecSeg
	Flags:       Adhoc
	CodeLimit:   0x78f24000
	Identifier:  com.apple.dyld.cache.arm64e.release (@0x58)
	TeamID:
	CDHash:      7d32d18703679ac152a74ff872e38dda69339eabe29a0a6837861cec3d05de87 (computed)
	# of hashes: 123849 code (16384 pages) + 2 special
	Hashes @188 size: 32 Type: Sha256
Requirement Set (12 bytes) with 1 requirement
	0: 0x0 (@0, 12 bytes): empty requirement set

Images
======
   1: 0x180045000 /usr/lib/system/libsystem_trace.dylib                                                           (1264.0.0)
   2: 0x18005C000 /usr/lib/system/libxpc.dylib                                                                    (2001.0.0)
   3: 0x180091000 /usr/lib/system/libsystem_blocks.dylib                                                          (76.0.0)
   4: 0x180093000 /usr/lib/system/libsystem_c.dylib                                                               (1431.0.0)`,
	Args: cobra.MinimumNArgs(1),
	RunE: func(cmd *cobra.Command, args []string) error {
		if Verbose {
			log.SetLevel(log.DebugLevel)
		}

		// showHeader, _ := cmd.Flags().GetBool("header")
		showDylibs, _ := cmd.Flags().GetBool("dylibs")
		showSignature, _ := cmd.Flags().GetBool("sig")

		outAsJSON, _ := cmd.Flags().GetBool("json")

		dscPath := filepath.Clean(args[0])

		fileInfo, err := os.Lstat(dscPath)
		if err != nil {
			return fmt.Errorf("file %s does not exist", dscPath)
		}

		// Check if file is a symlink
		if fileInfo.Mode()&os.ModeSymlink != 0 {
			symlinkPath, err := os.Readlink(dscPath)
			if err != nil {
				return errors.Wrapf(err, "failed to read symlink %s", dscPath)
			}
			// TODO: this seems like it would break
			linkParent := filepath.Dir(dscPath)
			linkRoot := filepath.Dir(linkParent)

			dscPath = filepath.Join(linkRoot, symlinkPath)
		}

		// TODO: check for
		// if ( dylibInfo->isAlias )
		//   	printf("[alias] %s\n", dylibInfo->path);

		f, err := dyld.Open(dscPath)
		if err != nil {
			return err
		}
		defer f.Close()

		if outAsJSON {
			dinfo := dyldInfo{
				Magic:    f.Headers[f.UUID].Magic.String(),
				UUID:     f.UUID.String(),
				Platform: f.Headers[f.UUID].Platform.String(),
				MaxSlide: int(f.Headers[f.UUID].MaxSlide),
			}

			dinfo.Mappings = make(map[string][]dyld.CacheMappingWithSlideInfo)

			for u, mp := range f.MappingsWithSlideInfo {
				for _, m := range mp {
					dinfo.Mappings[u.String()] = append(dinfo.Mappings[u.String()], *m)
				}
			}

			dinfo.CodeSignature = make(map[string]types.CodeSignature)

			if showSignature {
				for u, cs := range f.CodeSignatures {
					dinfo.CodeSignature[u.String()] = *cs
				}
			}

			if showDylibs {
				for idx, img := range f.Images {
					m, err := img.GetPartialMacho()
					if err != nil {
						continue
						// return fmt.Errorf("failed to create partial MachO for image %s: %v", img.Name, err)
					}
					dinfo.Dylibs = append(dinfo.Dylibs, dylib{
						Index:       idx + 1,
						Name:        img.Name,
						Version:     m.SourceVersion().Version,
						UUID:        m.UUID().String(),
						LoadAddress: img.Info.Address,
					})
					m.Close()
				}
			}

			j, err := json.Marshal(dinfo)
			if err != nil {
				return err
			}

			fmt.Println(string(j))

			return nil
		}

		// print HEADER info
		fmt.Println(f.String(Verbose))

		if showSignature {
			fmt.Println("Code Signature")
			fmt.Println("==============")
			if f.CodeSignatures != nil {
				for u, cs := range f.CodeSignatures {
					if f.IsDyld4 {
						fmt.Printf("\n> SubCache %s\n\n", u)
					}
					cds := cs.CodeDirectories
					if len(cds) > 0 {
						for _, cd := range cds {
							var teamID string
							if len(cd.TeamID) > 0 {
								teamID = fmt.Sprintf("\tTeamID:      %s\n", cd.TeamID)
							}
							fmt.Printf("Code Directory (%d bytes)\n", cd.Header.Length)
							fmt.Printf("\tVersion:     %s\n"+
								"\tFlags:       %s\n"+
								"\tCodeLimit:   0x%x\n"+
								"\tIdentifier:  %s (@0x%x)\n"+
								"%s"+
								"\tCDHash:      %s (computed)\n"+
								"\t# of hashes: %d code (%d pages) + %d special\n"+
								"\tHashes @%d size: %d Type: %s\n",
								cd.Header.Version,
								cd.Header.Flags,
								cd.Header.CodeLimit,
								cd.ID,
								cd.Header.IdentOffset,
								teamID,
								cd.CDHash,
								cd.Header.NCodeSlots,
								int(math.Pow(2, float64(cd.Header.PageSize))),
								cd.Header.NSpecialSlots,
								cd.Header.HashOffset,
								cd.Header.HashSize,
								cd.Header.HashType)
							if Verbose {
								for _, sslot := range cd.SpecialSlots {
									fmt.Printf("\t\t%s\n", sslot.Desc)
								}
								for _, cslot := range cd.CodeSlots {
									fmt.Printf("\t\t%s\n", cslot.Desc)
								}
							}
						}
					}
					reqs := cs.Requirements
					if len(reqs) > 0 {
						fmt.Printf("Requirement Set (%d bytes) with %d requirement\n",
							reqs[0].Length, // TODO: fix this (needs to be length - sizeof(header))
							len(reqs))
						for idx, req := range reqs {
							fmt.Printf("\t%d: %s (@%d, %d bytes): %s\n",
								idx,
								req.Type,
								req.Offset,
								req.Length,
								req.Detail)
						}
					}
					if len(cs.CMSSignature) > 0 {
						fmt.Println("CMS (RFC3852) signature:")
						p7, err := pkcs7.Parse(cs.CMSSignature)
						if err != nil {
							return err
						}
						w := tabwriter.NewWriter(os.Stdout, 0, 0, 1, ' ', 0)
						for _, cert := range p7.Certificates {
							var ou string
							if cert.Issuer.Organization != nil {
								ou = cert.Issuer.Organization[0]
							}
							if cert.Issuer.OrganizationalUnit != nil {
								ou = cert.Issuer.OrganizationalUnit[0]
							}
							fmt.Fprintf(w, "        OU: %s\tCN: %s\t(%s thru %s)\n",
								ou,
								cert.Subject.CommonName,
								cert.NotBefore.Format("01Jan06 15:04:05"),
								cert.NotAfter.Format("01Jan06 15:04:05"))
						}
						w.Flush()
					}
				}
			} else {
				fmt.Println("  - no code signature data")
			}
			fmt.Println()
		}

		if showDylibs {
			fmt.Println("Images")
			fmt.Println("======")
			w := tabwriter.NewWriter(os.Stdout, 0, 0, 2, ' ', 0)
			for idx, img := range f.Images {
				if f.Headers[f.UUID].FormatVersion.IsDylibsExpectedOnDisk() {
					m, err := macho.Open(img.Name)
					if err != nil {
						if serr, ok := err.(*macho.FormatError); !ok {
							return errors.Wrapf(serr, "failed to open MachO %s", img.Name)
						}
						fat, err := macho.OpenFat(img.Name)
						if err != nil {
							return errors.Wrapf(err, "failed to open Fat MachO %s", img.Name)
						}
						fmt.Fprintf(w, "%4d: %#x\t(%s)\t%s\n", idx+1, img.Info.Address, fat.Arches[0].SourceVersion().Version, img.Name)
						fat.Close()
						continue
					}
					fmt.Fprintf(w, "%4d: %#x\t(%s)\t%s\n", idx+1, img.Info.Address, m.SourceVersion().Version, img.Name)
					m.Close()
				} else {
					m, err := img.GetPartialMacho()
					if err != nil {
						return fmt.Errorf("failed to create partial MachO for image %s: %v", img.Name, err)
					}
					if Verbose {
						fmt.Fprintf(w, "%4d: %#x\t%s\t(%s)\t%s\n", idx+1, img.Info.Address, m.UUID(), m.SourceVersion().Version, img.Name)
					} else {
						fmt.Fprintf(w, "%4d: (%s)\t%s\n", idx+1, m.DylibID().CurrentVersion, img.Name)
					}
					m.Close()
				}
			}
			w.Flush()
		}

		return nil
	},
}
