---
layout: post
title: "Install This Modern Network Scanner with TUI Mode"
date: 2026-03-25 10:43:42
image: '/assets/img/go/nibble.jpg'
description: "Built in Go, incredibly fast, and hassle-free."
tags:
- go
- tui
- terminal
- network
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

If you've used tools like [nmap](https://terminalroot.com.br/2018/07/escaneado-redes-com-nmap.html) and found them heavy, verbose, or too slow for simple tasks, **Nibble** solves exactly that problem.

**Nibble** is an open-source network scanner focused on simplicity, speed, and usability. It allows you to discover devices and services on your local network without needing to memorize complex commands or configure anything manually. It works on [GNU/Linux](https://terminalroot.com/tags#gnulinux), [macOS](https://terminalroot.com/tags#macos), and [Windows](https://terminalroot.com/tags#windows) (x86 and ARM).

---

## Installation

* `brew install backendsystems/tap/nibble`
* `pipx install nibble-cli`
* `npm install -g @backendsystems/nibble`
* `go install github.com/backendsystems/nibble@latest`

Or run it directly with:

{% highlight bash %}
npx @backendsystems/nibble
{% endhighlight %}

---

[Nibble repository](https://github.com/backendsystems/nibble).

