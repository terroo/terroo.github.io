---
layout: post
title: "How to Run Crow C++ with Apache"
date: 2025-08-01 23:05:54
image: '/assets/img/web/crow-apache.jpg'
description: "🐦‍⬛ Step-by-step guide for Arch and Ubuntu, plus a tip for Windows."
tags:
- webdev
- cpp
- web
- crow
- apache
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

## 📦 Dependencies  
First, of course, you need to have [Crow C++](https://youtu.be/5gyQ5MLhVIs) installed on your system. To do this, install the dependencies:  

### On [Windows](https://terminalroot.com/tags#windows)  
See here: [How to Install Crow C++ on Windows](https://terminalroot.com/how-to-install-crow-cpp-on-windows/). It’s more interesting to run it without Apache, using Crow’s built-in server by running the binary directly!  

### On Ubuntu:  
{% highlight bash %}
sudo apt install git build-essential cmake make libasio-dev g++
{% endhighlight %}

### On Arch:  
{% highlight bash %}
sudo pacman -S git base-devel cmake asio
{% endhighlight %}

Now clone, compile, and install Crow C++:  

{% highlight bash %}
git clone https://github.com/CrowCpp/Crow
cd Crow
cmake . -B build -DCROW_BUILD_EXAMPLES=OFF -DCROW_BUILD_TESTS=OFF
sudo cmake --install build
{% endhighlight %}

> If you want, you can now remove the cloned repository: `cd .. && rm -rf CrowCpp`  


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

## ⚙️ Running with Apache  
Make sure you have Apache installed with the correct read and write permissions.  

+ On Ubuntu:  
{% highlight bash %}
sudo apt install apache2
sudo chown -R $USER:$USER /var/www/html/
{% endhighlight %}

+ On Arch:  
{% highlight bash %}
sudo pacman -S apache
sudo chown -R $USER:$USER /srv/http
{% endhighlight %}

#### 01. Create a folder in your Apache root directory and enter it, for example:  
{% highlight bash %}
# Ubuntu  
mkdir -p /var/www/html/crow  
cd /var/www/html/crow  

# Arch  
mkdir -p /srv/http/crow  
cd /srv/http/crow  
{% endhighlight %}

#### 02. Create a simple example code for testing:  
> `main.cpp`  

{% highlight cpp %}
#include <crow.h> // On Windows, use double quotes  

int main(){  
    crow::SimpleApp app;  

    CROW_ROUTE(app, "/")([](){  
        return "Hello world";  
    });  

    app.port(18080).multithreaded().run();  
}  
{% endhighlight %}

Compile: `g++ main.cpp -o app` and test: `./app`. Then access it in your browser at: <http://localhost:18080>.  

---

## 🏃 Running Directly with Apache Without Manually Running the Binary  
Use similar paths and commands on Arch.  

#### 01. Create a `systemd` file:  
> `sudo vim /etc/systemd/system/crow-app.service` (or use your preferred editor).  

Paste this inside:  
> On Arch, replace all instances of `/var/www/html` with `/srv/http`, and instead of `www-data`, use just `http` for both `User` and `Group`.  

{% highlight ini %}
[Unit]  
Description=Crow C++ Web Application  
After=network.target  

[Service]  
Type=simple  
User=www-data  
Group=www-data  
WorkingDirectory=/var/www/html/crow  
ExecStart=/var/www/html/crow/app  
Restart=always  
RestartSec=10  

[Install]  
WantedBy=multi-user.target  
{% endhighlight %}
> Save and exit.  

#### 02. Enable and start the service:  
{% highlight bash %}
sudo systemctl daemon-reload  
sudo systemctl enable crow-app  
sudo systemctl start crow-app  
sudo systemctl status crow-app  # to check if it's running  
{% endhighlight %}

You should see something like this:  

![Crow Apache](/assets/img/web/img-crow-apache.png)  

#### 03. Configure Apache as a Reverse Proxy  

Enable the necessary modules:  

+ On Ubuntu:  
{% highlight bash %}
sudo a2enmod proxy  
sudo a2enmod proxy_http  
sudo a2enmod proxy_balancer  
sudo a2enmod lbmethod_byrequests  
{% endhighlight %}

+ On Arch:  
Edit the file: `sudo vim /etc/httpd/conf/httpd.conf` and uncomment (or add, if missing) the following lines:  
{% highlight bash %}
LoadModule proxy_module modules/mod_proxy.so  
LoadModule proxy_http_module modules/mod_proxy_http.so  
LoadModule proxy_balancer_module modules/mod_proxy_balancer.so  
LoadModule lbmethod_byrequests_module modules/mod_lbmethod_byrequests.so  
LoadModule rewrite_module modules/mod_rewrite.so  
{% endhighlight %}

Also, find (or add) the following line:  
> If it's commented out (with a `#`), remove the `#` to uncomment it.  

{% highlight bash %}
Include conf/extra/httpd-vhosts.conf  
{% endhighlight %}

#### 04. Add this configuration to your Apache VirtualHost  
+ Ubuntu: `sudo vim /etc/apache2/sites-available/000-default.conf`  
+ Arch: `sudo vim /etc/httpd/conf/extra/httpd-vhosts.conf`  

Delete everything inside and paste this:  
> On Arch, change `/var/www/html` to `/srv/http` and replace `${APACHE_LOG_DIR}` with `/var/log/httpd`.  

{% highlight toml %}
<VirtualHost *:80>  
    ServerAdmin webmaster@localhost  
    DocumentRoot /var/www/html  

    # Simple reverse proxy that removes the prefix  
    ProxyRequests Off  
    ProxyPreserveHost On  

    # Proxy for port 18080  
    ProxyPass /crow/ http://127.0.0.1:18080/  
    ProxyPassReverse /crow/ http://127.0.0.1:18080/  

    # Rewrite URLs to remove the /crow/ prefix  
    RewriteEngine On  
    RewriteRule ^/crow/(.*)$ http://127.0.0.1:18080/$1 [P,L]  
    RewriteRule ^/crow/?$ http://127.0.0.1:18080/ [P,L]  

    ErrorLog ${APACHE_LOG_DIR}/error.log  
    CustomLog ${APACHE_LOG_DIR}/access.log combined  
</VirtualHost>  
{% endhighlight %}

Enable *rewrite* mode, restart Apache, and test by accessing the URL:  
> On Arch, just restart with: `sudo systemctl restart httpd`.  

{% highlight bash %}
sudo pkill -f app  # Optional if you haven't modified the binary  
sudo a2enmod rewrite  
sudo systemctl restart apache2  
xdg-open http://localhost/crow/  
{% endhighlight %}

Done! Now you can [develop your applications with Crow](https://youtu.be/5gyQ5MLhVIs)!  

Remember that whenever you modify the binary, you need to restart it using `pkill`:  
{% highlight bash %}
sudo pkill -f app  
{% endhighlight %}

On Arch, prefer using these two commands instead:  
{% highlight bash %}
sudo systemctl daemon-reexec  # or daemon-reload if you didn’t modify the systemd binary  
sudo systemctl enable --now crow-app.service  
{% endhighlight %}
> To check the status: `sudo systemctl status crow-app.service`  

