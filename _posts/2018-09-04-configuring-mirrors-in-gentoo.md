---
layout: post
title: "Configuring Mirrors on Gentoo"
date: 2018-09-04 17:20:46
image: '/assets/img/tips/IMG0-mirrors.gif'
description: 'Sometimes when we install something via Portage, and we realize that the data download is very slow.'
featured-img: ../tips/IMG0-mirrors.gif
tags:
- mirrors
- gentoo
---

![Configuring Mirrors on Gentoo](/assets/img/tips/IMG0-mirrors.gif "Configuring Mirrors on Gentoo")

Configuring Mirrors on Gentoo

Sometimes when we install something via [Portage](https://wiki.gentoo.org/wiki/Portage#emerge), and we realize that the data download is very slow, this slowness may be directly related to the fact that the repository closest to our location (repository of the country where we live) is not defined. So we can solve this problem by selecting a repository for our system.

First we will install with the user **root** `su` a package called `mirrorselect`

{% highlight bash  %}
emerge -a mirrorselect
{% endhighlight  %}

After installing it now we need to run the command below to select our repository:

{% highlight bash  %}
-i, --interactive
              Interactive Mode, this will present a list to make it possible to select mirrors you wish to use.
-o, --output
              Output Only Mode, this is especially useful when being used during installation, to redirect output to a file other than /etc/portage/make.conf.
{% endhighlight  %}

> **Note**: that it is necessary to use `-o` with the double redirection `>>` to work, remember that it is a **DOUBLE REDIRECT** `>>` not to overwrite your *make.conf* file.

![Configuring Mirrors on Gentoo](/assets/img/tips/IMG1-mirrors.gif "Configuring Mirrors on Gentoo")

It will open a dialog and select the repositories you want, use the space key on your keyboard to 'check' the desired options. In that case, notice that I have selected all repositories in Canada.

 > **Note**: that after accepting the **terminal** does not clean the contents, however, the **prompt** is returned, if you want to *clean* the terminal use the command `tput reset`

![Configuring Mirrors on Gentoo](/assets/img/tips/IMG2-mirrors.gif "Configuring Mirrors on Gentoo")

Then check *make.conf* and notice that at the end of the file there is now a **GENTOO_MIRRORS** variable with the _'rsync, ftp and http'_ repositories defined with the address we selected.

![Configuring Mirrors on Gentoo](/assets/img/tips/IMG3-mirrors.gif "Configuring Mirrors on Gentoo")

> Optional:

If you do not already have the definitions of repositories created, run the following commands:

{% highlight bash  %}
mkdir --parents /etc/portage/repos.conf
cp /usr/share/portage/config/repos.conf/etc/portage/repos.conf/gentoo.conf
cat /etc/portage/repos.conf/gentoo.conf

[DEFAULT]
main-repo = gentoo

[gentoo]
location = /usr/portage
sync-type = rsync
sync-uri = rsync://rsync.gentoo.org/gentoo-portage
auto-sync = yes
sync-rsync-verify-jobs = 1
sync-rsync-verify-metamanifest = no
sync-rsync-verify-max-age = 24
sync-openpgp-key-path = /usr/share/openpgp-keys/gentoo-release.asc
sync-openpgp-key-refresh-retry-count = 40
sync-openpgp-key-refresh-retry-overall-timeout = 1200
sync-openpgp-key-refresh-retry-delay-exp-base = 2
sync-openpgp-key-refresh-retry-delay-max = 60
sync-openpgp-key-refresh-retry-delay-mult = 4

# for daily squashfs snapshots
#sync-type = squashdelta
#sync-uri = mirror://gentoo/../snapshots/squashfs
{% endhighlight  %}

Most likely now downloads during Portage installations will be faster!

More information: https://wiki.gentoo.org/wiki/Handbook:AMD64/Full/Installation#Crooting
