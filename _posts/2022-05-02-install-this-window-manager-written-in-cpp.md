---
layout: post
title: "Install this Window Manager written in C++"
date: 2022-05-02 10:00:30
image: '/assets/img/wm/wmderland.jpg'
description: 'With settings similar to i3wm and gaps like bspwm.'
tags:
- wm
- unixporn
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**WMDerland** is a Tiling Window Manager for the X11 server and uses space partitioning trees.

It was written in [C++](https://terminalroot.com/tags#cpp), has *gaps*(spaces) between windows and can be easily configured by a file with `INI` syntax.

---

# Installation
Before installing you from the following dependencies:

+ [Git](https://terminalroot.com/tags#git)
+ [LibX11](https://terminalroot.com/5-quick-tips-for-cpp#02-get-your-screen-resolution)
+ [G++](https://terminalroot.com/tags#g++)/[GCC](https://terminalroot.com/tags#gcc)
+ [Make](https://terminalroot.com/tags#make)
+ [CMake](https://terminalroot.com/tags#cmake)

Example of installing dependencies on systems using the APT package manager:

{% highlight sh %}
sudo apt install git libx11-dev g++ gcc make cmake
{% endhighlight %}

Now just clone, enter the directory and build with the following commands:

{% highlight sh %}
git clone https://github.com/aesophor/wmderland
wmderland cd
./build --install
{% endhighlight %}
> After the build is finished it will ask for your `sudo/doas/su` password to copy the files to the system directories.

You can also install via [AUR](https://aur.archlinux.org/packages/wmderland-git/) or [Overlay](https://github.com/aesophor/aesophor-overlay) on Arch or Gentoo, respectively:
{% highlight sh %}
yay -S wmderland-git
emerge -av x11-wm/wmderland
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

---

# Settings
After creating a directory named `wmderland` in `~/config` and copying the installed default configuration file:

{% highlight sh %}
mkdir -p ~/.config/wmderland
cp /etc/xdg/wmderland/config ~/.config/wmderland/.
{% endhighlight %}

Not [configuration file](https://github.com/aesophor/wmderland/blob/master/example/config) or [terminal emulator](https://terminalroot.com/the-10-best-terminal-emulators-for-your-linux/) default is [rxvt-unicode](http://software.schmorp.de/pkg/rxvt-unicode.html), if you didn't have it installed change the **line 178** of the configuration file and substitute `urxvt` for your terminal, for example if you use `gnome-terminal`:

{% highlight sh %}
sed -i 's/exec urxvt/exec gnome-terminal/g' ~/.config/wmderland/config
{% endhighlight %}

Now just log out, choose `wmderland`, which is already available, in your Display Manager and log in. If you log in with `~/.xinitrc` put this line at the same:

{% highlight sh %}
exec wmderland
{% endhighlight %}

---

#use
WMDerland uses the `Super` key as `mod`, so the most common keyboard shortcuts are:
+ **Super + Enter** - Opens the defined default terminal;
+ **Super + Shift + q** - Closes a window;
+ **Super + Shift + Esc** - Logs out of WMDerland;

And among others that you can also modify in [configuration file](https://github.com/aesophor/wmderland/blob/master/example/config) .

Some settings should already pre-define system not `config` the software installed on your system.

For more information visit the [official repository](https://github.com/aesophor/wmderland) .

