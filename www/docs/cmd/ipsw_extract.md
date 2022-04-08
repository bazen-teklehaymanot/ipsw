# ipsw extract

Extract kernelcache, dyld_shared_cache or DeviceTree from IPSW/OTA

```
ipsw extract <IPSW/OTA | URL> [flags]
```

## Options

```
  -f, --dmg                     Extract File System DMG
  -t, --dtree                   Extract DeviceTree
  -d, --dyld                    Extract dyld_shared_cache
  -a, --dyld-arch stringArray   dyld_shared_cache architecture to extract
  -h, --help                    help for extract
  -i, --iboot                   Extract iBoot
      --insecure                do not verify ssl certs
  -k, --kernel                  Extract kernelcache
  -o, --output string           Folder to extract files to
      --pattern string          Download remote files that match (not regex)
      --proxy string            HTTP/HTTPS proxy
  -r, --remote                  Extract from URL
  -s, --sep                     Extract sep-firmware
```

## Options inherited from parent commands

```
      --config string   config file (default is $HOME/.ipsw.yaml)
  -V, --verbose         verbose output
```

## See also

* [ipsw](/cmd/ipsw/)	 - Download and Parse IPSWs

