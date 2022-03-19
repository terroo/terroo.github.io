---
layout: post
title: "Json C++ - For creating and parsing JSON with C++"
date: 2022-03-18 07:55:27
image: '/assets/img/cppdaily/json-cpp.jpg'
description: 'JSON C++ is a utility for Modern C++'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**JSON C++** is a utility for [Modern C++](https://terminalroot.com/tags#cpp) to create and read [JSON](https://terminalroot.com/view-json-interactively-from-the-terminal/) files.

# Installation
Make sure you already have [Git](https://terminalroot.com/tags#git), [GCC](https://terminalroot.com/tags#gcc) or [Clang](https://terminalroot.com/tags#clang), [CMake](https://terminalroot.com/tags#cmake), [GNU Make](https://terminalroot.com/tags#make) installed on your system.

<p id="limit"></p>

<script>
let url = "" + window.location;
url = url.replace("https://", "");
url = url.slice(0, 6);
if(url.match(/termi/)){
 document.getElementById("limit").innerHTML = "Read more ..."
}else{
 document.getElementById("limit").innerHTML = "No feed."
}
</script>

Then clone, build and install with the following commands:
{% highlight sh %}
git clone https://github.com/nlohmann/json
cd json
mkdir build && cd build
cmake..
make
sudo make install
{% endhighlight %}

It will be Copied/Installed in directories similar to the ones below:
{% highlight sh %}
-- Install configuration: ""
-- Up-to-date: /usr/local/include
-- Installing: /usr/local/include/nlohmann
-- Installing: /usr/local/include/nlohmann/json.hpp
-- Installing: /usr/local/lib64/cmake/nlohmann_json/nlohmann_jsonConfig.cmake
-- Installing: /usr/local/lib64/cmake/nlohmann_json/nlohmann_jsonConfigVersion.cmake
-- Installing: /usr/local/lib64/cmake/nlohmann_json/nlohmann_jsonTargets.cmake
-- Installing: /usr/local/lib64/pkgconfig/nlohmann_json.pc
{% endhighlight %}

---

# Basic usage example
To create a basic JSON.

> `vim hello-json.cpp`

{% highlight cpp %}
#include <iostream>
#include <nlohmann/json.hpp>

int main(){
  nlohmann::json j;
  j.push_back("Hello");
  j.emplace_back("World");
  std::cout << j << '\n';
}
{% endhighlight %}
> `g++ hello-json.cpp` and run: `./a`

> Possible output:
{% highlight sh %}
["Hello","World"]
{% endhighlight %}

Printing only the first element of JSON:
{% highlight cpp %}
#include <iostream>
#include <nlohmann/json.hpp>

int main(){
  nlohmann::json j;
  j.push_back("Hello");
  j.emplace_back("World");
  std::cout << j[0] << '\n';
}
{% endhighlight %}
> Possible output: `"Hello"`


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

# Parsing
Example of a `example.json` JSON file:

{% highlight json %}
{
  "number": 42,
  "website": "Terminal Root",
  "author": "Marcos Oliveira",
  "parsing": true,
  "details": {
    "tutorial": "json C++",
    "id": 1
  },
  "other": null
}
{% endhighlight %}

Print all content:
{% highlight cpp %}
#include <iostream>
#include <nlohmann/json.hpp>
#include <fstream>

int main(){
  std::ifstream file("./example.json");
  nlohmann::json j;
  file >> j;
  std::cout << j << '\n';
}
{% endhighlight %}
> Possible output, **note that the display has been changed to alphabetical order**:
{% highlight sh %}
{"author":"Marcos Oliveira","details":{"id":1,"tutorial":"json C++"},"number":42,"other":null,"parsing":true," website":"Terminal Root"}
{% endhighlight %}

---

Print content with formatting:
{% highlight cpp %}
#include <iostream>
#include <nlohmann/json.hpp>
#include <fstream>

int main(){
  std::ifstream file("./example.json");
  nlohmann::json j;
  file >> j;
  std::cout << std::setw(2) << j << '\n';
}
{% endhighlight %}
> Possible output,**note that the display has been changed to alphabetical order** :
{% highlight json %}
{
  "author": "Marcos Oliveira",
  "details": {
    "id": 1,
    "tutorial": "json C++"
  },
  "number": 42,
  "other": null,
  "parsing": true,
  "website": "Terminal Root"
}
{% endhighlight %}

---

Print only *website* content
{% highlight cpp %}
#include <iostream>
#include <nlohmann/json.hpp>
#include <fstream>

int main(){
  std::ifstream file("./example.json");
  nlohmann::json j;
  file >> j;
  std::string website = j["website"];
  std::cout << website << '\n';
}
{% endhighlight %}
> Possible output: `Terminal Root` .

---

Print the contents of `{"details": {"tutorial"}}`:
{% highlight cpp %}
#include <iostream>
#include <nlohmann/json.hpp>
#include <fstream>

int main(){
  std::ifstream file("./example.json");
  nlohmann::json j;
  file >> j;
  std::string jstr = j["details"]["tutorial"];
  std::cout << jstr << '\n';
}
{% endhighlight %}
> Possible output: `json C++` .

---

For complete documentation visit [repository](https://github.com/nlohmann/json) and [official page](https://json.nlohmann.me/) .
