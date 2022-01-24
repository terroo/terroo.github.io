---
layout: post
title: "Create slideshow from terminal"
date: 2022-01-24 15:11:48
image: '/assets/img/markdown/mdp.jpg'
description: 'For differentiated presentations'
tags:
- terminal
- commands
- markdown
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

--

Sometimes having a different presentation makes all the difference . **mdp** is a [markdown](https://terminalroot.com/tags#markdown) presentation tool via [command line](https://terminalroot.com/tags#terminal ).

---

# Installation
First of all make sure you have dependencies such as:
+ [Git](https://terminalroot.com/tags#git)
+ [gcc](https://terminalroot.com/tags#gcc)
+ [GNU Make](https://terminalroot.com/tags#make)
+ [Ncurses](https://terminalroot.com/ncurses)

There are a few ways to install depending on your operating system or [distribution](https://terminalroot.com/tags#distros) [Linux](https://terminalroot.com/tags#linux).

However, among all of them I recommend you to compile, which by the way is very fast.

For that do:

{% highlight sh %}
git clone https://github.com/visit1985/mdp
cd mdp
{% endhighlight %}

I had tried to compile, but it gave an error and I realized that the problem is in the compilation of the [Ncurses] library (https://terminalroot.com/ncurses), but I managed to reslver .


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

I didn't send a [PR](https://terminalroot.com/top-5-best-git-clients-for-linux-mac-and-windows/) because it would take a long time for the guy to accept, so before compiling run this command below inside the *mdp/* directory

{% highlight sh %}
sed -i 's/\-l\$(CURSES)/-l$(CURSES) -ltinfow/g' Makefile
{% endhighlight %}
> This command will replace the line that compiles only Ncurses of type *long strings* and also add to [terminfo](https://terminalroot.com/tags#shellscript), remembering that the **w** of the ` -ltinfo` is extremely important, if you remove it even compiles, but there will be [segmentation failure](https://en.wikipedia.org/wiki/Segmentation_fault) .

And now just compile:
{% highlight sh %}
make
{% endhighlight %}

To test there is already a `sample.md` in the mdp root directory, so run:
{% highlight sh %}
./mdp sample.md
{% endhighlight %}

The likely output will be similar to the gif below:

![MDP](https://cloud.githubusercontent.com/assets/2237222/5810237/797c494c-a043-11e4-9dbd-959cab4055fa.gif)

If you want to install it on your system, run:
{% highlight sh %}
sudo make install
{% endhighlight %}

For more information visit: <https://github.com/visit1985/mdp> .


