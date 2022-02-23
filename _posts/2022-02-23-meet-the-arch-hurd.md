---
layout: post
title: "Meet the Arch Hurd"
date: 2022-02-23 10:47:15
image: '/assets/img/gnu/archhurd.jpg'
description: 'Arch Linux with the GNU/Hurd Kernel.'
tags:
- gnu
- archlinux
- os
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The [Arch Linux](https://terminalroot.com/tags#archlinux) is not always [Linux](https://terminalroot.com/tags#linux) it can have other kernels, like for example the [PacBSD](https://en.wikipedia.org/wiki/PacBSD) which is the **Arch** with the kernel of [FreeBSD](https://terminalroot.com/tags#freebsd) .

The [Arch Hurd](https://archhurd.org/) are the Arch packages with the kernel [GNU/Hurd](https://www.gnu.org/software/hurd/hurd.html) and logical with the [GNU](https://www.gnu.org/software/) tools .

The **Arch Hurd** project was founded on an Arch Linux forum thread in January 2010, and after a few weeks of much input, it has progressed to the point where it can boot into a virtual machine.

It aims to provide an Arch-like user environment ([BSD](https://terminalroot.com/tags#bsd) style init scripts , packages optimized for **i686**, use of the pacman packages, *rolling-release* and a [KISS](https://en.wikipedia.org/wiki/KISS_principle) ) configuration on the **Hurd** that is stable enough to use.

Despite having a small development team, a lot of progress has been made since its founding, such as booting on real hardware, packaging everything for a basic web server, and producing an unofficial graphical LiveCD.

In June 2011, Arch Hurd announced the successful integration of the **Device Driver Environment ( DDE )** — the framework for Linux drivers into the Hurd, which improves the distribution's network hardware support and makes it usable.

Let's get to know this operating system proposal that is still under development, but already deserves our attention.

---

# Testing the LiveCD on a virtual or physical machine
Download [download](https://archhurd.org/download/) from [file](https://files.archhurd.org/iso/2018.09.28/)
{% highlight sh %}
wget https://files.archhurd.org/iso/2018.09.28/archhurd-2018.09.28.img.xz
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

[Uncompress](https://terminalroot.com/how-to-extract-multiple-compressed-formats-with-a-single-command/) the file:
{% highlight sh %}
unxz archhurd-2018.09.28.img.xz
{% endhighlight %}
> Or `xd -d archhurd-2018.09.28.img.xz`

Transform `.img` into `.iso`, but first you will need [iat](https://www.berlios.de/software/iso9660-analyzer-tool), example installation on [Gentoo](https ://terminalroot.com/tags#gentoo) and also in [Debian](https://terminalroot.com/tags#debian), [Ubuntu](https://terminalroot.com/tags#ubuntu) and derivatives:
{% highlight sh %}
sudo emerge iat # Gentoo, Funtoo,...
sudo apt install iat # Debian, Ubuntu, Mint, ...
{% endhighlight %}

Once installed, convert it to `.iso`:
> If you want to test on [VirtualBox](https://terminalroot.com/how-to-install-macos-on-virtualbox-on-linux/).
{% highlight sh %}
iat -i archhurd-2018.09.28.img --iso -o archhurd-2018.09.28.iso
{% endhighlight %}
> This process may take a while.

Once finished, you just load it in your VirtualBox or even record a [USB](https://terminalroot.com/openbsd-65-usb-disk-installation/) or [DVD](https://dvdrw.com/) and install on your physical machine.

If you want to try on [QEMU](https://www.qemu.org/), run :
{% highlight sh %}
qemu-img create hd0.img 10G
qemu-system-x86_64 -m 1G -drive file=hd0.img -cdrom archhurd-2018.09.28.img
{% endhighlight %}

> **Tip**: Try the method with VirtualBox.


<!-- MINI ADS -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# Installation
The installation process is similar to [Arch Linux](https://terminalroot.com/wayfire-a-wm-3d-composer-installation-on-arch-linux/) and you can see the whole process on the page that has the [Guide installation](https://wiki.archlinux.org/title/Installation_guide) at: <https://wiki.archlinux.org/title/Installation_guide> .

For more information, visit the links below:

+ <https://archhurd.org/>
+ <https://archhurd.org/download/>
+ <https://www.gnu.org/software/hurd/hurd/running/arch_hurd.html>
+ <https://www.gnu.org/software/>
+ <https://www.gnu.org/software/hurd/hurd.html>
+ <https://en.wikipedia.org/wiki/Arch_Hurd>
+ <https://en.wikipedia.org/wiki/KISS_principle>
+ <https://wiki.archlinux.org/title/Installation_guide>
+ <https://www.berlios.de/software/iso9660-analyzer-tool>

---


