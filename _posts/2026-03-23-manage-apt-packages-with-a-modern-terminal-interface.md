---
layout: post
title: "Manage APT packages with a modern terminal interface"
date: 2026-03-23 11:13:08
image: '/assets/img/go/aptui.jpg'
description: "Built with Go, works as a frontend for APT."
tags:
- go
- terminal
- tui
- gnulinux
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---


APTUI is a [TUI (Terminal User Interface)](https://terminalroot.com/tags#tui) written in [Go](https://terminalroot.com/tags#go) that acts as a frontend for APT.

> The concept is simple: **do everything you already do with APT, but without leaving the screen and without typing repetitive commands**.

Main features

* Real-time filtering as you type
* Fuzzy search (no need for exact name)
* Fallback to `apt-cache search`


---

## Installation

### Via Go

{% highlight bash %}
go install github.com/mexirica/aptui@latest
{% endhighlight %}

### Or via APT (Debian/Ubuntu)
> (custom repository available in the project)

Then just run:

{% highlight bash %}
aptui
{% endhighlight %}

---

For more information, visit the [repository](https://github.com/mexirica/aptui).
