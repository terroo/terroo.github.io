---
layout: post
title: "How to install Swift programming language on Ubuntu"
date: 2022-02-09 08:52:26
image: '/assets/img/programming/swift.jpg'
description: 'Swift is to iOS what Java is to Android.'
tags:
- macos
- programming
- development
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[Swift](https://www.swift.org/) is a multi-paradigm, general-purpose compiled programming language developed by **Apple Inc.** and the open source community (*only as of version 2.2 *) .

First released in 2014, Swift was developed as a replacement for Apple's previous programming language Objective-C, as Objective-C has remained largely unchanged since the early 1980s and lacked modern language features.

Swift development started in July 2010 by [Chris Lattner](http://nondot.org/sabre/)(same creator of [LLVM](https://terminalroot.com/tags#llvm) and [clang](https://terminalroot.com/tags#clang)), with the eventual collaboration of many other Apple programmers. Swift was based on ideas from languages ​​such as: Objective-C , [Rust](https://terminalroot.com/tags#rust) , [Haskell](https://terminalroot.com/tags#haskell) , [Ruby](https://terminalroot.com/tags#ruby) , [Python](https://terminalroot.com/tags#python) , C# , CLU and many others .

Swift is for iOS what [Java](https://terminalroot.com/tags#java) is for Android. The compiler was written in [C++](https://terminalroot.com/tags#cpp) .

---

# Installation
This whole procedure works from [Ubuntu](https://terminalroot.com/tags#ubuntu) 20.04, but it was actually tested on **Ubuntu 21.04** . But I was also able to install with this procedure on [Gentoo](https://terminalroot.com/tags#gentoo)(just changing the name of the packages to *Portage*) and it worked, that is, with small changes you you can try on your [operating system](https://terminalroot.com/tags#so) or [distribution](https://terminalroot.com/tags#distro) [Linux](https:// terminalroot.com/tags#linux).

But if you want specific versions and procedures, there are for [macOS](https://terminalroot.com/tags#macos), [Windows 10](https://terminalroot.com/tags#windows), [CentOS{7,8}](https://terminalroot.com/tags#centos), Amazon Linux and previous versions of Ubuntu, for that see [this page](https://www.swift.org/ download/) of Swift download.

#### 01. First of all, install the dependencies:
{% highlight sh %}
sudo apt install binutils git gnupg2 libc6-dev libcurl4 libedit2 libgcc-9-dev libpython2.7 libsqlite3-0 libstdc++-9-dev libxml2 libz3-dev pkg-config tzdata uuid-dev zlib1g-dev
{% endhighlight %}

#### 02. Download the zipped file:
{% highlight sh %}
wget -q https://download.swift.org/swift-5.5.2-release/ubuntu2004/swift-5.5.2-RELEASE/swift-5.5.2-RELEASE-ubuntu20.04.tar.gz
{% endhighlight %}

#### 03. Import the PGP key
{% highlight sh %}
gpg --keyserver hkp://keyserver.ubuntu.com \
      --recv-keys \
      '7463 A81A 4B2E EA1B 551F GFCF D441 C977 412B 37AD' \
      '1BE1 E29A 084C B305 F397 D62A 9F59 7F4D 21A5 6D5F' \
      'A3BA FD35 56A5 9079 C068 94BD 63BC 1CFE 91D3 06C6' \
      '5E4D F843 FB06 5D7F 7E24 FBA2 EF54 30F0 71E1 B235' \
      '8513 444E 2DA3 6B7C 1659 AF4D 7638 F1FB 2B2B 08C4' \
      'A62A E125 BBBF BB96 A6E0 42EC 925C C1CC ED3D 1561' \
      '8A74 9566 2C3C D4AE 18D9 5637 FAF6 989E 1BC1 6FEA' \
      'E813 C892 820A 6FA1 3755 B268 F167 DF1A CF9C E069'
{% endhighlight %}


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

#### 04. Extract the file
{% highlight sh %}
tar zxvf swift-*
{% endhighlight %}

#### 05. Remove the zipped file
{% highlight sh %}
rm swift-*.tar.gz
{% endhighlight %}

#### 06. Change directory name to *swift* only
{% highlight sh %}
mv swift-5.5.2-RELEASE-ubuntu20.04/ swift
{% endhighlight %}

#### 07. Move it to the optional directory
{% highlight sh %}
sudo mv swift/ /opt/
{% endhighlight %}

#### 08. Include the location in your `$PATH`
{% highlight sh %}
echo 'export PATH=/opt/swift/usr/bin:"${PATH}"' >> ~/.bashrc
{% endhighlight %}

#### 09. Make it possible to access it immediately
{% highlight sh %}
source ~/.bashrc
execute $SHELL
{% endhighlight %}

#### 10. Check if everything is ok
{% highlight sh %}
swift -version
{% endhighlight %}

#### 11. Try a [Hello, World!](https://terminalroot.com/hello-world-in-25-programming-languages-proposal-docs-and-links/)
> `vim hello.swift`
{% highlight swift %}
print("Hello, World!")
{% endhighlight %}

Runtime test:
{% highlight sh %}
swift hello.swift
{% endhighlight %}

Or compile your code and run the binary:
{% highlight sh %}
swiftc hello.swift
./hello
{% endhighlight %}

---

# Useful links
+ <https://www.swift.org/>
+ <https://www.swift.org/download/>
+ <https://en.wikipedia.org/wiki/Swift_(programming_language)>
+ <https://github.com/apple/swift>

