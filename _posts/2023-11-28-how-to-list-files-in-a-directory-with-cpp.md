---
layout: post
title: "How to list files in a directory with C++"
date: 2023-11-28 22:30:42
image: '/assets/img/cpp/en-list-dir-cpp.jpg'
description:
tags:
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

When we are developing our applications, we often need common tasks to achieve the final objective of our project.

One of the most frequent things, among others, is to list files in a directory and we generally use the internet, however, it is very simple to understand the logic and establish this concept to reduce the waste of time carrying out research.

In this quick tip we will see how to do this in a modern way with [C++](https://terminalroot.com/tags#cpp).

---

# Using `filesystem`
The `filesystem` library provides facilities for performing operations on file systems and their components, such as paths, regular files, and directories.

It was originally developed by [Boost](https://www.boost.org/) and in the `C++` version it was finally adopted by the committee to be part of the standard library (STL).

To use it we will include:
{% highlight cpp %}
#include <filesystem>
{% endhighlight %}

Its `namespace` is very large, so it is always interesting to *reduce* the path by simplifying it to `fs` only, and this is best done right after including the header:
{% highlight cpp %}
namespace fs = std::filesystem;
{% endhighlight %}
> If you are using a [linter](https://terminalroot.com/how-to-use-clang-tidy-for-cpp/), it may accuse *warning*: `■ Namespace alias decl 'fs' is unused (fix available)`, this is because we declared it, but we haven't used it in our code yet, but we already will!

Now let's create a *string* that will store the folder/directory we want to list the files in (e.g.: `/path/to/directory`), for these examples we will list the current directory:
{% highlight cpp %}
std::string path = "./";
{% endhighlight %}

And to list the files we will use [Range-based for loop](https://en.cppreference.com/w/cpp/language/range-for) which is also affectionately confused with [for-each](https:/ /en.cppreference.com/w/cpp/algorithm/for_each) and we go through our folder using a native `filesystem` iterator which is `directory_iterator()` and within the loop we will print the element that is nothing more than the ) files in the directory, using the `path()` member function:
> Remembering that if there is a subdirectory it will also list it.

{% highlight cpp %}
for (const auto &entry : fs::directory_iterator(path)){
   std::cout << entry.path() << '\n';
}
{% endhighlight %}

After compiling normally and running, you will notice the files (and/or directories, if any) being listed.

If you want to make sure that the files are being listed one at a time, you can *pause the display* with [sleep](https://terminalroot.com/4-different-ways-to-use-sleep-in-cpp/):
{% highlight cpp %}
std::this_thread::sleep_for(std::chrono::seconds(1));
{% endhighlight %}
> In this case there will be a 1 second delay in the display.

The complete code is:
{% highlight cpp %}
#include <iostream>
#include <filesystem>
//#include <chrono>
//#include <thread>

namespace fs = std::filesystem;

int main(){
   std::string path = "./";

   for (const auto &entry : fs::directory_iterator(path)){
     std::cout << entry.path() << '\n';
     //std::this_thread::sleep_for(std::chrono::seconds(1));
   }

   return 0;
}
{% endhighlight %}
> The *pause* is commented!

For more information visit: <https://en.cppreference.com/w/cpp/filesystem>.
<!-- https://stackoverflow.com/questions/612097/how-can-i-get-the-list-of-files-in-a-directory-using-c-or-c -->

