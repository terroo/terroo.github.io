---
layout: post
title: "How to Install Vivaldi Browser in Gentoo"
date: 2018-07-24 17:50:08
image: '/assets/img/portage/vivaldi.gif'
description: 'Vivaldi is a freeware, cross-platform web browser developed by Vivaldi Technologies, a company founded by Opera Software co-founder.'
main-class: 'web'
tags:
- vivaldi
- emerge
- portage
---

[Vivaldi](https://vivaldi.com/) is a freeware, cross-platform web browser developed by Vivaldi Technologies, a company founded by Opera Software co-founder and former CEO Jon Stephenson von Tetzchner and Tatsuki Tomita. The browser was officially launched on April 12, 2016.The browser is aimed at staunch technologists, heavy Internet users, and previous Opera web browser users disgruntled by Opera's transition from the Presto layout engine to the Blink layout engine, which removed many popular features.Vivaldi aims to revive the old, popular features of Opera 12.The browser has gained popularity since the launch of its first technical preview.The browser has 1 million users as of January 2017.

[Package on Gentoo](https://packages.gentoo.org/packages/www-client/vivaldi)

## Install

{% highlight bash  %}
emerge -a www-client/vivaldi
{% endhighlight  %}

After prompt __Yes__ , [Portage](https://wiki.gentoo.org/wiki/Portage) will prompt you to update `/etc` , then running this is command:

![/assets/img/portage/vivaldi-gentoo.gif](/assets/img/portage/vivaldi-gentoo.gif "/assets/img/portage/vivaldi-gentoo.gif")

{% highlight bash  %}
etc-update --automode -5
{% endhighlight  %}

Then just run the command again

{% highlight bash  %}
emerge -a www-client/vivaldi
{% endhighlight  %}

![/assets/img/portage/vivaldi-gentoo-2.gif](/assets/img/portage/vivaldi-gentoo-2.gif "/assets/img/portage/vivaldi-gentoo-2.gif")

## Wait for compilation!

![/assets/img/portage/vivaldi.gif](/assets/img/portage/vivaldi-800x450.gif "/assets/img/portage/vivaldi.gif")
