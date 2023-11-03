---
layout: post
title: "Use C++ with Mustache"
date: 2023-11-03 17:29:13
image: '/assets/img/cpp/mustache.jpg'
description: 'Ideal for C++ web applications!'
tags:
- cpp
- cppdaily
- web
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Mustache** is a web template system with implementations available for several [programming languages](https://terminalroot.com/hello-world-in-25-programming-languages-proposal-docs-and-links/), including [C++]( https://terminalroot.com/tags#cpp).

Mustache is described as a logicless system because it does not have any control flow instructions, however, both looping and conditional evaluation can be achieved using section tag processing lists and anonymous functions ([lambdas](https://terminalroot.com/10-examples-of-using-lambda-functions-in-cpp/)).

## Supported Features
This library supports all current Mustache features:
+ Variables
+ HTML escaping
+ Sections
+ Inverted Sections
+ True | False
+ Lists
+ Lambdas
+ Partials
+ Comments
+ Set delimiter
+ Additional features:
> Custom escape function for use outside of HTML

---

# Installation
The ease starts with installation, just:
{% highlight bash %}
git clone https://github.com/kainjow/Mustache
sudo install -v Mustache/mustache.hpp /usr/local/include/
rm -rf Mustache/
{% endhighlight %}

---

# Usage
Create a file: `main.cpp`:
{% highlight cpp %}
#include <iostream>
#include <mustache.hpp>

int main(){
   kainjow::mustache::mustache tmpl("Hello {{what}}!");
   std::cout << tmpl.render({"what", "World"}) << '\n';
}
{% endhighlight %}
> Alternatively you can use: `using namespace kainjow::mustache;` =}

Compile:
{% highlight bash %}
g++ main.cpp
{% endhighlight %}

Rotate:
{% highlight bash %}
./a.out
{% endhighlight %}
> Probable output: `Hello World!`

If you want to test first:
{% highlight bash %}
git clone https://github.com/kainjow/Mustache
cd Mustache
sed -i "s/VERSION.*/VERSION $(cmake --version | grep -o [0-9].*))/g" CMakeLists.txt
cmake -B build .
cd build && make
./tests/mustache-unit-tests
{% endhighlight %}

---

For more information visit: <https://github.com/kainjow/Mustache>.

---

Alternatives to this Mustache:
+ <https://github.com/no1msd/mstch> | <https://mustache.github.io/>
+ <https://pdimov.github.io/mustache/doc/html/mustache.html>
+ <https://crowcpp.org/master/guides/templating/>



