---
layout: post
title: "How to Use Tmxlite for Game Maps (Windows and Linux)"
date: 2025-05-29 09:56:37
image: '/assets/img/gamedev/tmxlite/tmxlite-map.png'
description: "🎮 In this example we show usage on Windows and GNU/Linux with Tiled and SFML, but it also works with SDL, OpenGL, or any other."
tags:
- gamedev
- sfml
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

We've already made [a video](https://terminalroot.com/how-to-parser-tmx-with-cpp-to-tilemap/) showing how to render [maps](https://terminalroot.com/discover-10-options-for-map-editors/) for games made with [C++](https://terminalroot.com/tags#cpp). However, that [example](https://github.com/terroo/loadtmx) used [TinyXML2](https://terminalroot.com/how-to-parser-xml-with-tinyxml2-cpp/). There's a better alternative: **tmxlite**.

[tmxlite](https://github.com/fallahn/tmxlite) is a lightweight [C++](https://terminalroot.com.br/cpp) library used to load and read **TMX** map files (the format used by the [Tiled](https://terminalroot.com/how-to-parser-tmx-with-cpp-to-tilemap/) map editor).

### Features:
* Focus on **efficient reading** of TMX maps.
* Does not handle rendering: it only **loads and interprets `.tmx` data** (such as tiles, layers, objects, etc.).
* Supports:
  * [Tile](https://terminalroot.com/free-download-of-5-tileset-for-your-games/) layers (grid or chunk-based)
  * Object layers (rectangles, polygons, etc.)
  * Custom properties
  * Maps encoded in [XML](https://terminalroot.com/how-to-parse-xml-with-expat-in-c-cpp/), [CSV](https://terminalroot.com/how-to-parse-csv-with-modern-cpp/), and [Base64](https://terminalroot.com/how-to-create-a-simple-encoder-and-decoder-with-cpp-the-right-way/)

If you want to load `.tmx` maps into your C++ game (e.g. with SFML, SDL, OpenGL), **tmxlite** provides the structure to **read the data**, and you handle rendering and logic.

Next, we’ll see how to **install**, **build**, and **run** `tmxlite` on [Windows](https://terminalroot.com/tags#windows) and [Ubuntu](https://terminalroot.com/tags#ubuntu) (or any [GNU](https://terminalroot.com/tags#gnu)/[Linux](https://terminalroot.com/tags#gnulinux) distro).


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

## Installation
### On Windows
First, install the following dependencies:

**Windows Dependencies**:
* [Git](https://terminalroot.com/tags#git)
* [GCC MinGW](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/)
* [Meson](https://winstall.app/apps/mesonbuild.meson)
* [Ninja](https://winstall.app/apps/Ninja-build.Ninja)
* Optional: [Clang](https://terminalroot.com/how-to-install-clang-on-windows-with-a-single-command/), as the **tmxlite** build might search for it.

> Restart the [terminal](https://terminalroot.com/tags#terminal) (PowerShell) after installing dependencies.

To install **tmxlite**, run the commands below one by one or save them in a PowerShell script:

> `InstallTmxlite.ps1`

{% highlight bash %}
git clone https://github.com/fallahn/tmxlite
cd .\tmxlite
meson setup build
meson compile -C build
meson install -C build --destdir "C:\tmxlite"
Copy-Item -Path '.\tmxlite\tmxlite\include' -Destination 'C:\tmxlite' -Recurse
{% endhighlight %}

> To run the script: use PowerShell with `powershell InstallTmxlite.ps1` or `pwsh InstallTmxlite.ps1`.

> **Once tmxlite is installed, you can delete the cloned repo!**

Since we’ll test it with [SFML](https://terminalroot.com.br/sfml) and compile with [GCC MinGW](https://terminalroot.com/how-to-compile-your-games-in-sfml-with-gcc-mingw-on-windows/), you’ll need the [SFML](https://terminalroot.com/tags#sfml) version for [GCC](https://terminalroot.com/tags#gcc):

* **Download** [`SFML-2.5.1-windows-gcc-7.3.0-mingw-64-bit.zip`](https://www.sfml-dev.org/files/SFML-2.5.1-windows-gcc-7.3.0-mingw-64-bit.zip)
* **Extract** it
* **Move** the folder to `C:\SFML-2.5.1-GCC` (add `-GCC` to differentiate from the VS version)

**Preparing your project**:
* Create folder: `New-Item -ItemType Directory -Path 'MyProject'`
* Download `assets/` from [https://terminalroot.com/downloads/assets.zip](https://terminalroot.com/downloads/assets.zip) and extract it (**Extract here**)

{% highlight powershell %}
Invoke-WebRequest -Uri "https://terminalroot.com/downloads/assets.zip" -OutFile "assets.zip"
{% endhighlight %}

If your extractor created a subfolder, move it so that `assets/` is at the root:

{% highlight bash %}
./assets/
├── box.jpg
├── floor.jpg
└── map.tmx

0 directories, 3 files
{% endhighlight %}

All set. We'll show how to compile your files later. Now let's move on to the Ubuntu setup.

---

### On Ubuntu
The process is similar, but you can install dependencies using APT:

{% highlight bash %}
sudo apt meson ninja-build build-essential git clang libsfml-dev curl
{% endhighlight %}
> Note: SFML must be version 2.x, not 3.x.

To check your SFML version:

{% highlight bash %}
apt list --installed | grep libsfml
grep -R "SFML_VERSION" /usr/include/SFML/
{% endhighlight %}

Now just clone, compile and install **tmxlite**:
{% highlight bash %}
git clone https://github.com/fallahn/tmxlite
cd tmxlite/
meson setup build
meson compile -C build
sudo meson install -C build
{% endhighlight %}

<details>
 <summary>Installation paths ↓</summary>

{% highlight bash %}
Dropping privileges to "$USER" before running ninja...
ninja: Entering directory `./tmxlite/build'
ninja: no work to do.
Installing tmxlite/src/libtmxlite.so to /usr/local/lib/x86_64-linux-gnu
{% endhighlight %}

</details>

Then copy the includes (there’s another `tmxlite` folder inside):

{% highlight bash %}
sudo cp -r tmxlite/include/tmxlite /usr/local/include/
sudo ldconfig # Otional
{% endhighlight %}

To check the installed tmxlite version:

{% highlight bash %}
curl \
  https://raw.githubusercontent.com/fallahn/tmxlite/refs/heads/master/meson.build \
  2>/dev/null | \
  grep ' version:'
{% endhighlight %}

Also create your project with: `mkdir MyProject`, download `assets/` from [https://terminalroot.com/downloads/assets.zip](https://terminalroot.com/downloads/assets.zip) and extract (**Extract here**). Make sure it looks like this (no subfolder):

{% highlight bash %}
./assets/
├── box.jpg
├── floor.jpg
└── map.tmx

0 directories, 3 files
{% endhighlight %}

Let’s now dive into the **tmxlite** tutorial!


<!-- RECTANGLE LARGE -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## How to Use tmxlite
Inside your `MyProject` (on both Windows and GNU/Linux), create a `main.cpp` file with basic SFML setup:
> For more details, check out our course: [https://terminalroot.com.br/sfml](https://terminalroot.com.br/sfml)

{% highlight cpp %}
#include <SFML/Graphics.hpp>
#include <iostream>

int main(){
  sf::RenderWindow window(sf::VideoMode(1280,720), "SFML::Tmxlite"); 

  while(window.isOpen()){
    sf::Event event;
    while(window.pollEvent(event)){
      if(event.type == sf::Event::Closed){
        window.close();
      }
    }

    window.clear();
    window.display();
  }

  return EXIT_SUCCESS;
}
{% endhighlight %}

Now let's add **tmxlite** code.

### 01. Include tmxlite headers:

{% highlight cpp %}
#include <tmxlite/Map.hpp>
#include <tmxlite/Layer.hpp>
#include <tmxlite/TileLayer.hpp>
#include <tmxlite/ObjectGroup.hpp>
{% endhighlight %}

### 02. Create the map object and load `./assets/map.tmx`
> Place it just below `RenderWindow`.

This `map.tmx` was created with [Tiled Map Editor](https://terminalroot.com/how-to-parser-tmx-with-cpp-to-tilemap/)

{% highlight cpp %}
tmx::Map map;
if(!map.load("./assets/map.tmx")){
  std::cerr << "Falha ao carregar o mapa TMX.\n";
  return -1;
}
{% endhighlight %}

Tiled Map creation screenshots:

![Tiled Map 02](/assets/img/gamedev/tmxlite/02-tiled-for-tmxlite.png)
> Creating a simple map

### 03. Get map width and height into constants:

{% highlight cpp %}
const float map_width = static_cast<float>(map.getTileCount().x * map.getTileSize().x);
const float map_height = static_cast<float>(map.getTileCount().y * map.getTileSize().y);
{% endhighlight %}

### 04. Create a vector of `tmx::Layer` that can hold:
> `Layer::Type::Tile`, `Layer::Type::Object`, `Layer::Type::Image`, or `Layer::Type::Group`

{% highlight cpp %}
const auto& layers = map.getLayers();
{% endhighlight %}

### 05. Load separate images as textures and create a `Sprite`:

{% highlight cpp %}
sf::Texture floor_tex, box_tex;
if(!floor_tex.loadFromFile("./assets/floor.jpg") || !box_tex.loadFromFile("./assets/box.jpg")){
  std::cerr << "Falha ao carregar imagens dos tiles.\n";
  return -1;
}

sf::Sprite tile_sprite;
{% endhighlight %}

### 06. Draw *tiles* from each *Tile* layer
Replace `window.clear()` with:

{% highlight cpp %}
window.clear(sf::Color(138, 138, 138));

for (const auto& layer : layers) {
  if (layer->getType() == tmx::Layer::Type::Tile) {
    auto* tile_layer = dynamic_cast<const tmx::TileLayer*>(layer.get());
    const auto& tiles = tile_layer->getTiles();
    const auto layer_size = tile_layer->getSize();
    const auto tile_size = map.getTileSize();

    for (std::size_t y = 0; y < layer_size.y; ++y) {
      for (std::size_t x = 0; x < layer_size.x; ++x) {
        std::size_t index = x + y * layer_size.x;
        std::uint32_t tile_id = tiles[index].ID;

        if (tile_id == 0){ 
          continue; 
        }

        if(tile_id == 1){ 
          tile_sprite.setTexture(box_tex); 
        }else if(tile_id == 2){ 
          tile_sprite.setTexture(floor_tex);
        }else{
          continue;
        }

        tile_sprite.setPosition(static_cast<float>(x * tile_size.x), static_cast<float>(y * tile_size.y));
        window.draw(tile_sprite);
      }
    }
  }
}
{% endhighlight %}

That’s it — the most basic **tmxlite** setup. Full version:

<details>
 <summary><code>main.cpp</code></summary>

{% highlight cpp %}
#include <SFML/Graphics.hpp>
#include <iostream>
#include <tmxlite/Map.hpp>
#include <tmxlite/Layer.hpp>
#include <tmxlite/TileLayer.hpp>
#include <tmxlite/ObjectGroup.hpp>

int main(){
  sf::RenderWindow window(sf::VideoMode(1280,720), "SFML::Tmxlite"); 

  tmx::Map map;
  if(!map.load("./assets/map.tmx")){
    std::cerr << "Falha ao carregar o mapa TMX.\n";
    return -1;
  }

  const float map_width = static_cast<float>(map.getTileCount().x * map.getTileSize().x);
  const float map_height = static_cast<float>(map.getTileCount().y * map.getTileSize().y);

  const auto& layers = map.getLayers();

  sf::Texture floor_tex, box_tex;
  if(!floor_tex.loadFromFile("./assets/floor.jpg") || !box_tex.loadFromFile("./assets/box.jpg")){
    std::cerr << "Falha ao carregar imagens dos tiles.\n";
    return -1;
  }

  sf::Sprite tile_sprite;

  while(window.isOpen()){
    sf::Event event;
    while(window.pollEvent(event)){
      if(event.type == sf::Event::Closed){
        window.close();
      }
    }

    window.clear(sf::Color(138, 138, 138));

    for (const auto& layer : layers) {
      if (layer->getType() == tmx::Layer::Type::Tile) {
        auto* tile_layer = dynamic_cast<const tmx::TileLayer*>(layer.get());
        const auto& tiles = tile_layer->getTiles();
        const auto layer_size = tile_layer->getSize();
        const auto tile_size = map.getTileSize();

        for (std::size_t y = 0; y < layer_size.y; ++y) {
          for (std::size_t x = 0; x < layer_size.x; ++x) {
            std::size_t index = x + y * layer_size.x;
            std::uint32_t tile_id = tiles[index].ID;

            if (tile_id == 0){ 
              continue; 
            }

            if(tile_id == 1){ 
              tile_sprite.setTexture(box_tex); 
            }else if(tile_id == 2){ 
              tile_sprite.setTexture(floor_tex);
            }else{
              continue;
            }

            tile_sprite.setPosition(static_cast<float>(x * tile_size.x), static_cast<float>(y * tile_size.y));
            window.draw(tile_sprite);
          }
        }
      }
    }

    window.display();
  }

  return EXIT_SUCCESS;
}
{% endhighlight %}

</details>

Now let's build and run on Windows and Linux.


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

## Build and Run
### On Windows
Create a PowerShell script: `build.ps1` and paste the following:

> This script copies `.dll`s, links the `lib`, and includes `include` directories from SFML and tmxlite.

{% highlight powershell %}
if ($args[0] -eq "--prepare") {
    Write-Output "Running preparation..."
    Copy-Item -Path "C:\SFML-2.5.1-GCC\bin\*.dll" -Destination .
    Copy-Item -Path "C:\tmxlite\bin\*.dll" -Destination .
    g++ .\main.cpp -I C:\SFML-2.5.1-GCC\include\ -L C:\SFML-2.5.1-GCC\lib\ -I C:\tmxlite\include -L C:\tmxlite\lib -lsfml-main -lsfml-graphics -lsfml-system -lsfml-window -ltmxlite
    .\a.exe
} else {
    if (Test-Path ".\libtmxlite.dll") {
        Write-Output "Compiling..."
    g++ .\main.cpp -I C:\SFML-2.5.1-GCC\include\ -L C:\SFML-2.5.1-GCC\lib\ -I C:\tmxlite\include -L C:\tmxlite\lib -lsfml-main -lsfml-graphics -lsfml-system -lsfml-window -ltmxlite
    .\a.exe
    } else {
        Write-Output ""
        Write-Output "Use: pwsh build.ps1 --prepare"
        Write-Output ""
    }    
}
{% endhighlight %}

You need to run with `--prepare` first (to copy files), then compile:

PowerShell example:

{% highlight powershell %}
pwsh build.ps1 --prepare
{% endhighlight %}

Windows PowerShell example:

{% highlight powershell %}
powershell build.ps1 --prepare
{% endhighlight %}

If Windows Defender blocks execution:

{% highlight powershell %}
# Windows PowerShell:
powershell -ExecutionPolicy Bypass -File build.ps1 --prepare

# PowerShell
pwsh -ExecutionPolicy Bypass -File build.ps1 --prepare
{% endhighlight %}

After building, it will auto-run. If not, run manually:

{% highlight powershell %}
.\a.exe
{% endhighlight %}

This window should appear:

![Running on Windows](/assets/img/gamedev/tmxlite/run-windows.jpg)

---

## On GNU/Linux Distros (Ubuntu)
Compile using required flags: `-lsfml-graphics -lsfml-window -lsfml-system -ltmxlite`:

{% highlight bash %}
g++ main.cpp -lsfml-graphics -lsfml-window -lsfml-system -ltmxlite
{% endhighlight %}

Then run the generated binary:

{% highlight bash %}
./a.out
{% endhighlight %}

It will display the same as on Windows:

![Running on Ubuntu](/assets/img/gamedev/tmxlite/run-ubuntu.png)

---

## Adding a Camera
Since the map is `3200×736` pixels and the window is `1280` wide, I created a camera so you can see the whole scene. You don't need to recompile after editing the map in Tiled.

To apply the camera patch:

+ **1**. Create a file `camera.patch` with this content:

{% highlight diff %}
29a30,40
>   sf::RectangleShape player(sf::Vector2f(64.f, 64.f));
>   player.setFillColor(sf::Color::Red);
> 
>   float player_x = 10.f;
>   float player_y = 512.f;
>   player.setPosition(player_x, player_y);
> 
>   float player_speed = 300.f;
>   sf::Clock clock;
> 
> 
37a49,67
>     float dt = clock.restart().asSeconds();
> 
>     if(sf::Keyboard::isKeyPressed(sf::Keyboard::Right)){
>       player_x += player_speed * dt;
>     }else if(sf::Keyboard::isKeyPressed(sf::Keyboard::Left)){
>       player_x -= player_speed * dt;
>     }
> 
>     if(player_x < 0.f) player_x = 0.f;
>     if(player_x > map_width - player.getSize().x) player_x = map_width - player.getSize().x;
> 
>     float view_offset_x = player_x + player.getSize().x / 2.f - window.getSize().x / 2.f;
> 
>     if(view_offset_x < 0.f) view_offset_x = 0.f;
>     if(view_offset_x > map_width - window.getSize().x)
>       view_offset_x = map_width - window.getSize().x;
> 
>     player.setPosition(player_x - view_offset_x, player_y);
> 
64c94,99
<             tile_sprite.setPosition(static_cast<float>(x * tile_size.x), static_cast<float>(y * tile_size.y));
---
>             float draw_x = static_cast<float>(x * tile_size.x) - view_offset_x;
>             float draw_y = static_cast<float>(y * tile_size.y);
> 
>             tile_sprite.setPosition(draw_x, draw_y);
> 
>             window.draw(player);
{% endhighlight %}

+ **2**. Apply it:

{% highlight bash %}
patch main.cpp camera.patch
{% endhighlight %}

On Windows, install the `patch` command via [Git Bash](https://git-scm.com/downloads)

After recompiling, it should look like this (red block simulates the **Player**):

<video src="/assets/img/gamedev/tmxlite/camera-800x450.webm" controls autoplay loop muted></video>

---

## Object-Oriented Version with [ECS](https://terminalroot.com/tags#ecs)
For [game development](https://terminalroot.com/tags#gamedev), **Object-Oriented Programming** and **ECS** are highly recommended. ECS may be optional for smaller projects, but OOP is always helpful.

You can organize your code however you like. I usually follow this [video structure](https://youtu.be/2JDzJoEscr0). For large projects, ECS is ideal.

I made an ECS version to show how **tmxlite** fits nicely in such structures.

ECS structure:

![ECS struct](/assets/img/gamedev/tmxlite/03-tiled-for-tmxlite.png)

> `System.hpp` is unused but provided if you want to implement it.

To test it, download the `.zip` from [https://terminalroot.com/downloads/ecs.zip](https://terminalroot.com/downloads/ecs.zip), extract it, build with [CMake](https://terminalroot.com/tags#cmake), and run.

Example:

{% highlight bash %}
wget -q https://terminalroot.com/downloads/ecs.zip
unzip ecs.zip -d ecs
cd ecs
cmake . -B build
cmake --build build
./build/ECS_Tilemap
{% endhighlight %}
> This version already includes the camera.

On Windows, [install CMake](https://terminalroot.com/how-to-install-cmake-on-windows/), set up [Clang](https://terminalroot.com/how-to-install-cmake-on-windows/), and build with `cmake -g "Unix Makefiles"` in the terminal, or omit the flag for MSVC builds.

---

This article is long because it's part of the documentation for a [game](https://terminalroot.com/tags#games) I'm developing. I had to redo [sprites](https://libresprite.github.io/#!/), [maps](https://terminalroot.com/discover-10-options-for-map-editors/)... It’s still just a draft, but here’s an early idea. Made entirely from scratch:

<iframe width="800" height="450" src="https://www.youtube.com/embed/huTTvdflpj4" title="RootDev :: Game (Development MODE) #cpp #sfml" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


