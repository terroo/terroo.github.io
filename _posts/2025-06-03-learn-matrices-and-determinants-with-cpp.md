---
layout: post
title: "Learn Matrices and Determinants with C++"
date: 2025-06-03 17:29:57
image: '/assets/img/math/matriz.jpg'
description: "🔢 A high school math concept that became even more relevant in the era of Artificial Intelligence. "
tags:
- math
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In this article, we'll revisit fundamental concepts about Matrices and Determinants.

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

## Matrix
A quick explanation: a matrix organizes numeric data (like a table) to facilitate understanding and solving problems.

Matrices are used in various fields:
+ Mathematics;
+ Computing (AI, image processing...);
+ Engineering;
+ Economics;
+ Biology;

Among many others.

In general: **A matrix is a rectangular array of numbers (or expressions) arranged in rows and columns.** It looks like this:

<img src="/assets/img/math/mathjax/00.jpg" alt="" style="border:none;text-align:left">

This matrix has an **order** of `2x3` (2 rows and 3 columns). We always start by indicating the number of rows.

The notation `A = [aij]<sub>mxn</sub>` means, for example:
+ The number `1` is in the 1st row and 1st column → `a`<sub>11</sub>, and so on.

Converted entirely into `a`<sub>ij</sub>:

<img src="/assets/img/math/mathjax/01.jpg" alt="" style="border:none;text-align:left">

In [C++](https://terminalroot.com/tags#cpp), we can use [std::vector](https://terminalroot.com/two-dimensional-vectors-in-cpp/) or [std::array](https://terminalroot.com/how-to-use-stdarray-in-cpp/):
+ Use `std::vector<std::vector<int>>` for **dynamic and flexible** size.
+ Use `std::array<std::array<int, 3>, 2>` for **fixed size known at compile time**.
**Never use `std::list` for matrices.** It has inefficient random access.

### Examples:
**Using `std::vector`:**

{% highlight cpp %}
std::vector<std::vector<int>> A = {
    {1, 2, 3},
    {4, 5, 6}
};
{% endhighlight %}

**Using `std::array`:**

{% highlight cpp %}
std::array<std::array<int, 3>, 2> A = { {
    {1, 2, 3},
    {4, 5, 6}
} };
{% endhighlight %}

### Which to use?
* Use `std::vector` if the size changes at runtime.
* Use `std::array` for maximum performance with fixed size.

### Matrix construction
Suppose you're taking an exam and see this prompt:
+ Build matrix B = [`a`<sub>ij</sub>]<sub>2x3</sub> such that `a`<sub>ij</sub> = (i + j)<sup>2</sup>.

Solution:
+ `a`<sub>ij</sub> = (i + j)<sup>2</sup> ⇒ `a`<sub>11</sub> = (0 + 0)<sup>2</sup> ⇒ **`a`<sub>11</sub> = 0**
> Do the rest accordingly

In C++, using `std::array`:

{% highlight cpp %} 
#include <array>
#include <iostream>

int main() {
  std::array<std::array<int, 3>, 2> B;

  for (int i = 0; i < 2; ++i) {
    for (int j = 0; j < 3; ++j) {
      B[i][j] = (i + j) * (i + j);
    }
  }

  for (const auto& row : B) {
    for (int val : row) {
      std::cout << val << " ";
    }
    std::cout << "\n";
  }

  return 0;
}
{% endhighlight %}

With `std::vector`, just replace:

{% highlight cpp %} 
std::vector<std::vector<int>> B(2, std::vector<int>(3));
{% endhighlight %}
> The rest is the same.

The result:

<img src="/assets/img/math/mathjax/02.jpg" alt="" style="border:none;text-align:left">

### Matrix Types

Segue a tradução:

---

#### 1. **Square Matrix**

* **Description:** Number of rows equals number of columns (`nxn`).
* **Example:**

<img src="/assets/img/math/mathjax/03.jpg" alt="" style="border:none;text-align:left">

#### 2. **Row Matrix**

* **Description:** Only one row.
* **Example:**

<img src="/assets/img/math/mathjax/04.jpg" alt="" style="border:none;text-align:left">

#### 3. **Column Matrix**

* **Description:** Only one column.
* **Example:**

<img src="/assets/img/math/mathjax/05.jpg" alt="" style="border:none;text-align:left">

#### 4. **Zero Matrix**

* **Description:** All elements are zero.
* **Example:**

<img src="/assets/img/math/mathjax/06.jpg" alt="" style="border:none;text-align:left">

#### 5. **Identity Matrix**

* **Description:** Main diagonal has 1s, rest are 0s. Denoted by <b>I<sub>n</sub></b>.
* **Example:**

<img src="/assets/img/math/mathjax/07.jpg" alt="" style="border:none;text-align:left">

#### 6. **Diagonal Matrix**

* **Description:** Only the main diagonal can have nonzero values.
* **Example:**

<img src="/assets/img/math/mathjax/08.jpg" alt="" style="border:none;text-align:left">

#### 7. **Scalar Matrix**

* **Description:** Diagonal matrix where all diagonal values are equal.
* **Example:**

<img src="/assets/img/math/mathjax/09.jpg" alt="" style="border:none;text-align:left">

#### 8. **Symmetric Matrix**

* **Description:** <b>A = A<sup>T</sup></b>, i.e., equal to its transpose.
* **Example:**

<img src="/assets/img/math/mathjax/10.jpg" alt="" style="border:none;text-align:left">

#### 9. **Skew-Symmetric Matrix**

* **Description:** <b>A<sup>T</sup> = -A</b>. Main diagonal is always zero.
* **Example:**

<img src="/assets/img/math/mathjax/11.jpg" alt="" style="border:none;text-align:left">

#### 10. **Upper Triangular Matrix**

* **Description:** All elements below the main diagonal are zero.
* **Example:**

<img src="/assets/img/math/mathjax/12.jpg" alt="" style="border:none;text-align:left">

#### 11. **Lower Triangular Matrix**

* **Description:** All elements above the main diagonal are zero.
* **Example:**

<img src="/assets/img/math/mathjax/13.jpg" alt="" style="border:none;text-align:left">

#### 12. **Transpose Matrix**

* **Description:** Rows become columns. Denoted <b>A<sup>T</sup></b>.
* **Example:**

<img src="/assets/img/math/mathjax/14.jpg" alt="" style="border:none;text-align:left">

#### 13. **Opposite Matrix**

* **Description:** All elements multiplied by -1.
* **Example:**

<img src="/assets/img/math/mathjax/15.jpg" alt="" style="border:none;text-align:left">

#### 14. **Rectangular Matrix**

* **Description:** Number of rows is different from number of columns.
* **Example:**

<img src="/assets/img/math/mathjax/16.jpg" alt="" style="border:none;text-align:left">

---

### Matrix Calculations

Arithmetic (algebraic or matrix) operations with matrices.

#### **a) Addition and Subtraction**

Only possible if matrices have the same order.

<img src="/assets/img/math/mathjax/17.jpg" alt="" style="border:none;text-align:left">

> That is, `1 + 5` = `6`, `2 + 6` = `8`, and so on.

In C++:

```cpp
#include <array>
#include <iostream>

int main() {
  std::array<std::array<int, 2>, 2> A = { { {1, 2}, {3, 4} } };
  std::array<std::array<int, 2>, 2> B = { { {5, 6}, {7, 8} } };
  std::array<std::array<int, 2>, 2> C;

  for (int i = 0; i < 2; ++i){
    for (int j = 0; j < 2; ++j){
      C[i][j] = A[i][j] + B[i][j];
    }
  }

  for (auto& row : C){
    for (int v : row){
      std::cout << v << (v == row.back() ? '\n' : ' ');
    }
  }
}
```

#### **b) Scalar Multiplication**

Each element is multiplied by a real number (scalar).

<img src="/assets/img/math/mathjax/18.jpg" alt="" style="border:none;text-align:left">

> That is, `3 x 1` = `3`, `3 x 2` = `6`, and so on.

In C++:

```cpp
#include <array>
#include <iostream>

int main() {
  std::array<std::array<int, 2>, 2> A = { { {1, 2}, {3, 4} } };
  std::array<std::array<int, 2>, 2> B;
  int scalar = 3;

  for (int i = 0; i < 2; ++i){
    for (int j = 0; j < 2; ++j){
      B[i][j] = scalar * A[i][j];
    }
  }

  for (auto& row : B){
    for (int v : row){
      std::cout << v << (v == row.back() ? '\n' : ' ');
    }
  }
}
```

#### **c) Matrix Multiplication**

The number of columns of the first matrix must equal the number of rows of the second.

<img src="/assets/img/math/mathjax/19.jpg" alt="" style="border:none;text-align:left">

In C++:

```cpp
#include <array>
#include <iostream>

int main() {
  std::array<std::array<int, 2>, 2> A = { { {1, 2}, {3, 4} } };
  std::array<std::array<int, 2>, 2> B = { { {5, 6}, {7, 8} } };
  std::array<std::array<int, 2>, 2> C = {};

  for (int i = 0; i < 2; ++i){
    for (int j = 0; j < 2; ++j){
      for (int k = 0; k < 2; ++k){
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  for (auto& row : C){
    for (int v : row){
      std::cout << v << (v == row.back() ? '\n' : ' ');
    }
  }
}
```


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

## Determinants
A **determinant** is a number associated only with **square matrices**, useful to solve linear systems and verify if a matrix is invertible.

> **IMPORTANT**: Matrices are denoted with brackets `[ ]`, but determinants use vertical bars `| |`.

### 3.2 Calculating the Determinant
#### a) `2x2` Matrix

<img src="/assets/img/math/mathjax/20.jpg" alt="" style="border:none;text-align:left">

Example:

<img src="/assets/img/math/mathjax/21.jpg" alt="" style="border:none;text-align:left">


Em C++:
{% highlight cpp %} 
#include <iostream>

int main(){
  int a = 1, b = 2;
  int c = 3, d = 4;

  int det = a * d - b * c;

  std::cout << det << '\n';
}
{% endhighlight %}


#### b) `3x3` Matrix (Sarrus Rule)
Sarrus' Rule consists of appending the 1st and 2nd columns to the right side of the determinant matrix and *drawing* diagonals (starting from the numbers in the first ROW), for example:

> This is for a `3x3` matrix.

<img src="/assets/img/math/mathjax/sarrus.png" alt="">

<img src="/assets/img/math/mathjax/22.jpg" alt="" style="border:none;text-align:left">

**Example:**

<img src="/assets/img/math/mathjax/23.jpg" alt="" style="border:none;text-align:left">

> `= 45 + 84 + 96 - 105 - 48 - 72 = 0`

In C++:
{% highlight cpp %}
#include <iostream>

int main(){
    int a11 = 1, a12 = 2, a13 = 3;
    int a21 = 4, a22 = 5, a23 = 6;
    int a31 = 7, a32 = 8, a33 = 9;

    int det =
        a11 \* a22 \* a33 +
        a12 \* a23 \* a31 +
        a13 \* a21 \* a32
        \- a13 \* a22 \* a31
        \- a11 \* a23 \* a32
        \- a12 \* a21 \* a33;

    std::cout << det << '\n';
}
{% endhighlight %}


#### 3.3 Properties of Determinants
- If a row or column is all zeros, `det = 0`.  
- If two rows or columns are equal, `det = 0`.  
- `det(A x B) = det(A) x det(B)`.  

#### 4. Applications
- **Linear Systems:** Solve using **Cramer's Rule**.  
- **Inverse Matrix:** A matrix A is invertible if det(A) ≠ 0.

#### 5. Exercise
+ Compute the determinant:

<img src="/assets/img/math/mathjax/24.jpg" alt="" style="border:none;text-align:left">


Em C++:
{% highlight cpp %} 
#include <iostream>

int main(){
  int a = 7, b = 3;
  int c = -2, d = 4;

  int det = a * d - b * c;

  std::cout << det << '\n';
}
{% endhighlight %}

<img src="/assets/img/math/mathjax/25.jpg" alt="" style="border:none;text-align:left">


Answer: **14**.


