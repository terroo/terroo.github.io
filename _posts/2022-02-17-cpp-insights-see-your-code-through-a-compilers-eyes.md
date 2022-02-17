---
layout: post
title: "C++ Insights - See your code through a compiler's eyes"
date: 2022-02-17 11:57:41
image: '/assets/img/cppdaily/cppinsights.jpg'
description: 'Uses LLVM/Clang, Ninja and LLD to build.'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**C++ Insights** is a tool based on [clang](https://terminalroot.com/tags#clang) that transforms your source code into the source code seen by the compiler.

The aim is to make things visible, which normally and intentionally happen behind the scenes. It's about the magic the compiler does to make things work. Or looking through a compiler's classes.

For example:

Suppose you have this code:
{% highlight cpp %}
#include <iostream>

int main(){
  std::string hello {"Hello, World!"};
  std::cout << hello << '\n';
  return EXIT_SUCCESS;
}
{% endhighlight %}

In fact this code looks like this by your compiler:
{% highlight cpp %}
#include <iostream>

int main()
{
  std::string hello = std::basic_string<char>{"Hello, World!", std::allocator<char>()};
  std::operator<<(std::operator<<(std::cout, hello), '\n');
  return 0;
}
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

# Installation and Use
**C++ Insights** is available online, but if you want to build and install it on your system, there are some details. You will need the following construction tools:
+ [CMake](https://terminalroot.com/tags#cmake)
+ [LLVM](https://terminalroot.com/tags#llvm)/[clang++](https://terminalroot.com/tags#clang), it only compiles with it.
+ [Ninja](https://terminalroot.com/tags#ninja)
+ [lld](https://lld.llvm.org/) , this is the most important of all, C++ Insights reports parameters to the linker that [GNU ld]() is not supported. 😞

Example in [Ubuntu](https://terminalroot.com/tags#ubuntu):
{% highlight sh %}
sudo apt install clang++ lld ninja-build cmake
{% endhighlight %}

Then just clone and build with the following command:
{% highlight sh %}
git clone https://github.com/andreasfertig/cppinsights.git
mkdir build && cd build
cmake -G"Ninja" ../cppinsights
ninja
{% endhighlight %}

If you can't, try this:
> Note that the linker and the compiler are informed via parameter to CMake, if you want to reinforce it, run the commands before `cmake`: `export CXX=$(which clang++)` and for the linker: `env LD=$ (which lld)` .
{% highlight sh %}
git clone https://github.com/andreasfertig/cppinsights
cppinsights cd
mkdir build && cd build

cmake -G"Ninja" -DCMAKE_LINKER=$(which lld) -DCMAKE_CXX_COMPILER=$(which clang++) -DCMAKE_PREFIX_PATH=$(which clang++ | sed 's/\/clang++//g') ..
ninja
{% endhighlight %}
> You can still try with `make`: `cmake -G "Unix Makefiles" ..` plus the other parameters above.

> I thought about compiling with these "closed loop" tools... Anyway, good luck compiling, you'll need it!

If you managed to compile and install it, the use is very simple, for example to analyze a code:
{% highlight sh %}
insights <YOUR_CPP_FILE> -- -std=c++17
{% endhighlight %}

If you were NOT able to compile and install, relax! You can use it online at:
# <https://cppinsights.io/>
> I'm sure it's a lot easier! 😃

For more information, also visit GitHub:
# <https://github.com/andreasfertig/cppinsights>

