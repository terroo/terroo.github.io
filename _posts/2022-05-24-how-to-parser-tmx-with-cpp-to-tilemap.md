---
layout: post
title: "How to Parser .tmx with C++ to TileMap"
date: 2022-05-24 18:33:39
image: '/assets/img/cppdaily/loadtmx.jpg'
description: 'Tired of using different solutions that only gave me a headache, I decided to write a .tmx parser that works in the simplest way possible.'
tags:
- cpp
- cppdaily
- gamedev
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

# How to Parser .tmx with C++ to TileMap

Tired of using different solutions that only gave me a headache, I decided to write a `.tmx` parser that works in the simplest way possible.

It's just a class that has a static member function (so no need to instantiate) and it returns a `vector<vector<int>>` to implement quickly.

The only dependency is the **TinyXML2** which we will detail later.

For more information about TinyXML2, see this post:
## [How to parser XML with TinyXML2 C++](https://terminalroot.com/how-to-parser-xml-with-tinyxml2-cpp/)

---

# How to use parser
To use it, you need to either install [TinyXML2](https://github.com/leethomason/tinyxml2) or use it without installing [in this repository](https://github.com/terroo/tinyxml2) in short that I did a *fork*.

But the best option is to install it on your system. Below example of installation on [Ubuntu](https://terminalroot.com/tags#ubuntu) and derivatives:

{% highlight sh %}
sudo apt install libtinyxml2-dev
{% endhighlight %}

Now just clone with your preferred version control, example with [Git](https://terminalroot.com/tags#git)

{% highlight sh %}
git clone https://github.com/terroo/loadtmx
{% endhighlight %}
> And copy the `loadtmx.hpp` file to your project.

To implement it, just create any file, include `loadtmx.hpp` and use either `std::vector<std::vector<int>>` or `auto`, for example:

> `vim main.cpp`
{% highlight cpp %}
#include "loadtmx.hpp"

int main( int argc , char **argv ){
  auto map = LoadTmx::tilemap("file.tmx");
}
{% endhighlight %}

Suppose you have [this `.tmx`](https://gist.github.com/terroo/875d1b41a823c35b20c7c3cdb3004753) and you want to parser each number in it:
> To download this example use *raw* from Gist or run the command below:
{% highlight sh %}
wget https://cutt.ly/tilemaptmx -O tilemap.tmx
{% endhighlight %}

Now add it to your code and print each position with a `for` loop:

{% highlight cpp %}
#include "loadtmx.hpp"

int main( int argc , char **argv ){
  auto map = LoadTmx::tilemap("tilemap.tmx");

  for(auto &line : map){
    for(auto &col : line){
      std::cout << col;
    }
    std::cout << '\n';
  }
  return 0;
}
{% endhighlight %}

To compile, run:
{% highlight sh %}
g++ main.cpp -ltinyxml2
./a.out
{% endhighlight %}
> The possible output will be precisely the position numbers that were stored in `line` and `col`

If you want to use a classic loop it would be:

{% highlight cpp %}
for(std::size_t i{}; i < map.size(); ++i){
  for(std::size_t j{}; j < map[i].size(); ++j){
    std::cout << map[i][j];
  }
  std::cout << '\n';
}
{% endhighlight %}

If using local TinyXML2 instead of installed on your system, compile along with the TinyXML2 `.cpp` file, eg `g++ main.cpp tinyxml2/tinyxml2.cpp`.

> **Note**: It already includes the `<iostream>` and `<vector>` by default, so including it you can already remove any other use of these libraries in your code to avoid overhead.
