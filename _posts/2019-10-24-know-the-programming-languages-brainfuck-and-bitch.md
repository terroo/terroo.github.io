---
layout: post
title: "Know the Programming Languages: BRAINFUCK and BITCH"
date: 2019-10-24 15:19:58
image: '/assets/img/dev/brainfuck-e-bitch.jpg'
description:
featured-img: ../dev/brainfuck-e-bitch.jpg
tags:
- brainfuck
- bitch
- programming
- development
---

[![BRAINFUCK and BITCH](/assets/img/esolangs/brainfuck-e-bitch.jpg)](/ assets/img/esolangs/brainfuck-e-bitch.jpg)

This day I was surfing the internet and looking for compiler test content and I found some rather *different* things, among them, I found some very strange programming languages.

Better known as ESOTERIC languages. 😱

## Introduction

An **esoteric** (*ess-oh-terr-ick*) programming language, or esolang, is a computer programming language designed for experimenting with strange ideas, difficult to program or as a joke, not for practical use. .

There is a small but active Internet community of people who create esoteric programming languages ​​and write programs in them, and discuss their computational properties (for example, if those languages ​​are complete in Turing).

## [brainfuck](http://aminet.net/package.php?package=dev/lang/brainfuck-2.lha)

**brainfuck**, also known as [brainf*ck*](https://esolangs.org/wiki/Brainfuck) or **BF**, is an esoteric programming language noted for its extreme minimalism, created by Urban Müller in 1993. It is a complete Turing language designed to challenge and confuse programmers, and is not useful for practical use.

Because of its simplicity, developing compilers and interpreters for this language is much easier than for other languages. The name of the language is generally not capitalized (starting with a lowercase letter), despite being a proper noun.

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

### Writing a "Hello World!" at brainfuck

First, create a file with extension **. Bf **: `vim hello-world.bf` and insert the following contents into the file:
> This is ** Hello World! ** (famous: Hello, World!) On brainfuck
{% highlight bash %}
++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.++++++
+..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.
{% endhighlight%}

Now we need to have an interpreter to generate the output. I recommend you install [bff](https://github.com/apankrat/bff) on [Gentoo](https://terminalroot.com.br/2017/05/how-install-o-gentoo.html) You can install using [Portage](https://wiki.gentoo.org/wiki/Portage):
{% highlight bash%}
emerge bff
{% endhighlight%}

> There are others such as: [beef](https://github.com/andreabolognani/beef), for example. If I'm not mistaken, this is available for [Debian](https://www.debian.org/), [Ubuntu]https://ubuntu.com/), [Linux Mint](https://linuxmint.com/) and among other distros, to install would be: `sudo apt install beef`.

After installing use the interpreter command to run using bff:
{% highlight bash%}
bff hello-world.bf
{% endhighlight%}

The result will be as expected! 😀
[![brainfuck terminal output](/assets/img/esolangs/brainfuck.png)](/assets/img/esolangs/brainfuck.png)

For more information, see their website: <http://aminet.net/package.php?package=dev/lang/brainfuck-2.lha>

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

## [Bitch](https://github.com/Helen0903/bitch)

The language [Bitch](https://github.com/Helen0903/bitch) was created by Helen 0903. The BITCHWISE name is a portmanteau between "bitch" and "bitwise". It originates from the word "bitwise" as meaning "bitwise operations" - the only mathematical operations available in both languages.

The use of the dirty word "bitch" in "BITCHWISE" is to convey anger in a sudden and rude manner. They combine to help convey the combination of difficulty and esoteric design in the language.

### Writing a "Hello World!" in Bitch

Bitch's proposal is a bit different, it uses the [Java] compiler (https://openjdk.java.net) together with an interpreter. So to create and generate **Hello World!** create a **.bitch** file:
{% highlight bash%}
vim hello-world.bitch
{% endhighlight%}

And insert this content in:
{% highlight bash%}
#72/#101/#108/#108/#111/#44/#32/#119/#111/#114/#108/#100/#33/
{% endhighlight%}

Now let's turn this . To use the compiler, follow these commands:
{% highlight bash%}
git clone https://github.com/Helen0903/bitch
cd bitch/
javac bitch.java
java bitch -c hello-world.bitch
{% endhighlight%}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

See image below:
> Of course you will need JDK and Git.

[![bitch terminal output](/assets/img/esolangs/bitch.png)](/ assets/img/esolangs/bitch.png)

If you want to test online use [tio.sh](https://tio.run/#bitch), and remember to add the `-c` parameter, like this:
+ **Command-line options** → **✚ add** → **-c**. Then just click on **play ▶ ️** at the top.

## Conclusion

This subject is really not for everyone, it is more for those who like to know "*under the hood*". It's way beyond a job to program in a famous programming language! ☺️ If you like these subjects, I recommend you visit the site: <https://esoteric.codes/>, there is a lot of cool stuff there! 😯

Hugs!
    
