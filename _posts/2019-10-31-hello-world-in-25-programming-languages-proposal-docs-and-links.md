---
layout: post
title: "'Hello, World!' in 25 Programming Languages: Proposal, Docs and Links."
date: 2019-10-31 14:55:18
image: '/assets/img/dev/programming-languages.jpg'
description: 'I have selected the most used languages ​​in the market with data that can make you study or know better to make your choice.'
featured-img: ../dev/programming-languages.jpg
tags:
- programming
- development
- code
- assembly
- c
- cpp
- go
- bash
- awk
- vimscript
- sql
- lua
- perl
- php
- python
- javascript
- java
- rust
- swift
- dart
- kotlin
- r
- julia
- ruby
- elixir
- vala
- csharp
- gambas
---

![Hello World in 25 Programming Languages: Proposal, Docs and Links.](/assets/img/dev/programming-languages.jpg)

I have selected the most used languages ​​in the market with data that can make you study or know better to make your choice, whether for the job market or for building personal or business projects:  

*   A brief description and/or curiosity of each;
*   the extent to which each one uses;
*   **Hello World!** ;
*   how to run, compile and/or interpret;
*   dependencies;
*   link with example;

Follow:  

* * *

## ![Assembly](/assets/img/dev/langs/assembly.png)

### 01. Assembly

[https://curlie.org/Computers/Programming/Languages/Assembly/](https://curlie.org/Computers/Programming/Languages/Assembly/)  

> File: `vim hello-world.asm`

Assembly or assembly language is a human readable notation for machine code that a specific computer architecture uses, used to program code understood by computational devices such as microprocessors and microcontrollers. 

{% highlight asm %}
section     .text
global      _start

_start:

    mov     edx,len
    mov     ecx,msg
    mov     ebx,1
    mov     eax,4
    int     0x80

    mov     eax,1
    int     0x80

section     .data

msg     db  'Hello, World!',0xa 
len     equ $ - msg
{% endhighlight %}  

> _Must have compiler and linker: [ld](https://www.gnu.org/software/binutils/) ._

Run: `nasm -f elf64 -o hello-world.o hello-world.asm && ld hello-world.o -o hello-world && ./hello-world`  
Example: [http://asm.sourceforge.net/intro/hello.html](http://asm.sourceforge.net/intro/hello.html)

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

* * *

## ![C](/assets/img/dev/langs/c.png)

### 02. C

[https://www.iso.org/standard/74528.html](https://www.iso.org/standard/74528.html)  

> File: `vim hello-world.c`

C is a general purpose, structured, imperative, procedural compiled programming language, standardized by the International Organization for Standardization (ISO), created in 1972 by Dennis Ritchie at AT&T Bell Labs for Unix operating system development (originally written in Assembly) .  

{% highlight c %}
#include <stdio.h>
int main() {
 printf("Hello, World!\n");
 return 0;
}
{% endhighlight %} 

> _You must have a compiler installed, eg [gcc](https://gcc.gnu.org/) ._

Run: `gcc hello-world.c -o hello-world.o && ./hello-world.o`  

> Example: [https://terminalroot.com.br/2011/10/ola-mundo.html](https://terminalroot.com.br/2011/10/ola-mundo.html)

* * *

## ![C++](/assets/img/dev/langs/cpp.png)

### 03. C++

[https://isocpp.org/](https://isocpp.org/)  

> File: I `vim hello-world.cpp` , I `vim hello-world.c++` or I `vim hello-world.cc`

C++ (reads see plus plus) is a compiled multi-paradigm programming language (its support includes imperative, object oriented and generic language) and commonly used. 

{% highlight cpp %}
#include <iostream>
int main() {
std::cout << "Hello, World!" << std::endl;
return 0;
}
{% endhighlight %}

> _You must have a compiler installed, eg [gcc](https://gcc.gnu.org/) ._

Run: `g++ hello-world.cpp -o hello-world.o && ./hello-world.o`  

> Example: [https://en.cppreference.com/book/intro/hello_world](https://en.cppreference.com/book/intro/hello_world)

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

* * *

## ![Go](/assets/img/dev/langs/go.png)

### 04. Go

[https://golang.org/](https://golang.org/)  

> File: `vim hello-world.go`

Go is a programming language created by Google and released in open source in November 2009\. It is a compiled language. 

{% highlight go %}
package main

import "fmt"

func main() {
    fmt.Printf("Hello, World!\n")
}
{% endhighlight %}

> _You must have go installed._

Run: `go build hello-world.go && ./hello-world`  

> Example: [https://tour.golang.org/welcome/1](https://tour.golang.org/welcome/1)

* * *

## ![Bash](/assets/img/dev/langs/bash.png)

### 05. Bash

[https://www.gnu.org/software/bash/](https://www.gnu.org/software/bash/) File: `vim hello-world.sh` or `vim hello-world.bash`  
Bash is a script language or command interpreter, one of several translators. 

{% highlight bash %}
#!/bin/bash
echo 'Hello, World!'
{% endhighlight %}

Run: `bash hello-world.sh` , `sh hello-world.sh` , `source hello-world.sh` , `chmod +x ./hello-world.sh && ./hello-world.sh`  

> Example: [http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-2.html](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-2.html)

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

* * *

## ![Awk](/assets/img/dev/langs/awk.png)

### 06. Awk

[https://www.gnu.org/software/gawk/](https://www.gnu.org/software/gawk/)  

> File: `vim hello-world.awk`

The AWK programming language was created in 1977 by scientists Alfred Aho, Peter J. Weinberger and Brian Kernighan in the Bell Labs lab. 

{% highlight awk %}
#!/usr/bin/env awk
BEGIN {print "Hello, World!"}
{% endhighlight %}  

> _There are several variants of Awk: [Learn more here](https://terminalroot.com.br/2014/12/tutorial-basico-de-awk.html) ._

Run: `awk -f hello-world.awk`  

> Example: [https://www.gnu.org/software/gawk/manual/gawk.html#BEGIN_002fEND](https://www.gnu.org/software/gawk/manual/gawk.html)

* * *

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

## ![Vim](/assets/img/dev/langs/vim.png)

### 07. VimScript

[https://www.vim.org/](https://www.vim.org/)  

> File: `vim hello-world.vim`

Vim's scripting language, known as Vimscript, is a typical dynamic imperative language that offers most common language features. 

{% highlight vim %}
:echo "Hello, World!"
{% endhighlight %}

> _Must have [vim](https://www.vim.org/) installed._

Run: `vim -u hello-world.vim +qall`  

> Vim and VimScript Course: [https://terminalroot.com.br/vim](https://terminalroot.com.br/vim)

* * *

## ![SQL](/assets/img/dev/langs/sql.png)

### 08. SQL

[https://sigmod.org/#standards](https://sigmod.org/)  

> File: `vim hello-world.sql`

Structured Query Language, or Structured Query Language or SQL, is the standard declarative query language for relational database (relational database). 

{% highlight sql %}
SELECT "Hello, World!"
{% endhighlight %} 

> _You must have MySQL for this example: [MySQL](https://www.mysql.com/) ._

Run: `mysql -u root -p < hello-world.sql` or directly: `mysql -u root -p -e "SELECT 'Hello, World'"`  

> Uses: [https://terminalroot.com.br/2011/10/curso-certificacao-linux-lpi-102.html](https://terminalroot.com.br/2011/10/curso-certificacao-linux-lpi-102.html)

* * *

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## ![Moon](/assets/img/dev/langs/lua.png)

### 09. Lua

[https://www.lua.org/](https://www.lua.org/)  

> File: `vim hello-world.lua`

Lua is a small, reflective, lightweight multiparadigm scripting language designed to expand general applications by being an extensible language (which joins parts of a program made into more than one language), for prototyping, and for software embedding. complex, like games. It resembles Python, Ruby and others. 

{% highlight lua %}
#!/usr/bin/env lua
print "Hello, World!"
{% endhighlight %}

> _Must have Lua installed._

Run: `lua hello-world.lua` or `chmod +x hello-world.lua && ./hello-world.lua`  

> Example: [https://terminalroot.com.br/2016/11/blog-linux-lua.html](https://terminalroot.com.br/2016/11/blog-linux-lua.html)

* * *

## ![Perl](/assets/img/dev/langs/perl.png)

### 10. Perl

[https://www.perl.org/](https://www.perl.org/)  

> File: `vim hello-world.pl`

Perl is a family of two multiplatform programming languages, Perl 5 and Perl 6. 

{% highlight perl %}
#!/usr/bin/env perl
print "Hello, World!\n";
{% endhighlight %}

> _Must have Perl installed._

Run: `perl hello-world.pl` or `chmod +x hello-world.pl && ./hello-world.pl`  

> Example: [https://metacpan.org/pod/Perl::Tutorial::HelloWorld](https://metacpan.org/pod/Perl::Tutorial::HelloWorld)

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

* * *

## ![PHP](/assets/img/dev/langs/php.png)

### 11. PHP

[https://www.php.net/](https://www.php.net/)  

> File: `vim hello-world.php`

PHP (a recursive acronym for "PHP: Hypertext Preprocessor", originally Personal Home Page) is a free interpreted language, originally used only for the development of server-side applications that are capable of generating dynamic content on the World Wide Web. 

{% highlight php %}
#!/usr/bin/env php
<?="Hello, World!\n"?>
{% endhighlight %} 

> _You must have PHP installed._

Run: `php hello-world.php` or `chmod +x hello-world.php && ./hello-world.php`  

> Example: [https://terminalroot.com.br/2011/12/como-crea-chat-com-sockets-em-php-no.html](https://terminalroot.com.br/2011/12/como-criar-chat-com-sockets-em-php-no.html)

* * *

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

## ![Python](/assets/img/dev/langs/python.png)

### 12. Python

[https://www.python.org/](https://www.python.org/)  

> File: `vim hello-world.py`

Python is a high-level, interpreted, scripted, imperative, object-oriented, functional, dynamic typing, and strong programming language. 

{% highlight python %}
#!/usr/bin/env python
print("Hello, World!")
{% endhighlight %} 

> _You can run Python directly at the prompt: `python` ._

Run: `python hello-world.py` or `chmod +x hello-world.py && ./hello-world.py`  

> Example: [https://terminalroot.com.br/2016/12/script-basico-de-python-para-learning.html](https://terminalroot.com.br/2016/12/script-basico-de-python-para-aprendizado.html)

* * *

## ![JavaScript](/assets/img/dev/langs/javascript.png)

### 13. JavaScript

[http://www.ecma-international.org/publications/standards/Ecma-262.htm](http://www.ecma-international.org/publications/standards/Ecma-262.htm)  

> File: `vim hello-world.js`

JavaScript, often abbreviated as JS, is a high-level interpreted programming language, also characterized as dynamic, poorly typed, prototype-based, and multi-paradigm. 

{% highlight javascript %}
console.log("Hello, World!");
{% endhighlight %} 

> _You must have Nodejs installed._

Run: `node hello-world.js`  

> Example: [https://terminalroot.com.br/2011/11/some-codigos-simples-de-javascript.html](https://terminalroot.com.br/2011/11/alguns-codigos-simples-de-javascript.html)

* * *

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## ![Java](/assets/img/dev/langs/java.png)

### 14. Java

[https://www.java.com/](https://www.java.com/)  

> File: `vim hello-world.java`

Java is a programming language developed by engineers at Sun Microsystems. It is an object-oriented language designed to run on multiple platforms without the need to recompile the code on each platform.  

*   **JDK** - Java **D** evelopment **K** it is required to develop java applications. JRE is smaller than JDK, so it needs less disk space.

OpenJDK is a free and free implementation of the Java platform, Standard Edition. 

{% highlight java %}
class OlaMundo {
    public static void main(String args[]) {
        System.out.println("Hello, World!");
    }
}
{% endhighlight %} 

> _Must have compiler and linker: [JDK](https://openjdk.java.net/) ._

Run: `javac hello-world.java && java OlaMundo` , **javac** creates a file with the _class_ name (inside the same directory where you ran it), in this case **HelloMundo** with the extension **.class** ( `OlaMundo.class` ), but to run does not report the _.class_ .  

> OpenJDK: [https://openjdk.java.net/](https://openjdk.java.net/)

* * *

## ![Rust](/assets/img/dev/langs/rust.png)

### 15. Rust

[https://www.rust-lang.org](https://www.rust-lang.org/)  

> File: `vim hello-world.rs`

Rust is a compiled multiparadigm programming language developed by Mozilla Research. It is designed to be "safe, concurrent and practical", supporting the purely functional, procedural, and object-oriented styles. It has native WebAssembly support. 

{% highlight rust %}
fn main() {
    println!("Hello, World!");
}
{% endhighlight %}

> _Must have compiler: [rustc](https://doc.rust-lang.org/rustc/index.html) ._

Run: `rustc hello-world.rs && ./hello-world`  

> Example: [https://doc.rust-lang.org/stable/rust-by-example/hello.html](https://doc.rust-lang.org/stable/rust-by-example/hello.html)

* * *

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

## ![Swift](/assets/img/dev/langs/swift.png)

### 16. Swift

[https://swift.org/](https://swift.org/)  

> File: `vim hello-world.swift`

Swift is a programming language developed by Apple for development on iOS, macOS, watchOS, tvOS and Linux. 

{% highlight swift %}
print("Hello, World!")
{% endhighlight %}

> _Must have [swift](https://github.com/apple/swift) ._

Run: `swift build && .build/debug/hello-world` , this inside a directory with Sources  

> Example: [https://swift.org/getting-started/#installing-swift](https://swift.org/getting-started/)

* * *

## ![Dart](/assets/img/dev/langs/dart.png)

### 17. Dart

[https://dart.dev/](https://dart.dev/)  

> File: `vim hello-world.dart`

Dart (originally called Dash) is a web-based scripting language developed by Google. 

{% highlight dart %}
main() {
  print('Hello, World!');
}
{% endhighlight %}  

> _Need [dependencies](https://dart.dev/tutorials/server/get-started) ._

Run: `dart hello-world.dart`  

> Example: [https://dart.dev/#try-dart](https://dart.dev/)

* * *

## ![Kotlin](/assets/img/dev/langs/kotlin.png)

### 18. Kotlin

[https://kotlinlang.org/](https://kotlinlang.org/)  

> File: `vim hello-world.kt`

[Kotlin](https://github.com/andrewoma/kotlin-script) is a multiplatform programming language that compiles for the Java Virtual Machine and can also be translated into JavaScript and compiled into native code. 

{% highlight kotlin %}
#!/usr/bin/env kotlins
package hello

fun main() {
    println("Hello, World!")
}
{% endhighlight %}  

> _Must have [dependencies](https://kotlinlang.org/docs/tutorials/command-line.html) ._

Run: `kotlinc hello-world.kt -include-runtime -d hello-world.jar && java -jar hello-world.jar`  

> Example: [https://kotlinlang.org/docs/tutorials/kotlin-for-py/compiling-and-running.html](https://kotlinlang.org/docs/tutorials/kotlin-for-py/compiling-and-running.html)

* * *

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## ![R](/assets/img/dev/langs/r.png)

### 19. R

[https://www.r-project.org/](https://www.r-project.org/)  

> File: `vim hello-world.r`

R is a computational environment and a programming language that has been progressively specializing in data manipulation, analysis and visualization. 

{% highlight r %}
#!/usr/bin/env Rscript
OlaMundo <- function(){
   print('Hello, World!')
}

OlaMundo()
{% endhighlight %}

> _Must have [R](https://cran.r-project.org/mirrors.html) installed._

Run: `Rscript hello-world.r`  

> Example: [https://cran.r-project.org/doc/manuals/r-release/R-intro.html](https://cran.r-project.org/doc/manuals/r-release/R-intro.html)

* * *

## ![Julia](/assets/img/dev/langs/julia.png)

### 20. Julia

[https://julialang.org/](https://julialang.org/)  

> File: `vim hello-world.jl`

Julia is a high-level dynamic programming language designed to meet the requirements of scientific and numerical high performance computing and is also effective for general purpose programming. 

{% highlight julia %}
#!/usr/bin/env julia
println("Hello, World!")
{% endhighlight %} 

> _To use the compiled form you need the [JIT](https://www.gnu.org/software/lightning/) compiler._

Run: `julia hello-world.jl`  

> Example: [https://docs.julialang.org/en/v1/manual/getting-started/](https://docs.julialang.org/en/v1/manual/getting-started/)

* * *

## ![Ruby](/assets/img/dev/langs/ruby.png)

### 21. Ruby

[https://www.ruby-lang.org/](https://www.ruby-lang.org/)  

> File: `vim hello-world.rb`

Ruby is a powerful, dynamic typing, self-managing multi-paradigm interpreted programming language originally designed and developed in Japan in 1995 by Yukihiro "Matz" Matsumoto for use as a scripting language. 

{% highlight ruby %}
#!/usr/bin/env ruby
puts "Hello, World!"
{% endhighlight %}

> _You need to have Ruby installed._

Run: `ruby hello-world.rb`  

> Example: [https://www.ruby-lang.org/en/documentation/](https://www.ruby-lang.org/pt/documentation/)

* * *

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

## ![Elixir](/assets/img/dev/langs/elixir.png)

### 22. Elixir

[https://elixir-lang.org/](https://elixir-lang.org/)  

> File: `vim hello-world.exs`

Elixir is a concurrent, general purpose functional programming language that runs on the Erlang virtual machine (BEAM). 

{% highlight elixir %}
IO.puts "Hello world from Elixir"
{% endhighlight %}

> _You must have Elixir installed._

Run: `elixir hello-world.exs`  

> Example: [https://elixir-lang.org/getting-started/introduction.html](https://elixir-lang.org/getting-started/introduction.html)

* * *

## ![Ditch](/assets/img/dev/langs/vala.png)

### 23. Vala

[https://wiki.gnome.org/Projects/Vala](https://wiki.gnome.org/Projects/Vala)  

> Extension: `vim hello-world.vala`

Vala is an object-oriented programming language.

{% highlight vala %}
class Sample : Object {
    static void main (string[] args) {
        stdout.printf ("Hello, World!\n");
    }
}
{% endhighlight %}

> _You must have Vala installed._

Run: `valac hello-world.vala -o hello-world`](https://wiki.gnome.org/Projects/Vala/ValaForCSharpProgrammers) 

> [Example:](https://wiki.gnome.org/Projects/Vala/ValaForCSharpProgrammers) [https://www.vala-project.org/doc/vala/Overview.html#Getting_started](https://www.vala-project.org/doc/vala/Overview.html)

* * *

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## ![C#](/assets/img/dev/langs/csharp.png)

### 24. C#

[http://msdn.microsoft.com/en-us/vcsharp/default.aspx](http://msdn.microsoft.com/pt-br/vcsharp/default.aspx)  

> File: `vim hello-world.cs`

C# is a strongly typed, multi-paradigm programming language developed by Microsoft as part of the .NET platform. 

{% highlight csharp %}
using System; 
namespace HelloWorldApp { 
    class Geeks { 
	    static void Main(string[] args) {
           Console.WriteLine("Hello, World!"); 
	       Console.ReadKey(); 
	    } 
    } 
} 
{% endhighlight %} 

> _Must own [Gentoo](/linguagem.html) : `layman dotnet && emerge mono monodevelop` ._  
 
*   [https://github.com/gentoo/dotnet](https://github.com/gentoo/dotnet)
*   [https://wiki.gentoo.org/wiki/Project:Dotnet](https://wiki.gentoo.org/wiki/Project:Dotnet)
*   [http://en.terminalroot.com.br/how-to-install-programs-via-layman-in-gentoo/](http://en.terminalroot.com.br/how-to-install-programs-via-layman-in-gentoo/)

Example: [https://docs.microsoft.com/en-us/dotnet/csharp/](https://docs.microsoft.com/pt-br/dotnet/csharp/)

* * *

## ![Gambas](/assets/img/dev/langs/gambas.png)

### 25. Gambas (Visual Basic for Linux)

[http://gambas.sourceforge.net/](http://gambas.sourceforge.net/)  

> File: `vim hello-world.gambas`

Gambas is an integrated development environment (IDE) for Linux an Open Source alternative to Microsoft Basic Visual Basic. 

{% highlight vb %}
Message.Info("Hello, World!")
{% endhighlight %} 

> _Must have Gambas, eg `sudo apt install gambas3` [https://www.youtube.com/watch?v=xezNqM2zrbY](https://www.youtube.com/watch%3Fv%3DxezNqM2zrbY) ._

Run: `gambas hello-world.gambas`  

> Example: [https://terminalroot.com.br/2016/10/gambas-o-visual-basic-open-source-para.html](https://terminalroot.com.br/2016/10/gambas-o-visual-basic-open-source-para.html)

***

Thanks for reading!
