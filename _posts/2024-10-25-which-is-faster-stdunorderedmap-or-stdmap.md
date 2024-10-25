---
layout: post
title: "Which is faster: std::unordered_map or std::map?"
date: 2024-10-25 10:48:13
image: '/assets/img/cppdaily/unordered-vs-map.jpg'
description: "🚀 The main difference between them is in the way the keys are stored and accessed."
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The two data structures, `std::map` and `std::unordered_map`, are offered by the [C++](https://terminalroot.com/tags#cpp) standard library to store *key-value* pairs. The main difference between them is in the way the keys are stored and accessed. Let's detail these differences:

+ `std::map`: Keeps the keys ordered, O(log n) operations, binary search tree.
+ `std::unordered\_map`: Does not maintain order, O(1) operations on average, hash table.

### `std::map`

* **Ordering:** The keys in a `std::map` are stored in ascending order, based on a comparison criterion (by default, `operator<`). This means that the structure maintains a balanced binary search tree (usually a Red-Black tree) internally.
* **Search, Insertion, and Removal Complexity:** Search, insertion, and removal operations have logarithmic complexity, that is, O(log n), where n is the number of elements.
* **Iteration:** Iteration over the elements of a `std::map` is done in ascending order of the keys.

### `std::unordered_map`

* **Ordering:** The keys in a `std::unordered_map` are not stored in any specific order. Internally, it uses a hash table. * **Search, Insert, and Delete Complexity:** On average, these operations have O(1) complexity (constant time), provided that the hash function is efficient and the table is not too full. In the worst case, the complexity can be O(n) if there are many collisions.
* **Iteration:** The order of iteration over the elements is undefined and can vary as insertions and deletions are performed.

---

## Which of the two tends to be faster?
**`std::unordered_map`** tends to be faster than **`std::map`** for most cases, especially when it comes to search, insertion, and deletion operations. This is due to the following reasons:

1. **Complexity of Operations:**

* **`std::unordered_map`:** On average, search, insertion, and deletion operations have O(1) complexity, provided that the hash table is well-sized and the hash function is efficient. This means that the execution time of these operations is constant in most cases.
* **`std::map`:** The same operations have O(log n) complexity due to the balanced binary search tree structure. Therefore, the execution time increases logarithmically with the number of elements.
2. **Sorting Overhead:**

* **`std::unordered_map`:** Does not need to keep the keys in order, which eliminates the overhead associated with maintaining the ordered structure.
* **`std::map`:** Needs to keep the keys in order, which adds additional overhead compared to `std::unordered_map`.

For example, if you are developing a programming language with C++, `std::unordered_map` **tends to be the more advantageous choice** due to its efficiency in access operations.

---

### When might `std::map` be more advantageous?

Although `std::unordered_map` is generally faster, there are cases where `std::map` may be preferable:

* **Need for Ordering:** When it is necessary to iterate over the elements in a specific order (ascending key order), `std::map` is the correct choice.

* **Inefficient Hash Functions:** If the hash function is not efficient, there may be many collisions, which degrades performance to O(n) in the worst case. In this case, `std::map` may be more stable.

---

In summary, **`std::unordered_map` is generally faster** for access, insertion, and removal, but **`std::map` is more appropriate when ordering of the elements is required** or in situations where performance stability is crucial.
