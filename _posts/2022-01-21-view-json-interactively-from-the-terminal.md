---
layout: post
title: "View JSON interactively from the terminal"
date: 2022-01-21 13:48:54
image: '/assets/img/terminal/json-tui.jpg'
description: 'Closing and opening objects with mouse click and animation.'
tags:
- terminal
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**json-tui** is a mini application written in [C++](https://terminalroot.com.br/cpp) that displays JSON files interactively, making it easy to visualize.

It was developed by the same creator of [RGB-TUI](https://terminalroot.com.br/2021/12/selecione-cores-no-terminal-com-rgb-tui-cpp.html) that we published just now time.

---

# Installation
There are some ways to install and for different operating systems, including compiling from scratch.

But the simplest way is the one described below which is summarized in downloading the zipped binary, unzipping and installing.

To do this, run the commands below in order:

{% highlight sh %}
wget -q https://cutt.ly/json-tui -O json-tui.zip
unzip json-tui*
cd json-tui*/bin
sudo install -v json-tui /usr/local/bin/
{% endhighlight %}

Clean up the mess:
{% highlight sh %}
CD -
rm -rf json-tui*
{% endhighlight %}

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

Copy this example **JSON**:
> `vim example.json`
{% highlight json %}
{
  "glossary": {
    "title": "example glossary",
    "GlossDiv": {
      "title": "S",
      "GlossList": {
        "GlossEntry": {
          "ID": "SGML",
          "SortAs": "SGML",
          "GlossTerm": "Standard Generalized Markup Language",
          "Acronym": "SGML",
          "Abbrev": "ISO 8879:1986",
          "GlossDef": {
            "para": "A meta-markup language, used to create markup languages ​​such as DocBook.",
            "GlossSeeAlso": ["GML", "XML"]
          },
          "GlossSee": "markup"
        }
      }
    }
  }
}
{% endhighlight %}

And take the test:
{% highlight sh %}
json-tui example.json
{% endhighlight %}
> To exit interactive mode press the letter `q` .

The likely output will be to display the code and you can manipulate it by clicking the opening braces: `{` . Example of the gif below:

![json-tui](https://github.com/ArthurSonzogni/json-tui/raw/main/demo.webp)

For more information and if you want to build from scratch, access the project's [repository](https://github.com/ArthurSonzogni/json-tui).


