---
layout: post
title: "How to Clone Only a Subdirectory with Git or SVN"
date: 2019-12-14 14:57:31
image: '/assets/img/git/git-clone-min.jpg'
description: 'Git is already possible, but SVN is much simpler.'
featured-img: ../git/git-clone-min.jpg
tags:
- git
- svn
- github
---

![How to Clone Only a Subdirectory with Git or SVN](/assets/img/git/git-clone-min.jpg)

In this tip I will show something that seems simple (in Git), but it is very complicated! =) Because I actually created a [Shell Script](https://terminalroot.com.br/shell) that you can run as a command in your `$PATH`.

I will also provide one more solution, but not from [Git](https://terminalroot.com.br/git) but from [SVN](https://subversion.apache.org/), which to be honest , I would not even need a Shell function, but to make it even easier I will also show.

To understand this article you must have basic knowledge of [Git](https://git-scm.com/) and [GitHub](https://github.com/) or any other Git repository.

For that I recommend you to know our specific Git and GitHub beginner page: <https://terminalroot.com.br/git>. There you'll find text and video tips, including a [Git and GitHub for Beginners] mini course (https://www.youtube.com/watch?v=CsyumQN6ZdA&list=PLUJBQEDDLNclXAjLaiPWakoO9VosPDzC1).

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

## Introduction

In short, cloning a *repository* means: copying all its files to your computer.

[git clone](https://git-scm.com/docs/git-clone) is a Git command line utility that is used to direct an existing repository and create a clone or copy of the destination repository. It is very simple to clone Git repositories: [GitHub](https://github.com/terroo/), [GitLab](https://gitlab.com/terminalroot/), [BitBucket](https://bitbucket.org/terminalroot/) and others.

The command summarizes in:

{% highlight bash%}
git clone [repository]
{% endhighlight%}

For example, I have a repository that is <https://github.com/terroo/fonts>, assuming you want to clone this repository, the command would be:

{% highlight bash%}
git clone https://github.com/terroo/fonts
{% endhighlight%}

You can still clone already renaming and/or with the same name in a new path of your computer, example:

1. Clone with a new name: **new-fonts**:

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight bash%}
git clone https://github.com/terroo/fonts new-fonts
{% endhighlight%}

2. Clone with a new name within the *Downloads* directory:

{% highlight bash%}
git clone https://github.com/terroo/fonts Downloas/new sources
{% endhighlight%}

Or even clone with the same name in another path:

{% highlight bash%}
git clone https://github.com/terroo/fonts Downloads/fonts
{% endhighlight%}

> *Note*: If you enter a new path, you must enter a *name*, either the same name or a new one. If you do so, without entering a name, it will report an error: `fatal: destination path 'Downloads' already exists and is not an empty directory.`.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

In addition there are several parameters you can use, here we will see a few, but you can get the full documentation on the official Git website more specifically at the URL: <https://git-scm.com/docs/git-clone>.

## Cloning a Subdirectory

This repository that I used as an example was totally poorly designed, there you will not only find *fonts*, but also: Wallpapers, WM configuration files and other things. And because of that, sometimes I want to copy only one * sub directory * into it.

For example, in this [repository](https://github.com/terroo/fonts) there is a folder/directory named *files* and let's suppose I want to copy/clone only this directory/sub-directory if I do this: ~~`git clone https://github.com/terroo/fonts/files`~~ will not work, Git will not allow it, clone will fail:

{% highlight bash%}
marcos@gentoo ~ $ git clone https://github.com/terroo/fonts/files
Cloning into 'files' ...
remote: Not Found
fatal: repository 'https://github.com/terroo/fonts/files/' not found
marcos@gentoo ~ $
{% endhighlight%}

And it's quite inconvenient for you to clone the entire repository (which by the way is quite large) which will take a long time just to use files from a specific repository directory.

Until Git **2.18** this was not possible, but as of **2.19** it is already possible, so check your Git version before proceeding, use the `git --version` command to know the version. If it is equal to or greater than **2.19** you can clone only a specific directory.

To clone this directory (*files*, inside the repository) we will use the following commands, explanation in the comments (**#**):

{% highlight bash%}
# Create a directory, so Git doesn't get messy, and enter it
mkdir my-dir && cd my-dir

# Start a Git repository
git init

# Track repository, do not enter subdirectory
git remote add -f origin https://github.com/terroo/fonts/

# Enable the tree check feature
git config core.sparseCheckout true

# Create a file in the path: .git/info/sparse-checkout
# That is inside the hidden .git directory that was created
# by running the command: git init
# And inside it enter the name of the sub directory you only want to clone
echo 'files' >> .git/info/sparse-checkout

## Download with pull, not clone
git pull origin master
{% endhighlight%}

For each command, if you do not understand well, I recommend you look over the manual, for example: `man git remote`.

If you find a lot of process running all these commands, you can use a shell script, as I said to get automatic and run only one command, see the script by clicking the link below:

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

### [📁 git.dir.sh](https://gist.github.com/TerminalRootTV/9e6edc6cae411e57eceb1a83831b558b)

If you want to make a command to use in any directory you are in, save it with the name: `git-dir` (or the name you want) and move it where you want, for example:

{% highlight bash%}
sudo mv git-dir/usr/local/bin/git-dir
# Or if you are a UNIX bugger:
# sudo install -D -v git-dir -t /usr/local/bin/git-dir
{% endhighlight%}

And to use just run `git-dir` anywhere you are that it will already show *help* displaying the options.

## Alternative - Using SVN

Note that when we use Git for this, this *clone*, despite being from a subdirectory, will still be very slow. For this there is a much faster solution using SVN which is an alternative to the [Apache Software Foundation] Git (https://en.wikipedia.org/wiki/Apache_Software_Foundation).

The difference between SVN and Git, in my opinion, is summarized in these two images below, that is, there is no better or worse, there is one that meets your specific needs for each case.

![Git](/assets/img/git/01-git.svg)
![SVN](/assets/img/git/02-svn.svg)


Apache Subversion (also known as SVN) is a version control system designed specifically to be a modern replacement for CVS, which is considered to have some limitations. Subversion uses Berkeley BD database.

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

First of all, you need to have it installed on your system. To do this use your distro's package manager:

{% highlight bash%}
sudo emerge subversion # Gentoo, Funtoo and Portage baseds
sudo apt-get install subversion # Debian, Ubuntu, Linux Mint APT baseds
sudo pacman -S subversion # Arch Linux, Manjaro and PacMan baseds
sudo yum install subversion # Red Hat, CentOS and YUM baseds
sudo dnf install subversion # Fedora
{% endhighlight%}

And to clone just use the `export` parameter with *fake-dir*:` trunk` between the repository and the subdirectory, example:

{% highlight bash%}
svn export [repository]/trunk/[subdirectory]
{% endhighlight%}

Example for our case:

{% highlight bash%}
svn export https://github.com/terroo/fonts/trunk/files
{% endhighlight%}

If you want it to be your command, simply create a command or add this function to your `~/.bashrc`:

{% highlight bash%}
git-svn(){
  if [[ ! -z "$1" && ! -z "$2" ]]; then
          echo "Starting clone/copy ..."
          repo=$(echo $1 | sed 's/\/$\|.git$//')
          svn export "$repo/trunk/$2"
  else
          echo "Use: git-svn <repository> <subdirectory>"
  fi  
}
{% endhighlight%}

> In this case I treated the end of the repository name if the user copies with * .git * or with */* at the end of the URL name.

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

And to use, just run: `git-svn [repository] [subdirectory]`

Much simpler, right?

It is your choice which mode to use. Leave your tips/questions in the comments for us to interact in the solution or discussion on related issues!

Hugs!

## Useful links:

+ <https://git-scm.com/docs/git-clone>
+ <https://subversion.apache.org/>
+ <https://stackoverflow.com/questions/600079/how-do-i-clone-a-subdirectory-only-of-a-git-repository/52269934>
+ <https://www.youtube.com/watch?v=CsyumQN6ZdA&list=PLUJBQEDDLNclXAjLaiPWakoO9VosPDzC1>
+ <https://terminalroot.com.br/git>
+ <https://terminalroot.com.br/shell>
+ <https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone>    
