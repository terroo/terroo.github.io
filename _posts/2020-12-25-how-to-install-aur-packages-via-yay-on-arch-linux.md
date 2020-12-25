---
layout: post
title: "How to Install AUR Packages via Yay on Arch Linux"
date: 2020-12-25 11:15:04
image: '/assets/img/distros/aur-yay-archlinux.jpg'
description: 'Easily install packages that are not yet in the official repository.'
featured-img: ../distros/aur-yay-archlinux.jpg
tags:
- archlinux
---

![How to Install AUR Packages via Yay on Arch Linux](/assets/img/distros/aur-yay-archlinux.jpg)

There are several packages that are not yet in the official [Arch Linux](https://en.terminalroot.com.br/customize-lightdm-on-arch-linux/) repository and one of the processes for a package to be official is first to be part of the AUR.

The Arch User Repository (AUR) is a community-driven repository for Arch users.

Packages are "formulated" by a file named [PKGBUILS](https://wiki.archlinux.org/index.php/PKGBUILD) and you compile with the [makepkg](https://wiki.archlinux.org/index.php/Makepkg) command.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# How do you install AUR?
First of all you need to have the construction tools, and to do this install the `base-devel` package if you haven't installed it:
{% highlight bash %}
sudo pacman -S --needed base-devel
{% endhighlight %}
> The `--needed` option is to ignore packages that you already have installed, instead of reinstalling them.

Then just

+ Clone with Git the repository at the address of the AUR packages, use the search field to find the name of the package you want.
+ Enter the repository and run the `makepkg -si` command
  - The `-s` option, automatically resolves and installs any dependencies with pacman before compiling, it uses pacman for this.
  - The `-i` option installs the package if it was compiled successfully.

Example of a fictitious `terminalroot` package, I searched the Package search field and clicked and was directed to its page: <https://aur.archlinux.org/packages/terminalroot>
{% highlight bash %}
git clone https://aur.archlinux.org/terminalroot.git
cd terminalroot/
makepkg -si
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

# Saving time with [Yay](https://github.com/Jguer/yay)
Well, cloning and compiling is enough to think: Wasn't it better to automate this process? !! Yes it is. And they already thought about it and created [Yay](https://github.com/Jguer/yay).

I think Yay should already be part of the official repository and we can install it via `pacman`, but still (at least until the date of publication of this article) they haven't done that.

So you need to install it via AUR and then use it to install any other AUR package, weird, but that's the way it is! To install Yay, run:
{% highlight bash %}
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
{% endhighlight %}
> Remembering that you need `base-devel` as informed above. During installation it will ask for your `sudo` password to copy the binary to a system path that is in the `$PATH` variable.

From then on everything is easier! 🍺 

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

To install anything, just run the `yay` command with the `-S` parameter similar to pacman and enter the package name.

> Remembering that it has auto-complete, therefore, it is easier to identify if the package exists only by pressing TAB when typing the first letters of the name, reducing the need to go to the AUR address. Cool, right ?!

Example again with the fictional `terminalroot` package
{% highlight bash %}
yay -S terminalroot
{% endhighlight %}

Only that! Ah, don't use `sudo` !!! He will refuse, he will ask you for the password during the installation, of course, it's the AUR process! 😃

Alright?! Well, that's it for today. If you want to go even deeper, I suggest the links below:

+ <https://wiki.archlinux.org/index.php/Arch_User_Repository>
+ <https://github.com/Jguer/yay>


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


    
