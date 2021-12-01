---
layout: post
title: "12 Best Themes for your Tint2"
date: 2021-12-01 11:39:58
image: '/assets/img/openbox/tint2/lithium.jpg'
description: 'tint2 is a lightweight panel/taskbar made specifically for Openbox , but it can also work with other window managers .'
featured-img: ../openbox/tint2/lithium.jpg
tags:
- wm
- themes
---

![Twelve Best Themes for Your Tint2](/assets/img/openbox/tint2/lithium.jpg)

[tint2](https://gitlab.com/o9000/tint2) is a lightweight **panel/taskbar** made specifically for [Openbox](https://en.terminalroot.com.br/the-17-best-themes-for-your-openbox/) , but it can also work with other [window managers](https://en.terminalroot.com.br/the-25-best-tiling-window-manager-for-your-linux/) .

We published [The 17 Best Themes for your Openbox](https://en.terminalroot.com.br/the-17-best-themes-for-your-openbox/) and now to leave your *profile* even more complete let's get to know **12 Themes for your Tint2** selected and modified by me.
> The source I *gathered* from is at the end of this article.

---

# 01. Carina
This is a light theme with cool colors and cool so *not to tire the eyes*.

![Carina](/assets/img/openbox/tint2/carina.jpg)

---

# 02. Launchy
The launchy is dark style with contrasting icons.

![launchy](/assets/img/openbox/tint2/launchy.jpg)

---

# 03. Lines
Lines is minimalist, icons are not included, but you can edit easily.
![liness](/assets/img/openbox/tint2/liness.jpg)

---

# 04. Lithium
By name, you can already know its origin, the [BunsenLabs](https://www.bunsenlabs.org/).

![lithium](/assets/img/openbox/tint2/lithium.jpg)


<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# 05. Livia
Livia is simple and has icons that can also be modified to your liking.

![livia](/assets/img/openbox/tint2/livia.jpg)

---

# 06. Neon
This one is also minimalist and *comfortable*

![neon](/assets/img/openbox/tint2/neon.jpg)

---

# 07. Popside
Similar to Neon, but with stronger tones.

![popside](/assets/img/openbox/tint2/popside.jpg)

---

# 08. Repentance
Another simplistic dark style.

![repentance](/assets/img/openbox/tint2/repentance.jpg)

---

# 09. Starty
This is a light style and a little *extravagant*.

![starty](/assets/img/openbox/tint2/starty.jpg)


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

# 10. Uncreative
This is ideal for anyone who likes Magenta.

![uncreative](/assets/img/openbox/tint2/uncreative.jpg)

---

# 11. Zug
Zug already has a player to be used with [MPD](https://www.youtube.com/watch?v=tholV10zDi0) .

![zug](/assets/img/openbox/tint2/zug.jpg)

---

# 12. Red
The name of this one I made up, as I took it from [Gentoo documentation](https://wiki.gentoo.org/wiki/Tint2).

![Tintoo](/assets/img/openbox/tint2/tintoo.jpg)

---

# How to install themes
Of course you will need to have **Tint2** installed, use the package manager of your [distro](https://en.terminalroot.com.br/the-22-best-linux-distros-for-hackers-pentesting/), example for systems that use [APT](https://en.terminalroot.com.br/customize-your-ubuntu-with-wayland-sway-ulauncher-waybar/):

{% highlight sh %}
sudo apt install tint2
{% endhighlight %}

Then create a directory inside `~/.config` in your home folder:

{% highlight sh %}
mkdir -p ~/.config/tint2
{% endhighlight %}

Then just clone the repository, which I separated all previously, and move to `~/.config/tint2/`:
{% highlight sh %}
git clone https://github.com/terroo/tint2-themes
cd tint2-themes
mv * ~/.config/tint2/
{% endhighlight %}

To test use the `tint2` command with the `-c` parameter and the path of the Tint2 configuration file(tint2rc), example:
{% highlight sh %}
tint2 -c ~/.config/tint2/livia/livia.tint2rc
{% endhighlight %}

If you want to enable(make your life easier!) for every time you log into Openbox, add to your `~/.config/openbox/autostart` the line:
{% highlight sh %}
tint2 -c ~/.config/tint2/livia/livia.tint2rc &
{% endhighlight %}

---

# Theme sources:
+ <https://github.com/addy-dclxvi/tint2-theme-collections>
+ <https://forums.bunsenlabs.org/viewtopic.php?pid=85781#p85781>
+ <https://wiki.gentoo.org/wiki/Tint2>
