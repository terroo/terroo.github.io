---
layout: post
title: "Tested the Performance of 10 Programming Languages"
date: 2021-03-29 23:59:23
image: '/assets/img/dev/langs.jpg'
description: 'And the fastest was ...'
featured-img: ../dev/langs.jpg
tags:
- cpp
- linguagemc
- python
- java
- php
- ruby
- go
- javascript
- rust
- shellscript
---

![Tested the Performance of 10 Programming Languages](/assets/img/dev/langs.jpg)

🔊 In this video we test the speed of programming languages:

+ [Python](https://en.terminalroot.com.br/the-30-best-python-libraries-and-packages-for-beginners/)
+ [JavaScript](https://en.terminalroot.com.br/os-31-melhores-frameworks-e-bibliotecas-javascript/)
+ [Rust](https://en.terminalroot.com.br/redox-os-a-system-written-in-rust-installation-and-concepts/)
+ [Shell Script](https://en.terminalroot.com.br/shell-an-object-oriented-shell-script/)
+ [Java](https://en.terminalroot.com.br/java-vs-kotlin-what-are-the-key-differences-between-them/)
+ [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/)
+ [C](https://en.terminalroot.com.br/why-is-the-c-programming-language-still-on-the-rise/)
+ [PHP](https://www.php.net/)
+ [Ruby](https://en.terminalroot.com.br/how-to-properly-install-ruby-bundler-and-jekyll-on-ubuntu-linux/)
+ [Go](https://en.terminalroot.com.br/install-in-your-preferred-editor-an-auto-complete-with-artificial-intelligence/)

And at the end we created a ranking with Awk.

# Watch the video
> The video is in Brazilian Portuguese, but you can use subtitles and translate into your language.

<iframe width="900" height="380" src="https://www.youtube.com/embed/spLIBqiv2Og" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Code of Languages
### 01. SHELL SCRIPT `vim sh.sh`
{% highlight bash %}
for i in {1..1000000};
  do
    echo -en "${i}Ok\r"
done
{% endhighlight %}
+ Run: `sh sh.sh`
+ Test: `time sh sh.sh`

---

### 02. PHP `vim php.php`
{% highlight php %}
<?php

for( $i = 0; $i <= 1000000; $i++ ){
  echo "{$i}Ok\r";
}
{% endhighlight %}
+ Run: `php php.php`
+ Test: `time php php.php`

---

### 03. JAVASCRIPT `vim js.js`
{% highlight js %}
for( var i = 0; i <= 1000000; i++ ){
  process.stdout.write( i + "Ok\r");
}
{% endhighlight %}
+ Run: `node js.js`
+ Test: `time node js.js`

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

### 04. RUBY `vim ruby.rb`
{% highlight ruby %}
for i in 1..1000000 do
 print "#{i}Ok\r"
end
{% endhighlight %}
+ Run: `ruby ruby.rb`
+ Test: `time ruby ruby.rb`

---

### 05. PYTHON `vim python.py`
{% highlight python %}
for i in range(1000001):
    print( str(i) + "Ok\r", end='' )
{% endhighlight %}
+ Run: `python python.py`
+ Test: `time python python.py`

---

### 06. JAVA `vim java.java`
{% highlight java %}
class java {
  public static void main ( String args[] ) {
    for ( int i = 0; i <= 1000000 ; i++ ){
      System.out.print( i + "Ok\r" );
    }
  }
}
{% endhighlight %}
+ Run: `javac java.java && java java`
+ Test: `time java java`

---

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

### 07. GO `vim go.go`
{% highlight go %}
package main
import (
  "fmt"
)

func main() {
  for i := 0; i <= 1000000; i++{
    fmt.Printf("%vOK\r", i)
  }

}
{% endhighlight %}
+ Run: `go build go.go && ./go`
+ Test: `time ./go`

---

### 08. C++ `vim cpp.cpp`
{% highlight cpp %}
#include <iostream>

int main(){
  for (int i = 0; i <= 1000000; i++) {
   std::cout << i << "Ok\r";
  }
  return 0;
}
{% endhighlight %}
+ Run: `g++ cpp.cpp && ./a.out`
+ Test: `time ./a.out`

---

### 09. RUST `vim rust.rs`
{% highlight rust %}
fn main() {
 for i in 0..1000001 {
    print!("{}Ok\r", i);
 }
}
{% endhighlight %}
+ Run: `rustc rust.rs && ./rust`
+ Test: `time ./rust`

---

### 10. C `vim c.c`
{% highlight c %}
i#include <stdio.h>

int main(){
  for (int i = 0; i <= 1000000; i++) {
    printf("%iOk\r", i);
  }
  return 0;
}
{% endhighlight %}
+ Run: `gcc c.c && ./a.out`
+ Test: `time ./a.out`

# Peace!

