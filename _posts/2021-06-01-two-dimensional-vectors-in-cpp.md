---
layout: post
title: "Two-dimensional vectors in C++"
date: 2021-06-01 21:16:37
image: '/assets/img/cppdaily/cpp-daily-episode5.jpg'
description: 'Vector Vector .'
featured-img: ../cppdaily/cpp-daily-episode5.jpg
tags:
- cpp
- cppdaily
---

![Two-dimensional vectors in C++](/assets/img/cppdaily/cpp-daily-episode5.jpg)

We know that there are **two-dimensional arrays**, but there are also **two-dimensional vectors** and that's what we're going to talk about today's **cpp::daily**.

Vector vector is a two-dimensional vector with a variable number of lines, where each line is a vector. Each array index stores an array that can be traversed and accessed using iterators. It is similar to an array of vectors, but with dynamic properties.

In the future we will have content about libraries that make use of advanced concepts of Mathematics Arrays and Determinants that are generally used to map images, so let's see how we write a two-dimensional vector now.

When you want to create a multidimensional array you use it like this, for example:

{% highlight cpp %}
int array[3][5] = {  { 11, 2, 9, 27, 89 },
                     { 20, 13, 52 },
                     { 8, 4, 79, 4 }
                  };
{% endhighlight %}

So if you want to print the number 52, it would be: `std::cout << array[1][2]` .

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Two-dimensional vectors work in much the same way only the performance is superior. The same code above using vectors would be:

> `#include <vector>`

{% highlight cpp %}
std::vector<std::vector<int>> vec {  { 11, 2, 9, 27, 89 },
                                      { 20, 13, 52 },
                                      { 8, 4, 79, 4 }
                                  };
{% endhighlight %}

This is a two-dimensional vector, so if you want to print the number 52 as well, it would be:

{% highlight cpp %}
std::cout << vec[1][2] << '\n';
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

If you want to print all the values of this vector you can create a nested loop, for example:

{% highlight cpp %}
for ( int i = 0; i < vec.size(); ++i ) {
 for (int j = 0;  j < vec[i].size(); ++j) {
   std::cout << vec[i][j] << ' ';
 }
 std::cout << '\n';
}
{% endhighlight %}

The output will be:

{% highlight bash %}
11 2 9 27 89
20 13 52
8 4 79 4 
{% endhighlight %}

Displaying each position of the elements:

{% highlight cpp %}
for ( int i = 0; i < vec.size(); ++i ) {
  for (int j = 0;  j < vec[i].size(); ++j) {
    std::cout << "vec[" << i << "][" << j << "]: " << vec[i][j];
    if( j != 3 ){
      std::cout << ", ";
    }
  }
  std::cout << '\n';
}
{% endhighlight %}

What if you want to add one more coordinate to this vector? Just use `push_back()`, example:
> Before the elements are printed by the for loop.

{% highlight cpp %}
vec.push_back( { 22, 33, 44 } );
{% endhighlight %}

And if you want to remove the last one added or not, just use `pop_back()`:

{% highlight cpp %}
vec.pop_back();
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

Final code:

{% highlight cpp %}
#include <iostream>
#include <vector>

int main( int argc, char ** argv ){
  std::vector<std::vector<int>> vec{  { 11, 2, 9, 27, 89 },
                                      { 20, 13, 52 },
                                      { 8, 4, 79, 4 }
                                   };

  vec.push_back( { 22, 33, 44 } );
  vec.pop_back();

  for ( int i = 0; i < vec.size(); ++i ) {
    for (int j = 0;  j < vec[i].size(); ++j) {
      std::cout << "vec[" << i << "][" << j << "]: " << vec[i][j];
      if( j != 3 ){
        std::cout << ", ";
      }
    }
    std::cout << '\n';
  }

  return 0;
}
{% endhighlight %}


