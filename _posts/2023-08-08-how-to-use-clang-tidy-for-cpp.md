---
layout: post
title: "How to use clang-tidy for C++"
date: 2023-08-08 20:04:12
image: '/assets/img/cpp/clang-tidy.jpg'
description: 'A practical and efficient linter!'
tags:
- cpp
- cppdaily
- clang
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In one of the articles here on the blog we published about [clang-format](https://terminalroot.com/format-your-code-with-clang-format/), today we are going to know another [Clang](https://terminalroot.com/tags#clang)/[LLVM](https://terminalroot.com/tags#llvm) application collection tool: `clang-tidy`.

**Clang-Tidy** is a [linter](https://en.wikipedia.org/wiki/Lint_(software)) for [C++](https://terminalroot.com/tags#cpp). Its purpose is to provide an extensible framework for diagnosing and correcting typical programming errors such as style violations, interface misuse, or bugs that can be deduced through static analysis.

To install `clang-tidy` just use the same procedures described [in the clang-format article](https://terminalroot.com/format-your-code-with-clang-format/).

---

# Usability
The simplest way to check your code with `clang-tidy` is: suppose you have the code below that prints a pointer instead of the reference or the data itself:
> `main.cpp`

{% highlight cpp %}
#include <iostream>

int main(){
   const char* str {};
   std::cout << *str << '\n';
}
{% endhighlight %}
> Even if you compile with the proper parameters of your compiler to detect failures, you will not be able to detect the `warning`.

Using the command below with `clang-tidy` you can detect:
{% highlight bash %}
clang-tidy main.cpp -- -Imy_project/include -DMY_DEFINES ...
{% endhighlight %}

The output will appear:
{% highlight bash %}
1 warning generated.
main.cpp:5:16: warning: Dereference of null pointer (loaded from variable 'str') [clang-analyzer-core.NullDereference]
   std::cout << *str << '\n';
                ^~~~
main.cpp:4:3: note: 'str' initialized to a null pointer value
   const char* str {};
   ^~~~~~~~~~~~~~~
main.cpp:5:16: note: Dereference of null pointer (loaded from variable 'str')
   std::cout << *str << '\n';
                ^~~~
{% endhighlight %}

**clang-tidy** has its own checks and can also run *Clang Static Analyzer* checks. Each check has a name and the checks to be performed can be chosen using the `-checks=` option, which specifies a list separated by commas and `-`, for example:

{% highlight bash %}
clang-tidy main.cpp -checks=-*,clang-analyzer-*,-clang-analyzer-cplusplus*
{% endhighlight %}
> This command will disable all default checks (`-*`) and enable all `clang-analyzer-*` except `clang-analyzer-cplusplus*`.

---

In summary, it is a useful tool and used by default in most configurations for [LSP](https://terminalroot.com/how-to-install-lua-lsp-on-neovim/).

For more information use `clang-tidy --help` and read the [official documentation](https://clang.llvm.org/extra/clang-tidy/).

## Some alternatives to `clang-tidy`:
+ [CppCheck](https://terminalroot.com/how-to-do-static-analysis-of-c-cpp-with-cppcheck/)
+ [flint++](https://github.com/JossWhittle/FlintPlusPlus)
+ [cpplint](https://github.com/google/styleguide/tree/gh-pages/cpplint)
+ [Frame-C](https://www.frama-c.com/)
+ And among [others](https://analysis-tools.dev/tool/clang-tidy).

