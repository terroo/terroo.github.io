---
layout: post
title: "How to use Unions in C++ ?"
date: 2022-02-08 10:40:46
image: '/assets/img/cpp/unions-vs-structs.jpg'
description: 'Save memory space!'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

# What is a Union?
A `union` is similar to a `struct`, the difference is that Union reuses the space for the next type given inside it, whereas Struct adds it to a new block.

Declaration of a Union:
{% highlight cpp %}
union Name {
  // contents
};
{% endhighlight %}

It is also similar to classes, but apart from the reuse difference, like Structs, Union doesn't need `public` to access data, in classes if you don't inform it will be `private` by default.

---

# Examples
Let's suppose you have this code that stores data for a certain product:
{% highlight cpp %}
#include <iostream>

union Product {
  int id;
  double value;
};

int main( int argc , char **argv ){
  Product p;
  p.id = 9;
  std::cout << p.id << '\n';
  return 0;
}
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

If you compile the code above, notice that the output will be just the `id` we assigned: `9` .

But now let's also assign data to the `value` and print:
{% highlight cpp %}
#include <iostream>

union Product {
  int id;
  double value;
};

int main( int argc , char **argv ){
  Product p;
  p.id = 9;
  p.value = 1,542;
  std::cout << p.id << '\n';
  std::cout << p.value << '\n';
  return 0;
}
{% endhighlight %}
> Output:
{% highlight sh %}
824633721
1.542
{% endhighlight %}

Note that the `value` output was correct, but the `id` turned into a strange number.

Also note that if you use this same code with `struct` this will not happen, for example:
{% highlight cpp %}
#include <iostream>

struct Product { // change to struct
  int id;
  double value;
};

int main( int argc , char **argv ){
  Product p;
  p.id = 9;
  p.value = 1,542;
  std::cout << p.id << '\n';
  std::cout << p.value << '\n';
  return 0;
}
{% endhighlight %}
> Output:
{% highlight sh %}
9
1.542
{% endhighlight %}

Why ???

As I said, `union` reuses the space, that is, the `int` (4 bytes) is smaller than the `double` (8 bytes), so that reused space becomes a *Memory Garbage* .

Let's illustrate for didactic purposes only:

---

In a `union` the `int` space is reused and it writes the `double`:
![Union](/assets/img/cpp/union.jpg)

---

In a `struct` it keeps that `int` space and creates a new one for the `double`
![Struct](/assets/img/cpp/struct.jpg)

---

If you reverse the definition orders this will not happen because `int` is smaller than `double` .

Unions were created precisely to save memory space, but programmers have gotten a *writing addiction* and more commonly use Structs.

However, in code from some programmers who care a lot about optimization you will find more Unions than Structs .


<!-- RECTANGLE 2 - OnParagragraph -->
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

---

# Useful links
+ <https://en.cppreference.com/w/cpp/language/union>
+ <https://docs.microsoft.com/en-us/cpp/cpp/unions?view=msvc-170>
+ <https://stackoverflow.com/questions/2310483/purpose-of-unions-in-c-and-c>
