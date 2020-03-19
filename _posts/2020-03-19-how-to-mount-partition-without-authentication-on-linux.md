---
layout: post
title: "How to Mount Partition Without Authentication on Linux"
date: 2020-03-19 10:23:26
image: '/assets/img/tips/auth-mount-partition.jpg'
description: 'Quick tip.'
featured-img: ../tips/auth-mount-partition.jpg
tags:
- linux
- tips
- polkit
---

![How to Mount Partition Without Authentication on Linux](/assets/img/tips/auth-mount-partition.jpg)

When will you access a partition via graphical interface on some systems like [Gentoo](https://en.terminalroot.com.br/10-fundamental-tips-for-your-gentoo-linux/) and [Debian](https://debian.org/), for example, you are asked to enter your `sudo` or `root` as in the example below:
![GNOME authentication](/assets/img/tips/auth-mount-partition-gnome.png)

In the case of a [window manager](https://en.terminalroot.com.br/5-tools-for-you-to-use-on-your-wm/), such as [bspwm](https://en.terminalroot.com.br/how-to-install-bspwm-on-gentoo/) by example, if you have not started [Polkit](https://www.freedesktop.org/software/polkit/docs/latest/polkit.8.html) manually or in your login file it does not open [Gksudo ](https://linux.die.net/man/1/gksudo) and shows an error similar to the image shown below:
![Unable - bspwm](/assets/img/tips/not-was-possible-bpspwm.png)

But you can configure it to mount automatically without asking for a password, as follows:

## On [Gentoo](https://gentoo.org/):
Open the file `/usr/share/polkit-1/actions/org.freedesktop.UDisks2.policy`
{% highlight bash %}
sudo vim /usr/share/polkit-1/actions/org.freedesktop.UDisks2.policy
{% endhighlight %}

## No [Debian](https://debian.org/):
Open the file `/usr/share/polkit-1/actions/org.freedesktop.UDisks2.policy`
{% highlight bash %}
sudo vim /usr/share/polkit-1/actions/org.freedesktop.UDisks2.policy
{% endhighlight %}

And in the excerpt (`<action id="org.freedesktop.udisks2.filesystem-mount-system">`, in the `defaults` tag) similar to the one below, replace the information: **auth_admin** with **yes**

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight bash %}
<action id="org.freedesktop.udisks2.filesystem-mount-system">
    <description>Mount a filesystem on a system device</description>
    <description xml:lang="zh_TW">在系統裝置掛載檔案系統</description>
    <description xml:lang="zh_CN">在系统设备上挂载文件系统</description>
    <description xml:lang="uk">Змонтувати файлову систему на пристрої зберігання системи</description>
    <description xml:lang="tr">Bir sistem aygıtı üzerinde bir dosya sistemi bağla</description>
    ....
    <defaults>
    <allow_any>auth_admin</allow_any>
    <allow_inactive>auth_admin</allow_inactive>
    <allow_active>auth_admin_keep</allow_active>
    </defaults>
</action>
{% endhighlight %}

Changing like this:

{% highlight bash %}
<action id="org.freedesktop.udisks2.filesystem-mount-system">
    <description>Mount a filesystem on a system device</description>
    <description xml:lang="zh_TW">在系統裝置掛載檔案系統</description>
    <description xml:lang="zh_CN">在系统设备上挂载文件系统</description>
    <description xml:lang="uk">Змонтувати файлову систему на пристрої зберігання системи</description>
    <description xml:lang="tr">Bir sistem aygıtı üzerinde bir dosya sistemi bağla</description>
    ....
    <defaults>
    <allow_any>yes</allow_any>
    <allow_inactive>yes</allow_inactive>
    <allow_active>yes</allow_active>
    </defaults>
</action>
{% endhighlight %}

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Then you don’t even need to restart anything, just try to mount from now on
> If you can't, try to change the file that contains **Udisk** or ** udisk2 **

In [i3wm](https://en.terminalroot.com.br/how-to-customize-your-linux-mint-with-i3-polybar-rofi/), if you want me to ask for a password instead of automatically assembling, add this line to your **config**: `exec_always --no-startup-id /usr/lib/policykit-1-gnome/polkit-gnome-authentication-agent-1 &`, in the case of Debian.

## About Polkit
Polkit is a component for controlling system-wide privileges on Unix-like operating systems. It provides an organized way for non-privileged processes to communicate with the privileged. Polkit allows a level of control over centralized system policy.

Since version 0.105, launched in April 2012, the project's name has been changed from PolicyKit to polkit to emphasize that the system component has been rewritten and that the API has been changed, breaking backward compatibility, [learn more](https://en.m.wikipedia.org/wiki/Polkit).

## Useful links:
+ [Polkit](https://www.freedesktop.org/software/polkit/docs/latest/polkit.8.html)
+ [Polkit, Gentoo Wiki](https://wiki.gentoo.org/wiki/Polkit)
+ [Example of config for i3wm](https://github.com/terroo/fonts/blob/master/files/i3/config)
+ [How to mount internal device without needing password?](https://forums.linuxmint.com/viewtopic.php?t=152357)

