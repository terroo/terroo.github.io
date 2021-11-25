---
layout: post
title: "The 17 Best Themes for your Openbox"
date: 2021-11-25 14:30:07
image: '/assets/img/openbox/pelangi-min.jpg'
description: 'Apart from being minimalist and lightweight, Openbox is also surprisingly customizable and flexible.'
featured-img: ../openbox/pelangi-min.jpg
tags:
- wm
- themes
---

![The 17 Best Themes for your Openbox](/assets/img/openbox/pelangi-min.jpg)

In addition to being minimalist and lightweight, **Openbox** is also surprisingly customizable and flexible. A user can easily change various settings related to theme, appearance, window placement, snapping and more.

For those who want to escape the "*weight*" of a [Desktop Environment](https://terminalroot.com.br/tags#gnome), however, having a simple environment with facilities to close, expand and minimize windows is not there is still nothing better than Openbox.

In this article, we will know 17 themes carefully selected by me from this excellent [windows manager](https://en.terminalroot.com.br/wayfire-a-wm-3d-composer-installation-on-arch-linux/) .

---

# 01. Afterpiece
This is perhaps the simplest on this list, ideal for those who like minimalism, but with the *dark side of strength*!

![Afterpiece](/assets/img/openbox/afterpiece-min.jpg)


<!-- SQUARE -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# 02. Arc Darkest
This is used by many not only in Openbox, but in other window managers and desktop environments.

![Arc Darkest](/assets/img/openbox/arc-darkest-min.jpg)

---

# 03. Blocks
A modern light style theme with light but varied colors.

![Blocks](/assets/img/openbox/blocks-min.jpg)

---

# 04. Box-Dark
This is the extreme of minimalism.

![Box-Dark](/assets/img/openbox/box-dark-min.jpg)

---

# 05. Clair-Crimson
Another modern and with different window controls.

![Clair](/assets/img/openbox/clair-min.jpg)

---

# 06. Cosmic-Travel
For those who like a retro style, but well *remixed*.

![Cosmic Travel](/assets/img/openbox/cosmic-travel.jpg)

---

# 07. Dracula
One of the most loved!

![Dracula](/assets/img/openbox/Dracula-min.jpg)

---

# 08. Dracula-withoutBorder
Same as above, but without borders.

![Dracula withoutBorder](/assets/img/openbox/Dracula-withoutBorder-min.jpg)

---

# 09. Joy
It can design controls differently on your system, it's cool!

![Joy](/assets/img/openbox/joy-min.jpg)

---

# 10. Lovely
Blend of Light + Modern + Adorable!


<!-- WIDE RECTANGLE 2 -->
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

![Lovely](/assets/img/openbox/lovely-min.jpg)

---

# 11. Nord-Openbox-theme
The version of the famous Nord for Openbox.

![Nord](/assets/img/openbox/nord-openbox-min.jpg)

---

# 12. orwT
This one we installed in the Arch Linux with Openbox video, in case you want to watch the video: [click here](https://youtu.be/rxN9jNXiy-c)

![orwT](https://terminalroot.com.br/assets/img/distros/archlinux-openbox.jpg)

---

# 13. Pelangi
A colored gradient and no window controls.

![Pelangi](/assets/img/openbox/pelangi-min.jpg)

---

# 14. Prismatic-Night
This one is for those who like *extravagance* .
![Prismatic](/assets/img/openbox/prismatic-night-min.jpg)

---

# 15. Raven-Crimson
Similar to [Clair](#Clair-Crimson) , but in dark style!

![Raven](/assets/img/openbox/raven-min.jpg)

---

# 16. Surreal_Gentoo
This is from [Gentoo](https://terminalroot.com.br/tags#gentoo), oddly enough, among so many cool ones, this is what I use the most =) .

![Surreal_Gentoo](/assets/img/openbox/surreal-gentoo-min.jpg)

---

# 17. Yaru
Yaru version, default from [GNOME](https://terminalroot.com.br/tags#gnome) on [Ubuntu](https://terminalroot.com.br/tags#ubuntu)

![Yaru](/assets/img/openbox/yaru-min.jpg)

---

# How to install themes?
I've separated them all into a single repository to make it easier, so you can do it like this:
> In the repository there is only [Cosmic-Travel](https://github.com/Alexdaz/Cosmic-Travel)

{% highlight sh %}
mkdir -p ~/.themes
git clone https://github.com/terroo/openbox-themes
cd openbox-themes
mv * ~/.themes
{% endhighlight %}

And to change the theme there are two ways. The first is how do I edit the file: `~/.config/openbox/rc.xml`

and Below the `<theme>` tag between the `<name>` tags inform the name of the theme according to its folder name, example:
> Use the same name as there is in this article in the title of each one, respecting the dashes(`-`) and the underlines(`_`), without spaces.

{% highlight html %}
<theme>
  <name>Surreal_Gentoo</name>
<!-- ... -->
{% endhighlight %}

And then reread the Openbox settings:

{% highlight sh %}
openbox --reconfigure
{% endhighlight %}

The other one is even simpler, just install **LX Appearance** and use it is a graphical and intuitive program.


<!-- MINI ANNOUNCEMENT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Below are the links from where I selected the themes:
+ <http://openbox.org/download-themes.php>
+ <https://store.kde.org/p/1017696/>
+ <https://www.box-look.org/browse?cat=140&ord=latest>
+ <https://github.com/the-zero885/dracula-Openbox>
+ <https://github.com/owl4ce/yao>
+ <https://github.com/the-zero885/Nord-Openbox-theme>
+ <https://github.com/Alexdaz/Cosmic-Travel>
+ <https://github.com/zakuradev/openbox-themes>

Send a **✪** there on GitHub! 😃
