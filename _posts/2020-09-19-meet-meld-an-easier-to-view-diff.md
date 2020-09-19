---
layout: post
title: "Meet Meld, an easier to view diff"
date: 2020-09-19 13:50:21
image: '/assets/img/commands/meld.jpg'
description: 'Do you find it difficult to recognize changes with diff? This can help you! 😃'
featured-img: ../commands/meld.png
tags:
- commands
- meld
---

![Meet Meld, an easier to view diff](/assets/img/commands/meld.png)

[Meld](https://meldmerge.org/) is a visual comparison and merger tool for developers. Meld helps you compare files, directories and projects controlled by version.

# Installation
Use your distro's repository, examples:
{% highlight bash %}
emerge meld # Gentoo, Funtoo, ...
sudo apt install meld # Debian, Ubuntu, Mint, ...
sudo pacman -S meld # Arch, Manjaro, ...
sudo dnf install meld # Red Hat, CentOS, Fedora, ...
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

# Usage
Basically it is the same concept as `diff` but the command is `meld`, example:
{% highlight bash %}
meld file1.txt file2.txt
{% endhighlight %}

For a more detailed example, I created 2 files Shell Script:
+ `cat bye.sh`
{% highlight bash %}
#!/usr/bin/env bash

function bye(){
  [[ ! -z $1 ]] && t="$1" || t=$(basename ${HOME})
  printf "%s\n" "Bye, ${t^}!"
}

bye $1
{% endhighlight %}

+ `cat hi.sh`
{% highlight bash %}
#!/bin/sh

function hi(){
  [[ ! -z $1 ]] && t="$1" || t=$(basename ${HOME})
  printf "%s\n" "Hi, ${t^}!"
}

hi $1
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

If we use `diff bye.sh hi.sh` the output looks like this:
{% highlight bash %}
1c1
< #!/usr/bin/env bash
---
> #!/bin/sh
3c3
< function bye(){
---
> function hi(){
5c5
<   printf "%s\n" "Bye, ${t^}!"
---
>   printf "%s\n" "Hi, ${t^}!"
8c8
< bye $1
---
> hi $1
{% endhighlight %}

A little difficult to visualize, right ?!

Already with `meld bye.sh hi.sh`

![Meld area](/assets/img/commands/meld-area.jpg)

There are some program options, for example if we go to: **File** → **Format as patch ...**, save only the patch (the changes), see image below:

![Meld](/assets/img/commands/meld-sh.png)

One more example:
![One more example](/assets/img/commands/meld.jpg)

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

# References
+ <https://meldmerge.org/>
+ [opensource](https://opensource.com/article/20/3/meld)


