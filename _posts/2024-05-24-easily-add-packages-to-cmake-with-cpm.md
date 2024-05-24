---
layout: post
title: "Easily add packages to CMake with CPM"
date: 2024-05-24 09:56:03
image: '/assets/img/cpp/cpm.jpg'
description: "📦 CPM(CMake Package Manager) is a Package Manager for CMake."
tags:
- cmake
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

There are so many libraries and for many people it is difficult to know the correct name to add to CMake, or even know if it is installed.

To solve this problem there is **CPM**.

📦 CPM means: **CMake Package Manager**, that is, a Package Manager for CMake. It is a small script for dependency management, cross-platform and without configuration.

---

# Usage
Suppose you have this code [C++](https://terminalroot.com/tags#cpp):
{% highlight cpp %}
#include <fmt/format.h>

auto main() -> int {
   fmt::print("Hello World!\n");
}
{% endhighlight %}

Note that it uses the library [fmt](https://github.com/fmtlib/fmt), if we try to compile it the way via line command, doesn't work:
{% highlight bash %}
g++ main.cc

/usr/lib/gcc/x86_64-pc-linux-gnu/13/../../../../x86_64-pc-linux-gnu/bin/ld: /tmp/cc5yZimt.o: in function "main":
main.cc:(.text+0x7e): undefined reference to `fmt::v10::vprint(fmt::v10::basic_string_view<char>, fmt::v10::basic_format_args<fmt::v10::basic_format_context< fmt::v10::appender, char> >)'
collect2: error: ld returned 1 exit status
{% endhighlight %}

If we use CMake, it will not automatically search for the library:
> `CMakeLists.txt`
{% highlight bash %}
cmake_minimum_required(VERSION 3.10)
project(MyExample)
add_executable(myexample main.cc)
{% endhighlight %}
After compiling, we will also get error:
{% highlight bash %}
cmake -B build .
cd build && make

[50%] Building CXX object CMakeFiles/myexample.dir/main.cc.o
[100%] Linking CXX executable myexample
/usr/lib/gcc/x86_64-pc-linux-gnu/13/../../../../x86_64-pc-linux-gnu/bin/ld: CMakeFiles/myexample.dir/main.cc .o: in the "main" function:
main.cc:(.text+0x7e): undefined reference to `fmt::v10::vprint(fmt::v10::basic_string_view<char>, fmt::v10::basic_format_args<fmt::v10::basic_format_context< fmt::v10::appender, char> >)'
collect2: error: ld returned 1 exit status
make[2]: *** [CMakeFiles/myexample.dir/build.make:97: myexample] Error 1
make[1]: *** [CMakeFiles/Makefile2:83: CMakeFiles/myexample.dir/all] Error 2
make: *** [Makefile:91: all] Error 2
{% endhighlight %}

Now let's add the CPM to our `CMakeLists.txt`, just these two statements:
{% highlight make %}
file(
   DOWNLOAD
   https://github.com/cpm-cmake/CPM.cmake/releases/download/v0.38.3/CPM.cmake
   ${CMAKE_CURRENT_BINARY_DIR}/cmake/CPM.cmake
   EXPECTED_HASH SHA256=cc155ce02e7945e7b8967ddfaff0b050e958a723ef7aad3766d368940cb15494
)
include(${CMAKE_CURRENT_BINARY_DIR}/cmake/CPM.cmake)
{% endhighlight %}

And then link the library (using CPM) that we want to our binary:
{% highlight make %}
CPMAddPackage("gh:fmtlib/fmt#7.1.3")
target_link_libraries(myexample fmt::fmt)
{% endhighlight %}

In the end, our `CMakeLists.txt` will look like this:
{% highlight make %}
cmake_minimum_required(VERSION 3.10)
project(MyExample)
add_executable(myexample main.cc)

filet(
   DOWNLOAD
   https://github.com/cpm-cmake/CPM.cmake/releases/download/v0.38.3/CPM.cmake
   ${CMAKE_CURRENT_BINARY_DIR}/cmake/CPM.cmake
   EXPECTED_HASH SHA256=cc155ce02e7945e7b8967ddfaff0b050e958a723ef7aad3766d368940cb15494
)
include(${CMAKE_CURRENT_BINARY_DIR}/cmake/CPM.cmake)

CPMAddPackage("gh:fmtlib/fmt#7.1.3")
target_link_libraries(myexample fmt::fmt)
{% endhighlight %}

Now just compile and run:

{% highlight bash %}
prompt> cmake -B build .
-- The C compiler identification is GNU 13.2.1
-- The CXX compiler identification is GNU 13.2.1
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: /usr/bin/cc - skipped
-- Detecting C compilation features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: /usr/bin/c++ - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CPM: Adding package fmt@7.1.3 (7.1.3)
-- Version: 7.1.3
-- Build type: 
-- CXX_STANDARD: 11
-- Performing Test has_std_11_flag
-- Performing Test has_std_11_flag - Success
-- Performing Test has_std_0x_flag
-- Performing Test has_std_0x_flag - Success
-- Performing Test SUPPORTS_USER_DEFINED_LITERALS
-- Performing Test SUPPORTS_USER_DEFINED_LITERALS - Success
-- Performing Test FMT_HAS_VARIANT
-- Performing Test FMT_HAS_VARIANT - Success
-- Required features: cxx_variadic_templates
-- Looking for strtod_l
-- Looking for strtod_l - not found
-- Configuring done (11.4s)
-- Generating done (0.0s)
-- Build files have been written to: /home/user/CPM/build
prompt> cd build && make
[ 20%] Building CXX object _deps/fmt-build/CMakeFiles/fmt.dir/src/format.cc.o
[ 40%] Building CXX object _deps/fmt-build/CMakeFiles/fmt.dir/src/os.cc.o
[60%] Linking CXX static library libfmt.a
[60%] Built target fmt
[80%] Building CXX object CMakeFiles/myexample.dir/main.cc.o
[100%] Linking CXX executable myexample
[100%] Built target myexample
prompt>build $./myexample 
Hello World!
{% endhighlight %}

---

Of course this is a basic example and linking FMT in CMake is not difficult, but there are several cases where it is a drama!!!

I hope you enjoyed CPM. For more information [access the CPM repository on GitHub](https://github.com/cpm-cmake/CPM.cmake).

Share!!!
