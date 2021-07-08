---
layout: post
title: "What does the letter f mean in C++ numbers?"
date: 2021-07-08 10:20:38
image: '/assets/img/cpp/float-literal.png'
description: 'Literal types for data precision.'
featured-img: ../cpp/float-literal.png
tags:
- cpp
- cppdaily
---

![What does the letter f mean in C++ numbers?](/assets/img/cpp/float-literal.png)

One of the questions I've recently received is the fact that I find the letter f accompanied by numbers in [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/): eg: `3.69f`.

In general terms we can say that this number is a literal `float` type: `8.04f` . But why is there this f if the type is already a float? The answer is because by default every number with .(dot) [C](https://en.terminalroot.com.br/examples-of-functions-fread-fwrite-remove-and-others-in-c/) and [C++](https://en.terminalroot.com.br/drogon-cpp-the-fastest-web-framework-in-the-world/) treat it as a double, so we need to make the `float` type explicit.

Let's take an example. Suppose you want to test the number *pi*:

{% highlight cpp %}
#include <iostream>

int main(){
  const float pi = 3.14;
  std::cout << ( pi == 3.14 ? "Equal" : "It is not equal" ) << '\n';
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

At first you would say that the output of this code would be That is equal , but test and you will see that the output is: It is not equal .

Now if we add the f: `const float pi = 3.14f;` it still wouldn't be the same, if we keep the condition without the f.

But if we add the f in the condition, it would be equal to:

{% highlight cpp %}
#include <iostream>

int main(){
  const float pi = 3.14;
  std::cout << ( pi == 3.14f ? "Equal" : "It is not equal" ) << '\n';
  return 0;
}
{% endhighlight %}

Or in both, which further prevents "human error":

{% highlight cpp %}
#include <iostream>

int main(){
  const float pi = 3.14f;
  std::cout << ( pi == 3.14f ? "Equal" : "It is not equal" ) << '\n';
  return 0;
}
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

Alternatively you can also use the capital `F` which works the same way.

It is highly recommended that you use this in all cases where accuracy is important, like games, for example.

There are also literal data for other types: long(`L` or `l`), unsigned(`U` or `u`), long unsigned(`Ul` or `ul`), long long(`LL` or `ll`) .

That's all for today, they're small daily doses that will always keep us in tune with [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/).

    
