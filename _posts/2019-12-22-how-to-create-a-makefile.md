---
layout: post
title: "How to Create a Makefile"
date: 2019-12-22 10:51:15
image: '/assets/img/gnu/makefile.jpg'
description: '📁 From scratch and quickly.'
featured-img: ../gnu/makefile.jpg
tags:
- makefile
- make
- gnu
- cpp
- linguagemc
---

![How to Create a Makefile](/assets/img/gnu/makefile.jpg "How to Create a Makefile")

In the article we created: [GNU Autotools Definitive Tutorial for Beginners](https://en.terminalroot.com.br/gnu-autotools-ultimate-tutorial-for-beginners/) we show all the step by step example for you to generate a `configure` in a standard way. And this file (`configure`) after execution will generate a **Makefile** to consequently build a project and be properly installed/uninstalled on the system, as well as its examples, documentation and manual.

However, if you think the whole procedure is not necessary for your project (which may be simpler), you can directly create a [Makefile](https://www.gnu.org/software/make/manual/html_node /Simple-Makefile.html) *on the nail* quickly and you will get the same result.

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

## Introduction

A makefile is a file (by default called "Makefile") containing a set of directives used by the `make` build automation tool to generate a target/meta (install, uninstall, remove some files and others).

A *makefile* essentially contains *variable* assignments, *comments* and *targets*. Comments start with the character “#”.

---

## Basic Example

You can use a text editor to write your Makefile, however, you need to be aware of the details, as Makefile generates errors even with spaces where it should be TAB. Let's look at some lines:

+ **TARGET**, this line will say the final name of the post compiled file;
+ **CXX**, this line (in this case) will say the name of the program it will compile (I created this variable name CXX): cc, gcc, c ++, g ++, clang, clang ++, ...;
+ **LD**, this should generate the linker, when you compile more than one file and want to merge all into one, let's show in the second example;
+ **OBJS**, in this example I left as `main.cpp`, but it would be all binary to form the linker;
+ **programname:** note that this line is the variable **OBJS**, because if we only use the `make` command, the file will already understand;
+ **install:** this line you enter the command to copy to a system directory that is part of the **$PATH** variable, using the `install` command;
+ **clean:** and finally we remove the binary files that were built to form the linker.

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

{% highlight bash %}
TARGET=programname
CXX=c++
LD=c++
OBJS=main.cpp
programname:$(OBJS)
	$(LD) -o $(TARGET) $(OBJS)
install:
	@install programname /usr/local/bin/programname
clean:
	rm -rf *.o
{% endhighlight %}

At first weird, but this Makefile boils down to: `c++ main.cpp -o programname`. The `install` and` clean` parameters are optional for building the program.

---

## A slightly less basic example

You can create several variables for the final product. In this example below, let's say you want the parameters:
- `-g` (debug);
- `-Wall` (so that the compiler reports warnings no matter how basic, but you want your program fully standardized with ISOCPP);
- `-pthread` you will compile a graphical library and the linker needs this file separately;
- `-export-dynamic` and finally this parameter, because in that case let's say you are compiling with the *gtkmm* library.

So in addition to the basic variables we saw in the basic example, the ending would look like this:

> Note that this time *OBJS* tells the binaries, and if you only use the `make` command, it will not work, because the minimum **TARGET** for building the program is the` all` parameter. The code files are inside a directory: `src/`

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

{% highlight bash %}
TARGET=hello-world
CC=g++
DEBUG=-g
OPT=-O0
WARN=-Wall
PTHREAD=-pthread
CCFLAGS=$(DEBUG) $(OPT) $(WARN) $(PTHREAD) -pipe
LD=g++
LDFLAGS=$(PTHREAD) -export-dynamic
OBJS= main.o helloworld.o
all: $(OBJS)
	$(LD) -o $(TARGET) $(OBJS) $(LDFLAGS)
 
main.o: src/main.cpp
	$(CC) -c $(CCFLAGS) src/main.cpp -o main.o
 
helloworld.o: src/helloworld.cpp
	$(CC) -c $(CCFLAGS) src/helloworld.cpp  -o helloworld.o
 
clean:
	rm -f *.o
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

## Summing up
I create and use Makefiles daily, even created a command in [Shell](https://terminalroot.com.br/shell), do also, which generates one for me passing only the files as a parameter. The truth is that there are no secrets, just respect these basic rules. You can even decide on variable names and remember to use TAB below the **TARGETS** where the commands will be.

If you haven't already, I suggest you take a look at the simple examples suggested by the GNU guys, that's where I learned: <https://www.gnu.org/software/make/manual/html_node/Simple-Makefile.html> . The example files cited here can be found in the tutorial I made for [Gentoo](https://gentoo.org) documentation  at this link: <https://wiki.gentoo.org/wiki/Basic_guide_to_write_Gentoo_Ebuilds>.

Hugs!
