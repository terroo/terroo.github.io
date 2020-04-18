---
layout: post
title: "6 Signs that reveal you are a true Linux user"
date: 2020-04-18 14:14:38
image: '/assets/img/linux/linux-user-root.jpg'
description: 'If you are a true Linux user, you will probably recognize these common trends.'
featured-img: ../linux/linux-user-root.jpg
tags:
- linux
- gnu
- article
---

![6 Signs that reveal you are a root Linux user](/assets/img/linux/linux-user-root.jpg)

> If you are a true Linux user, you will probably recognize these common trends.

[Linux](https://en.wikipedia.org/wiki/Linux) users are a diverse group, but many of us share some habits. You may not have any of the telltale signs listed in this article and, if you are a new Linux user, you may not recognize many of them ... yet.

Go to those 6 signs!

---

# 1. As far as you know, the world started on January 1, 1970
There are many rumors about why a computer clock Unix always goes back to 01-01 1970 when it is reset. But the mundane truth is that the Unix "era" serves as a common and simple point of reference for synchronization.

A computer requires firm and clearly defined values; therefore, the value 1970-01-01T00: 00: 00Z was chosen as the beginning of the Unix era. Whenever a POSIX computer loses track of time, a service like the Network Time Protocol (NTP) can provide the number of seconds since 1970-01-01T00: 00: 00Z, which the computer can convert to a human-friendly date .

Date and time are famously complex things to track down in computing, largely because there are almost standard exceptions. A month does not always have 30 days, a year does not always have 365 days and even seconds tend to vary slightly each year. If you're looking for a fun and frustrating scheduling exercise, try scheduling a reliable calendar app!

---

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# 2. Do you think it is a difficult task to type something with many letters to do something
The most common Unix commands are notoriously short. In addition to commands like `cd` and `ls` and `mv`, there is a command that literally cannot be shorter: `w` (which shows who is currently connected according to the `/var/run/utmp` file).

On the one hand, extremely short commands seem unintuitive. A new user is unlikely to guess that typing `ls` would list directories. Once you learn the commands, however, the shorter the better. If you spend all day in a terminal, fewer keystrokes mean you can spend more time doing your work.

Fortunately, one letter commands are far apart, which means that you can use most letters for *aliases*. For example, I create friendly URLs from [git.io](https://git.io) frequently and the command is too long to type, so I created an **alias/function** and added this line to my `~/.bashrc` file:

{% highlight bash %}
gist(){
	[[ -z "$1" || -z "$2" ]] && {
		printf "%s\n" "Use: gist [URL] [SHORT-URL]"
		return
	}
	curl https://git.io/ -i -F "url=$1" -F "code=$2"
	echo
}
{% endhighlight %}

So to create the friendly URL, just use this command, and if you forget the order just type the command without parameters and the `help` bro will help me! 😄.

You can also temporarily switch commands by creating aliases directly at your prompt for specific situations, I do this a lot, if you do too, consider being part of the title group 😃.

# 3. You like the Graphical Interface, but prefer a WM
Every time I post a tip from a window manager side by side (Tiling Window Manager), I see someone comment somewhere: "I can't use WM. "," It will be difficult to use this section. ", ... I already think completely unlike the guy! 🐥.

This facility with a single command to open an application and see the data available on separate *desktops*, in addition to having side-by-side windows that make debugging and working easier, made me unable to use: GNOME, MATE, ...

I have GNOME installed here, I think [Portage](https://wiki.gentoo.org/wiki/Portage) has already updated it about 3 times, and even today, I don't even want to go there to see what has changed! 😄. And most importantly, everything works slightly like drinking coconut water on an island! 😸.

---

# 4. You never took any action on a computer more than three times because you already automated it for the third time
Forgive hyperbole, but many Linux users expect their computer to work harder than they do. Although it takes some time to learn how to automate common tasks, it tends to be easier on Linux than on other platforms, because the Linux terminal and the Linux operating system are very well integrated.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

The things that are easy to automate are the actions you already perform in a terminal, because the commands are just strings you type in an interpreter and that interpreter (the shell running on terminal) doesn't care if you typed the strings manually or if you're just pointing to a script.

For example, commonly clean the: history, thumbnails, trash, bookmarks backups of Firefox and among others with a single command, `bye` , I added this function to my `~/.bashrc` and every time I want to clean everything , I just have to say goodbye to them! ✋
{% highlight bash %}
bye(){
    [[ -d "${HOME}/.cache/thumbnails" ]] && rm -rf ${HOME}/.cache/thumbnails/    
    [[ -d "${HOME}/.cache/mozilla" ]] && rm -rf ${HOME}/.cache/mozilla/    
    rm ${HOME}/.local/share/recently-used.xbel
    touch ${HOME}/.local/share/recently-used.xbel
    _DIRB="$(find ${HOME}/.mozilla/firefox -type d -name "*bookmarkbackups*")"
    rm $_DIRB/* 2>/dev/null
    rm -rf "${HOME}/.local/share/Trash/files/\*"
}
{% endhighlight %}
> The `_DIRB` variable I created on purpose because all of my commands are portable, I use them on any system or when I'm going to format or something like that, the encrypted name of the Firefox directory is changed by Firefox itself, in a new environment.

---

# 5. Your distro is not common
I'm a passionate user of Gentoo, that's right, the fact that it takes a while to compile some things (WebKitGTK and QtWebEngine, the second one, so take a while), I take the opportunity to do a lot of things and when I finish, I read the Gentoo documentation and even help with some things, yes I participate in the [Gentoo documentation](https://wiki.gentoo.org/wiki/User: Marcos.oliveira).

It doesn't matter how big a distribution is; part of the pleasure of being a Linux user is the freedom to be undecided about which distro you run. At first glance, everyone is basically the same, in final lines. But you want the one you identify with. In an article topic I cannot describe the differences of the distro I chose, but surely one of the main reasons is directly linked to my other passion: [C++](https://terminalroot.com.br/cpp).

I have a partition here on my HD that is only for other distros, generally I only install things that are better to examine and use without being in a [Docker or Machine Virtual.

If I ever left Gentoo I would definitely switch to OpenBSD.
> OpenBSD, not a Linux distribution

The point is that Linux distributions are passionate projects, and it's fun to interact in this world with other people.

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

# 6. You are passionate about Open Source and Free Software
Although you don't change even a single line of code, and often don't even know how to program, that doesn't stop you from being passionate about these technologies, because you know you're not being deceived.

That no one is watching your life, it gives me a relief, that's why I prefer Free Software and Open source, and compile them straight from the source!

---

I hope you enjoyed the article. Recalling that although it looks and is based on several excerpts from the [OpenSource.com](https://opensource.com/article/19/10/signs-linux-user) article , it has been modified in large part to adapt to my realities!

Thanks for reading!
    

