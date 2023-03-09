---
layout: post
title: "Create Web Games with SMK - An alternative to SFML"
date: 2023-03-09 18:13:23
image: '/assets/img/gamedev/smk.jpg'
description: 'Simple Multimedia Kit (SMK) is a library for developing games in C++.'
tags:
- gamedev
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Simple Multimedia Kit (SMK) is a library for [developing games](https://terminalroot.com/tags#gamedev) in [C++](https://terminalroot.com/tags#cpp).

Features:
+ Compatible with WebAssembly. One build for every platforms!
+ Fast & simple.
+ No dependencies: everything is fetched using cmake FetchContent.

---

# Installation
Example dependencies on [APT-based](https://terminalroot.com/tags#ubuntu) systems:
{% highlight bash %}
sudo apt install xorg-dev libgl1-mesa-dev libpulse-dev git
{% endhighlight %}

Now clone and run the commands:
{% highlight bash %}
git clone https://github.com/ArthurSonzogni/smk
cd smk
cmake -B build .
cd build
make
sudo make install
{% endhighlight %}

---

# Basic Example
> `main.cpp`

{% highlight cpp %}
#include <smk/Color.hpp>
#include <smk/Shape.hpp>
#include <smk/Window.hpp>

int main() {
  auto window = smk::Window(640, 480, "test");
  auto circle = smk::Shape::Circle(200);
  circle.SetColor(smk::Color::Red);
  circle.SetPosition(320,240);
  window.ExecuteMainLoop([&] { 
      window.PoolEvents();
      window.Clear(smk::Color::Black);
      window.Draw(circle);
      window.Display();
      window.LimitFrameRate(60 /* fps */);
      });
  return 0;
}
{% endhighlight %}

Create a `CMakeLists.txt` file and insert this content inside:
{% highlight cmake %}
cmake_minimum_required (VERSION 3.11)
 
include(FetchContent)
 
FetchContent_Declare(smk GIT_REPOSITORY https://github.com/ArthurSonzogni/smk.git)
FetchContent_GetProperties(smk)
if(NOT smk_POPULATED)
  FetchContent_Populate(smk)
  add_subdirectory(${smk_SOURCE_DIR} ${smk_BINARY_DIR} EXCLUDE_FROM_ALL)
endif()
 
project(Example
  LANGUAGES CXX
  VERSION 0.1.0
)
 
add_executable(main main.cpp)
target_link_libraries(main smk)
{% endhighlight %}

Compile for desktop:
{% highlight bash %}
cmake -B desktop .
cd desktop
make
./main
{% endhighlight %}

Compile for Web:
> You will need [Emscripten](https://terminalroot.com/how-to-transform-your-games-into-c-cpp-for-the-web-with-emscripten-sdl2/) installed!

{% highlight bash %}
emcmake cmake -B web .
cd web
make
{% endhighlight %}

Create an `index.html` file inside the web directory and insert this content inside:

{% highlight html %}
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  </head>
  <body>
    <center>
      <canvas id="canvas" oncontextmenu="event.preventDefault()"></canvas>
      <script type='text/javascript'>
        var Module = {
          canvas: (function() { return document.getElementById('canvas'); })()
        };
      </script>
      <script src="main.js"></script>
    </center>
  </body>
</html>
{% endhighlight %}

And now just run the command below and the example will be opened automatically in your default browser:
{% highlight bash %}
emrun index.html
{% endhighlight %}

---

For more examples, tips and documentation see the official repository on GitHub:
## <https://github.com/ArthurSonzogni/smk>

> If you want to see a video with more details, watch it below. The video is in Portuguese, however, it is possible to follow the procedures universally

<iframe width="1253" height="705" src="https://www.youtube.com/embed/R3tXigRpjCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---



