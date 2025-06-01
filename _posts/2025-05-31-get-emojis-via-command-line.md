---
layout: post
title: "Get Emojis via Command Line"
date: 2025-05-31 22:13:33
image: '/assets/img/terminal/emoji.jpg'
description: "🚀 A command with autocomplete made with C++."
tags:
- terminal
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Today was pretty calm, so I spent some time tinkering with ideas. Among them, I found a link to a bunch of emojis in my bookmarks and thought:

+ *— Why not fetch these emojis via the command line to make things easier?!*

So I started writing some basic code and came up with this simple command to help out, even if just in a basic way.

See how to compile and install it on your [Unix-like](https://terminalroot.com.br/tags#unix) system.


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

## 💼 Installation
Of course, you’ll need either [GCC](https://terminalroot.com.br/tags#gcc) or [Clang](https://terminalroot.com.br/tags#clang) installed.

Then just follow these steps:

### ⤵️ 01. Download the emoji list:
Using `wget`:
{% highlight bash %}
wget -q bit.ly/emoji-txt -O ~/.emojis.txt
`{% endhighlight %}

Or using [cURL](https://terminalroot.com.br/tags#curl):

{% highlight bash %}
curl -sL bit.ly/emoji-txt -o ~/.emojis.txt
{% endhighlight %}

### 📄 02. Create a [C++](https://terminalroot.com.br/tags#cpp) file:
> Example: `vim emoji.cpp`

Paste this code inside:

{% highlight cpp %}
#include <iostream>
#include <fstream>

constexpr auto show_emoji = [](const std::string& query){
  const std::string user = std::getenv("USER");
  std::ifstream file("/home/" + user + "/.emojis.txt");
  std::string line;
  bool found = false;
   
  while(std::getline(file, line)){
    const size_t space_pos = line.find(' ');
    if (space_pos == std::string::npos) continue;
    const std::string name = line.substr(0, space_pos);
    const std::string emoji = line.substr(space_pos + 1);
    if(name.find(query) != std::string::npos){
      std::cout << emoji << " " << name << '\n';
      found = true;
    }
  }
   
  if(!found){
    std::cerr << "Emoji not found.\n";
  }
};

int main(int argc, char** argv){
  if (argc < 2) return 1;
  show_emoji(argv[1]);
}
{% endhighlight %}

### 🚧 03. Compile and install:

{% highlight bash %}
g++ -O3 -ffast-math emoji.cpp -o emoji
sudo mv emoji /usr/local/bin
{% endhighlight %}

### 📺 04. Add autocomplete to your terminal:

To add autocomplete for Bash:

> Add this at the end of your `~/.bashrc`

{% highlight bash %}
_emoji_complete() {
  local cur=${COMP_WORDS[COMP_CWORD]}
  COMPREPLY=( $(compgen -W "$(grep "^$cur" ${HOME}/.emojis.txt)" -- "$cur") )
}
complete -F _emoji_complete emoji
{% endhighlight %}

Then run: `source ~/.bashrc`

To add autocomplete for ZSH:

> Add this at the end of your `~/.zshrc`

{% highlight bash %}
_emoji_complete() {
  local -a matches
  local cur="$words[2]"

  matches=($(grep "^$cur" "${HOME}/.emojis.txt"))
  compadd -- $matches
}

compdef _emoji_complete emoji
{% endhighlight %}

Then run: `source ~/.zshrc`

Test:

{% highlight bash %}
$ emoji game<TAB>
game      game_die

$ emoji game<ENTER>
🎮 game
🎲 game_die
{% endhighlight %}

![alt text](/assets/img/terminal/emoji.gif)

---

I used this tool to fill in the emojis for this post: I typed things like `emoji tv`, `emoji const` (for construction), `emoji doc` (document), ... Soon you’ll get used to the keywords and find them all easily! 😺

Pretty neat, right? 😃

