---
layout: post
title: "OpenBSD 6.5 - USB Disk Installation"
date: 2019-05-30 16:47:26
image: '/assets/img/openbsd/openbsd-usb.jpg'
description: 'This video is a compilation of 3 videos that shows the complete process.'
main-class: 'openbsd'
tags:
- openbsd
---

![OpenBSD - USB Disk Installation](/assets/img/openbsd/openbsd-usb.jpg)

The installation of [OpenBSD](https://openbsd.org/) is very simple when you use the default methods, but some people get in the way when they install via USB disk (pendrive). In this video/article we will show you how to do it.

After booting the pendrive the installation process is the same, differing only in some parts during the installation.

During the installation process it is necessary to pay attention to the following step: **Where to install the sets ?** When this question appears:

{% highlight bash %}
Lets install the sets!
Location of sets? (cd0 disk http or 'done') [cd0]
{% endhighlight %}

In this case it is necessary to enter the word **disk**, because WE WILL INSTALL THE USB DISK (PENDRIVE), type **disk** and then press [ENTER]

{% highlight bash %}
Lets install the sets!
Location of sets? (cd0 disk http or 'done') [cd0] disk
{% endhighlight %}

## Useful commands and links

+ `sudo VBoxManage internalcommands createrawvmdk -rawdisk /dev/sdb -filename USB-Boot-Disk.vmdk`
+ `sudo chown $USER:$USER USB-Boot-Disk.vmdk`
+ `sudo usermod -a -G vboxusers [nome_do_usuário]`
+ `sudo usermod -a -G disk [nome_do_usuário]`
+ `sudo dd if=install65.fs of=/dev/sdb status=progress`
+ `growisofs -dvd-compat -speed=8 -Z /dev/cdrom=install65.iso`
+ `cdrecord -v speed=8 dev=1,0,0 -eject -data install65.iso`
+ `lsblk`
+ `df -h`
+ `sudo mkfs.fat /dev/sdbX -n OPENBSD || man 8 mkfs`
+ <http://bit.ly/2HLkvxt>
+ <https://terminalroot.com.br/2019/05/openbsd-instalacao-pelo-disco-usb.html>
+ <http://openbsd.org/>
+ <https://ftp.openbsd.org/pub/OpenBSD/songs/song30.mp3>
+ <https://www.openbsd.org/images/poster33.jpg>

## Watch The Video
{% include youtube-legends-tutorial.html %}

<iframe width="920" height="400" src="https://www.youtube.com/embed/EWWD56ZPVoQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

