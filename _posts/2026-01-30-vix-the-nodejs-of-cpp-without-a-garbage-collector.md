---
layout: post
title: "Vix: The 'Node.js' of C++, Without a Garbage Collector"
date: 2026-01-30 12:52:19
image: '/assets/img/cpp/vix-cpp.jpg'
description: "🌐 A C++20 runtime focused on building modern web servers and APIs, combining asynchronous I/O, modular architecture, and an extreme focus on performance."
tags:
- cpp
- cppdaily
- web
- nodejs
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

`vix` is **a modern runtime/framework in [C++20](https://terminalroot.com/tags#cpp)** for building high-performance and distributed backend applications (offline-first, peer-to-peer, etc.) — a native alternative to Node/Deno, featuring async HTTP, routing, ORM, and modules.

It's used to create **web servers, APIs, and distributed applications in C++** with contemporary ergonomics (no garbage collector, no overhead from "old" frameworks). It features:

* Async HTTP server (Asio)
* Routing, middleware, native JSON
* CLI for scaffold/build/run
* Optional modules (ORM, WebSockets, utilities)
  Everything is designed for performance and offline/P2P applications.

---

## Installation

Clone the repository and compile with [CMake](https://terminalroot.com/tags#cmake):

{% highlight sh %}
git clone https://github.com/vixcpp/vix.git
cd vix
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build -j
{% endhighlight %}
> Optional: install headers/artifacts system-wide (according to the project docs).

To use it as a dependency in your project, include the compiled headers/libs and configure CMake to link with "vix".

---

## Basic Example (HTTP Hello world)
Create a `main.cpp` file:

{% highlight cpp %}
#include <vix.hpp>
using namespace vix;

int main() {
    App app;

    app.get("/", [](Request&, Response& res) {
        res.send("Hello world from Vix!");
    });

    app.run(8080);
}
{% endhighlight %}

Compile with your *CMakeLists* that links the Vix runtime. When running, access `localhost:8080`.

---

For more information, visit: <https://github.com/vixcpp/vix>


