---
layout: post
title: "Jython - The language that mixes Java with Python"
date: 2019-10-22 10:59:43
image: '/assets/img/'
description: 'This language joins two good tools into one. 🐍'
featured-img: '../jython/jython.jpg'
tags:
- jython
- java
- python
- languages
- programming
---

![Jython - The language that mixes Java with Python](/assets/img/jython/jython.jpg)

> This language joins two good tools into one. 🐍

## Introduction

[Jython](https://www.jython.org/) is an implementation of the [Python](https://terminalroot.com.br/2019/10/script-basico-de-python-para-aprendizado.html) language (https://terminalroot.com.br/2019/10/script-basico-de-python-para-learned.html) that generates bytecode for Java machines (JVM). With it is possible to develop hybrid applications that unite code in Java and Python.

This tool is also very useful for embedding a scripting language in applications that require this kind of functionality. It also includes a compiler that converts Python source code to Java bytecode, allowing Python programmers to write classes that can be used by a Java program.

Among its advantages are:

+ 🐍 - Development Speed: Python is a Rapid Application Development (RAD) language.
+ 🐍 - Practicality: It is not necessary to compile Jython code to test it. This makes debugging much faster. After the process is finished, the Jythonc compiler is used to compile the program, to include the Jython libraries there is the freeze option.
+ 🐍 - Learning Time: By having a simple, clean and coherent syntax your learning is very easy.

<!-- RETANGULO LARGO -->
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

## Installation
> Procedure on [Linux](https://terminalroot.com.br/linux)

+ **1**. - Install the dependencies
First you will need to have it installed on your system:
+ [JDK](https://openjdk.java.net/) - Java development environment;
+ and [IcedTea](https://icedtea.classpath.org) - An integration software.

Use your distribution's package manager to install them, for example, as I installed here on [Gentoo](https://terminalroot.com.br/2017/05/how-install-o-gentoo.html):
{% highlight bash %}
sudo USE = "- cups -alsa" emerge -a dev-java/openjdk-bin dev-java/openjdk-jre-bin
{% endhighlight %}
> In this case I rejected the modules: *cups* and *alsa* and icedtea was installed automatically as it is a dependency.

+ **2**. - Installing [Jython](https://www.jython.org/)

Now download Jython at: <https://sourceforge.net/projects/jython/>. After downloading extract the package:
> Create and enter a directory first so that files are not scattered
{% highlight bash %}
mkdir environment && cd environment/
mv ../jython* .
jar xj jython.jar
java -jar jython_installer-*.jar
{% endhighlight %}

After this last command, it will open a ** wizard ** for you to follow, follow the images below:

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

![Jython Wizard](/assets/img/jython/jython01.png)
![Jython Wizard](/assets/img/jython/jython02.png)
![Jython Wizard](/assets/img/jython/jython03.png)

> In this 4th image ↓ part you could still choose a custom directory, for example from `~/.config/jython`, it would be the most ideal not to pollute your home directory.
![Jython Wizard](/assets/img/jython/jython04.png)

![Jython Wizard](/assets/img/jython/jython05.png)
![Jython Wizard](/assets/img/jython/jython06.png)
![Jython Wizard](/assets/img/jython/jython07.png)
![Jython Wizard](/assets/img/jython/jython08.png)
![Jython Wizard](/assets/img/jython/jython09.png)
![Jython Wizard](/assets/img/jython/jython10.png)


After **finish** we will now edit your `vim ~/.bashrc` and add the following line:
> In this case my version and directory name is **2.5.2**, check yours.
{% highlight bash %}
PATH="${PATH}:${HOME}/jython2.5.2/bin/"
{% endhighlight %}

Then run the `source ~/.bashrc` command or close and open the terminal so that the` jython` command can be found.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Creating Your First Application
> A mini application that adds two numbers.
Create a file named `vim sum.py`
{% highlight python %}
import javax.swing as libswing
pnumero = libswing.JOptionPane.showInputDialog ("Enter an Integer:")
snumero = libswing.JOptionPane.showInputDialog ("Enter an Integer:")
sum = int (number) + int (number)
libswing.JOptionPane.showMessageDialog (None, "The sum is% d"% sum)
{% endhighlight %}

Save and run as follows:
{% highlight bash %}
jython sum.py
{% endhighlight %}

> No [Shell](https://terminalroot.com.br/shell) will show the outputs of the program, but it does not mean that it is a * problem *, but it is sending the * outputs * correctly.

![Jython Wizard](/assets/img/jython/jython11.png)
![Jython Wizard](/assets/img/jython/jython12.png)

Note that in this case I added 8 + 8 and the result was as expected. 😁️

# Explaining the code
+ `import javax.swing as libswing` - Imports the Java library.
+ `pnumero = libswing.JOptionPane.showInputDialog (" Enter an Integer: ")` - Shows the first dialog box and stores the value in the pnumero variable.
+ `snumero = libswing.JOptionPane.showInputDialog (" Enter an Integer: ")` - Displays the second dialog and stores the value in the snumero variable.
+ `sum = int (number) + int (number)` - Converts the number and number values ​​to integers and adds both by storing the result in the sum variable.
+ `libswing.JOptionPane.showMessageDialog (None," The sum is% d "% sum)` - Shows the result of the sum on the screen, isn't it?

## Conclusion

I particularly enjoyed Jython 🙌️ and I will dig deeper into it and there will probably be more tutorials here about it. Is that you ?! Liked ?! Tell us using the comment field.
Hugs!

## Useful links

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:50px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

+ <https://www.jython.org/>
+ <https://sourceforge.net/projects/jython/>
+ <https://wiki.python.org.br/IntroducaoJython>
+ <http://www.linhadecodigo.com.br/artigo/490/introducao-ao-jython.aspx>
+ <https://en.wikipedia.org/wiki/Jython>
    
