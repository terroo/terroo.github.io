---
layout: post
title: "How to Install and Get Started with Google Test"
date: 2025-06-02 10:19:23
image: '/assets/img/cppdaily/googletest.jpg'
description: "🚀 A C++ unit testing framework for Windows and Unix-like systems."
tags:
- cppdaily
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[Google Test](https://github.com/google/googletest) is a [C++](https://terminalroot.com/tags#sfml) unit testing framework developed by Google. It allows you to write automated tests, check conditions, group tests, use fixtures, and more.


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
**Dependencies**: Compiler: [Clang](https://terminalroot.com/how-to-install-the-new-version-of-clang-llvm-on-windows/), [GNU GCC](https://terminalroot.com/how-to-install-the-new-version-of-gcc-mingw-on-windows/), or [MSVC](https://terminalroot.com/how-to-compile-with-msvc-via-command-line/)

### On [Windows](https://terminalroot.com/tags#windows)
> Via [WinGet](https://winstall.app/apps/Google.GoogleDrive)

{% highlight bash %}
winget install --id=Google.GoogleDrive  -e
`{% endhighlight %}

### On [Ubuntu](https://terminalroot.com/tags#gnulinux)

{% highlight bash %}
sudo apt install googletest libgtest-dev
{% endhighlight %}

### On [Arch](https://terminalroot.com/meet-the-arch-hurd/)

{% highlight bash %}
sudo pacman -S googletest
{% endhighlight %}

---

### Basic Example

{% highlight cpp %}
#include <gtest/gtest.h>

constexpr auto sum = [](int a, int b){ 
  return a + b;
};

TEST(sum_test, sum_positive) {
  EXPECT_EQ(sum(2, 3), 5);
}

TEST(sum_test, sum_negative) {
  EXPECT_EQ(sum(-2, -3), -5);
}

int main(int argc, char **argv){
  ::testing::InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
{% endhighlight %}

Compile:

{% highlight bash %}
g++ test.cpp -lgtest
{% endhighlight %}

After running `./a.out`:

{% highlight bash %}
[==========] Running 2 tests from 1 test suite.
[----------] Global test environment set-up.
[----------] 2 tests from sum_test
[ RUN      ] sum_test.sum_positive
[       OK ] sum_test.sum_positive (0 ms)
[ RUN      ] sum_test.sum_negative
[       OK ] sum_test.sum_negative (0 ms)
[----------] 2 tests from sum_test (0 ms total)

[----------] Global test environment tear-down
[==========] 2 tests from 1 test suite ran. (0 ms total)
[  PASSED  ] 2 tests.
{% endhighlight %}

---

* `EXPECT_EQ(x, y)` – Checks for equality
* `ASSERT_TRUE(cond)` – Fails and stops execution if the condition is false
* `TEST_F` – Uses fixtures (setup/teardown)

If we change the `sum_positive` line to use a `float` and a negative number: `EXPECT_EQ(sum(2.f, -3), 5);`

Failures will be reported:

{% highlight bash %}
[==========] Running 2 tests from 1 test suite.
[----------] Global test environment set-up.
[----------] 2 tests from sum_test
[ RUN      ] sum_test.sum_positive
test.cpp:8: Failure
Expected equality of these values:
  sum(2.f, -3)
    Which is: -1
  5

[  FAILED  ] sum_test.sum_positive (0 ms)
[ RUN      ] sum_test.sum_negative
[       OK ] sum_test.sum_negative (0 ms)
[----------] 2 tests from sum_test (0 ms total)

[----------] Global test environment tear-down
[==========] 2 tests from 1 test suite ran. (0 ms total)
[  PASSED  ] 1 test.
[  FAILED  ] 1 test, listed below:
[  FAILED  ] sum_test.sum_positive

 1 FAILED TEST
{% endhighlight %}

---

You can test all your functions, classes, and structs from any project, e.g., [SFML](https://terminalroot.com/sfml), [SDL](https://terminalroot.com/sdl), ... or any other type of project.

For more information, visit the repository: [https://github.com/google/googletest](https://github.com/google/googletest).

