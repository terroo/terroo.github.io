---
layout: post
title: "How to Compile Your Games in SFML with GCC MinGW on Windows"
date: 2023-03-27 20:04:28
image: '/assets/img/sfml/sfml-windows-gcc.jpg'
description: 'For use with your favorite Code Editor or IDE!'
tags:
- sfml
- windows
- gcc
- gamedev
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[SFML](https://terminalroot.com/tags#sfml) is a great alternative for developing 2D games, in addition to other multimedia resources.

On [Windows](https://terminalroot.com/tags#windows) it is very easy to use it with [Visual Studio](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp/#23-visual-studio), however, there are those who prefer to use SFML in their [Code Editor/IDE](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp/) and also use another compiler instead of [MSVC](https://learn.microsoft.com/en-us/cpp/build/creating-and- managing-visual-cpp-projects?view=msvc-170).

In this article we will see how to compile your projects in [SFML](https://terminalroot.com/tags#sfml) with [GCC with MinGW on Windows](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/).

---

# Dependencies
First of all, you must have [GCC/G++ with MinGW](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/) properly installed on your system, and to do so, if you don't have it installed yet, just follow the steps in this tutorial:

## [How to Install GCC/G++ MinGW on Windows](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/).

---

## 01. Download SFML for MinGW
After properly installing and running **GCC/G++ with MinGW**, the next step is to download a **different SFML package** (different from the Visual Studio version).

And for that, access the downloads page of the SFML website at the link: <https://www.sfml-dev.org/download/sfml/2.5.1/> and download the version: `GCC 7.3.0 MinGW (SEH) - 64-bit` as shown below:

![SFML 2.5.1 download page](/assets/img/sfml/download-sfml-mingw.jpg)

If you want to download it right here, just click the button below:

<a href="https://www.sfml-dev.org/files/SFML-2.5.1-windows-gcc-7.3.0-mingw-64-bit.zip" class="btn btn-success"> Download GCC 7.3.0 MinGW (SEH) - 64-bit</a>

---

## 02. Extract the file
The downloaded file will have the name and extension: `SFML-2.5.1-windows-gcc-7.3.0-mingw-64-bit.zip`, extract this file by right-clicking it and choosing `Extract here`.

After extracted there will be a folder named: `SFML-2.5.1`, I renamed it to just `SFML`.
> It will be easier to use when compiling.

---

## 03. Copying files to your project
Now enter this folder (`SFML`) and copy all the files that are inside the subfolder: `bin` to the "root" of your project and then copy the entire `SFML` folder also to the "root" of your project, the files are:

![Files SFML MinGW Project](/assets/img/sfml/files-sfml-mingw-project.jpg)
> After listing the files with the `ls` command of [PowerShell](https://terminalroot.com/tags#powershell) inside my project folder: `MyProjectSFML`.

In addition to the `SFML` folder and the files copied from the `SFML\bin` subfolder, there is also the `main.cpp` file that contains the code that we are going to compile, if you want to use it as a test, use the code below:

{% highlight cpp %}
#include <SFML/Graphics.hpp>

int main(){
   sf::RenderWindow window(sf::VideoMode(800, 450), "SFML works!");
   sf::CircleShape shape(100.f);
   shape.setFillColor(sf::Color::Green);

   while (window.isOpen()){
     sf::Event event;
     while (window.pollEvent(event)){
       if (event.type == sf::Event::Closed){
         window.close();
       }
     }

     window.clear();
     window.draw(shape);
     window.display();
   }

   return 0;
}
{% endhighlight %}

Now let's compile!

---

## 04. Compiled an SFML project with GCC MinGW
To compile, just enter your project through [PowerShell](https://terminalroot.com/tags#powershell) or `CMD` and run the command:

{% highlight bash %}
g++ .\main.cpp -I SFML\include\ -L SFML\lib\ -lsfml-main -lsfml-graphics -lsfml-system -lsfml-window
{% endhighlight %}

Note the use of the parameters: `-I`(include) and `-L`(lib) with the respective directories to the `SFML` folder that is inside our project. And also the flags:
{% highlight bash %}
-lsfml-main -lsfml-graphics -lsfml-system -lsfml-window
{% endhighlight %}
> If you are creating code with Audio and/or Network add the flags: `-lsfml-audio -lsfml-network`.

Now just run the binary and run to the hug:
{% highlight bash %}
.\a.exe
{% endhighlight %}

![SFML Running with MinGW](/assets/img/sfml/sfml-mingw-running.jpg)

---

If you want to use [Makefile](https://terminalroot.com/tags#make) or a script in [Lua](https://terminalroot.com/tags#lua) to facilitate the compilation command, stay tuned willing! We show you how to do this in the article about [Images with SDL2](https://terminalroot.com/how-to-use-png-and-jpg-images-with-sdl2-images-on-windows/).



