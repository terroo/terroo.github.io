---
layout: post
title: "How to Install Carbon Language in Ubuntu and First Steps"
date: 2022-11-30 19:09:01
image: '/assets/img/carbon/carbon.jpg'
description: 'Carbon is the new programming language from Google, Open Source that intends to be the successor to C++.'
tags:
- carbon
- cpp
- programming
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Carbon, or Carbon-Lang, is an experimental, general-purpose programming language. 

The project is [open-source](https://terminalroot.com/tags#opensource) and was started by [Google](https://terminalroot.com/compile-your-cpp-programs-with-google-bazel/), following in the footsteps of previous Google-made programming languages (Go and Dart). Google engineer **Chandler Carruth** first introduced Carbon at the CppNorth conference in Toronto in July 2022. He stated that Carbon was created to be a [C++](https://terminalroot.com/tags#cpp) successor. 

The language is expected for a 1.0 release to occur in 2024 or 2025. The language intends to fix several perceived shortcomings of C++ but otherwise provides a similar feature set. 

The main goals of the language are readability and "bi-directional interoperability", as opposed to using a new language like [Rust](https://terminalroot.com/tags#rust) (which, while being based on [C++](https://terminalroot.com/tags#cppdaily), is not two-way compatible with C++ programs). Changes to the language will be decided by the Carbon leads.

Carbon's documents, design, implementation, and related tools are hosted on GitHub under the Apache-2.0 license with [LLVM](https://terminalroot.com/tags#llvm) Exception.

In this article we will see how to install [Carbon](https://github.com/carbon-language/carbon-lang) in [Ubuntu](https://terminalroot.com/tags#ubuntu) and the first steps.

---

# Installation

### 01. Update the system:

{% highlight bash %}
sudo apt update
{% endhighlight %}

### 02. Install the necessary dependencies:
{% highlight bash %}
sudo apt install sudo apt install build-essential curl git zlib1g-dev
{% endhighlight %}

### 03. Install [Homebrew](https://terminalroot.com.br/2021/07/homebrew-o-gerenciador-de-pacotes-do-macos-no-gnu-linux.html):
{% highlight bash %}
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
{% endhighlight %}

### 04. Load the Homebrew environment:
{% highlight bash %}
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
{% endhighlight %}

### 05. Install packages with Homebrew:
{% highlight bash %}
brew install gcc python@3.9 bazelisk llvm
{% endhighlight %}

### 06. Update [PIP](https://terminalroot.com/tags#python) and add `llvm` to the `$PATH` variable:
{% highlight bash %}
pip3.9 install -U pip
export PATH="$(brew --prefix llvm)/bin:${PATH}"
{% endhighlight %}

### 07. Clone and run Carbon:
{% highlight bash %}
git clone https://github.com/carbon-language/carbon-lang
cd carbon-lang
bazel run //explorer -- ./explorer/testdata/print/format_only.carbon
{% endhighlight %}

---

# First steps

### 08. 'Hello, World!' in carbon
> `vim ./explorer/testdata/prefix/sandbox.carbon`

{% highlight rust %}
package sample api;

fn Main() -> i32 {
  Print("Hello, World!");
  return 0;
}
{% endhighlight %}
> To compile, run: `bazel run //explorer -- ./explorer/testdata/print/sandbox.carbon`

### 09. Declaring variables:
{% highlight rust %}
package sample api;

fn Main() -> i32 {
  var s: auto = "Hello, Carbon";
  Print(s);
  return 0;
}
{% endhighlight %}

### 10. Basics for `if..else` conditions
{% highlight rust %}
package sample api;

fn Main() -> i32 {
    let x: i32 = 42;
    if( x == 6 ){
      Print("x is not equal to 6!");
    }else{
      Print("x is equal to {0}", x);
    }
    return 0;
}
{% endhighlight %}

### 11. Creating functions without parameters:
{% highlight rust %}
package sample api;

fn helloWorld() -> String {
  return "Hello world via function!";
}

fn Main() -> i32 {
  Print( helloWorld() );
  return 0;
}
{% endhighlight %}

### 12. Declaring functions with parameters
{% highlight rust %}
package sample api;

fn mySum(var x: i32, var y: i32) -> i32 {
  return x + y;
}

fn Main() -> i32 {
  Print("The sum of x + y: {0}", mySum(9, 3) );
  return 0;
}
{% endhighlight %}

---

For more information see the examples in the [explorer/testdata](https://github.com/carbon-language/carbon-lang/tree/trunk/explorer/testdata) directory and the [documentation](https://github. com/carbon-language/carbon-lang/).

If you want, try using Carbon online at: <https://carbon.godbolt.org/>.

