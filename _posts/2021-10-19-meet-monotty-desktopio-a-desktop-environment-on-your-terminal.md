---
layout: post
title: "Meet Monotty Desktopio - A desktop environment on your Terminal"
date: 2021-10-19 15:56:35
image: '/assets/img/terminal/monotty-desktopio.jpg'
description: 'Terminal multiplexer with TUI window manager and session sharing.'
featured-img: ../terminal/monotty-desktopio.jpg
tags:
- terminal
---

![Meet Monotty Desktopio - A desktop environment on your Terminal](/assets/img/terminal/monotty-desktopio.jpg)

[Monotty Desktopio](https://vtm.netxs.online/) is a text-based desktop inside your terminal.

To work on your terminal it needs to have the following features:
+ [Unicode/UTF-8](https://www.cl.cam.ac.uk/~mgk25/unicode.html)
+ [Grapheme Clustering](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)
+ [24-bit True Color](https://github.com//termstandard/colors) or higher.
+ [xterm-style Mouse Reporting](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h2-Mouse-Tracking)

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

To test just run the command:

{% highlight sh %}
ssh vtm@netxs.online
{% endhighlight %}

You will see something like:

![Monotty Desktopio](https://user-images.githubusercontent.com/11535558/127660289-25e71ef1-d17d-42d1-b79e-00e570056fe4.gif)

If you want to build on your machine install [git](https://en.terminalroot.com.br/onefetch-generate-a-fetch-from-your-git-repository/), [cmake](https://en.terminalroot.com.br/how-to-compile-your-programs-with-cmake/) and [gcc](https://en.terminalroot.com.br/gcc-vs-llvm-which-is-the-best-compiler/) and run the commands:

{% highlight sh %}
git clone https://github.com/netxs-group/VTM.git && cd ./VTM
cmake ./src -DCMAKE_BUILD_TYPE=Release
cmake --build .
cmake --install .
{% endhighlight %}

On Windows replace gcc with [Visual Studio 2019](https://visualstudio.microsoft.com/pt-br/downloads/) and run the commands:

{% highlight sh %}
git clone https://github.com/netxs-group/VTM.git && cd ./VTM
cmake ./src -DCMAKE_BUILD_TYPE=Release "-GVisual Studio 16 2019"
cmake --build . --config Release
cd ./Release
powershell ../src/install/install.ps1
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

For more information visit the website: <https://vtm.netxs.online/> .


    
