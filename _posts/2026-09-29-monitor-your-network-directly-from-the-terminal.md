---
layout: post
title: "Monitor your network directly from the terminal"
date: 2026-09-29 19:31:19
image: '/assets/img/go/flow.jpg'
description: "🔳 Written in Go."
tags:
- go
- network
- tui
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The [`flow`](https://github.com/programmersd21/flow) is a real-time network traffic monitor for the terminal.

It is written in **Go**, uses [Bubble Tea](https://terminalroot.com/2025/07/crie-lindas-interfaces-para-o-terminal-com-essa-lib-go.html) for the [TUI](https://terminalroot.com/tags#tui) interface, and works on [GNU/Linux](https://terminalroot.com/tags#gnulinux), [macOS](https://terminalroot.com/tags#macos), and [Windows](https://terminalroot.com/tags#windows).

Features:
+ Download speed
+ Upload speed
+ Traffic graphs
+ Transfer peaks
+ Latency
+ Network interface in use
+ Processes with network connections
+ Interface information, such as IP, MAC, and MTU
+ Session/day traffic totals
+ Custom themes and color schemes

The interface automatically adapts to the terminal size, offering four modes: **Hero, Compact, Mini, and Tiny**.

---

## How to install
The project provides precompiled binaries for **Linux, macOS, and Windows**, for both `amd64` and `arm64`. There are also platform-specific methods.

### GNU/Linux
If you use Arch Linux, you can install it through the AUR:

```bash
yay -S flow-network-monitor-bin
```

### Using [Go](https://terminalroot.com/tags#go)
With Go installed:
```bash
go install github.com/programmersd21/flow/cmd/flow@latest
```

Verify:
```bash
flow
```

### Building from source
```bash
git clone https://github.com/programmersd21/flow
cd flow
make install
```

The project also provides binaries directly on the releases page.

---

## macOS
The simplest way is to use Homebrew:
```bash
brew install programmersd21/flow/flow
```

Then:
```bash
flow
```

---

## Windows
On Windows, you can download the binary corresponding to your machine's architecture from the project's **Releases** page.

There are builds for:

```text
amd64
arm64
```

The release process generates a `.zip` file for Windows.

After extracting the executable, you can run:
```powershell
.\flow.exe
```

If you want to call `flow` directly from any terminal, add the executable's folder to the Windows `PATH`.

---

## Getting started
Once installed, simply run:

```bash
flow
```

The program automatically detects the network interface and starts monitoring.

### View modes

You can start directly in different modes:

```bash
flow --compact
```

Compact layout.

```bash
flow --mini
```

Graphs only.

```bash
flow --tiny
```

A single line, ideal for status bars.

For example, the `tiny` mode can be integrated into **tmux**:

```text
set -g status-right "#(flow --tiny --no-color)"
```

### Choosing an interface

If the computer has multiple network interfaces:

```bash
flow --interface wlan0
```

You can also switch between interfaces within the application itself using:

```text
i
```

### Changing units

Press:

```text
c
```

to switch between scales such as:

```text
B/s
KB/s
MB/s
```

Or start using bits per second:

```bash
flow --bits
```

### Changing the refresh interval

By default, `flow` works with a 100 ms sampling rate.

You can change it:

```bash
flow --refresh 500ms
```

### Monitoring latency

You can set the destination used for the latency test:

```bash
flow --ping 8.8.8.8
```

The default address is `1.1.1.1`.

---

### Shortcuts

During execution:

| Key       | Action                       |
| --------- | ---------------------------- |
| `q`       | Quit                         |
| `m`       | Change view mode             |
| `d`       | Download / Upload / Both     |
| `t`       | Select theme                 |
| `n`       | Network processes            |
| `i`       | Change interface             |
| `I`       | Interface details            |
| `c`       | Change unit                  |
| `b`       | Bits/s ↔ Bytes/s             |
| `+` / `-` | Change interval              |
| `p`       | Pause/resume                 |
| `r`       | Reset peaks                  |
| `?`       | Help                         |

---

### JSON and automation

`flow` does not have to be used only as a TUI.

To get a single JSON output:

```bash
flow --json
```

To receive data continuously in JSON Lines:

```bash
flow --json-stream
```

This allows you to integrate `flow` with scripts, dashboards, and other terminal tools.

There is also:

```bash
flow --once
```

to get a single text output.

---


For more information, visit the [repository](https://github.com/programmersd21/flow).
