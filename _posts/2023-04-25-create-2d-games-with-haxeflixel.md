---
layout: post
title: "Create 2D Games with HaxeFlixel"
date: 2023-04-25 10:20:06
image: '/assets/img/gamedev/haxeflixel.jpg'
description: 'Written with the Haxe programming language that can also compile to: JavaScript , C++ , Java, PHP, C#, Python, Lua and Node.js.'
tags:
- gamedev
- haxe
- ocaml
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**HaxeFlixel** is a free and easy-to-use cross-platform 2D game engine built with the [Haxe](https://haxe.org/) programming language and the [OpenFL](https://openfl.org) framework.

It is available for several platforms, such as: [Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos), [Android](https://terminalroot.com/tags#android), iOS, [Web](https://terminalroot.com/tags#html) and [GNU/Linux](https://terminalroot.com /tags#gnu).

**Haxe** is a high-level programming language that can produce applications and source code for many different computing platforms from one codebase, including: [JavaScript](https://terminalroot.com. br/tags#javascript) , [C++](https://terminalroot.com/tags#cpp) , [Java](https://terminalroot.com/tags#java), [PHP](https ://terminalroot.com/tags#php), [C#](https://terminalroot.com/tags#csharp), [Python](https://terminalroot.com/tags#python), [Lua](https://terminalroot.com/tags#lua) and [Node.js](https://terminalroot.com/tags#nodejs).

It is free and open source software, released under the MIT license. The compiler, written in [OCaml](https://terminalroot.com/tags#ocaml), is released under the **GNU General Public License (GPL) version 2**.

---

# Installation
To use HaxeFlixel you will first need the Haxe programming language installed on your system. The procedure for all operating systems can be found on the [download](https://haxe.org/download/) page, for Windows for example there are already pre-compiled binaries, that is, just run a `.exe file ` and then add the path to the environment variable.

Some quick installation examples:

{% highlight bash %}
choco install haxe # Windows with Chocolatey
brew install hash # macOs via Brew
sudo apt install haxe # Debian, Ubuntu, Mint and similar
sudo pacman -Shaxe # Arch, Manjaro and the like
sudo dnf install hash # Fedora
sudo zypper install haxe # OpenSUSE
{% endhighlight %}

After properly installing the Haxe programming language, now just install HaxeFlixel as follows:

Use the Haxe package manager([haxelib](https://lib.haxe.org/)) that will be available and install the following packages:

{% highlight bash %}
haxelib install lime openfl flixel
{% endhighlight %}

---

# Creating a basic example
Create a project/folder and enter it through the terminal: [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701), [PowerShell](https://terminalroot.com /tags#powershell), [Ubuntu Terminal](https://terminalroot.com/tags#terminal),... run the command:

{% highlight bash %}
flixel tpl -n "HelloWorld"
{% endhighlight %}
> This will create a folder named **HelloWorld** with all the files needed for your project.

Inside the *HelloWorld* folder in your project there will be a subfolder called `source` and in it a file: `PlayState.hx`, open this file with your preferred [code editor]();
> Remembering that there are extensions for Haxe in [VS Code](https://terminalroot.com/tags#vscode), [Vim](https://terminalroot.com/tags#vim), [Neovim](https://terminalroot.com/tags#neovim) and among many others, including for the IDE [Visual Studio](https://marketplace.visualstudio.com/items?itemName=nadako.vshaxe).

Insert this code to the file

{% highlight hash %}
package;

import flixel.FlxState;

class PlayState extends FlxState {
   override public function create() {
     super.create();

     var text = new flixel.text.FlxText(0, 0, 0, "Hello World", 64);
     text.screenCenter();
     add(text);
   }

   override public function update(elapsed:Float) {
     super.update(elapsed);
   }
}
{% endhighlight %}

Now in the terminal, run:
{% highlight bash %}
lime test html5
{% endhighlight %}

The likely result will be similar to the image below:

![HaxeFlixel HelloWorld](https://haxeflixel.com/documentation/images/00_getting_started/hello-world.png)

See demos running in the browser: <https://haxeflixel.com/demos/>.

For more information see the links below:
+ <https://haxeflixel.com/>
+ <https://haxe.org/>
