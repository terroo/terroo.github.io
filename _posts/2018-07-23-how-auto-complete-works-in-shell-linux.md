---
layout: post
title: "How Auto Complete Works in Shell Linux"
date: 2018-07-23 00:34:13
image: '/assets/img/bash/auto-complete-shell-bash.gif'
description: 'By default, after installing Gentoo Linux, or another distribution, the auto complete in the Shell is not installed.'
main-class:
tags:
---

By default, after installing Gentoo Linux, or another distribution, the auto complete in the Shell (in this case we will talk about BASH, however, we will give tips for the other shells) is not installed. Usually you find him on the way:

{% highlight bash %}
/etc/bash_completion
bash_completion.d/*
/etc/bash_completion.d/gentoo-style-init
{% endhighlight %}

That is, if you use git, man, … You will notice that the next command parameters will not be auto-completed with the [TAB] key.

If you just want to use it at the moment it is, you can use the complete command with the arguments ‘c’ and ‘f’. Example to auto complete the parameters with the complete command:

{% highlight bash %}
complete -cf man
{% endhighlight %}

After running this command, you will notice that if you use the man command and a parameter (man [command]) will now appear. Although with this solution appear some observations:

It can auto complete several commands that do not even have manual;
 In other commands there may be an excessive number of possibilities that are not always linked to the command you want.
 When closing the terminal you will notice that the configuration will be lost (but in this case you can add it to your .bashrc, for example echo "complete -cf [comando]" >> ~/.bashrc).

If you noticed some ‘mess’ in your Shell, you can “remove” with the ‘r’ option this configuration with the command below:

{% highlight bash %}
complete -r man
{% endhighlight %}

However, the most correct solution is you install an application for Shell, the bash-completion.

To install it, use:

{% highlight bash %}
emerge --ask app-shells/bash-completion
{% endhighlight %}

After installed check that the git, man, … commands are auto completing the parameters with the [TAB] key !!!

If you want to see the file, run the command

{% highlight bash %}
cat /etc/bash_completion.d/gentoo-style-init
{% endhighlight %}

For other shells and applications, there are the options below:

{% highlight bash %}
app-shells/zsh-completions
app-shells/tmux-bash-completion
app-shells/mpv-bash-completion
app-shells/gentoo-zsh-completions
{% endhighlight %}

For more information, run the Portage search commands:

{% highlight bash %}
emerge --search completion
emerge --searchdesc bash-completion
{% endhighlight %}

Useful links

{% highlight md %}
<https://www.gnu.org/software/bash/manual/html_node/Programmable-Completion.html>
<http://tldp.org/LDP/abs/html/tabexpansion.html>
<https://wiki.gentoo.org/wiki/Bash>
<https://wiki.gentoo.org/wiki/Bash/Installing_completion_files>
<https://wiki.archlinux.org/index.php/Bash>
<https://github.com/git/git/blob/master/contrib/completion/git-completion.bash>
<https://github.com/bobthecow/git-flow-completion/wiki/Install-Bash-git-completion>
{% endhighlight %}

via: [Marcos Oliveira Medium](https://medium.com/marcos-oliveira/how-auto-complete-works-in-shell-linux-fe3c37b47361)
