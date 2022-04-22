---
layout: post
title: "Install a ls command that shows file icons"
date: 2022-04-22 09:27:45
image: '/assets/img/go/logo-ls.jpg'
description: 'Written in Golang.'
tags:
- go
- commands
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

There are several alternatives to the `ls` command, some of them you can find [in this article](https://terminalroot.com/list-of-30-modern-alternatives-to-unix-commands/) .

And today we are going to get to know a new alternative that is written in [Golang](https://terminalroot.com/tags#go) and its differential in relation to [GNU Coreutils ls](https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html#ls-invocation) is that in addition to listing the files, it also displays the icons according to the *mime-type* .

# Installation
It is possible to install it on different architectures and operating systems([Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos), [BSD](https://terminalroot.com/tags#bsd)), to see the one corresponding to yours, go to [releases page](https://github.com/Yash-Handa/logo-ls/releases).

In case for [GNU/Linux](https://terminalroot.com/tags#gnu) 64-bit, use the commands below:

{% highlight sh %}
wget -q https://github.com/Yash-Handa/logo-ls/releases/download/v1.3.7/logo-ls_Linux_x86_64.tar.gz
tar zxvf logo-ls_Linux_x86_64.tar.gz
cd logo-ls_Linux_x86_64/
sudo install -v logo-ls /usr/local/bin/
{% endhighlight %}

If you also want to install the manual, run:

{% highlight sh %}
sudo cp logo-ls.1.gz /usr/share/man/man1/
{% endhighlight %}

Now just test by running the command:
{% highlight sh %}
logo-ls
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

Possible output:

![Logo ls](/assets/img/go/logo-ls-test.png)

If you want it to be your default `ls`, just create an `alias` for it, example in [BASH](https://terminalroot.com/tags#bash):
{% highlight sh %}
echo 'alias ls="logo-ls"' >> ~/.bashrc
execute $SHELL
ls
{% endhighlight %}

For more information use the commands:
{% highlight sh %}
logo-ls --help
man 1 logo-ls
{% endhighlight %}

And for more details visit the [logo-ls repository on GitHub](https://github.com/Yash-Handa/logo-ls) .

