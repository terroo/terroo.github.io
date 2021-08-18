---
layout: post
title: "Meet the Text Editor used by Linus Torvalds"
date: 2021-08-18 12:59:47
image: '/assets/img/text-editors/em.jpg'
description: 'Available on GitHub and kernel.org'
featured-img: ../text-editors/em.jpg
tags:
- text-editors
- emacs
- linus
---

![Meet the Text Editor used by Linus Torvalds](/assets/img/text-editors/em.jpg)

Most people like to know what geniuses use to try to get closer to the masters.

The text editor that Linus Torvalds uses is one of the **Emacs** family, more precisely a modified version with specific (and private) lines to your liking. A modified version of MicroEmacs he called uEmacs.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Introduction
The **uEmacs** license is **free-noncomm**, that is, it is free, but you cannot use it for commercial purposes. It is called **uEmacs/PK** , I don't know why that PK in the name, but I read that it was incorporated by **P**etri H. **K**utvonen, University of Helsinki, Finland. Maybe this acronym **PK** is the initials of the names of this guy who was quoted.

According to Linus Torvalds himself, he decided to modify it because MicroEmacs had an update and modified some things he liked from version 3.9 (*"The best MicroEmacs ever"* — Linus Torvalds), so he created his own version that has many of the features of this version(3.9) with a few more things added by it.

# Installation
uEmacs is available on *GitHub* and also *kernel.org*. I can't tell if your distribution has it in the repository, unless you have a [Gentoo](https://en.terminalroot.com.br/10-fundamental-tips-for-your-gentoo-linux/) that has pretty much everything in the repository when it comes to developer tools!

So, to install using [Portage](https://wiki.gentoo.org/wiki/Portage), just run the command:

{% highlight bash %}
sudo emerge app-editors/uemacs-pk
{% endhighlight %}

For other distributions you can clone the uEmacs repository and compile, but first remember to have the [Ncurses](https://invisible-island.net/ncurses/announce.html) development library, in addition to the binary build software: [make](https://en.terminalroot.com.br/how-to-create-a-makefile/) and [gcc](https://en.terminalroot.com.br/gcc-vs-llvm-which-is-the-best-compiler/). Examples:

{% highlight bash %}
sudo apt install ncurses-dev # Debian, Ubuntu, Mint,...
sudo dnf install ncurses-devel # Fedora, Red Hat,...
sudo pacman -S ncurses # Arch, Manjaro, ...
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

After that clone the repository, it can be:

> Via GitHub
{% highlight bash %}
git clone https://github.com/torvalds/uemacs
{% endhighlight %}

> Or via kernel.org
{% highlight bash %}
git clone https://git.kernel.org/pub/scm/editors/uemacs/uemacs.git
{% endhighlight %}

Now just compile and install, it's so simple that it only comes with a [Makefile](https://en.terminalroot.com.br/how-to-create-a-makefile/)

{% highlight bash %}
cd uemacs
make
sudo make install
{% endhighlight %}

> **Note**: If there is an "error" when compiling, see the additional step, otherwise ignore it!
# Additional step if there is an error
Anyone who understands `termcap` and `ncurses` knows that there will be an error if we don't pass the correct parameters to compile.

I, despite using the package compiled by Portage, tried to compile and got the error:

{% highlight bash %}
CC tcap.o
   LINK in
/usr/lib/gcc/x86_64-pc-linux-gnu/9.3.0/../../../../x86_64-pc-linux-gnu/bin/ld: tcap.o: undefined reference to "tgoto" symbol
/usr/lib/gcc/x86_64-pc-linux-gnu/9.3.0/../../../../x86_64-pc-linux-gnu/bin/ld: /lib64/libtinfo.so. 6: Error adding symbols: DSO missing from command line
collect2: error: ld returned 1 exit status
make: *** [Makefile:62: in] Error 1
{% endhighlight %}

As soon as I read the name of this file and a word from `curses.h`: **tgoto** , I already knew what the error was and I fixed it. If you have this same error, do this:
+ Open the `Makefile` file with your editor
+ Edit the line that starts with the word `LIBS` that has this content:

{% highlight makefile %}
LIBS=-lcurses
{% endhighlight %}

And add the -ltinfo, like this:

{% highlight makefile %}
LIBS=-lcurses -ltinfo
{% endhighlight %}

I even made a *pull request* if he accepts it will be about 10 years from now 😃 .

And then compile again: `make && sudo make install`, the binary is `em`.

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

# Use
The command to open the editor without any files is:

{% highlight bash %}
em
{% endhighlight %}

To get help, run `em --help`, the output will be this:

{% highlight bash %}
Usage: em filename
   or: em [options]

      +          start at the end of file
      +<n>       start at line <n>
      -g[G]<n>   go to line <n>
      --help     display this help and exit
      --version  output version information and exit
{% endhighlight %}
> You can already feel that the editor is very basic, right?! 😃

# Some commands
In Emacs style editors you don't need an insertion command, just start typing and the text already appears in the file!
+ `em [file-name]` - Opens the file indicated in `[file-name]`, example: `em main.cpp`;
+ `Alt + z` - Save and exit;
+ `Ctrl + x d`(quickly type x and then d) - Quit without saving if you press **y** to the question: `Modified buffers exist. Leave anyway (y/n)?`;

And among several other commands you can consult on the [MicroEmacs Wiki](https://www.stsci.edu/~strolger/docs/emacs_guide.html) that also work for uEmacs.

> Remembering that `^X` means **Ctrl + x** and `M` means **Alt** .

To the next!

# References
+ <https://github.com/torvalds/uemacs>
+ <https://git.kernel.org/pub/scm/editors/uemacs/uemacs.git/>
+ <https://en.wikipedia.org/wiki/MicroEMACS>
+ <https://wiki.michaelhan.net/UEmacs/PK>
+ <https://www.stsci.edu/~strolger/docs/emacs_guide.html>
+ <https://terminalroot.com.br/ncurses>
+ <https://www.emacswiki.org/emacs/MicroEmacs>
+ <https://linux.die.net/man/3/tgoto>
+ <https://www.gnu.org/software/termutils/manual/termcap-1.3/html_node/termcap_16.html>
