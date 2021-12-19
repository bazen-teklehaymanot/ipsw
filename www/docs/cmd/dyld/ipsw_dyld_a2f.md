---
date: 2021-12-17T21:43:37-07:00
title: "ipsw dyld a2f"
slug: ipsw_dyld_a2f
url: /commands/ipsw_dyld_a2f/
---
## ipsw dyld a2f

Lookup function containing unslid address

```
ipsw dyld a2f <dyld_shared_cache> <vaddr> [flags]
```

### Options

```
  -c, --cache string   Path to .a2s addr to sym cache file (speeds up analysis)
  -h, --help           help for a2f
  -i, --in string      Path to file containing list of addresses to lookup
  -o, --out string     Path to output JSON file
  -s, --slide uint     dyld_shared_cache slide to apply
```

### Options inherited from parent commands

```
      --config string   config file (default is $HOME/.ipsw.yaml)
  -V, --verbose         verbose output
```

### SEE ALSO

* [ipsw dyld](/cmd/ipsw_dyld/)	 - Parse dyld_shared_cache

