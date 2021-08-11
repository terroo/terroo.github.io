---
layout: post
title: "Definition of decltype in C++"
date: 2021-08-11 17:12:06
image: '/assets/img/cpp/decltype-cpp.png'
description: 'Automatic type according to the return of the used function.'
featured-img: ../cpp/decltype-cpp.png
tags:
- cpp
- cppdaily
---

![Definition of decltype in C++](/assets/img/cpp/decltype-cpp.png)

`decltype` is a keyword used to query the type of an expression. Introduced in C++ 11, its main use is in generic programming, where it is often difficult, if not impossible, to express types that depend on template parameters.

As generic programming techniques became increasingly popular throughout the 1990s, the need for a type deduction mechanism was recognized. Many compiler vendors have implemented their own versions of the operator, commonly called `typeof`, and some portable implementations with limited functionality, based on existing language features, have been developed.

In 2002, Bjarne Stroustrup proposed that a standardized version of the operator be added to the [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/) language and suggested the name “`decltype`” to reflect that the operator would produce the “declared type” of an expression.

The semantics was designed to suit both generic library developers and novice programmers. In general, the inferred type matches the type of the object or function exactly as declared in the source code.

Example:

{% highlight cpp %}
#include <iostream>

int the_int(){
  return 3;
}

int main(){
  //pega automaticamente o tipo de retorno de the_int 
  decltype( the_int() ) x = the_int();
  std::cout << "the value of x is: " << x << '\n';
  return 0;
}
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

That's all for today, small daily doses that will always keep us in tune with [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/)!

<!-- RETANGULO LARGO -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
    
