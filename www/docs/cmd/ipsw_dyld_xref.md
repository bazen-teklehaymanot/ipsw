# ipsw dyld xref

🚧 [WIP] Find all cross references to an address

```
ipsw dyld xref <dyld_shared_cache> <vaddr> [flags]
```

## Options

```
  -h, --help           help for xref
  -i, --image string   dylib image to search
      --imports        Search all other dylibs that import the dylib containing the xref src
  -s, --slide uint     dyld_shared_cache slide to apply
```

## Options inherited from parent commands

```
      --config string   config file (default is $HOME/.ipsw.yaml)
  -V, --verbose         verbose output
```

## See also

* [ipsw dyld](/cmd/ipsw_dyld/)	 - Parse dyld_shared_cache

