---
layout: post
title: "Deque or Vector, which should I choose in C++ ?"
date: 2022-02-17 12:02:23
image: '/assets/img/cppdaily/deque.jpg'
description: 'Often a small detail makes a big difference.'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

![Deque](./deque.jpg)

# Deque `std::deque`

Deque (usually pronounced as "deck") is an irregular acronym: **D**ouble **e**nded **que**ue, in Portuguese means: **Double queue**, and that's exactly what it does.

Double-ended queues are dynamically sized string containers that can be expanded or collapsed at both ends (front or back), unlike [Vector](https://terminalroot.com/two-dimensional-vectors-in-cpp/) which has a single row, in `std::deque` you can insert data either at the end, with `push_back()` equal in the vectors, or at the beginning: `front_back()` member function non-existent in vectors.

---

# Example of using `std::deque`
Suppose you have a class that stores different types of data and you want to include the elements in the order they are presented to you, and first in must be first out, with which you can use `push_back` and then `push_front`:

{% highlight cpp %}
#include <iostream>
#include <deque>

class Content {
  public:
    int xyz;
    std::string something;
    double price;
    Content(int x, const std::string &s, double p)
            : xyz(x), something(s), price(p) {
    }
};

int main( int argc , char **argv ){
  Content c1(42, "Terminal Root", 9.36);
  Content c2(24, "Marcos Oliveira", 8.04);

  std::deque<Content> con;

  con.push_back(c1);
  con.push_front(c2);

  for( auto i : con) {
    std::cout << i.xyz << ' ';
    std::cout << i.something << ' ';
    std::cout << i.price << '\n';
  }

  return 0;
}
{% endhighlight %}
> Output:
{% highlight sh %}
24 Marcos Oliveira 8.04
42 Terminal Root 9.36
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

If we replaced the `deque` with the `vector` we would need to reverse the order so that the result could be as expected, as we would only have the `push_back`:

> Same code, but using `std::vector`.
{% highlight cpp %}
#include <iostream>
#include <vector>

class Content {
  public:
    int xyz;
    std::string something;
    double price;
    Content(int x, const std::string &s, double p)
            : xyz(x), something(s), price(p) {
    }
};

int main( int argc , char **argv ){
  Content c1(42, "Terminal Root", 9.36);
  Content c2(24, "Marcos Oliveira", 8.04);

  std::vector<Content> con;

  con.push_back(c2); // We reverse the order, first we add the second so we can get the same result
  con.push_back(c1);

  for( auto i : con) {
    std::cout << i.xyz << ' ';
    std::cout << i.something << ' ';
    std::cout << i.price << '\n';
  }

  return 0;
}
{% endhighlight %}

# Differences between Deque and Vector
+ **Vector** provides insertion and deletion only in the middle and at the end. Whereas, deque provides operations for front, middle and end insertion. That is, in addition to the `push_back()` and `pop_back()` APIs as well as vector, the deque also has the `push_front()` and `pop_front()` APIs to add and delete elements from the front.
+ **Vector** provides good performance for insert and delete only at the end and poor performance for insert and delete in between.
+ Deque provides the same kind of performance as in **Vector** for insertion and deletion at the end and in the middle. Also, the deck offers good performance for front insertion and deletion as well.
+ A **Deck** storage is automatically expanded and contracted as needed. Expanding a **Deque** is cheaper than expanding a **Vector** because it doesn't involve copying existing elements to a new memory location.

---

# Which one should you choose ?
+ You must choose `std::deque` when you want to add or delete from both ends.
+ You should choose `std::vector` if insertion or deletions are needed mainly at the end.

# Where `deque` has its biggest advantages:
+ When increasing or decreasing collection from either end
+ When you are dealing with very large collection sizes.

# Where `deque` has its biggest drawbacks:
+ Some operations may cost more than `std::vector`, depending on what type of data request your program makes more often.
+ Export the data to [Linguagem C](https://terminalroot.com/tags#linguagemc) using [extern](https://terminalroot.com/definition-of-extern-in-cpp/) has incompatibility.

Want to learn C++? Then, go to: <https://terminalroot.com/tags#cpp> .

---

# Useful links
+ <https://en.cppreference.com/w/cpp/container/deque>
+ <https://www.cplusplus.com/reference/deque/deque/>

