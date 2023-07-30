---
layout: post
title: "Format your code with clang-format"
date: 2023-07-29 21:16:40
image: '/assets/img/cpp/clang-format.jpg'
description: 'Choose style: LLVM, GNU, Google, Chromium, Microsoft or WebKit.'
tags:
- clang
- llvm
- cpp
- clanguage
- programming
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

We have already published an article that describes details of the code style in the article:
+ [Know the details of the Indentation Styles](https://terminalroot.com/know-the-details-of-indentation-styles/)

In this article, we are going to know a tool that formats our code according to the style we want, it is: **clang-format**.

ClangFormat(`clang-format`) is a toolkit that uses **LibFormat** that formats your code in a variety of ways, including a standalone tool and editor integrations.

---

# Installation
To install `clang-format`, you just need the collection of tools from [LLVM](https://terminalroot.com/tags#llvm), [here in this article](https://terminalroot.com/how-to-install-binary-clang-on-any-gnu-linux-distro/) there is the procedure downloading the binary and installing it, but you can also use your system's package manager to get, examples:

{% highlight bash %}
# windows
winget install -e --id LLVM.LLVM

# macOS
brew install clang-format

# Debian, Ubuntu, Mint and derivatives
sudo apt install clang-format

# fedora
sudo dnf install clang-tools-extra

# Arch
sudo pacman -S clang-format-git # AUR

# Gentoo, Funtoo and others
emerge clang
{% endhighlight %}

---

# Usage
Suppose you have this code [C++](https://terminalroot.com/tags#cpp): `main.cpp`:
{% highlight cpp %}
#include <iostream>
#include <memory>

typedef struct Model {
   std::string hello = "Hello";
} model;

int main(){
   auto m = std::make_unique<model>();
   m->hello = "World";
   std::cout << m->hello << '\n';
}
{% endhighlight %}

It is formatted the way I like it, but if I wanted to change it to the [GNU](https://terminalroot.com/tags#gnu) standard, I would just run the following command:
{% highlight bash %}
clang-format -style=gnu main.cpp
{% endhighlight %}

The output transforms my code in this style:
{% highlight cpp %}
#include <iostream>
#include <memory>

typedef struct Model
{
   std::string hello = "Hello";
} model;

int
main()
{
   auto m = std::make_unique<model> ();
   m->hello = "World";
   std::cout << m->hello << '\n';
}
{% endhighlight %}
> Very different formatting, right?!

If you want to save to another file:
{% highlight bash %}
clang-format -style=GNU main.cpp > output.cpp
{% endhighlight %}

There are styles available: `llvm`, `google`, `chromium`, `microsoft`, `webkit` and others.

Examples:
{% highlight bash %}
clang-format -style=llvm main.cpp
clang-format -style=google main.cpp
clang-format -style=microsoft main.cpp
{% endhighlight %}

You can also save your preferred style by dumping it into a file named: `.clang-format` in the path/directory you are working with. For that run:
> Assuming you prefer the `gnu` style.
{% highlight bash %}
clang-format -style=gnu -dump-config > .clang-format
{% endhighlight %}

The file will be similar to the content below and note that you can change the settings as you wish:
{% highlight moon %}
---
Language: Cpp
AccessModifierOffset: -2
AlignAfterOpenBracket: Align
AlignArrayOfStructures: None
AlignConsecutiveAssignments:
   Enabled: false
   AcrossEmptyLines: false
   AcrossComments: false
   AlignCompound: false
   PadOperators: true
AlignConsecutiveBitFields:
   Enabled: false
   AcrossEmptyLines: false
   AcrossComments: false
   AlignCompound: false
   PadOperators: false
AlignConsecutiveDeclarations:
   Enabled: false
   AcrossEmptyLines: false
   AcrossComments: false
   AlignCompound: false
   PadOperators: false
AlignConsecutiveMacros:
   Enabled: false
   AcrossEmptyLines: false
   AcrossComments: false
   AlignCompound: false
   PadOperators: false
AlignEscapedNewlines: Right
...
{% endhighlight %}
> The file is much bigger, the `...` refers to that!

If you want to format multiple `.cpp` files use wildcard:
{% highlight bash %}
clang-format -i *.cpp
{% endhighlight %}
> The `-i` parameter modifies the file.

And to modify multiple files including header files, use this command as an example:
{% highlight bash %}
find . -regex '.*\.\(cpp\|hpp\|cc\|c\|h\)' -exec clang-format -style=file -i {} \;
{% endhighlight %}

If you want to include it in your [Code Editor/IDE](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp/) look for the name corresponding documentation. In the case of [Vim](https://terminalroot.com/tags#vim)/[Neovim](https://terminalroot.com/tags#neovim) use [vim-clang-format]( https://github.com/rhysd/vim-clang-format).

For more information see `clang-format --help` and the [official address of `clang-format`](https://clang.llvm.org/docs/ClangFormat.html).

<!--
Useful link: https://leimao.github.io/blog/Clang-Format-Quick-Tutorial/
-->

