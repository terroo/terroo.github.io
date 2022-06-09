---
layout: post
title: "Hyprland - A Powerful Tiling WM with Animation made with C++"
date: 2022-06-09 09:48:16
image: '/assets/img/wm/hyprland.png'
description: 'A composer for Wayland reminiscent of the famous Compiz in a modern way.'
tags:
- wm
- unixporn
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Hyprland** is a Wayland Composer that has simple animations and is easily configurable by dynamic file.

It has several specific features, such as:
+ Binary space partitioning
+ dynamic mosaic
+ scratchpad
+ Low CPU usage
+ Easy to use
+ Support for multiple monitors
+ rounded edges
And among others.

Below is an example video of Hyrland working:

<link rel="stylesheet" href="/assets/css/plyr.css" />
<style>
#plyr-main { width:100%;}
</style>

<div id="plyr-main">
  <video id="player" playsinline controls data-poster="/assets/img/wm/hyprland.png">
  <source src="/assets/img/wm/hyprland.mp4" type="video/mp4" />
  </video>
</div>

<script src="/assets/js/plyr.js"></script>
<script>
  const player = new Plyr('#player');
</script>

---

# Installation
You can build Hyprland from scratch, for that you will need the build dependencies:
+ [Git](https://terminalroot.com/tags#git)
+ [g++](https://terminalroot.com/tags#gcc)
+ [GNU Make](https://terminalroot.com/tags#make)

And then just clone, compile and install:

{% highlight sh %}
git clone --recursive https://github.com/vaxerski/Hyprland
cd Hyrland
sudo make install
{% endhighlight %}

There are binary packages for [Arch](https://terminalroot.com/how-to-install-aur-packages-via-yay-on-arch-linux/) and [NixOS](https://www.youtube.com/watch?v=J8uH_6WY3WA) see [here](https://github.com/vaxerski/Hyprland/wiki/Installation) more Details.

---

# Settings
The configuration file follows the defaults and is in your home directory under `~/.config` , so use the cloned project example to create one:

{% highlight sh %}
mkdir -p ~/.config/hypr
cp examples/hyprland.conf ~/.config/hypr/
{% endhighlight %}
> Change the file settings as you wish, for more details see [here](https://github.com/vaxerski/Hyprland/wiki/Configuring-Hyprland) and for the first steps go to [this](https://github.com/vaxerski/Hyprland/wiki/Quick-start) link.

Access the official Hyprland repository on GitHub:
+ <https://github.com/vaxerski/Hyprland>

