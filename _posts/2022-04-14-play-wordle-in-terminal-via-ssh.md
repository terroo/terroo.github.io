---
layout: post
title: "Play Wordle in Terminal via SSH"
date: 2022-04-14 11:49:39
image: '/assets/img/tui/clidle.jpg'
description: 'Wordle is the game of the moment and you can play it on your terminal with this version written in Go.'
tags:
- go
- tui
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The internet only talks about [Wordle](https://en.wikipedia.org/wiki/Wordle), it's the game of the moment!

**Wordle** is a web-based word game created and developed by Welsh software engineer Josh Wardle and owned and published by The New York Times Company since 2022.

Players have six attempts to guess a five-letter word, with feedback given for each guess in the form of colored tiles indicating when the letters match or occupy the correct position.

The mechanics are nearly identical to the 1955 pen and paper game Jotto and the Lingo television game franchise.

Wordle has a single daily solution, with all players trying to guess the same word.

---

# Clidle
Clidle is the version of Wordle in the terminal with TUI (Terminal User Interface) written with the programming language [Golang](https://terminalroot.com/tags#go) .

To run it on your system you don't need to install anything. Just use [command](https://terminalroot.com/tags#comandos) [SSH](https://terminalroot.com/tags#ssh) as follows:

{% highlight sh %}
ssh clidle.ddns.net -p 3000
{% endhighlight %}

If you want to run locally, just have [Go](https://terminalroot.com/tags#go) installed and use the command:

{% highlight sh %}
go install github.com/ajeetdsouza/clidle@latest
{% endhighlight %}

For more information go to [clidle](https://github.com/ajeetdsouza/clidle) [repository](https://github.com/ajeetdsouza/clidle) .
