---
layout: post
title: "How to Convert ASCII to Binary and Hexadecimal and vice versa with C++"
date: 2022-02-24 11:13:01
image: '/assets/img/cppdaily/conv.jpg'
description: 'Easily and quickly.'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Several times we need to convert our data to manipulate it in the desired way and even to make it difficult to display when necessary.

For development purposes, it's good to have something ready to go faster, so I created a single `convert.hpp` file with a [Union](https://terminalroot.com/how-to-use-unions-in-cpp/) which has the member functions for this.

I really don't like to fill the code with comments, because programmers know how to read the code of the [programming language](https://terminalroot.com/hello-world-in-25-programming-languages-proposal-docs-and-links/) that it is acquainted.

However, I will inform some things in the code to make it easier to read and if you want to increment something, it will be easier, they are:

+ Use `union` instead of `class` or `struct` for performance reasons as we saw [in this article](https://terminalroot.com/how-to-use-unions-in-cpp/);
+ I've assigned `static` so we don't need an instance and can be used more easily with the `::` operator;
+ I didn't enter `namespace`, because `static` itself will allow a *scope*;
+ Although the default for **classes**, **unions** and **structs** is to have capitalized names, I didn't use them because I think that, *typographically* in this case it's more pleasant;
+ I used the class [std::bitset](https://en.cppreference.com/w/cpp/utility/bitset), writing from scratch is good for didactic purposes, for development it is good to use solutions already ready;
+ In the member function `ascii_to_bin()` I added this check below just to separate the output into 8 bits, example: `01010101 01010101`, that is, by a space in the middle:
{% highlight cpp %}
if( ss.str().length() % 8 == 0){
  ss << " ";
}
{% endhighlight %}
+ In the `bin_to_hex()` member function I added the *iterator* `bin.erase( std::remove( bin.begin() , bin.end(), ' ') , bin.end() );` to we remove the white space from the bits, if any, as in `bin_to_ascii()` the conversions are different;
+ When reading the code also note that for hexadecimal it is necessary to use the template of **16** instead of ~~8~~ in: `std::bitset<16>`;
+ And finally the `ascii_to_hex` member function, reuses the other member functions, not having to rewrite everything.

The complete code is this:
> `convert.hpp`

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

{% highlight cpp %}
#pragma once
#include <sstream>
#include <bitset>
#include <vector>
#include <algorithm>

union conv {
    static const std::string bin_to_ascii(const std::string & bin){
      std::stringstream ss(bin);
      std::string r;
      while(ss.good()){
        std::bitset<8> bits;
        ss >> bits;
        char c = char(bits.to_ulong());
        r += c;
      }
      return r;
    }

    static const std::string ascii_to_bin(const std::string& ascii){
      std::stringstream ss(ascii);
      for (size_t i = 0; i < ascii.length(); ++i) {
        std::bitset<8> bits(ascii[i]);
        ss << bits;
        if( ss.str().length() % 8 == 0){
          ss << " ";
        }
      }
      return ss.str();
    }

    static const std::string bin_to_hex(std::string bin){
      bin.erase( std::remove( bin.begin() , bin.end(), ' ') , bin.end() );
      std::bitset<16> bits(bin);
      std::stringstream res;
      res << std::hex << std::uppercase << bits.to_ulong();
      return res.str();
    }

    static const std::string ascii_to_hex(std::string ascii){
       return bin_to_hex( ascii_to_bin(ascii) );
    }
};
{% endhighlight %}


To use it, just include this file and *call* the static member functions of the union, for example: `conv::member_function(param);`:

> `main.cpp`

{% highlight cpp %}
#include <iostream>
#include "convert.hpp"

int main(){
  std::cout << conv::bin_to_ascii("01001111 01101011") << '\n';
  std::cout << conv::ascii_to_bin("Ok") << '\n';
  std::cout << conv::bin_to_hex("01001111 01101011") << '\n';
  std::cout << conv::ascii_to_hex("Ok") << '\n';
}
{% endhighlight %}

Possible and probable output:
{% highlight sh %}
Ok
01001111 01101011
4F6B
4F6B
{% endhighlight %}

If you want to add more conversions, for example to: **decimal** and **octal**, it will be a good exercise. I didn't put it on [GitHub](https://github.com/terroo) because it's just a basic file! 😃



