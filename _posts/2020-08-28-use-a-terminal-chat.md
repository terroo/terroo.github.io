---
layout: post
title: "Use a Terminal Chat"
date: 2020-08-28 12:22:29
image: '/assets/img/terminal/weechat-matrix.png'
description: 'WeeChat is an IRC client distributed under the terms of the GNU GPLv3 license.'
featured-img: ../terminal/weechat-matrix.png
tags:
- terminal
- weechat
- chat
---

![Use a Terminal Chat](/assets/img/terminal/weechat-matrix.png)

[WeeChat](https://weechat.org/) is an IRC client distributed under the terms of the []GNU General Public License 3](https://www.gnu.org/licenses/gpl-3.0.html) and has been in development since 2003.

It is extensible to several languages such as: C, Python, Perl, Ruby, Lua, Tcl, Scheme, Javascript and PHP.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# Installation

Use your distribution's package manager, examples:
{% highlight bash %}
emerge weechat # Gentoo, Funtoo, ...
sudo apt install weechat # Debian, Ubuntu, Mint, ...
sudo pacman -S weechat # Arch, Manjaro, ...
sudo dnf install weechat # Red Hat, CentOS, Fedora, ...
{% endhighlight %}
> WeeChat is also available for: OpenBSD, NetBSD, FreeBSD, GNU Hurd, macOS, Solaris and more.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Use

+ `weechat` - Opens WeeChat;
+ `/help` - Get help;
+ `/quit` - Exits WeeChat;
+ `/clear` or just the `CL` alias - Clear the buffer;
+ `/server` add freenode chat.freenode.net - Adds a server, in this example the one from freenode.net the best known;
+ `/connect freenode` - Connect to freenode without nickname and without channel;
+ `/join #gentoo` - Join the #gentoo channel or create a temporary channel for use;
+ `/nick marcosgentoo` - Set your nickname to `marcosgentoo`;
+ `/msg user "My message"` - Send a private message to user, for everyone on the channel just type and press enter;
+ `/close` - Leave a channel or a private chat;
+ `/disconnect` - Disconnect from the Server.

If you want to do tests online, I suggest you test with: <https://webchat.freenode.net/>

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

# Some Shortcuts

+ `Alt + ←,` `Alt + ↓`,…, `F5` or `F6` - Navigate through the side panel to choose who to send, for example: specific user or the entire channel;
+ `F12` - Scrolls the names of users online;
+ `Alt + l` - Change the layout style;

# Registering a user
If you want to have a registered nickname, use the command:
{% highlight bash %}
/msg NickServ REGISTER YourPassword youremail@example.com
{% endhighlight %}

Log in with your registered user:
{% highlight bash %}
/connect chat.freenode.net 6667 YourNick:YourPassword
{% endhighlight %}

> Whenever you use and want to ask something, join the channel: `#terminalroot` and let's chat!

You can still accomplish a lot with WeeChat, for that I suggest you consult the documentation on the links:

+ <https://weechat.org/files/doc/stable/weechat_quickstart.en.html>
+ <https://weechat.org/doc>
+ <https://wiki.gentoo.org/wiki/WeeChat>
+ <https://pt.wikipedia.org/wiki/WeeChat> And for more tips from freenode.net:
+ <https://freenode.net/kb/answer/registration>

### There is a video that shows most of the tips mentioned above. The video is in Brazilian Portuguese, but you can follow it, because the commands are universal.

<iframe width="1100" height="490" src="https://www.youtube.com/embed/gi36Ap9PIB0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# Thanks!
