---
layout: post
title: "Create REPL Commands Easily"
date: 2025-01-31 21:36:52
image: '/assets/img/cppdaily/repl.jpg'
description: "🚀 With just a header-only!"
tags:
- cpp
- cppdaily
- repl
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Command Interpreter** is a `header-only` written in [C++](https://terminalroot.com/tags#cpp) that allows you to create a *repl shell* with custom commands for you to use as you wish. In this article we will see: dependencies, usage and examples.

---

## Dependencies
To use the Command Interpreter you will need the library: [Boost](https://terminalroot.com/concept-installation-and-examples-of-using-the-boost-library/)

Use your package manager to install `libboost`, example on [Ubuntu](https://terminalroot.com/tags#ubuntu):
{% highlight bash %}
sudo apt install libboost-all-dev
{% endhighlight %}

---

## Download the Command Interpreter
Since it is just a `header-only` you can download it directly from the browser or use a utility for this, examples:

[GNU/wget](https://www.gnu.org/software/wget/) on distros [GNU/Linux](https://terminalroot.com/tags#gnulinux)
{% highlight bash %}
wget https://raw.githubusercontent.com/empirical-soft/command-interpreter/refs/heads/master/command_interpreter.hpp
{% endhighlight %}

[cURL](https://terminalroot.com/tags#curl) for [macOS](https://terminalroot.com/tags#macos) or [BSD](https://terminalroot.com/tags#bsd)
{% highlight bash %}
curl -LO https://raw.githubusercontent.com/empirical-soft/command-interpreter/refs/heads/master/command_interpreter.hpp
{% endhighlight %}

[PowerShell](https://terminalroot.com/tags#powershell) no [Windows](https://terminalroot.com/tags#windows)
{% highlight bash %}
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/empirical-soft/command-interpreter/refs/heads/master/command_interpreter.hpp"
{% endhighlight %}

---

## Code example
Let's create a REPL that has 2 commands:
1. `add` that increments, example: `add 3 6` that will display: **9**;
2. `inc` that increments, example: `inc 9` that will display: **10**.

> `main.cpp`
{% highlight cpp %}
#include <iostream>
#include <memory>
#include "command_interpreter.hpp"

class Arithmetic : public CommandInterpreter {
  constexpr static int add(int x, int y) {
    return x + y;
  }

  constexpr int inc(int x) {
    return x + 1;
  }

  void register_commands() override {
    register_command(add, "add", "Add two numbers");
    register_command(&Arithmetic::inc, "inc", "Increment a number");
  }
};

int main(){
  auto a = std::make_unique<Arithmetic>();
  std::string comm;
  std::cout << ">>> ";
  for(;;){
    if(!std::getline(std::cin, comm) || comm == "exit"){
      break;
    }
    std::cout << a->eval(comm) << std::endl;
    std::cout << ">>> ";
  }
  return EXIT_SUCCESS;
}
{% endhighlight %}

After compiling and running:
{% highlight bash %}
g++ main.cpp -o repl
./repl
{% endhighlight %}

Example output:
> Typing `exit` exits the REPL
{% highlight bash %}
>>> add 3 6
9
>>> inc 9
10
>>> exit
{% endhighlight %}

---

For more information, visit the repository: <https://github.com/empirical-soft/command-interpreter>.

