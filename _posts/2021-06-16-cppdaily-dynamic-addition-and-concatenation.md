---
layout: post
title: "cpp::daily - Dynamic Addition and Concatenation"
date: 2021-06-16 14:36:00
image: '/assets/img/cppdaily/cpp-daily-episode7.jpg'
description: 'std::plus and std::transform'
featured-img: ../cppdaily/cpp-daily-episode7.jpg
tags:
- cppdaily
- cpp
---

![cpp::daily - Dynamic Addition and Concatenation](/assets/img/cppdaily/cpp-daily-episode7.jpg)

# `std::plus`
`std::plus<data type or nothing>` - it's a Function object to perform the addition. The object class whose call returns the result of adding its two arguments (as returned by the `+` operator).
+ Example 1
Sum `x + y`

{% highlight cpp %}
#include <iostream>

int main(){
  int x = 3, y = 6;
  std::cout << std::plus<int>{}( x, y ) << '\n'; // 9
  return 0;
}
{% endhighlight %}

+ Example 2
concatenate two strings

{% highlight cpp %}
std::string hello = "Hello, ", world = "World!";
std::cout << std::plus<std::string>{}( hello, world ) << '\n';
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

+ Example 3
Concatenate different types. Note that in this case we do not inform the types for it.

{% highlight cpp %}
std::string ter = "Terminal ";
char * roo = "Root";
std::cout << std::plus<>{}( ter, roo ) << '\n'; // Terminal Root
{% endhighlight %}

Ahhh! But is it just for adding or concatenating? No, it is used when you need to get dynamic results and usually in conjunction with `std::transform`.

# `std::transform`
> **std::transform( input1, last_input1, input2, operation );**

Applies the given function to a range and stores the result in another range, keeping the order of the original elements and starting from the first.

Suppose you need to add all the elements of array1 with array2 in the generic way you would:

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight cpp %}
int array1[] {1, 2, 3},
    array2[] {4, 5, 6},
    total_elem = sizeof(array1) / sizeof(array1[0]),
    x[ total_elem ];

for (int i = 0; i < total_elem; i++) {
x[i] = array1[i] + array2[i];
}

for( auto y : x ){
  std::cout << y << ' ';
} // 5 7 9

std::cout << '\n';
{% endhighlight %}

Now optimizing your code with `std::transform` would look like: The `std::plus` as we are inside the `std::transform` we must not inform the operator: `{}`

{% highlight cpp %}
#include <iostream>
#include <algorithm> // std::transform

int main(){
  int array1[] {1, 2, 3},
      array2[] {4, 5, 6},
      total_elem = sizeof(array1) / sizeof(array1[0]),
      x[ total_elem ];

  for (int i = 0; i < total_elem; i++) {
  x[i] = array1[i] + array2[i]; 
  } 

  std::transform( array1, array1 + total_elem, array2, x, std::plus<int>() );

  for( auto y : x ){
    std::cout << y << ' ';
  } // 5 7 9

  std::cout << '\n';
  return 0;
}
{% endhighlight %}

# Like a Boss!


    
