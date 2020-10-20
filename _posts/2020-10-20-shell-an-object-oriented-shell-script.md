---
layout: post
title: "Shell++ - An Object Oriented Shell Script"
date: 2020-10-20 11:47:16
image: '/assets/img/cpp/shellpp.jpg'
description: 'Shell++ has a mixture of BASH and C++'
featured-img: ../cpp/shellpp.jpg
tags:
- cpp
- shellscript
- bash
---

![Shell++ - An Object Oriented Shell Script](/assets/img/cpp/shellpp.jpg)


[Shell++](https://github.com/alexst07/shell-plus-plus) is a programming language that aims to bring functionalities from modern languages, such as ease of manipulation of data structures, object-oriented programming, functional programming and others including Shell Script.

# Installation
Clone the repository recursively:

```sh
git clone --recurse-submodules -j8 https://github.com/alexst07/shell-plus-plus
```

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

After cloned, we realized that it uses [CMake](https://en.terminalroot.com.br/how-to-compile-your-programs-with-cmake/), if you export the `CXX` variable, you may be able to use another compiler, but you will need: CMake, [GCC](https://en.terminalroot.com.br/gcc-vs-llvm-which-is-the-best-compiler/) and [GNU Make](https://en.terminalroot.com.br/how-to-create-a-makefile/).

Some distros offer the package with essential tools for building binaries, if you use [Debian](https://en.terminalroot.com.br/meet-devuan-gnu-linux-a-debian-without-systemd/), [Ubuntu](https://en.terminalroot.com.br/customize-your-ubuntu-with-wayland-sway-ulauncher-waybar/), [Mint](https://en.terminalroot.com.br/how-to-customize-your-linux-mint-with-i3-polybar-rofi/) and simlares, just install the package: build-essentials. If you use [Gentoo](https://en.terminalroot.com.br/how-to-create-an-ebuild-on-gentoo/), you don't need to install anything.

```sh
# you can change the compiler with this command:
export CXX=$(which clang++)

mkdir build && cd build
cmake ..
make
```

After building the binary, it can be found at: `./shell/shpp`. You can run one:
```sh
sudo make install
```

> Remembering that you can also execute the binary directly.

Basic usage example:
## Hello, World!
```sh
cat << EOF > hello.sh
print("Hello, Shell++")
EOF
shpp hello.sh
```

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

And among several other forms of use that we can see [here in the project's repository](https://github.com/alexst07/shell-plus-plus) documentation.

### Alternatives to Shell++:
+ [Bash Infinity Framework](https://github.com/niieani/bash-oo-framework)
+ [Bash OOP](https://github.com/lenormf/bash-oop)
+ [Skull](https://github.com/tomas/skull)
+ [Bashoo](https://github.com/kjkuan/bashoo)

Among other options:

+ <http://hipersayanx.blogspot.com/2012/12/object-oriented-programming-in-bash.html>
+ <https://developpaper.com/object-oriented-shell-script/>
+ <http://blog.fpmurphy.com/2010/05/ksh93-using-types-to-create-object-orientated-scripts.html>


# Watch the video
The video is in Brazilian Portuguese, but you can use automatic translation from Youtube or even just watch the procedures, because the commands are universal

<iframe width="1100" height="490" src="https://www.youtube.com/embed/0Av5wG2Lkl8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<!-- RETANGULO LARGO 2 -->
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


