# ipsw macho dump

Dump MachO data at given virtual address

```
ipsw macho dump <macho> <address> [flags]
```

## Options

```
  -v, --addr            Output as addresses/uint64s
  -a, --arch string     Which architecture to use for fat/universal MachO
  -b, --bytes           Output as bytes
      --color           Force color (for piping to less etc)
  -c, --count uint      The number of total items to display
  -h, --help            help for dump
  -o, --output string   Output to a file
  -s, --size uint       Size of data in bytes
```

## Options inherited from parent commands

```
      --config string   config file (default is $HOME/.ipsw.yaml)
  -V, --verbose         verbose output
```

## See also

* [ipsw macho](/cmd/ipsw_macho/)	 - Parse MachO

