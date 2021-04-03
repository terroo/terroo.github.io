---
layout: post
title: "How to Export Firefox Passwords in GPG with C++"
date: 2021-04-03 17:41:15
image: '/assets/img/cpp/fox-gpg-submodule.jpg'
description: 'New video from the Gtkmm series'
featured-img: ../cpp/fox-gpg-submodule.jpg
tags:
- cpp
- gtkmm
- git
---

![How to Export Firefox Passwords in GPG with C++](/assets/img/cpp/fox-gpg-submodule.jpg)

In this video we export the password data and URLs saved in Firefox with [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/) in [GPG](https://en.terminalroot.com.br/18-ways-to-generate-and-store-strong-passwords/) format with encryption and add it as a library with `git submodule`.

This video is a continuation of the video: [Learn to Create a Graphical Application with C++ and GTKmm](https://en.terminalroot.com.br/learn-to-create-a-graphical-application-with-c-and-gtkmm/).

We uploaded the files to [GitHub](https://en.terminalroot.com.br/top-5-best-git-clients-for-linux-mac-and-windows/) and if you want to test it just do the following:

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight bash %}
git clone https://github.com/terroo/pass-firefox
cd pass-firefox
git submodule update --init
make
./app-pass-firefox
{% endhighlight %}

# Watch the video
Below is a video that shows how to create a graphical application that will serve to export and import passwords from Firefox and save in GPG format. The video is in Brazilian Portuguese, enable subtitles to your language. **The translations offers by Youtube Artificial Intelligence**.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

<iframe width="900" height="380" src="https://www.youtube.com/embed/bdExgjQUi9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


