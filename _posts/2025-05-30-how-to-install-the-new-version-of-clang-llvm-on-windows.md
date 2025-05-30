---
layout: post
title: "How to Install the New Version of Clang/LLVM on Windows"
date: 2025-05-30 14:52:10
image: '/assets/img/windows/clang-windows.jpg'
description: "🐉 Both the standalone version and the integrated one with MSVC."
tags:
- clang
- llvm
- windows
- clanguage
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

We already made [this post about installing Clang](https://terminalroot.com/how-to-install-clang-on-windows-with-a-single-command/), but it became obsolete. In this quick article, we’ll see how to do it easily.


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

## Installation

### If you installed the version from the other article

First, remove the directory and also the path from the environment variable.

> Open [PowerShell](https://terminalroot.com/tags#powershell) as administrator.

Remove the installation:

{% highlight powershell %}
Remove-Item -Path "C:\Users\$env:USERNAME\.utils" -Recurse -Force
{% endhighlight %}

Remove the environment variable:

{% highlight powershell %}
[Environment]::SetEnvironmentVariable("Path", (
    ($env:Path -split ";") -ne "C:\Users\Marcos\.utils\llvm-mingw\bin" -join ";"
), [System.EnvironmentVariableTarget]::Machine)
{% endhighlight %}

### Installing Clang/LLVM MinGW

This version does not depend on [MSVC](https://terminalroot.com/tags#msvc).

Just use [WinGet](https://winstall.app/apps/MartinStorsjo.LLVM-MinGW.UCRT):

{% highlight powershell %}
winget install --id=MartinStorsjo.LLVM-MinGW.UCRT  -e
{% endhighlight %}

Still with admin rights, run this command:

{% highlight powershell %}
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\LLVM\bin", "Machine")
{% endhighlight %}

Close the [terminal](https://terminalroot.com.br/2025/05/personalize-seu-powershell-like-a-pro.html), reopen it and check the version:

{% highlight powershell %}
clang++ --version
{% endhighlight %}

There is also the MSVC version, but to have both installed you need to rename one of the paths and add it to `PATH`, just use the WinGet command for it:

{% highlight powershell %}
winget install --id=LLVM.LLVM  -e
{% endhighlight %}

> If you had conflicts, uninstall with: `winget uninstall --id=LLVM.LLVM`

---

## Difference Between Versions

### `--id=LLVM.LLVM`

> Official Microsoft and LLVM version.

* Installs the **official LLVM** distributed by the **LLVM Foundation**.
* Includes tools like:

  * `clang`, `clang++` (C/C++ compilers)
  * `lld` (linker)
  * `lldb` (debugger)
  * `clang-format`, `clang-tidy`, etc.

Main uses:

* Modern C/C++ development on Windows, Linux, or macOS.
* Replacing MSVC (Visual C++) in cross-platform projects.
* When you want to compile for **native Windows** with Clang + MSVC.

By default, it uses the **Visual Studio (MSVC) toolchain** as backend on Windows (for linking, runtime, etc).


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

### `--id=MartinStorsjo.LLVM-MinGW.UCRT`

* Installs the **LLVM-MinGW distribution**, maintained by **Martin Storsjö**.
* Uses **Clang + MinGW linker + runtime** (no Visual Studio dependency).
* Based on the **UCRT** (Universal C Runtime), making executables more modern and compatible.

Main uses:

* Compile Windows apps using LLVM without needing Visual Studio.
* Produce binaries completely free of MSVC dependencies.
* Ideal for **cross-platform development**, CI/CD automation, and cross-compilation (e.g., compiling Windows from Linux).

Includes:

* `clang`, `lld`, `libc++`, `libunwind`, MinGW headers/libraries (with UCRT)
* Pre-configured tools to compile directly for Windows

## Quick Comparison:

| Feature                    | `LLVM.LLVM` (Official)        | `LLVM-MinGW.UCRT` (Martin Storsjö) |
| -------------------------- | ----------------------------- | ---------------------------------- |
| Maintained by              | LLVM Foundation               | Martin Storsjö                     |
| Default backend on Windows | MSVC (Visual Studio)          | MinGW + UCRT                       |
| Requires Visual Studio?    | Yes (for linking, by default) | No                                 |
| Main target                | Windows (with MSVC)           | Windows (without MSVC)             |
| Typical use                | IDEs like VSCode with Clang   | Cross-compiling, portable builds   |
| License                    | Permissive (LLVM)             | Permissive (LLVM + MinGW UCRT)     |

---

* **If you already use Visual Studio or want MSVC ecosystem integration**: Use `LLVM.LLVM`.
* **If you want a complete, MSVC-independent toolchain** (especially useful for scripts, CI/CD, or cross-compilation): Use `MartinStorsjo.LLVM-MinGW.UCRT`.

## See also:

* [How to Install the New Version of GCC MinGW on Windows](https://terminalroot.com/how-to-install-the-new-version-of-gcc-mingw-on-windows/)
* [How to Use Tmxlite for Game Maps (Windows and Linux)](https://terminalroot.com/how-to-use-tmxlite-for-game-maps-windows-and-linux/)


