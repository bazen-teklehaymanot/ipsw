---
date: 2021-12-17T21:43:37-07:00
title: "ipsw download dev"
slug: ipsw_download_dev
url: /commands/ipsw_download_dev/
---
## ipsw download dev

Download IPSWs (and more) from https://developer.apple.com/download

### Synopsis

A longer description that spans multiple lines and likely contains
examples and usage of using your application. For example:
Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.

```
ipsw download dev [flags]
```

### Examples

```
test
```

### Options

```
      --beta                Download 'Beta' OSs/Apps
  -h, --help                help for dev
      --json                Output downloadable items as JSON
      --more                Download 'More' OSs/Apps
  -o, --output string       Folder to download files to
  -p, --page int            Page size for file lists (default 20)
      --pretty              Pretty print JSON
      --release             Download 'Release' OSs/Apps
      --sms                 Prefer SMS Two-factor authentication
      --watch stringArray   dev portal type to watch
```

### Options inherited from parent commands

```
      --black-list stringArray   iOS device black list
  -b, --build string             iOS BuildID (i.e. 16F203)
      --config string            config file (default is $HOME/.ipsw.yaml)
  -y, --confirm                  do not prompt user for confirmation
  -d, --device string            iOS Device (i.e. iPhone11,2)
      --insecure                 do not verify ssl certs
  -m, --model string             iOS Model (i.e. D321AP)
      --proxy string             HTTP/HTTPS proxy
  -_, --remove-commas            replace commas in IPSW filename with underscores
      --restart-all              always restart resumable IPSWs
      --resume-all               always resume resumable IPSWs
      --skip-all                 always skip resumable IPSWs
  -V, --verbose                  verbose output
  -v, --version string           iOS Version (i.e. 12.3.1)
      --white-list stringArray   iOS device white list
```

### SEE ALSO

* [ipsw download](/cmd/ipsw_download/)	 - Download Apple Firmware files (and more)

