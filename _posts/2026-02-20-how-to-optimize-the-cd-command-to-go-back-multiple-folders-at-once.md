---
layout: post
title: "How to optimize the cd command to go back multiple folders at once"
date: 2026-02-20 13:26:03
image: '/assets/img/bash/cd-menos.jpg'
description: "Spend less time counting how many folders you need to go back with this hack. 😃"
tags:
- gnu
- bash
- shell
- commands
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Everyone in the [UNIX/GNU world](https://terminalroot.com/tags#gnu) constantly uses the [cd command](https://terminalroot.com/50-gnu-commands-x-50-powershell-commands/) to navigate into folders through the terminal.

The `cd` command, also known as `chdir`, is a command implemented in command-line interfaces of various operating systems ([Unix](https://terminalroot.com/tags#unix) or any [Unix-like](https://terminalroot.com/tags#bsd) system, DOS, [Windows](https://terminalroot.com/tags#windows), OS/2 and AmigaOS). 

On [GNU](https://terminalroot.com/tags#gnu) systems (used by most Linux distros) it is a *shell builtin*, meaning it's a bit more complicated to create a [patch](https://terminalroot.com/how-to-create-apply-and-use-the-patch-command/).

The `cd` command is very useful, however, one of the most *annoying* things is when you navigate into many folders and want to go back an exact number of steps, requiring commands like:

{% highlight bash %}
cd ../../../../../../
# Or
cd ..
cd ..
cd ..
cd ..
cd ..
cd ..
{% endhighlight %}

In both cases above, you need to go back *6 times*.

But we can create a [Bash function](https://terminalroot.com/tags#bash) that reduces the amount of typing, making it faster and *like a boss* to go back to the 6th folder without much difficulty, like this: `cd -6`. Just add this function below to the end of your `~/.bashrc`:

{% highlight bash %}
cd() {
    if [[ "$1" =~ ^-[0-9]+$ ]]; then
        local n=${1#-}
        local path=""
        for ((i=0; i<n; i++)); do
            path+="../"
        done
        builtin cd "$path"
    else
        builtin cd "$@"
    fi
}
{% endhighlight %}

Then reload your `~/.bashrc` with the command: `exec $BASH` or `source ~/.bashrc` and then just test it:

{% highlight bash %}
cd -6
{% endhighlight %}

In other words, use `-`(dash/minus) followed by the number of folders you want to go back, examples: `cd -8`, `cd -7`, `cd -11`,...
> Remember that to go to your home folder, simply run: `cd`(without arguments) and to return to where you were, use: `cd -` without specifying any number!

Simple and practical, isn't it?!
