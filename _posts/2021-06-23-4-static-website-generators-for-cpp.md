---
layout: post
title: "4 Static Website Generators for C++"
date: 2021-06-23 17:12:00
image: '/assets/img/web/static-website-cpp.jpg'
description: 'Order of which I believe has more resources.'
featured-img: ../web/static-website-cpp.jpg
tags:
- cpp
- cppdaily
---

![4 Static Website Generators for C++](/assets/img/web/static-website-cpp.jpg)

Creating static websites is one of the most modern technologies for both documentation purposes such as creating a blog, website or even a portal. I particularly use [Jekyll](https://en.terminalroot.com.br/how-to-properly-install-ruby-bundler-and-jekyll-on-ubuntu-linux/) which is made with [Ruby on Rails](https://en.terminalroot.com.br/how-to-properly-install-ruby-bundler-and-jekyll-on-ubuntu-linux/), but some people asked me if there are options made with [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/) , so I decided to create this mini list for today's *cpp::daily*.

So let's look at 4 options in the order I believe to be the most complete. If you want to know about web framework made with C++ I suggest you to watch [this video](https://en.terminalroot.com.br/drogon-cpp-the-fastest-web-framework-in-the-world/).

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# 1º [Nift](https://nift.dev/)
![Nift](/assets/img/web/nift.jpg)

Nift or nsm, short for nifty site manager, is a cross-platform [git](https://en.terminalroot.com.br/how-to-clone-only-a-subdirectory-with-git-or-svn/) and [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-like site manager written in C++ . You can create any website you like (static and not static/dynamic) using Nift, although you need some kind of web server, like Apache, NGINX, etc. to host non-static/dynamic websites, while static websites can be easily hosted on platforms like BitBucket, [GitHub](https://en.terminalroot.com.br/top-5-best-git-clients-for-linux-mac-and-windows/), [GitLab](https://gitlab.com/terminalroot) and Netlify.

+ Official website: <https://nift.dev/>
+ GitHub: <https://github.com/nifty-site-manager/nsm>

---

# 2º [sudo_site](https://github.com/sharadcodes/sudo_site)
![sudo_site](/assets/img/web/sudo_site.jpg)

**sudo_site** is the simplest and lightest static site generator out there, with no dependencies and with all the libraries already provided with the repository, you don't need to install any other dependencies.

With approximately 120 lines of code, it becomes the smallest static website generator capable of generating multiple pages and blogs.

The repository also has a GitHub actions configuration file with the help of which you can automate the build process in github itself. He can upload to any repository he likes, just add a *PERSONAL ACCESS TOKEN* to the secrets with the repo checkbox checked when creating the *TOKEN*.

Documentation is in progress, although you don't need to because it's so simple. After cloning or downloading the repository, just run

{% highlight bash %}
g++ -o sudo_site sudo_site.cpp -lstdc++fs && ./sudo_site
{% endhighlight %}

+ DEMO: <https://sudositedemo.netlify.app/>
+ GitHub: <https://github.com/sharadcodes/sudo_site>


<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# 3º [BlogC++](https://blogcpp.org/)
![BlogC++](/assets/img/web/blogcpp.jpg)

BlogC++ is yet another static blog generator, written in C++17.

Use the libraries:

+ cxxopts
+ inja
+ json
+ TinyXML2
+ ConfigParser
+ dukglue with duktape
+ icu
+ [libcurl](https://en.terminalroot.com.br/12-tips-for-you-to-use-commando-curl-as-a-ninja/) if compiled with the option: `WITH_OEMBED`

The goal is to provide a decent feature set without requiring a lot of configuration.

+ Official website: <https://blogcpp.org/>
+ GitHub: <https://github.com/dertuxmalwieder/blogcpp>

---

# 4º [Bake](http://ctrl-c.club/~philips/90s/)
![Bake](/assets/img/web/bake.jpg)

Bake is a tool to generate blogs as if you were using make. Create a template, bakefile and your markdown posts and you're ready to go!

+ Website: <http://ctrl-c.club/~philips/90s/>
+ GitHub: <https://github.com/felipetavares/bake>


