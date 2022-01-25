---
layout: post
title: "Meet GENODE, a framework to create Operating Systems"
date: 2022-01-25 16:44:27
image: '/assets/img/os/genode.jpg'
description: 'Written in C++ and safely reduces build complexity!'
tags:
- cpp
- unix
- linux
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Genode OS Framework** is a toolkit for building highly secure special-purpose operating systems written in [C++](https://terminalroot.com/tags#cpp).

It scales from embedded systems with as little as 4MB of memory to highly dynamic general-purpose workloads.

Genode is based on a recursive system structure. Each program runs in a dedicated sandbox and is given only the access rights and features necessary for its specific purpose.

Programs can create and manage sub-sandboxes with their own resources, forming hierarchies where policies can be applied at each level. The framework provides mechanisms to allow programs to communicate with each other and negotiate their resources, but only in strictly defined ways.

Thanks to this rigid regime, the attack surface of critical security functions can be reduced by orders of magnitude compared to contemporary operating systems.

The framework aligns L4 building principles with the [Unix](https://terminalroot.com/tags#unix) philosophy . In line with the Unix philosophy, Genode is a collection of small building blocks from which sophisticated systems can be composed.

But unlike Unix, these building blocks include not just applications, but all the classic operating system functionality, including kernels, device drivers, file systems, and protocol stacks.

# Resources
+ CPU architectures: x86 (32-bit and 64-bit), ARM (32-bit and 64-bit), RISC-V
+ Kernels: most members of the L4 family (NOVA, seL4, Fiasco.OC, OKL4 v2.1, L4ka :: Pistachio, L4 / Fiasco), Linux and a custom kernel.
+ Virtualization: VirtualBox (on NOVA), a custom virtual machine monitor for ARM and a custom runtime for Unix software

100+ [components](https://genode.org/documentation/components) ready to use!

# Download
To download Genode, just access [this link](https://genode.org/download/index) there will be 4 options, and **Sculpt OS** is a general purpose operating system based on Genode, system images out of the box allow you to use Genode without having to build the system from scratch.

You can download the image quickly with [wget](https://terminalroot.com/large-list-of-gnulinux-commands-by-categories/):


{% highlight sh %}
wget https://genode.org/files/sculpt/sculpt-21-10.img
{% endhighlight %}
> [Hash](https://terminalroot.com/what-is-and-how-to-generate-a-hash/) SHA256: `a6c1cf9b438f084fa9fe6b8dabc256e5f62c51eecdcfecb47fd262427a4d1444`

Create a partition and copy it with the command [dd](https://terminalroot.com/list-of-30-modern-alternatives-to-unix-commands/):
> Example:
{% highlight sh %}
sudo dd if=sculpt-21-10.img of=/dev/sdx bs=1M conv=fsync
{% endhighlight %}

For more information and usage details use the [documentation](https://genode.org/documentation/index) which by the way is very intuitive!

Official website: <https://genode.org/> and [official repository](https://github.com/genodelabs/genode) .



