---
layout: post
title: "How to open URL in default browser in: Go, Python, Ruby and Rust"
date: 2022-04-12 08:12:30
image: '/assets/img/programming/openurl.jpg'
description: 'Learn how to do this same task in 4 different programming languages.'
tags:
- programming
- python
- go
- rust
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Doing the same tasks in different programming languages improves our concept of logic. That is, the same result, but with different syntaxes.

In this article we will see how to open a URL in the default browser in 4 different programming languages:
+ [Python](https://terminalroot.com/tags#python)
+ [Go](https://terminalroot.com/tags#go)
+ [Ruby](https://terminalroot.com/tags#ruby)
+ [Rust](https://terminalroot.com/tags#rust)

Come on!

---

# [Python](https://terminalroot.com/tags#python)
In Python, just import the `webbrowser` library and use the `open()` function indicating the URL, for example:

> `vim openurl.py`
{% highlight python %}
import webbrowser
url="https://terminalroot.com/"
webbrowser.open(url)
{% endhighlight %}
> To run: `python openurl.py`

Easy, right?!


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

# [Go](https://terminalroot.com/tags#go)
In Golang we could use the package: [open-golang](https://github.com/skratchdot/open-golang) and use the commands: `go mod init github.com/skratchdot/open-golang/open` and ` go mod tidy` and compile.

But you can create a function for that, which will check the command on each different operating system(`open`, `xdg-open` and `start`), so the code would look like this:

> `vim openurl.go`
{% highlight go %}
package main

import (
  "fmt"
  "os/exec"
  "runtime"
  "log"
)

func openbrowser(url string) {
  var err error
  switch runtime.GOOS {
  case "linux":
    err = exec.Command("xdg-open", url).Start()
  case "windows":
    err = exec.Command("rundll32", "url.dll,FileProtocolHandler", url).Start()
  case "darwin":
    err = exec.Command("open", url).Start()
  default:
    err = fmt.Errorf("unsupported platform")
  }
  if err != nil {
    log.fatal(err)
  }
}

func main(){
  openbrowser("https://terminalroot.com/")
}
{% endhighlight %}
> To run: `go build openurl.go && ./openurl`

Almost easy, shall we say! 😃

---

# [Rust](https://terminalroot.com/tags#rust)
In Rust it is almost similar to the case of Go, that is, there is a [crate](https://github.com/amodm/webbrowser-rs) that you can download and use or you can create a function and according to the operating system and run the process with the appropriate command, let's do the second option:

Use `std::process::Command`!

For simplicity's sake, let's show you how to do this on UNIX-like systems:

> `vim openurl.rs`
{% highlight rust %}
use std::process::Command;

fn main() {
    let url = "https://terminalroot.com/";
    let mut openurl = Command::new("xdg-open");
    openurl.arg(url);
    openurl.status().expect("process failed to execute");
}
{% endhighlight %}
> To run: `rustc openurl.rs && ./openurl`

More or less easy too! 😎

---

# [Ruby](https://terminalroot.com/tags#ruby)
In Ruby it doesn't run away from logic for Go and Rust. That is, we will use `RbConfig::CONFIG['host_os']` to detect the operating system and create a case for the appropriate command. So:

> `vim openurl.rb`
{% highlight ruby %}
cmd = case RbConfig::CONFIG['host_os']
  when /mswin|mingw|cygwin/ then "start "
  when /darwin/ then "open "
  when /linux|bsd/ then "xdg-open "
  else raise "No OS detected"
end
    
b = system cmd + "https://terminalroot.com/"
{% endhighlight %}
> To run: `ruby openurl.rb`

If it weren't for the `case` it would be easier, for example on a UNIX-like system it was enough to run it via the command line:
{% highlight sh %}
ruby -e 'system "xdg-open " + "https://terminalroot.com/"'
{% endhighlight %}

Almost a [BASH](https://terminalroot.com/shell)! More easy than that just running directly at the prompt! 😛

Some people might ask:
> **— And in [C](https://terminalroot.com/linguagemc)/[C++](https://terminalroot.com/tags#cpp) ?**

Haha, just use `system()`! 🍺

---

# Useful links
+ <https://docs.python.org/3.7/library/webbrowser.html>
+ <https://gist.github.com/hyg/9c4afcd91fe24316cbf0>
+ <https://doc.rust-lang.org/std/process/struct.Command.html>

