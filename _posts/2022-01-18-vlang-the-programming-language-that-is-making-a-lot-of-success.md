---
layout: post
title: "V , the programming language that is making a lot of success"
date: 2022-01-18 14:25:23
image: '/assets/img/dev/v.jpg'
description: 'Vlang is suitable for Web Development, Game Development, Graphical Interfaces, Mobile, Science, Embedded Systems, Tools and etc.'
tags:
- development
- code
- vlang
- go
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**V** or **Vlang** is a [programming language](https://terminalroot.com/hello-world-in-25-programming-languages-proposal-docs-and-links/) : compiled, general-purpose and statically typed . Launched as an open source project in June 2019 by Alex Medvedniko.

Designed for performance, security and fast compilation. The compiler is written in **V** and is less than 1MB, it is capable of compiling in less than a second about 1 million lines of code with zero library dependencies.

You can learn everything about the language just by reading the documentation in an hour, and in most cases, there's only one way to do something.

This results in simple, readable and maintainable code.

Although simple, V gives a lot of power to the developer and can be used in practically all fields, including systems programming: [Web Development](https://terminalroot.com/tags#desenvolvimentoweb), [Game Development] (https://terminalroot.com/tags#games), [Graphic Interfaces](https://terminalroot.com/tags/#gui), Mobile, [Science](https://terminalroot.com .br/tags/#ciencia), Embedded Systems, Tools, etc.


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

# Installation
You can install using V on almost all possible operating systems, such as: [Linux](https://terminalroot.com/tags#linux), [macOS](https://terminalroot.com/tags# macos), [Windows](https://terminalroot.com/tags#windows), [\*BSD](https://terminalroot.com/tags#bsd), Solaris, WSL, Android, Raspbian , ...
> You will need: [Git](https://terminalroot.com/tags#git), [gcc](https://terminalroot.com/tags#gcc) and [Make](https:/ /terminalroot.com/tags#make) .

To install use the commands below in order:
{% highlight sh %}
git clone --depth=1 https://github.com/vlang/v
cd v
make
rm -rf .git*
cd ..
mv v/ /opt
cd /opt/v/
sudo ./v symlink
{% endhighlight %}

Then you can test Vlang:
{% highlight sh %}
v version
{% endhighlight %}
> Possible and similar output: `V 0.2.4 d826317` .

---

# Hello Vlang!
Let's test a [Hello, World!](https://terminalroot.com/hello-world-in-25-programming-languages-proposal-docs-and-links/) . Create a `.v` file, eg `nvim hello.v` and insert this code:
{% highlight vlang %}
fn main() {
  println('Hello Vlang!')
}
{% endhighlight %}

Now to run, run:
{% highlight sh %}
v run hello.v
{% endhighlight %}
> Probable output: `Hello Vlang!` .

You can also compile and run after generating the binary:
{% highlight sh %}
v hello.v
./hello
{% endhighlight %}

---

# Customizing your IDE/Editor with Highlight for Vlang
+ For [Vim](https://terminalroot.com/tags#vim) or [Neovim](https://terminalroot.com/tags#neovim) install [this plugin](https://github. com/ollykel/v-vim);
+ For [VSCode](https://terminalroot.com/tags#vscode) use [this](https://marketplace.visualstudio.com/items?itemName=vlanguage.vscode-vlang) extension;
+ And also for [Emacs](https://github.com/damon-kwok/v-mode) and for [Sublime](https://github.com/elliotchance/vlang-sublime).


<!-- RECTANGLE 2 - OnParagragraph -->
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

# Translating according to other languages
If you are used to [C++](https://terminalroot.com/tags#cpp) this mini table shows operations in Vlang similar to C++:

| C++ | Vlang |
|---|---|
| `std::vector s;` | `mut s := []` |
| `s.push_back("Vis ");` | `s << 'Vis '` |
| `s.push_back("awesome");` | `s << 'awesome'` |
| `std::cout << s.size();` | `println(s.len)` |

You may notice that Vlang is very similar to [Go/Golang](https://terminalroot.com/tags#go) . See [this table](https://github.com/vlang/v/wiki/V-for-Go-developers) for comparison.

ok

---

For more information and documentation see the links below:
{% highlight sh %}
v help
{% endhighlight %}
+ <https://vlang.io/>
+ <https://github.com/vlang/v>
+ <https://github.com/vlang/v/blob/master/doc/docs.md>
+ <https://github.com/vlang/v/wiki>


