---
layout: post
title: "6 Very Interesting Tips for Your Linux Shell"
date: 2020-06-10 13:35:20
image: '/assets/img/shell/explainshell.png'
description: 'Automating tasks with Shell Script is one of the most useful things a user or programmer should do.'
featured-img: ../shell/explainshell.png
tags:
- shellscript
- terminal
- bash
---

![6 Very Interesting Tips for Your Linux Shell](/assets/img/shell/explainshell.png)


Automating tasks with Shell Script is one of the most useful things a user or programmer should do.

It's amazing how much time we spend daily doing things that a "robot" can do for us.

And having the environment as we wish is a small step for you, but a big step for your time savings.


We will now know 6 very interesting tips for the Shell that you can use not only on Linux, as the title says, but for any other system.

---

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# 01. Color `cat` command output
**ccat** is the colorizing **cat**. It works similar to cat but displays content with syntax highlighting. Supported Languages: JavaScript, Java, Ruby, Python, Go, C, JSON and among others.
### Installation
{% highlight bash %}
wget https://github.com/jingweno/ccat/releases/download/v1.1.0/linux-amd64-1.1.0.tar.gz
tar xfz linux-amd64-1.1.0.tar.gz
cp linux-amd64-1.1.0/ccat /usr/local/bin/
echo "alias cat='/usr/local/bin/ccat'" >> ~/.bashrc
source ~/.bashrc
ccat --html /etc/fstab > ccat.html
{% endhighlight %}
Another very interesting alternative is also the `bat` command, which can be found at this link: <https://github.com/sharkdp/bat>
See an example of output from the bat command:

![Bat](/assets/img/shell/bat.png)

---

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# 02. Customizing Shell `history`
+ By default, the history command displays only the command order number and the command used. To also display the date of the command's execution, you can change its behavior only with this line:
{% highlight bash %}
echo 'export HISTTIMEFORMAT="%d/%m/%y %T "' >> ~/.bashrc
{% endhighlight %}

+ To execute a command from `history`, just use an ‘exclamation sign’ `!` and the command number, example: `!480`, the shell will execute the corresponding number command.
> Assuming you forgot sudo by running a command that needs it:

{% highlight bash %}
$ apt install mysql-client
Permission denied
$ sudo !!
{% endhighlight %}

+ Cleaning all `history`:
{% highlight bash %}
cat /dev/null > ~/.bashrc
history -c
{% endhighlight %}

For more informations, use:
{% highlight bash %}
help history
man 3 strftime
man history
{% endhighlight %}

---

# 03. Customizing the appearance of your command prompt (`PS1` variable) 
The first thing you see when you open the terminal is the command prompt, to better understand it, we can say that it is a “bar indicator” of your position in the Shell. Its appearance depends directly on the PS1 variable, which can be configured in the files: `~/.bashrc`, `.profile` or any file that is part of the recursive tree.

You can customize with the colors you want and the information(metacharacters) you want, for example:
+ `\u` - You enter the username of the shell;
+ `\h` - You enter the host name;
+ `\w` - The full path
+ `\W` - Current directory

For example, run this in your terminal, if you like it add it to your `~/.bashrc` 
{% highlight bash %}
export PS1="\e[32;1m\u \e[33;1m→ \e[36;1m\h \e[37;0m\w\n \e[35;1m⚡\e[m"
{% endhighlight %}

---

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

# 04. Coloring the `man` and making the reading more friendly
The system manual is one of the parts most accessed by Shell, and many people do not like to use it very much, as they find it too technical saying that they cannot understand it well. Copy the command below and paste it at the end of your `~/.bashrc` and then open the manual and see the difference
{% highlight bash %}
export LESS_TERMCAP_mb=$'\e[1;32m'
export LESS_TERMCAP_md=$'\e[1;32m'
export LESS_TERMCAP_me=$'\e[0m'
export LESS_TERMCAP_se=$'\e[0m'
export LESS_TERMCAP_so=$'\e[01;33m'
export LESS_TERMCAP_ue=$'\e[0m'
export LESS_TERMCAP_us=$'\e[1;4;31m'
{% endhighlight %}

---

# 05. Look for bugs in your Shell Code with `shellcheck`
Sometimes when we write our scripts/programs we encounter relevant syntax flaws, but they are still flaws.

For example, using the local declaration directly and already assigning a value to the variable will be identified as an error by ShellSheck. Therefore, you can obtain the fault number that [ShellSheck](http://www.shellcheck.net/) will report and disable, as it is a workable fault:
{% highlight bash %}
#!/usr/bin/env bash
# shellcheck disable=2155
function eko(){
  local _param="${1}"
  printf "%s\n" "${_param}"
  return
}

eko "Test information"
{% endhighlight %}
The correct syntax without ShellSheck would be to declare the location first and then assign value to the variable `_param`:
{% highlight bash %}
#!/usr/bin/env bash

function eko(){
  local _param
  _param="${1}"
  printf "%s\n" "${_param}"
  return
}

eko "Test information"
{% endhighlight %}

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

---

# 06. Get Explanations of Shell Commands
Do you want to know what such a command does? Then copy the LINE of the command and paste it into the search field on the website <https://explainshell.com/> and get details about that command (s).

---

Thanks for reading!

