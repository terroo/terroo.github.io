---
layout: post
title: "cpp::daily - std::set, std::multiset e std::move"
date: 2021-08-11 17:17:26
image: '/assets/img/cppdaily/cpp-daily-episode19.jpg'
description: 'Epidose 19'
featured-img: ../cppdaily/cpp-daily-episode19.jpg
tags:
- cpp
- cppdaily
---

![cpp::daily - std::set, std::multiset e std::move](/assets/img/cppdaily/cpp-daily-episode19.jpg)

# `std::set`
It is a kind of associative container where each element must be unique. The element's value cannot be modified once it has been added to the set, although it is possible to remove and add the modified value from that element.

Example:

{% highlight cpp %}
#include <iostream>
#include <set>

int main(){
  std::set<int> s;

  // adding elements to the set
  s.insert( 11 );
  s.insert( 13 );
  s.insert( 17 );
  s.insert( 8 );

  // Prints all elements of the set
  // Will print from largest to smallest by default
  for( auto z : s ){
    std::cout << z << ' ';
  }
  std::cout << '\n';

  // remove elements from the set 
  s.erase( 8 );
  s.erase( 13 );

  // Prints all elements of the set after removing some
  for( auto z : s ){
    std::cout << z << ' ';
  }

  std::cout << '\n';
  return 0;
}
{% endhighlight %}

---

# `std::multiset`
It is similar to `std::set`, but stores duplicate elements, eg:
> With std::set if we double the numbers like this:

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
#include <set>

int main(){
  std::set<int> s;

  s.insert( 11 );
  s.insert( 13 );
  s.insert( 17 );
  s.insert( 8 );
  s.insert( 11 );
  s.insert( 13 );
  s.insert( 17 );
  s.insert( 8 );


  for( auto z : s ){
    std::cout << z << ' ';
  }
  std::cout << '\n';

  return 0;
}
{% endhighlight %}
> The output will be: `8 11 13 17` , that is, it will not be duplicated.

But if we use std::multiset, like this:

{% highlight cpp %}
#include <iostream>
#include <set>

int main(){
  std::multiset<int> m;

  m.insert( 11 );
  m.insert( 13 );
  m.insert( 17 );
  m.insert( 8 );
  m.insert( 11 );
  m.insert( 13 );
  m.insert( 17 );
  m.insert( 8 );


  for( auto z : m ){
    std::cout << z << ' ';
  }
  std::cout << '\n';

  return 0;
}
{% endhighlight %}

---

# `std::move`
To understand `std::move` let's remember that `cpp::daily` we [swapped variable values with](https://en.terminalroot.com.br/swapping-values-and-sorting-array-values/) `std::swap` .

Actually that was possible using a temporary variable, so it had a memory copy of the value. Already with `std::move` the exchange is really done without copying, example based on that:

{% highlight cpp %}
T tmp(std::move(a));
a = std::move(b);   
b = std::move(tmp);
{% endhighlight %}
This performs better than that example.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

That's all for today, small daily doses that will always keep us in tune with C++!


    
