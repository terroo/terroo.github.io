---
layout: post
title: "Installing Lightworks on Gentoo"
date: 2018-09-08 12:38:58
image: '/assets/img/lightworks/lightworks-3.jpg'
description: 'Lightworks is software for editing and mastering digital video in various formats, including resolutions.'
main-class: 'multimedia'
tags:
- lightworks
- overlay
- ebuild
- gentoo
---

![Lightworks on Gentoo](/assets/img/lightworks/lightworks-3.jpg "Lightworks on Gentoo")

[Lightworks](https://www.lwks.com/) is software for editing and mastering digital video in various formats, including resolutions. The program is currently available for Windows, Linux and Mac OS. The development of an open source version was announced in May 2010. No source code for the program has been released yet.

In this tutorial we will see the steps to install in **Gentoo**, since it is not in the official **Portage** repository.

First you need to log in as root or use sudo to clone the repository with Git.

{% highlight bash  %}
git clone https://github.com/terroo/lightworks.git /usr/portage/media-video/lightworks
{% endhighlight  %}

Then we will enter the cloned repository and we will run the command to run ebuild.

{% highlight bash  %}
cd /usr/portage/media-video/lightworks
ebuild lightworks-14.5-r11.ebuild manifest clean merge
{% endhighlight  %}

And then we ran the command with emerge to install Lightworks:

{% highlight bash  %}
emerge lightworks
{% endhighlight  %}

As this is an unofficial ebuild, it will probably ask you to update your `/etc`, then run the command below and then install again

> In this case I'll use the `-a` parameter for Portage to ask us if you want to continue

![Lightworks on Gentoo](/assets/img/lightworks/lightworks-1.jpg "Lightworks on Gentoo")

{% highlight bash  %}
etc-update --automode -5
emerge -a lightworks
{% endhighlight  %}

![Lightworks on Gentoo](/assets/img/lightworks/lightworks-2.jpg "Lightworks on Gentoo")

See too: <https://bugs.gentoo.org/468204>

Enjoy!
