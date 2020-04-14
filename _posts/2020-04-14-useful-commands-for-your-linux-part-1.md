---
layout: post
title: "Useful commands for your Linux Part 1"
date: 2020-04-14 11:47:11
image: '/assets/img/linux/think-linux.jpg'
description: 'At some point in an interview or selection exam, we forget these basic things.'
featured-img: ../linux/think-linux.jpg
tags:
- linux
- commands
- tips
---

![Useful commands for your Linux Part 1](/assets/img/linux/think-linux.jpg)

Hello guys! We are going to create some quick and simple knowledge articles (so as not to get bored) of things that we often already know, but at some point in an interview or selection exam, we forget, and these simple articles usually exercise our mind to fix and avoid forgetfulness. And always with more intelligent commands that will make us memorize better and better. So let's go to 5 Useful Commands for your Linux !!!

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# 01. Find out if your user is in a group
```sh
# 1° way
groups $USER

# 2º way
grep $USER /etc/group | cut -d: -f1 | tr '\n' ' ';echo


# 3° way
id $USER | sed "s/)[^(]*(/ /g;s/.*(\|//;s/.$//;s/$USER $USER //"
```

# 02. Insert user in a group
```sh
# 1º way
sudo usermod -G grupo -a usuario

# 2° way
gpasswd -a usuario grupo
```

# 03. Check if your user can use sudo
```sh
# Enter the Root password
[[ $(su -c "grep $USER /etc/sudoers") ]] && echo Yes || echo No
```

# 04. Getting information about a file
This command displays creation data, modification date. change and other information.
```sh
stat filename
```

# 05. Working with permissions
+ If we were to give zero permission to everyone, we could use chmod or chown: `chmod 0 file.txt`
+ If we want to return the initial permissions, we would use the same as it was: `chmod 644 file.txt`
+ And to change the owner: `sudo chown root file.txt` that way we change the owner and not the group, if we wanted to change the group we would also use: `sudo chown root:root file.txt`

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Viewing again with `stat` we notice that the owner and/or the group have been changed, but we realize that the group is only allowed to read (r, read), if we wanted to get that permission, we can also use either `chmod` or `chown`

+ with chmod: `sudo chmod g-r`, for group (**g**) get (**-**) read permission (**r**, read), if we check the file again we will see that instead of `0644` e` -rw-r–r–` and now that is: `0604/-rw—-r–` , others can still read (`r–`), but if he is only part of the marcos group, his permission corresponding to the 3rd octet is ZERO **0** or **-**.

We soon realized that `0` is `-` .

Tip with image for each number the corresponding output for the octet:


## Search Links:
+ <https://en.wikipedia.org/wiki/Chmod>, very interesting for technical and detailed analysis.
+ <https://en.wikipedia.org/wiki/User_identifier>, top complement!
