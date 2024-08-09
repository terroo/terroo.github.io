---
layout: post
title: "How to use sf::Vertex in SFML"
date: 2024-08-09 20:03:08
image: '/assets/img/sfml/sf-vertex.png'
description: "🚀 Knowing how to draw geometric shapes with code is one of the foundations for learning OpenGL and Vulkan."
tags:
- sfml
- cpp
- gamedev
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In the future, I intend to bring more content about [OpenGL](https://terminalroot.com/tags#opengl) and [Vulkan](https://terminalroot.com/tags#vulkan), however, one of the best tools to "*prepare*" for these upcoming realities is [SFML](https://terminalroot.com/tags#sfml).

By the way, [SFML](https://terminalroot.com/tags#sfml) is also interesting to enter the world of [game and graphics development](https://terminalroot.com/tags#games), besides you getting to better understand other libraries, such as: [SDL2](https://terminalroot.com/tags#sdl2), [Raylib](https://terminalroot.com/tags#raylib), [Allegro](https://terminalroot.com/tags#allegro), besides also facilitating the learning of graphics engines such as: [Godot](https://terminalroot.com/tags#godot), [Unity](https://terminalroot.com/tags#unity) and among others.

And one of the interesting tools of SFML, to use, is `sf::Vertex`.

`sf::Vertex` is a *class* (or more precisely, a `struct`) in SFML that represents a single vertex in 2D space and stores information such as:
+ position;
+ color;
+ and texture coordinates.


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

## 01. The Basics of the Basics
Starting from scratch to understand how `sf::Vertex` really works.

+ **1.1.** This only shows the black background, but note that in `draw` it is necessary to pass 3 parameters, in addition to `&vertex` as a reference, since it is not *drawable*.
{% highlight cpp %}
...
sf::Vertex vertex;
...
window.draw(&vertex, 1, sf::Points);
...
{% endhighlight %}
Note that we used the model: `sf::Points`, it only draws a single point. There are other models, we will see later. > It is appearing on the screen, however, at position: `0, 0`, that is, you will not be able to notice it.

+ **1.2.** To notice it, position it further to the right and down. To do this, use the *union structure*: `.position`, example:
{% highlight cpp %}
vertex.position = sf::Vector2f(100.f, 100.f);
{% endhighlight %}
> Note that a small white dot (1 single vertex) will appear on the screen!

![Only one point](/assets/img/sfml/only-point.png)

This basic example could be replaced using only the constructor:
{% highlight cpp %}
sf::Vertex vertex(sf::Vector2f(100.f, 100.f)); {% endhighlight %}

+ **1.3.** You can also set color for the vertex using the *union structure* `.color`
{% highlight cpp %}
vertex.color = sf::Color::Red;
// Or directly in the constructor:
sf::Vertex vertex(sf::Vector2f(100.f, 100.f), sf::Color::Red);
{% endhighlight %}

+ **1.4.** You noticed that the constructor is overloaded like most declarations in [SFML](https://terminalroot.com/tags#sfml). ​​And there is one more argument for the constructor which is the *union structure*: `.texCoords`.
![coordinates](/assets/img/sfml/textCoords.png)

As the name suggests, it is used to define **coordinates** for a possible **text**ture that you want to "*fit*" to your vertex. In addition to being able to pass it directly in the constructor, you can also define it later:
{% highlight cpp %}
vertex.textCoords = sf::Vector2f(0.f, 0.f);
{% endhighlight %}

Drawing just one vertex may be useful, depending on what you are doing, but it is generally not useful in most cases. In the next topic we will see how to use multiple vertex(s).

---

## 02. Multiple vertex(s)
The correct way to use vertex is together. In this example we will place one at each point of a possible square: 
{% highlight cpp %} 
sf::Vertex vertex[4] = { 
  sf::Vertex(sf::Vector2f(100.f, 100.f), sf::Vector2f(0.f, 0.f)), // Top-left 
  sf::Vertex(sf::Vector2f(200.f, 100.f), sf::Vector2f(100.f, 0.f)), // Top-right 
  sf::Vertex(sf::Vector2f(200.f, 200.f), sf::Vector2f(100.f, 100.f)), // Bottom-right 
  sf::Vertex(sf::Vector2f(100.f, 200.f), sf::Vector2f( 0.f, 100.f)) // Bottom-left
};
{% endhighlight %}

And now, since it is not a single vertex but 4, we no longer use reference to draw:
{% highlight cpp %}
window.draw(vertex, 4, sf::Points);
{% endhighlight %}
It will render like this:

![points](/assets/img/sfml/4-vertex.png)

### Models for `sf::Vertex`
We use and talk about `sf::Points`, logically, it only draws points, but there are others. They are:
+ `sf::Lines`, it connects the points that are on the same line:

![lines](/assets/img/sfml/sf-lines.png)

+ `sf::LineStrip`, similar to `sf::Lines`, but it makes an additional connection on one of the verticals:

![LineStrip](/assets/img/sfml/sf-LineStrip.png)

+ `sf::Quads`, it fills the content taking the vertices as coordinates:

![Quads](/assets/img/sfml/sf-quads.png)

+ `sf::Triangles`, similar to `sf::Quads`, but it is for triangles, of course your array needs to have 3 elements now: `sf::Vertex vertex[3]`:

![Triangles](/assets/img/sfml/sf-triangles.png)

+ `sf::TriangleStrip`, we return to the 4 elements for the array, and notice that it fills, except for a triangle shape:

![TriangleStrip](/assets/img/sfml/sf-TriangleStrip.png)

+ `sf::TriangleFan`, ends at the same vertex as the beginning, generating an effect similar to `sf::Quads` with *fill*:
> Now there is a vertex with 5 vertices:
{% highlight cpp %}
...
sf::Vertex vertex[5] = {
    sf::Vertex(sf::Vector2f(150, 150)), // start
    sf::Vertex(sf::Vector2f(100, 100)),
    sf::Vertex(sf::Vector2f(150, 100)),
    sf::Vertex(sf::Vector2f(200, 100)),
    sf::Vertex(sf::Vector2f(150, 150)) // end
}; 
... 
window.draw(vertex, 5, sf::TriangleFan);
...
{% endhighlight %}

![TriangleFan](/assets/img/sfml/sf-TriangleFan.png)


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

## Examples

### 01. Drawing colored triangle like the basic example of [OpenGL](https://terminalroot.com/tags#opengl)
{% highlight cpp %}
...
sf::Vertex vertex[3] = {
sf::Vertex(sf::Vector2f(400.f, 100.f), sf::Color::Red), // Top (red)
sf::Vertex(sf::Vector2f(300.f, 300.f), sf::Color::Green), // Left (green)
sf::Vertex(sf::Vector2f(500.f, 300.f), sf::Color::Blue) // Right (blue)
}; 
... 
window.clear(sf::Color::White);
window.draw(vertex, 3, sf::Triangles);
... 
{% endhighlight %}

![Colored Triangle](/assets/img/sfml/triangle-colored.png) 

### 02. Creating an "*almost*" [C++](https://terminalroot.com/tags#cpp)

{% highlight cpp %}
#include <SFML/Graphics.hpp>

int main() {
  sf::RenderWindow window(
    sf::VideoMode(800, 450), 
    "C++ sf::Vertex",
    sf::Style::Titlebar | sf::Style::Close
  );

  sf::Vertex cPlusPlus[15];

  // "C"
  cPlusPlus[0] = sf::Vertex(sf::Vector2f(100.f, 200.f), sf::Color::Blue);     // Superior esquerdo
  cPlusPlus[1] = sf::Vertex(sf::Vector2f(200.f, 200.f), sf::Color::White);    // Superior direito
  cPlusPlus[2] = sf::Vertex(sf::Vector2f(200.f, 250.f), sf::Color::Blue);     // Inferior direito
  cPlusPlus[3] = sf::Vertex(sf::Vector2f(150.f, 250.f), sf::Color::White);    // Meio
  cPlusPlus[4] = sf::Vertex(sf::Vector2f(150.f, 300.f), sf::Color::Blue);     // Inferior direito
  cPlusPlus[5] = sf::Vertex(sf::Vector2f(100.f, 300.f), sf::Color::White);    // Inferior esquerdo
  cPlusPlus[6] = sf::Vertex(sf::Vector2f(100.f, 200.f), sf::Color::Blue);     // Fechando o C

  // 1º "+"
  cPlusPlus[7] = sf::Vertex(sf::Vector2f(250.f, 225.f), sf::Color::Blue);     // Meio esquerdo
  cPlusPlus[8] = sf::Vertex(sf::Vector2f(350.f, 225.f), sf::Color::White);    // Meio direito
  cPlusPlus[9] = sf::Vertex(sf::Vector2f(300.f, 175.f), sf::Color::Blue);     // Superior
  cPlusPlus[10] = sf::Vertex(sf::Vector2f(300.f, 275.f), sf::Color::White);   // Inferior

  // 2º "+"
  cPlusPlus[11] = sf::Vertex(sf::Vector2f(400.f, 225.f), sf::Color::Blue);    // Meio esquerdo
  cPlusPlus[12] = sf::Vertex(sf::Vector2f(500.f, 225.f), sf::Color::White);   // Meio direito
  cPlusPlus[13] = sf::Vertex(sf::Vector2f(450.f, 175.f), sf::Color::Blue);    // Superior
  cPlusPlus[14] = sf::Vertex(sf::Vector2f(450.f, 275.f), sf::Color::White);   // Inferior

  while (window.isOpen()) {
    sf::Event event;
    while (window.pollEvent(event)) {
      if (event.type == sf::Event::Closed)
        window.close();
    }
    window.clear(sf::Color::Black);
    window.draw(cPlusPlus, 7, sf::TriangleFan);
    window.draw(&cPlusPlus[7], 4, sf::Lines);
    window.draw(&cPlusPlus[11], 4, sf::Lines);
    window.display();
  }
  return 0;
}
{% endhighlight %}

![Almost C++](/assets/img/sfml/vertex-cpp.png)

---

There is another type that is also widely used, which is `sf::VertexArray`. We will see more about it in the next article.

For more information, visit: <https://www.sfml-dev.org/tutorials/2.5/graphics-vertex-array.php>.


