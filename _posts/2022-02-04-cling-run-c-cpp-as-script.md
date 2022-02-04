---
layout: post
title: "Cling, run C/C++ as script"
date: 2022-02-04 11:03:03
image: '/assets/img/c/cling.jpg'
description: 'Based on Clang and with the LLVM'
tags:
- cpp
- cppdaily
- clanguage
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

How can IntelliSense from your [IDE/Editor](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp/) know if the code is it right without even compiling? This is possible thanks to **cling** style technology.

**Cling** is an interactive [C++](https://terminalroot.com/tags#cpp) interpreter, built on the [LLVM](https://terminalroot.com.com/tags#llvm) and [Clang](https://terminalroot.com.com/tags#clang). Its advantages over standard interpreters are that it has command line prompt and uses just-in-time (JIT) compiler for compilation. Many of the developers of these types of software applications call them interactive compilers.

One of Cling's main goals was to provide a contemporary, high-performance alternative to the first [C++] interpreter(https://terminalroot.com.com/tags#cpp) in the *ROOT - CINT* project. Backward compatibility with **CINT** was a top priority during development.

---

# Installation
Just download the script [Python](https://terminalroot.com.com/tags#python), give execution permission and run:
{% highlight sh %}
wget https://raw.githubusercontent.com/root-project/cling/master/tools/packaging/cpt.py
chmod +x cpt.py
./cpt.py --check-requirements && ./cpt.py --create-dev-env Debug --with-workdir=./cling-build/
{% endhighlight %}
> The truth is that this construction process will take a long time, the **cling** is huge! Then see how to install the binary below.


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

There is binary for several operating systems including [Linux](https://terminalroot.com.com/tags#linux) . If you want to quickly install on [Ubuntu](https://terminalroot.com.com/tags#ubuntu), for example, do as follows:

> As of the publication date of this article this is the latest version, for other versions and binaries [see here](https://root.cern.ch/download/cling/) .
{% highlight sh %}
wget -q https://root.cern.ch/download/cling/cling_2020-11-05_ROOT-ubuntu2004.tar.bz2
tar xjf cling_2020-11-05_ROOT-ubuntu2004.tar.bz2
sudo mv cling_2020-11-05_ROOT-ubuntu2004/ /opt/cling
sudo ln -s /opt/cling/bin/cling /usr/local/bin/cling
{% endhighlight %}

Testing, run:
{% highlight sh %}
cling '#include <stdio.h>' 'printf("Hello World!\n")'
{% endhighlight %}

If you want to omit `stderr`, run:
{% highlight sh %}
cling '#include <stdio.h>' 'printf("Hello World!\n")' 2>/dev/null
{% endhighlight %}

You can also enter a subshell by just running:
{% highlight sh %}
cling
{% endhighlight %}

---

For more usage tips visit the addresses:
+ <https://github.com/root-project/cling>
+ <https://root.cern/cling/>

