---
layout: post
title: "Meet QuarkPhysics, an alternative to Box2D"
date: 2025-04-04 14:55:16
image: '/assets/img/gamedev/QuarkPhysics.jpg'
description: "🚀 Ideal for SFML and Godot gamedevs"
tags:
- gamedev
- sfml
- godot
- physics
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**QuarkPhysics** is a [2D physics engine](https://youtu.be/XdZlSfVLlsE) developed for games, with the goal of simulating rigid and soft bodies in an integrated way.

It supports primitive shapes (*circle, polygon, rectangle*), physical properties (*mass, area, restitution*), raycasting, collision masks, and an advanced event system.

In addition, it uses pixels as the default unit, has a simple and consistent API, and supports UV mapping with `QMesh` for rendering operations.


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

## Compilation and Example
Before compiling QuarkPhysics, you must have [SFML](https://terminalroot.com/tags#sfml) and [CMake](https://terminalroot.com/tags#cmake) installed on your system. After installing these dependencies, follow the steps below:

Clone the repository:
{% highlight bash %}
git clone https://github.com/erayzesen/QuarkPhysics
{% endhighlight %}

Access the project directory:
{% highlight bash %}
cd QuarkPhysics
{% endhighlight %}

Give execution permission to the file that will compile and run the example:
{% highlight bash %}
chmod +x run_linux_fast.sh
{% endhighlight %}

And run the script:
{% highlight bash %}
./run_linux_fast.sh -r
{% endhighlight %}

The output will be similar to the image below:

![QuarkPhysics run.png](/assets/img/gamedev/QuarkPhysics-tr-run.png)

If you are unable to compile, try installing [nlohmann's json](https://terminalroot.com/json-cpp-for-creating-and-parsing-json-with-cpp/).

---

To integrate QuarkPhysics into your project, copy the "QuarkPhysics" folder to your project directory and use it as needed.

In the case of [Godot](https://terminalroot.com/tags#godot) [see this integration](https://github.com/erayzesen/godot-quarkphysics).

For more information, access the [official repository](https://github.com/erayzesen/QuarkPhysics).

---

## See also:
### [Meet Box2D, a 2D physics engine for games](https://youtu.be/XdZlSfVLlsE)



