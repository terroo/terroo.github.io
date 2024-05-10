---
layout: post
title: "Easily create Lua Games with LÖVE"
date: 2024-05-10 11:56:56
image: '/assets/img/lua/love.jpg'
description: "❤️  Written in C++ and uses Lua as a scripting language. It is available for Windows, macOS, Android, GNU+Linux and iOS."
tags:
- gamedev
- lua
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[LÖVE](https://love2d.org/) is a free and open-source *framework* for [game development](https://terminalroot.com/tags#gamedev).

Written in [C++](https://terminalroot.com/tags#cpp) and uses [Lua](https://terminalroot.com/tags#lua) as the scripting language. It is available for [Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos), [Android](https://terminalroot.com/tags#android), [GNU+Linux](https://terminalroot.com/tags#gnulinux) and [iOS](https://terminalroot.com/tags#swift).

**LÖVE** is well known in [Game Development Competitions](https://terminalroot.com/tags#games). It supports and provides various resources from the [#gamedev](https://terminalroot.com/tags#gamedev) world, such as:
+ [OpenGL](https://terminalroot.com/tags#opengl);
+ UTF-8;
+ PNG, JPEG, GIF, TGA and BMP images.
+ Audio formats: WAV, OGG and MP3;
+ Can be used in conjunction with Box2D to facilitate the use of Physics formulas.

And among many other resources.

---

# Installation
LÖVE, in short, is just a command that receives files as a parameter, that is, the installation involves downloading the binary and installing it. But, if you want to compile from scratch, just follow the compilation instructions described in the [GitHub repository](https://github.com/love2d/love).

To download, go to the address: <https://love2d.org/> and click on the option according to your operating system and architecture:

[![LÖVE download](/assets/img/lua/download-love.png)](https://love2d.org/)

In my case, I chose to download [AppImage](https://github.com/love2d/love/releases/download/11.5/love-11.5-x86_64.AppImage):

{% highlight bash %}
wget https://github.com/love2d/love/releases/download/11.5/love-11.5-x86_64.AppImage
chmod +x love-11.5-x86_64.AppImage
{% endhighlight %}

To run, just run the binary:
{% highlight bash %}
./love-11.5-x86_64.AppImage
{% endhighlight %}

A window will appear with the animation of an emoji-style balloon with the tail written: `NO GAMES`:
![LÖVE home window](/assets/img/lua/no-games-love.png)

To install, use the `install` command on GNU+Linux distros:
> In this case, installing and renaming so the command is just: `love`

{% highlight bash %}
sudo install -v love-11.5-x86_64.AppImage /usr/local/bin/love
{% endhighlight %}
> Output: `'love-11.5-x86_64.AppImage' -> '/usr/local/bin/love'`.

Now, to run it, regardless of where you are, just run the command: `love`!

For Windows, just use [PowerShell](https://terminalroot.com/tags#powershell) or [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701). If you want to install, move it to the `C:\` drive, preferably in a folder named `LÖVE/love.exe` and add the **PATH** to use only as the `love` command too.

---

# Creating a 'Hello World'
Every time you develop with LÖVE, I advise creating a folder/directory for your project:
{% highlight bash %}
mkdir MyProjectLove
cd MyProjectLove
{% endhighlight %}

And within this project, create a file [Lua](https://terminalroot.com/definitive-guide-to-lua-for-beginners/) named: `main.lua` and insert the code below:
{% highlight moon %}
function love.draw()
     love.graphics.print('Hello World!', 400, 300)
end
{% endhighlight %}

This code will create a window with a width of 400px and a height of 300px and will draw the phrase: 'Hello World' in this window.
> To learn Lua quickly go to: <https://terminalroot.com/definitive-guide-to-lua-for-beginners/>.

> **NOTE**: Do not run: `love main.lua`. It does not work!!! You will get a *blue error window* and information like: `Error: [love "boot.lua"]:330: Cannot load game at path ()...`.

To run it, you need to run the directory where the code is located, that is, the complete directory, if it is in the same directory, then it is just the dot: (`.`), like this:

{% highlight bash %}
love.
{% endhighlight %}

The window will appear:
![LÖVE Hello World](/assets/img/lua/love-hello-world.png)

---

# Creating a basic animation
Let's create a basic animation of drawing eyes in the window and moving them as we move the mouse. Edit the `main.lua` file and insert the code below:

{% highlight moon %}
function love.draw()
     function drawEye(eyeX, eyeY)
         local distanceX = love.mouse.getX() - eyeX
         local distanceY = love.mouse.getY() - eyeY
         local distance = math.min(math.sqrt(distanceX^2 + distanceY^2), 30)
         local angle = math.atan2(distanceY, distanceX)

         local pupilX = eyeX + (math.cos(angle) * distance)
         local pupilY = eyeY + (math.sin(angle) * distance)

         love.graphics.setColor(1, 1, 1)
         love.graphics.circle('fill', eyeX, eyeY, 50)

         love.graphics.setColor(0, 0, .4)
         love.graphics.circle('fill', pupilX, pupilY, 15)
     end

     drawEye(200, 200)
     drawEye(330, 200)
end
{% endhighlight %}

And run again:
{% highlight bash %}
love.
{% endhighlight %}

The output will be similar to below:

![LÖVE eyes move](/assets/img/lua/love-eyes-move.png)

---

According to this article, it was possible to notice how easy and interesting it is to use LÖVE. There are a multitude of things about it and for that I have separated the links below:

+ <https://love2d.org/>
+ <https://github.com/love2d/love>
+ <https://love2d.org/wiki/Main_Page>
+ <https://love2d.org/forums/>
+ <https://simplegametutorials.github.io/love/>
+ <https://love2d.org/wiki/Getting_Started>
+ <https://github.com/love2d-community/awesome-love2d>
+ <https://en.wikipedia.org/wiki/L%C3%96VE_(game_framework)>
