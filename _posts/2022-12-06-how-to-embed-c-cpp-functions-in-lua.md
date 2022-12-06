---
layout: post
title: "How to Embed C/C++ Functions in Lua"
date: 2022-12-06 17:30:16
image: '/assets/img/cpp/cpp-bind-lua.jpg'
description: 'We'll see how easy it is to implement the Lua API for C and create our functions in C and C++ to use in the Lua programming language.'
tags:
- cpp
- lua
- clanguage
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Currently, it is very common to develop parts of an application using a *scripting language* and another part using a lower-level language that has better performance.

In 90% of cases, the lowest-level language chosen is [C](https://terminalroot.com/tags#clanguage)/[C++](https://terminalroot.com/tags#cpp), so many scripting languages like [Python](https://terminalroot.com/tags#python), Perl, and [Ruby](https://terminalroot.com/tags#ruby) have some way of communicating with C.

[Lua](https://terminalroot.com/tags#lua) is no different and provides an [API](https://www.lua.org/pil/24.html) so that Lua code can communicate with C code and vice versa.

[Lua](https://terminalroot.com.br/tags#lua) is an extensible language because we can define functions in C and use them in Lua programs. At the same time, Lua is also an extension language, since it is possible to embed Lua in a C application. The model for communicating with C code offered by Lua is based on a virtual stack, where both the C code and the Lua can push and pop values on the stack.

The functions that manipulate the virtual stack have a lua State structure as a parameter, which stores information about the state of the Lua program. No state information is stored in global variables, so we can have multiple independent lua states.

---

The didactic example I made available on GitHub, to get run the commands:

{% highlight bash %}
git clone https://github.com/terroo/cpp-bind-lua
cd cpp-bind-lua
g++ lua-bind.cpp -shared -fpic -llua -o terroo.so
lua main.lua
{% endhighlight %}

Example of how to compile on Windows
{% highlight bash %}
g++ lua-bind.cpp -shared -fpic -L C:\path\to\lua.h -L C:\path\to\lauxlib.h -o terroo.dll
lua main.lua
{% endhighlight %}

For more information [watch this video](https://cutt.ly/z19JuRW).
> Video is in Portuguese.

---


