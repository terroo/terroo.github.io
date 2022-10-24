---
layout: post
title: "How to Get Current Directory in 10 Programming Languages"
date: 2022-10-24 12:08:47
image: '/assets/img/programming/current-dir.jpg'
description: 'In: C++, C, Lua, Java, Bash, JavaScript, Python, PHP, Golang and Ruby.'
tags:
- cpp
- clanguage
- lua
- bash
- javascript
- python
- php
- go
- ruby
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Algumas tarefas básicas muitas vezes servem para memorizarmos conceitos fundamentais.

Some basic tasks often serve to memorize fundamental concepts.

So, in this article today we will see how to get the current directory in 10 different programming languages. Among them: [C++](https://terminalroot.com/tags#cpp), [C](https://terminalroot.com/tags#clanguage), [Lua](https://terminalroot.com/tags#lua), [Java](https://terminalroot.com/tags#java), [Bash](https://terminalroot.com/tags#bash), [JavaScript](https://terminalroot.com/tags#javascript), [Python](https://terminalroot.com/tags#python), [PHP](https://terminalroot.com/tags#php), [Golang](https://terminalroot.com/tags#go) e [Ruby](https://terminalroot.com/tags#ruby).

All were used as simply as possible and in a modern way. It will also serve to review how to concatenate and basic syntax.

In each code there will also be a comment according to the language to compile and/or interpret via the [command line](https://terminalroot.com/tags#commands).

---

# C++
{% highlight cpp %}
#include <iostream>
#include <filesystem>

int main(){
  std::cout << "The current directory is: " 
    << std::filesystem::current_path() << '\n';
  return 0;
}
// g++ -std=c++17 current.cpp && ./a.out
{% endhighlight %}

---

# C 
{% highlight c %}
#include <stdio.h>
#include <unistd.h>
#include <limits.h>

int main() {
  char cwd[PATH_MAX];
  getcwd(cwd, sizeof(cwd));
  printf("The current directory is: %s\n", cwd);
  return 0;
}
// gcc current.c && ./a.out
{% endhighlight %}

---

# Lua 
{% highlight lua %}
print("The current directory is: " .. os.getenv("PWD"))
--lua current.lua
{% endhighlight %}

---

# Java
{% highlight java %}
public class current {
  public static void main(String[] args) {
    System.out.println("The current directory is: " + System.getProperty("user.dir"));
  }
}
// javac current.java && java current 
{% endhighlight %}

---

# Bash
{% highlight bash %}
echo "The current directory is: ${PWD}"
# bash current.sh
{% endhighlight %}

---

# JavaScript
> [Node.js](https://terminalroot.com/tags#nodejs)

{% highlight js %}
console.log("The current directory is: " + process.cwd() )
// node current.js
{% endhighlight %}

---

# Python
{% highlight python %}
import os
print("The current directory is: " + os.getcwd())
# python current.py
{% endhighlight %}

---

# PHP
{% highlight php %}
<?php echo "The current directory is: " . getcwd() . "\n";
# php current.php
{% endhighlight %}

---

# Golang
{% highlight go %}
package main

import (
  "fmt"
  "os"
)

func main(){
  dir,err := os.Getwd() ; _ = err
  fmt.Println("The current directory is: " + dir)
}
// go build current.go && ./current 
{% endhighlight %}

---

# Ruby
{% highlight ruby %}
puts "The current directory is: " + Dir.pwd
# ruby current.rb
{% endhighlight %}

---


<!--
See too: <https://programming-idioms.org/idiom/106/get-program-working-directory>

{% highlight rs %}
use std::env;

fn main() {
    println!("The current directory is: {:?}", env::current_dir().unwrap());
}
// rustc current.rs && ./current

{% endhighlight %}
-->


