---
layout: post
title: "Install CSFML, SFML for C Language"
date: 2023-11-13 13:45:06
image: '/assets/img/c/csfml.jpg'
description: 'Create 2D games quickly and easily!'
tags:
- clanguage
- sfml
- gamedev
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**CSFML** is an *interface* of [SFML](https://terminalroot.com/tags#sfml) for the [C Language](https://terminalroot.com/tags#clanguage), because [SFML](https://terminalroot.com/tags#sfml) only works natively in [C++](https://terminalroot.com/cpp).

It is available for [Windows](https://terminalroot.com/tags#windows), [GNU/Linux](https://terminalroot.com/tags#gnu) and [macOS](https:/ /terminalroot.com/tags#macos).

The good thing about having **CSFML** also installed on your system is that several other programming languages that have *bindings* for SFML, use CSFML as a *wrapper* instead of **SFML** itself.

---

# Installation
Example on Ubuntu:
{% highlight bash %}
sudo apt install libcsfml-graphics2.5 libcsfml-audio2.5 libcsfml-dev libcsfml-doc libcsfml-network2.5 libcsfml-system2.5 libcsfml-window2.5
{% endhighlight %}

If you want to install everything at once:
{% highlight bash %}
sudo apt install libcsfml-*
{% endhighlight %}
> [See here for Arch Linux](https://archlinux.org/packages/extra/x86_64/csfml/) and [here for Fedora](https://src.fedoraproject.org/rpms/CSFML). For other distros use your system's package manager search!

For Windows you must download [this link](https://www.sfml-dev.org/download/csfml/), unzip and move to the `C:\` drive, another alternative is also to use [NuGet ](https://www.nuget.org/packages/CSFML/2.5.1):
{% highlight bash %}
dotnet add package CSFML --version 2.5.1
{% endhighlight %}

There is also a download for macOS, however, you can also use [Brew](https://formulae.brew.sh/formula/csfml), to do this just run the command:
{% highlight bash %}
brew install csfml
{% endhighlight %}

You can also compile from scratch, but remember that you must first have SFML installed as a dependency. To do this, run the commands below:
{% highlight bash %}
git clone https://github.com/SFML/CSFML
cd CSFML
cmake -B build .
cd build && make
sudo make install
cd ../..
rm -rf CSFML
{% endhighlight %}

---

# Basic example code
Create an example file: `main.c`:
{% highlight c %}
#include <SFML/Graphics.h>

int main(int argc, char **argv) {
   sfVideoMode mode = {800, 450, 32};
   sfRenderWindow *window = sfRenderWindow_create(mode, "CSFML Example", sfResize | sfClose, NULL);

   sfRectangleShape *shape = sfRectangleShape_create();
   sfVector2f vf = {200, 200}, pos = {30, 30};
   sfRectangleShape_setSize(shape, vf);
   sfRectangleShape_setFillColor(shape, sfGreen);
   sfRectangleShape_setPosition(shape, pos);

   while (sfRenderWindow_isOpen(window)) {
     sfEvent event;
     while (sfRenderWindow_pollEvent(window, &event)) {
       if (event.type == sfEvtClosed) {
         sfRenderWindow_close(window);
       }
     }

     sfRenderWindow_clear(window, sfBlack);
     sfRenderWindow_drawRectangleShape(window, shape, NULL);
     sfRenderWindow_display(window);
   }

   sfRectangleShape_destroy(shape);
   sfRenderWindow_destroy(window);

   return 0;
}
{% endhighlight %}

To compile:
{% highlight bash %}
gcc main.c -lcsfml-window -lcsfml-system -lcsfml-graphics
{% endhighlight %}

**NOTE**: If you compiled from scratch and encountered an error when running the binary that is looking for file: `.so`, then you will need to add the path that was installed to your `$LD_LIBRARY_PATH` variable:

{% highlight bash %}
export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:/usr/local/lib"
{% endhighlight %}
> You can add this line to your `~/.bashrc` to automate this addition and not need to run this command every time you run CSFML binaries!


The names of the functions and how to use them are very intuitive, because if you already know [SFML](https://terminalroot.com/tags#sfml) it is easy to deduce.

For more information visit the links:
+ Repository: <https://github.com/SFML/CSFML>
+ Downloads page: <https://sfml-dev.org/download/csfml/>
+ Usage example: <https://26.customprotocol.com/csfml/index.htm>
+ Alternative documentation: <https://epitech-2022-technical-documentation.readthedocs.io/en/latest/csfml.html>
