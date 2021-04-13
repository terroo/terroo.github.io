---
layout: post
title: "Command cp with Progress Bar"
date: 2021-04-13 13:43:06
image: '/assets/img/gnu/cp-progress-bar.png'
description: 'Useful for tracking the progress of copies via the command line.'
featured-img: ../gnu/cp-progress-bar.png
tags:
- gnu
- linux
---

![Command cp with Progress Bar](/assets/img/gnu/cp-progress-bar.png)

The `cp` command is part of [GNU CoreUtils](https://www.gnu.org/software/coreutils/) and one of the features that a lot of people wanted to be implemented would be a progress bar, but as this hasn't happened yet, a programmer created a patch and made it available on [GitHub](https://github.com/jarun/advcpmv) that can be implemented on GNU CoreUtils and you use it!
Installation

The procedure is very simple, just follow the steps:

+ **1.** First of all make sure you have the software building tools on your computer, example:
{% highlight bash %}
sudo apt install gcc g++ make build-essential
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

+ **2.** Download GNU CoreUtils
{% highlight bash %}
wget http://ftp.gnu.org/gnu/coreutils/coreutils-8.32.tar.xz
{% endhighlight %}

+ **3.** Decompress
{% highlight bash %}
tar xvJf coreutils-8.32.tar.xz
{% endhighlight %}

+ **4.** Enter the directory and then download the patch
{% highlight bash %}
cd coreutils-8.32/
wget https://raw.githubusercontent.com/jarun/advcpmv/master/advcpmv-0.8-8.32.patch
{% endhighlight %}

+ **5.** Apply the patch
{% highlight bash %}
patch -p1 -i advcpmv-0.8-8.32.patch
{% endhighlight %}

+ **6.** Compile
{% highlight bash %}
./configure
make
{% endhighlight %}

The binary will be created in the `src` directory, ie `coreutils-8.32/src/cp`, you can move it to replace the original `cp` with the command: `sudo cp src/cp $(which cp)` (cp copies cp 😃).

Or create an alias (I think most recommended):

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>


{% highlight bash %}
mkdir -p ~/.local/bin
cp src/cp ~/.local/bin/cp
echo 'alias cp="${HOME}/.local/bin/cp"' >> ~/.bashrc
exec $SHELL
{% endhighlight %}
And test, example:
> Use the `--progress-bar` parameter

{% highlight bash %}
cp --progress-bar Documents/Fedora-Workstation-Live-x86_64-33-1.2.iso .
copying at 111,2 MiB/s (about 0h 0m 23s remaining)
Documents/Fedora-Workstation-Live-x86_64-33-1.2.iso                   340,9 MiB /   1,9 GiB
[===============================>
{% endhighlight %}

If you want to avoid using this parameter, create the alias with the parameter, example:
> `vim ~/.vimrc` and leave the alias in this file like this:

{% highlight bash %}
alias cp="${HOME}/.local/bin/cp --progress-bar"
{% endhighlight %}

Close, run `source ~/.bashrc` and test without the parameter, it will be included automatically:
{% highlight bash %}
cp Documentos/Fedora-Workstation-Live-x85_64-33-1.2.iso .
copying at 111,2 MiB/s (about 0h 0m 23s remaining)
Documentos/Fedora-Workstation-Live-x86_64-33-1.2.iso                   340,9 MiB /   1,9 GiB
[===============================>
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

The same can be used for the `mv` command which will also be in `src`, however, give preference to the `-g` parameter instead of the ~~`--progress-bar`~~, it is simpler! But honestly, I don't see any use in using this in `mv` because things are moved so fast that you don't even need it.

That's it for today!


