---
layout: post
title: "Meet Devuan GNU+Linux, a Debian without systemd"
date: 2020-06-12 15:21:50
image: '/assets/img/distros/devuan.jpg'
description: 'Devuan is a fork of Debian that uses sysvinit or OpenRC instead of systemd, which is the default in newer Debian releases. The Devuan development team aim to maintain compatibility with other init systems in the future and not detach Linux from other Unix systems.'
featured-img: ../distros/devuan.jpg
tags:
- devuan
- debian
- distros
- linux
---

![Meet Devuan GNU+Linux, a Debian without systemd](/assets/img/distros/devuan.jpg)

---

Hail, guys! Marcos here.

It's been a while since I met Devuan, but the first version I tested was **ASCII**, if I'm not mistaken it was the second version since its release.

Although the version name appears to be based on the character encoder, the ASCII table, in fact, the Devuan version names are based on planet names, with the exception of the first version which, like Debian, was the Jessie version, in fact it was around that time that old school developers, that is, the old guys left Debian to create the Devuan project, which is already present on several commercial servers and desktops on the planet. And there are already several distros based on Devuan, some of them are:

+ **EterTICs:** 100% free distribution developed to meet the needs of radio stations.
+ **GNU / Linux Exe:** Desktop-oriented distribution with Trinity Desktop.
+ **Gnuinos:** 100% free distribution oriented to modest computers, by default comes with Openbox.
+ **MIYO:** Minimalist distribution giving the user the power to install only what they need.
+ **Nelum-Dev1:** Distribution oriented to the work area with three flavors; Openbox, MATE and XFCE.
+ **Refracta:** Distribution built with home users in mind, ready for remastering.
+ **Star:** Distribution that allows remastering using a live CD.
+ **Heads:** The Tails competitor without the controversial systemd.
+ **Good Life Linux:** Distribution built with only the essentials, without any additional "swelling".
+ **Crowz:** Provides hybrid images (32/64 bits) live with Fluxbox, Openbox and JWM.
+ **Dowse:** Built to be used as a smart digital networking device for home local area networks (LANs).
+ **DecodeOS:** Designed for use of micro-services in anonymous network clusters to automatically build p2p networks
+ **Maemo Leste:** Designed for use on Tablets and Smartphones.
+ **Crunkbong:** A live image in the good old style of "Swiss Army Knife".
+ **FluXuan:** A workspace with Fluxbox designed to be used on old machines.
+ **Dyne: bolic:** A live desktop for editors and multimedia producers containing only 100% free applications.
+ **Virage GNU / Linux:** Optimized distribution for artists and audio and video producers.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

And many others. The Devuan community is already huge too!

The reason for the shutdown of the old developers, as everyone already expects, was systemd. Not because systemd is bad, in fact I don't even know how the new versions are doing, it seems that it has improved, but because of the monopoly. Linux and BSD users don't like a monopoly. And systemd wants to become everything. On that day I read an article that said he intends to become a user in the `/home` directory. And this generates disgust for many.

Like Debian, Devuan proved to be quite stable and not so friendly for beginners, so be careful if you think you will find facilities.

Currently Devuan is in its third version called **Beowulf** which is based on Debian 10 Buster, however, Devuan has its own repositories. The correct system name is **Devuan GNU+Linux**

The installation of Devuan (the *netinst* version) is identical to that of Debian, but there is no *Graphical Install* option, in fact I don't even know why that option exists, I don't know anyone who uses that. The only exception is that instead of just listing only graphical interfaces as an option during installation, Devuan also lists 2 init systems for you to choose from, sysvinit and the one still being tested OpenRC, which was just what I chose along with the Interface MATE graphics (GNOME 2 fork), wanted to feel a little nostalgia.

On the download option website, you will have several mirrors to download the system via HTTP and FTP, but there is also a torrent option. The difference is that this torrent will download everything:

- 1.2GB full DVD version
- separate version on 6 CDs, if I'm not mistaken.
- netinst version

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

And all of this in 64 and 32-bit, that is, it is a hell of a lot, it pays off more to download the direct netinst iso that add up to a maximum of 380MB, but the download of packages can also take a while, depending on the mirror.

Remembering that the full DVD version does not download packages during installation and the way to install is via Yad and the XFCE is pre-installed.

Well, here I am after reinstalling **Devuan Beowulf** and let's get to know some more features of this distro. And we will take the opportunity to give a customized MATE of Devuan.

```sh
sudo apt update
```

In addition to the standard MATE applications, Devuan also offers LibreOffice and GIMP. The repository is very complete, you can still customize your environment with a Tilling Window Manager such as: i3wm, bspwm, PekWM and several others.

Well, I particularly liked Devuan a lot. The first time I tested it I didn't think it was so cool, but this time I was totally satisfied with everything. And the OpenRC, although still being tested at Devuan, behaved very well. If you are thinking of a stable system, similar to Debian and without systemd, Devuan is certainly the best option.

If you want to watch a video I made of Devuan, remembering that the video is in Portuguese, but I have completely revised the subtitles and it is perfect for those who want to activate them, see how to change them below.

# Watch the video

{% include youtube-legends-tutorial.html %}

<iframe width="1246" height="701" src="https://www.youtube.com/embed/BTkjlG2lSuA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in -picture" allowfullscreen></iframe>

Thanks!
