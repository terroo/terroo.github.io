---
layout: post
title: "Create TUI apps with C++ and TermOx"
date: 2022-01-31 13:19:25
image: '/assets/img/cpp/termox.jpg'
description: 'To create graphical programs in Terminal more easily.'
tags:
- cpp
- ncurses
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

This project was formerly called **CPPurses**, but the name has been changed to **TermOx**.

It is a framework based on [NCURSES](https://terminalroot.com/tags#ncurses) to create applications that run on [terminal](https://terminalroot.com.com/tags#terminal) .

---

# Installation
Make sure you have the following software and libraries installed on your system:
+ [Git](https://terminalroot.com.com/tags#git)
+ [GCC](https://terminalroot.com.com/tags#gcc)
+ [GNU Make](https://terminalroot.com.com/tags#make)
+ [CMake](https://terminalroot.com.com/tags#cmake)
+ [NCURSES](https://terminalroot.com/tags#ncurses)

Then clone the project and build:
{% highlight sh %}
git clone --recurse-submodules https://github.com/a-n-t-h-o-n-y/TermOx
cd TermOx
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make
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

> Before installing also build the **demos**.

If your system is in a language other than US English, run this command first:
{% highlight sh %}
sed -i "s/en_US\.UTF-8/$LANG/g" ../external/Escape/src/terminal.cpp
{% endhighlight %}

Now build the demos:
{% highlight sh %}
make demos
{% endhighlight %}

Try the **demos**
{% highlight sh %}
./demos/demos
{% endhighlight %}

A menu with the examples will open, navigate using the up and down arrow keys and select by pressing **Enter**. To return to the menu press **ESC** and to close the **demos** press **Ctrl + c** .

And finally install on your system:
{% highlight sh %}
cd ../..
sudo mv TermOx /opt/
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

# Creating a Hello, World
Create a project directory in it, example: `mkdir myapp && cd myapp`.

Now also create an example file `main.cpp` and insert the content below:
{% highlight cpp %}
#include <termox/termox.hpp>

int main(){
    return ox::System{}.run<ox::Textbox>("Hello, World!");
}
{% endhighlight %}

And to build use CMake and create a `nvim CMakeLists.txt` and insert the content below:
{% highlight cmake %}
cmake_minimum_required(VERSION 3.9)
project(MyApp)
add_subdirectory(TermOx)
add_executable(hello-world main.cpp)
target_link_libraries(hello-world PRIVATE TermOx)
{% endhighlight %}

Now copy TermOx to your project:
{% highlight sh %}
cp -r /opt/TermOx .
{% endhighlight %}

Create a build directory and build:
{% highlight sh %}
mkdir build && cd build
cmake..
make
{% endhighlight %}

And test your *Hello, World*:
> It's like a mini text editor, feel free to use it:
{% highlight sh %}
./hello-world
{% endhighlight %}
> Press **Ctrl +c** to exit.

---

For more documentation visit the [repository](https://github.com/a-n-t-h-o-n-y/TermOx) .

