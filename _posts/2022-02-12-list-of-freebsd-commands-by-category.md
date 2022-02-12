---
layout: post
title: "List of FreeBSD Commands by Category"
date: 2022-02-12 09:59:39
image: '/assets/img/bsd/freebsd.jpg'
description: 'That quick reference guide for whenever you need to remember something.'
tags:
- freebsd
- bsd
- unix
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

title: "List of FreeBSD Commands by Category"
description: 'That quick reference guide for whenever you need to remember something.'
tags: freebsd

![List of FreeBSD Commands by Category](/assets/img/freebsd/freebsd-commands.jpg)

Hail, guys! Below is a FreeBSD **Cheat Sheet** separated by category.

---

# Assembly Commands
+ Mount MS-DOS file system (USB stick, external FAT32 drive)
{% highlight bash %}
sudo mount_msdosfs [-o large] /dev/ad0s1 /mnt
{% endhighlight %}

+ Mount ISO 9660 using memory disk
{% highlight bash %}
sudo mount -t cd9660 /dev/`mdconfig -f <image.iso>` /mnt
{% endhighlight %}

+ Mount Linux procfs
{% highlight bash %}
sudo mkdir -p /proc
sudo mount -t procfs proc /proc
{% endhighlight %}

+ Mount Linux linprocfs
{% highlight bash %}
sudo mkdir -p /compat/linux/proc
sudo mount -t linprocfs linproc /compat/linux/proc
{% endhighlight %}

+ Mount fs file descriptor
{% highlight bash %}
sudo mount -t fdescfs fdesc /dev/fd
{% endhighlight %}

---

# update commands
+ Run FreeBSD binary update
{% highlight bash %}
sudo freebsd-update fetch
sudo freebsd-update upgrade -r <release>
sudo freebsd-update install
{% endhighlight %}


<!-- SQUARE - GAMES ROOT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# `pkg` commands
+ Install a packages
{% highlight bash %}
sudo pkg install [package]
{% endhighlight %}

+ Remove a package
{% highlight bash %}
sudo pkg delete [package]
{% endhighlight %}

+ Update package databases from repository
{% highlight bash %}
sudo pkg update
sudo pkg [-d] update
{% endhighlight %}

+ Remove unused dependencies
{% highlight bash %}
sudo pkg autoremove
{% endhighlight %}

+ Update packages to a new version
{% highlight bash %}
sudo pkg upgrade [-f]
{% endhighlight %}

+ Update vuln.xml database
{% highlight bash %}
sudo pkg audit -F
{% endhighlight %}

+ Is `pkg` installed?
{% highlight bash %}
pkg info|grep <pkg>
{% endhighlight %}

+ View package information
{% highlight bash %}
pkg info <pkg>
pkg show <pkg>
{% endhighlight %}

+ Lock package for current version and display locked packages
{% highlight bash %}
pkg lock <pkg>
pkg lock -l
{% endhighlight %}

+ Clear local cache
{% highlight bash %}
sudo pkg clean -y
{% endhighlight %}

+ View packet statistics
{% highlight bash %}
pkg stats
{% endhighlight %}

+ Find the file installation package:
{% highlight bash %}
pkg which /usr/local/bin/vim
{% endhighlight %}

+ Find the file if the package is not installed:
{% highlight bash %}
sudo pkg install pkg-provides
sudo pkg provides -uf
pkg provides /path/to/file
{% endhighlight %}

---

# Network Commands

+ TCP sockets open (`LISTEN`, `ESTABLISHED`, `CLOSE_WAIT`)
{% highlight bash %}
sudo netstat -p tcp -an
sudo socksstat -P tcp -a
{% endhighlight %}

+ Consult the tcp dtrace script at: `/usr/share/dtrace`
{% highlight bash %}
cd /usr/share/dtrace
sudo tcpconn
sudo tcpdebug
sudo tcpstate
sudo tcptrack
{% endhighlight %}

---

# Commands from kernel modules
+ Lists loaded kernel modules
{% highlight bash %}
sudo kldstat [-v]
{% endhighlight %}

+ Kernel load module (HW thermal sensors)
{% highlight bash %}
sudo kldload <module>
sudo kldload coretemp
{% endhighlight %}

+ Generate hints for the boot loader
{% highlight bash %}
sudo kldxref [v] /boot/kernel /boot/modules
sudo kldxref -R /boot
{% endhighlight %}

+ Dump(Dump) the running kernel configuration
{% highlight bash %}
sysctl -n kern.conftxt
config -x /boot/kernel/kernel
{% endhighlight %}


<!-- RECTANGLE 2 - OnParagragraph -->
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

---

# Commands for `ports`
+ Update and extract snapshots
{% highlight bash %}
sudo mkdir -p /usr/ports
sudo portsnap fetch extract
{% endhighlight %}

+ Search for a `ports` in the tree
{% highlight bash %}
cd /usr/ports/*/*/<portname>
make -C /usr/ports search name=<portname>
make -C /usr/ports search name=<portname> display=name,path

sudo pkg install psearch
psearch <portname>
{% endhighlight %}

+ Display `ports` variables
{% highlight bash %}
make -C /usr/ports/editor/vim -V MAINTAINER -V PORTVERSION
make -C /usr/ports/editor/vim -V WRKSRC -V WRKDIR
{% endhighlight %}

+ Search distfile(s)
{% highlight bash %}
cd /usr/ports/editor/vim && make fetch extract
cd work
{% endhighlight %}

+ Regenerate the information hash of the distfile(s)
{% highlight bash %}
make -C /usr/ports/editor/vim makesum
{% endhighlight %}

+ Change KNOB/Options configuration
{% highlight bash %}
make -C /usr/ports/editor/vim showconfig
make -C /usr/ports/editor/vim config
make -C /usr/ports/editor/vim rmconfig

make check-license check-categories check-deprecated check-vulnerable security-check check-sanity check-plist check-orphans check-config
{% endhighlight %}

+ List Makefile destinations from `ports`
{% highlight bash %}
grep -E '^[^${\.#]+:$' /usr/ports/Mk/bsd.port.mk |cut -d ':' -f1 | sort -u
make -C /usr/ports -V .ALLTARGETS
{% endhighlight %}

+ List dependencies to rebuild
{% highlight bash %}
make all-depends-list
make build-depends-list
make run-depends-list
{% endhighlight %}

+ Rebuild `ports` without building their dependencies
{% highlight bash %}
make missing-packages # list missing packages
make install-missing-packages
make install clean
{% endhighlight %}

---

# Commands for `src`
+ Extract `/usr/src` Makefile targets with descriptions (lists all available targets)
{% highlight bash %}
grep '^# [a-z].*- [A-Z].*' /usr/src/Makefile | sed 's,^# ,,' | luck
make -C /usr/src -V .ALLTARGETS
{% endhighlight %}

+ Enter the userland binary utility source code folder (e.g. ls)
{% highlight bash %}
cd `where -sq ls`
{% endhighlight %}

---

# `poudriere` commands
+ Create a `jail`
{% highlight bash %}
sudo poudriere jail -c -j <jail> -v 12.2-RELEASE -a <arch> -M ftp -p <ptree>
sudo poudriere jail -c -j 12amd64 -v 12.2-RELEASE -a amd64 -M ftp -p portsdir
{% endhighlight %}

+ Delete a `jail`
{% highlight bash %}
sudo poudriere jail -d -j <jail> -C all
sudo poudriere jail -d -j 12amd64 -C all
{% endhighlight %}

+ List `jail`(s)
{% highlight bash %}
sudo podriere jail -l
sudo poudriere jail -l [-n] [-q]
{% endhighlight %}

+ Upgrade jail
{% highlight bash %}
sudo poudriere jail -u -j <jail>
sudo poudriere jail -u -j <jail> -t 12.1
{% endhighlight %}

+ Create `ports`
{% highlight bash %}
sudo poudriere ports -c -m null -M ${PWD}/svn/ports -p portsdir -v
sudo podriere ports -l
{% endhighlight %}

+ Tree list of `ports`
{% highlight bash %}
sudo podriere ports -l
sudo poudriere ports -l [-n] [-q]
{% endhighlight %}

+ Build a test `ports`
{% highlight bash %}
sudo poudriere testport -o <origin>/<port> -p portsdir -n # dry run
sudo poudriere testport -o editor/vim -p portsdir -v # verbose
{% endhighlight %}

---

# Development commands
+ Get `sources`
{% highlight bash %}
git clone --depth 1 https://github.com/freebsd/freebsd.git /usr/src
git clone --depth 1 https://git.freebsd.org/src.git /usr/src
{% endhighlight %}

For a specific `branch`, eg. *Version 12.x*:
{% highlight bash %}
git checkout -b releng-12.2 freebsd/releng/12.2
git switch -c releng-12.2 freebsd/releng/12.2
{% endhighlight %}

+ Download `ports`
{% highlight bash %}
git clone --depth 1 https://github.com/freebsd/freebsd-ports.git /usr/ports
git clone --depth 1 https://git.freebsd.org/ports.git /usr/ports
{% endhighlight %}

---

# Commands for Wireless (Wireless networks)
+ Restart the wifi network
{% highlight bash %}
sudo service wpa_supplicant restart wlan0
{% endhighlight %}

+ List Wireless devices
{% highlight bash %}
sysctl net.wlan.devices
{% endhighlight %}

+ List wireless SSID hotspot (with wlan0 device)
{% highlight bash %}
sudo ifconfig [-v] wlan0 list scan
{% endhighlight %}

+ Debug the wireless network "stack"
{% highlight bash %}
sudo sysctl debug.iwi=1
sudo sysctl hw.wi.debug=1
sudo sysctl net.wlan.debug=1
{% endhighlight %}

---

# Build commands
+ Build the "world" and the kernel
{% highlight bash %}
cd /usr/src
sudo nice -n -20 make -j`sysctl -n hw.ncpu` -DNO_CLEAN -DKERNFAST buildworld buildkernel | tee -a build.log
{% endhighlight %}

+ Install Kernel (debug)
{% highlight bash %}
cd /usr/src
sudo make installworld installkernel
sudo make installkernel.debug
{% endhighlight %}

+ Update `/etc` settings
{% highlight bash %}
sudo etcupdate
sudo mergemaster -ui
{% endhighlight %}

---

# hardware commands
+ PCI devices
{% highlight bash %}
sudo pciconf -vl
sudo pkg install pciutils
sudo lspci [-v]
{% endhighlight %}

+ USB devices
{% highlight bash %}
sudo usbconfig list
sudo usbconfig dump_all_desc
sudo pkg install usbutils
sudo lsusb [-v]
{% endhighlight %}

+ CPU info
{% highlight bash %}
sudo dmesg
sudo dmesg | sed -n '/^CPU:/,/^real/p'
sudo sysctl hw.model hw.ncpu
sudo sysctl kern.smp.cpus
{% endhighlight %}

---

# memory commands
+ virtual memory
{% highlight bash %}
vmstat -c 1
sysctl hw.realmem hw.physmem
top -bt 0
{% endhighlight %}

+ Process memory mappings
{% highlight bash %}
procstat vm <pid>
cat /proc/<pid>/map
cat /compat/linux/proc/<pid>/maps
{% endhighlight %}

---

# sound commands
+ sound devices
{% highlight bash %}
sudo cat /dev/sndstat
sudo sysctl dev.pcm
{% endhighlight %}

+ disable beep
{% highlight bash %}
sudo sysctl hw.syscons.bell=0
sudo sysctl kern.vt.enable_bell=0
{% endhighlight %}

+ Volume via mixer
{% highlight bash %}
mixer vol 100
{% endhighlight %}

---

# Input and Output Commands (I/O, I/O)
+ Input and Output statistics for device read/write
{% highlight bash %}
iostat [-x]
iostat -x -w 1 # watch mode
{% endhighlight %}

---

# Commands to/from ZFS
+ Import ZFS Pools
{% highlight bash %}
zpool import -R /mnt zroot
zpool import -R /mnt -e readonly=on zroot # readonly
{% endhighlight %}

+ List and mount ZFS datasets
{% highlight bash %}
zfs list
mount -t vfs zroot/usr/home /tmp/home
{% endhighlight %}

