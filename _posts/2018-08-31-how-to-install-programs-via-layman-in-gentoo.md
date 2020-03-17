---
layout: post
title: "How to Install Programs via Layman on Gentoo"
date: 2018-08-31 21:54:25
image: '/assets/img/portage/layman.jpg'
description: 'Layman is a ebuild repository management tool. It offers a single command-line interface to repository management for end users.'
featured-img: ../portage/layman.jpg
tags:
- gentoo
- layman
---

First you need to install, logically, the [layman](https://wiki.gentoo.org/wiki/Layman)

{% highlight bash  %}
emerge -a layman
{% endhighlight  %}

Then create a configuration file `make.conf` for layman

{% highlight bash  %}
mkdir -p /var/lib/layman/
touch /var/lib/layman/make.conf
{% endhighlight  %}

After that you need to include the configuration file that we created for layman in Portage's `make.conf`

{% highlight bash  %}
echo 'source /var/lib/layman/make.conf' >> /etc/portage/make.conf
{% endhighlight  %}

Synchronize data

{% highlight bash  %}
layman -S
emerge --sync
{% endhighlight  %}

Now add a layman repository, [click here to see the full list of repositories available](https://overlays.gentoo.org/) or run `sudo layman -L` to see the full list of repositories available locally.

For this example I'm going to add the [raiagent](https://github.com/leycec/raiagent) repository

{% highlight bash  %}
layman -a raiagent # [y/n] y
{% endhighlight  %}

After doing all the above procedure, suppose I want to install the [Powerline](https://github.com/powerline/powerline) that is in the raiagent repository that I added, so, just I install it

{% highlight bash  %}
emerge -a app-misc/powerline
{% endhighlight  %}

Sometimes when you try to install some application, Portage asks that after the first attempt, you run the command `etc-update`, if this happens to you, run the command below and again run the command to install the desired application...

{% highlight bash  %}
etc-update --automode -5
emerge -a app-misc/powerline
{% endhighlight  %}

If you want to remove a layman, run the command: `sudo layman -d [name-]`, example:
{% highlight bash %}
sudo layman -d raiagent
{% endhighlight %}


If there is a repository that exists but is not on the list, get the [xml](https://raw.githubusercontent.com/SonicFrog/overlay/master/sonicfrog.xml) from the [maintainer](https://github.com/SonicFrog/overlay/blob/master/sonicfrog.xml) and add it manually, [example](https://forums.gentoo.org/viewtopic-t-898416-start-0.html):
{% highlight bash %}
layman -a bgo-overlay -o http://gpo.zugaina.org/lst/gpo-repositories.xml -f
{% endhighlight %}
> `-f` is optional.

Any questions, use the comments!
