---
layout: post
title: "10 examples of using Lambda Functions in C++"
date: 2021-06-30 16:41:20
image: '/assets/img/cpp/lambda.png'
description: 'Lambdas solve a problem of readability, expressiveness and practicality.'
featured-img: ../cpp/lambda.png
tags:
- cpp
- cppdaily
---

![10 examples of using Lambda Functions in C++](/assets/img/cpp/lambda.png)

Lambdas resolvem um problema de legibilidade, expressividade e praticidade. In this article we'll show you 10 ways you can use it in your code.

## Syntax
{% highlight bash %}
[](){};
{% endhighlight %}

# Example 1
This doesn't do anything, but it's the most basic way to compile without error.
{% highlight cpp %}
#include <iostream>

int main(){
  [](){};
  return 0;
}
{% endhighlight %}

---

# Example 2
Assigning Lambda Return to a Variable
{% highlight cpp %}
auto a = [](){};
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

---

# Example 3
Inserting content into the body of the lambada
{% highlight cpp %}
auto b = [](){
  std::cout << "I \u2764 Lambda!\n";
};
{% endhighlight %}

---

# Example 4
Printing the contents of the lambda
{% highlight cpp %}
auto c = [](){
  std::cout << "I \u2764 Lambda!\n";
};

c();
{% endhighlight %}

---

# Example 5
Passing parameter to Lambda
{% highlight cpp %}
auto d = []( const char * s ){
  std::cout << s;
};
d("I \u2764 Lambda!\n");
{% endhighlight %}

---

# Example 6
Returning defined type
{% highlight cpp %}
auto e = []()->float {
  return 3.6f;
}; std::cout << "0.9 + e = " << 0.9f + e() << '\n';
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

---

# Example 7
Passing existing variables
{% highlight cpp %}
int x, y; x = y = 0;
auto f = [ x, &y ]{
  ++y;
  std::cout << "x e y = " << x << " e " << ++y << '\n';
}; f();
// as y is reference, the value is changed
// x is read-only
// Output: x and y = 0 and 2
{% endhighlight %}

---

# Example 8
Running inside `std::remove_if` and leaving the NUM(123.456.789-00) with only numbers
{% highlight cpp %}
std::string s("123.456.789-00");
std::vector<std::string> num;
for (int i = 0; i < s.length() ; i++) {
  num.push_back( s.substr(i, 1) );
}

num.erase( std::remove_if( num.begin() , num.end(), []( std::string h )->bool{ 
      return ( h == "-" || h == "." );
    } ) , num.end() );
{% endhighlight %}
> To see the output: `for( auto z : num ){ std::cout << z; }; std::cout << '\n';`

---

# Example 9
Calling with direct parameters
{% highlight cpp %}
int n = [] (int x, int y) { return x + y; }(5, 4);
std::cout << n << '\n';
{% endhighlight %}

---

# Example 10
Capturing the clause as a reference
{% highlight cpp %}
auto indices = [&]( std::string index ){
  std::cout << index << '\n';
};
indices("Starting jobs ...");
{% endhighlight %}

---

That's all for today, small daily doses that will always keep us in tune with C++!


