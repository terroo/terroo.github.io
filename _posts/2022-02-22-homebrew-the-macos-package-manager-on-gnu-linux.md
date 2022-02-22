---
layout: post
title: "Homebrew - The macOS package manager on GNU/Linux"
date: 2022-02-22 10:23:18
image: '/assets/img/tips/brew.jpg'
description: 'The Homebrew package manager can be used on Linux and Windows Subsystem for Linux (WSL).'
tags:
- macos
- linux
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Homebrew package manager can be used in [Linux](https://terminalroot.com/tags#linux) and [Windows Subsystem for Linux (WSL)](https://terminalroot.com/tags#windows). **Homebrew** was formerly known as **Linuxbrew** when running under [Linux](https://terminalroot.com/tags#linux) or WSL.

**It can be installed in your home directory, in which case it doesn't use sudo.**

It does not use any libraries provided by your host system, except [glibc](https://www.gnu.org/software/libc/) and [gcc](https://terminalroot.com/2019/12/ gcc-vs-llvm-which-is-the-best-compiler.html) if they are new enough.

Homebrew can install its own current versions of glibc and gcc for older Linux distributions.

# Installation
First of all, install the dependencies if you don't have them, examples:
+ [Debian](https://terminalroot.com/tags#debian), [Ubuntu](https://terminalroot.com/tags#ubuntu), [ Linux Mint](https://terminalroot.com/tags#mint) and derivatives:

{% highlight bash %}
sudo apt-get install build-essential procps curl file git
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

+ [Fedora](https://terminalroot.com/tags#redhat) and derivatives:
{% highlight bash %}
sudo dnf groupinstall 'Development Tools'
sudo dnf install procps-ng curl file git
sudo dnf install libxcrypt-compat # Fedora 30
{% endhighlight %}

Next step is just to install:

{% highlight bash %}
sudo bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
{% endhighlight %}

# Usage
After installed you run the command to install applications on your system, for example:

{% highlight bash %}
sudo brew install allegro
{% endhighlight %}

See the list of all available packages for GNU/Linux [at this link](https://formulae.brew.sh/formula-linux/).

For more information and additional settings see the official website:
## <https://brew.sh>

