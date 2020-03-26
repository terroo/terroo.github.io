---
layout: post
title: "How to install Docker on Gentoo"
date: 2020-03-26 18:30:32
image: '/assets/img/docker/docker-gentoo.jpg'
description: 'Enabling the modules correctly.'
featured-img: ../docker/docker-gentoo.jpg
tags:
- docker
- gentoo
- linux
- kernel
---

[![How to install Docker on Gentoo](/assets/img/docker/docker-gentoo.jpg)](/assets/img/docker/docker-gentoo.jpg)

We already have a tutorial for [Docker](https://docker.com/) for beginners that can be consulted [here](https://en.terminalroot.com.br/definitive-docker-tutorial-for-beginners-ubuntu/). But in this article we’ll show you the steps on [Gentoo](https://gentoo.org/).

## 1. Enable modules in [Kernel](https://www.kernel.org/)
Open the [Kernel](https://github.com/torvalds/linux) configuration menu 
{% highlight bash %}
su
cd /usr/src/linux
make menuconfig
{% endhighlight %}

And enable the modules

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
General setup  --->
    [*] POSIX Message Queues
    -*- Control Group support  --->
        [*]   Memory controller 
        [*]     Swap controller
        [*]       Swap controller enabled by default
        [*]   IO controller
        [ ]     IO controller debugging
        [*]   CPU controller  --->
              [*]   Group scheduling for SCHED_OTHER
              [*]     CPU bandwidth provisioning for FAIR_GROUP_SCHED
              [*]   Group scheduling for SCHED_RR/FIFO
        [*]   PIDs controller
        [*]   Freezer controller
        [*]   HugeTLB controller
        [*]   Cpuset controller
        [*]     Include legacy /proc/<pid>/cpuset file
        [*]   Device controller
        [*]   Simple CPU accounting controller
        [*]   Perf controller
        [ ]   Example controller 
    -*- Namespaces support
        [*]   UTS namespace
        -*-   IPC namespace
        [*]   User namespace
        [*]   PID Namespaces
        -*-   Network namespace
-*- Enable the block layer  --->
    [*]   Block layer bio throttling support
    -*- IO Schedulers  --->
        [*]   CFQ IO scheduler
            [*]   CFQ Group Scheduling support   
[*] Networking support  --->
      Networking options  --->
        [*] Network packet filtering framework (Netfilter)  --->
            [*] Advanced netfilter configuration
            [*]  Bridged IP/ARP packets filtering
                Core Netfilter Configuration  --->
                  <*> Netfilter connection tracking support 
                  *** Xtables matches ***
                  <*>   "addrtype" address type match support
                  <*>   "conntrack" connection tracking match support
                  <M>   "ipvs" match support
            <M> IP virtual server support  --->
                  *** IPVS transport protocol load balancing support ***
                  [*]   TCP load balancing support
                  [*]   UDP load balancing support
                  *** IPVS scheduler ***
                  <M>   round-robin scheduling
                  [*]   Netfilter connection tracking
                IP: Netfilter Configuration  --->
                  <*> IPv4 connection tracking support (required for NAT)
                  <*> IP tables support (required for filtering/masq/NAT)
                  <*>   Packet filtering
                  <*>   IPv4 NAT
                  <*>     MASQUERADE target support
                  <*>   iptables NAT support  
                  <*>     MASQUERADE target support
                  <*>     NETMAP target support
                  <*>     REDIRECT target support
        <*> 802.1d Ethernet Bridging
        [*] QoS and/or fair queueing  ---> 
            <*>   Control Group Classifier
        [*] L3 Master device support
        [*] Network priority cgroup
        -*- Network classid cgroup
Device Drivers  --->
    [*] Multiple devices driver support (RAID and LVM)  --->
        <*>   Device mapper support
        <*>     Thin provisioning target
    [*] Network device support  --->
        [*]   Network core driver support
        <M>     Dummy net driver support
        <M>     MAC-VLAN support
        <M>     IP-VLAN support
        <M>     Virtual eXtensible Local Area Network (VXLAN)
        <*>     Virtual ethernet pair device
    Character devices  --->
        -*- Enable TTY
        -*-   Unix98 PTY support
        [*]     Support multiple instances of devpts (option appears if you are using systemd)
File systems  --->
    <*> Overlay filesystem support 
    Pseudo filesystems  --->
        [*] HugeTLB file system support
Security options  --->
    [*] Enable access key retention support
    [*]   Enable register of persistent per-UID keyrings
    <M>   ENCRYPTED KEYS
    [*]   Diffie-Hellman operations on retained keys
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

## 2. Make sure you have enabled all modules correctly
For this you can use a [Bash script](https://en.terminalroot.com.br/bash): `check-config.sh`
{% highlight bash %}
wget https://git.io/check-config.sh
chmod +x check-config.sh
sh check-config.sh
{% endhighlight %}

The output will look like this:
[![Chech config Docker Kernel modules](/assets/img/docker/check-config-output.jpg)](/assets/img/docker/check-config-output.jpg)

If there are *not enabled* modules (`missing`), check first if your Kernel version has this module name, example for the module *[CONFIG_EXT3_FS_XATTR](https://cateee.net/lkddb/web-lkddb/EXT3_FS_XATTR.html):
{% highlight bash %}
grep 'CONFIG_EXT3_FS_XATTR' /usr/src/linux/.config
{% endhighlight %}
If you do not return the output it is because you do not have it, but if you return, copy the name of the module and search on any screen of the Kernel menu, pressing the bar (`/`) will open a box for you to enter the name you want to search, just paste the name you had copied and then press **Enter**, example:

<!-- RETANGULO LARGO 2 -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="8549252987"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>


Researched the module: **CONFIG_NETFILTER_XT_MATCH_IPVS**
[![search module kerne](/assets/img/docker/search-module-kernel.jpg)](/assets/img/docker/search-module-kernel.jpg)

Result with complete path and all data:
{% highlight bash %}
Symbol: NETFILTER_XT_MATCH_IPVS [=m]
Type  : tristate
Prompt: "ipvs" match support
  Location: 
    -> Networking support (NET [=y])
       -> Networking options
        -> Network packet filtering framework (Netfilter) (NETFILTER [=y])
          -> Core Netfilter Configuration
(1)         -> Netfilter Xtables support (required for ip_tables) (NETFILTER_XTABLES [=y])
  Defined at net/netfilter/Kconfig:1322
  Depends on: NET [=y] && INET [=y] && NETFILTER [=y] && NETFILTER_XTABLES [=y] && IP_VS [=m] && NETFILTER_ADVANCED [=y] && NF_CONNTRACK [=y]
{% endhighlight %}
[![result module](/assets/img/docker/result-module.jpg)](/assets/img/docker/result-module.jpg)

The line **Prompt** indicates the name that it is in the menu and in **Location** the complete path to find it.
> In this case, it is enabled as a module: **[=m]**, but if it is as **is not set** it will be necessary to enable it.

<!-- RETANGULO LARGO -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## 3. Compile the Kernel
{% highlight bash %}
make && make modules_install && make install
{% endhighlight %}

## 4. Install and configure Docker
{% highlight bash %}
emerge --ask --verbose app-emulation/docker
{% endhighlight %}

Add your user to the `docker` group
{% highlight bash %}
usermod -aG docker <username>
{% endhighlight %}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

If you want to add Docker to start with [OpenRC](https://wiki.gentoo.org/wiki/OpenRC)
{% highlight bash %}
rc-update add docker default
{% endhighlight %}
> If you do not want it to start together with the system, to use Docker you will always have to start it manually: `rc-service docker start`. If you use [systemd](https://freedesktop.org/wiki/Software/systemd/) run: `systemctl start docker.service`.

Restart your system so that some modules are read at startup and your user's group change takes effect: `sudo reboot`.
{% highlight bash %}
# Testing if everything is right
docker info
{% endhighlight %}

# Watch a video about Docker

<iframe width = "920" height = "400" src = "https://www.youtube.com/embed/bsGkIKP1OZ4" frameborder = "0" allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in -picture "allowfullscreen> </iframe>

# Useful links:
+ <https://wiki.gentoo.org/wiki/Docker>
+ <https://cateee.net/lkddb/>
+ <https://github.com/coreos/docker/blob/master/contrib/check-config.sh>
+ <https://terminalroot.com.br/2020/03/melhores-alternativas-para-comparthamento-de-trechos-de-codigo.html>









    
