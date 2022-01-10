---
layout: post
title: "LibreWolf, a browser with a focus on privacy and security"
date: 2022-01-10 12:50:06
image: '/assets/img/web/librewolf.png'
description: 'Available for Linux, OpenBSD, Windows and macOS'
tags:
- firefox
- web
---

![LibreWolf, a browser with a focus on privacy and security](/assets/img/web/librewolf.png)

---

**LibreWolf** is a browser that is fork independent of [Firefox](https://terminalroot.com/tags#firefox), with the main goals of privacy, security and user freedom.

LibreWolf is designed to increase protection against fingerprinting and tracking techniques, while including some security improvements.

This is achieved through settings and [patches](https://terminalroot.com/command-cp-with-progress-bar/) aimed at privacy and security. LibreWolf also aims to remove all telemetry, data collection and annoyances, as well as disable anti-freedom features like DRM.


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

# Installation
LibreWolf is available for [Linux](https://terminalroot.com/tags#linux), [OpenBSD](https://terminalroot.com/tags#openbsd), [Windows](https:// /terminalroot.com/tags#windows) and [macOS](https://terminalroot.com/tags#macos) .

On Linux there are standard procedures for the following [distributions](https://terminalroot.com/tags#distros):

## [Ubuntu](https://terminalroot.com/tags#ubuntu) 20.{04.10} and [Linux Mint](https://terminalroot.com/tags#mint)
Just add the LibreWolf *source.list* and install. For this do:
{% highlight sh %}
echo "deb [arch=amd64] http://deb.librewolf.net focal main" | sudo tee /etc/apt/sources.list.d/librewolf.list
sudo wget https://deb.librewolf.net/keyring.gpg -O /etc/apt/trusted.gpg.d/librewolf.gpg
sudo apt update
sudo apt install librewolf -y
{% endhighlight %}

## On [Debian](https://terminalroot.com/tags#gentoo)
For version 11 use:
{% highlight sh %}
echo "deb [arch=amd64] http://deb.librewolf.net $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/librewolf.list
sudo wget https://deb.librewolf.net/keyring.gpg -O /etc/apt/trusted.gpg.d/librewolf.gpg
sudo apt update
sudo apt install librewolf -y
{% endhighlight %}

For other versions of [Debian](https://terminalroot.com/tags#debian)(Unstable):
{% highlight sh %}
echo 'deb http://download.opensuse.org/repositories/home:/bgstack15:/aftermozilla/Debian_Unstable/ /' | sudo tee /etc/apt/sources.list.d/home:bgstack15:aftermozilla.list
curl -fsSL https://download.opensuse.org/repositories/home:bgstack15:aftermozilla/Debian_Unstable/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/home_bgstack15_aftermozilla.gpg > /dev/null
sudo apt update
sudo apt install librewolf -y
{% endhighlight %}

If it doesn't work and you can't install it, clean up the mess:
{% highlight sh %}
sudo rm -f /etc/apt/sources.list.d/librewolf.list /etc/apt/trusted.gpg.d/librewolf.gpg
{% endhighlight %}
> There is another way using AppImage, see one of the blocks below this article.

## On [Gentoo](https://terminalroot.com/tags#gentoo)
Create a repository in the path and file: `/etc/portage/repos.conf/librewolf.conf` and insert that content below:
{% highlight sh %}
[librewolf]
priority = 50
location = <repo-location>/librewolf
sync-type = git
sync-uri = https://gitlab.com/librewolf-community/browser/gentoo.git
auto-sync = Yes
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


Now change the repository location to a path of your choice and run:
{% highlight sh %}
emaint -r librewolf sync
{% endhighlight %}
> [Portage](https://wiki.gentoo.org/wiki/Portage) should now find and update the repository.

You can also use `eselect` with the command:
{% highlight sh %}
sudo eselect repository add librewolf git https://gitlab.com/librewolf-community/browser/gentoo.git
emaint -r librewolf sync
{% endhighlight %}

## On [Arch Linux](https://terminalroot.com/tags#arch)
You can use [AUR](https://terminalroot.com/how-to-install-aur-packages-via-yay-on-arch-linux/):
{% highlight sh %}
yay -S librewolf
{% endhighlight %}

## On [Fedora](https://terminalroot.com/tags#fedora)
{% highlight sh %}
sudo rpm --import https://keys.openpgp.org/vks/v1/by-fingerprint/034F7776EF5E0C613D2F7934D29FBD5F93C0CFC3
sudo dnf config-manager --add-repo https://rpm.librewolf.net
sudo dnf update
sudo dnf install librewolf
{% endhighlight %}

## via [AppImage](https://terminalroot.com/meet-the-app-get-an-appimages-manager-via-command-line/) to any [ distro](https://terminalroot.com/tags#distros)
**NOTE**
> This AppImage will probably only work if your environment is running under [Wayland](https://terminalroot.com/wayfire-a-wm-3d-composer-installation-on-arch-linux/) . If you are under Xorg you will need(more recommended) use the [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher)

{% highlight sh %}
wget -q https://gitlab.com/api/v4/projects/24386000/packages/generic/librewolf/95.0.2-1/LibreWolf.x86_64.AppImage
chmod +x LibreWolf.x86_64.AppImage
./LibreWolf.x86_64.AppImage
{% endhighlight %}

## To install on other operating systems
+ For OpenBSD [see here](https://librewolf.net/installation/openbsd/)
+ For Windows [see here](https://librewolf.net/installation/windows/)
+ e For macOS [see here](https://librewolf.net/installation/macos/)


---

For more information, report issues and, among others, see the links:
+ <https://librewolf.net/>
+ <https://gitlab.com/librewolf-community>
+ <https://www.reddit.com/r/LibreWolf>
+ <https://lemmy.ml/c/librewolf>


