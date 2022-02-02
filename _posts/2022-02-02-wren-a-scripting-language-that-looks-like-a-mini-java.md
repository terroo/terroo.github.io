---
layout: post
title: "Wren, a scripting language that looks like a mini Java"
date: 2022-02-02 09:28:51
image: '/assets/img/java/wren.jpg'
description: 'Competitive, small, fast and class-based.'
tags:
- programming
- development
- java
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Wren** is a small, fast, class-based, concurrent scripting language.

Think of [Smalltalk](https://www.gnu.org/software/smalltalk/) in a package the size of [Lua](https://terminalroot.com/tags#lua) with a dash of [Erlang] (https://www.erlang.org/) and wrapped in familiar, modern syntax, so this is Wren!

---

# Installation
Wren is available for [Linux](https://terminalroot.com.com/tags#linux), [Windows](https://terminalroot.com.com/tags#windows) and [macOS](https:// terminalroot.com.com/tags#macos) .

You will need [Git](https://terminalroot.com.com/tags#git), [GCC](https://terminalroot.com.com/tags#gcc) and [Make](https:/ /terminalroot.com.com/tags#make).

After cloning the build directory it will be at: `./wren/projects`, there will be a procedure for your operating system and IDE, for example on Linux:
{% highlight sh %}
git clone https://github.com/wren-lang/wren
cd wren/projects/make
make
{% endhighlight %}
The binary will be in the root of the project and inside the `bin/` directory and named `wren_test` , so you can move it to your `$PATH` variable, example:
{% highlight sh %}
sudo mv wren/wren_test /usr/local/bin/wren
{% endhighlight %}


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

# Usage
Wren doesn't have `version` or `help`, but to test if everything is ok, create a file with any extension, for example: `hello.wren` and enter the code below:
{% highlight java %}
System.print("Hello, world!")
{% endhighlight %}

And run it with `wren`:
{% highlight sh %}
wren hello.wren
{% endhighlight %}

If you print **Hello, world!** then everything is fine.

For more information, visit the links below:
+ [Official website](https://wren.io/)
+ [Repository](https://github.com/wren-lang/wren)

