---
layout: post
title: "How to Enable Apache Web Server for C++ on Windows"
date: 2023-10-26 11:22:25
image: '/assets/img/windows/apache-windows-cpp.png'
description: 'Simple and easy!'
tags:
- windows
- cpp
- apache
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In this article we will see how to install [Apache](https://terminalroot.com/tags#apache) from scratch and prepare your environment on [Windows](https://terminalroot.com/tags#windows) for [development web](https://terminalroot.com/tags#web) with [Apache](https://terminalroot.com/tags#apache) and [C++](https://terminalroot.com/tags#cpp).

Let's go step by step!

---

# 01. Install Apache
### 1. Visit: <https://www.apachelounge.com/>.
### 2. Click [Downloads](https://www.apachelounge.com/download/) on the left corner
Download the file: [Apache 2.4.57 Win64 | [Apache VS17 Win64 Binary] httpd-2.4.57-win64-VS17.zip](https://www.apachelounge.com/download/VS17/binaries/httpd-2.4.57-win64-VS17.zip)

<img src="/assets/img/windows/apache-download.jpg" loading="lazy" alt="{{ page.title }}">

### 3. Unzip the file: *Extract to httpd-2.4.57-win64-VS17*
### 4. Move the unzipped folder to the root of the `:C\` drive
### 5. Open CMD (Run as Administrator) and enter the folder: `cd C:\Apache24\bin\`
### 6. Run the command: `httpd -k install`
### 7. Now enter the folder: *C:\Apache24\conf* and open the file: `httpd.conf` with Notepad
### 8. I renamed the line that has:
**#ServerName www.example.com:80** to **ServerName localhost** (remember to remove the junk (#) from the beginning of the line), save!

> FROM:
<img src="/assets/img/windows/example-httpd-conf.jpg" loading="lazy" alt="{{ page.title }}">

> TO:
<img src="/assets/img/windows/servername-localhost.jpg" loading="lazy" alt="{{ page.title }}">

### 9. Now in CMD, restart Apache by running the command: `httpd -k stop` and then `httpd -k start`

<img src="/assets/img/windows/httpd-k-stop-start.jpg" loading="lazy" alt="{{ page.title }}">

### 10. Now open the browser and access: <http://localhost/>
If the phrase: **It works!** appears, everything is ok, if not, repeat all the steps, because this procedure should work!

---

# 02. Run C++ on the Web
### 1. Enter the folder: `cd C:\Apache24\cgi-bin` and create a file named `main.cpp` and insert this content inside:
{% highlight cpp %}
#include <iostream>

int main(int argc, char **argv){
   std::cout << "Content-Type: text/html\n\n";
   std::cout << "<h1>C++ running on the Web on Windows via Apache</h1>" << '\n';
   return 0;
}
{% endhighlight %}

### 2. Compile the code (it's a good idea to use [MinGW](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/) ) and save the binary ( can be named `index.html`) within the same folder:
{% highlight bash %}
g++ main.cpp -o index.html
{% endhighlight %}

### 3. Access the address: <http://localhost/cgi-bin/>, it is important to put the slash (`/`) at the end.
### 4. If you want Apache to automatically render `index.cpp`, edit the file: `C:\Apache24\conf\httpd.conf`, look for the line: `DirectoryIndex index.html` and add `index. cpp` at the end, looking like this:
{% highlight bash %}
<IfModule dir_module>
DirectoryIndex index.html index.cpp
</IfModule>
{% endhighlight %}

Now just compile to binary: `index.cpp` (remove `index.html`) RESTART Apache and access: <http://localhost/cgi-bin/>.

---

# See the video
> The video below is in Portuguese, but you can watch the procedure if you have any difficulties.

<iframe width="1100" height="490" src="https://www.youtube.com/embed/74sAQigSiDM" title="How to Enable Apache Web Server for C++ on Windows" frameborder="0" allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

### For more information visit: <https://httpd.apache.org/docs/2.4/howto/cgi.html>.

