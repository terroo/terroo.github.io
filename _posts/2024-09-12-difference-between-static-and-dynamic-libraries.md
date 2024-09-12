---
layout: post
title: "Difference between Static and Dynamic Libraries"
date: 2024-09-12 15:54:50
image: '/assets/img/programming/lib-static-vs-shared.jpg'
description: "🧮 Advantages and disadvantages."
tags:
- cpp
- clanguage
- go
- zig
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Libraries (`lib`) are collections of functions and resources used to develop software. They help avoid code repetition, facilitate maintenance, and allow code reuse in different programs.

There are two main types of libraries:

+ **Static libraries**;
+ and **Dynamic libraries** (or shared).

## Static Library
A static library is a file that contains object code, which is linked into the program at compilation time.

**Features**:
+ **File Extension**: On [Unix](https://terminalroot.com/tags#unix)-like systems, static libraries usually have the extension `.a` (archive), while on Windows, the extension is `.lib`. + **Linking**: The library code is copied into the final executable during the linking process. This **results in a larger executable**, since it contains all the necessary library code.
+ **Performance**: Since all the necessary code is already present in the executable, execution tends to be faster. However, this also means that any updates to the library require recompilation of the program.
+ **Portability**: The executable is self-contained, and does not depend on the presence of library files on the system where it will be executed.

**Advantages**:
+ No external dependencies at runtime.
+ May be faster due to the absence of dynamic linking overhead.

**Disadvantages**:
+ Larger executable size.
+ Difficulty in updating libraries, since it requires recompilation and redistribution of the executable.

---

## Dynamic (shared) library
A dynamic library is a file containing object code that is loaded at runtime, allowing multiple programs to use the same library.

**Features**:
+ **File Extension**: On Unix-like systems, dynamic libraries usually have the extension `.so` (shared object), while on Windows, the extension is `.dll` (dynamic-link library).
+ **Linking**: The library code is linked into the program at runtime, not during compilation. This results in a smaller executable, since the library code is not included.
+ **Performance**: There may be a slight overhead in execution due to the need to load and link the library at runtime.
+ **Portability**: The executable depends on the presence of the shared library on the system where it will be executed. If the library is not present, the program will not work.

**Advantages**:
+ Smaller executable size.
+ Easy to update libraries without recompiling the executable.
+ Reduced memory usage, since the same library can be shared between multiple processes.

**Disadvantages**:
+ Dependency on the library being available at runtime.
+ Possible version conflicts ("DLL Hell" problem).

---

## Summary of Differences (Table)

| Feature            | Static Library | Dynamic Library                                              |
|--------------------|----------------|--------------------------------------------------------------|
| Extension          | `.a` (Unix/Linux), `.lib` (Windows)  | `.so` (Unix/Linux), `.dll` (Windows)   |
| Link Time          | Compilation                          | Execution                              |
| Executable Size    | Larger                               | Smaller                                |
| Runtime Dependency | No                                   | Yes                                    |
| Performance        | Potentially faster                   | May have slight overhead               |
| Library Update     | Requires recompilation               | Does not require recompilation         |
| Memory Usage       | Each executable includes the library | Libraries are shared between processes |

---

Each type of library has its own advantages and disadvantages, and the choice between a static and dynamic library depends on the specific needs of your project.

