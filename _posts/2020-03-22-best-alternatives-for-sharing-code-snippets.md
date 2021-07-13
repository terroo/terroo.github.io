---
layout: post
title: "Best Alternatives for Sharing Code Snippets"
date: 2020-03-22 17:18:10
image: '/assets/img/code/instacode.png'
description: 'It is even possible to generate your code wallpaper with: blur, rotate and colorschemes!'
featured-img: ../code/instacode.png
tags:
- development
- programming
- tips
---

![10 Best Alternatives for Sharing Code Snippets](/assets/img/code/instacode.png)

A simple utility, but it helps a lot for those who need to constantly make code snippets available, me for example! 😀️. I separated some for you, let's go to the list!
> For some of our usage examples we will use the following file:

> `vim mycode.sh`

{% highlight bash %}
#!/usr/bin/env bash
# Code example to shared snippets
# Author: Marcos <terminalroot.com.br>
send_msg(){
    tput cnorm
    echo -e "\n\e[31;1mBye!\e[m"
    exit 127
}
trap send_msg SIGINT
tput civis
while true;
do
    echo -en "\r\e[33;1mThis is \e[36mMy Code\e[34m at \e[37m$(date +%d/%m/%Y-%H:%M:%S)\e[m"
done
done
{% endhighlight %}

![mycode.sh](/assets/img/code/code.png)

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

# 01. [ix.io](http://ix.io/)
Your code is shared via the command line, for example:
{% highlight bash %}
# Sharing a file and getting the link
cat mycode.sh | curl -F 'f:1=<-' ix.io
{% endhighlight %}
The output will inform you of the link you can use to share. If you want more ease, create a Shell function for this or use their client available on the same page, in addition to other options, such as saving codes and links when running the command.

![ix.io](/assets/img/code/ix.png)

Generated code link: <http://ix.io/2eZc>

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

# 02. [sprunge.us](http://sprunge.us/)
In the same way as the previous one, but even simpler, example of use:
{% highlight bash %}
cat mycode.sh | curl -F 'sprunge=<-' http://sprunge.us
{% endhighlight %}

![ix.io](/assets/img/code/sprunge.png)

Generated code link: <http://sprunge.us/M3zF8m>

---

# 03. [Hastebin](https://hastebin.com/)
![Hastebin](/assets/img/code/hastebin.jpg)
It works online, you need to enter (type/paste) your code and click **Save 💾 `Ctrl + s`**. If you want to share your code, just click **Just Text 📋️** or hit `Ctrl + shift + r`.

You can still use their client via the command line, installing it via [gem](https://en.terminalroot.com.br/how-to-properly-install-ruby-bundler-and-jekyll-on-ubuntu-linux/):
{% highlight bash %}
gem install haste
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

And using as follows:
{% highlight bash %}
cat mycode.sh | haste
{% endhighlight %}

Generated code link: <https://hastebin.com/morovoxegu.bash>

> There is the possibility for you to use your own server, see more details [here](https://github.com/seejohnrun/haste-client).

---

# 04. [Gist GitHub](https://gist.github.com/)
This is the option and one of the best known, as it has the [GitHub](https://github.com/terroo) brand/advertising . You can share anonymously too or if you are logged in, it is recorded for your user.

There are even customers for him: [Lepton](https://hackjutsu.com/Lepton/) and also: [Gisto](https://www.gistoapp.com/). Another unrelated service is a url shortener: [git.io](https://git.io/), it only shortens website URLs/addresses related to GitHub, but it works if you want to shorten your snippets and even same long GitHub URL.

You can shorten it via the command line in a personalized way, example:
> Edit **YOUR_LONG_URL** and **LETTERS_CUSTOMIZED** for specific names if you want.

{% highlight bash %}
curl https://git.io/ -i -F "url=YOUR_LONG_URL" -F "code=LETTERS_CUSTOMIZED"
# curl https://git.io/ -i -F "url=https://gist.github.com/terroo/5bafbcb1cc6f4ab922b70fa165e39468" -F "code=mycode.sh"
{% endhighlight %}

Generated code link: git.io/mycode.sh

![Gist](/assets/img/code/gist.png)

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

# 05. [GitLab Snippets](https://docs.gitlab.com/ee/user/snippets.html)
![GitLab Snippets](/assets/img/code/gitlab_snippet.png)
Similar to Gist, however, there is no possibility to create anonymous snippets, you must be logged into your [GitLab](https://gitlab.com/terminalroot) account. A very beautiful interface!

The codes that the programmers made available to the public can be consulted [here](https://gitlab.com/explore/snippets).

To create you need to be logged in and go to the [+](https://gitlab.com/snippets/new) button or the [New Snippet](https://gitlab.com/snippets/new) button.
![New Snippet GitLab](/assets/img/code/snippet-gitlab.png)

<https://gitlab.com/snippets/1955776>

---

# 06. [paste.sh](https://paste.sh/)
It also works online and it encrypts your URL, just access the address and type/paste your code and it automatically saves and makes `raw` available in the bottom right corner of the screen: <https://paste.sh/>.

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

# 07. [Termbin](http://termbin.com/)
This is a show of the ball, it runs via the command `nc` (needs to have [netcat](http://nc110.sourceforge.net/) installed) and the insertion is very simple, example:
{% highlight bash %}
cat mycode.sh | nc termbin.com 9999
{% endhighlight %}

---

# 08. [InstaCode](http://instaco.de/)
This is loko, sharing is via image and you can create Wallpaper and edit your image: rotate, blur, colorschemes and among other options! Worth the click.
![InstaCode](/assets/img/code/instacode.png)

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Generated code link: <http://instaco.de/119823>

# 09. [Ubuntu PasteBin](https://paste.ubuntu.com/)
It goes without saying that it is from [distribution](https://en.terminalroot.com.br/generate-automatic-motivational-phrases-in-terminal/) [Linux](https://en.terminalroot.com.br/the-fuck-the-command-that-corrects-incorrectly-typed-commands/) [Ubuntu](https://en.terminalroot.com.br/ubuntu-christian-an-ubuntu-linux-for-christians/) with a clean and professional interface:
![Ubuntu PasteBin paste](/assets/img/code/ubuntu-snippet-1.jpg)
![Ubuntu PasteBin code](/assets/img/code/ubuntu-snippet-2.jpg)

Generated code link: <https://paste.ubuntu.com/p/bwqY6XHpqm/>

# 10. [0x0.st](http://0x0.st/)
![0x0.st](/assets/img/code/0x0.jpg)
This is complete, it is not just a code snippet, but a file sharing, url and everything you want within the limit of 512MB.

It is an alternative to [transfer.sh](https://transfer.sh/). Example of use:
{% highlight bash %}
curl -F'file=@mycode.sh 'http://0x0.st
{% endhighlight %}

---

# Bonus - [Carbon](https://carbon.now.sh/)
![Carbon](/assets/img/code/carbon.png)

And as a bonus tip, perhaps the most dearest alternative for the guys is [Carbon](https://carbon.now.sh/). You can choose color scheme, background color and even save generated image in 3 different resolutions including 4k.

---

There is no shortage of options, feel free to choose in this alternative world! 😀️ One that I would definitely not recommend would be ~~PasteBin.com~~, this one generates ['bad interpreter'](https://terminalroot.com.br/2014/09/resolvendo-bad-interpreter-no-bash. html) in your code, if you download and use it on Linux.

# Thanks for reading!

### Useful links:
+ <https://alternativeto.net/software/github-gist/>
+ <https://www.saashub.com/github-gist-alternatives>
+ <https://www.slant.co/topics/7247/~code-snippets-manager>


    
