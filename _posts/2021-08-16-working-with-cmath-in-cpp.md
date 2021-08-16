---
layout: post
title: "Working with cmath in C++"
date: 2021-08-16 19:14:48
image: '/assets/img/cpp/cmath.png'
description: 'Making Mathematical Calculations Simpler to Get Results.'
featured-img: ../cpp/cmath.png
tags:
- cpp
- cppdaily
---

![Working with cmath in C++](/assets/img/cpp/cmath.png)

The `cmath` library in [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/) is the same as math.h in [C](https://en.terminalroot.com.br/examples-of-functions-fread-fwrite-remove-and-others-in-c/) and it supports a large number of useful math functions, the complete list of all functions you can see [here](https://en.cppreference.com/w/cpp/numeric/math).

To use them, just include it in the header: `#include <cmath>`

In this *cpp::daily* of today we will see description and how to use some of them.

+ `abs( int )` - Informs the absolute number:
{% highlight cpp %}
signed int x = -936;
std::cout << "absolute value of x: " << abs( x ) << '\n';
// absolute value of x: 936
{% endhighlight %}

+ `pow( double, double )` - Is the power of two numbers:
{% highlight cpp %}
std::cout << "9 squared is: " << pow( 9, 2 ) << '\n';
// 9 squared is: 81
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

+ `sin( double * pi / 180 )` - tells the sine of an angle;
+ `cos( double * pi / 180 )` - gives the cosine of an angle;
+ `tan( double * pi / 180 )` - tells the tangent of an angle;
In this example we also include iomanip to use `std::setprecision( int )`
  - We also use parameter via command line to get results at runtime
  - We capture `argv[1]` as a string and later convert it to a long double with `std::stold( std::string )`;
  - Remembering that *PI* is an infinite number, therefore, we assign *13 significant digits (digits)* for a greater precision of the result, as only *3.14* can have less accurate results.
{% highlight bash %}
#include <iostream>
#include <cmath>
#include <iomanip>

int main( int argc, char ** argv ){

  if( argc <= 1 ){
    std::cerr << "Enter the angle. Example: " << argv[0] << " 35\n";
    return 1;
  }

  std::string str = argv[1];
  const long double PI = 3.1415926535897;
  long double angulo = std::stold( str );
  std::cout << "seno: " << std::setprecision( 3 ) << sin( angulo * PI / 180 ) << '\n';
  std::cout << "cosseno: " << std::setprecision( 3 ) << cos( angulo * PI / 180 ) << '\n';
  std::cout << "tangente: " << std::setprecision( 4 ) << tan( angulo * PI / 180 ) << '\n';

  return 0;
}
{% endhighlight %}
> Output:

![Output](/assets/img/cpp/exemplo-cmath.png)


<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

+ `sqrt( double )` - Informs the square root of a number:
  - For this example (mini program) in addition to using parameters, we also use colored outputs to make it stand out.

{% highlight cpp %}
#include <iostream>
#include <cmath>

int main( int argc, char ** argv ){

  if( argc <= 1 ){
    std::cerr << "Enter the number. Example: " << argv[0] << " 35\n";
    return 1;
  }

  std::string str = argv[1];
  long double numero = std::stold( str );

  std::cout << "The square root of \e[31;1m" << str << 
               "\e[m is: \e[33;1m" << sqrt( numero ) << "\e[m\n";

  return 0;
}
{% endhighlight %}

And among others like:

+ `ceil( T )` - Rounds a number up: `ceil( 2.1f );` // 3 ;
+ `cbrt( T )` - Informs the cubic root of a number: `cbrt( 27 );` // 3;
+ `log( double )` - Calculates the logarithm.

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


    
