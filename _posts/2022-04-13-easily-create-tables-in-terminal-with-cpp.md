---
layout: post
title: "Easily Create Tables in Terminal with C++"
date: 2022-04-13 08:30:13
image: '/assets/img/cppdaily/tabulate-cpp.jpg'
description: 'A C++ library that facilitates the development of your TUI applications.'
tags:
- cpp
- cppdaily
- tui
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

TUI (Terminal User Interface) applications are growing day by day. And for you to display table data in the terminal with colors and other features, for [C++](https://terminalroot.comqtags#cpp) developers there is one more library that is very simple to use: **Tabulate** .

# Installation
To use Tabulate in your applications, just install it on your system and for that you will need the following dependencies:
> Usually C++ programmers already have them all installed, but just in case... 😃

+ Compiler [C++](https://terminalroot.com/tags#cpp): [g++](https://terminalroot.com/tags#gcc) or [clang++](https://terminalroot.com/tags#clang)
+ [CMake](https://terminalroot.com/tags#cmake)
+ [GNU Make](https://terminalroot.com/tags#make)
+ [Git](https://terminalroot.com/tags#git)

After that, just clone and install with the following commands:

{% highlight sh %}
git clone https://github.com/p-ranav/tabulate
cd tabulate
cmake .
sudo make install
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

# Usage
There are several ways to apply Tabulate in your code, however, the most basic way would be:
+ Include library: `#include <tabulate/table.hpp>`
+ Use *namespace* directly or with *using*: `using namespace tabulate;`
+ Instantiate the class: `Table table;`
+ And use the code as needed.

In this basic example we print two cells with predefined widths as desired:

> `vim main.cpp`
{% highlight cpp %}
#include <tabulate/table.hpp>
using namespace tabulate;

int main() {
  Table table;

  table.add_row({"This paragraph contains a veryveryveryveryveryverylong word. The long word will "
                 "break and word wrap to the next line.",
                 "This paragraph \nhas embedded '\\n' \ncharacters and\n will break\n exactly "
                 "where\n you want it\n to\n break."});

  table[0][0].format().width(20);
  table[0][1].format().width(50);

  std::cout << table << std::endl;
}
{% endhighlight %}

To compile you don't need any additional *flag*, example:
{% highlight sh %}
g++ main.cpp
./a.out
{% endhighlight %}

Possible output:
{% highlight txt %}
TABLE
{% endhighlight %}

Note that to print the table you must use `std::cout << table_name << '\n';` . And to add features, formatting, colors and others you can do union in your class instance, for example adding color would be: `table[0][0].format().font_color(Color::yellow);`, in this case according to the example above the `[0][0]` indicates that the output of the cell on the left will now be colored yellow .

---

# More examples
For a more detailed example you can use the **samples/** directory, example:
{% highlight sh %}
g++ tabulate/samples/summary.cpp
./a.out
{% endhighlight %}

The possible output will be:

![Summary Tabulate C++](/assets/img/cppdaily/tabulate.jpg)

If you want to uninstall Tabulate, run:
{% highlight cpp %}
sudo rm -rf /usr/local/lib64/cmake/tabulate /usr/local/include/tabulate
{% endhighlight %}

For more examples and information visit the [official repository](https://github.com/p-ranav/tabulate) .


