---
layout: post
title: "cpp::daily `std::endl`"
date: 2021-04-08 11:57:49
image: '/assets/img/cppdaily/cpp-daily-episode4.jpg'
description: 'Episode 004: Getting a little more performance!'
featured-img: ../cppdaily/cpp-daily-episode4.jpg
tags:
- cpp
- cppdaily
---

![cpp::daily `std::endl`](/assets/img/cppdaily/cpp-daily-episode4.jpg)

There is no single procedure to achieve more performance. Performance is a little bit of each of the details!

Usually when you use an [IDE](https://en.terminalroot.com.br/install-veonim-a-text-editor-based-on-vim-and-neovim/) they usually autocomplete your `std::cout` with `std::endl` and this is not a good idea!

Using `std::endl` can be inefficient, as it actually does two tasks:
+ **1º** moves the cursor to the next line: `'\n'`;
+ **2º** and "empties" the output: std::flush.

That is, using `std::endl` is equivalent to using: `'\n'` << `std::flush`.

When writing text to the console using std::cout usually clears the output anyway (and if it doesn't, it generally doesn't matter), then having `std::endl` flush is rarely important.

Because of this, the use of the `'\n'` character is usually preferable. The `'\n'` character moves the cursor to the next line, but does not make the download redundant, so it performs better. The `'\n'` character also tends to be easier to read, as it is shorter and can be incorporated into existing text.

Std::endl is technically unnecessary, since the program ends immediately afterwards.

> The `std::endl` can be useful only when: first, it helps to indicate that the output line is a "complete thought". Second, if we want to add exit instructions later, we don't have to modify the existing code. We can just add them. But in the "overwhelming" majority of cases you will not need to use it.

Let's analyze the runtime of the program below using `std::endl` and then only `'\n'`:

> For this we will use the `time` command to inform us of the execution time

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

1º Using `std::endl`
{% highlight cpp %}
#include <iostream>
#include <fstream>

void writeln( std::ostream & os, const std::string & str ){
  os << str << std::endl; // USING std::endl
}

int main( int argc, char ** argv ){
  std::ofstream outfile( "output.txt", std::ios_base::trunc );
  for (int i = 0; i < 1000000; ++i ) {
   writeln( outfile, "Hello World!" ); 
  }
  return 0;
}
{% endhighlight %}
> Execution time according to the `time` command
{% highlight bash %}
real	0m3,512s
user	0m0,752s
sys	0m2,749s
{% endhighlight %}

---

# 2º The same program using `'\n'`
{% highlight cpp %}
#include <iostream>
#include <fstream>

void writeln( std::ostream & os, const std::string & str ){
  os << str << '\n'; // USING '\n'
}

int main( int argc, char ** argv ){
  std::ofstream outfile( "output.txt", std::ios_base::trunc );
  for (int i = 0; i < 1000000; ++i ) {
   writeln( outfile, "Hello World!" ); 
  }
  return 0;
}
{% endhighlight %}
> Execution time according to the `time` command
{% highlight bash %}
real	0m0,141s
user	0m0,115s
sys	0m0,023s
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

That is, we had a gain of **3 seconds** for every 1 million cycles, usually when a program is open it does a lot more cycles than that!

If you want to know more about the `time` use command: `man time`!
> **VIDEO TIP**: This video shows the performance of programming languages verified with the time command:
# [Tested the Performance of 10 Ranking Programming Languages](https://www.youtube.com/watch?v=spLIBqiv2Og)

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

## Useful links
+ <https://en.cppreference.com/w/cpp/io/manip/endl>
+ <https://www.youtube.com/watch?v=GMqQOEZYVJQ>

