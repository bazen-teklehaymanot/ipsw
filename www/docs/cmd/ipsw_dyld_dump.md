# ipsw dyld dump

Dump dyld_shared_cache data at given virtual address

```
ipsw dyld dump <dyld_shared_cache> <address> [flags]
```

## Options

```
  -a, --addr            Output as addresses/uint64s
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

* [ipsw dyld](/cmd/ipsw_dyld/)	 - Parse dyld_shared_cache

