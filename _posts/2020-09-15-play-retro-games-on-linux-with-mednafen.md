---
layout: post
title: "Play Retro Games on Linux with Mednafen"
date: 2020-09-15 10:26:25
image: '/assets/img/games/mednafen.jpg'
description: 'Mednafen is a command line emulator for many different systems.'
featured-img: ../games/mednafen.jpg
tags:
- games
- linux
---

![Play Retro Games on Linux with Mednafen](/assets/img/games/mednafen.jpg)

I, like all other mortals, am also a fan of games, only I didn't adapt much to the new games and the new platforms.

Sometimes I still gamble on Wii and modern PC games with my son, but I have fun even with retro games.

In the past I used the emulators: **Gens** for the Mega-Drive, **ZNES** for the Super Nintendo and **Stella** for the Atari. But some of these emulators were discontinued and I thought it was bad to have 3 installed for each console.

I even tried [Retroarch](https://www.retroarch.com/) and others. But I found some bizarre bugs, at least for the system I use: Gentoo.

Then, browsing the emulator options in the [Gentoo documentation](https://wiki.gentoo.org/wiki/Games/emulation), I came across [Mednafen](https://mednafen.github.io/). To test it first I tried it on Ubuntu that I have on another partition and it worked.

But I had to adjust the Mednafen configuration file by hand because the graphical version still has some limits.

And I decided to share with you here how to install on Ubuntu and Gentoo, as well as settings I didn't find on the internet and I had to turn around to find out.

---

# Introduction

[Mednafen](https://mednafen.github.io/) is a command line emulator for many different systems. It has full support for OpenGL and SDL graphics, network play, remapable input configuration, support for joystick and keyboard, save states, game rewind, GSF playback and screenshots. The systems supported by Mednafen are:
+ Atari Lynx
+ Neo Geo Pocket
+ Neo Geo Pocket Color
+ WonderSwan
+ Game Boy
+ Game Boy Color
+ Game Boy Advance
+ Nintendo Entertainment System/Famicom
+ Super Nintendo Entertainment System/Super Famicom
+ Virtual Boy
+ PC Engine/TurboGrafx 16 (CD)
+ SuperGrafx
+ PC-FX
+ Sega Game Gear
+ Sega Genesis/Megadrive
+ Sega Master System
+ Sega Saturn
+ Sony PlayStation

---

# Installation on Ubuntu
As I told you, I also tested on Ubuntu and followed these steps:
I installed the emulator and the graphical interface to choose the console, settings, games, ...

{% highlight bash %}
sudo apt install mednafen mednaffe
{% endhighlight %}

And then I opened it through Dash by typing: **mednaffe**. And it worked great, but I realized that Mega-Drive, which is what I like the most 😞, it was only possible to play with 3 buttons and I left it up to Gentoo to solve this, I feel more comfortable solving these types of research-related problems!

---

# Gentoo Installation
Well, installing Gentoo was also simple, but there were some differences. First I compiled the packages:
- `games-emulation/mednafen` - Emulator.
- `games-emulation/mednaffe` - Interface for configuring the emulator.
In Gentoo there is still `games-server/mednafen-server` which is a server for Mednafen.

After compiling and installing I came across the first problem. The current version (according to the date I tested) is *0.9.46* and Mednaffe does not open for that version.

So I went to search [on this link](https://packages.gentoo.org/packages/games-emulation/mednafen) if there was a new ebuild, the maintainer said that it has not yet been implemented, but that it is possible to update directly:

![Version 1.24.3 is available upstream. Please consider updating!](/assets/img/games/update-mednafen-gentoo.png)

So I downloaded the new version and compiled it, but first rename the previous version so that Mednaffe could take the new path:
> Remembering that it is **64-bit**, for Linux there is only this option.

{% highlight bash %}
su -c "mv/usr/bin/mednafen/usr/bin/mednafen_old"
wget https://mednafen.github.io/releases/files/mednafen-1.21.3.tar.xz
tar Jxvf mednafen-1.21.3.tar.xz
cd mednafen
./configure
make
su -c "make install"
{% endhighlight %}

There, the version is now **1.21.3**:
{% highlight bash %}
mednafen --version
Starting Mednafen 1.21.3
 Build information:
   Compiled with gcc 9.3.0
   Compiled against zlib 1.2.11, running with zlib 1.2.11 (flags = 0x000000a9)
   Compiled against SDL 2.0.12 (hg-13609: 34cc7d3b69d3), running with SDL 2.0.12 (hg-13609: 34cc7d3b69d3)
   Running with libsndfile-1.0.29
 Base directory: $ {HOME} /. Mednafen
 Emulation modules: nes snes gb gba pce lynx md pcfx ngp psx ss ssfplay vb wswan sms gg snes_faust pce_fast demo cdplay
 Opening lockfile ...
 Loading settings from "$ {HOME} /. Mednafen/mednafen.cfg" ...
  Loaded 7396 valid settings and 129 unknown settings.
Unrecognized argument: --version
{% endhighlight %}

So I was able to open Mednaffe:

![Mednaffe running](/assets/img/games/mednaffe-running.png)

I added a ROM in **File > Open ROM**, remembering that you don't need to unzip the ROM you downloaded. A cool site to download games/ROMs is [Cool ROM](https://coolrom.com.au/), if you want to search for games from a specific console go to **ROM files**, [here](https://coolrom.com.au/roms/genesis/) an example of a link to search and find games for Mega-Drive.

Well, so far so good, but then a "small problem" appeared, the Mega-Drive only there are 3 buttons, but I managed to solve this problem and I will show you how I solved it in the topic below.

# Configuring the Mega-Drive for 6 Buttons
Well, you can configure: Fullscren, keyboard, ... according to the console you want to customize through Mednaffe by going to the **Systems** tab, selecting the console and the **Input** tab clicking on **Controller Setup** and set the keys you want to be: Up, →, ↓, ←, button: A, B, C and start.

But there is a limitation in the graphic part (Mednaffe) that it is not possible to configure the buttons: X, Y and Z, just like the developer [said here](https://forum.fobby.net/index.php?t=msg&&th=1637&goto=5354#msg_5354).

The Mednafen configuration directory is at: `~/.mednafen` and the main file is `~/.mednafen/mednafen.cfg` and it is generated as soon as you open a game to run. You can obtain all documentation [at this link](https://mednafen.github.io/documentation/).

According to a comment from another member of the forum, you just need to edit the configuration file and set it to `gamepad6`, but it was not very clear, so I will summarize:
+ **1º** - In the configuration file `~/.mednafen/mednafen.cfg` the lines referring to Mega-Drive start: **md** after followed by `input` then the port, in this case the control number, for player 1 would be:` port1 gamepad` and then follow the subsequent lines with the same pattern as with new parameters that define the keys.

But the line that does not have new parameters is precisely the one that defines which keyboard model you want and by default it is only `gamepad`. if you want the Mega Drive to accept 6 buttons it is to replace `gamepad` with` gamepad6`, if you want to run this command through the terminal that will do this automatically:

{% highlight bash %}
sed -i 's/^md.input.port1 gamepad$/md.input.port1 gamepad6/' ~/.mednafen/mednafen.cfg
{% endhighlight %}

But the keys have a peculiar numbering different from the outputs of the `showkey` for example. Then, you will have to find out by changing the graphics and figuring out the numbers.

For example, in my case I defined the keys on the keyboard: `a`,` s` and `d` to be the **A**, **B** and **C** buttons on the Mega Drive. And the keyboard keys: `x`,` c` and `v` to be the **X**, **Y** and **Z** of the Mega Drive. And the arrow keys to be: up, down, ...

If you want to save time, use my configuration file, just run this command:
{% highlight bash%}
wget https://terminalroot.com.br/downs/mednafen.cfg -O ~/.mednafen/mednafen.cfg
{% endhighlight%}

And ready, open and try to play a game and use the keys I informed you!

In the future I will record some * gameplays * and post on [my Twitch channel](https://www.twitch.tv/TerminalRootTV), stay there if you want to follow.

Ah! I almost forgot, **Alt + Enter** changes to full screen! 😃 I hope I helped!

![Play Mednafen Gentoo bspwm](/assets/img/games/mednafen-mega-drive-play.png)

# Thanks!



<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

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
    
