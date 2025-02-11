---
layout: post
title: "How to Install GNU Cobol and the First Steps"
date: 2025-02-11 14:28:29
image: '/assets/img/gnu/gnucobol.png'
description: "🚀 Procedure for Windows, macOS, GNU/Linux and BSD."
tags:
- gnu
- cobol
- programming
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**GnuCOBOL** (formerly known as *OpenCOBOL* and briefly as **[GNU](https://terminalroot.com/tags#gnu) Cobol**) is a free implementation of the COBOL programming language that is part of the GNU project. [GnuCOBOL](https://en.wikipedia.org/wiki/GnuCOBOL) translates COBOL code into [C](https://terminalroot.com/tags#linguagemc) and then compiles it using the native C compiler.

---

## How to install
### Installation on Ubuntu
1. **Update the system:**
First, it is recommended to update the package list and the system:
{% highlight bash %}
sudo apt update && sudo apt upgrade
{% endhighlight %}
2. **Install GnuCOBOL:**
GnuCOBOL is available in the default Ubuntu repositories. You can install it using the following command:
{% highlight bash %}
sudo apt install gnucobol
{% endhighlight %}
3. **Verify the installation:**
After the installation, you can verify that GnuCOBOL was installed correctly by running:
{% highlight bash %}
cobc --version
{% endhighlight %}
This will display the version of GnuCOBOL installed.

### Installation on Windows
On Windows, the installation of GnuCOBOL can be done manually or via WSL2. Manual procedure:

1. **Download GnuCOBOL:** from the address: [Direct to *files* on SourceForge](cobc -x hello.cbl 2>/dev/null)

2. **Extract the ZIP:** to a directory of your choice, for example, `C:\gnucobol`.

3. **Set the environment variables:**
- Add the GnuCOBOL `bin` directory to your `PATH`:

1. Right-click on "This PC" or "My Computer" and select "Properties".

2. Click on "Advanced system settings".

3. In the "Advanced" tab, click on "Environment variables".

4. In the "System variables" section, find the `Path` variable and click on "Edit".

5. Add the path to the GnuCOBOL `bin` directory (e.g. `C:\gnucobol\bin`) to the end of the path list.

6. Click "OK" to save the changes.

4. **Verify the installation:**
- Open the Command Prompt (CMD) and run:
{% highlight bash %}
cobc --version
{% endhighlight %}
- This will display the version of GnuCOBOL installed.

## Getting Started with GnuCOBOL
After the installation, you can test GnuCOBOL by creating a simple COBOL program. For example, create a file called `hello.cbl` with the following content:
> **NOTE**: In Cobol it is important to respect these leading spaces!
{% highlight cobol %}
      *> Meu Hello World em GnuCobol
       IDENTIFICATION DIVISION.
       PROGRAM-ID. HELLO-WORLD.
       PROCEDURE DIVISION.
           DISPLAY "Hello, World!".
           STOP RUN.
{% endhighlight %}

To compile and run on [Ubuntu](https://terminalroot.com/tags#ubuntu) or [Windows](https://terminalroot.com/tags#windows), use the following commands:
{% highlight bash %}
cobc -x hello.cbl
./hello
{% endhighlight %}
> If you see any *warning* it may be because `_FORTIFY_SOURCE` is being defined somewhere in your build environment. If this is bothering you, ignore it like this: `cobc -x hello.cbl 2>/dev/null`.

On Windows, the command to run the program would be:
{% highlight bash %}
hello.exe
{% endhighlight %}

This should display "Hello, World!" in the terminal.

For [macOS](https://terminalroot.com/tags#macos) and [BSD](https://terminalroot.com/tags#bsd) you can either use the system's package manager or download it, just like on Windows, directly from SourceForge:
> <https://sourceforge.net/projects/gnucobol/files/gnucobol/3.2/>

---

For more information, see [this PDF](https://sourceforge.net/p/gnucobol/code/HEAD/tree/external-doc/guide/PDFs/gnucobpg-letter.pdf?format=raw), the [Guide](https://gnucobol.sourceforge.io/guides.html) and the [official address](https://gnucobol.sourceforge.io/).

