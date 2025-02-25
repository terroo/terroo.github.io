---
layout: post
title: "Understanding std::hash in C++"
date: 2025-02-25 10:03:07
image: '/assets/img/cppdaily/en-std-hash.jpg'
description: "🚀 Provides a standardized hash function for primitive types and some types from the standard library"
tags:
- stl
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

`std::hash` is part of the `<functional>` header of the STL (Standard Template Library) and provides a standardized hash function for primitive types and some types from the standard library. It is mainly used to implement hash tables, such as `std::unordered_map` and `std::unordered_set`.

---

## How `std::hash` works
`std::hash<T>` is a functor (function-object) that returns a hash value for an object of type `T`. For types that do not have a standard specialization, a custom specialization can be defined.

---

## Basic example

{% highlight cpp %}
#include <iostream>
#include <functional>

int main() {
    std::hash<int> hashInt; std::hash<std::string> hashString;

    int num = 42;
    std::string str = "hello";

    std::cout << "Hash of " << num << ": " << hashInt(num) << '\n';
    std::cout << "Hash of " << str << ": " << hashString(str) << '\n';

    return 0;
}
{% endhighlight %}

Expected output (values may vary):
{% highlight txt %}
Hash of 42: 42
Hash of hello: 1762889876
{% endhighlight %}

## Usage with `std::unordered_map`
`std::hash` is often used in conjunction with `std::unordered_map` to create efficient hash tables:

{% highlight cpp %}
#include <iostream>
#include <unordered_map>

int main() {
    std::unordered_map<std::string, int> hashtable;

    hashtable["Alice"] = 25;
    hashtable["Bob"] = 30;
    hashtable["Charlie"] = 35;

    for (const auto& [key, value] : hashtable) {
        std::cout << "Key: " << key << ", Value: " << value << '\n';
    }
    return 0;
}
{% endhighlight %}

Expected output:
{% highlight txt %}
Key: Alice, Value: 25
Key: Bob, Value: 30
Key: Charlie, Value: 35
{% endhighlight %}

## Creating a custom `std::hash`
If we want to use a custom data type as a key in a `std::unordered_map`, we need to provide a custom hash function:

{% highlight cpp %}
#include <iostream>
#include <unordered_map>
#include <functional>

struct Person {
    std::string name;
    int age;

    bool operator==(const Person& other) const {
        return name == other.name && age == other.age;
    }
};

struct HashPerson {
    std::size_t operator()(const Person& p) const {
        return std::hash<std::string>()(p.name) ^ (std::hash<int>()(p.age) << 1);
    }
};

int main() {
    std::unordered_map<Person, std::string, HashPerson> people;

    people[{"Alice", 25}] = "Engineer";
    people[{"Bob", 30}] = "Doctor";

    for (const auto& [person, profession] : people) {
        std::cout << "Person: " << person.name << ", Age: " << person.age << " -> Profession: " << profession << '\n';
    }

    return 0;
}
{% endhighlight %}

1. The `Person` structure is used as a key.
2. The `==` operator is implemented for comparison between objects.
3. We create a `HashPerson` functor that combines the hashes of the name and age.

This ensures that the `Person` type can be used inside `std::unordered_map`.

---

`std::hash` is a powerful tool for creating efficient hash tables. We can use it for basic types and also create custom hash functions for user-defined types.
