---
layout: post
title: "How to Install PDCurses, ncurses on Windows"
date: 2024-07-18 21:31:11
image: '/assets/img/windows/pdcurses.jpg'
description: "⚪ A library identical to ncurses, but for DOS/Windows."
tags:
- windows
- ncurses
- tui
- cpp
- clanguage
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**PDCurses** is a text-based user interface library that provides an API compatible with [ncurses](https://terminalroot.com/ncurses).

With **PDCurses** it is possible to develop [TUI](https://terminalroot.com/tags#tui) applications regardless of the platform. It is designed to be used on a variety of operating systems, including [Windows](https://terminalroot.com/tags#windows), DOS, OS/2, and [Unix-like](https://terminalroot) .com/tags#unix).

---

## Dependencies
First of all, you need to have the following tools installed on your [Windows](https://terminalroot.com/tags#windows):

+ **01**. **[MinGW](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/)**: You can (and should) install according to this article: [How to Install GCC/G++ MinGW on Windows](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/)
> Remember to rename the `mingw32-make` file to `make` only, in path: `C:\mingw64\bin\mingw32-make`(`.exe`) to `C:\mingw64\bin\make`(`.exe`).

+ **02**. **[Git](https://git-scm.com/download/win)**: <https://git-scm.com/download/win>.

---

## How to Compile and Install PDCurses on Windows
After all dependencies are satisfied, now let's clone, compile and install the PDCurses library.

Open [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=en-US&gl=US) or [PowerShell](https://terminalroot.com/tags#powershell) or even `CMD` and follow the steps.
> Tip: The ideal thing to do after opening one of these applications is to enter the *Desktop*, as we will be sure there will be no permission problems:
{% highlight bash %}
cd Desktop
{% endhighlight %}

#### First clone the official repository on GitHub:
{% highlight bash %}
git clone https://github.com/wmcbrine/PDCurses
{% endhighlight %}

#### Now enter the cloned PDCurses folder and the `wincon` subfolder
{% highlight bash %}
cd .\PDCurses\wincon
{% endhighlight %}

#### Now just run the `make` command
As renamed as it can be `mingw32-make` if you haven't done so!

{% highlight bash %}
make
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

## Install the files
After the compilation is complete, you can still find `PDCurses\wincon` in: Windows Terminal, PowerShell or CMD. Copy the files to subfolders of `C:\mingw64`:

Copy the PDCurses static library, run this command:
{% highlight bash %}
copy pdcurses.a C:\mingw64\lib\
{% endhighlight %}

And also copy the header, but first exit the `wincon` folder:
{% highlight bash %}
CD ..
copy curses.h C:\mingw64\include\
{% endhighlight %}

If you wanted, you can even delete the cloned repository: `PDCurses\`.

---

## Testing a `Hello, World!`
Having done all the steps correctly, now create a file named `main.cpp`, or whatever name you prefer in a location you can create (example: on the *Desktop*) and insert this content:

{% highlight cpp %}
#include <curses.h>

int main(){
 initscr();
 printw("Hello, PDCurses!");
 refresh();
 getch();
 endwin();

 return 0;
}
{% endhighlight %}

To compile, run this command:

{% highlight bash %}
g++ -I C:\mingw64\include main.cpp C:\mingw64\lib\pdcurses.a
{% endhighlight %}
> Indicating the folder path where to find the `curses.h` file and compile it together with the `pdcurses.a` file, in some cases it is possible to use only the flag: `-lpdcurses`, but I believe that in your case it won't work.

Once compiled, now just run the binary: `a.exe` or if you are using PowerShell:
{% highlight bash %}
.\a.exe
{% endhighlight %}

All terminal content will be cleared and the message will appear. Pressing any key will exit this message and return to the terminal!

[![PDCurses running](/assets/img/windows/pdcurses-print-2.jpg)](/assets/img/windows/pdcurses-print-2.jpg)

---

For more information about PDCurses I recommend accessing the address: <https://github.com/wmcbrine/PDCurses>.

