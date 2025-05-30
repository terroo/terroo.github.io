---
layout: post
title: "How to Install GCC/G++ MinGW on Windows"
date: 2022-12-04 12:55:45
image: '/assets/img/windows/mingw/mingw.jpg'
description: 'To use via PowerShell or CMD with VS Code and/or others.'
tags:
- windows
- gcc
- cpp
- clanguage
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

<blockquote class="bg-danger text-white p-3 rounded">
    <h2>THIS ARTICLE IS DEPRECATED/OBSOLETE</h2>
    <p>Access this article below for the updated procedure:</p>
    <h2><a href="https://terminalroot.com/how-to-install-the-new-version-of-gcc-mingw-on-windows/">How to Install the New Version of GCC MinGW on Windows</a></h2>
    <h3><a href="https://terminalroot.com/how-to-install-the-new-version-of-gcc-mingw-on-windows/">https://terminalroot.com/how-to-install-the-new-version-of-gcc-mingw-on-windows/</a></h3>
    <footer class="blockquote-footer text-white-50">Terminal Root</footer>
</blockquote>

The default compiler for [Microsoft Windows](https://terminalroot.com/tags#windows) is [MSVC](https://learn.microsoft.com/en-us/cpp/build/reference/compiler-options ?view=msvc-170) and it is installed when we install [Visual Studio](). Despite being a very powerful [IDE](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp/#23-visual-studio), I recommend it for almost all situations, some libraries are more practical to work with in a more minimalist environment and this can be achieved using [GCC/G++](https://terminalroot.com/tags#gcc) on Windows.

The package developed by [GNU](https://terminalroot.com/tags#gnu) to get you to use [gcc/g++](https://terminalroot.com/tags#gcc) on Windows is [MinGW ](https://en.wikipedia.org/wiki/MinGW).

In this article we will see how to install on **Windows 10** in the most basic and minimalist way possible!

Let's go step by step!

---

# 1. Downloading MinGW
Access the address: <https://sourceforge.net/projects/mingw-w64/> in the tab: **Files** and in **MinGW-W64 GCC-8.1.0** (if you have a later version, choose her) and download the file:
[x86_64-posix-seh](https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/8.1.0/threads-posix/seh/x86_64-8.1.0-release-posix-seh-rt_v6-rev0.7z) and after downloaded: unzip the file:

![gcc/g++ MinGW Windows 1](/assets/img/windows/mingw/1.png)
![gcc/g++ MinGW Windows 2](/assets/img/windows/mingw/2.png)

# 2. Installation
Move the unzipped folder to the `C:\` drive and copy the address of the `bin` subfolder the full path is: `C:\mingw64\bin`


# 3. Create Environment Variables
Search the **Startbar** for the word **Environment Variables** , click on the first option and then on the button: **Environment Variables**, a new window will open:

In the bottom box (System Variables), select **Path** and click on the **Edit** button, in the window that opened click on the **New** button and paste the path address: `C:\mingw64\bin`:
![gcc/g++ MinGW Windows 6](/assets/img/windows/mingw/6.png)

# 4. Testing in [PowerShell](https://terminalroot.com/how-to-install-powershell-on-ubuntu-and-getting-started/) and `cmd`
Open PowerShell or CMD, enter the folder where there is a C/C++ file, compile and run:
![gcc/g++ MinGW Windows 7](/assets/img/windows/mingw/7.png)
![gcc/g++ MinGW Windows 8](/assets/img/windows/mingw/8.png)

In [VS Code](https://terminalroot.com/tags#code) it is easier to use:
![VS Code](/assets/img/windows/mingw/9.png)
> To facilitate the opening of PowerShell in VS Code you can install [this extension](https://learn.microsoft.com/en-us/powershell/scripting/dev-cross-plat/vscode/using-vscode?view=powershell-7.3#install-vs-code-and-the-powershell-extension).

---

If you wish, you can choose to follow [this tutorial](https://code.visualstudio.com/docs/cpp/config-mingw) to install with [MSYS2](https://www.mingw-w64.org/downloads/#msys2), however I find it messier, MSYS2 creates a bunch of shortcuts.

---

# See too:
## [Create Games for Windows, Linux and Web with Raylib C/C++](https://terminalroot.com/create-games-for-windows-linux-and-web-with-raylib-c-cpp/)

