---
layout: post
title: "Create 2D Games with PHP and Raylib"
date: 2023-10-26 08:31:16
image: '/assets/img/php/php-raylib.jpg'
description: 'For GameDev lovers who also love PHP!'
tags:
- raylib
- gamedev
- php
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

For those who enjoy [Game Development](https://terminalroot.com/tags#gamedev) and already know [PHP](https://terminalroot.com/php) and also want to combine these two passions in one.

[RayLib](https://terminalroot.com/2022/11/crie-jogos-para-windows-linux-e-web-com-raylib-c-cpp.html) is very useful to guarantee your *employment *.

Let's see the step by step process to achieve this goal!

---

# 01. Dependencies
> Example in Ubuntu 23.10

{% highlight bash %}
sudo apt update
sudo apt install libasound2-dev mesa-common-dev libx11-dev build-essential \
                  libxrandr-dev libxi-dev xorg-dev libgl1-mesa-dev pkg-config \
                  libglu1-mesa-dev php-cli php-dev git make gcc g++ cmake
{% endhighlight %}
> For other systems: [Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos) and other [distros](https: //terminalroot.com/tags#distros) see [this link](https://github.com/raysan5/raylib#build-and-installation) the procedure.

---

# 02. Install Raylib

Clone the repository and enter it:
{% highlight bash %}
git clone https://github.com/raysan5/raylib
cd raylib
cmake -DBUILD_SHARED_LIBS=ON . -B build
cd build
makeup
sudo make install
{% endhighlight %}

<details>
  <summary>See the paths where the files are installed</summary>

{% highlight bash %}
Install the project...
-- Install configuration: "Debug"
-- Installing: /usr/local/lib/libraylib.so.4.5.0
-- Installing: /usr/local/lib/libraylib.so.450
-- Installing: /usr/local/lib/libraylib.so
-- Installing: /usr/local/include/raylib.h
-- Installing: /usr/local/include/rlgl.h
-- Installing: /usr/local/include/raymath.h
-- Installing: /usr/local/lib/pkgconfig/raylib.pc
-- Installing: /usr/local/lib/cmake/raylib/raylib-config-version.cmake
-- Installing: /usr/local/lib/cmake/raylib/raylib-config.cmake
{% endhighlight %}

</details>

Clean the files:
{% highlight bash %}
CD ../..
rm -rf raylib
{% endhighlight %}

> OPTIONAL: **IF YOU HAVE AN ERROR WHEN COMPILING, CREATE THIS FILE**.
{% highlight bash %}
sudo vim /usr/lib64/pkgconfig/raylib.pc
{% endhighlight %}

And paste this inside and then save:
{% highlight bash %}
prefix=/usr
exec_prefix=${prefix}
libdir=/usr/lib64
includedir=${prefix}/include

Name: raylib
Description: A simple and easy-to-use library to enjoy video games programming
URL: https://github.com/raysan5/raylib
Version: 4.5.0
Libs: -L"${libdir}" -lraylib -lGL -lm -lpthread -ldl -lrt -lX11
Libs.private: -lGL -lm -lpthread -ldl -lrt -lX11
Cflags: -I"${includedir}" -I/usr/local/include
{% endhighlight %}
> File based on: [raylib.pc.in](https://github.com/raysan5/raylib/blob/master/raylib.pc.in).

---

#03. Install Raylib-PHP

{% highlight bash %}
git clone https://github.com/joseph-montanez/raylib-php
cd raylib-php/
{% endhighlight %}

> I detected a *BUG* in the current version and to resolve this I changed the *commit*. If you want to skip this step and want to try with the current version, make sure that if it doesn't work you will have to remove this cloned repository and then clone it again and then do this step of changing the *commit*.

Change *commit*:
{% highlight bash %}
git checkout 2968648
{% endhighlight %}
> This *commit* refers to the line: `Initial Support for RayLib 4.0 Fonts need testing`, if you want to see it run: `git log --oneline`.

Prepare the extension, run [CMake](https://terminalroot.com/tags#cmake), enter `build`, build and install:
{% highlight bash %}
phpize # Prepare the extension
./configure
makeup
sudo make install
{% endhighlight %}

Clean up used files:
{% highlight bash %}
CD ..
rm -rf raylib-php
{% endhighlight %}

---

#04. Testing RayLib with PHP
Create a test file, example: `vim main.php`.

Add the code below that only prints a sentence in the window that will open:
{% highlight php %}
<?php
use raylib\Color;
use raylib\Draw;
use raylib\Text;
use raylib\Timming;
use raylib\Window;

$screenWidth = 800;
$screenHeight = 450;
$lightGray = new Color(245, 245, 245, 255);
$gray = new Color(200, 200, 200, 255);
$black = new Color(0, 0, 0, 255);

Window::init($screenWidth, $screenHeight, "raylib PHP basic window");

Timming::setTargetFps(60);

while (!Window::shouldClose()){
     Draw::begin();
     Draw::clearBackground($lightGray);
     Text::draw("RayLib with PHP uhuulll", 190, 200, 20, $black);
     Draw::end();
}

Window::close();
{% endhighlight %}

To run use the command:
{% highlight bash %}
php -dextension=raylib.so main.php
{% endhighlight %}

To learn **Raylib** and **PHP** see the links:
+ <https://www.raylib.com/>
+ <https://php.net/>
+ <https://terminalroot.com/create-games-for-windows-linux-and-web-with-raylib-c-cpp/>

