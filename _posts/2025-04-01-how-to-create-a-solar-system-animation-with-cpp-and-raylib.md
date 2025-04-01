---
layout: post
title: "How to Create a Solar System Animation with C++ and Raylib"
date: 2025-04-01 19:07:15
image: '/assets/img/raylib/solar-system-raylib.jpg'
description: "🚀 With DEPLOY ON THE WEB!"
tags:
- cpp
- raylib
- gamedev
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In this video we made an animation with [C++](https://terminalroot.com/tags#cpp) and [Raylib](https://terminalroot.com/tags#raylib) similar to [this one](https://terminalroot.com/solar-system-made-with-html-css-and-pure-javascript/) that we showed a while ago.

At the end we made the [DEPLOY on the WEB](https://terminalroot.com/web/solarsystem).

---

## Watch the Video

<iframe width="1303" height="733" src="https://www.youtube.com/embed/ECBmzjOmLgA" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Codes created in the video


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

<details>
 <summary><h3>solarsystem.hpp</h3></summary>

{% highlight cpp %}
#pragma once

#include "raylib.h"
#include <memory>
#include <vector>
#include <cmath>

class SolarSystem {
  const float sun_size = 60.f;
  Vector2 window, center;

  std::vector<float> planet_radius, planet_sizes, 
    planet_velocities, planet_angle;
  std::vector<Color> colors;

  const float moon_size = 5, moon_radius = 30, 
        moon_velocity = 10;
  float moon_angle;
  int earth_pos;

  bool fullscreen;

  public:
    SolarSystem();
    void run();
};
{% endhighlight %}

</details>



<details>
 <summary><h3>solarsystem.cpp</h3></summary>

{% highlight cpp %}
#include "solarsystem.hpp"

SolarSystem::SolarSystem(){
  window = {1920, 1080};
  InitWindow(window.x, window.y, "Solar System");
  SetTargetFPS(60);
  center = {GetScreenWidth() / 2.f, GetScreenHeight() / 2.f};

  planet_radius = {80, 110, 165, 225, 310, 430, 515, 565};
  planet_velocities = {1.607f, 1.174f, 1.f, 0.802f, 0.434f, 0.323f, 0.228f, 0.182f};
  planet_sizes = {10, 15, 20, 18, 60, 55, 25, 22};
  colors = {
    {115, 147, 179, 255},
    {255, 87, 51, 255},
    {30, 144, 255, 255}, 
    {178, 34, 34, 255},
    {210, 105, 30, 255},
    {220, 20, 60, 255},
    {72, 209, 204, 255}, 
    {65, 105, 225, 255}
  };
  planet_angle.assign(8, 0);

  moon_angle = {0};
  for(size_t i = 0; i < planet_sizes.size();++i){
    if(planet_sizes[i] == 20){
      earth_pos = i;
    }
  }

  fullscreen = {false};
}

void SolarSystem::run(){
  while (!WindowShouldClose()){

    if(IsKeyPressed(KEY_F11)){
      fullscreen = !fullscreen;
      if(fullscreen){
        int monitor = GetCurrentMonitor();
        SetWindowSize(GetMonitorWidth(monitor), GetMonitorHeight(monitor));
        ToggleFullscreen();
      }else{
        ToggleFullscreen();
        SetWindowSize(window.x, window.y);
      }
    }

    for(size_t i = 0; i < planet_radius.size(); ++i){
      planet_angle[i] += planet_velocities[i] * 0.02f;
    }
    moon_angle += moon_velocity * 0.009f;

    BeginDrawing();
    ClearBackground(BLACK);
    DrawCircleV(center, sun_size, YELLOW);

    for(size_t i = 0; i < planet_radius.size(); ++i){
      DrawRing(center, planet_radius[i] - 1, planet_radius[i] + 1, 0, 360, 100, Color{60, 60, 60, 255});

      Vector2 planet_pos = {
        center.x + std::cos(planet_angle[i]) * planet_radius[i],
        center.y + std::sin(planet_angle[i]) * planet_radius[i]
      };
      DrawCircleV(planet_pos, planet_sizes[i], colors[i]);

      if((int)i == earth_pos){
        DrawRing(planet_pos, moon_radius - 1, moon_radius + 1, 0, 360, 100, Color{60, 60, 60, 255});
        Vector2 moon_pos = {
          planet_pos.x + std::cos(moon_angle) * moon_radius,
          planet_pos.y + std::sin(moon_angle) * moon_radius,
        };
        DrawCircleV(moon_pos, moon_size, WHITE);
      }
    }

    EndDrawing();
  }
  CloseWindow();
}
{% endhighlight %}

</details>

<details>
 <summary><h3>main.cpp</h3></summary>

{% highlight cpp %}
#include "solarsystem.hpp"

int main(){
  auto obj = std::make_unique<SolarSystem>();
  obj->run();
  return 0;
}
{% endhighlight %}

</details>

<details>
 <summary><h3><a href="https://github.com/terroo/terlang">build.ter</a></h3></summary>

{% highlight cpp %}
auto flags = "-g -Wall -Werror -Wpedantic -fsanitize=address"
flags = "-O3 -ffast-math"

auto build = "g++ " + flags + " *.cpp -lraylib -lGL -lm -lpthread -ldl -lrt -lX11"
output(build)

exec(build)
exec("./a.out >/dev/null")
{% endhighlight %}

</details>



