---
layout: post
title: "How to Enable C++ in Apache on Gentoo"
date: 2023-09-14 11:09:09
image: '/assets/img/web/apache-cpp.jpg'
description: 'Without using framework! CGI for the Web is the foundation of how everything works in real life.'
tags:
- web
- cpp
- apache
- Web development
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

CGI for the Web is the basis of how everything works in real life. You can enable support for [C++](https://terminalroot.com/tags#cpp) on any operating system.

In [Gentoo](https://terminalroot.com/gentoo) it's the same process but with different paths and addition tools, let's see how to do it!

---

# Enabling Apache to interpret binaries created by [C++](https://terminalroot.com/tags#cpp)
First of all. Of course, you need Apache installed:
{% highlight bash %}
emerge apache
{%endhighlight%}

Currently, by default, Apache on Gentoo already has support for CGI, so there is no need to add *flags* to `make.conf`(~*APACHE2_MODULES="cgi"*~). So, just edit the following files:

## 01. Uncomment the CGI line
Another thing that also works as standard is the line `LoadModule cgi_module modules/mod_cgi.so` in the file: `/etc/apache2/httpd.conf`, that is, you don't need to do anything, but it's always a good idea to *check* to see if it really is uncommented.

However, open the file:
{% highlight bash %}
sudo vim /etc/apache2/modules.d/00_mod_mime.conf
{%endhighlight%}

And uncomment the line: `AddHandler cgi-script`. It will be like this:
{% highlight bash %}
#AddHandler cgi-script .cgi
{%endhighlight%}

Leave it like this:
{% highlight bash %}
AddHandler cgi-script .cgi
{%endhighlight%}

If you want Apache to also run URLs with the `.cpp` extension (by default it only reads `.html` and for those who have [PHP](https://terminalroot.com/php) installed, it also reads `.php `), add it to the end of the line, like this:
{% highlight bash %}
AddHandler cgi-script .cgi .cpp
{%endhighlight%}
> You can even add more extensions there, if you are interested, e.g.: `.cc`, `.c`, `.hpp`, `.h`, ...

---

## 02. Enable CGI support for Apache
Open the file:
{% highlight bash %}
sudo vim /etc/conf.d/apache2
{%endhighlight%}

Look for the line that has the variable `APACHE2_OPTS` and it looks something like this:
{% highlight bash %}
APACHE2_OPTS="-D DEFAULT_VHOST -D INFO -D SSL -D SSL_DEFAULT_VHOST"
{%endhighlight%}

Add support for CGI by inserting `-D CGI` at the end:
{% highlight bash %}
APACHE2_OPTS="-D DEFAULT_VHOST -D INFO -D SSL -D SSL_DEFAULT_VHOST -D CGI"
{%endhighlight%}

If you want, also add `-D CPP` to the end, just like you do when installing PHP (`-D PHP`), leaving it like this:
{% highlight bash %}
APACHE2_OPTS="-D DEFAULT_VHOST -D INFO -D SSL -D SSL_DEFAULT_VHOST -D CGI -D CPP"
{%endhighlight%}
> In the case of PHP this is mandatory, but for C++ this part is optional!

---

## 03. Restart the Apache server
Use your bootloader to *restart* Apache. In my case I use [OpenRC](https://wiki.gentoo.org/wiki/OpenRC):
{% highlight bash %}
sudo rc-service apache2 restart
{%endhighlight%}
> If you use [SystemD](https://wiki.gentoo.org/wiki/Systemd) use the corresponding command to restart Apache!

---

## 04. Change permissions and create the default directory for C++ codes
First of all, it is interesting to allow creating and reading CGI files, to do this assign the following permissions:
{% highlight bash %}
sudo chown -R $USER:$USER /var/www/localhost
{%endhighlight%}

Now create the `cgi-bin` directory:
> Remembering that Gentoo separates `localhost/htdocs`, that is, the public files are in `htdocs` and the *backend* files are in `localhost/cgi-bin`.

Generally, Apache itself creates this directory, if it already exists, it is also recommended to change the owner of this directory so you can create and edit files without needing to use `sudo` or `root`, but if it doesn't exist, create the directory:
{% highlight bash %}
cd /var/www/localhost
mkdir cgi-bin
{%endhighlight%}
> If it already exists, don't forget to become its owner: `sudo chown -R $USER:$USER /var/www/localhost/cgi-bin`.

On APT-based systems (Debian, Ubuntu, Mint,...) this directory is in `/usr/lib/cgi-bin`.

---

## 05. Testing C++ on the Web
Now let's create a file inside the `localhost/cgi-bin` directory:
{% highlight bash %}
cd /var/www/localhost/cgi-bin
vim main.cpp
{%endhighlight%}

And use the following example code:
> Pay attention to the two `/n/n` in `Content-Type`, they are essential to avoid the Apache code interpretation error: `Internal Server Error`.

{% highlight cpp %}
#include <iostream>

int main(int argc, char **argv){
   std::cout << "Content-Type: text/html\n\n";
   std::cout << "<h1>C++ runs great on the Web!</h1>" << '\n';
   return 0;
}
{%endhighlight%}

Compile normally:
{% highlight bash %}
g++ main.cpp -o index.html
{%endhighlight%}
> If you have enabled `AddHandler` for `.cpp` too, you can save it as `index.cpp` or even without an extension!

Now just access the understanding: <http://localhost/cgi-bin/> or <http://localhost/cgi-bin/index.cpp> (if you enabled it and saved it as `index.cpp`)

![C++ running on Apache Web Server](/assets/img/web/cpp-apache-web.png)

If you want Apache to interpret `index.cpp` without having to indicate the file in the URL, edit the file: `/etc/apache2/modules.d/00_default_settings.conf`:
{% highlight bash %}
sudo vim /etc/apache2/modules.d/00_default_settings.conf
{%endhighlight%}

Look for the line that has the content:
{% highlight bash %}
<IfModule dir_module>
DirectoryIndex index.html index.html.var
</IfModule>
{%endhighlight%}

And add `index.cpp` right after `index.html.var` leaving it like this:
{% highlight bash %}
<IfModule dir_module>
DirectoryIndex index.html index.html.var index.cpp
</IfModule>
{%endhighlight%}

And restart the server:
{% highlight bash %}
sudo rc-service apache2 restart
{%endhighlight%}

---

It is possible to do absolutely everything: *GET*, *POST*, *Authentication*, *Sessions*, *Database*, *Tokens*, *Cookies*,... with C++ in Apache, in fact, many famous sites that you access using C++ on the Web!

---

# Watch a video with [C++](https://terminalroot.com/tags#cpp), Vue.js 3 and TailwindCSS running on Apache
> The video is in Portuguese, but you can follow the code regardless of your language!
## <https://youtu.be/kTySQQT7_Sg>

---

For more information visit the links:
+ <https://wiki.gentoo.org/wiki/Apache>
+ <https://stdcxx.apache.org/>
+ <https://forums.gentoo.org/viewtopic-t-852840-start-0.html>
+ <https://forums.gentoo.org/viewtopic-t-955922-start-0.html>

