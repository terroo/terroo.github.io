---
layout: post
title: "Learn to Create a Graphical Application with C++ and GTKmm"
date: 2021-03-09 10:46:36
image: '/assets/img/cpp/gtkmm-cpp.jpg'
description:
featured-img: ../cpp/gtkmm-cpp.jpg
tags:
- cpp
- gtkmm
---

![Learn to Create a Graphical Application with C++ and GTKmm](/assets/img/cpp/gtkmm-cpp.jpg)

[Gtkmm](https://www.gtkmm.org/en/) is the official C++ interface for the popular GTK GUI library. gtkmm is free software distributed under the GNU Lesser General Public License (LGPL).

[C++](https://terminalroot.com.br/cpp) is a compiled multi-paradigm programming language (its support includes imperative, object-oriented and generic language) and general use. Since the 1990s, it has been one of the most popular commercial languages, and is also widely used in academia for its great performance and user base. It was created by Bjarne Stroustrup.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

In this video we built the layout via code with the gtkmm library, a clone application of the old [Password Exporter](https://discourse.mozilla.org/t/password-exporter-https-addons-mozilla-org-en-us-firefox-addon-password-exporter/27052/6), an application for Firefox that has been discontinued, but we are going to recreate it as an exercise, however, by exporting the saved logins and passwords data in the browser with a file [encrypted](https://en.terminalroot.com.br/18-ways-to-generate-and-store-strong-passwords/) with [GNUPG](https://gnupg.org/) .

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Installation

On [Gentoo](https://en.terminalroot.com.br/10-fundamental-tips-for-your-gentoo-linux/), Funtoo and similar
{% highlight bash %}
emerge gtkmm
{% endhighlight %}

In [Debian](https://en.terminalroot.com.br/why-i-gave-up-on-debian/), [Ubuntu](https://en.terminalroot.com.br/customize-your-ubuntu-with-wayland-sway-ulauncher-waybar/), [Linux Mint](https://en.terminalroot.com.br/transform-your-mint-ubuntu-or-debian-with-bspwm-polybar-rofi/) and similar
{% highlight bash %}
sudo apt-get install libgtkmm-3.0-dev
{% endhighlight %}

And for Fedora, [Red Hat](https://en.terminalroot.com.br/take-multiple-free-red-hat-linux-courses/) and the like
{% highlight bash %}
sudo dnf install gtkmm30-devel  
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

# Tutorial
Below is a video that shows how to create a graphical application that will serve to export and import passwords from Firefox and save in GPG format.

The video is in Brazilian Portuguese, but if you want to skip the introduction and just see the code development start from time [5:01](https://youtu.be/83vtYDbvB1Q?t=301)

<iframe width="900" height="380" src="https://www.youtube.com/embed/83vtYDbvB1Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
    
