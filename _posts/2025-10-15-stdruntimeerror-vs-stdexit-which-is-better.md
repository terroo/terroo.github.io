---
layout: post
title: "std::runtime_error vs std::exit, which is better?"
date: 2025-10-15 18:59:30
image: '/assets/img/cppdaily/std-runtime_error-vs-std-exit.jpg'
description: "🏁 Error handling and termination in C++."
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In [C++](https://terminalroot.com/tags#cpp), handling errors correctly is essential to ensure program stability and predictability.

Two common mechanisms used for this purpose are **`std::runtime_error`**, which is part of the language's exception system, and **`std::exit`**, which terminates the process immediately.

Although both can be used to signal failures, they have **completely different purposes**: one focuses on **handling and recovery**, the other on **immediate termination**.

In this article, we will see how each one works, show when to apply them, and discuss which approach is more suitable in different development contexts.


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

## `std::runtime_error`

`std::runtime_error` is a standard [C++](https://terminalroot.com/tags#cpp) library exception derived from `std::exception`.
It is used to signal **runtime errors** that prevent the normal continuation of the program.

#### **Usage:**

{% highlight cpp %}
#include <stdexcept>
#include <iostream>

void loadFile(const std::string& path) {
    if (path.empty()) {
        throw std::runtime_error("Invalid file path");
    }
    // ...
}

int main() {
    try {
        loadFile("");
    } catch (const std::runtime_error& e) {
        std::cerr << "Error: " << e.what() << '\n';
    }
}
{% endhighlight %}

#### **Characteristics:**

* It is **thrown with `throw`** and **handled with `try/catch`**.
* Allows **controlled error propagation**, preserving the program state.
* Ensures **automatic resource release** via *stack unwinding* (destructors of local objects are called).
* Ideal for **recoverable or predictable errors**, such as read failure, invalid value, etc.

---

## `std::exit`

`std::exit` (defined in `<cstdlib>`) terminates the program **immediately**, returning a status code to the operating system.

#### **Usage:**

{% highlight cpp %}
#include <cstdlib>
#include <iostream>

int main() {
    std::cerr << "Fatal error, terminating.\n";
    std::exit(EXIT_FAILURE);
}
{% endhighlight %}

#### **Characteristics:**

* **Does not throw an exception**, nor performs *stack unwinding*.
* **Automatic (local)** objects do not have their destructors called.
* **Static and global** objects are still destroyed.
* Ideal for **fatal errors** or situations where the program state is completely corrupted.

---

## Which to use and when?

| Situation                                                                   | Recommended          | Reason                                                       |
| --------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------ |
| Predictable or recoverable error                                            | `std::runtime_error` | Allows handling via `try/catch` and automatic cleanup        |
| Irrecoverable error (e.g., memory corruption, severe initialization failure) | `std::exit`          | Terminates immediately and in a controlled manner            |
| Library or engine code                                                      | `std::runtime_error` | Gives the caller a chance to react                           |
| Small program or simple utility                                             | `std::exit`          | Simplicity, no need for exceptions                           |

* Use **`std::runtime_error`** when you want to **propagate and handle errors** within the program logic.
* Use **`std::exit`** only when there is no way to continue — the error is fatal.
* In general, **`std::runtime_error` is safer and more flexible**, as it maintains flow control and ensures proper resource destruction.

**It depends on the context.**

### `throw std::runtime_error(...)`

**Better in most cases.**

* Allows **handling with `try/catch`**, stack unwinding, and destructors are called correctly (RAII).
* Used when there is a **logical or flow error**, and you want to **propagate the error**.

{% highlight cpp %}
throw std::runtime_error("Invalid file");
{% endhighlight %}

### `std::exit(1)`

**Use only if you want to terminate IMMEDIATELY and don't need to release resources.**

* **Does not perform stack unwinding** → destructors are not called.
* Good for **`main()` level**, tools, or if you really need to abort **without exceptions**.

{% highlight cpp %}
std::cerr << "Fatal error\n";
std::exit(1);
{% endhighlight %}

| Situation                               | Best Option              |
| --------------------------------------- | ------------------------ |
| Code with RAII/allocated resources      | `throw std::runtime_error` |
| In `main()` or simple tool              | `std::exit(1)`           |
| Needs error handling                    | `throw`                  |
| Want to terminate abruptly and quickly  | `std::exit(1)`           |

**Modern standard recommendation: use `throw`, not `exit`, unless you have a real reason.**


