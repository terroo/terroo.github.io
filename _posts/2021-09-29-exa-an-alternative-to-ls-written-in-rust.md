---
layout: post
title: "Exa - An alternative to ls written in Rust"
date: 2021-09-29 15:11:50
image: '/assets/img/rust/exa.jpg'
description: 'Friendlier, simpler and faster.'
featured-img: ../rust/exa.jpg
tags:
- rust
- commands
---

![Exa - An alternative to ls written in Rust](/assets/img/rust/exa.jpg)

**exa** is a modern replacement for the ls file listing command-line program that comes with Unix and Linux operating systems, giving it more features and better standards.

It uses colors to distinguish file types and metadata. It knows symbolic links, extended attributes and Git. And it's small, fast, and just a single binary.

By deliberately making some decisions differently, exa tries to be a more feature-rich and friendlier version of ls.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Installation
Exa is available for many distributions and operating systems.

Check the installation method by clicking on your system/distro below:

<script>
  function change_code(num){
    const com = ["emerge sys-apps/exa", "apt install exa", "dnf install exa", "pacman -S exa",
                "xbps-install -S exa", "zypper install exa", "cargo install exa"]
    const btn = ["primary", "secondary", "danger", "info", "dark", "warning", "link"]
    //document.getElementsByClassName("language-bash").innerHTML = com[num]
    document.getElementById("code").innerHTML = "sudo " + com[num]
    //alert( com[num] )
    for( var i = 0; i <= 6; i++ ){
      if( i == num ){
        //document.getElementById("cc-" + i).style.color = "#000"
        var element = document.getElementById("cc-" + i);
        element.classList.remove("btn-" + btn[i]);
        element.classList.add("btn-outline-" + btn[i]);
      }else{
        //document.getElementById("cc-" + i).style.color = "#fff"
        var element = document.getElementById("cc-" + i);
        element.classList.remove("btn-outline-" + btn[i]);
        element.classList.add("btn-" + btn[i]);
      }
    }
  }
</script>


<p>
  <button class="btn btn-outline-primary btn-sm" id="cc-0" onclick="change_code(0)">Gentoo</button>
  <button class="btn btn-secondary btn-sm" id="cc-1" onclick="change_code(1)">Debian/Ubuntu/Mint</button>
  <button class="btn btn-danger btn-sm" id="cc-2" onclick="change_code(2)">Fedora/Red Hat</button>
  <button class="btn btn-info btn-sm" id="cc-3" onclick="change_code(3)">Arch/Manjaro</button>
  <button class="btn btn-dark btn-sm" id="cc-4" onclick="change_code(4)">Void Linux</button>
  <button class="btn btn-warning btn-sm" id="cc-5" onclick="change_code(5)">OpenSUSE</button>
  <button class="btn btn-link btn-sm" id="cc-6" onclick="change_code(6)">Outro Sistema/Distro</button>
</p>

<pre><code id="code">emerge sys-apps/exa</code></pre>


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
Once installed, just run the exa command to list the files. Among the argument options are:

+ `-1`, `--oneline`: display one entry per line
+ `-G`, `--grid`: display entries as a grid (default)
+ `-l`, `--long`: display extended details and attributes
+ `-R`, `--recurse`: redirect to directories
+ `-T`, `--tree`: return to directories as a tree
+ `-x`, `--across`: sort the grid across instead of down
+ `-F`, `--classify`: display type indicator by filenames
+ `--color[u]r`: when using terminal colors
+ `--color[u]r-scale`: highlight file size levels distinctly
+ `--icons`: display icons
+ `--no-icons`: do not display icons (always replace --icons)

And among many other options that can be found on the official website of the ex:
## <https://the.exa.website/>


    
