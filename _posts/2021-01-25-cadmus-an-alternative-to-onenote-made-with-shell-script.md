---
layout: post
title: "Cadmus - An alternative to OneNote made with Shell Script"
date: 2021-01-25 13:00:03
image: '/assets/img/tips/cadmus.jpg'
description: 'Shell scripts to make it easier to manage notes effectively.'
featured-img: ../tips/cadmus.jpg
tags:
- shellscript
- terminal
- linux
---

![Cadmus - An alternative to OneNote made with Shell Script](/assets/img/tips/cadmus.jpg)

[Cadmus](https://github.com/RyanGreenup/cadmus) provides a command-oriented interface for finding and editing Markdown files, how to find by name, search for terms, filter by tags, generate backlinks and generate links related to other notes using a bunch of scripts that basically use pipes and ripgrep with skim to display them.

# Installation
Cadmus is available on [AUR](https://terminalroot.com.br/2020/12/como-instalar-pacotes-do-aur-via-yay-no-arch-linux.html) for [Arch Linux](https://terminalroot.com.br/2020/01/arch-linux-openbox-tint2.html), however, from the normal user directory `~/.cadmus/`, then just use [git](https://terminalroot.com.br/git/):
{% highlight bash %}
cd $ (mktemp -d)
wget https://raw.githubusercontent.com/RyanGreenup/cadmus/master/install.sh
bash install.sh
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

**Manual installation**

All dependencies are required: [bat](https://github.com/sharkdp/bat), [cut](https://www.gnu.org/software/coreutils/manual/html_node/The-cut-command.html), [fd](https://github.com/sharkdp/fd), [find](https://en.terminalroot.com.br/20-find-command-examples/), [fzf](https://github.com/junegunn/fzf), [GNU realpath](https://www.gnu.org/software/coreutils/manual/html_node/realpath-invocation.html#realpath-invocation), [grep](https://terminalroot.com.br/2017/01/como-buscar-recursivamente-usando-o-grep.html), [highlight](https://www.archlinux.org/packages/community/x86_64/highlight/), [jq](https://packages.ubuntu.com/search?keywords=jq), [mdcat](https://aur.archlinux.org/packages/mdcat/), [node](https://terminalroot.com.br/2019/11/como-instalar-nodejs-no-linux-e-primeiros-passos.html), [Pandoc](https://github.com/jgm/pandoc), [perl](https://wiki.archlinux.org/index.php/Perl), [python](https://en.terminalroot.com.br/basic-python-script-for-learning/), [ranger](https://www.archlinux.org/packages/community/any/ranger/), [recode](https://www.archlinux.org/packages/extra/x86_64/recode/), [Recoll](https://www.lesbonscomptes.com/recoll/), [sd](https://github.com/chmln/sd), [sed](https://www.gnu.org/software/sed/), [skim](https://github.com/lotabout/skim), [tmsu](https://aur.archlinux.org/packages/tmsu/),  [xclip](https://terminalroot.com.br/2020/10/copie-e-cole-via-linha-de-comando-do-linux-com-xclip.html) or [wl-clipboard](https://github.com/bugaevc/wl-clipboard) and [rg](https://github.com/BurntSushi/ripgrep) . 

Then clone the repository and include it in your `$PATH`:
{% highlight bash %}
git clone https://github.com/RyanGreenup/cadmus ~/.cadmus  \
|| echo "Delete $HOME/.cadmus first"
mkdir -p $HOME/.local/bin
ln -s "$HOME/.cadmus/bin/cadmus" "$HOME/.local/bin/"
echo $PATH | grep "$HOME/.local/bin" &> /dev/null && echo "$HOME/.local/bin in path already" || ls "$HOME/.local/bin" &> /dev/null && echo 'PATH="$PATH:$HOME/.local/bin"' >> $HOME/.profile
{% endhighlight %}

# Usage
After installed just run the command `cadmus` in the terminal and it will guide you to generate a configuration file.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

To export a document in **PDF** or **HTML**, simply run the command:
{% highlight bash %}
cadmus export pdf/html/docs
{% endhighlight %}

# Hotkeys

| Keys | Description |
|---|---|
| `PgUp/PgDn` | Scrolling view |
| `Ctrl-w` | Copy absolute path to note |
| `Alt-w` | Copy relative path to note |
| `Ctrl-o` | Open the note in the standard application without leaving |
| `Alt-y` | Copy the contents of the file to the clipboard |

---

# Comparison with other tools

|           | FOSS | Offline | Linux/BSD? | terminal? | RawFiles? | Markdown | AnyEditor? |
|-----------|------|---------|------------|-----------|-----------|----------|------------|
| OneNote   | ❌   | ❌      | ❌         | ❌        | ❌        | ❌       | ❌         |
| EverNote  | ❌   | ?       | ❌         | ❌        | ❌        | ❌       | ❌         |
| Notable   | ❌   | ✅      | ✅         | ❌        | ✅        | ✅       | ✅         |
| Zim       | ✅   | ✅      | ✅         | ❌        | ✅        | ✅       | ✅         |
| Obsidian  | ❌   | ✅      | ✅         | ❌        | ✅        | ✅       | ✅         |
| dokuwiki  | ✅   | ❌      | ✅         | ❌        | ✅        | ✅       | ✅         |
| joplin    | ✅   | ✅      | ✅         | ✅        | ❌        | ✅       | ❌ †       |
| mediawiki | ✅   | ❌      | ✅         | ❌        | ❌        | ❌       | ❌ ‡       |
| Org-Mode  | ✅   | ✅      | ✅         | ✅        | ✅        | ❌       | ❌         |
| Cadmus    | ✅   | ✅      | ✅         | ✅        | ✅        | ✅       | ✅         |

---

Want to know more about Cadmus? Visit the project on [GitHub](https://github.com/RyanGreenup/cadmus) and also the [website with all the documentation](https://ryangreenup.github.io/cadmus/).

Cadmus in action:

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

![Cadmus](/assets/img/tips/cadmus.gif)


