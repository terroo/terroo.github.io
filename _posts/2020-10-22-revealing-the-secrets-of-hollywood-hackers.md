---
layout: post
title: "Revealing the Secrets of Hollywood Hackers"
date: 2020-10-22 15:20:40
image: '/assets/img/hacker/no-more-secrets.jpg'
description: 'Who has never seen those movie hackers decrypting data with a single [enter]?'
featured-img: ../hackers/no-more-secrets.jpg
tags:
- movies
- hackers
---

![Revealing the Secrets of Hollywood Hackers](/assets/img/hacker/no-more-secrets.jpg)

Who has never seen those movie hackers decrypting data with a single [enter]? It would be nice if it was that easy, but the effect is cool! 😃

Now let's see how they do those crude decryptions, as in the excerpt from [this movie](https://www.youtube.com/watch?v=F5bAa6gFvLs&t=35):

<iframe width="1100" height="490" src="https://www.youtube.com/embed/F5bAa6gFvLs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Sem mais segredos! 😎

# No More Secrets

This project is a command line tool called `nms` that recreates the famous data decryption effect seen on the screen in the 1992 hacker movie, Sneakers.

Channel any ASCII or UTF-8 text to `nms` and apply the Hollywood effect, initially showing the encrypted data and then starting a decryption sequence to reveal the original plain text characters.

# Installation

Someone has endeavored to create software that makes the same effect via the command line. To install just run the commands below in order:

> You will need [git](https://en.terminalroot.com.br/how-to-clone-only-a-subdirectory-with-git-or-svn/), [make](https://en.terminalroot.com.br/how-to-create-a-makefile/) and [gcc](https://en.terminalroot.com.br/gcc-vs-llvm-which-is-the-best-compiler/) installed.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight bash %}
git clone https://github.com/bartobri/no-more-secrets.git
cd ./no-more-secrets
make nms
make sneakers             ## Optional
sudo make install
{% endhighlight %}

# Use

To use it, just run any command that displays output and throw the `stdout` to the `nms` command (eg: `man ls | head -n 30 | nms`) and after the “encrypted” data is displayed, just press [enter] to “decrypt”. See the image below:

![alt](url)

![No More Secrets](/assets/img/hacker/no-more-secrets.gif)

Alternatively you also have the `sneakers` command that displays exactly the content of the [Sneakers](https://www.youtube.com/watch?v=F5bAa6gFvLs&t=35) movie:

![Sneakers](/assets/img/hacker/sneakers.gif)

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

If you want to `uninstall` just enter the repository you cloned, run the command: `sudo make uninstall` and remove the repository from your computer:

{% highlight bash %}
git clone https://github.com/bartobri/no-more-secrets.git
cd ./no-more-secrets
sudo make uninstall
cd ..
rm -rf ./no-more-secrets
{% endhighlight %}
There, it's the first step to becoming a hacker… Hollywood! 😛

# No More Secrets Official Page
## <https://github.com/bartobri/no-more-secrets>



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
    
