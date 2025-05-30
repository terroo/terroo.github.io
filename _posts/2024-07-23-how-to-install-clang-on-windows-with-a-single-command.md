---
layout: post
title: "How to Install Clang on Windows with a Single Command"
date: 2024-07-23 18:41:38
image: '/assets/img/windows/clang/clang-windows.jpg'
description: "🐉 Another option to compile your programs via the command line in Windows."
tags:
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

<blockquote class="bg-danger text-white p-3 rounded">
<h2>THIS ARTICLE IS DEPRECATED/OBSOLETE</h2>
    <p>Access this article below for the updated procedure:</p>
    <h2><a href="https://terminalroot.com.br/2025/05/como-instalar-a-nova-versao-do-clang-llvm-no-windows.html">How to Install the New Version of Clang/LLVM on Windows</a></h2>
    <h3><a href="https://terminalroot.com/2025/05/how-to-install-the-new-clang-llvm-version-on-windows.html">https://terminalroot.com/2025/05/how-to-install-the-new-clang-llvm-version-on-windows.html</a></h3>
    <footer class="blockquote-footer text-white-50">Terminal Root</footer>
</blockquote>

---

We have already [shown](https://terminalroot.com/how-to-install-binary-clang-on-any-gnu-linux-distro/) that you can install [Clang](https://terminalroot.com/tags#clang) in [GNU/Linux](https://terminalroot.com/tags#gnulinux) distros without needing your package manager, as new versions often appears with features enabled that you wouldn't want.

I've seen people report, for example, that their LSP that uses `clangd` issues *warnings* for *not using headers*. Of course this can be disabled, but people like to have everything ready.

In this article we will see that you can install **Clang/Clang++** on [Windows](https://terminalroot.com/tags#windows) with a single command.

In addition to having all the tools also available, such as:
+ clang REPL;
+ `clangd`;
+ LLVM;
+ And all the others!

---

First make sure you don't have `clang` installed. Open PowerShell and run the command:
{% highlight bash %}
clang --version
{% endhighlight %}

If the output that the term is not recognized (it is colored red).


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

## The magic command
The command below must be used in [PowerShell](https://terminalroot.com/tags#powershell).

### 01. copy and paste into your properly opened PowerShell:

{% highlight bash %}
powershell -Exec ByPass -NoProfile -c "(New-Object Net.WebClient).DownloadString('https://tinyurl.com/llvm-mingw') | IEX"
{% endhighlight %}
> When you paste, PowerShell will prompt you if you really want to paste, answer yes!

A drop-down menu will open informing you of the download progress and the entire installation process, just wait:

![clang install](/assets/img/windows/clang/clang-install.jpg)

### 02. Copy the installation path to the `\bin` folder
The installation location will be similar to the path below, but in your case where it has `[YOUR USER]` it must be the name of your Windows user:
{% highlight bash %}
C:\Users\[YOUR USER]\.utils\llvm-mingw\bin
{% endhighlight %}

Click on the address bar and copy this path.


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

### 03. Create environment variables
After that, close PowerShell, or [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=en-US&gl=US), or even [VSCode](https://terminalroot.com/tags#vscode) which uses a built-in terminal.

+ Now type: **Environment Variables**;
+ Select the first option, then click on the **Environment Variables** button in the window that opened;
+ Then in the bottom option: **System Variables** select the **PATH** line;
+ And click **Edit**. In the new window that will open, click on **New** and paste the path you copied.

---

Now just open PowerShell again and note that the `clang --version` command will already have output indicating the version!

Then just do a test and compile with `clang` for [C Language](https://terminalroot.com/tags#clanguage) or [Clang++](https://terminalroot.com/tags#cpp) for [C++ ](https://terminalroot.com/tags#cpp):

![Test clang++](/assets/img/windows/clang/run-clang.jpg)

---

## **OBSERVATION**
Inside the `\bin` folder of the path you copied there will be an executable named `g++`, of course it is not [gcc/g++](https://terminalroot.com/tags#gcc), but rather the `clang++` renamed to `g++`, same with `gcc`.

If you have [MinGW](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/) installed on your system, it will still work, as Windows will give priority for this binary, I think it might be the order it was added to the system variables.

But, just in case, it’s a good idea to test!
