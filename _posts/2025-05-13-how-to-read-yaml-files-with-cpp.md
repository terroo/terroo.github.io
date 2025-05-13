---
layout: post
title: "How to Read YAML Files with C++"
date: 2025-05-13 15:01:58
image: '/assets/img/cppdaily/yaml-cpp.jpg'
description: "🚀 Simple, fast and practical!"
tags:
- cppdaily
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

`yaml-cpp` is a parser for YAML with [C++](https://terminalroot.com/tags#cpp).

With it you can read YAML files quickly through [C++](https://terminalroot.com/cpp) code.


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

## Installation
To install, just clone with [git](https://terminalroot.com/tags#git), compile and install with [CMake](https://terminalroot.com/tags#cmake), run the commands below:

{% highlight bash %}
git clone https://github.com/jbeder/yaml-cpp
cd yaml-cpp
cmake -B build .
cmake --build build
sudo cmake --install build
{% endhighlight %}

<details>
<summary>See here the files that are installed</summary>

{% highlight cpp %}
-- Install configuration: ""
-- Installing: /usr/local/lib/libyaml-cpp.a
-- Up-to-date: /usr/local/include
-- Installing: /usr/local/include/yaml-cpp
-- Installing: /usr/local/include/yaml-cpp/emitterstyle.h
-- Installing: /usr/local/include/yaml-cpp/eventhandler.h
-- Installing: /usr/local/include/yaml-cpp/binary.h
-- Installing: /usr/local/include/yaml-cpp/emitterdef.h
-- Installing: /usr/local/include/yaml-cpp/yaml.h
-- Installing: /usr/local/include/yaml-cpp/null.h
-- Installing: /usr/local/include/yaml-cpp/contrib
-- Installing: /usr/local/include/yaml-cpp/contrib/anchordict.h
-- Installing: /usr/local/include/yaml-cpp/contrib/graphbuilder.h
-- Installing: /usr/local/include/yaml-cpp/ostream_wrapper.h
-- Installing: /usr/local/include/yaml-cpp/anchor.h
-- Installing: /usr/local/include/yaml-cpp/parser.h
-- Installing: /usr/local/include/yaml-cpp/emitfromevents.h
-- Installing: /usr/local/include/yaml-cpp/emittermanip.h
-- Installing: /usr/local/include/yaml-cpp/traits.h
-- Installing: /usr/local/include/yaml-cpp/exceptions.h
-- Installing: /usr/local/include/yaml-cpp/fptostring.h
-- Installing: /usr/local/include/yaml-cpp/node
-- Installing: /usr/local/include/yaml-cpp/node/parse.h
-- Installing: /usr/local/include/yaml-cpp/node/type.h
-- Installing: /usr/local/include/yaml-cpp/node/ptr.h
-- Installing: /usr/local/include/yaml-cpp/node/node.h
-- Installing: /usr/local/include/yaml-cpp/node/convert.h
-- Installing: /usr/local/include/yaml-cpp/node/impl.h
-- Installing: /usr/local/include/yaml-cpp/node/emit.h
-- Installing: /usr/local/include/yaml-cpp/node/iterator.h
-- Installing: /usr/local/include/yaml-cpp/node/detail
-- Installing: /usr/local/include/yaml-cpp/node/detail/memory.h
-- Installing: /usr/local/include/yaml-cpp/node/detail/node.h
-- Installing: /usr/local/include/yaml-cpp/node/detail/impl.h
-- Installing: /usr/local/include/yaml-cpp/node/detail/node_data.h
-- Installing: /usr/local/include/yaml-cpp/node/detail/node_iterator.h
-- Installing: /usr/local/include/yaml-cpp/node/detail/iterator_fwd.h
-- Installing: /usr/local/include/yaml-cpp/node/detail/iterator.h
-- Installing: /usr/local/include/yaml-cpp/node/detail/node_ref.h
-- Installing: /usr/local/include/yaml-cpp/dll.h
-- Installing: /usr/local/include/yaml-cpp/stlemitter.h
-- Installing: /usr/local/include/yaml-cpp/noexcept.h
-- Installing: /usr/local/include/yaml-cpp/depthguard.h
-- Installing: /usr/local/include/yaml-cpp/mark.h
-- Installing: /usr/local/include/yaml-cpp/emitter.h
-- Installing: /usr/local/lib/cmake/yaml-cpp/yaml-cpp-targets.cmake
-- Installing: /usr/local/lib/cmake/yaml-cpp/yaml-cpp-targets-noconfig.cmake
-- Installing: /usr/local/lib/cmake/yaml-cpp/yaml-cpp-config.cmake
-- Installing: /usr/local/lib/cmake/yaml-cpp/yaml-cpp-config-version.cmake
-- Installing: /usr/local/lib/pkgconfig/yaml-cpp.pc
{% endhighlight %}

</details>

---

## Basic example
Let's suppose you have this example file of the YAML type: `example.yaml`:
{% highlight yaml %}
person:
    name: Marcos
    last name: Oliveira
    age: 39
    profession: Programmer
    height: 1.73
{% endhighlight %}

And here is the C++ code that will do the parsing: `main.cpp`
{% highlight cpp %}
#include <print>
#include <fstream>
#include <yaml-cpp/yaml.h>

int main(){
    YAML::Node doc = YAML::LoadFile("./example.yaml");

    YAML::Node person = doc["person"];

    std::string name = person["name"].as<std::string>();
    std::string last name = person["last name"].as<std::string>();
    int age = person["age"].as<int>();
    std::string profession = person["profession"].as<std::string>();
    double height = person["height"].as<double>();

    std::println("First name: {}", name);
    std::println("Last name: {}", last name);
    std::println("Age: {}", age);
    std::println("Profession: {}", profession);
    std::println("Height: {}", height);

    return EXIT_SUCCESS;
}
{% endhighlight %}
> Remember that in this example I used [std::println](https://terminalroot.com/how-to-install-gcc-14-and-use-cpp23/) instead of `iostream`.

Compile using the flag for `yaml-cpp`:
{% highlight bash %}
g++ main.cpp -lyaml-cpp
{% endhighlight %}

And after running the binary the output will be:
{% highlight bash %}
First name: Marcos
Last name: Oliveira
Age: 39
Profession: Programmer
Height: 1.73
{% endhighlight %}

Easy, right?! For more information access the [repository](https://github.com/jbeder/yaml-cpp) and the [examples for using the API](https://github.com/jbeder/yaml-cpp)

