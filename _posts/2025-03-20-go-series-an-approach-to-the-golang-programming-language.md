---
layout: post
title: "Go Series: An approach to the Golang Programming Language"
date: 2025-03-20 19:01:44
image: '/assets/img/go/series-go/series-go.png'
description: "🐹 The Go core, WebDev, GameDev, CliDev, GUIDev and different examples."
tags:
- go
- series-go
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Today we are going to start a series about several different programming languages. These are [documents that I have been writing for a long time](https://x.com/TerminalRootTV/status/1788013077092352384) and that I didn't know what to do with.

Some people suggested doing a [Course](https://terminalroot.com.br/cursos), but that would take me even more time, I might even turn it into a video in the future, if possible. But, to avoid having all this content sitting here, I'm going to start "*releasing*" it as posts.

The difference in these series is that the examples are different from what you can find out there. They are things that I created myself and people like the things I do, I think it must be the experience I have had since [2011](https://terminalroot.com.br/2011/10/ola-mundo.html) when I started [Terminal Root](https://terminalroot.com.br/), in fact, it started like that, things that I did for myself and decided to *save* on [Blogger](https://cpp-terminal.blogspot.com/) and without meaning to, the links were already in several forums, which is when I discovered why my *blog* was getting a lot of traffic.

In this first series we will cover the programming language [Go/Golang](https://terminalroot.com/tags#go).

The [Go](https://terminalroot.com/tags#go) programming language is responsible for many things that many of us use on a daily basis. Several famous software programs are made with Go, among them, we have:

+ [Docker](https://terminalroot.com/tags#docker) - Operating system-level virtualization.
+ [Kubernetes](https://kubernetes.io/) - Widely used container orchestrator.
+ [Terraform](https://www.terraform.io/) - Infrastructure as Code (IaC) tool from HashiCorp.
+ [Prometheus](https://prometheus.io/) - Monitoring and alerting system.
+ [Grafana Loki](https://grafana.com/oss/loki/) – Scalable logging system. + [Hugo](https://gohugo.io/) – Fast static site generator.
+ [Gogs/Gitea – Self-hosted Git repository management platform.

The latest is [TypeScript Go](https://github.com/microsoft/typescript-go), a [TypeScript](https://terminalroot.com/tags#typescript) runtime made by Microsoft, which will be the default for running in applications such as: [VS Code](https://terminalroot.com/tags#vscode) and others.

This TypeScript port for Go has been the talk of the town in recent days, as TypeScript execution has become [10x faster](https://www.youtube.com/watch?v=pNlq-EVld70)!

In addition to several other lesser-known ones.

One of the differences in the Go programming language is that, unlike languages ​​such as: [Swift](https://terminalroot.com/tags#swift), [Rust](https://terminalroot.com/tags#rust), [Zig](https://terminalroot.com/tags#zig), and others, **Go** DOES NOT DEPEND ON [LLVM](https://terminalroot.com/tags#llvm) to compile and create its binary files; the entire structure of the language is original and proprietary.

In addition to not having resorted to the [C++](https://terminalroot.com/tags#cpp) invention of deleting pointers and instead using [Garbage Collector](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)), which has a small impact on performance, but does not run the severe risk of *memory leaks*. For those who still do not understand how this works, know that Rust, which is seen as *memory safety*, has a [page in its documentation](https://doc.rust-lang.org/book/ch15-06-reference-cycles.html) warning that it is possible to have *memory leaks*.

The only difference is that the original compiler, like Swift, [Carbon](https://terminalroot.com/how-to-install-carbon-language-in-ubuntu-and-first-steps/), Rust, Zig and others, was written in [C++](https://terminalroot.com/tags#cpp) which was [gofrontend](https://github.com/golang/gofrontend), but it has also "*suffered*": *bootstraping*.

In these episodes of the series we will try to cover 3 to 4 topics. In today's **Episode 01** we will see:

+ 01. [Introduction](#01-introduction)
+ 02. [Preparing the Environment](#02-preparing-the-environment)
+ 03. [Hello, World!](03-hello-world)
+ and 04. [Comments](#04-comments)


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

## 01. Introduction
**Go** is a programming language created by [Google](https://google.com/) and released as open source in November 2009.

It is a [compiled](https://terminalroot.com/list-of-top-10-c-cpp-compilers/) language focused on productivity and concurrent programming, based on work done in the operating system called [Inferno](https://terminalroot.com.br/2020/09/conheca-o-inferno.html).

The initial design of the language was done in September 2007 by **Robert Griesemer**, **Rob Pike** and **Ken Thompson** (one of the creators of [UNIX](https://terminalroot.com/tags#unix)).

Currently, there are implementations for [Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos), [GNU/Linux](https://terminalroot.com/tags#gnulinux) and [FreeBSD](https://terminalroot.com/tags#freebsd).

For more information [see here](https://en.wikipedia.org/wiki/Go_(programming_language)), the official Go page is: <https://go.dev/>

---

## 02. Preparing the Environment
First of all, you need to have **Go** installed on your system. You can download it here: <https://go.dev/dl/> or use the package manager of your [operating system](https://terminalroot.com/tags#so), examples:

+ On [Windows](https://terminalroot.com/tags#windows) with [WinGet](https://winstall.app/apps/GoLang.Go)
> It is interesting to open [PowerShell](https://terminalroot.com/tags#powershell) as **Administrator**. 
{% highlight bash %}
winget install --id=GoLang.Go -e
{% endhighlight %}

+ On [macOS](https://terminalroot.com/tags#macOS) with [Brew](https://formulae.brew.sh/formula/go)
{% highlight bash %}
brew install go
{% endhighlight %}

+ On [Ubuntu]() via APT or [snap](https://snapcraft.io/go)
{% highlight bash %}
sudo apt install golang-go
{% endhighlight %}

After installing, test by running the `go version` command. If the version similar to the content below appears, then everything is ok.

{% highlight bash %}
go version
go version go1.22.2 amd64
{% endhighlight %}

Alternatively, you can also use the [GCC](https://terminalroot.com/tags#gcc) compiler, which is **GCCGO**, for this see the links below:
+ <https://gcc.gnu.org/onlinedocs/gccgo/>
+ <https://go.dev/doc/install/gccgo>

It is also interesting to install **snippets** for Go in your favorite [IDE/Editor](https://terminalroot.com/tags#editors).

---

## 03. Hello, World! 
The most basic program of all is always a [Hello, World!](https://terminalroot.com/hello-world-in-25-programming-languages-proposal-docs-and-links/), so let's create our example with Go. Create a file with any name and extension `.go`, for example: `hello.go` and insert the content below:

{% highlight go %}
package main

import "fmt"

func main (){
fmt.Println("Hello, Go!")
}
{% endhighlight %}

To run it you can run the command below, although it is not the best way, as it is slow, but it is possible:
{% highlight sh %}
go run hello.go
{% endhighlight %}

The correct way is to build the binary (it is faster) and run it later:
{% highlight sh %}
go build hello.go
./hello
{% endhighlight %}

Another way to create code with Go is to **create** a project to Go:
{% highlight sh %}
go mod init example/hello
cp ../hello.go .
go run .
{% endhighlight %}

Explaining the code:
+ `package main` → Each Go program is composed of packages. Programs start running from the `main` package.
+ `import "fmt"` → This program is using the package with import path "fmt", alternatively you could use the syntax: `import ("fmt")` used for more than one import.
+ `func main()` → This is the main function, it always needs to exist in all Go programs, we need to open it with `{` and close it with `}`. + `fmt.Println("Hello, Golang!")` → To print the desired content, use `fmt.Println()`, the `Println()` function is part of the `fmt` library, the capital P must be respected.


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

# Comments
Go uses [C](https://terminalroot.com/tags#linguagemc)/[C++](https://terminalroot.com/tags#cpp) style to write comments (part of the code that will not influence the result, only for informational purposes for whoever comes to read the code) `// comment` or `/* comment */` (multiple lines), examples:

{% highlight go %}
// My first Go code
package main // import the main package

import "fmt" // using the fmt library for Println

func main (){ // main function
fmt.Println("Hello, Golang!") // Printing
}
/*
To run and/or compile, use respectively
$ go run hello.go

OR

$ go build hello.go
$ ./hello

*/
{% endhighlight %}

---

Okay, for this **Episode 01** of the **Go Series** it's already good enough, I'll wait for you in the next episodes!

