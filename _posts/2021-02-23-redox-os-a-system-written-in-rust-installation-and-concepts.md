---
layout: post
title: "Redox OS - A system written in Rust - Installation and Concepts"
date: 2021-02-23 17:59:08
image: '/assets/img/rust/redox.jpg'
description: 'It has a strong focus on security, stability and high performance.'
featured-img: ../rust/redox.jpg
tags:
- rust
- redoxos
---

![Redox OS - A system written in Rust - Installation and Concepts](/assets/img/rust/redox.jpg)

[Redox](https://redox-os.org/) is a microkernel operating system similar to [Unix](https://en.terminalroot.com.br/the-13-best-shell-for-your-linux-or-unix/) written in the Rust programming language, which has a strong focus on security, stability and high performance.

Redox is inspired by previous kernels and operating systems, such as SeL4, MINIX, Plan 9 and BSD. It is similar to [GNU](https://en.terminalroot.com.br/gnu-autotools-ultimate-tutorial-for-beginners/) and [BSD](https://en.terminalroot.com.br/openbsd-dual-boot-with-linux-single-partition/), but it is written in Rust. It is free and open source software distributed under an MIT license.

Redox was created by Jeremy Soller and was first published on April 20, 2015 on [GitHub](github.com/terroo).

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Components

Redox depends on a software ecosystem written in Rust by members of the project.

+ Redox kernel - largely derived from the concept of microkernels, with strong inspiration from MINIX
+ Ralloc - memory allocator
+ TFS file system - inspired by the ZFS file system
+ [Ion Shell](https://openbase.com/rust/ion-shell) - the underlying library for shells and command execution in Redox, and the standard shell
+ pkgutils - package manager
+ Orbital window system - monitor and window manager, configure the orbital: schema, manage the display and handle requests for window creation, redesign and event search
+ relibc - standard C library

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Command line applications

Redox supports graphical user interface (GUI) programs, including:

+ [NetSurf](https://www.netsurf-browser.org/) - a lightweight browser that uses its own layout engine
+ Calculator - a software calculator that provides functions similar to the Windows Calculator program
+ Editor - simple text editor, similar to Microsoft notepad
+ File browser - a file manager that displays icons, names, sizes and details of files; uses the launcher command to open files when they are clicked
+ Image viewer - image viewer for flat file types
+ Pixelcannon - 3D renderer, can be used to compare the Orbital desktop
+ Orbterm - ANSI terminal emulator

<!-- RETANGULO LARGO 2 -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="8549252987"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Official internet addresses

+ Official address: <https://www.redox-os.org/>
+ Current official repository: <https://gitlab.redox-os.org/redox-os/redox/>

# Installation

There are 2 ways to install Redox OS:

+ Compiling the source code, for this procedure see [this link](https://doc.redox-os.org/book/ch02-04-preparing-the-build.html) and [this link](https://doc.redox-os.org/book/ch02-04-preparing-the-build.html) also
+ Or by downloading the binary

In both cases you can test the Redox OS:

+ On a physical machine Although it can work, the developers themselves still do [not recommend it](https://doc.redox-os.org/book/ch02-03-real-hardware.html), because Redox is not yet ready for it

+ Or in a virtual machine, in this case, QEMU, which is exactly what we are going to do here.

# Downloading the Redox OS

First we will download the compressed file in which there is the binary to run on our machine, there are 4 options for download, among them:

+ `redox_0.6.0_harddrive-efi.bin.gz` - As the name implies, it has EFI support and is not a LiveDisk
+ `redox_0.6.0_harddrive.bin.gz` - It is not LiveDisk and does not have EFI support
+ `redox_0.6.0_livedisk-efi.iso.gz` - It is a LiveDisk with EFI support
+ `redox_0.6.0_livedisk.iso.gz` - A LiveDisk without EFI support.

Choose what you think is most convenient for you, for this video I chose the second option:
`redox_0.6.0_harddrive.bin.gz` - It is not LiveDisk and does not have EFI support

As this is the best way to test, I believe. You can download it directly through the browser through [this link](https://gitlab.redox-os.org/redox-os/redox/-/jobs/31100/artifacts/browse/build/img/) or run this command:

{% highlight bash %}
wget https://gitlab.redox-os.org/redox-os/redox/-/jobs/31100/artifacts/raw/build/img/redox_0.6.0_livedisk-efi.iso.gz
{% endhighlight %}

After that just extract the `.gz`:

+ The `-k` option is to keep the original file
{% highlight bash %}
gunzip -k redox_0.6.0_harddrive.bin.gz
{% endhighlight %}

Now let's rename it to use a ready-made command offered by the Redox OS documentation:
{% highlight bash %}
mv redox_0.6.0_harddrive.bin harddrive.bin 
{% endhighlight %}
All set, now let's run Redox OS!

# Testando o Redox OS
If you want to watch a video featuring all the resources provided in this article, watch the video below:
> The video is in Brazilian Portuguese, but you can use subtitles and translate into your language.

<iframe width="900" height="380" src="https://www.youtube.com/embed/7yZb3HLU1tU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- RETANGULO LARGO -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
+ 
