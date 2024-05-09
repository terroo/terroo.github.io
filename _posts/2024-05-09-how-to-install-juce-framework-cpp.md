---
layout: post
title: "How to Install JUCE Framework C++"
date: 2024-05-09 13:37:14
image: '/assets/img/cpp/juce.jpg'
description: "Create Audio Players and Spectrums, Plugins and more with Graphical Interface. Multiplatform and loved by programming musicians!"
tags:
- music
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

*JUCE* is a [C++](https://terminalroot.com/tags#cpp) framework available for [Windows](https://terminalroot.com/tags#windows), [macOS](https ://terminalroot.com/tags#macos), [GNU/Linux](https://terminalroot.com/tags#gnulinux), [Android](https://terminalroot.com/tags#android) and [iOS](https://terminalroot.com/tags#swift), open source, used for the development of desktop and mobile applications.

JUCE is used in particular for its [GUI](https://terminalroot.com/tags#gui) and **plug-ins** libraries. It has a dual license under [GPLv3](https://terminalroot.com/tags#gnu) and a commercial license.

The purpose of JUCE is to allow software to be written in such a way that the same source code compiles and runs identically regardless of platform.

Supports multiple development environments and compilers.

---

# Download JUCE
As said, the [source code is available on GitHub](https://github.com/juce-framework/JUCE). In other words, you can download it and compile it directly on your machine. Make sure you have the [required dependencies](https://github.com/juce-framework/JUCE/blob/master/docs/Linux%20Dependencies.md)(in this case for GNU/Linux distributions).

But, there are also pre-compiled binaries that run on your machine. You can access the official download address:
#### <https://juce.com/get-juce/>

Choose the plan (there is **Free**), choose for your [operating system](https://terminalroot.com/tags#so), unzip and run the binary.

On GNU/Linux distros, it can be:
{% highlight bash %}
wget https://api.juce.com/api/v1/download/juce/latest/linux -O juce-latest.zip
unzip juce-latest.zip
{% endhighlight %}
> For previous versions, in cases of compatibility, you can download it from the [releases page on GitHub](https://github.com/juce-framework/JUCE/releases). According to the publication date of this article, the most current version is: `7.0.12`.

---

# Running the Projucer
**Projucer** is an [IDE](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp/) for JUCE. Its binary is available inside the `JUCE/` directory that you unzipped, to run it if you are on Windows or macOS, just click on the binary, in GNU/Linux distros, enter via [terminal](https://terminalroot.com/tags#terminal) and run with `./`:

{% highlight bash %}
cd JUCE
./Projucer
{% endhighlight %}

The window will open:
[![Projucer running](/assets/img/cpp/JUCE.png)](/assets/img/cpp/JUCE.png)

There is also the **Demo** binary that can be run in the same directory:
{% highlight bash %}
./DemoRunner
{% endhighlight %}

Will appear:
[![DemoRunner](/assets/img/cpp/demo-runner.png)](/assets/img/cpp/demo-runner.png)

You can still move to `/opt` and link binaries to open via the Dashboard, including the icon and a `.desktop`.

---

For more information, tutorials, documentation and others, visit the links below:
+ <https://juce.com/>
+ <https://github.com/juce-framework/JUCE>
