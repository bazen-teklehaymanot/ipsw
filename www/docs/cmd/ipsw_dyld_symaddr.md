# ipsw dyld symaddr

Lookup or dump symbol(s)

```
ipsw dyld symaddr <dyld_shared_cache> [flags]
```

## Options

```
  -a, --all            Find all symbol matches
  -b, --binds          Also search LC_DYLD_INFO binds
      --color          Colorize output
  -h, --help           help for symaddr
  -i, --image string   dylib image to search
      --in string      Path to JSON file containing list of symbols to lookup
      --out string     Path to output JSON file
```

## Options inherited from parent commands

```
      --config string   config file (default is $HOME/.ipsw.yaml)
  -V, --verbose         verbose output
```

## See also

* [ipsw dyld](/cmd/ipsw_dyld/)	 - Parse dyld_shared_cache

