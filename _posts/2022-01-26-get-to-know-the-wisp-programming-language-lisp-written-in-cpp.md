---
layout: post
title: "Get to know the Wisp programming language, Lisp written in C++"
date: 2022-01-26 14:05:16
image: '/assets/img/programming/wisp.jpg'
description: 'And also a brief history of Lisp and how to use this dialect of the parentheses family more.'
tags:
- programming
- lisp
- clojure
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Lisp**, or formerly **LISP**, is not just a [programming language](https://terminalroot.com/hello-world-in-25-programming-languages-proposal-docs-and-links/) but a **family of programming languages**, that's right!

It's a standard that there are several **dialects**, and it's one of the oldest standards in the middle of "high-level programming languages", it's only 1 year younger than **Fortran** which is considered the oldest of all.

More precisely in 1958 Lisp was developed [John McCarthy](https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)).

The name would be **LIS**t **P**processor, something like 😃 . Lisp pioneered many ideas that are widely used today, such as:
- Dynamic typing
- recursions
- Automatic memory management
- And among others.

Although many think that [Artificial Intelligence](https://terminalroot.com/tags/#ai) is something modern, at that time Lisp was the favorite for AI, research and data science, to this day it is still that way. Many.

Its syntax is considered a real *bizarre*, that is, everything, absolutely everything is enclosed in parentheses `( )` .

The most famous Lisp programming languages or dialects are:
- [Common Lisp](http://common-lisp.net/) (A lot of things we use have it in the middle)
- Emacs Lisp (The Lisp of [GNU](https://terminalroot.com/tags#gnu) created nothing more, nothing less, by *lispista*: [Richard Stallman](https://stallman.org/) )
- [Scheme](http://www.scheme-reports.org/) (A very minimalistic Lisp)
- [Clojure](https://clojure.org/) (The most used currently)
- Maclisp
- EuLisp
- Visual LISP
- Franz Lisp
- OpenLisp

And several others.


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

There are estimated to be over 30 Lisp dialects, the most famous and current being [Clojure](https://clojure.org/) .
> According to research by [Stackoverflow](https://insights.stackoverflow.com/survey/2021) Clojure is the programming language that offers the best salaries in the world!!!

The syntax is very simple and easy to learn and remember: there will always be parentheses!

If you wrote [JavaScript](https://terminalroot.com/tags#javascript) in Lisp, an example code would look like this:

{% highlight clojure %}
(var name = "Terminal Root")
(function do_something()(
  (print(2 + 2))
))
{% endhighlight %}

But there are many programmers in the world of Lisp, and they are totally used to it and form a large community compared to many other more famous programming languages today. And many companies out there are looking for Clojure and Lisp programmers in general.

> Clojure was named the second [most loved](https://insights.stackoverflow.com/survey/2021) programming language among programmers in 2021, according to [Stackoverflow](https://insights. stackoverflow.com/survey/2021) .

---

# About Wisp
Well, leaving the talk about Lisp aside, but still talking about Lisp... There is a minimalist version written in [C++](https://terminalroot.com/tags#cpp)(that is, very easy to install , by the way, make it easy) which is **Wisp** .

It's a personal project that implements Lisp in a very simple way and it might be your best alternative for entering the Lisp world, if you want to enter that world.

The cool thing about this dialect is for you who like [C++](https://terminalroot.com/tags#cpp) it has a well written code and ideal for those who want to create their own programming language in the future and understand concepts of: tokens, lexicography, parser and others.

The entire interpreter was written in a single `wisp.cpp` file and this makes code analysis a lot easier and everything within it is well organized.

---

# Installation of Wisp
As I said, the installation is very simple, first just use [Git](https://terminalroot.com/tags#git) to clone the project:
{% highlight sh %}
git clone https://github.com/adam-mcdaniel/wisp
{% endhighlight %}

Now just have a compiler, preferably [g++](https://terminalroot.com/tags#gcc), enter the directory and compile with the command below.
> Note, it only compiles on **C++ 2003**.
{% highlight sh %}
cd wisp
g++ -std=c++03 wisp.cpp -o wisp
{% endhighlight %}

And to install on the system, copy it to a directory that is in your `$PATH`, I always recommend `/usr/local/bin`:
{% highlight sh %}
sudo install -v wisp /usr/local/bin/
{% endhighlight %}

Wisp has no parameters for *version* and no `help`, but we'll see that using it is very simple!


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

# Hello Wisp!
I still don't understand much about Lisp, but I intend to learn because I'm a fanatic about learning programming languages.

But the basics would be a *Hello, World!* of life and there are 3 ways to do that with Wisp:

### 1st. Running via [command line](https://terminalroot.com/tags#comandos)
For that use the `-c` parameter and then the Lisp code in single quotes and logical in parentheses:
{% highlight sh %}
wisp -c '(print "Hello World!")'
{% endhighlight %}

### 2nd. Running via file
Create a file with `.list` extension, example: `nvim hello.lisp` and insert the content below:
{% highlight clojure %}
(print "Hello World!")
{% endhighlight %}

And to run it use the `-f` parameter of *file*:
{% highlight sh %}
wisp -f hello.lisp
{% endhighlight %}

### 3rd. Running in a subshell via prompt
If you just run the command `wisp` you enter the subshell that runs commands [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)), example:
{% highlight sh %}
user@host ~ $wisp
>>> (print "Hello World!")
Hello World!
 => "Hello, World!"
>>> (exit)
{% endhighlight %}
> Note that to exit is `(exit)`(in parentheses) and avoid using directional arrows(**→ ↓ ←**), it will interpret it literally, that is, it will appear: `^[[A^[ [D^[[C` .

For more information, access the [official repository](https://github.com/adam-mcdaniel/wisp) and the [examples] directory(https://github.com/adam-mcdaniel/wisp/tree/main/ examples), learning by examples is cool!

