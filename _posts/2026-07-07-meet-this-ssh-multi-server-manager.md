---
layout: post
title: "Meet This SSH Multi-Server Manager"
date: 2026-07-07 10:30:32
image: '/assets/img/go/lazyssh.jpg'
description: "🔳 Written in Go."
tags:
- go
- tui
- ssh
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

If you manage multiple servers via SSH, you should check out **LazySSH**.

It's a [terminal](https://terminalroot.com/tags#terminal)-based ([TUI](https://terminalroot.com/tags#tui)) [SSH](https://terminalroot.com/tags#ssh) manager, inspired by tools like *lazydocker* and *k9s*, that makes it easy to navigate and manage entries in your `~/.ssh/config` file.

+ Search by alias, IP, or tags
+ Pin favorite servers
+ Add, edit, and remove hosts directly from the interface
+ Ping to check availability
+ SSH connection with a single Enter
+ Sorting and filtering options
+ Preserves your `~/.ssh/config` by creating automatic backups before making changes

---

## Installation

### Homebrew (macOS and Linux)
{% highlight bash %}
brew install lazyssh
{% endhighlight %}

### Building with Go (Linux, macOS, and Windows)
If you already have Go installed:

{% highlight bash %}
git clone https://github.com/adembc/lazyssh.git
cd lazyssh
go build -o lazyssh ./cmd
{% endhighlight %}

Then, optionally, move the binary to a directory in your `PATH`:
{% highlight bash %}
sudo mv lazyssh /usr/local/bin/
{% endhighlight %}

Or install it directly using:
{% highlight bash %}
go install github.com/Adembc/lazyssh/cmd@latest
{% endhighlight %}

---

## Usage

After installation, just run:

{% highlight bash %}
lazyssh
{% endhighlight %}

The program automatically reads the file:

{% highlight text %}
~/.ssh/config
{% endhighlight %}

So all you need is to have your SSH hosts already configured as usual to start using it.

---

For more information, visit: [https://github.com/adembc/lazyssh](https://github.com/adembc/lazyssh)
