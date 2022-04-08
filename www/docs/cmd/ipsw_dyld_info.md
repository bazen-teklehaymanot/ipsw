# ipsw dyld info

Parse dyld_shared_cache

```
ipsw dyld info <dyld_shared_cache> [flags]
```

## Options

```
  -c, --closures   Dump program launch closures
  -d, --dlopen     Dump all dylibs and bundles with dlopen closures
  -l, --dylibs     List dylibs and their versions
  -h, --help       help for info
  -j, --json       Output as JSON
  -s, --sig        Print code signature
```

## Options inherited from parent commands

```
      --config string   config file (default is $HOME/.ipsw.yaml)
  -V, --verbose         verbose output
```

## See also

* [ipsw dyld](/cmd/ipsw_dyld/)	 - Parse dyld_shared_cache

