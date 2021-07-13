---
layout: post
title: "Why don't I use: 'using namespace std'?"
date: 2021-07-13 12:11:58
image: '/assets/img/cppdaily/using-namespace-std.png'
description: 'I don't use and don't recommend using.'
featured-img: ../cppdaily/using-namespace-std.png
tags:
- cpp
- cppdaily
---

![Why dont I use: using namespace std;?](/assets/img/cppdaily/using-namespace-std.png)

Some people always like to use it and ask me why I don't.

First of all, using the `using namespace std` is a good practice, but it shouldn't be used always and for all.

I avoid using it for 2 basic reasons:

# 1st. I like to know which library that declaration/function is part of.

Sometimes you are using a library that has the same function name. For example, suppose you have this code with this namespace:

{% highlight cpp %}
#include <iostream>

using namespace std;
namespace terroo {

  typedef const char * string;

  int abs( const int &num1, const int &num2  ){
    return num1 + num2;
  }

  void print( const string &text ){
    cout << text << '\n';
  }

}

int main(){
  string test = "nothing";
  terroo::print( test );
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

In this example we see a: `string`, `abs`(from `cstdlib`) and `print`, in addition to the use of: `using namespace std;`, look what an unfortunate mess!!! 😞

When I try to compile I'll have a nice error:

{% highlight bash %}
error: invalid initialization of reference of type ‘const char const&’ from expression of type ‘std::string’ {aka ‘std::__cxx11::basic_string<char>’}
  void print( const string &text ){
...
{% endhighlight %}

That's because my string type is different from the `string` type of the std scope resolution I used: `using namespace std`;. Separate by declaration, I think better than using in general, eg `using std::cout`; , but even so, it gets a little messy!

If we remove the `using namespace std;` and declare each one in its square, the code compiles without problems:

{% highlight cpp %}
#include <iostream>

namespace terroo {

  typedef const char * string;

  int abs( const int &num1, const int &num2  ){
    return num1 + num2;
  }

  void print( const string &text ){
    std::cout << text << '\n';
  }

}

int main(){
  terroo::string test = "nothing";
  terroo::print( test );
  return 0;
}
{% endhighlight %}
> But if you have `std::string` instead of `terror::string` you notice that the compiler does a better job of helping you.


<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Ahh!!! But who will create names for functions, classes, structs, … with names that already exist in the STL? That's what else there is.

In the [Unreal Engine](https://www.unrealengine.com/en-US/) libraries, there is even `vector`, and it is not the std vector.

Without mentioning the `abs` example, I've seen a lot of people using function names that already exist in the STL and this can give a lot of headaches if the guy always uses namespace without scope resolution.

# 2nd. I don't know where that came from
For example, this day I was creating code with [OpenCV](https://opencv.org/) and there is a type/class that is `VideoCapture` and in their documentation they use `using namespace cv;`, it took a while, but I found out that VideoCapture is actually `cv::VideoCapture` and this has already happened to me several times mostly with `std::` itself.

That's why I don't like to use it and I don't recommend it, as do many programmers I know, but it's worth mentioning that this is a matter of taste, ok?!

That's all for today, small daily doses that will always keep us in tune with [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/)!

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


