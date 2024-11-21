---
layout: post
title: "I Created My Own Programming Language with C++"
date: 2024-11-21 10:24:39
image: '/assets/img/programming/terlang-en.jpg'
description: "👑 Ter/Terlang is a programming language for scripts with syntax similar to C++ and also made with C++. "
tags:
- cpp
- ter
- terlang
- programming
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Programming language for scripting with syntax similar to C++

---

## Summary
1. [Building and Installing on UNIX-style systems](#building-on-unix-style-systems)
2. [Building and Installing on Windows](#building-and-installing-on-windows)
3. [Only installing on Windows or Ubuntu](#only-installing-on-windows-or-ubuntu)
4. [Using](#using)
5. [Tutorials](#tutorials)
6. [Extensions and LICENSE](#extensions-and-license)

---

### Dependencies
+ [GNU GCC](https://gcc.gnu.org/), [Clang](https://clang.llvm.org/) or [MSVC](https://learn.microsoft.com/en-us/cpp/?view=msvc-170)
+ [CMake](https://cmake.org/)
> C++23

### Building on UNIX-style systems
> macOS, GNU/Linux, BSD-Like, Haiku and others.

{% highlight bash %}
git clone https://github.com/terroo/terlang
cd terlang
cmake -B build .
cmake --build build
sudo cmake --install build
{% endhighlight %}

REPL:
> To test the `ter` command.
{% highlight cpp %}
$ ter
ter> output(args())
Ter/Terlang VERSION: 0.0.1
ter> exit
{% endhighlight %}

---

### Building and Installing on Windows
With MSVC!
> Open PowerShell (Run as Administrator) from the Windows Start Menu

{% highlight bash %}
git clone https://github.com/terroo/terlang
cd terlang\
cmake -B build .
cmake --build build

# Create destination folders and subfolders
New-Item -Path "C:\Program Files\Terlang\bin" -ItemType Directory -Force

# Move to destination folder
Move-Item -Path "build\Debug\ter.exe" -Destination "C:\Program Files\Terlang\bin\ter.exe"

# Create an environment variable for system "Path"
[System.Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\Terlang\bin", [System.EnvironmentVariableTarget]::Machine)
{% endhighlight %}

Close PowerShell, then reopen and run:
> To test the `ter` command.
{% highlight cpp %}
prompt> ter
ter> output(args())
Ter/Terlang VERSION: 0.0.1
ter> exit
{% endhighlight %}

---

### Only installing on Windows or Ubuntu

Windows:
{% highlight bash %}
Invoke-WebRequest -Uri "https://github.com/terroo/terlang/releases/download/v0.0.1/terlang-windows-0.0.1.zip"
{% endhighlight %}
+ Unzip
+ Create folders and subfolders: `C:\Program Files\Terlang\bin`
+ Move the `.exe` to the `bin\` subfolder
+ Add the path as an environment variable to just the `ter` command in *PowerShell* or *CMD*

Ubuntu:
{% highlight bash %}
wget https://github.com/terroo/terlang/releases/download/v0.0.1/terlang-ubuntu-24-04-0.0.1.zip
unzip terlang-ubuntu-24-04-0.0.1.zip
sudo mv ter /usr/local/bin
{% endhighlight %}

And test:
{% highlight cpp %}
$ ter
ter> output(args())
Ter/Terlang VERSION: 0.0.1
ter> exit
{% endhighlight %}

---

## Using
> `vim hello.ter`

#### 01. Hello, World!
{% highlight cpp %}
// Comment line
auto hello = "Hello, Terlang! 😃 ";
output(hello);
/*
  Multiline
  comments
*/
{% endhighlight %}
> Semicolon is optional: `auto hello = "Hello, Terlang!"`. Literally skipping the line: `out("Hello\n")`

Run:
{% highlight bash %}
ter hello.ter
{% endhighlight %}
> Output: `Hello, Terlang! 😃`

#### 02. Arrays
{% highlight cpp %}
auto list = {13, 2, 8, 4, 17, 12, 11, 9};
output(list[6]); // 11
{% endhighlight %}

#### 03. Loops
{% highlight cpp %}
for(auto i = 0; i < 5; ++i){ // Or i++
  out(to_string(i) + " | ")
}
out("\n")
// 0 | 1 | 2 | 3 | 4 |


auto i = 0;
while(i < 5){
  out(to_string(i) + " | ")
  ++i;
}
out("\n")
// 0 | 1 | 2 | 3 | 4 |
{% endhighlight %}

#### 05. Includes

> `main.ter`
{% highlight cpp %}
include("./library.ter")
output(value); // 18
{% endhighlight %}

> `library.ter`
{% highlight cpp %}
auto value = 18;
{% endhighlight %}

#### 06. Functions
{% highlight cpp %}
set print(str){
  output(str);
}

set add(x, y){
  return x + y;
}

set increment(a){
  return ++a;
}

print("My content"); // My content
output(add(3, 9)); // 12

auto result = increment(6);
output(result); // 7
{% endhighlight %}

#### 07. Classes
{% highlight cpp %}
class Animal {
  cat(name){
    output("Cat name is: " + name);
  }

  dog(){
    output("I am dog!");
  }

  descAnimal(human){
    return "Human: " + human;
  }
}

Animal().cat("Bob");

auto obj = Animal();
obj.dog();

output(obj.descAnimal("Peter"));
{% endhighlight %}
> Output:
{% highlight bash %}
Cat name is: Bob
I am dog!
Human: Peter
{% endhighlight %}

#### 08. Builtin Functions
{% highlight cpp %}
// Rand number
auto num = rand(5, 15);
output(num) // Number between 5 and 15

// Clock
auto myclock = clock();
output(myclock); // Ex.: 1732022610.561000

// Environment variables
auto home = getenv("HOME");
output(home); // Ex.: /home/user

auto shell = getenv("SHELL")
output(shell); // Ex.: /bin/bash

// Temporary version
auto version = args();
output(version); // Ex.: Ter/Terlang VERSION: 0.0.1
{% endhighlight %}

---

## Video

<iframe width="1253" height="705" src="https://www.youtube.com/embed/0sKCWJawDZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Extensions and LICENSE
Syntax highlight for Vim:

Syntax highlight for Neovim:

Syntax highlight for VS Code:
> Comming soon!

---

[LICENSE GNU GPLv3](./LICENSE)

