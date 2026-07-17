---
layout: post
title: "Meet this Open Source Launcher inspired by Raycast"
date: 2026-07-17 19:20:53
image: '/assets/img/qt/vicinae.jpg'
description: "🔳 Written in C++ and Qt"
tags:
- cpp
- qt
- gnulinux
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

If you enjoy the Raycast experience but use Linux, you've probably already looked for a truly fast, modern, and extensible alternative. **Vicinae** was created exactly with that goal in mind.

Vicinae is a launcher written in [C++](https://terminalroot.com.br/tags#cpp) and [Qt](https://terminalroot.com/tags#qt), offering native performance, low resource consumption, and compatibility with various extensions from the Raycast ecosystem available for [GNU/Linux](https://terminalroot.com/tags#gnulinux).

Available features include:

+ Application search and launching
+ Clipboard history
+ File search
+ Built-in calculator
+ Emoji picker
+ Quick window switching
+ Volume control
+ Browser tab search
+ Text expansion (snippets)
+ Installed fonts navigation

---

## Installation
There are several ways to install it.

+ AppImage

Download the AppImage from the project's Releases page:

[Vicinae GitHub Releases](https://github.com/vicinaehq/vicinae/releases)

Then (example for `x86_64`):
{% highlight bash %}
chmod +x vicinae-vX.Y.Z.AppImage
./vicinae-vX.Y.Z.AppImage server
{% endhighlight %}

+ If your system does not have FUSE support:

{% highlight bash %}
./vicinae-vX.Y.Z.AppImage --appimage-extract
cd squashfs-root
./AppRun
{% endhighlight %}

+ You can also download the file:

{% highlight bash %}
vicinae-linux-x86_64-vX.Y.Z.tar.gz
{% endhighlight %}

Then:

{% highlight bash %}
tar -xzf vicinae-linux-x86_64-vX.Y.Z.tar.gz
{% endhighlight %}

Copy the executable to a directory in your `PATH`, such as:

{% highlight bash %}
~/.local/bin
{% endhighlight %}

---

## Usage

After installation, the first step is to start the service:

{% highlight bash %}
vicinae server
{% endhighlight %}

If an instance is already running:

{% highlight bash %}
vicinae server --replace
{% endhighlight %}

Once the server is running, simply use the configured shortcut (or create one in your graphical environment) to open the interface.

You can also control the launcher via the command line:

{% highlight bash %}
vicinae open
{% endhighlight %}

Close:

{% highlight bash %}
vicinae close
{% endhighlight %}

Toggle between open and closed:

{% highlight bash %}
vicinae toggle
{% endhighlight %}

### Calculator

Type an expression:

{% highlight bash %}
125 * 48
{% endhighlight %}

or

{% highlight bash %}
sqrt(144)
{% endhighlight %}

The result appears immediately. Other features include: emoji, snippets, ...

---

For more information, visit: [the repository](https://github.com/vicinaehq/vicinae).
