---
layout: post
title: "How to Copy to Clipboard with C++"
date: 2023-12-05 17:06:10
image: '/assets/img/cpp/clip-cpp.jpg'
description: 'Excellent for creating those GUI buttons: ▣ Copy / ✔ Copied!'
tags:
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

There are several [C++](https://terminalroot.com/tags#cpp) libraries to do this. But each one has its own peculiarities, however, we will mention the majority at the end of this article.

In this example we will see how to use **Clip**.

**Clip** is a cross-platform [C++](https://terminalroot.com/tags#cpp) library ([Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos) and [GNU/Linux](https://terminalroot.com/tags#gnulinux)) for copying/pasting content from the clipboard.

---

# Usage
The simplest way to use is:

#### 1. Create an example project and enter it:
{% highlight bash %}
mkdir -p myproject
cd myproject
{% endhighlight %}

#### 2. Clone the Clip for your project:
{% highlight bash %}
git clone https://github.com/dacap/clip
{% endhighlight %}

#### 3. Create a basic C++ file that, after running the binary, will copy the `string`:
> `main.cpp`
{% highlight cpp %}
#include "clip/clip.h"

int main(){
   clip::set_text("This text will be copied to the clipboard");
   return 0;
}
{% endhighlight %}

#### 4. Create a CMake to build the binary:
> `CMakeLists.txt`
{% highlight cmake %}
cmake_minimum_required(VERSION 2.8)
project(Example)
add_executable(a.out main.cpp)
add_subdirectory(clip)
target_link_libraries(a.out clip)
{% endhighlight %}
> Change the CMake version to your version, I put this version for compatibility reasons, but there will probably be a *warning* when running it, but it will work!


#### 5. Build
{% highlight bash %}
cmake . -B build
cd build && make
./a.out
{% endhighlight %}

---

When running the binary, try typing: `Ctrl + v` somewhere else and notice that the content was copied!
> **NOTE**: This may not work in window managers, you need to configure files for compatibility, despite the [xclip](https://github.com/astrand/xclip) command  work normally!

But, I tested it on GNOME and Windows and it worked perfectly!

For more information, visit the [Clip repository](https://github.com/dacap/clip).

And as I said, there are many options for it, including:
+ [CopyQ](https://github.com/hluk/CopyQ)
+ [Clipboard](https://github.com/Slackadays/Clipboard)
+ [ClipboardXX](https://github.com/Arian8j2/ClipboardXX)
+ [ClipboardPlus](https://github.com/oormicreations/ClipboardPlus)
+ [wclip](https://github.com/palortoff/wclip)
+ [xclip](https://github.com/astrand/xclip)
+ And among others.

<!--
+ https://wiki.archlinux.org/title/clipboard
+ https://wiki.archlinux.org/title/clipboard
-->

