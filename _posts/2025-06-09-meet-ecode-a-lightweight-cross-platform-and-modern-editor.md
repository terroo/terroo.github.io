---
layout: post
title: "Meet Ecode: A Lightweight, Cross-Platform, and Modern Editor"
date: 2025-06-09 10:35:09
image: '/assets/img/lua/ecode.jpg'
description: "🌒 Built with Lua and available for Windows, macOS, Haiku, GNU/Linux & BSD."
tags:
- editors
- lua
- cpp
- sdl
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Ecode** is a lightweight code editor written in [Lua](https://terminalroot.com/tags#lua), focused on performance and smoothness, built with the hardware-accelerated GUI from the [eepp library](https://github.com/SpartanJ/eepp) written in [C++](https://terminalroot.com/tags#cpp). It is MIT-licensed, has over 1,100 stars, and contributes to the development of `eepp`.

**Key Features**

* Minimalist, portable, and highly responsive interface  
* Syntax highlighting (100+ languages, semantic support via LSP)  
* Multiple cursors, embedded terminal, minimap  
* LSP support, debugging via Debug Adapter Protocol  
* Git integration (status, blame, branches, diffs)  
* Command palette, autocomplete, customizable lint/format  
* Fast global search and replace (regex, Lua, Perl)  
* Window splitting, soft wrap, code folding  
* Sessions with auto snapshot/backup  
* Theme support, GUI scaling, light/dark modes  
* Plugins: AI Assistant, Discord Rich Presence, among others

Compatible with [Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos), [Haiku](https://terminalroot.com/meet-haiku-an-operating-system-written-in-cpp/), [GNU](https://terminalroot.com/tags#gnu)/[Linux](https://terminalroot.com/tags#gnulinux), and [BSD](https://terminalroot.com/tags#bsd).


<!-- SQUARE - GAMES ROOT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## Installation
You can download it directly from the *releases* page, for example:

+ [ecode-windows-0.7.1-x86_64.zip](https://github.com/SpartanJ/ecode/releases/download/ecode-0.7.1/ecode-windows-0.7.1-x86_64.zip)  
+ [ecode-freebsd-0.7.1-x86_64.tar.gz](https://github.com/SpartanJ/ecode/releases/download/ecode-0.7.1/ecode-freebsd-0.7.1-x86_64.tar.gz)  
+ [ecode-haiku-0.7.1-x86_64.tar.gz](https://github.com/SpartanJ/ecode/releases/download/ecode-0.7.1/ecode-haiku-0.7.1-x86_64.tar.gz)  
+ [ecode-macos-0.7.1-arm64.dmg](https://github.com/SpartanJ/ecode/releases/download/ecode-0.7.1/ecode-macos-0.7.1-arm64.dmg)  
+ [ecode-macos-0.7.1-x86_64.dmg](https://github.com/SpartanJ/ecode/releases/download/ecode-0.7.1/ecode-macos-0.7.1-x86_64.dmg)  
+ [ecode-linux-0.7.1-x86_64.AppImage](https://github.com/SpartanJ/ecode/releases/download/ecode-0.7.1/ecode-linux-0.7.1-x86_64.AppImage)  
+ [ecode-linux-0.7.1-x86_64.tar.gz](https://github.com/SpartanJ/ecode/releases/download/ecode-0.7.1/ecode-linux-0.7.1-x86_64.tar.gz)

ARM builds are also available for all supported operating systems. Example installation for GNU/Linux distros:

{% highlight bash %}
tar xvf ecode-linux-*.tar.gz
sed -i 's/Icon.*/Icon=\/opt\/ecode\/ecode.png/' ecode/ecode.desktop
sudo cp ecode/ecode.desktop /usr/share/applications/
sudo mv ecode/ /opt/
sudo ln -s /opt/ecode/ecode.bin /usr/local/bin/ecode
sudo chmod +x /usr/local/bin/ecode
sudo ln -s /opt/ecode/libs/libeepp.so /usr/lib/libeepp.so
sudo ln -s /opt/ecode/libs/libSDL2-2.0.so.0 /usr/lib/libSDL2-2.0.so.0
`{% endhighlight %}

Verify installation:

{% highlight bash %}
ecode --version
{% endhighlight %}

![Ecode](/assets/img/lua/ecode-run.jpg)

---

Ecode is a solid proposal for a modern editor: efficient, lightweight, with advanced features and a responsive interface. If you're looking for performance without sacrificing functionality, it's worth trying. As it's still evolving, it's ideal for personal use and projects; for critical environments, use with caution.

For more information visit: [https://github.com/SpartanJ/ecode](https://github.com/SpartanJ/ecode)

