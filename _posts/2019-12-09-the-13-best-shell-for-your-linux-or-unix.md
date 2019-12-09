---
layout: post
title: "The 13 Best Shell for Your Linux or Unix"
date: 2019-12-09 10:22:53
image: '/assets/img/shell/shell.jpg'
description: 'Of course the choice will depend on your taste.'
featured-img: ../shell/shell.jpg
tags:
- shell
- unix
- linux
- shellscript
---


# The 13 Best Shell for Your Linux or Unix

![Top 13 Shell Ranking for Your Linux or Unix](/assets/img/shell/shell.jpg)

It's been a long time since people asked me for this list (mainly as a ranking). Of course the choice will depend on your taste, but it is interesting to know the list so that it is easier for you.

## Introduction
One of the reasons that most attributed the success of [Unix](https://terminalroot.com.br/2016/11/blog-linux-unix.html) and [Linux](https://terminalroot.com.br/linux), sure was [Shell](https://wiki.gentoo.org/wiki/Shell). A "blessed" place that generates many facilities especially when we learn how to create scripts that do, configure everything for us with a simple command.

And with each passing day using commands becomes more useful. Almost all the news that comes up, only works in Shell, the command line. Success ended up "spilling over" to [Windows](https://terminalroot.com.br/2018/03/how-using-o-shell-bash-no-windows.html) which until then had only CMD, but soon found a way to port the most famous shell in the world Linux.

And not to mention that they still developed a shell of their own, although the features have not made users of: UNIX, [BSD](https://terminalroot.com.br/2016/05/characteristicas-de-freebsd-openbsd- e-netbsd.html), Linux to adopt them, for the sake of familiarity (mixing uppercase and lowercase letters, for example), something that makes it more confusing to adapt, makes it slightly more laborious, something that in the Unix and Linux world, is totally inadmissible, the motto is: "Do less and have more results!", which boil down to the scripts that create "Bots" that do everything for us! 😄

Come on the list then!

---

## 13th - [Sash](http://members.tip.net.au/~dbell/)
Better known as ** Stand-alone Shell ** (meaning its acronym), it is a Unix shell designed for use in recovering certain types of system crashes.

The internal sash commands have all libraries statically linked; therefore, unlike most shells on Linux, standard UNIX commands do not depend on external libraries.

For example, the `copy` (cp) command requires `libc.so` and `ld-linux.so` when created from [GNU Core Utilities on Linux](https://www.gnu.org/software/ coreutils /). If any of these libraries become corrupted, the coreutils `cp` command will not work; however, in `sash`, the internal command `cp` would not be affected.

Its official page is: <http://members.tip.net.au/~dbell/>. And it is available in the repositories of most Linux and BSD distributions. Then you can use the package manager to install it. Gentoo Example:
{% highlight bash %}
emerge app-shells/sash
{% endhighlight %}

---

## 12th - [Mksh](https://www.mirbsd.org/mksh.htm)
mksh is MirBSD Korn Shell, an actively developed free implementation of the Korn Shell programming language and successor to [Public Domain Korn Shell (pdksh)](https://ecsoft2.org/pdksh-public-domain-korn-shell). It is developed as part of the [MirOS] Project (https://www.mirbsd.org) as a native Bourne/POSIX/Korn shell for MirOS BSD, but also to be readily available on other UNIX-like operating systems. It is intended for users who want a compact, fast, reliable and secure shell without cutting out modern extensions with unicode support.

Due to its speed, POSIX compliance and advanced features, it is ideal for scripting. But it can also serve very well as a login shell. It is used as default shell on Android.

Its official page is: <https://www.mirbsd.org/mksh.htm>. And it is available in the repositories of most Linux and BSD distributions. Then you can use the package manager to install it. Gentoo Example:
{% highlight bash %}
emerge app-shells/mksh
{% endhighlight %}

> There is a very cool Mksh community on Freenode: [irc://chat.freenode.org/#!/Bin/mksh](irc://chat.freenode.org/#!/Bin/mksh)

---

## 11th - [Power Shell](https://docs.microsoft.com/en-us/powershell/)
PowerShell (including Windows PowerShell and PowerShell Core) is a Microsoft framework for task automation and configuration management, consisting of a command line shell and associated scripting language built into the .NET framework.

PowerShell provides full access to COM and WMI, allowing administrators to perform administrative tasks on remote and local Windows systems, as well as WS-Management and CIM that enables management of remote Linux systems and network devices. Initially a Windows-only component, PowerShell became open source and multiplatform on August 18, 2016.

Its official page is: <https://docs.microsoft.com/en-us/powershell/>. Unlike the previous ones mentioned here, it is not available in the repositories of Linux and BSD distributions, but it is possible to use maneuvers such as: Compile, use third party repositories (like PPA in Ubuntu) and others.

In [Gentoo](http://gpo.zugaina.org/dev-lang/powershell-bin) you can install via Layman, example:
{% highlight bash %}
sudo layman -a pentoo
sudo layman -S
emerge dev-lang/powershell-bin
{% endhighlight %}

---

## 10th - [Ion Shell](https://github.com/redox-os/ion)

![Ion Shell](/assets/img/shell/ionshell.png)

Ion is a modern system shell that features simple yet powerful syntax. It is written entirely in Rust, which greatly enhances the quality and overall safety of the shell. It also offers a performance level that exceeds that of [Dash/Ash](https://www.in-ulm.de/~mascheck/various/ash/) by taking advantage of Ion's capabilities. Although developed alongside and primarily for RedoxOS, it is fully capable on other nix platforms.

Its official page is: <https://github.com/redox-os/ion>. It is also not available in the Linux and BSD distributions repositories, but it is possible to use maneuvers such as: Compile, use third party repositories (like PPA in Ubuntu) and others.

For example, on Ubuntu you can add a PPA:
{% highlight bash %}
sudo add-apt-repository ppa: mmstick76/ion-shell
{% endhighlight %}

---

## 9th - [Eshell](https://www.gnu.org/software/emacs/manual/html_mono/eshell.html)
Eshell is a shell-like command interpreter implemented in Emacs Lisp. It does not invoke external processes except those requested by the user. It is intended to be an alternative to IELM REPL for Emacs and with an interface similar to command shells like bash, zsh, rc, or 4dos.

Its official page is: <https://www.gnu.org/software/emacs/manual/html_mono/eshell.html>. And it is available in the repositories of most Linux and BSD distributions. Then you can use the package manager to install it. Gentoo Example:
{% highlight bash %}
emerge app-xemacs/eshell
{% endhighlight %}

---

## 8th - [Tcsh](https://www.tcsh.org/)

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

![Tcsh](/assets/img/shell/tcsh.png)

It is a Unix shell based on and compatible with the C (csh) shell. It is essentially the C shell with programmable command line completion, command line editing, and some other features. Unlike other common shells, functions cannot be defined in a tcsh script and the user must use aliases (as in csh). It is the native root shell for BSD-based systems such as [FreeBSD](https://www.youtube.com/watch?v=hftefBW0bmM).

The "t" in tcsh comes from the "T" in TENEX, an operating system that inspired Ken Greer at tegsh author Carnegie Mellon University with its command completion feature. Its syntax has a parenthesized `if` similar to several other programming languages, for example:
{% highlight bash %}
if ("$ input" = ~ [0-9] *) then
  echo "Input starts with an integer."
else
  echo "Input does NOT start with an integer."
endif
{% endhighlight %}

Its official page is: <https://www.tcsh.org/>. And it is available in the repositories of most Linux and BSD distributions. Then you can use the package manager to install it. Gentoo Example:
{% highlight bash %}
emerge app-shells/tcsh
{% endhighlight %}

---

## 7th - [Sh (Thompson Shell)](https://github.com/yvesnrb/Thompson-Shell)
The Thompson shell (co-creator of Unix along with Denis Rithie) is the first Unix shell, introduced in the first version of Unix in 1971, and was written by Ken Thompson. It was a simple command interpreter, not designed for scripting, but introduced several innovative features in the command line interface and led to the development of later Unix shells.

Your unofficial page is: <https://github.com/yvesnrb/Thompson-Shell>. It is now available (preinstalled) on all Linux and BSD distros.

## 6th - [Zsh](https://terminalroot.com.br/2018/02/how-install-anduse-o-shell-zsh-e-o-oh-my-zsh.html)
Zsh is an interactive login shell that can also be used as a powerful scripting language interpreter. It is similar to bash and Korn shell, but offers great configurability.

Its official page is: <https://www.zsh.org/>. And it is available in the repositories of most Linux and BSD distributions. Then you can use the package manager to install it. Gentoo Example:
{% highlight bash %}
emerge app-shells/zsh
{% endhighlight %}

---

## 5th - [Xonsh](https://terminalroot.com.br/2019/06/xonsh-um-shell-para-os-amante-de-python.html)
Xonsh is a Unix, Python, and multiplatform compatible Shell and command prompt available for Linux, macOS, and Windows. It is intended for experts and novices. For the Python developer, Xonsh is a real hands-on, as it is virtually a hybrid utility and recognizes two languages ​​in the same environment.

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

Its official page is: <https://xon.sh/>. You can install it according to this tutorial we made: [Xonsh - A Shell for Python Lovers](https://terminalroot.com.br/2019/06/xonsh-um-shell-para-os- python-lovers.html) .

---

## 4th - [Fish](https://terminalroot.com.br/2018/01/fish-shell-mais-productivity-no-seu-shell-script.html)
Fish is a user-friendly smart command line available for shell on Linux, OS X and the rest of the UNIX family.

+ It has colors for easy understanding;
+ Command completion;
+ Syntax Highlight and other options.

Its official page is: <http://fishshell.com/>. You can install it according to this tutorial we made: [Fish Shell, more productivity in your Shell Script](https://terminalroot.com.br/2018/01/fish-shell-mais-productivity-no- shell-script.html) and also a Fish prompt customization application: [Install Oh My Fish on your Linux or Unix-like](https://terminalroot.com.br/2019/09/oh -my-fish.html).

---

## 3rd - [Ksh](http://www.kornshell.com/)
Considered to be the most popular Shell on Unix systems, Korn Shell was developed by David Korn of Bell Labs, and is a superset of sh, ie it has all the features of sh and has added many more. Full compatibility with sh has brought many Shell users and programmers into this environment. In short, KSH - korn Shell was the first Shell to introduce advanced features.

Its official page is: <http://www.kornshell.com/>. And it is available in the repositories of most Linux and BSD distributions. Then you can use the package manager to install it. Gentoo Example:
{% highlight bash %}
emerge app-shells/ksh
{% endhighlight %}

---

## 2nd - [Csh](http://bxr.su/NetBSD/bin/csh/)
The Csh or C shell was developed by Bill Joy of the University of Berkeley and is the most commonly used shell in BSD and Xenix environments. Originally derived from the sixth edition of Unix/bin/sh (which was the Thompson shell), Bourne shell's predecessor.

The syntax was modeled after the C programming language. Csh has added many apparatuses on top of the Bourne shell, such as aliases and command history. Today, the original csh is not widely used on Unix; has been outperformed by other shells such as Tenex C shell (tcsh) originally based on C shell code, adding file name complementing and command line editing compared to Korn shell (ksh), and GNU Bourne-Again shell (bash). An independently developed and modern C shell created by Nicole Hamilton also survives on Windows in the form of the Hamilton C shell.

Its official page is: <http://bxr.su/NetBSD/bin/csh/>. And it is available in the repositories of most Linux and BSD distributions. Then you can use the package manager to install it. Gentoo Example:
{% highlight bash %}
emerge app-shells/csh
{% endhighlight %}

---

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

## 1st - [Bash](https://terminalroot.com.br/bash)
And finally in the very first place we have the [Bash](https://terminalroot.com.br/bash). GNU Bash or simply Bash is a Unix command and shell language written by Brian Fox for GNU Project as an open source replacement for the Bourne shell.

First released in 1989, was widely used as the default login shell for most Linux distributions and Apple's macOS Mojave and earlier versions. A version is also available for Windows 10. It is also the default user shell on Solaris 11.

Its official page is: <https://www.gnu.org/software/bash/>. It is now available (preinstalled) in almost all Linux distros.

If you would like to see a cool video tutorial(in portuguese) on: [How to Create a FETCH, ScreenFetch and Neofetch Style on SHELL SCRIPT](https://www.youtube.com/watch?v=2_tnd8g-IMc)

## Conclusion
If you are interested in switching from Shell, you can use the command `chsh` (**CH** ange **SH** ell) for this, for example:
> Changing to *mksh* you can pass the path or name only if you wish. To find the path, use the `which` command, for example to find the path of mksh itself: `which mksh`

{% highlight bash %}
chsh -s /bin/mksh
{% endhighlight %}

If you want to see a feature comparison of each one, check out this link: [Shells Comparison](https://en.wikipedia.org/wiki/Comparison_of_command_shells)

Hope you enjoyed the list and ranking, if you have anything new to suggest, use the comments. And as usual, I choose Bash, my war mate! 😀 A big hug and even more!

