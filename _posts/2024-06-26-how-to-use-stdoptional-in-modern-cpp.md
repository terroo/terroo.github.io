---
layout: post
title: "How to use std::optional in Modern C++"
date: 2024-06-26 09:18:55
image: '/assets/img/cppdaily/optional.jpg'
description: "🗞️ It is useful for situations where you want to indicate the absence of a value in a clearer and safer way than using null pointers."
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

`std::optional` is a functionality introduced in the [C++17](https://terminalroot.com/tags#cppdaily) standard library that encapsulates an optional value, that is, a value that can or cannot be present.

It is useful for situations where you want to indicate the absence of a value in a clearer and safer way than using [null pointers](https://terminalroot.com/use-modern-cpp-stdany-in-your-projects/) or special values.

Let's see some examples of use!


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

## 01. Creation and basic use
{% highlight cpp %}
#include <iostream>
#include <optional>

std::optional<int> find_even_number(int num) {
    if (num % 2 == 0) {
        return num;
    } else {
        return std::nullopt; // Indicates absence of value
    }
}

int main() {
    int num = 4;
    auto result = find_even_number(num);

    if (result) {
        std::cout << "Even number found: " << result.value() << '\n';
    } else {
        std::cout << "Number is not even.\n";
    }

    return 0;
}
{% endhighlight %}

---

## 02. Using `std::optional` with `std::string`
{% highlight cpp %}
#include <iostream>
#include <optional>

std::optional<std::string> get_middle_name(const std::string& full_name) {
    size_t space1 = full_name.find(' ');
    if (space1 == std::string::npos) {
        return std::nullopt;
    }
    size_t space2 = full_name.find(' ', space1 + 1);
    if (space2 == std::string::npos) {
        return std::nullopt;
    }
    return full_name.substr(space1 + 1, space2 - space1 - 1);
}

int main() {
    std::string name = "Marcos Simoes Oliveira";
    auto middle_name = get_middle_name(name);

    if (middle_name) {
        std::cout << "Middle name: " << *middle_name << '\n';
    } else {
        std::cout << "Middle name was not found.\n";
    }

    return 0;
}
{% endhighlight %}


<!-- RECTANGLE LARGE -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## 03. Handling `std::optional`
{% highlight cpp %}
#include <iostream>
#include <optional>

int main() {
    std::optional<int> opt;

    // Assigning a value
    opt = 42;
    std::cout << "Value: " << *opt << '\n';

    // Removing the value
    opt.reset();
    if (!opt) {
        std::cout << "No value.\n";
    }

    // Using default value
    std::cout << "Value or pattern: " << opt.value_or(-1) << '\n';

    return 0;
}
{% endhighlight %}

---

## 04. Working with functions that return `std::optional`
{% highlight cpp %}
#include <iostream>
#include <optional>

std::optional<std::string> get_first_word(const std::string& sentence) {
    size_t pos = sentence.find(' ');
    if (pos == std::string::npos) {
        return std::nullopt;
    }
    return sentence.substr(0, pos);
}

int main() {
    std::string sentence = "Hello, World!";
    auto first_word = get_first_word(sentence);

    if (first_word) {
        std::cout << "First word: " << *first_word << '\n';
    } else {
        std::cout << "The first word was not found.\n";
    }

    return 0;
}
{% endhighlight %}

---

In summary, `std::optional` is an elegant and safe way to handle optional values in [C++](https://terminalroot.com/tags#cpp), providing a clearer and less error-prone alternative compared to using null pointers or special values.

---

## Useful links
+ <https://en.cppreference.com/w/cpp/utility/optional>
+ <https://cengizhanvarli.medium.com/std-optional-in-c-06127604815e>
+ <https://www.learncpp.com/cpp-tutorial/stdoptional/>
+ <https://stackoverflow.com/questions/78581072/stdoptional-factory-function-with-guaranteed-copy-elision-and-private-cons>
