---
layout: post
title: "Go Series: Variables, Concatenation, Constants and Data Types"
date: 2025-04-02 13:53:16
image: '/assets/img/go/series-go-02.jpg'
description: "🐹 Episode #02."
tags:
- go
- series-go
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Today we will continue the [Go Series](https://terminalroot.com/tags/#series-go). In the [previous episode](https://terminalroot.com/go-series-an-approach-to-the-golang-programming-language/) we saw an introduction and the first steps.

In this episode we will see:
+ Variables;
+ Concatenation;
+ Constants;
+ and Data Types.


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

## Variables
In Go there are data types, but you can create a *variable* without informing the type using the `:=` operator, for example creating a *variable* of type *string*:
> `variable := "Hello, Golang!"`

{% highlight go %}
package main
import "fmt"

func main (){
    variable := "Hello, Golang!"
    fmt.Println(variable)
}
{% endhighlight %}

Using the reserved word `var`
{% highlight go %}
package main
import "fmt"

func main (){
    var variable = "Hello, Golang!"
    fmt.Println(variable)
}
{% endhighlight %}

Rules for creating variables:
+ **Do not combine forms by mixing**: ~~`var variable := "Hello, Golang!"`~~ or ~~`variable = "Hello, Golang!"`~~ . + **Do not use accentuation for variable names**: ~~`variable := "Hello, Golang!"`~~
+ **Only name variables with numbers if the first character is a letter**: ~~`1variable := "Hello, Golang!"`~~, but `variable1` or `var1avel`
+ **The only special character that should be used is the underscore**, the order in which it appears is independent: `_variable`, `variable_`, `variable_, `var1_avel`, `_vari_1avel`...

Use the reserved word `var` or the `:=` operator for any data type, examples:
{% highlight go %}
package main

import "fmt"

func main (){
    var num = 10
    var hello = "Hello"
    world := "World"
    var price = 49.54
    fmt.Println(num)
    fmt.Print(hello)
    fmt.Print(" ")
    fmt.Println(world)
    fmt.Println(price)
}
{% endhighlight %}

Variables, of course, can vary the value, but use both `var` and `:=` only when creating for the first time, examples:

Correct:
{% highlight go %}
var name = "Marcos Oliveira"
name = "Terminal Root"
fmt.Println(name)
{% endhighlight %}
> Output: `Terminal Root` .

Wrong:
{% highlight go %}
var name = "Marcos Oliveira"
var name = "Terminal Root"
fmt.Println(name)
{% endhighlight %}
> Error compiling/running: `./arquivo.go:7:7: name redeclared in this block`

Another observation is that if you try to use a variable that you did not initialize (only declared, but did not assign any initial value) using the reserved word `var`, there will be an error when executing/compiling the program, for example:
{% highlight go %}
package main

import "fmt"

func main(){
    var name; // ERROR
    name = "Marcos"; fmt.Println(name)
}
{% endhighlight %}
> Also note that the `;` is optional in Go.

**VARIABLES CREATED AND NOT USED, GENERATE ERROR IN COMPILE!**

---

## Concatenation
The operator to concatenate in Go is the `+` (plus), however, this only works (logically) for strings. Usage example:
{% highlight go %}
package main

import "fmt"

func main (){
    var hello = "Hello"
    world := "World"
    fmt.Print(hello + ", " + world + "!\n")
}
{% endhighlight %}
> Note that we can also use escaped characters to skip a line: `\n` in `Print` without *ln*, but we also skip the line.


<!-- RECTANGLE 2 - OnParagragraph -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="8549252987"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## Constants
To create constants, use the reserved word `const`.

Unlike variables, under no circumstances can the value be changed:
{% highlight go %}
package main

import "fmt"

func main(){
    const pi = 3.14
    fmt.Println(pi)
}
{% endhighlight %}

If you try to redefine the constant named `pi` you will get an error:
{% highlight go %}
package main

import "fmt"

func main(){
    const pi = 3.14
    pi = 6.18
    fmt.Println(pi)
}
{% endhighlight %}
> `/hello.go:7:6: cannot assign to pi (declared const)`

---

# Data Types
When we use both `var` and `:=` the data type is used dynamically (the default size of the type is assigned) and this can influence performance depending on the type of application/program you are creating.

So, for each content a type is used, for example, for a variable to have the content `"Hello, Golang!"` Go dynamically creates the type `string`, for a number without punctuation it uses `int`, with punctuation it is `float`, and among others, see the basic types in the table below:
> To understand some information in the table you need to have intermediate knowledge of Mathematics

| TYPE | DESCRIPTION | EXAMPLE |
|---|---|---|
| `byte` | for a single character | `a` |
| `string` | for a set of characters | `"Hello, Golang!"` |
| `int` | for positive and negative numbers | `10` or `-10` |
| `float` | for irrational numbers | `9.36` |
| `complexN` | for complex numbers, where **N** must be the size | `6i` |
| `rune` | for unicode symbols (emoji, for example) | `U+0030` |
| `bool` | for values ​​according to boolean mathematics | `true` or `false` |

Some of the basic types mentioned above have subcategories that can vary the size of the variable, examples:
+ The `int` type has: `int8`, `int16`, `int32` and `int64` the number represents the amount of bits, for example, `int64` can store up to 64 bits or 8 bytes (64 / 8) and so on, the standard will depend on the operating system that is running the Go code.
+ The `float` type is subdivided into: `float32` and `float64`, the default is 64 .
+ The `complexN` type must be: `complex64` or `complex128` .
> The other types do not have subdivisions, but for the `bool` type the default is `false` .

Creating a code defining the type:
> It only works when combined with the reserved word `var`
{% highlight go %}
package main

import "fmt"

func main(){
var helloworld string = "Hello, Golang"
fmt.Println(helloworld)
}
{% endhighlight %}
> If you are familiar with other programming languages, notice that the type is declared after the name.

Other examples:
{% highlight go %}
package main

import "fmt"

func main(){

    // String
    var helloworld string = "Hello, Golang"
    helloworld = "Hello, Go!"
    fmt.Println(helloworld) // Hello, Go!

    // int
    var num int = 42
    fmt.Println(num)

    // float32
    var x float32 = 54.892
    fmt.Println(x)

    // complexN → complex64
    var yx complex64 = 2 + 5i
    fmt.Println(yx)

    // byte
    var letter byte = 'a'
    fmt.Println(letter) // 97 according to the ASCII table

    // rune
    fmt.Printf("%U\n", []rune("☎")) // we will see more details later

    // bool
    var p bool; // or var p bool = true
    fmt.Println(p) // false
}
{% endhighlight %}

The likely outputs of the above code:
{% highlight sh %}
Hello, Go! 42
54,892
(2+5i)
97
[U+260E]
false
{% endhighlight %}

---

That's it for this episode, see you next time!

