---
layout: post
title: "Learn to Program with a Terminal Utility"
date: 2020-06-17 15:08:56
image: '/assets/img/terminal/cheat-sh.png'
description: 'A Cheat Sheet via the command line.'
featured-img: ../terminal/cheat-sh.png
tags:
- terminal
- programming
- commands
---

![Learn to Program with a Terminal Utility](/assets/img/terminal/cheat-sh.png)

[Cheat.sh](http://cheat.sh/) is a command line utility based on a concise documentation repository dedicated to learning programming languages ​​from scratch. You have access to Cheat Sheet for 58 programming languages, covering all popular languages ​​and more.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Installation
To use it is very simple, you will need to have [curl](https://en.terminalroot.com.br/12-tips-for-you-to-use-commando-curl-as-a-ninja/ installed and then just run the command below:
{% highlight bash %}
curl cheat.sh
{% endhighlight %}

On the "home page" you already get a quick guide to use. And to use quick help, just rotate:
{% highlight bash %}
curl cht.sh/:help
{% endhighlight %}

# Using
Well, the use is as intuitive as the home page, but let's look at examples. Assuming you are studying the [Lua](https://en.terminalroot.com.br/hello-world-in-25-programming-languages-proposal-docs-and-links/) programming languages ​​, just run the command:
{% highlight bash %}
curl cht.sh/lua
{% endhighlight %}

Before that you need to have the dependencies installed, they are: [xsel](http://www.vergenet.net/~conrad/software/xsel) and [rlwrap](http://utopia.knoware.nl/~hlubub/uck/rlwrap/), use your distro's package manager (*apt*, *dnf*, *pacman*, ...). As I use [Gentoo](https://en.terminalroot.com.br/how-to-create-an-ebuild-on-gentoo/), [Portage](https://en.terminalroot.com.br/configuring-mirrors-in-gentoo/) allows me to search both dependencies on one line and install them:

![Gentoo Portage cheat.sh](/assets/img/terminal/gentoo-portage-cheat-sh.png)

And then just install them:
{% highlight bash %}
sudo emerges xsel rlwrap
{% endhighlight %}

> **GENTOO TIP** If you also use [Gentoo](https://en.terminalroot.com.br/10-fundamental-tips-for-your-gentoo-linux/) and are currently compiling some other software, don't wait for it to finish, [Portage](https://wiki.gentoo.org/wiki/Portage) doesn't use *locks* `.lock` like [APT](https://github.com/terroo/apt) that only allow a single instance, you can compile/install several parallel programs.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Of course, this will only be a brief introduction. But to go further, I recommend you get the utility on your system, for this: download and install globally with the commands:
{% highlight bash %}
mkdir -p ~/.local/bin
curl https://cht.sh/:cht.sh > ~/.local/bin/cht.sh
chmod +x ~/.local/bin/cht.sh
echo 'export PATH="${PATH}:${HOME}/.local/bin"' | tee -a ~/.bashrc
source ~/.bashrc
{% endhighlight %}
> This procedure is for [BASH](https://en.terminalroot.com.br/discover-and-install-oh-my-bash/) if you use [ZSH](https://en.terminalroot.com.br/the-13-best-shell-for-your-linux-or-unix/), [FISH](https://fishshell.com/) or any other Shell change the configuration file `~/.bashrc` by the corresponding file of your [Shell](https://en.terminalroot.com.br/shell), example for ZSH: `~/.zshrc`

# Command Line Use
Continuing with our example of programming languages ​​[Lua](http://www.lua.org/). You can enter a [subshell](https://www.tldp.org/LDP/abs/html/subshells.html) directly from the prompt, example, starting the shell inside the language directory:
{% highlight bash %}
cht.sh --shell
cd lua
{% endhighlight %}

The output will be similar to this image:

![cht.sh shell cd lua](/assets/img/terminal/cht-sh-cd-lua.png)

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

Within the **subshell** you can search for any content you want to get information, for example, search on `Lua` reverse lists:
> Example:

{% highlight bash %}
cht.sh/lua> reverse list
- [[
   [iterator - How to iterate Lua table from end?
   [
   [Thank you, @Piglet, for useful link.
   ]]

local function reversedipairsiter (t, i)
    i = i - 1
    if i ~ = 0 then
        return i, t [i]
    end
end
function reversedipairs (t)
    return reversedipairsiter, t, #t + 1
end

- Actually, I figured out an easier way may be to

local mytable = {'a', 'b', 'c'}
for i = #mytable, 1, -1 do
    value = mytable [i]
    print (i .. ":" .. value)
end
cht.sh/lua>
{% endhighlight %}

To exit, just type: `exit`.

Cool, right ?!

# Conclusion
I particularly use this utility a lot and I wanted to share it with you, because I believe that the readers of this blog are very similar to me and are studying several things today! :)

Remembering that there are several subjects and languages ​​in `cht.sh` for more details visit the website: [cheat.sh](http://cheat.sh/) and [GitHub](https://github.com/chubin /cheat.sh) from them.

Thanks and see you next time!


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
    
