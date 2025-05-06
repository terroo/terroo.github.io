---
layout: post
title: "Go Series: Arrays, Operators and Conditions"
date: 2025-05-05 21:07:33
image: '/assets/img/go/series-go-03.jpg'
description: "🚀 Episode 03."
tags:
- go
- series-go
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In this article we will continue our [Go Series](https://terminalroot.com/tags#series-go), the previous topics are:
+ [Go Series: An approach to the Golang Programming Language](https://terminalroot.com/go-series-an-approach-to-the-golang-programming-language/)
+ [Go Series: Variables, Concatenation, Constants and Data Types](https://terminalroot.com/go-series-variables-concatenation-constants-and-data-types/)

In this article we will see: **Arrays, Operators and Conditions**.


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

## Arrays
Arrays in [Go](https://terminalroot.com/tags#go) are data structures that store a fixed sequence of elements of the same type. They are useful when you know in advance the exact number of elements that will be manipulated.

#### Declaration
{% highlight go %}
var a [5]int
{% endhighlight %}

Creates an array of 5 integers, initialized with zero.

You can also initialize directly:

{% highlight go %}
b := [3]string{"Go", "é", "fast"}
{% endhighlight %}

Or let the compiler infer the size:

{% highlight go %}
c := [...]float64{3.14, 2.71, 1.41}
{% endhighlight %}

#### Access and Modification
{% highlight go %}
a[0] = 10
fmt.Println(a[0])
{% endhighlight %}

#### Iteration
{% highlight go %}
for i, v := range b {
    fmt.Println(i, v)
}
{% endhighlight %}

#### Properties
* **Fixed size**: the size is part of the type. `[3]int` and `[4]int` are different types. * **Copying value**: when assigning an array to another, it is copied:

{% highlight go %}
x := [2]int{1, 2}
y := x
y[0] = 9
fmt.Println(x) // [1 2]
{% endhighlight %}

#### Multidimensional Arrays
{% highlight go %}
var array [2][3]int
array[0][1] = 42
{% endhighlight %}

#### Limitations
* Fixed size makes arrays inflexible.
* Usually replaced by slices, which are more dynamic.


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

## Operators
Go offers a straightforward set of operators for manipulating values. They are divided into categories: arithmetic, relational, logical, bitwise, assignment, and special. They are used to perform common mathematical operations:

|Operator|Name|Description|Example| 
|---|---|---|---|
|`+`|Addition|Adds two values|x + y|
|`-`|Subtraction|Subtracts one value from another|`x - y`|
|`*`|Multiplication|Multiplies two values|`x * y`|
|`/`|Division|Divides one value by another|`x / y`|
|`%`|Modulus|Returns the remainder of the division|`x % y`|
|`++`|Increment|Increases the value of a variable by 1|`++x`|
|`--`|Decrement|Decreases the value of a variable by 1|`--x`|

There are also:
+ **Comparison** Operators: `==`, `!=`, `>`, `<`, `>=`, `<=`; + **Assignment** operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`, `>>=` and `<<=`;
+ **Logical** operators: `&&`, `||` and `!`;
+ **Bitwise** operators: `&`, `|`, `^`, `<<` and `>>` .

Example of a mathematical expression with Golang:
{% highlight go %}
package main

import "fmt"

func main(){
    fmt.Println( 2 + 6 / 4 + 3 * 3 - (4 -1) ) // 9
}
{% endhighlight %}
> `go run operators.go`

---

## Conditions
Go uses simple control structures for conditional decisions. The main ones are `if`, `if-else`, `else if` and `switch`.

#### 1. **`if`**
{% highlight go %}
if condition {
    // block executed if condition is true
}
{% endhighlight %}

Example:
{% highlight go %}
x := 10
if x > 5 {
    fmt.Println("Greater than 5")
}
{% endhighlight %}

#### 2. **`if` with short statement**
Allows you to initialize variables inside the `if`.
{% highlight go %}
if y := calculate(); y > 10 {
    fmt.Println("Result > 10")
}
{% endhighlight %}

`y` only exists inside the block.

#### 3. **`if-else`**
{% highlight go %}
if condition {
    // true
} else {
    // false
}
{% endhighlight %}

#### 4. **`else if`**
Allows multiple sequential checks:
{% highlight go %}
if x < 0 {
    fmt.Println("Negative")
} else if x == 0 {
    fmt.Println("Zero")
} else {
    fmt.Println("Positive")
}
{% endhighlight %}

#### 5. **`switch`**
Used for multiple comparisons, cleaner than multiple `if-else`.

{% highlight go %}
switch value {
    case 1:
        fmt.Println("One")
    case 2:
        fmt.Println("Two")
    default:
        fmt.Println("Other")
}
{% endhighlight %}

* No need for `break`.
* You can use `switch true` for boolean expressions:

{% highlight go %}
switch {
    case x < 0:
        fmt.Println("Negative")
    case x == 0:
        fmt.Println("Zero")
    default:
        fmt.Println("Positive")
}
{% endhighlight %}

#### 6. **`fallthrough`**
Forces the execution of the next `case`, even if the condition is not met:

{% highlight go %}
switch x := 1; x {
    case 1:
        fmt.Println("One")
        fallthrough
    case 2:
        fmt.Println("Two too")
}
{% endhighlight %}

---

That's all for today until the next topic!

