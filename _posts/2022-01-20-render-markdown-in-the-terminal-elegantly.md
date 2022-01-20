---
layout: post
title: "Render Markdown in the terminal elegantly"
date: 2022-01-20 07:34:43
image: '/assets/img/markdown/glow.jpg'
description: 'Written in Go and with several configuration options.'
tags:
- markdown
- go
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Glow** is a terminal-based [markdown](https://terminalroot.com/tags#markdown) file reader designed from the ground up to enhance the beauty - and power - of [CLI](https ://terminalroot.com/tags#commands).

Use it to discover markdown files, read documentation directly from the command line, and store markdown files in your own private collection so you can read them on the go.

By the way, all stored data is end-to-end encrypted: only you can decrypt it.

---

# Installation
Glow is available for different operating systems and [distributions](https://terminalroot.com/tags#distros) [Linux](https://terminalroot.com/tags#linux), see the procedure accordingly with your case:

{% highlight sh %}
# macOS or Linux
brew install glow

# macOS (with MacPorts)
sudo port install glow

# Arch Linux (btw)
yay -S glow

# Void Linux
xbps-install -S glow

# Nix
nix-env -iA nixpkgs.glow

# FreeBSD
pkg install glow

# solution
eopkg install glow

# Windows (with Scoop)
scoop install glow

# Android (with termux)
pkg install glow
{% endhighlight %}


<!-- SQUARE - GAMES ROOT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

If none of the above options are available on your system then compile using [Go](https://terminalroot.com/tags#go):
{% highlight sh %}
git clone https://github.com/charmbracelet/glow.git
cd glow
go build
sudo mv ~/go/bin/glow /usr/local/bin/
{% endhighlight %}

---

# Usage
To display a markdown file just pass it as a parameter:
{% highlight sh %}
glow file.md
{% endhighlight %}

If you want to paginate the output use the `-p` parameter:
{% highlight sh %}
glow -p file.md
{% endhighlight %}

If you want to view with a larger or smaller width, enter using `-w [num]`:
{% highlight sh %}
glow -w 150 file.md
{% endhighlight %}

You can also view files online:
{% highlight sh %}
glow https://host.tld/file.md
{% endhighlight %}

For more information and usage tips use the `glow help`, output:
{% highlight sh %}
Render markdown on the CLI, with pizzazz!

Usage:
  glow [SOURCE|DIR] [flags]
  glow [command]

Available Commands:
  config Edit the glow config file
  help Help about any command
  stash Stash to markdown

Flags:
  -a, --all show system files and directories (TUI-mode only)
      --config string config file (default /home/marcos/.config/glow/glow.yml)
  -h, --help help for glow
  -l, --local show local files only; no network (TUI-mode only)
  -p, --pager display with pager
  -s, --style string style name or JSON path (default "auto")
  -w, --width uint word-wrap at width

Use "glow [command] --help" for more information about a command.
{% endhighlight %}

For more information, access the project's [repository](https://github.com/charmbracelet/glow).


