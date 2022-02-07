---
layout: post
title: "Nyxt, an Emacs-style browser made with Common Lisp"
date: 2022-02-07 13:16:37
image: '/assets/img/web/nyxt.jpg'
description: 'Is a fully hackable web browser - all its source code can be introspected, modified and tweaked to your exact specification.'
tags:
- lisp
- web
- browser
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[Nyxt Browser](https://nyxt.atlas.engineer/) is a fully hackable web browser - all its source code can be introspected, modified and tweaked to your exact specification.

It was written in [Lisp](https://nyxt.atlas.engineer/) and based on [Emacs] style commands(https://terminalroot.com.br/2018/07/spacemacs-um-editor-para-development -professional.html) .

# Installation
There are several ways to install Nyxt on your system. Despite being officially available for [Linux](https://terminalroot.com/tags#linux), it can also be installed on [macOS](https://terminalroot.com/tags#macos) and [ FreeBSD](https://terminalroot.com/tags#freebsd) .

For Linux, the way of installation may depend on your distribution, however, regardless of your [distribution](https://terminalroot.com/tags#distros) there is a way that fits all and does not need any dependency and is the way I recommend, but at the end of this article there are links that you can see how to install in another way.

+ First create a local directory named `nyxt` and enter it:
{% highlight sh %}
mkdir nyxt && cd nyxt
{% endhighlight %}

+ Download the compressed file:
> This is the latest version according to this article.
{% highlight sh %}
wget https://github.com/atlas-engineer/nyxt/releases/download/2.2.4/nyxt-2.2.4.tar.xz
{% endhighlight %}

+ Unzip the file:
{% highlight sh %}
tar Jxvf nyxt-2.2.4.tar.xz
{% endhighlight %}
> From now on you can test Nyxt by running the command: `./usr/local/bin/nyxt`

+ After unzipping, remove the `tar.xz` file:
{% highlight sh %}
rm nyxt-2.2.4.tar.xz
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

+ Exit directory and move `nyxt` directory to `/opt`
{% highlight sh %}
CD ..
sudo mv nyxt/ /opt/
{% endhighlight %}

+ Now create a symbolic link to `/usr/local/bin`:
{% highlight sh %}
sudo ln -s /opt/nyxt/usr/local/bin/nyxt /usr/local/bin/nyxt
{% endhighlight %}
> From that moment on, you can test Nyxt just by running the command: `nyxt`

+ Make it possible to access it via [Launcher](https://terminalroot.com/12-best-launchers-for-linux/) or your system's Dashboard and copy the `.desktop ` for Launcher:
{% highlight sh %}
find /opt/nyxt/ -name "nyxt.desktop" -exec sudo cp {} /usr/share/applications/ \;
{% endhighlight %}

+ Change the executable path of the `nyxt.desktop` file:
{% highlight sh %}
sudo sed -i 's/Exec.*/Exec=nyxt %u/g' /usr/share/applications/nyxt.desktop
{% endhighlight %}

+ Set the default path for the Nyxt icon to be displayed correctly:
{% highlight sh %}
sudo cp $(find /opt/nyxt/ -name "nyxt.png" | grep 256x256) /usr/share/pixmaps/
{% endhighlight %}

Now test by trying to find it and opening it from your Launcher/Dashboard.
> In my case I use [Rofi](https://terminalroot.com/how-to-install-rofi-in-gentoo-and-create-shortcut-for-it-in-bspwm/):
[![Nyxt Launcher Rofi](/assets/img/web/nyxt-rofi.jpg)](/assets/img/web/nyxt-rofi.jpg)
> Click on the image to open in a new tab for a larger view.


<!-- RECTANGLE 2 - OnParagragraph -->
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

# Usage
As soon as you open Nyxt for the first time, the home page already offers you links to: **Keyboard shortcuts**, **Tutorials** and others, but the basic procedures for navigating are:
> Remember that in [Emacs](https://terminalroot.com/top-10-best-code-editors-for-linux/) almost everything is combinations with the keys **Ctrl** and * *Alt**, where **C** is *Ctrl* and **M** is *Alt* .

+ `Cl`(Ctrl + L): Open a URL , if you do not enter the protocol, eg `https://terminalroot.com/` it will search by default in [DuckDuckGo](https://duckduckgo.com/?q=https%3A%2F%2Fterminalroot.com%2F&t=h_&ia=web) the name/URL entered.
+ `C-r`: Refresh the page (Reload the buffer)
+ `M-l`(Alt + L): Open the URL in a new buffer
+ `C-[, C-]`: Toggle buffer
+ `M-[`: Returns to the previous page while browsing
+ `M-]`: Goes to the page accessed while browsing
+ `C-j`: Displays all clickable links on the page - Then type the two letters that appear from the link and press ENTER
+ `C-q`: Quit Nyxt Browser
+ `C-space`: To run a command
+ `F1 b`: Display all hotkeys
+ `Esc`: Closes the lower menu when it is open.

In the lower bar of the browser, there is the possibility to change tabs, open menu, reload the page and among others using only the mouse click:

[![Nyxt Bottom Bar](/assets/img/web/nyxt-bottom-bar.png)]((/assets/img/web/nyxt-bottom-bar.png)
> Click on the image to open in a new tab for a larger view.

---

For other forms of installation and complete documentation, access the links below:
+ <https://github.com/atlas-engineer/nyxt>
+ <https://nyxt.atlas.engineer/documentation>
+ <https://nyxt.atlas.engineer/download>
+ <https://github.com/atlas-engineer/nyxt/blob/master/documents/README.org>

