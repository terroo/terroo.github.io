---
layout: post
title: "Meet a Docker written with Shell Script"
date: 2020-08-23 13:43:17
image: '/assets/img/docker/docker-script.jpg'
description: 'A Docker implemented with only 100 lines of Bash.'
featured-img: ../docker/docker-script.jpg
tags:
- docker
- bash
- shellscript
---

![Meet a Docker written with Shell Script](/assets/img/docker/docker-script.jpg)

**Bocker** is a Docker implemented with only 100 lines of Bash, or around that.

# Prerequisites

The necessary packages for you to be able to run Bocker (the dependencies) are:

+ btrfs-progs
+ curl
+ iproute2
+ iptables
+ libcgroup-tools
+ util-linux> = 2.25.2
+ coreutils> = 7.5

Since most distributions do not provide a new enough version of util-linux, you will probably need to take the sources from [here](https://www.kernel.org/pub/linux/utils/util-linux/v2.25/) and compile them yourself.

In addition, your system will need to be configured with the following:

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

A btrfs file system mounted on `/var/bocker`
+ A bridge mode network named `bridge0` and an IP of `10.0.0.1/24`
+ IP forwarding enabled in `/proc/sys/net/ipv4/ip_forward`
+ A firewall routing `bridge0` traffic to a physical interface.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

For ease of use, a Vagrantfile is included, which will create the necessary environment.

Even if you meet the above prerequisites, you can probably still run Bocker on a virtual machine. Bocker runs as `root` and, among other things, needs to make changes to its network interfaces, routing table and firewall rules. According to the developer, it is guaranteed that this will not destroy your system.

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

# Example of use
{% highlight bash %}
$ bocker pull centos 7
######################################################################## 100.0%
######################################################################## 100.0%
######################################################################## 100.0%
Created: img_42150

$ bocker images
IMAGE_ID        SOURCE
img_42150       centos:7

$ bocker run img_42150 cat /etc/centos-release
CentOS Linux release 7.1.1503 (Core)

$ bocker ps
CONTAINER_ID       COMMAND
ps_42045           cat /etc/centos-release

$ bocker logs ps_42045
CentOS Linux release 7.1.1503 (Core)

$ bocker rm ps_42045
Removed: ps_42045

$ bocker run img_42150 which wget
which: no wget in (/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin)

$ bocker run img_42150 yum install -y wget
Installing : wget-1.14-10.el7_0.1.x86_64                                  1/1
Verifying  : wget-1.14-10.el7_0.1.x86_64                                  1/1
Installed  : wget.x86_64 0:1.14-10.el7_0.1
Complete!

$ bocker ps
CONTAINER_ID       COMMAND
ps_42018           yum install -y wget
ps_42182           which wget

$ bocker commit ps_42018 img_42150
Removed: img_42150
Created: img_42150

$ bocker run img_42150 which wget
/usr/bin/wget

$ bocker run img_42150 cat /proc/1/cgroup
...
4:memory:/ps_42152
3:cpuacct,cpu:/ps_42152

$ cat /sys/fs/cgroup/cpu/ps_42152/cpu.shares
512

$ cat /sys/fs/cgroup/memory/ps_42152/memory.limit_in_bytes
512000000

$ BOCKER_CPU_SHARE=1024 \
	BOCKER_MEM_LIMIT=1024 \
	bocker run img_42150 cat /proc/1/cgroup
...
4:memory:/ps_42188
3:cpuacct,cpu:/ps_42188

$ cat /sys/fs/cgroup/cpu/ps_42188/cpu.shares
1024

$ cat /sys/fs/cgroup/memory/ps_42188/memory.limit_in_bytes
1024000000
{% endhighlight %}

# Functionalities
##Currently implemented
+ docker build †
+ docker pull
+ docker images
+ ps docker
+ docker run
+ docker exec
+ docker logs
+ docker commit
+ rm docker/rmi docker
+ Networking
+ Support/CGroups Quota

##Not implemented
+ Data Volume Containers
+ Date Volumes
+ Port Forwarding

# License

The Bocker license is GPL-3.0 License and the official project page is on GitHub:
<https://github.com/p8952/bocker>


    
