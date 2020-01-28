---
layout: post
title: "Discover and Install Oh My Bash!"
date: 2020-01-28 07:46:33
image: '/assets/img/bash/oh-my-bash-min.jpg'
description: 'Make your Terminal more attractive to increase and improve your desire to always use it.'
featured-img: ../bash/oh-my-bash-min.jpg
tags:
- bash
- shell
- terminal
---

![Discover and Install Oh My Bash!](/assets/img/bash/oh-my-bash-min.jpg)

# Introduction

[Oh-My-Bash](https://ohmybash.github.io/) is a styling set for your terminal and open source to manage your settings in BASH. It comes with a ton of useful functions, help, plugins, themes and more! If you've heard about [Oh-My-Zsh](https://ohmyz.sh/) before, this project is a fork of it, but in [Bourne Again Shell](https://www.gnu.org/software/bash/).

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

To install Oh My Bash, you can choose between [cURL](https://curl.haxx.se/) or [GNU wget](https://www.gnu.org/software/wget/), see the commands below:

> If you don't have cURL installed, use your distribution's package manager, eg sudo emerge curl # For Gentoo and similar

+ **Via cURL**:
{% highlight bash %}
sh -c "$(curl -fsSL https://raw.github.com/ohmybash/oh-my-bash/master/tools/install.sh)"
{% endhighlight %}

+ **Via wget**:

{% highlight bash %}
sh -c "$(wget https://raw.github.com/ohmybash/oh-my-bash/master/tools/install.sh -O -)"
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

Below is the output of the command when you install:

> Note that during installation, it may ask if you want to check for updates, in which case you press Y to accept, or N to not update.

{% highlight bash %}
marcos@gentoo ~ $ sh -c "$(curl -fsSL https://raw.github.com/ohmybash/oh-my-bash/master/tools/install.sh)"
Cloning Oh My Bash...
Cloning into '/home/marcos/.oh-my-bash'...
remote: Enumerating objects: 257, done.
remote: Counting objects: 100% (257/257), done.
remote: Compressing objects: 100% (174/174), done.
remote: Total 257 (delta 17), reused 223 (delta 17), pack-reused 0
Receiving objects: 100% (257/257), 355.64 KiB | 170.00 KiB/s, done.
Resolving deltas: 100% (17/17), done.
Looking for an existing bash config...
Found ~/.bashrc. Backing up to ~/.bashrc.pre-oh-my-bash
Using the Oh My Bash template file and adding it to ~/.bashrc
         __                          __               __  
  ____  / /_     ____ ___  __  __   / /_  ____ ______/ /_
 / __ \/ __ \   / __ `__ \/ / / /  / __ \/ __ `/ ___/ __ \
/ /_/ / / / /  / / / / / / /_/ /  / /_/ / /_/ (__  ) / / /
\____/_/ /_/  /_/ /_/ /_/\__, /  /_.___/\__,_/____/_/ /_/
                        /____/                            .... is now installed!
Please look over the ~/.bashrc file to select plugins, themes, and options
To keep up on the latest news and updates, follow us on GitHub: https://github.com/ohmybash/oh-my-bash
[Oh My Bash] Would you like to check for updates? [Y/n]: \c
y
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

It automatically modifies its **PS1** variable with its default theme and enters the default Oh-My-Bash directory. I advise you to leave the terminal and reopen to see if everything is right.

# Changing the theme

There are several themes available for Oh-my-bash, to see the complete list use the link:
### <https://github.com/ohmybash/oh-my-bash/tree/master/themes>

Or in the directory: `ls ~/.oh-my-bash/themes/`

To change to the theme you want, it works like this. Assuming you want to change to the font theme (this is the name of the theme). Open the `~/.bashrc` file, look for the line that starts with the word: `OSH_THEME`, usually in the sixth line and change to the name you want.

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
