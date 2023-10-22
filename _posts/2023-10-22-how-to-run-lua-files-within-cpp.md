---
layout: post
title: "How to Run Lua Files within C++"
date: 2023-10-22 13:02:38
image: '/assets/img/lua/lua-cpp.png'
description: 'This concept is widely used in Game Development.'
tags:
- lua
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In this article we will see the reverse process that we saw in the video: [How to Incorporate C/C++ Functions in Lua](https://terminalroot.com/how-to-embed-c-cpp-functions-in-lua/).

We will see how to run and obtain variable values from Lua code in C++. This concept is widely used in Game Development.

If you don't have Lua installed, you can still test it, just download Lua from this address: <http://www.lua.org/download.html> and download the package: [lua-5.4.6.tar .gz](http://www.lua.org/ftp/lua-5.4.6.tar.gz).

Unzip and use `-I include` for the `src` of the unzipped directory.

---

## 01. Basic code
For the first example, let's create a code in C++ that prints a Hello World on the screen, but with the Lua `print`:
{% highlight cpp %}
// Include Lua files
#include <lua5.1/lua.hpp>

int main() {
     // Initialize the Lua state
     lua_State *L = luaL_newstate();

     // Load the standard Lua libraries
     luaL_openlibs(L);

     // Run a Lua script, it doesn't show what the error was
     luaL_dostring(L, "print('Hi, I'm being printed in Lua')");

     // Close the Lua state
     lua_close(L);

     return 0;
}
{% endhighlight %}

To compile use:
{% highlight bash %}
g++ main.cpp -llua -ldl
{% endhighlight %}

---

## 02. Handling errors
What if I have a Lua syntax error?

{% highlight cpp %}
if (luaL_dostring(L, "print('Hi, I'm being printed in Lua')") != 0) {
   fprintf(stderr, "Error executing Lua script: %s\n", lua_tostring(L, -1));
   return 1;
}
{% endhighlight %}

---

## 03. Running external files
> `file.lua`
{% highlight moon %}
x = 36
y = 90
print("x + y = " .. x + y)
{% endhighlight %}

Replace `luaL_dostring` with `luaL_dofile`

{% highlight cpp %}
if(luaL_dofile(L, "./file.lua") != 0) {
   fprintf(stderr, "Error executing Lua script: %s\n", lua_tostring(L, -1));
   return 1;
};
{% endhighlight %}

---

## 04. Get variables from Lua
{% highlight cpp %}
...
if(luaL_dofile(L, "./file.lua") != 0) {
   fprintf(stderr, "Error executing Lua script: %s\n", lua_tostring(L, -1));
   return 1;
};

lua_getglobal(L, "x");
int val = (int)lua_tointeger(L, -1);
lua_pop(L, 1);
printf("The value of x is: %d\n", val);
...
{% endhighlight %}

If you have a variable `screen = "1920 x 1080"` in the file `file.lua` and want to know its contents, just use: `lua_tostring(L., -1)`:

{% highlight cpp %}
lua_getglobal(L, "screen");
const char* val = (const char*) lua_tostring(L, -1);
lua_pop(L, 1);
printf("The screen resolution is: %s\n", val);
{% endhighlight %}




