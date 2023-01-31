---
layout: post
title: "How to Check File Size in 10 Programming Languages"
date: 2023-01-30 23:33:49
image: '/assets/img/programming/filesize.jpg'
description: 'C, C++, Java, Lua, Perl, Python, PHP, C#, JavaScript/Nodejs and Go.'
tags:
- clanguage
- cpp
- java
- lua
- perl
- python
- php
- csharp
- javascript
- nodejs
- go
- programming
- langs
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

Today, once again, we are going to exercise our knowledge by creating routines that can be useful in different situations. And this time we will see how to know the size of a file in 10 different programming languages, they are: [C](https://terminalroot.com/tags#clanguage), [C++](https://terminalroot. com/tags#cpp), [Java](https://terminalroot.com/tags#java), [C#](https://terminalroot.com/tags#csharp), [PHP] (https://terminalroot.com/tags#php), [Lua](https://terminalroot.com/tags#lua), [Perl](https://terminalroot.com/tags #perl), [Python](https://terminalroot.com/tags#python), [JavaScript](https://terminalroot.com/tags#bash)/[Node.js](https: //terminalroot.com/tags#nodejs) and [Go/Golang](https://terminalroot.com/tags#go).

As in the article:
+ [How to Get the Current Directory in 10 Different Programming Languages](https://terminalroot.com/how-to-get-current-directory-in-10-programming-languages/)

I'll just post the code for each of them!

The `file.iso` file is fictitious and you must replace it with a valid file on your computer to carry out the tests.

You can compare the result using the command: `du -h file.iso`.

---

# 01. [C](https://terminalroot.com/tags#clanguage)
> `filesize.c`

{% highlight c %}
#include <stdio.h>

int main(){
  FILE * file = fopen("file.iso", "rb");
  fseek(file, 0, SEEK_END);
  int size = ftell(file);
  fclose(file);
  printf("%d MB\n", (size / 1024) / 1024);
  return 0;
}
{% endhighlight %}
> `gcc filesize.c && ./a.out`

---

# 02. [C++](https://terminalroot.com/tags#cpp)
> `filesize.cpp`

{% highlight cpp %}
#include <iostream>
#include <fstream>

int main(){
  std::ifstream file("file.iso", std::ios::in | std::ios::binary);
  file.seekg(0, std::ios::end);
  std::cout << (file.tellg() / 1024) / 1024 << " MB\n";
  return 0;
}
{% endhighlight %}
> `g++ filesize.cpp && ./a.out`

---

# 03. [Java](https://terminalroot.com/tags#java)
> `FileSize.java`

{% highlight java %}
import java.io.File;

public class FileSize {
  public static void main(String[] args) {
    String path = "file.iso";
    long size = new File(path).length();
    System.out.println(( size / 1024 ) / 1024 + " MB");
  }
}
{% endhighlight %}
> `javac FileSize.java && java FileSize`

---

# 04. [Lua](https://terminalroot.com/tags#lua)
> `filesize.lua`

{% highlight lua %}
file = io.open("file.iso", "r")
size = math.floor((file:seek("end") / 1024) / 1024)
print(size .. " MB")
{% endhighlight %}
> `lua filesize.lua`

---

# 05. [Perl](https://terminalroot.com/tags#perl)
> `filesize.pl`

{% highlight perl %}
$path = "file.iso";
my $x = -s $path;
$x = ($x / 1024) / 1024;
$x = int($x);
print("$x MiB\n");
{% endhighlight %}
> `perl filesize.pl`

---

# 06. [Python](https://terminalroot.com/tags#python)
> `filesize.py`

{% highlight python %}
import os
path = "file.iso"
size = os.path.getsize(path)
print( str( int( (size / 1024) / 1024) ) + " MB")
{% endhighlight %}
> `python filesize.py`

---

# 07. [PHP](https://terminalroot.com/tags#php)
> `filesize.php`

{% highlight php %}
<?php
$path = "file.iso";
$x = filesize($path) / 1024 / 1024; 
echo intval($x) . " MB\n";
{% endhighlight %}
> `php filesize.php`

---

# 08. [C#](https://terminalroot.com/tags#csharp)
> `dotnet new console -o FileSize && cd FileSize && vim Program.cs`

{% highlight csharp %}
string path = "file.iso";
long size = new System.IO.FileInfo(path).Length;
Console.WriteLine( (size/1024) / 1024 + " MB" );
{% endhighlight %}
> `dotnet run`

---

# 09. [JavaScript](https://terminalroot.com/tags#javascript)/[Node.js](https://terminalroot.com/tags#nodejs)
> `filesize.js`

{% highlight bash %}
const {readFileSync: read} = require ('fs')
const path = "file.iso"
let size = read(path).length
size = (size / 1024) / 1024
console.log(parseInt(size) + " MB")
{% endhighlight %}
> `node filesize.js`

---

# 10. [Golang/Go](https://terminalroot.com/tags#go)
> `filesize.go`

{% highlight go %}
package main

import("fmt";"os")

func main(){
  file, err := os.Stat("file.iso")
  _ = err
  size := file.Size()
  fmt.Println( (size/1024) / 1024,"MB")
}
{% endhighlight %}
> `go build filesize.go && ./filesize` ou `go run filesize.go`

---

Until the next article!


