---
layout: post
title: "How are the && and & parameters different in C++"
date: 2021-07-25 23:21:38
image: '/assets/img/cpp/ee-comercial-cpp.png'
description: 'Implemented from C++11'
featured-img: ../cpp/ee-comercial-cpp.png
tags:
- cpp
- cppdaily
---

![How are the && and & parameters different in C++](/assets/img/cpp/ee-comercial-cpp.png)

We already know that the & parameter refers to the reference in [C](https://en.terminalroot.com.br/why-is-the-c-programming-language-still-on-the-rise/)/[C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/) , but as of **C++11** we can find the `&&` and it refers to the value on the other side of the declaration.

More objectively we can say, for example, that:
{% highlight cpp %}
&& = &
{% endhighlight %}

Equals:
{% highlight cpp %}
int x = 3;
{% endhighlight %}
> Of course, values and types are examples.


<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

But in summary, one is the `lvalue` and the other is the `rvalue` .

In **C++03** (and before), temps (called "rvalues", as they often lie on the right side of an assignment) were designed to never be modifiable - just as in **C** - and were considered indistinguishable from `const types T&`; , however, in some cases the temps may have been modified, a behavior that was even considered a useful loophole.

**C++11** adds a new *non-const* reference type called the rvalue reference, identified by `T&&`. Refers to temporaries that can be modified after they are initialized, for the purpose of allowing “semantic move”.

# Usage examples
> Using `&&` as a parameter, let's look at the output:

{% highlight cpp %}
#include <iostream>

void the_int( const int * && i ){
  std::cout << &i << '\n'; // address
  std::cout << i << '\n'; // copy
  std::cout << *i << '\n'; // value
}

int main(){
  int &&x = 3;
  the_int( &x );
  return 0;
}
{% endhighlight %}
That is, a pointer to an rvalue value, but the pointer to itself.

### One more example below using `string`

{% highlight cpp %}
#include <iostream>

void the_string( const std::string * && ok ){
  std::cout << "Ok: " << *ok << '\n';
}

int main(){
  std::string && ok = "More ok!";
  the_string( &ok );
  return 0;
}
{% endhighlight %}
Of course this output will only be the value


<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

I personally don't see [any use](https://stackoverflow.com/questions/8424064/what-does-mean-with-a-parameter-type-in-c) for this in the code I create, but this article is for us to know what it means when we see a double ampersand in some code and understand how they are used and what values are returned.

And in summary, as there is in the [description of this syntax](https://en.wikipedia.org/wiki/C%2B%2B11#Rvalue_references_and_move_constructors) , C++11 managed to solve the problem of unnecessary copies of C++03 and earlier, but it should be used [with care](https://stackoverflow.com/questions/5481539/what-does-t-double-ampersand-mean-in-c11) .

That's all for today, small daily doses that will always keep us in tune with **C++**!

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


