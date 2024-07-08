---
layout: post
title: "Concept, Installation and Examples of using the Boost library"
date: 2024-07-08 08:38:55
image: '/assets/img/cpp/boost-cpp.jpg'
description: "⏱️  Boost is Multiplatform: Windows, macOS, GNU/Linux, BSD and any other operating system and architecture."
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[Boost](https://www.boost.org/) is a set of libraries for the [C++](https://terminalroot.com/tags#cpp) programming language that provides support for tasks and structures such as linear algebra, pseudorandom number generation, multithreading, image processing, regular expressions and unit testing.

It contains **164 individual libraries** (as of version `1.76`).

All **Boost** libraries are licensed under the `Boost Software License`, designed to allow Boost to be used with both open and proprietary software projects.

Many of Boost's founders are on the C++ standards committee (so the Boost website is often seen as the C++ website), and several libraries created by Boost have been accepted for incorporation into C++ (Technical Report 1), such as:
+ smart pointers;
+ thread;
+ [RegEx](https://terminalroot.com/how-to-remove-html-tags-in-c-and-cpp-with-regex/);
+ [random](https://terminalroot.com/generating-random-numbers-with-cpp/);
+ `ratio` and `std::tuple`;
+ [std::filesystem](https://terminalroot.com/using-cpp-as-shell-script/);
+ [std::any](https://terminalroot.com/use-modern-cpp-stdany-in-your-projects/);
+ [std::optional](https://terminalroot.com/how-to-use-stdoptional-in-modern-cpp/);
+ [std::variant](https://terminalroot.com/cpp-concepts-and-examples-about-stdlessequal-stdvariant-and-stdvisit/);
+ [std::string_view](https://terminalroot.com/10-examples-of-using-stringview-in-cpp/)
And almost everything, in fact! 😃

The Boost community emerged around 1998, when the first version of the standard was released.

The original founders of Boost are still active in the community, including [Nicolai Josuttis](https://www.instagram.com/p/CMVXF7Qg32w/), a writer of books from C++ that I I have the pleasure of owning one of his books: 📘

![Book by Nicolai Josuttis](/assets/img/cpp/livro-cpp.jpg)


<!-- SQUARE - GAMES ROOT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## Installation

### On Windows
It is interesting to use package managers such as: [Winget](https://github.com/microsoft/winget-cli), however, the best option is to use [vcpkg](https://github.com/microsoft /vcpkg)

#### Using vcpkg
vcpkg is a popular package manager for [C++](https://terminalroot.com/tags#cpp) that makes it easy to install libraries, including Boost.

+ Download and install vcpkg:
Open PowerShell and run the following commands to download and configure vcpkg:

{% highlight cmd %}
git clone https://github.com/microsoft/vcpkg.git
cd vcpkg
.\bootstrap-vcpkg.bat
{% endhighlight %}
Install Boost using `vcpkg`, still in PowerShell, run the command to install Boost:

{% highlight bash %}
.\vcpkg install boost
{% endhighlight %}

Integrate vcpkg with your development environment. To use the libraries installed by vcpkg, you need to integrate vcpkg with your development environment. For [Visual Studio](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp/), run:

{% highlight bash %}
.\vcpkg integrate install
{% endhighlight %}
> This allows Visual Studio to automatically detect libraries installed by vcpkg.

### Another way to install Boost on Windows is to use the official installer available on the Boost website:
+ <https://www.boost.org/doc/libs/1_85_0/more/getting_started/windows.html>
> Download the latest version.

Extract the contents of the `.zip` or `.7z` file to a directory of your choice.

Compile Boost (optional):
Some Boost modules may need to be compiled. To compile, open Command Prompt and navigate to the Boost directory. Then run:

{% highlight bash %}
bootstrap.bat
.\b2
{% endhighlight %}
> This will compile the necessary modules and create the library files.

Configure the Boost path in your development environment (such as Visual Studio) so that it can find the header files and compiled libraries.

---

### In Ubuntu:
To install the **Boost** library on [Ubuntu](https://terminalroot.com/tags#ubuntu) via *APT*, run these commands on your [terminal](https://terminalroot.com. br/tags#terminal):

{% highlight bash %}
sudo apt update
sudo apt install libboost-all-dev
{% endhighlight %}
> If you want to install only specific modules. For example, to install just Boost.Filesystem and Boost.System, you can use: `sudo apt install libboost-filesystem-dev libboost-system-dev`.

After installing the Boost library, you can verify the installation by checking the installed version:
{% highlight bash %}
dpkg -s libboost-all-dev | grep 'Version'
{% endhighlight %}

Now let's see how to use **Boost** with some examples!


<!-- RECTANGLE 2 - OnParagragraph -->
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

---

### 01. Clean up whitespace at the beginning and end of a string
You know that ready-made [PHP](https://terminalroot.com/tags#php) function that you wish existed in STL? Yes, the one that removes white spaces, often used to process `input` from [HTML](https://terminalroot.com/tags#html)?

At Boost, you just include the *header*: `string.hpp` and use it, for example:

{% highlight cpp %}
#include <iostream>
#include <boost/algorithm/string.hpp>

int main() {
 std::string str = " Hello, World! ";
 boost::algorithm::trim(str);
 std::cout << "'" << str << "'" << std::endl;
 return 0;
}
{% endhighlight %}
> Of course you can do this feat from scratch with `algorithm` or `regex`, but there's nothing like having it ready just to use.

---

## 02. Converts a string to a specific type or vice versa, safely and conveniently.
And those conversions that sometimes *annoy*, in Boost just include `#include <boost/lexical_cast.hpp>` and use:

{% highlight cpp %}
int i = boost::lexical_cast<int>("123");
std::string s = boost::lexical_cast<std::string>(456);
{% endhighlight %}
> As not all types are changeable, the ideal is to use it within a `try catch`!

---

## 03. Replaces all occurrences of one substring with another.
Once again, the people at [web development](https://terminalroot.com/tags#web), love using this functionality. And this in Boost just includes the `#include <boost/algorithm/string.hpp>`:

{% highlight cpp %}
std::string s = "Hello World";
boost::algorithm::replace_all(s, "World", "Boost");
// s is now "Hello Boost"
{% endhighlight %}

---

## 04. Creates functions and functors through argument binding.
If you still don't understand why **bind arguments**, I suggest reading [this article](https://terminalroot.com/cppdaily-episode002-stdbind-e-stdplaceholders-10-examples/).

{% highlight cpp %}
auto f = boost::bind(std::plus<int>(), 1, 2);
int result = f(); // result is 3
{% endhighlight %}

These functions and classes are just a small sample of the vast functionality that the Boost library offers, making it a powerful and essential tool for C++ developers.

Several software use Boost, including: [Asio](https://en.wikipedia.org/wiki/Asio_(C%2B%2B_library)), [Dlang](https://en.wikipedia.org/wiki /D_(programming_language)), [POCO](https://en.wikipedia.org/wiki/POCO_C%2B%2B_Libraries), [Red Programming Language](https://en.wikipedia.org/wiki/Red_( programming_language)) and many others!

---

The official Boost website address is: <https://www.boost.org> and the official Boost repository on [GitHub](https://terminalroot.com/tags#github) can be found at the following address: <https://github.com/boostorg/boost>. And more useful links: <https://boost-spirit.com/home/> and <https://en.wikipedia.org/wiki/Boost_(C%2B%2B_libraries)>.
