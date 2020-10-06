---
layout: post
title: "Onefetch - Generate a fetch from your Git repository"
date: 2020-10-06 09:16:52
image: '/assets/img/rust/aesthetic.png'
description: 'Get information from your Git repository via the command line.'
featured-img: ../rust/aesthetic.png
tags:
- rust
- git
- programming
---

![Get information from your Git repository via the command line.](/assets/img/rust/aesthetic.png)

Onefetch is a command line information tool that displays information about your Git repository directly on your terminal.

Onefetch provides the user with code statistics and design information with features such as license detection. Onefetch will show you:

+ The programming language, as well as the project members;
+ LOC (lines of code);
+ Disk size;
+ Contributors
+ Version;
+ etc.

You can further configure Onefetch to display exactly what you want. Through the use of parameters via the command line.

Onefetch supports more than 50 different programming languages.

---

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Installation
Onefetch is written in [Rust](https://www.rust-lang.org/). But several operating systems already have in their repositories, they are:
{% highlight bash %}
brew update && brew install onefetch # macOS
sudo nix-env -i onefetch # NixOS
sudo zypper install onefetch # OpenSUSE
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

For any Linux distro just install Rust via your package package manager and add the [precompiled binary](https://github.com/o2sh/onefetch/releases) to your `$PATH` variable, example for `/usr/local/bin` with the most current version according to the date of publication of this article :
{% highlight bash %}
wget https://github.com/o2sh/onefetch/releases/download/v2.4.0/onefetch-linux.tar.gz
tar zxvf onefetch-linux.tar.gz
cd onefetch-linux/
sudo mv onefetch /usr/local/bin/
{% endhighlight %}
Para Windows há um executável também disponível em [releases](https://github.com/o2sh/onefetch/releases) e para outros sistemas, você pode construir o binário a partir do código fonte.

# Use
Once installed, just enter a git repository and run the `onefetch` command, example for the [Wallset](https://github.com/terroo/wallset) repository
{% highlight bash %}
git clone  https://github.com/terroo/wallset
cd wallset
onefetch
{% endhighlight %}

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

![Wallset onefetch](/assets/img/rust/wallset-onefetch.png)

The repo information is displayed next to the ASCII logo for the dominant language. You can also configure Onefetch to use an image (png, jpeg ...) in the supported terminals with the `-i` parameter and indicating the image address, example:
> Remembering that only [terminal emulators](https://en.terminalroot.com.br/the-10-best-terminal-emulators-for-your-linux/): `xterm`, `mlterm` and `kitty` are supported

{% highlight bash %}
onefetch -i path/to/image.jpg
{% endhighlight %}

![Image Onefetch](/assets/img/rust/onefetch.png)

For more information, consult the [project repository](https://github.com/o2sh/onefetch/).

# Thanks for reading!
    
