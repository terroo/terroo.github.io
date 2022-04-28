---
layout: post
title: "Meet 4 Games and Animation for Terminal made with C++"
date: 2022-04-28 10:47:08
image: '/assets/img/cppdaily/2048.jpg'
description: 'Fun, learning and study reference.'
tags:
- cpp
- cppdaily
- terminal
- unixporn
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Here on [blog](https://terminalroot.com/) what else is content about [graphics for terminal](https://terminalroot.com/tags#terminal)(TUI, **T**erminal **U**ser **I**nterface) and [command line](https://terminalroot.com/tags#comandos), this blog lives up to its name 😎 .

And today we are going to increase this content by indicating some [games](https://terminalroot.com/tags#games) and [animations](https://terminalroot.com/tags#unixporn) in the terminal that serve for purposes such as: fun, learning and studying the source code.

And in this case, we will indicate 4 software written in [C++](https://terminalroot.com/tags#cpp) that have an easy to understand code.

Let's go to these 4 tips!

---

# 2048.cpp
![2048.cpp](/assets/img/cppdaily/2048.jpg)

---

[2048](https://en.wikipedia.org/wiki/2048_(video_game)) is a puzzle game created in March 2014 by Italian developer Gabriele Cirulli, in which the objective is to slide numbered pieces in a grid, combining them and create a tile with the number 2048.

**2048.cpp** is the version of this game written in [C++](https://terminalroot.com/tags#cpp) . To compile you will need the following tools:
+ [Git](https://terminalroot.com/tags#git)
+ [g++](https://terminalroot.com/tags#gcc) or [clang++](https://terminalroot.com/tags#clang)
+ [cmake](https://terminalroot.com/tags#cmake)
+ and [GNU Makefile](https://terminalroot.com/tags#make)

After having the compile-time dependencies, now just clone, build and install with the following commands:
{% highlight cpp %}
git clone https://github.com/plibiter8/2048.cpp
cd 2048.cpp
mkdir build && cd build
cmake..
make
{% endhighlight %}

After generating the binary, you can now play it! Just run:
{% highlight sh %}
./2048
{% endhighlight %}

On the first screen displayed, choose the desired option, that is, for a new game, press the number **1** and then press **Enter** .
{% highlight sh %}
   /\\\\\\\\\          /\\\\\\\                /\\\         /\\\\\\\\\
  /\\\///////\\\      /\\\/////\\\            /\\\\\       /\\\///////\\\
  \///      \//\\\    /\\\    \//\\\         /\\\/\\\      \/\\\     \/\\\
             /\\\/    \/\\\     \/\\\       /\\\/\/\\\      \///\\\\\\\\\/
           /\\\//      \/\\\     \/\\\     /\\\/  \/\\\       /\\\///////\\\
         /\\\//         \/\\\     \/\\\   /\\\\\\\\\\\\\\\\   /\\\      \//\\\
        /\\\/            \//\\\    /\\\   \///////////\\\//   \//\\\      /\\\
        /\\\\\\\\\\\\\\\   \///\\\\\\\/              \/\\\      \///\\\\\\\\\/
        \///////////////      \///////                \///         \/////////
  


  Welcome to 2048!

        1. Play a New Game
        2. Continue Previous Game
        3. View Highscores and Statistics
        4. Exit

  Enter Choice:
{% endhighlight %}

Then define the number of rows and columns of the game that somehow represents the level of difficulty, the minimum value is **3** (three) . For example, press **4**(zero) and then press **Enter** and the game will start:


{% highlight sh %}
  (NOTE: Scores and statistics will be saved only for the 4x4 gameboard)
  Enter gameboard size - (Enter '0' to go back):
{% endhighlight %}

The mini tutorial for use can be found on the game screen itself:

{% highlight sh %}
  ┌───────────────────────────┐
  │ SCORE:                 96 │
  │ BEST SCORE:            96 │
  │ MOVES:                 20 │
  └───────────────────────────┘
 
  ┌──────┬──────┬──────┬──────┐
  │    2 │   16 │    4 │      │
  ├──────┼──────┼──────┼──────┤
  │   16 │    4 │      │      │
  ├──────┼──────┼──────┼──────┤
  │    4 │      │    2 │      │
  ├──────┼──────┼──────┼──────┤
  │    2 │      │      │      │
  └──────┴──────┴──────┴──────┘

  W or K or ↑ => Up
  A or H or ← => Left
  S or J or ↓ => Down
  D or L or → => Right
  Z or P => Save
  
  Press the keys to start and continue.
{% endhighlight %}

If you want to exit the game press **Ctrl + C** .

To install just move this binary to some path contained in your `$PATH` variable, example:
{% highlight sh %}
sudo install -v 2048 /usr/local/bin
{% endhighlight %}

Then remove the cloned directory:
{% highlight sh %}
cd ../.. # If still inside build/
rm -rf 2048.cpp
{% endhighlight %}
And then when you want to play it, just run the command `2048` in the terminal.

> There is an option to compile with [Meson](https://terminalroot.com/tags#meson) for more information see [repository](https://github.com/plibither8/2048.cpp) .

Also know another alternative to *2048.cpp* a *2048* made in [C](https://terminalroot.com/tags#linguagemc): [2048-in-terminal](https://github.com/alewmoose/2048-in-terminal).


<!-- SQUARE - GAMES ROOT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# Ascii Bird
[Flappy Bird](https://en.wikipedia.org/wiki/Flappy_Bird) is a game initially developed for mobile by Vietnamese programmer Dong Nguyen.

![Ascii Bird](/assets/img/cppdaily/flap.jpg)

The game is a *side-scroller* where the player controls a bird, trying to fly between columns of green pipes without hitting them.

**Ascii Bird** is a game based on Flappy Bird made with the library [NCURSES](https://terminalroot.com/tags#ncurses) created using only the characters from the table [ASCII](https://en. wikipedia.org/wiki/ASCII).

You will need the following tools to be able to build on your system:
+ [NCURSES](https://terminalroot.com/ncurses)
+ [Git](https://terminalroot.com/tags#git)
+ [g++](https://terminalroot.com/tags#gcc) or [clang++](https://terminalroot.com/tags#clang)
+ and [GNU Makefile](https://terminalroot.com/tags#make)

After that run the commands:
{% highlight sh %}
git clone https://github.com/hamikm/AsciiBird.git
cd AsciiBird
make
{% endhighlight %}

And to test, just run: `./flap` .

The game will automatically load after the similar animation below:
{% highlight sh %}
                   ___ _                       ___ _        _
                  | __| |__ _ _ __ _ __ _  _  | _ |_)_ _ __| |
                  | _|| / _` | '_ \ '_ \ || | | _ \ | '_/ _` |
                  |_| |_\__,_| .__/ .__/\_, | |___/_|_| \__,_|
                             |_|  |_|   |__/


                              Press <up> to flap!


 [==============================================================         ]
{% endhighlight %}

After that it will automatically start, use the up **↑** and down **↓** directional keys to move the player.

To install just move this binary to some path contained in your `$PATH` variable, example:
{% highlight sh %}
sudo install -v flap /usr/local/bin
{% endhighlight %}
> And when you want to play run: `flap` in the terminal . For more information see the [repository](https://github.com/hamikm/AsciiBird) .


<!-- MINI ADS -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# Pong
[Pong](https://en.wikipedia.org/wiki/Pong) is a two-dimensional sports game that simulates table tennis. The player controls an in-game racket by moving it vertically across the screen.

They can compete against another player by controlling a second racket on the opposite side. Players use the paddles to hit a ball back and forth. The objective is for each player to reach eleven points before the opponent; Points are earned when one fails to return the ball to the other.

Pong was manufactured by Atari and originally released in 1972. It was one of the first successful arcade video games in the world.

There are several *remakes* of Pong, one of them is Pong written in [C++](https://terminalroot.com/tags#cpp) and [NCURSES](https://terminalroot.com/ncurses) .

To install, remember to have the build dependencies: [Git](https://terminalroot.com/tags#git), [g++](https://terminalroot.com/tags#g++) and [GNU Make](https://terminalroot.com/tags#makefile) .

To install, run:
{% highlight cpp %}
git clone https://github.com/zacharyvincze/Pong
CD Pong
sed -i 's/-lncurses/-lncurses -ltinfo/g' Makefile
make
{% endhighlight %}

After compiled, run: `./pong` and use the keys **w**, **a**, **s** and **d** for player 1 and **↑**, **→**, **↓** and **←** for player 2 to play. For more information visit the [repository](https://github.com/zacharyvincze/Pong) .

![Pong C++](https://github.com/zacharyvincze/Pong/raw/master/screenshots/pong.png)

An alternative to this Pong is the **PongC** made in [C](https://terminalroot.com/tags#linguagemc) that can be accessed [here](https://github.com/Entalpi/PongC ) .

---

# ASCII Rain
**ASCII Rain** is an animation of rain in the terminal.

You will ask:
> *— Why the hell do I want to watch rain in the terminal?*

Well, this is really a legitimate question, but there is a culture called: [unixporn](https://terminalroot.com/tags#unixporn) who like to use these resources to improve their *rice* (term used to represent the combination of desktop environment customizations in a different way).

We have [some articles](https://terminalroot.com/tags#unixporn) in this regard and for more information [click this link](https://terminalroot.com/tags#unixporn) .

If you want to reproduce this rain in the terminal, install the dependencies(`git`, `gcc` and `make`). And then clone:
{% highlight sh %}
git clone https://github.com/nkleemann/ascii-rain
{% endhighlight %}

Compile:
{% highlight sh %}
gcc rain.c -o rain -lncurses -ltinfo
{% endhighlight %}

Run and/or install:
{% highlight sh %}
./rain
sudo install -v rain /usr/local/bin
{% endhighlight %}

Result:

![ASCII Rain](https://github.com/nkleemann/ascii-rain/raw/master/demo/rain.gif)


For more information visit the [repository](https://github.com/nkleemann/ascii-rain) .

---

# Installation tips
You noticed that almost all the applications we install in the system directory: `/usr/local/bin` and for that we need to use `sudo` .

Although there's this in several tutorials on this blog including this article, I particularly don't recommend it for security and organization reasons.

Install them only for your user, that is, isolating a little more.

For all cases do the following:
+ Create a sub directory in your local directory:
{% highlight sh %}
mkdir -p ~/.local/bin
{% endhighlight %}

Then add that directory to your `$PATH` variable:
> To [Bash](https://terminalroot.com/tags#shellscript)
{% highlight sh %}
echo '${HOME}/.local/bin:${PATH}' >> ~/.bashrc
{% endhighlight %}

Close and then open your terminal or just run the commands below:
{% highlight sh %}
source ~/.bashrc
execute $SHELL
{% endhighlight %}

And every time you need to install a third-party application use this directory, for example:
{% highlight sh %}
install -v app ~/.local/bin
{% endhighlight %}

And instantly the command is already available in your terminal.

Better, right? 😃

---

