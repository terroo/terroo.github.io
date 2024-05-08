---
layout: post
title: "Use Ccache and compile much faster"
date: 2024-05-08 10:26:07
image: '/assets/img/cpp/ccache.jpg'
description: 'A tool to make your compiler fly!'
tags:
- cpp
- clanguage
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Ccache** is a software development tool that caches builds so that next time the same build can be avoided and the results can be removed from the cache.

This can greatly speed up recompilation time. Detection is done by [hash](https://terminalroot.com/what-is-and-how-to-generate-a-hash/) of different types of information that must be exclusive to the compilation and then using the *hash* sum to identify the cached output.

Ccache is licensed under the [GNU General Public License](https://github.com/ccache/ccache/blob/master/LGPL-3.0.txt).

---

# Installation
To install Ccache you can build it from scratch and install it with the tools [CMake](https://terminalroot.com/tags#cmake) and [GNU Make](https://terminalroot.com/tags# make) by cloning the source code from the repository on [GitHub](https://terminalroot.com/tags#github):
{% highlight bash %}
https://github.com/ccache/ccache
cd ccache
cmake -B build -D CMAKE_BUILD_TYPE=Release .
cd build && make
sudo make install
{% endhighlight %}

But, Cache is available in most package manager repositories. For example, to install on [Ubuntu](https://terminalroot.com/tags#ubuntu):
{% highlight bash %}
sudo apt install ccache
{% endhighlight %}

---

# Example of use
We know that compilations that use [RegEx](https://terminalroot.com/tags#regex) tend to take a little longer than normal. Suppose you have [this code]() in [C++](https://terminalroot.com/tags#cpp):
{% highlight cpp %}
#include <iostream>
#include <regex>

int main(){
   std::string html = "<a href=\"https://terminalroot.com/\">This is a link</a>";
   std::regex tags("<[^>]*>");
   std::string remove{};
   std::cout << std::regex_replace(html, tags, remove) << '\n';
   return 0;
}
{% endhighlight %}

To speed up compilation, you must pass the compilation command to `ccache`:
{% highlight bash %}
ccache g++ regex.cpp
{% endhighlight %}
> To compile with [GCC](https://terminalroot.com/tags#gcc)

Or, if it is with [Clang](https://terminalroot.com/tags#clang):
{% highlight bash %}
ccache clang++ regex.cpp
{% endhighlight %}

---

You can link `ccache` to be used as a default, e.g.: `ln -s ccache /usr/local/bin/g++`.

For parameter tips and optimizations, see the help or manual:
{% highlight bash %}
man ccache
cache --help
{% endhighlight %}

Also visit the [repository](https://github.com/ccache/ccache) and the official website: <https://ccache.dev/>.
