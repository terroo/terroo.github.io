---
layout: post
title: "C++ - Concepts and Examples about: std::less_equal, std::variant and std::visit"
date: 2021-07-07 15:04:59
image: '/assets/img/cppdaily/cpp-daily-episode10.jpg'
description: 'New episode about STL.'
featured-img: ../cppdaily/cpp-daily-episode10.jpg
tags:
- cppdaily
- cpp
---

![C++ - Concepts and Examples about: std::less_equal, std::variant and std::visit](/assets/img/cppdaily/cpp-daily-episode10.jpg)

# `std::less_equals`
Is a function object class used to perform comparisons. It is defined as a function object class for less than equality comparison that returns a Boolean value depending on the condition.

That is, just use the same example to order in ascending order:

Example:

{% highlight cpp %}
#include <iostream>
#include <algorithm>

int main(){
    int array[] = {11, 2, 9, 17, 12, 89, 13, 2, 52, 8, 4, 79},
          length = sizeof( array ) / sizeof( array[0] );

    std::sort( array, array + length, std::less_equal<int>() );

    for ( auto nums : array ) {
      std::cout << nums << ' ';
    }
    std::cout << '\n';

    return 0;
}
{% endhighlight %}
> Output: `2 4 8 9 11 12 13 17 52 79 89`


<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Simple to understand, right?! That is, put in order of less than or equal.

---

# `std::variant` and `std::visit`
The `std::variant` is as its name assumes, the type can vary, it is not the same as using `auto`(needs initialization and cannot change type). That is, with `std::variant` you can say that the `var` variable can be: `int`, `std::string`, `char *`,...

Std::visit is the way we will handle this data delivered by std::variant, that is, when you create a function it has a return type, so std::visit is almost the same idea directly linked to polymosphism. It is often used in conjunction with [lambda expressions](https://en.terminalroot.com.br/10-examples-of-using-lambda-functions-in-cpp/).

Example: Create a variable and pass its value to a function, in this case: lambda.

{% highlight cpp %}
#include <iostream>
#include <variant> // para usar o std::variant

int main(){
  std::variant<int, std::string, char *> var;

  var = "I am string!";

  std::visit( []( auto &e ) {
      std::cout << e << '\n';
      }, var );

  var = 936;

  visit( []( auto &e ) {
      std::cout << e << '\n';
      }, var );

  var = "And now i am char pointer.";

  visit( []( auto &e ) {
      std::cout << e << '\n';
      }, var );

  return 0;
}
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

Some things to look at in the code above:

+ Need to include variant lib: `std::variant`;
+ I chose 3 different types for my `var` variable: `int`, `std::string` and `char *`;
+ Scope resolution in std::visit can be optional: now I used: `std::visit` and once only: `visit`;
+ And finally, you will only be able to compile this code with C++17.

Well, for a quick and easy-to-understand analysis this is it! If you want to go deeper I suggest these links: [std::less_equal](https://en.cppreference.com/w/cpp/utility/functional/less_equal), [std::variant](https://en.cppreference.com/w/cpp/utility/variant) and [std::visit](https://en.cppreference.com/w/cpp/utility/variant/visit) .

That's all for today, small daily doses that will always keep us in tune with [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/)!

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


    
