---
layout: post
title: "How to Compile with MSVC via Command Line"
date: 2023-06-28 18:22:56
image: '/assets/img/windows/msvc/msvc.jpg'
description: 'It is not always necessary to use the Visual Studio debugger on Windows.'
tags:
- windows
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Using the [command line](https://terminalroot.com/tags#commands) formerly seemed to be a nerd thing, but over time it was noticed that it is much more practical and easier than the graphical mode, in addition to having a Huge performance gain!

In this article we will see that you can use the `cl` command from the [MSVC](https://learn.microsoft.com/en-us/cpp/build/reference/compiler-options?view=msvc-170) compiler from Microsoft to compile your programs!

**ATTENTION**
> Pictures are not in English, but you can understand how the corresponding path in your language!

---

## 01. Open Developer PowerShell
First of all make sure you have [Visual Studio](https://visualstudio.microsoft.com/) installed.

After creating your project, which does not necessarily need to have been created in Visual Studio, it can be in [VS Code](https://terminalroot.com/tags#vscode), [Vim](https://terminalroot.com/tags #vim), Code::Blocks and others.

To compile, just search for the word *Developer PowerShell* in the [Windows](https://terminalroot.com/tags#windows) Start Bar and choose the option: **Developer PowerShell for VS 2019**, remembering that in this case refers to the 2019 version of Visual Studio, but if you have the other version, the year/version number will appear. And click **Open**.

![MSVC](/assets/img/windows/msvc/MSVC-01-01.jpg)

---

## 02. Navigate to your C/C++ file
In the image there is the use of the commands `cd`, `ls` and `cat` by [PowerShell](https://terminalroot.com/tags#powershell), but use Developer PowerShell.

![MSVC](/assets/img/windows/msvc/MSVC-01-02.jpg)

---

## 03. Compile your C/C++ file(s)
To compile just use the `cl` command, as shown below:

{% highlight bash %}
cl main.cpp
{% endhighlight %}

And then to run, run the file name with a backslash:
{% highlight bash %}
.\main.exe
{% endhighlight %}

![MSVC](/assets/img/windows/msvc/MSVC-01-03.jpg)

---

## 04. Using Parameters for MSVC
You can also create any binary name you like similar to [GCC](https://terminalroot.com/tags#gcc) and [Clang](https://terminalroot.com/tags#clang):

{% highlight bash %}
cl main.cpp -o program
.\program.exe
{% endhighlight %}
![MSVC](/assets/img/windows/msvc/MSVC-01-04.jpg)

There are also other parameters, however, the model used by MSCV is not always the use of dash `-` but a slash, example for `Wall`, `O2` and others:
{% highlight bash %}
cl /Wall /O2 main.cpp -o output
.\output.exe
{% endhighlight %}
![MSVC](/assets/img/windows/msvc/MSVC-01-05.jpg)

For more parameters run the command:
{% highlight bash %}
cl -help
{% endhighlight %}
![MSVC](/assets/img/windows/msvc/MSVC-01-06.jpg)

---

## Alternative within Visual Studio
You can also open **Developer PowerShell** or even `CMD` through Visual Studio, saving time-consuming use of the Graphical Debugger.

To do this, just click on: `Tools` > `Command Line` > `Developer PowerShell` or `Developer Command Prompt`:
![MSVC](/assets/img/windows/msvc/MSVC-01-07.jpg)

And use the same procedures listed above:
![MSVC](/assets/img/windows/msvc/MSVC-01-08.jpg)

---

For more information go to: [MSVC address](https://learn.microsoft.com/en-us/cpp/build/reference/compiler-options?view=msvc-170).

