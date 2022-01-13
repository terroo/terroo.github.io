---
layout: post
title: "NumCpp, Numpy for C++"
date: 2022-01-13 13:27:28
image: '/assets/img/cpp/numcpp.png'
description: 'Suitable for Python programmers who want to use C++ but keep the way they do their projects'
tags:
- cpp
- cppdaily
- python
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**NumCpp** is an implementation for [C++](https://terminalroot.com/tags#cpp) of the Numpy library of [Python](https://terminalroot.com/tags#python) which is for work with multidimensional arrays widely used in [Machine Learning](https://terminalroot.com/tags#machinelearning) .

---

# Installation
In order to use NumCpp on your system it is necessary to clone and compile. Dependencies: [CMake](https://terminalroot.com/how-to-compile-your-programs-with-cmake/), [ Make](https://terminalroot.com/how-to-create-a-makefile/) and [g++](https://terminalroot.com/gcc-vs-llvm-which-is-the-best-compiler/):
{% highlight sh %}
git clone https://github.com/dpilger26/NumCpp
cd NumCpp
mkdir build && cd build
cmake ..
sudo cmake --build . --target install
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

# Testing and compiling a project
When you are developing with the library you can compile with these procedures. Example of a dummy project: `my-project`:
{% highlight sh %}
mkdir my-project
my-project cd
{% endhighlight %}

Create a `main.cpp` file:
> `vim main.cpp`
{% highlight cpp %}
#include <NumCpp.hpp>

int main(){
  auto a = nc::random::randInt<int>({10, 10}, 0, 100);
  std::cout << a;
  return EXIT_SUCCESS;
}
{% endhighlight %}

Create `CMakeLists.txt`
> `vim CMakeLists.txt`
{% highlight cmake %}
cmake_minimum_required(VERSION 3.14)
 
project("HelloWorld" CXX)
 
add_executable(${PROJECT_NAME} main.cpp)
 
find_package(NumCpp 2.6.2 REQUIRED)
target_link_libraries(${PROJECT_NAME}
    NumCpp::NumCpp
)
{% endhighlight %}

Compile:
{% highlight sh %}
mkdir build && cd build
cmake ..
cmake --build . --config Release
./HelloWorld
{% endhighlight %}

For more information access:
+ <https://dpilger26.github.io/NumCpp>
+ <https://github.com/dpilger26/NumCpp>



