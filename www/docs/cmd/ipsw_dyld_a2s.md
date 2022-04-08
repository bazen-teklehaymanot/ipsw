# ipsw dyld a2s

Lookup symbol at unslid address

```
ipsw dyld a2s <dyld_shared_cache> <vaddr> [flags]
```

## Options

```
      --cache string   Path to .a2s addr to sym cache file (speeds up analysis)
  -h, --help           help for a2s
  -i, --image          Only lookup address's dyld_shared_cache mapping
  -m, --mapping        Only lookup address's image segment/section
  -s, --slide uint     dyld_shared_cache slide to apply
```

## Options inherited from parent commands

```
      --config string   config file (default is $HOME/.ipsw.yaml)
  -V, --verbose         verbose output
```

## See also

* [ipsw dyld](/cmd/ipsw_dyld/)	 - Parse dyld_shared_cache

