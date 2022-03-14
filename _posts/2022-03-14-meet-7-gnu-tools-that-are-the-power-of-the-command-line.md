---
layout: post
title: "Meet 7 GNU tools that are the power of the command line"
date: 2022-03-14 08:12:41
image: '/assets/img/gnu/gnu.png'
description: 'Indispensable tools for you to evolve in intimacy with terminal .'
tags:
- gnu
- gcc
- bash
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The GNU Project is a [Free Software](https://terminalroot.com/tags#freesoftware) organization that created the term [Open Source](https://terminalroot.com/tags#opensource) that today it is widely used by several companies.

The name GNU is an acronym for: **G**NU, is **N**ot **U**nix . And that means:

The commands [Unix©](https://terminalroot.com/tags#unix) were so successful that many programmers and companies wanted to "*copy them*" . And most included the name Unix© in the name itself, examples: HP Unix, Berkeley Unix, ... and so on.

But [AT&T](https://en.wikipedia.org/wiki/AT&T), the copyright holder of Unix© and its name, has prohibited the use of the Unix© name for projects similar to it.

So GNU came up with the idea of doing a *satire* using the name, but saying it wasn't Unix©. 😛

Another thing is that the source code of Unix© programs was not available and even then, when used for study purposes, in this case for the University of California, Berkley, which later started [BSD](https://terminalroot.com/tags#bsd), had restrictive licenses.

So, the GNU created alternatives, that is, programs that did the same thing and with the source code available, in addition to having a license (created by them, the GPL) that even allowed redistribution.

The organization that distributes the software created by the GNU Project is the [Free Software Foundation](https://www.fsf.org/) under the terms of the GNU General Public License (GNU GPL). [Learn more](https://en.wikipedia.org/wiki/GNU_Project) .

One of the biggest differentiators of the GNU Software is the fact that it uses the POSIX standard which makes it portable to any operating system.

To advance in GNU commands is to advance in having terminal dexterity. So, let's get to know 7 essential GNU tools for you !!!


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

# 1. [GCC](https://gcc.gnu.org/)
![GCC](/assets/img/gnu/gnu-gcc-logo.png)

---

**GCC** stands for **G**NU **C**ompiler **C**ollection, is a collection of compilers and optimizers for various [programming languages](https://terminalroot.com/hello-world-in-25-programming-languages-proposal-docs-and-links/), among them: [C](https://terminalroot.com/tags#linguagemc), [C++](https://terminalroot.com/tags#cpp), [Java](https://terminalroot.com/tags#java), [Go](https://terminalroot.com/tags#go), Fortran, Ada, D, Objective- C, Objective-C++ and more.

With nearly **20 million lines of code**, **GCC** is one of the largest free programs in the world.

It has the widest *range* of **architecture support**, including:

AArch64, Alpha, ARM, AVR, Blackfin, eBPF, Epiphany (GCC 4.8), H8/300, HC12, IA-32 (x86), IA-64 (Intel Itanium), MIPS, Motorola 68000, MSP430, Nvidia GPU, Nvidia PTX, PA-RISC, PDP-11, PowerPC, R8C / M16C / M32C, RISC-V, SPARC, SuperH, System/390 / zSeries, VAX, x86-64, 68HC11, A29K, C6x, CR16, D30V, DSP16xx, ETRAX CRIS, FR-30, FR-V, IBM ROMP, Intel i960, IP2000, M32R, MCORE, MIL-STD-1750A, MMIX, MN10200, MN10300, Motorola 88000, NS32K, RL78, Stormy16, V850, Xtensa, Cortus APS3 , ARC, AVR32, C166 and C167, D10V, EISC, eSi-RISC, Hexagon[73], LatticeMico32, LatticeMico8, MeP, MicroBlaze, Motorola 6809, MRISC32, MSP430, NEC SX architecture[74], Nios II and Nios, OpenRISC , PDP-10, PIC24/dsPIC, PIC32, Propeller, Saturn (HP48XGCC), System/370, TIGCC (m68k variant), TMS9900, TriCore, Z8000 and among others.

The GCC has a list of over **500 contributors**, all names can be accessed [here](https://gcc.gnu.org/onlinedocs/gcc/Contributors.html) .

Several companies use the GCC in many of the free software projects, among them the most famous ones such as: [NASA](https://software.nasa.gov/), [Google](https://opensource.google/), [IBM](https://www.ibm.com/hu-en/products?types[0]=trial) and more.

GCC's biggest competitor is [Clang/LLVM](https://terminalroot.com/tags#clang) which is also a great compiler and despite being written from scratch, according to its own creator, [Chris Lattner ](http://www.nondot.org/sabre/), said in some interviews that his biggest reference was the GCC, so Clang has all the parameters used by the GCC, also for compatibility reasons.

To install GCC you can use your system's package manager or download GCC [here](https://gcc.gnu.org/install/download.html).

### Usage examples
Compiling programs written in [C](https://terminalroot.com/tags#linguagemc) language :
{% highlight sh %}
gcc main.c
./a.out # Run the binary
{% endhighlight %}

Compiling programs in [C++](https://terminalroot.com/tags#cpp):
{% highlight sh %}
g++ main.cpp
./a.out # Run the binary
{% endhighlight %}

Compiling programs in [Java](https://terminalroot.com/tags#java):
{% highlight sh %}
gcj -C Hello.java # Compile to Hello.class
gij Hello # Run Hello.class
{% endhighlight %}

`gcc` is one of the most parameter-rich programs out there. To know all the parameters, use the manual:
{% highlight sh %}
man gcc
{% endhighlight %}

For more information visit the [Official GCC Page](https://gcc.gnu.org/) .


---

# 2. [GNU Sed](https://www.gnu.org/software/sed/)
**GNU Sed** is a command-line text stream editor that parses and transforms text using a simple and compact programming language.

There are a few versions of Sed, and GNU Sed is one of them. When using GNU Sed and Sed from [macOS](https://terminalroot.com/tags#macos), for example, you may come across a lot of [differences](https://stackoverflow.com/questions/4247068/sed-command-with-i-option-failing-on-mac-but-works-on-linux) between both and to note that the usability of GNU Sed is superior and has more parameters.

### Basic usage example
> Replacing and modifying all occurrences of the word **That** with the word **This** in a text file: `example.txt`

{% highlight sh %}
sed -i 's/That/That/' example.txt
{% endhighlight %}

For more information visit the [Official GNU Sed Page](https://www.gnu.org/software/sed/) .

---

# 3. [GNU Awk](https://www.gnu.org/software/gawk/manual/gawk.html)
GNU Awk is one of the domain-specific language variants: [AWK](https://terminalroot.com/awk-basic-tutorial/) . As with GNU Sed, its main differential is the fact that it has the POSIX standard as we mentioned in the introduction.

It is also widely used for text editing and data filtering via the command line. The most basic example of usage would be:
> Lists only the first column of a text file generated by the command `ls -l > file.txt`.

{% highlight awk %}
awk '{print $1}' file.txt
{% endhighlight %}

For more information visit the [GNU Awk Official Page](https://www.gnu.org/software/gawk/manual/gawk.html) .


<!-- MINI ADS -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# 4. [GNU Make](https://www.gnu.org/software/make/manual/make.html)
![GNU Make](/assets/img/gnu/makefile2.jpg)

---

**GNU Make** is a build automation tool that automatically creates executable programs and libraries from source code by reading files called **Makefiles** that specify how to derive the target program.

Although integrated development environments and language-specific compiler features can also be used to manage a build process, GNU Make remains widely used.

There are some versions of the `make` command which is the command used by **GNU Make**, however, on many systems `make` is just an alias for **GNU Make** where the original command is ` gmake`, this symlink can be discovered by combining two other GNU tools which is [GNU Coreutils](https://www.gnu.org/software/coreutils/) with the following command: `ls -l $ (which make)` .

When you have a correctly created Makefile, to compile it just run the command:
{% highlight sh %}
make
{% endhighlight %}
> This command can be customized with parameters according to the Makefile .

We have an article for **GNU Make** and *Makefile* beginners that can be accessed at the link: [How to Create a Makefile](https://terminalroot.com/how-to-create-a-makefile/) .

For more information visit the [GNU Make Official Page](https://www.gnu.org/software/make/manual/make.html) .

---

# 5. [GNU findutils](https://www.gnu.org/software/findutils/)
![GNU findutils](/assets/img/gnu/3d-gnu-head.jpg)

---

The **GNU findutils** is a package that has the commands: `find`, `locate`, `updatedb` and `xargs`.

Among them, the most widely used in everyday life is, of course, the `find`. The GNU `find` command is more user-friendly than the Unix© command. For example:

To find all `.txt` files in your home directory with **GNU findutils** just run the command:
{% highlight sh %}
find ${HOME} -name *.txt
{% endhighlight %}

In Unix© `find` you need to explicitly enclose the search target in quotes, whereas in GNU `find` with or without quotes works the same way. And among many other differences.

We have an article with 20 examples of using the `find` command that can be accessed at the link: [20 examples of the find command](https://terminalroot.com/20-find-command-examples/) .

For more information go to [GNU findutils Official Page](https://www.gnu.org/software/findutils/) .

---

# 6. [GNU grep](https://www.gnu.org/software/grep/)
**GNU grep** is a command-line utility for searching plain-text datasets for patterns that match a [regular expression](https://terminalroot.com/tags#regex) .

There are variations of the `grep` command like: `egrep` and `fgrep` . Many usability of these commands are specific to **GNU grep** .

**GNU grep** becomes really powerful for use in conjunction with [RegEx](https://terminalroot.com/tags#regex) .

A basic usage example is, for example, listing the system groups that your user belongs to with the following command:

{% highlight sh %}
grep "$USER" /etc/group | egrep -o '^[a-z]+'
{% endhighlight %}

For more information visit the [Official GNU grep Page](https://www.gnu.org/software/grep/) .

---

# 7. [GNU Bash](https://www.gnu.org/software/bash/)
**GNU Bash** is an improvement over Unix© **Sh**. **GNU Bash** made it much simpler and easier to automate commands in [Shell](https://terminalroot.com/tags#shellscript) due to also its stability in relation to its [options](https://terminalroot.com/the-13-best-shell-for-your-linux-or-unix/) .

It is the most adopted in the world and has many modern features that set it apart. It was created by programmer [Brian J. Fox](https://en.wikipedia.org/wiki/Brian_Fox_(computer_programmer))

It has several commands such as: `if`, `[[ ]]`, `for`, `while`,... that can be used directly in [Shell](https://terminalroot.com/tags#shellscript) and also combined as a [scripting language](https://en.wikipedia.org/wiki/Scripting_language) in a file of any extension, however the most commonly used extensions to identify it are `.sh` and `.bash` .

I've created several things in my life with **GNU Bash** and it's impossible to list them all. The last one I did and ironically the most successful was an app that adds videos as wallpaper.

You can see the video of this app working below:
> The video is in Brazilian Portuguese, but it is possible to understand everything, as the commands are universal. To try to improve even more, you can activate automatic translation for your language, which although not 100% effective, it improves a lot.

<iframe width="900" height="380" src="https://www.youtube.com/embed/Mb0SXMft2sw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard- write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A lot of people have submitted `issues` on [GitHub](https://github.com/terroo) and I'm just annotating the issues to fix them with the refactoring of this code that will be done with [C++](https://terminalroot.com/tags#cpp) .

I noticed that one of the biggest complaints is not being able to render the background videos as Full HD, so for that I'll have to use more advanced libraries.

For more information go to [Official GNU Bash Page](https://www.gnu.org/software/bash/) , this is one of the best software documentation I've ever read.

---

# Conclusion

There are, in fact, several other solutions from the GNU Project, such as [GNU Glibc](https://www.gnu.org/software/libc/) which is the interface that the Linux kernel runs on and allows miscellaneous: programs, graphical interfaces, [window managers](https://terminalroot.com/tags#wm) and desktop environments to work with great performance, and most of them don't work without **GNU Glibc**.

## For more information access:
# <https://gnu.org> .

---

# Useful links
+ <https://en.wikipedia.org/wiki/GNU_Compiler_Collection>
+ <https://cutt.ly/7A2Tnlt>

> The *thumbnail* used as the headline for this article was created and used by Red Hat [at this link](https://access.redhat.com/documentation/en-us/red_hat_developer_toolset/7/html/user_guide/chap-gcc) . The other images, with the exception of the GCC logo, were found on [Google Images](https://www.google.com/imghp) after searching for terms related to those used in this article.

