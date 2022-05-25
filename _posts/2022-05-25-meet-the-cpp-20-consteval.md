---
layout: post
title: "Meet the C++ 20 consteval"
date: 2022-05-25 13:12:59
image: '/assets/img/cppdaily/consteval.jpg'
description: 'And a short introduction about constexpr .'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

`constexpr` is similar to the `const` specifier, the difference is that it is applicable to more types, eg also *static member functions* and so on.

Of course, like `const` and `auto`, it requires initialization at declaration time. In summary is:

> The calculation is done at compile time gaining a much higher performance than if you didn't use `constexpr`.
Example of use:

{% highlight cpp %}
constexpr int x = (9 + 3) / ( 2 * 2 ) - 1;
{% endhighlight %}

To get runtime data you can use the command: [time](https://manpages.debian.org/stretch/time/time.1.en.html).

For more information on `constexpr` see [here](https://en.cppreference.com/w/cpp/language/constexpr) .
<!-- More at: https://stackoverflow.com/questions/14116003/whats-the-difference-between-constexpr-and-const -->


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

# What about `consteval` ?
`consteval` can be summarized as an *improvement* of `constexpr` . Conceptually speaking, according to [cppreference](https://en.cppreference.com/w/cpp/language/consteval) , it is a specifier that declares a function or model to be an **immediate function** .

This above sounded a bit difficult to understand, but in short it's that the documentation refers to the order of execution.

`constexpr` left "*doubts*" as to what the result would be after **multiple uses for functions**, programmers had that feeling that it ran at runtime, so `consteval` was implemented from [ C++20](https://en.wikipedia.org/wiki/C++20) to resolve these *discrepancies*.

Below are some examples of using the consteval
> Note that it is **used for FUNCTIONS** and **only compiles with `-std=c++20`** or higher, let your LSP know! 😃

{% highlight cpp %}
#include <iostream>

consteval unsigned ret_calc(int first_num){
  return (first_num + 3) / ( 2 * 2 ) - 1;
}

consteval int make_double(unsigned x){
  return 2 * x;
}

consteval auto self_mult(auto num){
  return num * num;
}

consteval static int increment(double x){
  return ++x;
}

int main(){
  // consteval int y = (9 + 3) / ( 2 * 2 ) - 1; // unlike constexpr, this doesn't compile
  std::cout << ret_calc(9) << '\n';
  std::cout << make_double(3) << '\n';
  std::cout << self_mult(39.6f) << '\n';
  std::cout << increment(6) << '\n';
}
{% endhighlight %}

---

# Useful links:
+ <https://en.cppreference.com/w/cpp/language/consteval>
+ <https://stackoverflow.com/questions/53347298/what-is-consteval>
+ <https://en.cppreference.com/w/cpp/algorithm>

