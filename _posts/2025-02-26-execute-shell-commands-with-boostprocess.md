---
layout: post
title: "Execute Shell Commands with Boost.Process"
date: 2025-02-26 09:47:46
image: '/assets/img/cppdaily/boost-process.jpg'
description: "🚀 More security, portability, and control than std::system."
tags:
- shell
- terminal
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[Boost.Process](https://www.boost.org/doc/libs/1_84_0/doc/html/process/reference.html) is a [C++](https://terminalroot.com/tags#cpp) library from [Boost](https://terminalroot.com/concept-installation-and-examples-of-using-the-boost-library/) that makes it easier to create and manage external processes, allowing you to **execute programs**, capture outputs, and handle inputs and errors efficiently.

It offers a modern and flexible interface for working with processes, encapsulating the implementation details of operating systems and providing features such as asynchronous execution, inter-process communication (IPC), stream output control, and runtime management.

It is ideal for applications that need to interact with external programs or execute system commands in a controlled and safe manner.

Boost.Process was created to offer a **safer and more flexible alternative** to `std::system()`, which has several limitations.


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

## Comparison with `std::system`
### 1. **More Control over the Process**
With `boost::process`, you can:
- Capture output and input (`std::system` does not allow this directly).
- Set environment variables.
- Work with asynchronous processes (`std::system` is always blocking).
- Specify working directories.

### 2. **Security**
`std::system()` executes commands via a **shell**, which can be dangerous if you are passing dynamic strings (risk of **command injection**).
Dangerous example with `std::system()`:
{% highlight cpp %}
std::string user_input = "ls && rm -rf /"; // If injected, it can be catastrophic!
std::system(user_input.c_str());
{% endhighlight %}
With Boost.Process, you pass arguments separately, avoiding injection problems:
{% highlight cpp %}
boost::process::child c("ls", "-l");
{% endhighlight %}

### 3. **Portability**
- `std::system()` depends on the system shell (`cmd.exe` on Windows, `/bin/sh` on Linux). - `boost::process` works in a **portable** way, without depending on the underlying shell.

### 4. **Asynchronous Execution**
- `std::system()` **blocks** execution until the process terminates.
- With Boost, you can run processes in parallel without crashing your program:
{% highlight cpp %}
boost::process::child c("long_task");
c.detach(); // Continue execution without waiting
{% endhighlight %}

### 5. **Direct Input/Output Manipulation**
With `boost::process`, you can easily redirect input/output:
{% highlight cpp %}
boost::process::ipstream out;
boost::process::child c("ls", boost::process::std_out > out);
std::string line; while (std::getline(out, line)) {
    std::cout << line << std::endl;
}
{% endhighlight %}
With `std::system()`, you would need **manual pipes**, which is more laborious.

### **When to Use Each?**
✅ Use **Boost.Process** if you need **portability, safety, I/O handling, or asynchronous execution**.

⚠️ Use `std::system()` **only for simple and fast commands** where safety and control are not issues.

---

## Installation and Usage Examples
To install Boost.Process, you can follow this article we made that shows both using package managers and downloading directly from the official LibBoost address: [Concept, Installation and Usage Examples of the Boost library](https://terminalroot.com/concept-installation-and-examples-of-using-the-boost-library/)

### Basic example
This example shows how to run the `ls` command using Boost.Process:
> Example: `main.cpp`

{% highlight cpp %}
#include <boost/process.hpp>
#include <iostream>
#include <string>

namespace bp = boost::process;

int main() {
    std::string output;
    bp::ipstream pipe_stream; // Stream to capture the output

    // Execute the "ls" command and redirect the output to pipe_stream
    bp::child c("ls", bp::std_out > pipe_stream);

    // Read the command output line by line
    std::string line;
    while (std::getline(pipe_stream, line)) {
        std::cout << line << std::endl;
    }

    c.wait(); // Wait for the process to finish
    return 0;
}
{% endhighlight %}
To compile, you don't need any additional flags, just compile normally and run:
{% highlight bash %}
g++ main.cpp
/a.out
{% endhighlight %}

If you want to use it with arguments, replace the line: `bp::child` with the one below:
{% highlight cpp %}
//bp::child c("ls", bp::std_out > pipe_stream); 
bp::child c("ls", "-l", "*.md", bp::std_out > pipe_stream);
{% endhighlight %}

In [Shells](https://terminalroot.com/tags#shell) that use [glob](https://en.wikipedia.org/wiki/Glob_(programming)) you may have a problem when using [wildcards](https://en.wikipedia.org/wiki/Wildcard_character), so use `bp::child` like this:
{% highlight cpp %}
//bp::child c("ls", bp::std_out > pipe_stream);
bp::child c("/bin/sh", "-c", "ls -l *.md", bp::std_out > pipe_stream);
{% endhighlight %}
> This lists in detail all files with the [Markdown](https://terminalroot.com/tags#markdown) extension in the directory where you run the binary.

---

## Another example
This example displays the version of [GNU GCC](https://terminalroot.com/tags#gcc), if you have it installed on your system, but with a more appropriate failure handling for use.

{% highlight cpp %}
#include <boost/process.hpp>
#include <iostream>
#include <stdexcept>

using namespace boost::process;

int main() {
    ipstream pipe_stream;
    std::string line;

    try {
        child c("/usr/bin/gcc", args = { "--version" }, std_out > pipe_stream);

        while (pipe_stream && std::getline(pipe_stream, line)) {
            std::cerr << line << std::endl;
        }

        c.wait();

        // Check if the process was successful
        if (c.exit_code() != 0) {
            throw std::runtime_error("Process failed with error code: " + std::to_string(c.exit_code()));
        }
    } catch (const std::exception& e) {
        std::cerr << "Failed to execute command: " << e.what() << std::endl;
        return 1;
    }

    return 0;
}
{% endhighlight %}

The ideal is to inform the full path of the program: `/usr/bin/gcc` instead of just: `gcc`, try changing it and put only the program command and see if it will give an error.

---

## Limitations
Just like any other subprocess lib, a few commands will not work as expected, as they may be a [command](https://terminalroot.com/tags#commands) BUILT-IN Shell, such as: `history`.

We have already covered this in this article: [Using C++ as a Shell Script](https://terminalroot.com/using-cpp-as-shell-script/).

Although it can display the history, if you try to clear the session, it will certainly not work. This happens because it is not a separate executable. When you run `history -c` in a subprocess, it is in a new shell that does not share the history of your main session.

This code below does not result in an expected action:

{% highlight cpp %}
#include <boost/process.hpp>
#include <iostream>

namespace bp = boost::process;

int main() {
    std::string output;
    bp::ipstream pipe_stream;

    bp::child c("/bin/bash", "-c", "history -c && history -w", bp::std_out > pipe_stream);

    std::string line;
    while (std::getline(pipe_stream, line)) {
        std::cout << line << std::endl;
    }

    c.wait();
    return 0;
}
{% endhighlight %}
If you still want to run the command, the code is correct (it can be improved with error handling as we saw), but the output will not show anything relevant, since `history -c` does not generate output and affects **only the subprocess**.

> The [history](https://www.gnu.org/software/bash/manual/html_node/Bash-History-Builtins.html) command is a built-in feature of the shell, not a separate executable. When you run `history -c` in a subprocess, it is in a new shell that does not share the history of your main session.

---

For more information, see the documentation: <https://www.boost.org/doc/libs/1_84_0/doc/html/process/reference.html>.

