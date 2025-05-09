---
layout: post
title: "Use this Modern scanf for C++"
date: 2025-05-09 17:20:07
image: '/assets/img/cppdaily/scnlib.jpg'
description: "🚀 It's faster than `iostream` and typed, unlike `scanf`."
tags:
- cppdaily
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

`scnlib` is a modern C++ library to replace `scanf` and `std::istream`. This library tries to bring us even closer to the complete replacement of `iostream`
and `stdio` in [C](https://terminalroot.com/tags#clanguage).

It's faster than `iostream` and typed, unlike `scanf`. Think of [{fmt}](https://github.com/fmtlib/fmt) or `std::format` in [C++20](https://terminalroot.com/tags#cpp), but in another direction.

This library is the reference implementation of the ISO C++ standards proposal [P1729 "Text Parsing"](https://wg21.link/p1729).


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
To compile, simply clone with [git](https://terminalroot.com/tags#git) and use [CMake](https://terminalroot.com/tags#cmake) and install:

{% highlight bash %}
git clone https://github.com/eliaskosunen/scnlib
cd scnlib
cmake -B build .
cmake --build build
sudo cmake --install build
{% endhighlight %}
> After that, you can exit the repository and remove it: `cd .. && rm -rf scnlib`.

---

## Basic example
In this example, in addition to `scnlib`, there is also the use of [`println` from C++23](https://terminalroot.com/how-to-install-gcc-14-and-use-cpp23/), we will read 2 numbers via prompt and their sum will automatically be displayed:

> `main.cpp`

{% highlight cpp %}
#include <scn/scan.h>
#include <print>

constexpr auto sum = [](int x, int y){
  return x + y;
};

int main(){
  if(auto result =
      scn::prompt<int, int>("Enter 2 numbers to add? ", "{} {}")){
      auto [a, b] = result->values(); std::println("The sum of {} plus {} is: {}", a, b, sum(a, b));
  }else{
      std::println(stderr, "Error: {}", result.error().msg());
  }
}
{% endhighlight %}

To compile, use the *flag*: `-lscn`:
{% highlight bash %}
g++ main.cpp -lscn
{% endhighlight %}

Then, run the binary and test, example:
{% highlight bash %}
./a.out
Enter 2 numbers to add? 3 6
The sum of 3 plus 6 is: 9
{% endhighlight %}

---

For more information, access [the official repository](https://github.com/eliaskosunen/scnlib) and the address: <https://scnlib.dev/>.

