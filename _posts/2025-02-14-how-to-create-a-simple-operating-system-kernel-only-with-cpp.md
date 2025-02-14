---
layout: post
title: "How to Create a Simple Operating System (Kernel Only) with C++"
date: 2025-02-14 12:00:11
image: '/assets/img/cpp/so.jpg'
description: "🚀 The boot was performed on the physical machine and we were able to print directly to the VGA with a 32-bit system made with C++ and GNU Assembler."
tags:
- cpp
- assembly
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

🔊 In this video I showed step by step the process to create a *kernel* which is the basis for an *Operating System*. The boot was performed on the **physical machine** and we were able to print directly to the **VGA** with a **32-bit** system made with [C++](https://terminalroot.com/tags#cpp) and [GNU Assembler](https://terminalroot.com/tags#assembly).

---

## To build on your machine
Use the package manager to install [GCC](https://terminalroot.com/tags#gcc), [make](https://terminalroot.com/tags#make), [as](https://terminalroot.com/tags#assembly) and [ld](https://terminalroot.com/tags#gnu)
{% highlight bash %}
sudo apt install build-essential
{% endhighlight %}

Clone the repository and compile:

Then just compile:
{% highlight bash %}
git clone https://github.com/terroo/terminalroot-os
cd terminal-root-os/
make
{% endhighlight %}

## To test on QEMU, for example
{% highlight bash %}
sudo apt install qemu-kvm
{% endhighlight %}

And then test:
{% highlight bash %}
qemu-system-i386 -kernel terminal-root-os.bin
{% endhighlight %}
> Even with `qemu-system-x86-64 -kernel terminal-root-os.bin`.

If you have a virtual or physical machine with **GRUB Legacy**, you can move to `/boot` and edit `grub.cfg`:
> Example:

{% highlight bash %}
sudo mv terminal-root-os.bin /boot/
sudo vim /boot/grub/grub.cfg
{% endhighlight %}

Add a new entry to GRUB:
{% highlight bash %}
### BEGIN TERMINALROOTOS

menuentry 'Terminal Root OS' {
  multiboot /boot/terminal-root-os.bin
  boot
}
### END TERMINALROOTOS
{% endhighlight %}

---

## Watch the Video
> The video is in Portuguese, but you can use Youtube's automatic translator

<iframe width="1243" height="699" src="https://www.youtube.com/embed/3GwRF0IK1Ks" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

**Terminal Root OS** repository on GitHub: <https://github.com/terroo/terminalroot-os>.
