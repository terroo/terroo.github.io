---
layout: post
title: "How to open Markdown files with md extension in Firefox"
date: 2020-08-17 14:42:44
image: '/assets/img/firefox/markdown-firefox.jpg'
description: 'I've read this question in several places, I decided to write an article to show you how.'
featured-img: ../firefox/markdown-firefox.jpg
tags:
- firefox
- markdown
- linux
---

![How to open Markdown files with md extension in Firefox](/assets/img/firefox/markdown-firefox.jpg)

In the past you installed a [Markdown Viewer](https://addons.mozilla.org/firefox/addon/markdown-viewer-chrome/) plugin on [Firefox](https://www.mozilla.org/firefox/) and was able to open **.md** files that are of the type [Markdown](https://daringfireball.net/projects/markdown/). But after the **57** version of Firefox, this is no longer possible, every time you try to open a file with `Ctrl + o` this box appears with this information:

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

![Open md file in Firefox](/assets/img/firefox/open-test-file-md.png)

That is, the browser asks if you want to open with a text editor or download the file that is already on your machine.

If you just install plugins it will not solve, you need to follow the following steps:

# 1. Access Firefox settings by typing in the url address: `about:config`

![about config](/assets/img/firefox/about-config.png)

# 2. In the search field, look for the name setting: `helpers.private_mime_types_file`

![helpers.private_mime_types_file](/assets/img/firefox/helpers.private_mime_types_file.png)

> Notice that it shows a file for *mime-types* that must be saved on your computer, exactly in the informed path: `~/.mime.types`. It is even possible to edit the path by the browser itself by clicking on the edit icon, but we will take this path and file name as default, even because it is standard! ☺

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Let's create the file:
```sh
vim ~/.mime.types
```
And inside it we will insert the following content:
```sh
text/plain     md txt
```

As a result we inform you what types of files we want Firefox to open directly in the browser, if you want more files feel free to inform. I know that txt already opens by default, but there will be no problem re-formatting.

# 4. Now if you try to open the `.md` file, notice that it is already open:

![Md file](/assets/img/firefox/file-md.png)

But notice that the Markdown is not rendered but the code is displayed as a text file. In the next step we will change that!

# 5. Now comes the role of Firefox's [extension/addon/plugin](https://addons.mozilla.org/firefox/extensions/). For this we will use the [Markdown Viewer Webext](https://addons.mozilla.org/firefox/addon/markdown-viewer-webext/), there are others, but we will use this one, after installing, tcharaaamm! !!

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

![Markdown rendering in Firefox](/assets/img/firefox/tcharaaamm.png)

You can still customize the CSS to make it the way you want, centralized, for example as I did and is in the image, by going to:

**☰ → Extensions → ... (from plugin) → Preferences → Preferences (from plugin)**

And below the field to insert your CSS, in my case I inserted: `body {max-width: 1000px; margin: auto; }` as in the image below:

![three dots](/assets/img/firefox/three dots).png)
![css](/assets/img/firefox/css.png)

Easy, right ?! ☺
