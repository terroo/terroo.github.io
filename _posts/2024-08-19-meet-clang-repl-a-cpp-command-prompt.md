---
layout: post
title: "Meet Clang REPL, a C++ command prompt"
date: 2024-08-19 09:52:49
image: '/assets/img/cppdaily/clang-repl.jpg'
description: "🚀 Suitable for exploratory programming and in places where time to gain insights is important."
tags:
- clang
- llvm
- cpp
- clanguage
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

We have already published about [Cling](https://terminalroot.com/cling-run-c-cpp-as-script/) which has similar features to **Clang REPL**, but Clang [REPL](https://terminalroot.com/what-is-the-readline-library-for-installation-and-use/) is an alternative already available for those who already have [Clang/LLVM](https://terminalroot.com/tags#clang) installed on their own system. If you don't have it installed yet, see the links below:
+ [How to Install Clang on Windows with a Single Command](https://terminalroot.com/how-to-install-clang-on-windows-with-a-single-command/)
+ [How to Install Clang Binary on Any GNU/Linux Distro](https://terminalroot.com/how-to-install-binary-clang-on-any-gnu-linux-distro/)

**Clang-Repl** is an interactive [C++](https://terminalroot.com/tags#cpp) interpreter that allows incremental compilation.

Clang-Repl is suitable for exploratory programming and in places where time to gain insights is important. Clang-Repl is a project inspired by the work of [Cling](https://terminalroot.com/cling-run-c-cpp-as-script/), a [C](https://terminalroot.com/tags#clanguage)/C++ interpreter based on [LLVM](https://terminalroot.com/tags#llvm).


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

## Usage
To start Clang REPL, just type this command in the terminal:
{% highlight bash %}
clang-repl
{% endhighlight %}

A *sub-shell* will automatically start where you can run the commands, but first you need to include the desired library. For example, to use `std::cout` we need to include the `iostream` library:

{% highlight bash %}
clang-repl> #include <iostream>
{% endhighlight %}

And then, just test it by printing something:
{% highlight bash %}
clang-repl> std::cout << "Hello, CLANG REPL!\n";

Hello, CLANG REPL!
clang-repl>
{% endhighlight %}

To exit `clang-repl` just press `%quit`:
{% highlight bash %}
clang-repl> %quit
{% endhighlight %}

In other words, simple and intuitive! > Remember that `clang-repl` does not interpret [Backspace] and does not use the [readline](https://terminalroot.com/what-is-the-readline-library-for-installation-and-use/) lib to store commands in the history.

---

For more information, visit: <https://clang.llvm.org/docs/ClangRepl.html>.
