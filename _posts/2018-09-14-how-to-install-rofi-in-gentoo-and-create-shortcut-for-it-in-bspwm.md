---
layout: post
title: "How to install rofi on Gentoo and create shortcut for it on bspwm"
date: 2018-09-14 20:47:36
image: '/assets/img/tips/rofi1.png'
description: 'A window switcher, Application launcher and dmenu replacement.'
featured-img: ../tips/rofi1.png
tags:
- rofi
- gentoo
- bspwm
---

[Rofi](https://github.com/DaveDavenport/rofi/), like *dmenu*, will provide the user with a textual list of options where one or more can be selected. This can either be, running an application, selecting a window or options provided by an external script.

On Gentoo just use the command below with root or add the sudo in the normal user

{% highlight bash %}
emerge rofi
{% endhighlight %}

To test to see if it is working normally, run the command:

{% highlight bash %}
rofi -show run
{% endhighlight %}

![Rofi](/assets/img/tips/rofi1.png "Rofi")

To create a shortcut for the `super + d` key combination to open Rofi, simply edit the `vim .config/sxhkd/sxhkdrc` configuration file and insert the following line:

{% highlight bash %}
super + d
	rofi -show run
{% endhighlight %}

For you to customize rofi theme, run the commands below in order

{% highlight bash %}
mkdir ~/.config/rofi
rofi -dump-config > ~/.config/rofi/config.rasi
wget https://raw.githubusercontent.com/ricwtk/rofi-themes/master/input-emph-topbar.rasi -O 
~/.config/rofi/input-emph-topbar.rasi
sed -i '/configuration {/a theme:  "input-emph-topbar";' ~/.config/rofi/config.rasi
{% endhighlight %}

Okay, now whenever you type `super + d` open Rofi.

![Rofi](/assets/img/tips/rofi2.png "Rofi")
