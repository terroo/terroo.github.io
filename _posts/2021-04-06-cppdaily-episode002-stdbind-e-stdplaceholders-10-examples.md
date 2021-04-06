---
layout: post
title: "cpp::daily #Episode002 - std::bind e std::placeholders, 10 examples!"
date: 2021-04-06 10:00:59
image: '/assets/img/cppdaily/cpp-daily-episode1.jpg'
description: 'std::bind and std::placeholders, 10 examples!'
featured-img: ../cppdaily/cpp-daily-episode1.jpg
tags:
- cppdaily
- cpp
---

![cpp::daily #Episode002 - std::bind e std::placeholders, 10 examples!](/assets/img/cppdaily/cpp-daily-episode1.jpg)

We often need to implement a function on demand, that is, pass parameters according to the needs of our application. And `std::placeholders` are for that.

The `std::placeholders` namespace works together with the `std::bind` function and we need to include the `<functional>` header in order to use it. They contain placeholder objects [`_1, ..._ N`] where N is a maximum number defined by the implementation.

The std::bind function template returns a function object based on fn, but with its arguments linked to args.

When used as an argument in a `std::bind` expression, placeholder objects are stored in the generated function object and when that function object is called with unbound arguments, each `_N` placeholder is replaced with the corresponding umpteenth unbound argument .

Connections characteristics and placeholders

+ Each placeholder is declared as: `extern / * not specified * / _1; // up to c ++ 17`;
+ Implementations are encouraged to declare placeholders as: `inline constexpr / * unspecified * / _1`;
+ Although I declare them by: `extern / * unspecified * / _1`; , is still allowed by the standard;
+ The types of placeholder objects are DefaultConstructible and CopyConstructible
+ Your standard copy/move builders do not throw exceptions;
+ For any `_N` placeholder, type `std::is_placeholder<decltype (_N)>`;
+ It is defined and derived from `std::integral_constant<int, N>`.

# EXAMPLES
## 01. Using the basics with parameter `_1`

Given the function `sum_sub(int, int, int)` which returns the sum and subtraction of the parameters, respectively, if we want a parameter to be dynamic:

+ Third dynamic parameter
{% highlight cpp %}
#include <iostream>
#include <functional> // para std::placeholders e std::bind

using namespace std::placeholders;

int sum_sub( int x, int y, int z ){
  return x + y - z;
}

int main( int argc , char **argv ){
  // replace  z
  auto fn = std::bind( sum_sub, 9, 1, _1 );
  std::cout << fn( 2 ) << '\n'; // equal sum_sub( 9, 1, 2 ) = 8
  std::cout << fn( 3 ) << '\n'; // equal sum_sub( 9, 1, 3 ) = 7

  return 0;
}
{% endhighlight %}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## 02. Second dynamic parameter
> replace `y`

{% highlight cpp %}
auto f2 = std::bind( sum_sub, 9, _1, 1 );
std::cout << f2( 2 ) << '\n'; // equal sum_sub( 9, 2, 1 ) = 10
std::cout << f2( 3 ) << '\n'; // equal sum_sub( 9, 3, 1 ) = 11
{% endhighlight %}

## 03. First dynamic parameter
> replace `x`

{% highlight cpp %}
auto f3 = std::bind( sum_sub, _1, 9, 1 );
std::cout << f3( 2 ) << '\n'; // equal sum_sub( 2, 9, 1 ) = 10
std::cout << f3( 3 ) << '\n'; // equal sum_sub( 3, 9, 2 ) = 11
{% endhighlight %}

## 04. Substituting 2 parameters
> Replaces `y` and `z`, respectively `_1` and `_2`. As we are using parameter `_2`, we need to pass 2 parameters, otherwise it generates an error when compiling.

{% highlight cpp %}
auto f4 = std::bind( sum_sub, 1, _1, _2 );
std::cout << f4( 1, 2 ) << '\n'; // equal sum_sub( 1, 1, 2 ) = 1 + 1 - 2 = 0
std::cout << f4( 3, 10 ) << '\n'; // equal sum_sub( 1, 3, 10 ) = 1 + 3 - 10 = -6
{% endhighlight %}

## 05. Substituting 2 parameters with change in order
> Replaces `z` and `y`, respectively `_2` and `_1`

{% highlight cpp %}
auto f5 = std::bind( sum_sub, 1, _2, _1 );
std::cout << f5( 1, 2 ) << '\n'; // equal sum_sub( 1, 2, 1 ) = 1 + 2 - 1 = 2
std::cout << f5( 3, 10 ) << '\n'; // equal sum_sub( 1, 10, 3 ) = 1 + 10 - 3 = 8
{% endhighlight %}

## 06. Substituting 2 parameters, but changing only the second
> `_2 = y`, `x = 1`, `z = 3`. You have to pass 2 parameters (otherwise, don't compile), but the first one will be ignored!

{% highlight cpp %}
auto f6 = std::bind( sum_sub, 1, _2, 3 );
//                             |      |_________________________________
//                             |                                       |
//                             |__________________________________     |
//                                                               |     |
//            ignored                                            |     | 
//               ↓                                               |     |
std::cout << f6( 897, 0/* _2 */ ) << '\n'; //     equal sum_sub( 1, 0, 3 ) = 1 + 0 - 3 = -2

//            ignored   
//               ↓
std::cout << f6( 800, 2/* _2 */ ) << '\n';// equal sum_sub( 1, 2, 0 ) = 1 + 2 - 0 = 2
{% endhighlight %}

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## 07. Replacing only the 3rd parameter
> To understand once and for all! `x = _3`, you need to enter 3 parameters (otherwise it does not compile), because you are using `_3`, but the first two will be ignored.

{% highlight cpp %}
auto f7 = std::bind( sum_sub, _3, 1, 3 );
std::cout << f7( 0, 0, 30 ) << '\n'; // z = 8 , equal sum_sub( 1, 3, 8 ) = 30 + 1 - 3 = 28
{% endhighlight %}

## 08. Using alias
> New name function: `show_name( std::string & )`

{% highlight cpp %}
#include <iostream>
#include <functional>

namespace pl = std::placeholders;

void show_name( std::string &name ){
  std::cout << name << '\n';
}

int main( int argc , char **argv ){

  std::string name("Hello placeholders");
  auto fn1 = std::bind( show_name, pl::_1 );
  fn1( name );

  return 0;
}
{% endhighlight %}

## 09. Without using the `auto`
{% highlight cpp %}
std::function<void( std::string & )> fn2 = std::bind( show_name , pl::_1 );
name = "Like, a boss!"; // declared and initialized in the previous example!
fn2( name );
{% endhighlight %}

## 10. Without indicating `namespace`
{% highlight cpp %}
#include <iostream>
#include <functional>

int add3(int x1, int x2, int x3) {
  return x1 + x2 + x3;
}

int main( int argc , char **argv ){
  auto fadd3 = std::bind(add3, 11, std::placeholders::_1, std::placeholders::_2);
  std::cout << fadd3(22, 33) << '\n';
  return 0;
}
{% endhighlight %}
> Trivia: If you use pure `std::bind`, it may give you an incorrect result. Another thing is also if you use lib boost bind: `boost::bind` is not compatible with `std::bind`.

<!-- RETANGULO LARGO 2 -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="8549252987"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Useful links
+ <https://en.cppreference.com/w/cpp/utility/functional/placeholders>
+ <https://stackoverflow.com/questions/22422147/why-is-stdbind-not-working-without-placeholders-in-this-example-member-functi>
+ <http://gcc.gnu.org/onlinedocs/gcc-4.6.2/libstdc++/api/a01150.html>


