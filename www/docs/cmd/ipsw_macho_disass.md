# ipsw macho disass

Disassemble ARM64 MachO at symbol/vaddr

```
ipsw macho disass <MACHO> [flags]
```

## Options

```
      --cache string    Path to .a2s addr to sym cache file (speeds up analysis)
      --color           Syntax highlight assembly output
  -c, --count uint      Number of instructions to disassemble
  -d, --demangle        Demangle symbol names
  -h, --help            help for disass
  -j, --json            Output as JSON
  -q, --quiet           Do NOT markup analysis (Faster)
  -s, --symbol string   Function to disassemble
  -a, --vaddr uint      Virtual address to start disassembling
```

## Options inherited from parent commands

```
      --config string   config file (default is $HOME/.ipsw.yaml)
  -V, --verbose         verbose output
```

## See also

* [ipsw macho](/cmd/ipsw_macho/)	 - Parse MachO

