---
layout: post
title: "How to Install GCC 14 and Use C++23"
date: 2025-04-15 14:32:30
image: '/assets/img/gcc/23-gcc-14.jpg'
description: "🚀 Several new features such as: std::print, std::println and others."
tags:
- cpp
- gcc
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**[GCC](https://terminalroot.com/tags#gcc) 14** has several new usability improvements. Although *GCC 15* is already available, many systems still do not have it available in the package manager repositories, but GCC 14 does! Like in [Ubuntu](https://terminalroot.com/tags#ubuntu), for example.

If you are updating your system, but there are still no updates available, it may be because it is not the default yet, but you can install it and set it as the default for your system.

Let's see how to do this.


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

## Installation
To install, on [Ubuntu](https://terminalroot.com/tags#ubuntu), for example, just use APT:

First, update the repository list:
{% highlight bash %}
sudo apt update && sudo apt upgrade
{% endhighlight %}

Now just install [GCC 14](https://gcc.gnu.org/gcc-14/changes.html), in this case just `g++`:
{% highlight bash %}
sudo apt install g++-14
{% endhighlight %}

After installing, the version may not be up to date:
{% highlight bash %}
g++ --version
g++-13 (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
{% endhighlight %}

However, it will already be available through the `g++-14` command:
{% highlight bash %}
g++-14 --version
g++-14 (Ubuntu 14.2.0-4ubuntu2~24.04) 14.2.0
{% endhighlight %}

---

## Set as default for your system
To make it default when using only the `g++` command, follow these steps:

+ **1. Add GCC 14 as an alternative**:
{% highlight bash %}
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-14 100
{% endhighlight %}

+ **2. Now select interactively**:
{% highlight bash %}
sudo update-alternatives --config g++
{% endhighlight %}
> Choose the *number* relative to g++14, usually `2`, they may both be the same, but force it by choosing **2**.

After that, just run the `g++` command without specifying:
{% highlight bash %}
g++ --version
g++ (Ubuntu 14.2.0-4ubuntu2~24.04) 14.2.0
Copyright (C) 2024 Free Software Foundation, Inc.
This is free software; see the source for copying conditions. There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
{% endhighlight %}

Advantages of doing it the way above instead of just changing the *symbolic link*:
+ Doesn't break the system.
+ Can easily switch between versions.
+ Avoids conflicts with `apt/dpkg`.


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

## Additional
If you are having problems with your [LSP](https://terminalroot.com/lsp-autocomplete-and-machine-learning/) `clangd` also install these libraries for compatibility with [Clang](https://terminalroot.com/tags#clang):

{% highlight bash %}
sudo apt install libstdc++-14-dev libc++-dev libc++abi-dev
{% endhighlight %}

---

## Testing
If you create this code you will need to use the `-std=c++23` flag to be able to compile, for example:

> `print.cpp`
{% highlight cpp %}
#include <print>

int main(){
  const std::string var{"All"}; 
  std::println("Hello, {}", var);
}
{% endhighlight %}

Compiling:
{% highlight bash %}
g++ -std=c++23 print.cpp
{% endhighlight %}

If you want to add `-std=c++23` as default and not need to invoke it when compiling, you can add an `alias` to `~/.bashrc`, for example:
> To get the full path of your `g++` use the command `which`, e.g.: `which c++`

{% highlight bash %}
echo 'alias g++="/usr/bin/g++ -std=c++23"' >> ~/.bashrc
source ~/.bashrc
{% endhighlight %}

There you go, now you don't even need `-std=c++`, just run: `g++ print.cpp`.

Another way is to use `specs`, for example:

Generate the `specs`:
{% highlight bash %}
g++ -dumpspecs > ~/.config/specs
{% endhighlight %}

Edit the `specs` and change the relative line and below the content: `*cpp:`, replace everything there and leave it like this:
{% highlight bash %}
*cpp:
%{posix:-D_POSIX_SOURCE} -std=c++23
{% endhighlight %}

And then add this to your `~/.bashrc`:
{% highlight bash %}
export GCC_SPEC_FILE=/path/to/specs
alias g++="g++ -specs=$GCC_SPEC_FILE"
{% endhighlight %}

---

You can use the same logic for the command: `gcc` for the [C Language](https://terminalroot.com/tags#clanguage).

For more information, visit the links below:
+ <https://gcc.gnu.org/gcc-14/changes.html>
+ <https://en.cppreference.com/w/cpp/io/println>
+ <https://developers.redhat.com/articles/2025/04/10/6-usability-improvements-gcc-15#>

