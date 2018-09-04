---
layout: post
title: "Installing and Configuring sudo on Gentoo"
date: 2018-09-04 19:31:37
image: '/assets/img/tips/sudo-gentoo-min.jpg'
description: 'It is not always good to use root constantly, for this sudo exists.'
main-class: 'sudo'
tags:
- sudo
- gentoo
---

![Installing and Configuring sudo on Gentoo](/assets/img/tips/sudo-gentoo-min.jpg "Installing and Configuring sudo on Gentoo")

Installing and Configuring sudo on Gentoo

It is not always good to use root constantly, for this sudo exists. To install it simply run the command below, `-a` is optional which is the same as `--ask`, Portage asks you if you want to continue and also shows the package(s) that will be compiled.

{% highlight bash %}
su
emerge -a sudo
{% endhighlight %}


After that fill in the field *[NAME_YOUR_USER]* with your user number

{% highlight bash %}
export my_user="[NAME_YOUR_USER]"
{% endhighlight %}

Then, run the command below

{% highlight bash %}
sed -i "/^root ALL=(ALL) ALL$/a ${my_user} ALL=(ALL) ALL" /etc/sudoers
{% endhighlight %}

The first time you use sudo this message will appear:

{% highlight txt %}
We trust you have received the usual lecture from the local System
Administrator. It usually boils down to these three things:
 
    #1) Respect the privacy of others.
    #2) Think before you type.
    #3) With great power comes great responsibility.
 
Password: ## (Enter the user password, not root!)
{% endhighlight %}

Now just use sudo with the password of the user you chose!

More information: https://wiki.gentoo.org/wiki/Sudo
