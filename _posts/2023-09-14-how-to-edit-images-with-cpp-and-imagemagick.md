---
layout: post
title: "How to edit images with C++ and ImageMagick"
date: 2023-09-14 10:57:29
image: '/assets/img/cpp/magick.jpg'
description: 'The Magick++ API is the object-oriented C++ API for the ImageMagick image processing library.'
tags:
- cpp
- multimedia
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The **Magick++** API is the object-oriented [C++](https://terminalroot.com/tags#cpp) API for the *ImageMagick* image processing library.

**Magick++** supports an object model inspired by *PerlMagick* . Images support implicit reference counting so that copy constructors and assignment incur almost no cost.

The cost of copying an image (if necessary) is done right before modification and this copy is managed automatically by **Magick++**. *Dereferenced* copies are automatically deleted. Image objects support value (rather than pointer) semantics, so it is trivial to support multiple generations of an image in memory at the same time.

In this article we will see 4 examples of use!

---

# Installation on Ubuntu and Windows

#### Installation on Ubuntu:
{% highlight bash %}
sudo apt install imagemagick libmagick++-dev graphicsmagick-libmagick-dev-compat
{%endhighlight%}

### To install on [Windows](https://terminalroot.com/tags#windows) or other distros and operating systems, see the links below:
+ <https://imagemagick.org/script/advanced-windows-installation.php>
+ <https://imagemagick.org/script/download.php>

---

## Example 01 - Create an image and draw and paint a circle in the center

{% highlight cpp %}
#include <Magick++.h>

int main(){
   Magick::InitializeMagick("");

   Magick::Image image(Magick::Geometry(800, 600), Magick::Color("white"));

   Magick::DrawableCircle circle(400, 300, 500, 300);
   image.fillColor("green");
   image.draw(circle);
   image.write("green_circle.png");

   return 0;
}
{%endhighlight%}

To compile and run:
{% highlight bash %}
g++ `Magick++-config --cxxflags --cppflags` -O2 -o 01 main.cpp `Magick++-config --ldflags --libs`)
./01
{%endhighlight%}

---

## Example 02 - Crop region of an image
Image used in example 02: [langs.png](/assets/img/cpp/magick/langs.png)


{% highlight cpp %}
#include <Magick++.h>

int main(){
   Magick::InitializeMagick("");

   Magick::Image image;

   image.read("./langs.png");

   image.crop(Magick::Geometry(219, 147, 409, 272));

   image.write("php.jpg");

   return 0;
}
{%endhighlight%}

---

## Example 03 - Convert WEBP image to JPG
Image used in example 03: [The-man-image.webp](/assets/img/cpp/magick/The-man-image.webp)

{% highlight cpp %}
#include <Magick++.h>

int main(){
   Magick::InitializeMagick("");

   Magick::Image image;

   image.read("./The-man-image.webp");

   image.write("Bjarne Stroustrup.jpg");

   return 0;
}
{%endhighlight%}

---

## Example 04 - Drawing text on the image
Font used: [font.ttf](/assets/img/cpp/magick/font.ttf)

{% highlight cpp %}
#include <Magick++.h>

int main(){
   Magick::InitializeMagick("");

   Magick::Image image;

   image.read("./Bjarne Stroustrup.jpg");
   image.font("./font.ttf");
   image.fillColor(Magick::Color("yellow"));
   image.strokeColor(Magick::Color("black"));
   image.fontPointsize(30);

   image.draw(Magick::DrawableText(50, 300, "Bjarne Stroustrup"));

   image.write("image_com_texto.png");

   return 0;
}
{%endhighlight%}


---

# Watch the video
## <https://youtu.be/zuukk0eK1Gs>

---

# Useful links and documentation
+ [API Documentation](https://imagemagick.org/script/magick++.php)
+ [Official website](https://imagemagick.org/)

