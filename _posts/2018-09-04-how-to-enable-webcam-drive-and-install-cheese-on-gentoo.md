---
layout: post
title: "How to Enable Webcam Drive and Install Cheese on Gentoo"
date: 2018-09-04 20:56:44
image: '/assets/img/webcam/cheese-gentoo.jpg'
description: 'Easily!'
featured-img: ../webcam/cheese-gentoo.jpg
tags:
- kernel
- gentoo
---

How to Enable Webcam Drive and Install Cheese on Gentoo

Make sure the device is actually on your computer. If yes, enter root and open the [Kernel](https://wiki.gentoo.org/wiki/Kernel/Configuration) menu

{% highlight bash %}
dmesg | grep -i camera
su
cd /usr/src/linux
make menuconfig
{% endhighlight %}

![How to Enable Webcam Drive and Install Cheese on Gentoo](/assets/img/webcam/1-min.jpg "How to Enable Webcam Drive and Install Cheese on Gentoo")

Enable the USB adapter, even if your webcam is embedded in the notebook

{% highlight bash %}
Device Drivers
    -> Multimedia support (MEDIA_SUPPORT [=y])
        -> Media USB Adapters (MEDIA_USB_SUPPORT [=y])
{% endhighlight %}

![How to Enable Webcam Drive and Install Cheese on Gentoo](/assets/img/webcam/2-min.jpg "How to Enable Webcam Drive and Install Cheese on Gentoo")

After exiting the kernel menu, make sure the `CONFIG_USB_VIDEO_CLASS` variable is set

{% highlight bash %}
cat .config | grep 'CONFIG_USB_VIDEO_CLASS'
{% endhighlight %}

If it is not, open it with a text editor and replace `#CONFIG_USB_VIDEO_CLASS is not set` with `CONFIG_USB_VIDEO_CLASS=y`

{% highlight bash %}
vim .config # /CONFIG_USB_VIDEO_CLASS , and change # and is not set by ^ and =y
{% endhighlight %}

![How to Enable Webcam Drive and Install Cheese on Gentoo](/assets/img/webcam/3-min.jpg "How to Enable Webcam Drive and Install Cheese on Gentoo")

Then compile the kernel and when you ask if you want to enable `USB and UVC`, type `yes [y]` and wait for compilation

{% highlight bash %}
make && make modules_install && make install # y and y
{% endhighlight %}

![How to Enable Webcam Drive and Install Cheese on Gentoo](/assets/img/webcam/4-min.jpg "How to Enable Webcam Drive and Install Cheese on Gentoo")

![How to Enable Webcam Drive and Install Cheese on Gentoo](/assets/img/webcam/5-min.jpg "How to Enable Webcam Drive and Install Cheese on Gentoo")

![How to Enable Webcam Drive and Install Cheese on Gentoo](/assets/img/webcam/6-min.jpg "How to Enable Webcam Drive and Install Cheese on Gentoo")

Reboot the system

{% highlight bash %}
reboot
{% endhighlight %}

Then just install the [Cheese](https://alternativeto.net/software/cheese/)

{% highlight bash %}
emerge -a cheese
{% endhighlight %}

![How to Enable Webcam Drive and Install Cheese on Gentoo](/assets/img/webcam/7-min.jpg "How to Enable Webcam Drive and Install Cheese on Gentoo")

# 😎
