---
layout: post
title: "5 Tools for you to use on your WM"
date: 2020-01-14 14:31:13
image: '/assets/img/wm/5-tools-to-unixporn.jpg'
description: '5 useful(less) and attractive tools to use on your #unixporn rice.'
featured-img: ../wm/5-tools-to-unixporn.jpg
tags:
- wm
- tools
- tilling
- i3wm
- bspwm
- shell
---

![5 Tools for you to use on your WM](/assets/img/wm/5-tools-to-unixporn.jpg)

In this post I will show you 5 useful(less) and attractive tools to use in your rice on #unixporn

---

## 1. Pipes

Pipes are animated screen savers

To install:
{% highlight bash %}
git clone https://github.com/pipeseroni/pipes.sh.git
cd pipes.sh
sudo make install
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

Then run `pipes.sh` on the terminal, to exit press the `q` key. For more information and parameters see the manual section 6 page: `man 6 pipes.sh`.

![pipes](/assets/img/wm/pipes.sh.png)

Useful links for `pipes.sh`

+ <https://github.com/pipeseroni/pipes.sh>
+ <https://pipeseroni.github.io/pipes.sh/pipes.sh.6.html#HISTORY>

---

## 2. tty-clock

Displays a simple digital clock on the terminal.

To install:
{% highlight bash %}
git clone https://github.com/xorg62/tty-clock.git
cd tty-clock
sudo make install
{% endhighlight %}

Then run `tty-clock` on the terminal if you want to leave in the center run with the parameter `-c` `tty-clock -c`, to exit press `q`. For more information and parameters refer to page 1 of the manual: `man 1 tty-clock`.

![tty-clock](/assets/img/wm/tty-clock.png)

Useful link for `tty-clock`
+ <https://github.com/xorg62/tty-clock>

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## 3. Neofetch with images

Displays image in neofetch instead of ASCII characters.

After installing Neofetch via your package manager, also install the w3m package, examples:
{% highlight bash %}
emerge w3m # Gentoo, Funtoo, Sabayon, ...
apt install w3m # Debian, Ubuntu, Mint, ...
pacman -S w3m # Arch, Manjaro, Antergos, ...
{% endhighlight %}

Then edit the neofetch configuration file: `vim ~/.config/neofetch/config.conf` then look for the line with the term: `image_backend`, if you can't find it add it to w3m: `image_backend="w3m"`. Also change the line with the term `image_source` and assign your image path: `image_source="/path/to/image.png"`, if you want your Wallpaper to appear, give the word wallpaper: `image_source="wallpaper"`

Turn the neofetch.

![tty-clock](/assets/img/wm/tty-clock.png)

Useful link for `neofetch`
+ <https://github.com/dylanaraps/neofetch>

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

## 4. pacman.sh

Download the code: `wget http://bit.ly/pacmansh -O pacman.sh`, make it executable `chmod +x pacman.sh`, run it: ./pacman.sh. If you want it to appear every time you open the terminal, run the commands below:

For BASH:
{% highlight bash %}
mv pacman.sh ~/.local/share/
echo '$HOME/.local/share/pacman.sh' >> ~/.bashrc
{% endhighlight %}

For ZSH:
{% highlight bash %}
mv pacman.sh ~/.local/share/
echo '$HOME/.local/share/pacman.sh' >> ~/.zshrc
{% endhighlight %}

For FISH:
{% highlight bash %}
mv pacman.sh ~/.local/share/
echo '$HOME/.local/share/pacman.sh' >> ~/.config/fish/config.fish
{% endhighlight %}

![pacman.sh](/assets/img/wm/pacman.sh.png)

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

---

## 5. colors.sh

Tests your terminal's emulator color scheme.

Download the code: `wget http://bit.ly/colorssh -O colors.sh`, make it executable `chmod +x colors.sh`, run it: `./colors.sh` . If you want to make a command for your user, run the commands below:

For BASH:
{% highlight bash %}
mv colors.sh ~/.local/share/
echo 'alias colors="$HOME/.local/share/colors.sh"' >> ~/.bashrc
source ~/.bashrc
colors
{% endhighlight %}

For ZSH:
{% highlight bash %}
mv colors.sh ~/.local/share/
echo 'alias colors="$HOME/.local/share/colors.sh"' >> ~/.zshrc
source ~/.zshrc
colors
{% endhighlight %}

For FISH:
{% highlight bash %}
mv colors.sh ~/.local/share/
echo 'alias colors="$HOME/.local/share/colors.sh"' >> ~/.config/fish/config.fish
source ~/.config/fish/config.fish
colors
{% endhighlight %}

![colors.sh](/assets/img/wm/colors.sh.png)

---

Thanks!
