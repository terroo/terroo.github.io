---
layout: post
title: "With These Flags You Dont Even Need Unit Testing"
date: 2025-04-16 13:19:55
image: '/assets/img/terlang/debug.jpg'
description: "🚀 The chance of your software having some kind of problem is almost zero."
tags:
- cpp
- clanguage
- terlang
- compilers
- gcc
- clang
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

We have already [published once about flags for GCC/Clang](https://terminalroot.com/10-flags-and-parameters-tips-for-gnu-gcc/) that talks about the fundamental flags for building software, which are:
{% highlight bash %}
g -Wpedantic -Wall -Werror -Wextra -fsanitize=address
{% endhighlight %}

However, although they already help a lot, you can still improve your code with [Static Analyzers](https://terminalroot.com/how-to-do-static-analysis-of-c-cpp-with-cppcheck/) and also flags to check conversions and other possible bugs.

An ideal compiler for this is [clang++](https://terminalroot.com./tags#clang), as it displays more *warnings* than [g++](https://terminalroot.com./tags#gcc).

What are they:
### Recommended for debugging:
{% highlight bash %}
-g -O0 # Debug info + no optimizations (more readable)
-fno-omit-frame-pointer # Better for stack traces and debuggers
{% endhighlight %}

### Useful warnings:
{% highlight bash %}
-Wconversion # Converts dangerous implicits (int → float, etc)
-Wsign-conversion # Converts between signed/unsigned
-Wnull-dereference # Detects use of null pointers
-Wdouble-promotion # Detects implicit promotions to double
-Wformat=2 # Checks printf/scanf more strictly
-Wcast-align # Warns about casts with possible alignment problems
{% endhighlight %}

In addition to:
### Complementary sanitizers:
{% highlight bash %}
-fsanitize=undefined # UB: overflows, null deref, invalid shift, etc
-fsanitize=leak # Detects memory leaks
{% endhighlight %}

Also `-Wshadow` and `-Wfloat-conversion`.

**Note:** Use `-O1` if you want a little optimization without losing too much clarity in the debug.


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

I used them together to debug [Terlang](https://github.com/terroo/terlang) and after compiling with these flags I got several `Warnings` that were transformed into errors, below the image at the time of compilation:

![alt text](/assets/img/terlang/err-ter-1.png)

I used the [debug.ter](https://github.com/terroo/terlang/blob/main/debug.ter) file and resolved all these errors/Warnings according to [this commit](https://github.com/terroo/terlang/commit/e55176696164ada480a36024500c7735440badd3), but in this commit there are also other modifications and additional implementations.

In short, I created a `debug.ter` file with all the flags, e.g.:

{% highlight cpp %}
/*
 TER/TERLANG
 By: Marcos Oliveira
*/

//Defs
auto compiler = "clang++ -stdlib=libc++ -O0 -fno-omit-frame-pointer -Wfloat-conversion"
auto add_flags = "-Wsign-conversion -Wnull-dereference -Wdouble-promotion -Wformat=2 -Wcast-align -Wconversion"
auto sanitize = " -fsanitize=address -fsanitize=undefined -fsanitize=leak"
auto flags = "-g -Wall -Werror -Wextra -Wshadow -Wpedantic"
auto build = compiler + " " + add_flags + " " + sanitize + " " + " " + flags + " ./src/*.cpp"

// Display full command
output(build)
exec(build)
{% endhighlight %}

So, when you are in *development mode* I recommend compiling with all these flags, however, when you are in *release* mode it is best to remove all of them, as they compromise performance and significantly increase the size of the binary.

