---
date: 2021-12-17T21:43:37-07:00
title: "ipsw dyld dump"
slug: ipsw_dyld_dump
url: /commands/ipsw_dyld_dump/
---
## ipsw dyld dump

Dump dyld_shared_cache data at given virtual address

```
ipsw dyld dump <dyld_shared_cache> <address> [flags]
```

### Options

```
  -a, --addr            Output as addresses/uint64s
  -c, --count uint      The number of total items to display
  -h, --help            help for dump
  -x, --hex             Output as hexdump
  -o, --output string   Output to a file
  -s, --size uint       Size of data in bytes
```

### Options inherited from parent commands

```
      --config string   config file (default is $HOME/.ipsw.yaml)
  -V, --verbose         verbose output
```

### SEE ALSO

* [ipsw dyld](/cmd/ipsw_dyld/)	 - Parse dyld_shared_cache

