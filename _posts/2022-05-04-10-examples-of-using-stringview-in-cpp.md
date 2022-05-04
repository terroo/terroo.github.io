---
layout: post
title: "10 Examples of using string_view in C++"
date: 2022-05-04 11:28:27
image: '/assets/img/cppdaily/string_view.jpg'
description: 'And 2 more code examples ready as implementation.'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

`std::string_view` is a class named `basic_string_view` that uses `char` and `std::char_traits` , both as a template.

It is only available from C++17 and needs to include the `string_view` header. Can be implemented also for accented letters(`std::wstring_view`), unicode 8(`std::u8string_view`), 16(`std::u16string_view`, C++20) and 32(`std::u32string_view` ) .

It pretty much creates an array of characters for a string.
> Each character is an index:

| T | e | r | m | i | n | a | l |   | R | o | o | t |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |


It is widely used in code that parses.

Let's see 10 examples of using it!

---

# 01. Basic usage, declaring, initializing and printing a `string_view`
{% highlight cpp %}
std::string_view sv {"Terminal Root"};
std::cout << sv << '\n';
{% endhighlight %}

# 02. Print only the 4th (fourth character)
{% highlight cpp %}
std::cout << sv[3] << '\n'; // m
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

# 03. Get the size of the `string_view`
{% highlight cpp %}
std::cout << sv.size() << '\n'; // 13
{% endhighlight %}

#04. Print the last character
{% highlight cpp %}
std::cout << sv.back() << '\n'; // t
{% endhighlight %}

# 05. Know the position of the character `'i'`
{% highlight cpp %}
std::cout << sv.find("i") << '\n'; // 4
{% endhighlight %}

#06. Knowing the back to front position
{% highlight cpp %}
std::cout << sv.rfind("o") << '\n'; // 11
{% endhighlight %}
> It would be the 1st 'o' backwards, the `find()` would be 10 . Another note is if you enter a character that doesn't exist, it will give *garbage*(`string::npos`, a *weird* number).

# 07. Check for `'X'` character
{% highlight cpp %}
std::cout << sv.find("X") << '\n'; // garbage
{% endhighlight %}

# 08. Print 9th to 13th character
{% highlight cpp %}
std::cout << sv.substr(9, 13) << '\n'; // root
{% endhighlight %}

# 09. Remove the last 4 characters
{% highlight cpp %}
sv.remove_suffix(4);
std::cout << sv << '\n'; // Terminal
{% endhighlight %}

#10. Remove the first 8 characters
{% highlight cpp %}
sv.remove_prefix(8);
std::cout << sv << '\n'; // 'Root'
{% endhighlight %}


<!-- MINI ADS -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# bonus
You can also use `string_view_literals` by adding the term `sv` to the end, example code with *literal*:
{% highlight cpp %}
#include <iostream>
#include <string_view>

using namespace std::string_view_literals;

int main(){
  auto literal = "Terminal Root"sv;
  std::cout << literal << '\n';
  return 0;
}
{% endhighlight %}

---

Example of a ready code:

{% highlight cpp %}
#include <iostream>
#include <string_view>
 
int main() {
    constexpr std::string_view unicode[] {
        "▀▄─", "▄▀─", "▀─▄", "▄─▀"
    };
 
    for (int y{}, p{}; y != 6; ++y, p = ((p + 1) % 4)) {
        for (int x{}; x != 16; ++x)
            std::cout << unicode[p];
        std::cout << '\n';
    }
}
{% endhighlight %}
> Saída:

{% highlight sh %}
▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─
▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─
▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄
▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀
▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─▀▄─
▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─▄▀─
{% endhighlight %}

Some other functions are only available in **C++20** or **C++23**, examples: `contains()`, `starts_with()` and others.

For more information visit: <https://en.cppreference.com/w/cpp/string/basic_string_view> .

