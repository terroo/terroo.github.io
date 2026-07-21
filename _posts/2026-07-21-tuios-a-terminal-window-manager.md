---
layout: post
title: "TUIOS: A Terminal Window Manager"
date: 2026-07-21 20:11:18
image: '/assets/img/terminal/tuios.jpg'
description: "🔳 Written in Go."
tags:
- terminal
- tui
- wm
- go
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---


**TUIOS** is a **[terminal](https://terminalroot.com/tags#terminal) multiplexer and window manager** that allows you to create multiple terminals and organize them in side-by-side layouts (BSP tiling).

---

## Installation
The project offers several installation methods:

**Homebrew**

{% highlight bash %}
brew install tuios
{% endhighlight %}

**Go**

{% highlight bash %}
go install github.com/Gaurav-Gosain/tuios/cmd/tuios@latest
{% endhighlight %}

**Installation script**

{% highlight bash %}
curl -fsSL https://raw.githubusercontent.com/Gaurav-Gosain/tuios/main/install.sh | bash
{% endhighlight %}

There are also pre-built binaries available for download and an official Docker image. The main requirement is to use a modern terminal with True Color support, with Ghostty, Kitty, and WezTerm being some of the recommended options.

## Basic Usage

After installing, simply start TUIOS:

{% highlight bash %}
tuios
{% endhighlight %}

Some useful shortcuts:

* `n` → creates a new terminal.
* `Ctrl + P` → opens the command palette.
* `Esc` → returns to window management mode.
* `z` → maximizes/restores the current panel.
* `Ctrl + B` → prefix key for advanced commands.

You can also create persistent sessions:

{% highlight bash %}
tuios new my-session
tuios attach my-session
{% endhighlight %}

This way, you can close the terminal and resume exactly where you left off later.

![TUIOS gif](https://github.com/Gaurav-Gosain/tuios/raw/main/assets/demo.gif)

---

For more information, visit the **repository:** <https://github.com/Gaurav-Gosain/tuios>
