---
layout: post
title: "Using the iomanip C++ library"
date: 2021-08-16 19:38:53
image: '/assets/img/cpp/iomanip.png'
description: 'Provides capabilities for handling output formatting'
featured-img: ../cpp/iomanip.png
tags:
- cpp
- cppdaily
---

![Using the iomanip C++ library](/assets/img/cpp/iomanip.png)

The <iomanip> library provides features for handling output formatting, such as the base used when formatting integers and the precision of floating point values .

It has the following functions:

+ `setiosflags` - Defines flags format
+ `resetiosflags` - Resets flags format
+ `setbase` - Sets the base of the flags
+ `setfill` - Defines the filling of characters
+ `setprecision` - Sets the precision of decimals
+ `setw` - Sets the width of a field
+ `get_money` - Gets the monetary value
+ `put_money` - Insert the monetary value
+ `get_time` - Get the time and date
+ `put_time` - Get the time and date

## Some examples
### `setfill` and `setw`
Fill with a certain character on the left side of the number(int, float, double,…)
{% highlight cpp %}
#include <iostream>
#include <iomanip>

int main(){
  std::cout << std::setfill (' ') << std::setw( 10 );
  std::cout << 3.69f << '\n';
  return 0;
}
{% endhighlight %}

> Filled with 6 blank spaces(10 minus the number of characters), so the output will be: `3.69`. If we change `std::setfill (' ')` to `std::setfill ('-')` the output will be: **——3.69** .

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

### `setprecision`
Defines how many digits you want to appear if there is no more after the comma ( in this case, point `.` ), it will fill with `0` zeros if we use `std::fixed` .
{% highlight cpp %}
#include <iostream>
#include <iomanip>

int main(){
  double pi = 3.14159;
  std::cout << std::setprecision( 3 ) << pi << '\n';
  return 0;
}
{% endhighlight %}
> Output: `3.14`

{% highlight cpp %}
#include <iostream>
#include <iomanip>

int main(){
  double pi = 3.14159;
  std::cout << std::setprecision( 4 ) << pi << '\n';
  return 0;
}
{% endhighlight %}
> Output: `3.142` because the next significant number is equal to or greater than 5, so it approximates the previous one.

And if you change it to `std::setprecision( 9 )`, the output will be: `3.14159` will not complete with zeros, but using `std::fixed`
{% highlight cpp %}
#include <iostream>
#include <iomanip>

int main(){
  double pi = 3.14159;
  std::cout << std::fixed << std::setprecision( 9 ) << pi << '\n';
  return 0;
}
{% endhighlight %}
> The output will be: `3.141590000`

### `get_money` and `put_money`


<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Informs the value in integer, in other words transforms: `float`, `double`,… in integer. They are useful for use with data entry. Example:

{% highlight cpp %}
#include <iomanip>
#include <iostream>

int main() {
  long double preco;
  std::cout << "Enter the price: ";
  std::cin >> std::get_money( preco );

  if( std::cin.fail() ){
    std::cerr << "Failed to read price." << '\n';
    return 1;
  }else{
    std::cout << "The price is: " << std::put_money( preco ) << '\n';
  }

  return 0;
}
{% endhighlight %}

### `get_time`
Formats the time entry, example:
{% highlight cpp %}
#include <iostream> 
#include <iomanip> 
#include <ctime> // struct std::tm

int main(){
  struct std::tm dthr;
  std::cout << "Enter the time: ";
  std::cin >> std::get_time(&dthr,"%R");   //extract the hours in 24H format 

  std::cout << "It's " << 
               dthr.tm_hour << " hours and " 
               << dthr.tm_min << " minutes\n";

  return 0;
}
{% endhighlight %}
> Output:
{% highlight bash %}
Enter the time: 12:23
It's 12 hours and 23 minutes
{% endhighlight %}

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


