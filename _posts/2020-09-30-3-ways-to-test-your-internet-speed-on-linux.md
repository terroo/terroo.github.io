---
layout: post
title: "3 Ways to Test Your Internet Speed on Linux"
date: 2020-09-30 08:21:23
image: '/assets/img/commands/internet-test.jpg'
description: 'Every day we doubt our ISP if it is really delivering the bandwidth we hire.'
featured-img: ../commands/internet-test.jpg
tags:
- commands
- internet
- linux
---

![3 Ways to Test Your Internet Speed on Linux](/assets/img/commands/internet-test.jpg)

Every day we doubt our ISP if it is really delivering the bandwidth we hire.

And the best way to keep an eye on this is to constantly monitor using some quick and easy tool.

We will know 3 excellent tools for this via the command line.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# 1. [Speedtest](https://www.speedtest.net/)

`speedtest-cli` is an open source command line interface for testing Internet bandwidth that can also be used directly by the browser. It is a quick little tool to check the download and upload speed.

`speedtest-cli` is available in most distros and can be easily installed using the package manager.

In Gentoo just install it with Portage:
{% highlight bash %}
su
emerge speedtest-cli
{% endhighlight %}

In Debian/Ubuntu, you can use the following procedure:
{% highlight bash %}
sudo apt-get install gnupg1 apt-transport-https dirmngr
export INSTALL_KEY=379CE192D401AB61
export DEB_DISTRO=$(lsb_release -sc)
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys $INSTALL_KEY
echo "deb https://ookla.bintray.com/debian ${DEB_DISTRO} main" | sudo tee  /etc/apt/sources.list.d/speedtest.list
sudo apt-get update
sudo apt-get install speedtest
{% endhighlight %}

In Fedora/CentOS/RedHat:
{% highlight bash %}
sudo yum install wget
wget https://bintray.com/ookla/rhel/rpm -O bintray-ookla-rhel.repo
sudo mv bintray-ookla-rhel.repo /etc/yum.repos.d/
sudo yum install speedtest
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

In FreeBSD:
{% highlight bash %}
sudo pkg update && sudo pkg install -g libidn2 ca_root_nss
sudo pkg add "https://bintray.com/ookla/download/download_file?file_path=ookla-speedtest-1.0.0-freebsd.pkg"
{% endhighlight %}

For any other distro you can download it via the command line and to install:
{% highlight bash %}
# 64-bit
wget https://bintray.com/ookla/download/download_file?file_path=ookla-speedtest-1.0.0-x86_64-linux.tgz

# 32-bit
wget https://bintray.com/ookla/download/download_file?file_path=ookla-speedtest-1.0.0-i386-linux.tgz
{% endhighlight %}

![Speedtest](/assets/img/commands/speedtest.gif)

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

---

# 2. [Fast](https://fast.com/)

Fast is an open source CLI utility developed by Netflix's fast.com service and you can also access it directly from the browser.

Fast is the perfect tool for those who just want to check the download speed in a very simple way.

To use it via the command line you will need `npm` properly installed on your system and then run command:
{% highlight bash %}
sudo npm install --global fast-cli
{% endhighlight %}

You can also install it using the snap:
{% highlight bash %}
sudo snap install fast
{% endhighlight %}

After installed you can run via command line:
{% highlight bash %}
fast
{% endhighlight %}

![Fast](/assets/img/commands/fast.gif)

---

# 3. [LibreTest](https://librespeed.org/)
LibreTest is open source and does not use Flash, Java and Websocket. It can be accessed directly by the browser and used via the command line according to additional tools that implement it.

Its differential is that you can use it on your server and offer as a service and use curl via the command line pointing to your server (this procedure is outside the scope of this article).

![LibreTest](/assets/img/commands/libretest.gif)

---

# Thanks for reading!

