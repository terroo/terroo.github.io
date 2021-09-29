---
layout: post
title: "Exa - An alternative to ls written in Rust"
date: 2021-09-29 15:11:50
image: '/assets/img/rust/exa.jpg'
description: 'Friendlier, simpler and faster.'
featured-img: ../rust/exa.jpg
tags:
- rust
- commands
---

![Exa - An alternative to ls written in Rust](/assets/img/rust/exa.jpg)

**exa** is a modern replacement for the ls file listing command-line program that comes with Unix and Linux operating systems, giving it more features and better standards.

It uses colors to distinguish file types and metadata. It knows symbolic links, extended attributes and Git. And it's small, fast, and just a single binary.

By deliberately making some decisions differently, exa tries to be a more feature-rich and friendlier version of ls.

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
Exa is available for many distributions and operating systems:

{% highlight sh %}
emerge sys-apps/exa # Gentoo, Funtoo, ...
sudo apt install exa # Debian, Ubuntu, Mint, ...
sudo dnf install exa # Red Hat, CentOS, Fedora, ...
sudo pacman -S exa # Arch, Manjaro, ...
sudo xbps-install -S exa # Void Linux
sudo zypper install exa # OpenSUSE
sudo cargo install exa # Other distro or system
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

# Use
Once installed, just run the exa command to list the files. Among the argument options are:

+ `-1`, `--oneline`: display one entry per line
+ `-G`, `--grid`: display entries as a grid (default)
+ `-l`, `--long`: display extended details and attributes
+ `-R`, `--recurse`: redirect to directories
+ `-T`, `--tree`: return to directories as a tree
+ `-x`, `--across`: sort the grid across instead of down
+ `-F`, `--classify`: display type indicator by filenames
+ `--color[u]r`: when using terminal colors
+ `--color[u]r-scale`: highlight file size levels distinctly
+ `--icons`: display icons
+ `--no-icons`: do not display icons (always replace --icons)

And among many other options that can be found on the official website of the ex:
## <https://the.exa.website/>


    
