---
layout: post
title: "Understand assert in C++, C and Python"
date: 2024-08-29 08:36:08
image: '/assets/img/cppdaily/assert.jpg'
description: "🚀 Settling the accounts!"
tags:
- cpp
- cppdaily
- clanguage
- python
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

`assert` is a macro or function used to check conditions that *should* be true at runtime. If the condition fails, the program usually exits, and an error message is displayed. It is a useful tool for debugging, ensuring that certain conditions are met during development.

## Using `assert` in [C++](https://terminalroot.com/tags#cpp) and [C](https://terminalroot.com/tags#clanguage)

In [C++](https://terminalroot.com/tags#cpp) and [C](https://terminalroot.com/tags#clanguage), `assert` is a macro defined in the header `<cassert>` (C++) or `<assert.h>` (C). It is primarily used to validate assumptions at runtime and can be disabled in production code by defining the `NDEBUG` macro.

+ **Performance**: `assert` should be used primarily for debugging. In production code, it is common to disable it to improve performance.
+ **Error Messages**: Whenever possible, provide a descriptive message to facilitate debugging, especially in large projects.

+ **Exceptions**: For critical validations, consider using exceptions (in [C++](https://terminalroot.com/tags#cpp) or [Python](https://terminalroot.com/tags#python)) or manual checks that are never disabled.


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

## Example in C++
{% highlight cpp %}
#include <iostream>
#include <cassert>

int divide(int a, int b) {
assert(b != 0 && "Divisor cannot be zero!");
return a / b;
}

int main() {
int x = 10;
int y = 0;

std::cout << "Division: " << divide(x, y) << std::endl;

return 0; }
{% endhighlight %}

In this example, `assert(b != 0)` ensures that the divisor is never zero. If `y` is zero, execution will stop with an error message.

---

## Example in C
{% highlight c %}
#include <stdio.h>
#include <assert.h>

int divide(int a, int b) {
assert(b != 0 && "Divisor cannot be zero!");
return a / b;
}

int main() {
int x = 10;
int y = 0;

printf("Division: %d\n", divide(x, y));

return 0;
}
{% endhighlight %}

The operation is the same as in the C++ example, since `assert` in C is also used to check the validity of conditions at runtime.

---

## Using `assert` in [Python](https://terminalroot.com/tags#python)
In Python, `assert` is a native language statement that works in a similar way. If the condition is false, an `AssertionError` exception is thrown. As in C/C++, `asserts` can be disabled in the production environment using the `-O` flag (optimize, `python -O script.py`) when running the script.

{% highlight python %}
def divide(a, b):
assert b != 0, "Divisor cannot be zero!"
return a / b

x = 10
y = 0

print("Division:", divide(x, y))
{% endhighlight %}

In this example: `assert b != 0` checks if `b` is non-zero. If `y` is zero, an `AssertionError` will be raised with the message "Divisor cannot be zero!", if you do not use `assert` or if you use the parameter: `-O` as mentioned, the error output will be different.

---

There are many implementations of `assert` mainly in [software that does unit testing](https://terminalroot.com/unit-test-and-benchmark-for-modern-cpp-with-catch2/), it is a powerful tool to avoid failures!
