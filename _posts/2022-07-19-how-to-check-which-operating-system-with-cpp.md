---
layout: post
title: "How to Check Which Operating System with C++"
date: 2022-07-19 10:31:40
image: '/assets/img/cppdaily/check-os-cpp.jpg'
description: 'Make your programs portable and easy to implement.'
tags:
- cpp
- cppdaily
- windows
- gcc
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Many times we are developing portable programs with [C++](https://terminalroot.com/tags#cpp) that we need to create a single code that works on different platforms.

And for that we need to use PRE PROCESSING DIRECTIVES: `#ifdef`, `#if defined()`, ...

In this case there are specific **MACROS** for each operating system, for example:

+ If you want to detect if the system is **Linux**, just use the macro: `__linux__`;
+ If you want to check if it's **Windows**, you can use: `_WIN32` .

---

# Checking if it's Linux or Windows
Below is an example of [C++](https://terminalroot.com/tags#cpp) code that runs on both operating systems and emits a "Hello, World!" depending on the operating system:

{% highlight cpp %}
#include <iostream>

int main(){

#if defined(__linux__) // Or #if __linux__
  std::cout << "Hello, GNU/Linux!" << '\n';
#elif _WIN32
  std::cout << "Hello, Windows!" << '\n';
#else
  std::cout << "Hello, Other!" << '\n';
#endif

}
{% endhighlight %}

In case of Windows, you can still create another `#if` inside to detect if:
+ `_WIN64` , this Windows is 64-bit only;
+ `_WIN32` , both 64-bit and 32-bit
+ `__CYGWIN__` another more modern alternative.

Example:

{% highlight cpp %}
#include <iostream>

int main(){

#if __linux__
  std::cout << "Hello, GNU/Linux!" << '\n';
#elif _WIN32
  #if defined(_WIN64)
    std::cout << "Hello, Windows 64-bit!" << '\n';
  #else
    std::cout << "Hello, Windows!" << '\n';
  #endif
#else
  std::cout << "Hello, Other!" << '\n';
#endif

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

# Checking various operating systems
You can still detect all operating systems. Below is another example that not only detects Linux and Windows, but also checks if it is: [macOS](https://terminalroot.com/tags#macos), [FreeBSD](https://terminalroot.com/tags#freebsd), [Android](https://terminalroot.com/tags#android):

{% highlight cpp %}
#include <iostream>

int main(){

#if defined(__linux__) // Or #if __linux__
  std::cout << "Hello, GNU/Linux!" << '\n';
#elif __FreeBSD__
  std::cout << "Hello, FreeBSD!" << '\n';
#elif __ANDROID__
  std::cout << "Hello, Android!" << '\n';
#elif __APPLE__
  std::cout << "Hello, macOS!" << '\n';
#elif _WIN32
  std::cout << "Hello, Windows!" << '\n';
#else
  std::cout << "Hello, Other!" << '\n';
#endif

}
{% endhighlight %}

You can still check if it is [UNIX](https://terminalroot.com/tags#unix) type (Linux or BSD, macOS NOT): `unix`, `__unix` or `__unix__` .

For a complete list of all macros for operating systems you can see [here](https://sourceforge.net/p/predef/wiki/OperatingSystems/).

---

# Using [gcc](https://terminalroot.com/tags#gcc) to detect macro names
To have a list of macros you can detect, use `gcc` or `g++`:
> It may be that `clang` and `clang++` also have these options, but I haven't reinstalled them for testing yet.

+ On [GNU/Linux](https://terminalroot.com/tags#gnu):
{% highlight bash %}
g++ -dM -E - </dev/null
# Or
gcc -dM -E - </dev/null
{% endhighlight %}

+ On [Windows](https://terminalroot.com/tags#windows)
{% highlight bash %}
g++ -dM -E - <NUL:
# Or
gcc -dM -E - <NUL:
{% endhighlight %}

The output will be extensive:
> Small snippet below.

{% highlight cpp %}
#define __SSP_STRONG__ 3
#define __DBL_MIN_EXP__ (-1021)
#define __UINT_LEAST16_MAX__ 0xffff
#define __FLT16_HAS_QUIET_NAN__ 1
#define __ATOMIC_ACQUIRE 2
#define __FLT128_MAX_10_EXP__ 4932
#define __FLT_MIN__ 1.17549435082228750796873653722224568e-38F
#define __GCC_IEC_559_COMPLEX 2
#define __UINT_LEAST8_TYPE__ unsigned char
#define __SIZEOF_FLOAT80__ 16
#define __INTMAX_C(c) c ## L
#define __CHAR_BIT__ 8
#define __UINT8_MAX__ 0xff
#define __SCHAR_WIDTH__ 8
#define __WINT_MAX__ 0xffffffffU
#define __FLT32_MIN_EXP__ (-125)
#define __ORDER_LITTLE_ENDIAN__ 1234
#define __SIZE_MAX__ 0xffffffffffffffffUL
#define __WCHAR_MAX__ 0x7fffffff
#define __GCC_HAVE_SYNC_COMPARE_AND_SWAP_2 1
...
{% endhighlight %}


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

# References
+ <https://stackoverflow.com/questions/142508/how-do-i-check-os-with-a-preprocessor-directive>
+ <https://stackoverflow.com/questions/5919996/how-to-detect-reliably-mac-os-x-ios-linux-windows-in-c-preprocessor>
+ <https://sourceforge.net/p/predef/wiki/OperatingSystems/>



