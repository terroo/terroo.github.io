---
layout: post
title: "How to use and what is the magic_enum library for"
date: 2024-07-21 11:20:12
image: '/assets/img/cppdaily/magic_enum.jpg'
description: "🪄 It provides advanced features that are not natively offered by the language."
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In the article about [std::any](https://terminalroot.com/use-modern-cpp-stdany-in-your-projects/) we show, in addition to other information, how complicated it can be to convert `enum` to `std::string` and other types of operations. In this article we will learn about a *header-only*: **magic_enum**, which can greatly facilitate operations with `enum`

The `magic_enum` library is a useful tool for working with enums in [C++](https://terminalroot.com/tags#cpp). It provides advanced functionality that is not natively offered by the language. Here are some of the main features that `magic_enum` offers we will see in the examples.

---

## Implementation
Download the `.hpp` file:

+ Using [cURL](https://terminalroot.com/tags#curl):
{% highlight bash %}
curl -LO https://github.com/Neargye/magic_enum/raw/master/include/magic_enum/magic_enum.hpp
{% endhighlight %}
> Install [cURL](https://terminalroot.com/tags#curl), e.g.: `sudo apt install curl`

+ Using [GNU wget](https://terminalroot.com/tags#wget), you need to force IPv4:
{% highlight bash %}
wget -4 https://github.com/Neargye/magic_enum/raw/master/include/magic_enum/magic_enum.hpp
{% endhighlight %}

+ Or using [PowerShell](https://terminalroot.com/tags#powershell) on [Windows](https://terminalroot.com/tags#windows)
{% highlight bash %}
Invoke-WebRequest -Uri "https://github.com/Neargye/magic_enum/raw/master/include/magic_enum/magic_enum.hpp" -OutFile "magic_enum.hpp"
{% endhighlight %}

Add `magic_enum.hpp` to your code:
{% highlight bash %}
#include "./magic_enum.hpp"
{% endhighlight %}

---

## Examples
For our examples we will use this `enum`:
{% highlight cpp %}
enum Color {
 RED,
 GREEN,
 BLUE
};
{% endhighlight %}

1. **Enum to String Conversion**: Allows you to convert enum values to their corresponding string representations.
{% highlight cpp %}
std::string str = magic_enum::enum_name(Color::GREEN).data();
{% endhighlight %}

2. **String to Enum Conversion**: Allows you to convert strings to enum values, if the string matches an enum value name.
{% highlight cpp %}
auto color = magic_enum::enum_cast<Color>("GREEN");
if(color.has_value()){
 // color.value() is Color::GREEN
}
{% endhighlight %}

---

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

3. **Iteration over Enum Values**: Allows you to iterate over all values of an enum.
{% highlight cpp %}
for(auto color : magic_enum::enum_values<Color>()){
 std::cout << magic_enum::enum_name(color) << '\n';
}
{% endhighlight %}

4. **Get Enum Information**: Provides functionality to get the number of values of an enum, check if a value is within the valid range, etc.
{% highlight cpp %}
constexpr std::size_t color_count = magic_enum::enum_count<Color>(); // 3
bool is_valid = magic_enum::enum_contains<Color>(2); // true
{% endhighlight %}

5. **Enum Indexing**: Allows you to obtain the index of an enum value and vice versa.
{% highlight cpp %}
auto index = magic_enum::enum_index(Color::BLUE); // two
auto color = magic_enum::enum_value<Color>(index.value()); // Color::BLUE
{% endhighlight %}

---

The `magic_enum` library is especially useful when you need introspection into enums, such as for serialization, *debug*, or code generation where you need to work with the names of *enums* values and their string representations. It simplifies the code and eliminates the need for manual maintenance of maps from `enum` to `std::string` and vice versa.

For more information, visit [repository on GitHub](https://github.com/Neargye/magic_enum).
