---
layout: post
title: "How to Create Graphical Interfaces with Dear ImGui and SFML"
date: 2022-05-18 08:43:43
image: '/assets/img/cppdaily/imgui.jpg'
description: 'Basic C++ Tutorial with Dear ImGui and SFML'
tags:
- cpp
- cppdaily
- gamedev
- sfml
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[Dear ImGui](https://github.com/ocornut/imgui) is a framework to create Graphical Interfaces right away, with as little processing as possible!

In this article we will see how to implement it in a basic project with [SFML](https://github.com/eliasdaler/imgui-sfml) .

---

# 01. Clone the library: Dear ImGui and install it on your system

{% highlight sh %}
git clone https://github.com/ocornut/imgui
{% endhighlight %}

---

# 02. Clone the library: ImGui-SFML

{% highlight sh %}
git clone https://github.com/eliasdaler/imgui-sfml
{% endhighlight %}

---

# 03. Create a directory and a subdirectory for your project

{% highlight sh %}
mkdir basic-sfml-imgui
cd basic-sfml-imgui
mkdir include
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

# 04. Copy the essential ImGui files to your project's `include/` subdirectory

{% highlight sh %}
cd ../imgui
cp imconfig.h \
imgui.cpp \
imgui.h \
imgui_demo.cpp \
imgui_draw.cpp \
imgui_internal.h \
imgui_tables.cpp \
imgui_widgets.cpp \
imstb_rectpack.h \
imstb_textedit.h \
imstb_truetype.h \
../basic-sfml-imgui/include
{% endhighlight %}

---

# 05. Copy the essential ImGui-SFML files to the `include/` subdirectory of your project

{% highlight sh %}
cd ../imgui-sfml/
cp imconfig-SFML.h \
imgui-SFML.cpp \
imgui-SFML.h \
imgui-SFML_export.h \
../basic-sfml-imgui/include/
{% endhighlight %}

---

# 06. Change the header line

Enter your project directory `cd ../basic-sfml-imgui` Open the file `./include/imgui-SFML.cpp`

and replace that line `#include <imgui.h>` so `#include "imgui.h"` .

---

# 07. Now create a `main.cpp` file with basic SFML code with a circle

{% highlight cpp %}
#include "include/imgui.h"
#include "include/imgui-SFML.h"

#include <SFML/Graphics/CircleShape.hpp>
#include <SFML/Graphics/RenderWindow.hpp>
#include <SFML/System/Clock.hpp>
#include <SFML/Window/Event.hpp>

int main() {
    sf::RenderWindow window(sf::VideoMode(640, 480), "ImGui + SFML = <3");
    window.setFramerateLimit(60);
    ImGui::SFML::Init(window);

    sf::CircleShape shape(100.f);
    shape.setFillColor(sf::Color::Green);

    sf::Clock deltaClock;
    while (window.isOpen()) {
        sf::Event event;
        while (window.pollEvent(event)) {
            ImGui::SFML::ProcessEvent(window, event);

            if (event.type == sf::Event::Closed) {
                window.close();
            }
        }

        ImGui::SFML::Update(window, deltaClock.restart());

        ImGui::Begin("Hello, world!");
        ImGui::Button("Look at this pretty button");
        ImGui::End();

        window.clear();
        window.draw(shape);
        ImGui::SFML::Render(window);
        window.display();
    }

    ImGui::SFML::Shutdown();
}
{% endhighlight %}


<!-- MINI ADS -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# 08. Now compile

{% highlight sh %}
g++ -std=c++11 main.cpp include/*.cpp -lsfml-graphics -lsfml-window -lsfml-system -lGL
{% endhighlight %}

---

# Watch the video
If you want to see another example by video, Watch the video below.

> Note: The video is in Brazilian Portuguese, however, it is possible to notice all the steps regardless of the language, as the code is universal. If you still want to use Youtube's automatic translation.

<iframe width="1100" height="490" src="https://www.youtube.com/embed/XmiEkoqodcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Source code: <https://github.com/terroo/particle-system>


