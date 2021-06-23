---
layout: post
title: "Swapping Values and Sorting Array Values"
date: 2021-06-23 11:48:44
image: '/assets/img/cppdaily/cpp-daily-episode9.jpg'
description: 'std::swap, std::sort and std::greater'
featured-img: ../cppdaily/cpp-daily-episode9.jpg
tags:
- cpp
- cppdaily
---

![Swapping Values and Sorting Array Values](/assets/img/cppdaily/cpp-daily-episode9.jpg)

# Swapping values
We know that if we want to swap the value of two variables, just have a temporary variable to store the value of one of the two and then assign the value of the first to the temporary, the first to the second and the second to the temporary, like this:

{% highlight cpp %}
#include <iostream>

int main( int argc , char **argv ){
  int a = 3, b = 6, tmp;
  tmp = a;
  a = b;
  b = tmp;
  std::cout << "After changing the value of 'a' now = " << a <<
               " and the value of 'b' = " << b << '\n';
  return 0;
}
{% endhighlight %}

If we want to use a function we need to pass it as a pointer or (de)reference, because we need to change the value stored in the memory address, if we don't use one of these methods, copies of the variables will be created and the values will not be changed, I particularly prefer to use ( de)reference because the implementation is simpler and the performance is the same as using pointers, so our code using function would look like this:

{% highlight cpp %}
#include <iostream>

void swap( int &a, int &b ){
  int temp = a;
  a = b;
  b = temp;
}


int main( int argc , char **argv ){
  int a = 3, b = 6, tmp;
  tmp = a; a = b; b = tmp;

  std::cout << "Before changing: " << '\n';
  std::cout << "a = " << a << " and b = " << b << '\n';

  swap( a, b );

  std::cout << "After changing: " << '\n';
  std::cout << "a = " << a << " and b = " << b << '\n';

  return 0;
}
{% endhighlight %}

But there is a limitation, as it only changes integer. So we would have to overload the swap() function multiple times for various types, and that's pretty weird.

So we could use `template`:

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight cpp %}
#include <iostream>

template<typename T>
void swap( T &a, T &b ){
  auto temp = a;
  a = b;
  b = temp;
}


int main( int argc , char **argv ){
  int a = 3, b = 6, tmp;
  tmp = a; a = b; b = tmp;
  std::string s1 = {"Hello!"}, s2 = {"Bye!"};

  std::cout << "Before changing: " << '\n';
  std::cout << "a = " << a << " and b = " << b << '\n';

  std::cout << "Before changing: " << '\n';
  std::cout << "s1 = " << s1 << " and s2 = " << s2 << '\n';

  swap( a, b );
  swap( s1, s2 );

  std::cout << "After changing: " << '\n';
  std::cout << "a = " << a << " and b = " << b << '\n';

  std::cout << "After changing: " << '\n';
  std::cout << "s1 = " << s1 << " and s2 = " << s2 << '\n';

  return 0;
}
{% endhighlight %}

But we don't need to create this function whenever we want to do this operation, the [STL](https://en.wikipedia.org/wiki/Standard_Template_Library) already has this feature, just use it: `std::swap`:

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
#include <iostream>

int main( int argc , char **argv ){
  int a = 3, b = 6, tmp;
  tmp = a; a = b; b = tmp;
  std::string s1 = {"Hello!"}, s2 = {"Bye!"};

  std::cout << "Before changing: " << '\n';
  std::cout << "a = " << a << " and b = " << b << '\n';

  std::cout << "Before changing: " << '\n';
  std::cout << "s1 = " << s1 << " and s2 = " << s2 << '\n';

  std::swap( a, b );
  std::swap( s1, s2 );

  std::cout << "After changing: " << '\n';
  std::cout << "a = " << a << " and b = " << b << '\n';

  std::cout << "After changing: " << '\n';
  std::cout << "s1 = " << s1 << " and s2 = " << s2 << '\n';

  return 0;
}
{% endhighlight %}

Always check if there is already a function you want in STL, it is more professional to use it!

# Sort values from an array
Suppose you have an array and you want to print the elements in descending order of value, for that you just store the initial value in a variable, compare and do a `std::swap`, then you would do like this in a nested for loop:

{% highlight cpp %}
#include <iostream>
 
int main(){
  int array[]{11, 2, 9, 17, 12, 89, 13, 52, 8, 4, 79},
      length = sizeof( array ) / sizeof( array[0] ),
      greater; // variable that will store the value for comparison
 
 // the array size needs to be -1 so we don't have the famous 'segment failure'
  for ( int start = 0; start < length - 1; ++start ){
    greater = start; // we initially set the value 0
 
    for (int current = start + 1; current < length; ++current){
      if ( array[ current ] > array[ greater ] ){ // here is the initial magic to compare 
        greater = current;
      }
    }
 
    std::swap(array[start], array[greater]); // replacing the array position by the largest
  }
 
 // We print the array in descending form
  for (int index = 0; index < length; ++index){
    std::cout << array[ index ] << ' ';
  }
 
  std::cout << '\n';
 
  return 0;
}
{% endhighlight %}
> Output: `89 79 52 17 13 12 11 9 8 4 2`

If you want otherwise, just change the greater-than sign (>) by the less-than sign (<) in the comparison condition in:

Change this:

{% highlight cpp %}
if ( array[ current ] > array[ greater ] ){
{% endhighlight %}

For this:

{% highlight cpp %}
if ( array[ current ] < array[ greater ] ){
{% endhighlight %}

And the values will be printed in ascending order:
> Output: `2 4 8 9 11 12 13 17 52 79 89`

Well, although this code is good, the truth is that we can improve using the `std::greater` and `std::sort` of the STL.
+ `std::sort` is a function that sorts the values of an array.
+ `std::greater` is a function object that returns the largest value in a comparison.

By default the `sort()` function sorts the values in ascending order. So if we want to transform the code above using `std::sort` it would be:
> Need to include the `#include <algorithm>`

{% highlight cpp %}
#include <iostream>
#include <algorithm>

int main(){
    int array[] = {11, 2, 9, 17, 12, 89, 13, 52, 8, 4, 79},
          length = sizeof( array ) / sizeof( array[0] );
    
    std::sort( array, array + length);

    for ( auto nums : array ) {
      std::cout << nums << ' ';
    }
    std::cout << '\n';

    return 0;
}
{% endhighlight %}
> Output: `2 4 8 9 11 12 13 17 52 79 89`

The `std::sort` is overloaded, so if we want to print in descending order we need to use the third parameter with `std::greater` it would be:

{% highlight cpp %}
#include <iostream>
#include <algorithm>

int main(){
    int array[] = {11, 2, 9, 17, 12, 89, 13, 52, 8, 4, 79},
          length = sizeof( array ) / sizeof( array[0] );

    std::sort( array, array + length, std::greater<int>() );

    for ( auto nums : array ) {
      std::cout << nums << ' ';
    }
    std::cout << '\n';

    return 0;
}
{% endhighlight %}
> Output: `89 79 52 17 13 12 11 9 8 4 2`

Simple and like a boss!

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

