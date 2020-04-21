---
layout: post
title: "CAUTION when removing symbolic links"
date: 2020-04-21 16:31:43
image: '/assets/img/tips/remove-symbolic-link.jpg'
description: 'Sometimes simple solutions avoid complex problems!'
featured-img: ../tips/remove-symbolic-link.jpg
tags:
- tips
- commands
- linux
---

![CAUTION when removing symbolic links](/assets/img/tips/remove-symbolic-link.jpg)

On that day I received an email from a person asking me how to recover EFI files, yes those that are stored in the path: `/boot/efi`.

According to the person, the system had created the directory in the path: `/boot/grub/x86_64-efi` and the grub of a second system was trying to find it in `/boot/efi`, so she decided to create a symbolic link to try solve the problem:
{% highlight bash %}
ln -s /boot/grub/x86_64-efi /boot/efi
{% endhighlight %}

Only that did not solve it and she decided to remove the symbolic link with the following command:
{% highlight bash %}
rm -rf /boot/efi
{% endhighlight %}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

What happens is that the `/boot/grub/x86_64-efi` directory has not been removed, but the files have!
![How sad](/assets/img/tips/cat-sad.jpg)

If you create a test there on your system with directories in your `/home/$USER/` just for that, you will realize that this is really what will happen!

# And how to avoid this?

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Well, the measure to be taken so that this does not happen is to use the command `unlink` before removing. Take her example as an example.

First, it should "*remove the link*"  the directory, like this:
{% highlight bash %}
unlink /boot/efi
{% endhighlight %}

And only after that use the `rm` command:
{% highlight bash %}
rm -rf /boot/efi
{% endhighlight %}

Sometimes (just, sometimes, don't get used to it), simple solutions avoid complex problems!
