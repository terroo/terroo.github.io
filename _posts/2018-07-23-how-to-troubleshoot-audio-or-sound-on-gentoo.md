---
layout: post
title: "How to Troubleshoot Audio or Sound on Gentoo"
date: 2018-07-23 00:13:54
image: '/assets/img/media/alsamixer.gif'
description: 'Linux controls the computer’s audio with a system that identifies the architecture and plays the audio behind the device’s drive.'
main-class: 'media'
tags:
- alsa
- sound
---

![How to Troubleshoot Audio or Sound on Gentoo](/assets/img/media/alsamixer.gif "How to Troubleshoot Audio or Sound on Gentoo")

## Linux controls the computer’s audio with a system that identifies the architecture and plays the audio behind the device’s drive.

The current component that the Linux kernel uses to perform this function is **ALSA which stands for Advanced Linux Sound Architecture**.

Normally, [ALSA](https://wiki.gentoo.org/wiki/ALSA) supports up to eight boards numbered 0 through 7. Each board is a physical or logical core device with input, output or sound control capability and can also be addressed by its id which is an explanatory string such as Headset or ICH9 .

If the board is omitted, this means board 0 or default board, where most of the sounds are played and that is determined by the operating system. Plates have numbered devices starting with 0.

When you install Gentoo, these devices generally do not automatically recognize for various reasons

- 1 — You did not properly enable the device drive in the kernel. So first make sure the device is enabled in the Linux Kernel

{% highlight bash %}
lspci | grep -i audio
cd /usr/src/linux && make menuconfig
{% endhighlight %}

Activate the following kernel options: 

![/assets/img/media/kernel-alsa.gif](/assets/img/media/kernel-alsa.gif "/assets/img/media/kernel-alsa.gif")

The `lsmod` command can be helpful.

If the system has more than 8 sound outputs (Each HDMI output on a GPU will count as one), the max number of sound cards will need to be increased:

![/assets/img/media/kernel-alsa-2.gif](/assets/img/media/kernel-alsa-2.gif "/assets/img/media/kernel-alsa-2.gif")


- 2 — Next you need to check if the devices are being listed

{% highlight bash %}
cat /proc/asound/cards
{% endhighlight %}

- 3— Compile alsautils so you can see the devices and configure them

{% highlight bash %}
emerge --ask media-sound/alsa-utils
{% endhighlight %}

- 4 — With the normal user (not the root) run the command below and read the tips that appear (for example, F6 to list the sound cards)

{% highlight bash %}
# normal user, dont'n run root
alsamixer
{% endhighlight %}

![/assets/img/media/alsamixer.gif](/assets/img/media/alsamixer.gif "/assets/img/media/alsamixer.gif")


- 5 — If nothing happens and the problem persists, force the card to read by editing the file alsa.conf

{% highlight bash %}
vim /etc/modprobe.d/alsa.conf
{% endhighlight %}

And insert the content below at the end of the file

{% highlight md %}
options snd-ca0106 index=0
alias snd-card-1 snd-hda-intel
options snd-hda-intel index=1
options snd cards_limit=2
{% endhighlight %}

## Restart the system and enjoy the sound!

via: [Marcos Oliveira Medium](https://medium.com/marcos-oliveira/how-to-troubleshoot-audio-sound-in-gentoo-3efd5bd8d628)
