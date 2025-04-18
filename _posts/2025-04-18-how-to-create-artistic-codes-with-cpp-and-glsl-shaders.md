---
layout: post
title: "How to Create Artistic Codes with C++ and GLSL(Shaders)"
date: 2025-04-18 20:41:32
image: '/assets/img/opengl/shader-glsl-sfml-cpp.jpg'
description: "🚀 GLSL is a language for creating high-level shaders. It is based on C, so it has a very similar syntax."
tags:
- opengl
- cpp
- sfml
- glsl
- shaders
- animation
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**GLSL** is a language for creating high-level shaders. It is based on C, so it has a very similar syntax.

GLSL is the main shading language for OpenGL, and is widely used by programmers and artists, i.e., code for creating art and vice versa.

---

## ▶️ Watch the Video

<iframe width="1100" height="690" src="https://www.youtube.com/embed/OIdxsFEYAgY" title="Como Criar Códigos Artísticos com C++ e GLSL(Shaders)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


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

## 👀 Codes created in the Video
> `main.cpp`
{% highlight cpp %}
#include <SFML/Graphics.hpp>
#include <iostream>

int main(){
  sf::RenderWindow window(sf::VideoMode(1280,720), "SFML GLSL Shaders"); 

  sf::Shader shader;
  sf::Clock clock;
  sf::RectangleShape rect(
    sf::Vector2f(
      static_cast<float>(window.getSize().x),
      static_cast<float>(window.getSize().y)
    )
  );

  if(!shader.loadFromFile("shader.frag", sf::Shader::Fragment)){
    std::cerr << "Failed to load file.\n";
    return EXIT_FAILURE;
  }

  while( window.isOpen() ){
    sf::Event event;
    while( window.pollEvent(event)){
      if( event.type == sf::Event::Closed ){
        window.close();
      }
    }

    float time = clock.getElapsedTime().asSeconds();

    shader.setUniform("iTime", time);

    shader.setUniform("iResolution", sf::Glsl::Vec3(
      window.getSize().x, 
      window.getSize().y, 
      1.0
    ));

    window.clear();
    window.draw(rect, &shader);
    window.display();
  }

  return EXIT_SUCCESS;
}
// g++ main.cpp -lsfml-graphics -lsfml-window -lsfml-system
{% endhighlight %}


> `shader.frag`
{% highlight glsl %}
#version 150 core

uniform float iTime;
uniform vec3 iResolution;
out vec4 fragColor;

vec3 rand_colors(float f){
  vec3 a = vec3(0.5f, 0.5f, 0.5f);
  vec3 b = vec3(0.5f, 0.5f, 0.5f);
  vec3 c = vec3(1.0f, 1.0f, 1.0f);
  vec3 d = vec3(0.123f, 0.456f, 0.567f);

  return a + b * cos(6.5 * (c * f + d));
}

void main(){
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;

  for(int i = 0;  i < 4; ++i){
    uv = fract(uv);
    uv -= 0.5;

    float d = length(uv);

    vec3 color = rand_colors(d + iTime);

    d = sin(d * 8.f + iTime * 3.f) / 6.f;
    d = abs(d);
    //d -= 0.5;
    d = 0.02f / d;
    color *= d;

    fragColor = vec4(color, 1.0);
  }
}
{% endhighlight %}

> Código básico `.frag` para criar um projeto do zero:
{% highlight glsl %}
#version 150 core

uniform float iTime;
uniform vec3 iResolution;
out vec4 fragColor;

void main(){
  vec2 fragCoord = gl_FragCoord.xy;
}
{% endhighlight %}

---

## 🔗 Links mentioned in the Video
+ <https://www.shadertoy.com/>
+ Shader created in the video: <https://www.shadertoy.com/view/33sSzM>
+ Shader used at the end of the video: <https://www.shadertoy.com/view/w3lSzN>
+ <https://thebookofshaders.com/>
+ Doc function `length`: <https://thebookofshaders.com/glossary/?search=length>
+ [OpenGL Tutorial for Beginners](https://terminalroot.com.br/2024/02/tutorial-de-opengl-para-iniciantes.html)

Links to courses:
+ [👑 Learn to create your own programming language](https://terminalroot.com.br/mylang)
+ [✅ Learn Game Creation with C++ and SFML](https://terminalroot.com.br/games)
+ [✅ C++ Promotional Package](https://terminalroot.com.br/promo)
+ [✅ Learn C++ and Qt](https://terminalroot.com.br/cpp)
+ [✅ Discover our Courses](https://bit.ly/CursosTerminalRoot)
+ [🎁 All Courses on Udemy](https://bit.ly/UdemyTerminalRoot)

Additional links:
+ <https://wikipedia.org/wiki/GLSL>
+ <https://wikipedia.org/wiki/Pixel_Shader>
+ <https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>
+ <https://iquilezles.org/articles/>
+ <https://registry.khronos.org/OpenGL-Refpages/gl4/html/length.xhtml>
+ <https://iquilezles.org/articles/palettes/>



