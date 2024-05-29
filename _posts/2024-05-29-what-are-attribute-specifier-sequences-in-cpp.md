---
layout: post
title: "What are: Attribute Specifier Sequences in C++?"
date: 2024-05-29 11:56:28
image: '/assets/img/cpp/nodiscard.jpg'
description: "🗞️ Important for: Detecting errors, Optimizing the code and Providing additional information to the developer."
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Attribute Specifiers in [C++](https://terminalroot.com/tags#cpp) are metadata that provide additional information to the compiler about how it should treat certain parts of the code.

These attributes can help:
+ Detect errors;
+ Optimize the code;
+ or Provide additional information to the developer.

Let's see some examples of attributes in [C++](https://terminalroot.com/tags#cpp).

---

## Examples of Attributes in C++
### 01. `[[nodiscard]]`:
This attribute indicates that the return value of a function should not be ignored. If the return value is ignored, the compiler generates a warning.

{% highlight cpp %}
[[nodiscard]] int computeValue() {
 return 42;
}

int main() {
 computeValue(); // Compiler warning: return value ignored
 int result = computeValue(); // Correct, the return value is used
 return 0;
}
{% endhighlight %}

The compiler will issue a warning if the computeValue function is called and its return value is not used. This is useful to avoid accidentally losing important valuables.
> If you remove `[[nodiscard]]` from the code note that there will be no warnings, but with `[[nodiscard]]` the output will be similar to this:
{% highlight bash %}
nodiscard.cpp: In function ‘int main()’:
nodiscard.cpp:8:17: warning: ignoring return value of ‘int computeValue()’, declared with attribute ‘nodiscard’ [-Wunused-result]
 8 | computeValue(); // Compiler warning: return value ignored
 | ~~~~~~~~~~~~~^~
nodiscard.cpp:3:19: note: declared here
 3 | [[nodiscard]] int computeValue() {
{% endhighlight %}

---

### 02. `[[fallthrough]]`:
This attribute is used in a case statement within a switch to indicate that the fallthrough to the next case is intentional. This helps avoid compiler warnings about accidental crashes.

{% highlight cpp %}
void process(int value) {
 switch(value) {
 case 1:
 // Code for case 1
 [[fallthrough]];
 case 2:
 // Code for case 2
 break;
 default:
 // Code for other cases
 break;
 }
}
{% endhighlight %}

In the switch example, `[[fallthrough]]` indicates that the fallthrough from case 1 to case 2 is intentional. Without this attribute, the compiler could issue a warning about the lack of break in case 1.

---

### 03. `[[unlikely]]`:
This attribute suggests to the compiler that the probability of executing a branch of code is low. This can help in optimizing the generated code.

{% highlight cpp %}
#include <iostream>

void checkValue(int value) {
 if (value == 42) [[unlikely]] {
 std::cout << "The value is 42, which is unlikely!\n";
 } else {
 std::cout << "The value is not 42.\n";
 }
}

int main() {
 checkValue(10);
 checkValue(42);
 return 0;
}
{% endhighlight %}

The compiler can optimize the generated code based on the hint that the condition `value == 42` is unlikely to be true, possibly reordering the code to improve performance in the most common case.

---

These attributes are part of the ongoing modernization of the [C++ language](https://terminalroot.com/tags#cpp) to make code more expressive and help with early error detection as well as performance optimization.

For more information visit [cpp reference](https://en.cppreference.com/w/cpp/language/attributes).
