---
layout: post
title: "Microsoft is also building the successor to C++"
date: 2022-08-03 12:56:21
image: '/assets/img/dev/verona.jpg'
description: 'Microsoft: We are creating a new programming language for secure memory.'
tags:
- windows
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Microsoft can't just throw away older Windows code, but the company's **Project Verona** aims to make older low-level components of [Windows 10](https://terminalroot.com/tags#windows) more secure.

The company recently revealed that its tests with Rust have met their goals, however, the outcome will actually be a programming language of its own. One of the reasons for this is also because Rust has some different features, such as: very large binaries, extensive assembly code and so on.

All Windows users know that on the second Tuesday of each month, Microsoft releases *patches* to fix security flaws in [Windows](https://terminalroot.com/tags#windows).

Microsoft recently revealed that the vast majority of bugs discovered today are memory security holes.

---

# What is Safe Memory ?
When [C++](https://terminalroot.com/tags#cpp) was released, many companies liked the way data was abstracted, especially **RAII** (constructors and destructors), which was precisely the which differentiated [C++](https://terminalroot.com/tags#cpp) from [C](https://terminalroot.com/tags#linguagemc) that does not have RAII.

With all the success of C++, there were also several criticisms, the most related was the fact that C++ does not have a Garbage Collector (in Portuguese: **garbage collection**), which is a way to recover regions of memory that were previously allocated , but not returned for the operating system to reuse .

So, to solve this problem, the inventor of C++ himself (Bjarne Stroustroup) created a technique to count references (and deallocate automatically) and achieved the same goal as the Garbage Collector, but with the advantage that it did not influence performance. of programs that were written in C++, as the Garbage Collector significantly influenced performance.

To this day, this safe memory is optional and is used by adding the `<memory>` library which provides **smart pointers** .

But, in these modern programming languages, this technique popularized by C++ is not optional but: mandatory, that is, all pointers do not access raw memory, but through a *wrapper* .

As well as other techniques, such as preventing declaration of a *variable* that is not used. In C and C++ compilers it is necessary to enable this using the argument: `Werror=unused-variable`, in addition to others.

But why create a new programming language instead of using C++ features?

This can be answered directly, which would be for reasons of: advertising .

---

# About Project Verona
Microsoft's **Project Verona** might just turn out to be an experiment that leads nowhere, but the company has progressed far enough to flesh out some of its ideas through the UK-based non-profit Knowledge Transfer Network.

Matthew Parkinson, a Microsoft researcher at Cambridge Computer Lab in the UK who is dedicated to "investigating memory management for managed programming languages", gave a talk last week focusing on what the company is doing to solve these problems. from memory.

In the keynote, Parkinson discussed the work Microsoft has done with *MemGC*, which is short for Memory Garbage Collector, for Internet Explorer (IE) and Edge.

MemGC addressed vulnerabilities in the standard browser feature known as the Document Object Model (DOM), a representation of the data used by browsers to interpret web pages. Google's Project Zero elite hackers were impressed with Microsoft's MemGC after searching major browsers.

> "We built a garbage collector (GC) for the DOM. That big bulge in *use-after-free* was basically people finding ways to explore memory management in the DOM engine in IE", — said Parkinson, referring to a graph illustrating the prominence of memory security bugs.

The **Project Verona** also has a syntax similar to the programming language [OCaml](https://en.wikipedia.org/wiki/OCaml), as well as [Carbon](https://www.youtube.com/watch?v=qyLoFVZbzqc) and [Rust](https://terminalroot.com/how-to-open-url-in-default-browser-in-go-python-ruby-and-rust/)(mainly him, because his first versions were just written with OCaml, then changed to Bootstrapping) which is the tendency for syntax, different from languages such as: [Java](https://terminalroot.com/tags#java), [PHP](https ://terminalroot.com/tags#php), [JavaScript](https://terminalroot.com/tags#javascript), [C++](https://terminalroot.com/tags#cppdaily ) and among others that inherited the [C](https://terminalroot.com/tags#linguagemc) style syntax  .

However, the Verona Project will still maintain **C++** style abstractions such as use of: classes, polymorphism and inheritance. And so far the **Verona** programming language is being written in C++.

Below is an example of a basic **Hello, World!** written with the **Verona** programming language:

{% highlight cpp %}
class Main {
    main() {
       Builtin.print2("Hello World!");
    }
}
{% endhighlight %}

The project is being supported by project manager [C#](https://terminalroot.com/tags#csharp): Mads Torgensen and research software engineer at Microsoft Research Cambridge: Juliana Franco.

---

# How to test Project Verona on your machine?
Verona also uses [LLVM](https://terminalroot.com/tags#llvm) which serves to generate the final assembly code, in addition to optimizing and standardizing resources. But you can clone with [Git](https://terminalroot.com/tags#git) in a *rescursive* way and then compile, example:

{% highlight bash %}
git clone --recursive https://github.com/microsoft/verona
mkdir build
cd build
cmake -DVERONA_DOWNLOAD_LLVM=ON ..
make
{% endhighlight %}

This is the procedure in general lines, but there are already details for compilation both in [Windows](https://terminalroot.com/tags#windows) for Visual Studio and also for [Ubuntu](https://terminalroot.com/tags#ubuntu). See [here](https://github.com/microsoft/verona/blob/master/docs/building.md) all required dependencies and more.

---

## For more information, visit the official Project Verona GitHub repository:
## <https://github.com/microsoft/verona>

--

See too:
## [Carbon, Google's new programming language, intends to be the successor of C++](https://www.youtube.com/watch?v=qyLoFVZbzqc) .

