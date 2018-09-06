---
layout: post
title: "How to install bspwm on Gentoo"
date: 2018-09-06 16:11:21
image: '/assets/img/bspwm/screenshot.jpg'
description: 'bspwm is a lightweight, tiling, minimalist window manager that is written in C and represents its windows as leaves on a binary tree.'
main-class: 'gentoo'
tags:
- bspwm
- gui
- gentoo
---

![How to install bspwm on Gentoo](/assets/img/bspwm/screenshot.jpg "How to install bspwm on Gentoo")

[bspwm](https://github.com/baskerville/bspwm) is a lightweight, tiling, minimalist window manager that is written in C and represents its windows as leaves on a binary tree.

First of all you need to enable the flag examples in the `make.com` file for the variable `USE="examples"`. You can do this or you can use the [Gentoolkit](https://wiki.gentoo.org/wiki/Gentoolkit) `euse` command as follows

If you do not have Gentoolkit installed, install it with the following command

{% highlight bash  %}
emerge --ask app-portage/gentoolkit
{% endhighlight  %}

{% highlight bash  %}
euse -E examples
{% endhighlight  %}

> Note: that whenever euse adds a *flag* it automatically creates a backup of the configuration of your `make.conf`, in case you want to return to the previous configuration, remembering that to remove the flag that you added use the command `euse -D examples`. In this case, in the **USE** variable, examples will have a dash in front, indicating that it will no longer be used, if you want to remove it from the variable, manually by opening *make.conf* with a text editor, eg: `vim / etc / portage / make.conf`.

Okay, all right! Now finally we will install bspwm and along with it the sxhkd package will also be installed automatically, but just in case, we will also invoke it in the installation command

{% highlight bash  %}
emerge -a bspwm sxhkd
{% endhighlight  %}

After compiling, you will need to create the **bspwm** and **sxhkd** directories within the `~/config` directory of your home directory and copy the examples (bspwmrc and sxhkdrc) files you have in the `/usr/share/doc/` directory, so

> Note that the version here is **0.9.5**, check the corresponding version for your case

{% highlight bash  %}
mkdir ~/.config/bspwm
cp /usr/share/doc/bspwm-0.9.5/examples/bspwmrc ~/.config/bspwm/
mkdir ~/.config/sxhkd
cp /usr/share/doc/bspwm-0.9.5/examples/sxhkdrc ~/.config/sxhkd/
{% endhighlight  %}

Now exit the session and change the window manager to bspwm in your login manager (in this case I'm using lightdm) and press

`Super` + enter that will open the terminal and for more information use the manual:

{% highlight bash  %}
man bspwm
man bspc
{% endhighlight  %}

![How to install bspwm on Gentoo](/assets/img/bspwm/screenshot.jpg "How to install bspwm on Gentoo")

Enjoy!
