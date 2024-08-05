---
layout: post
title: "Animation Battle: C++ vs JavaScript"
date: 2024-08-04 11:25:28
image: '/assets/img/cpp/battle-cpp-js-blue.jpg'
description: "⚡ In this video we created an animation that can serve as a prototype for a game introduction."
tags:
- cpp
- javascript
- html
- css
- sfml
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In this video we created an animation that can serve as a prototype for a game introduction. The most interesting thing is that we tried to show equivalent code between [C++](https://terminalroot.com/tags#cpp) and [JavaScript](https://terminalroot.com/tags#javascript).

The video has no speech, just background music, sound effects and step-by-step code in both programming languages.

---

## ▶️  Watch the video

<!-- SQUARE - GAMES ROOT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

<iframe width="1221" height="687" src="https://www.youtube.com/embed/8RHAsIP51R8" title="Batalha da Animação: C++ vs JavaScript" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 💻 C++ code created in the video:

<details>
 <summary><code>animation.hpp</code></summary>

{% highlight cpp %}
#pragma once

#include <SFML/Graphics.hpp>
#include <cmath>
#include <memory>

class Animation {
  std::unique_ptr<sf::RenderWindow> window;
  public:
    Animation();
    static constexpr int numpoints = 200;
    struct Point {
      sf::CircleShape shape;
      float phase;
    };

    sf::VertexArray gradient;
    std::vector<Point> points;
    float time;
    sf::Clock clock;
    sf::Text h1, h2;
    sf::Font font;

    void background();
    void update_points();

    void events();
    void draw();
    void run();
};
{% endhighlight %}

</details>


<details>
 <summary><code>animation.cpp</code></summary>

{% highlight cpp %}
#include "animation.hpp"

Animation::Animation(){
  window = std::make_unique<sf::RenderWindow>(
    sf::VideoMode(1280,720),
    "Animation :: C++ vs JS",
    sf::Style::Titlebar | sf::Style::Close
  );

  background();
  time = 0.f;
  points.resize(numpoints);
  for (size_t i {}; i < numpoints; ++i){
    points[i].shape = sf::CircleShape(3);
    points[i].phase = i * 0.3;
  }

  font.loadFromFile("./font.ttf");
  h1.setFont(font);
  h2 = h1;
  h1.setString("Start Game");
  h1.setCharacterSize(30);
  h1.setPosition(window->getSize().x / 2.f - 150.f, window->getSize().y / 2.f);
  h2.setString("Play");
  h2.setCharacterSize(18);
  h2.setPosition(window->getSize().x / 2.f - 50.f, window->getSize().y / 2.f + 50.f);
}

void Animation::background(){
  gradient.setPrimitiveType(sf::TriangleFan);
  gradient.append(
    sf::Vertex(
      sf::Vector2f(
        window->getSize().x / 2.f,
        window->getSize().y / 2.f),
        sf::Color(63,94,251)
    )
  );

  for (int angle {}; angle <= 360; angle +=  5){
    float rad = angle * 3.14159f / 180.f;
    float x = window->getSize().x / 2.f + cos(rad) * window->getSize().x;
    float y = window->getSize().y / 2.f + sin(rad) * window->getSize().y;
    gradient.append(sf::Vertex(sf::Vector2f(x,y), sf::Color(252,70,107)));
  }
}

void Animation::events(){
  sf::Event event;
  while(window->pollEvent(event)){
    if(event.type == sf::Event::Closed){
      window->close();
    }
  }
}

void Animation::run(){
  while(window->isOpen()){
    events();
    time = clock.getElapsedTime().asSeconds() * 2.3f;
    draw();
  }
}

void Animation::draw(){
  window->clear();
  window->draw(gradient);
  update_points();
  for(const auto &var : points){
    window->draw(var.shape);
    
  }
  window->draw(h1);
  window->draw(h2);
  window->display();
}

void Animation::update_points(){
  for (int i {}; i < numpoints; ++i){
    float x = std::sin(time + i * 0.3f) * 200 + window->getSize().x / 2.f;
    float y = std::cos(time + i * 0.5f) * 200 + window->getSize().y / 2.f;
    points[i].shape.setPosition(x, y);
    float alpha = std::sin(i * 0.1f) * 0.5f + 0.5f;
    points[i].shape.setFillColor(sf::Color(255, 255, 255, static_cast<sf::Uint8>(alpha * 255)));
  }
}
{% endhighlight %}

</details>


<details>
 <summary><code>main.cpp</code></summary>

{% highlight cpp %}
#include "animation.hpp"

int main(){
  auto anime = std::make_unique<Animation>();
  anime->run();
  return EXIT_SUCCESS;
}
{% endhighlight %}

</details>

<a href="https://terminalroot.com/downloads/font.ttf.zip" class="btn btn-danger btn-lg" download>Click here to download the source used</a>


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

Compile and run:
{% highlight bash %}
g++ main.cpp animation.cpp -lsfml-graphics -lsfml-window -lsfml-system
./a.out
{% endhighlight %}

---

## 💻 [JavaScript](https://terminalroot.com.br/tags#javascript) code

<details>
 <summary><code>index.html</code></summary>

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animation :: C++ vs JS</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="background"></div>
  <div class="content">
    <h1>Start Game</h1>
    <h2>Play</h2>
  </div>
  <script src="./main.js"></script>
</body>
</html>
{% endhighlight %}

</details>


<details>
 <summary><code>style.css</code></summary>

{% highlight css %}
@font-face {
  font-family: 'Font';
  src: url('./font.ttf');
}

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  font-family: 'Font';
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
  z-index: -1;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}
{% endhighlight %}

</details>


<details>
 <summary><code>main.js</code></summary>

{% highlight js %}
class Animation{
  constructor(){
    this.canvas = document.createElement('canvas')
    document.body.appendChild(this.canvas)
    this.ctx = this.canvas.getContext('2d')

    this.resizeCanvas()
    window.addEventListener('resize', () => this.resizeCanvas())
  }

  resizeCanvas = () => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    const time = Date.now() * 0.002;
    for (let i = 0; i < 200; i++) {
      const x = Math.sin(time + i * 0.3) * 200 + this.canvas.width / 2
      const y = Math.cos(time + i * 0.5) * 200 + this.canvas.height / 2
      this.ctx.fillStyle = `rgba(255, 255, 255, ${Math.sin(i * 0.1) * 0.5 + 0.5})`
      this.ctx.beginPath()
      this.ctx.arc(x, y, 3, 0, Math.PI * 2)
      this.ctx.fill()
    }
    requestAnimationFrame(this.animate)
  }
}

const anime = new Animation()
anime.animate()
{% endhighlight %}

</details>

Abra no navegador:
{% highlight bash %}
xdg-open index.html
{% endhighlight %}


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
