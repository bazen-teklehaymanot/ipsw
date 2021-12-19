---
date: 2021-12-17T21:43:37-07:00
title: "ipsw dyld disass"
slug: ipsw_dyld_disass
url: /commands/ipsw_dyld_disass/
---
## ipsw dyld disass

🚧 [WIP] Disassemble dyld_shared_cache symbol/vaddr in an image

```
ipsw dyld disass <dyld_shared_cache> [flags]
```

### Options

```
      --cache string    Path to .a2s addr to sym cache file (speeds up analysis)
  -c, --count uint      Number of instructions to disassemble
  -d, --demangle        Demangle symbol names
  -h, --help            help for disass
  -i, --image string    dylib image to search
      --slide uint      dyld_shared_cache slide to remove from --vaddr
  -s, --symbol string   Function to disassemble
  -a, --vaddr uint      Virtual address to start disassembling
```

### Options inherited from parent commands

```
      --config string   config file (default is $HOME/.ipsw.yaml)
  -V, --verbose         verbose output
```

### SEE ALSO

* [ipsw dyld](/cmd/ipsw_dyld/)	 - Parse dyld_shared_cache

