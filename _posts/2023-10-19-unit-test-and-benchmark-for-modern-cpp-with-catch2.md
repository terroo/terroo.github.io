---
layout: post
title: "Unit Test and Benchmark for Modern C++ with Catch2"
date: 2023-10-19 14:45:40
image: '/assets/img/assets/cpp/catch2.jpg'
description: "The ease of use and the fact that it doesn't need external dependencies sets it apart from the rest!"
tags:
- cpp
- tdd
- benchmark
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

# What is Catch2?
**Catch2** is a Unit Testing framework for [C++](https://terminalroot.com/tags#cpp), but it also provides basic micro-benchmarking capabilities and simple BDD macros.

The main advantage of Catch2 is that its use is simple and natural. Test names don't need to be valid identifiers, assertions look like normal C++ Boolean expressions, and sections provide a nice, local way to share setup and teardown code across tests.

It's [another option to](https://github.com/catchorg/Catch2/blob/devel/docs/why-catch.md#top) Google Test, Boost.Test, CppUnit, Cute and others.

---

# Installation
To compile and install it on your system, run the commands below:
{% highlight bash %}
git clone https://github.com/catchorg/Catch2
cd Catch2
cmake -B build .
cd build
make
{% endhighlight %}

---

# Example of use
Create an example file: vim example.cpp:

{% highlight cpp %}
#include <catch2/catch_test_macros.hpp>

int example(const int& z){
   return 10 / z;
}

TEST_CASE( "Division by: 1, 2, ZERO and 10", "[example]" ) {
     REQUIRE(example(1));
     REQUIRE(example(2));
     REQUIRE(example(0));
     REQUIRE(example(10));
}
{% endhighlight %}

To compile via command line:
{% highlight bash %}

g++ example.cpp -lCatch2Main -lCatch2
{% endhighlight %}


Possible output after running the binary:
{% highlight txt %}
$./a.out
Randomness seeded to: 2691063100

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
a.out is a Catch2 v3.4.0 host application.
Run with -? for options

---------------------------------------------------
Division by: 1, 2, ZERO and 10
---------------------------------------------------
example.cpp:7
....................................................

example.cpp:7: FAILED:
   {Unknown expression after the reported line}
due to a fatal error condition:
   SIGFPE - Floating point error signal

===================================================
test cases: 1 | 1 failed
assertions: 3 | 2 passed | 1 failed

Floating point exception
{% endhighlight %}

---

# Options
In the binary you included the test, you can use a list of parameters.

Run:
{% highlight bash %}
./a.out -?
{% endhighlight %}

A summary output of the parameters:
{% highlight txt %}
Catch2 v3.4.0
usage:
  a.out [<test name|pattern|tags> ... ] options

where options are:
  -?, -h, --help                            display usage information
  -s, --success                             include successful tests in
                                            output
  -b, --break                               break into debugger on failure
  -e, --nothrow                             skip exception tests
  -i, --invisibles                          show invisibles (tabs, newlines)
  -o, --out <filename>                      default output filename
  -r, --reporter <name[::key=value]*>       reporter to use (defaults to
                                            console)
  -n, --name <name>                         suite name
  -a, --abort                               abort at first failure
  -x, --abortx <no. failures>               abort after x failures
  -w, --warn <warning name>                 enable warnings
  -d, --durations <yes|no>                  show test durations
  -D, --min-duration <seconds>              show test durations for tests
                                            taking at least the given number
                                            of seconds
  -f, --input-file <filename>               load test names to run from a
                                            file

...
{% endhighlight %}

---

For more information access:
+ [Tutorial](https://github.com/catchorg/Catch2/blob/devel/docs/tutorial.md#top)
+ [Documentation](https://github.com/catchorg/Catch2/blob/devel/docs/migrate-v2-to-v3.md#top)
+ [Details for command line](https://github.com/catchorg/Catch2/blob/devel/docs/command-line.md#top)
+ [Official repository](https://github.com/catchorg/Catch2)


