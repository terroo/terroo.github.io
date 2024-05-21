---
layout: post
title: "How to Redirect Laravel in Apache WITHOUT CHANGING URL"
date: 2024-05-21 10:01:44
image: '/assets/img/laravel/laravel-apache-redirect.jpg'
description: "The URL will not appear 'yoursite.com/yourprojeto/public' but only: 'yoursite.com'"
tags:
- laravel
- apache
- webdevelopment
- php
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[Laravel](https://terminalroot.com/tags#laravel) has been frequently used by web developers and many are deploying it on hosting servers with common plans where there is only [Apache](https://terminalroot.com/tags#apache) available in a simple way.

Many times you are making a development version and do not want to remove the files from the root of your project and replace them with the *beta* version, among many other reasons.

In this article we will see how to use Laravel in Apache as well as how to use it, if you want, in the root of your project even though it is in a subfolder on the server.

So, to access Laravel in your browser, you can use the command:
{% highlight bash %}
php artisan serve
{% endhighlight %}
> Within a Laravel project.

To access directly from Apache, follow the steps below

---

# Accessing Laravel on Apache
First, let's see how to access Laravel on Apache without needing: ~`php artisan serve`~.

### 1. Move your Laravel project to your server:
{% highlight bash %}
mv myproject /var/www/html
{% endhighlight %}
> Or also, depending on your system: `mv meuprojeto /var/www/localhost/htdocs`, or any other case.

### 2. Create a configuration file for port 80
{% highlight bash %}
sudo vim /etc/apache2/sites-available/laravel.conf
{% endhighlight %}
> Some systems may have a different path, in my case (Gentoo) it is: `sudo vim /etc/apache2/vhosts.d/laravel.conf`.

And insert the content below:
{% highlight svg %}
<VirtualHost *:80>
     ServerName localhost
     DocumentRoot /var/www/localhost/htdocs/meuprojeto/public

     <Directory /var/www/localhost/htdocs/meuprojeto/public>
         Options Indexes FollowSymLinks
         AllowOverride All
         Require all granted
     </Directory>

     ErrorLog /var/log/apache2/laravel_error.log
     CustomLog /var/log/apache2/laravel_access.log combined
</VirtualHost>
{% endhighlight %}

### 3. Assign *all* possible permissions to access and edit files
{% highlight bash %}
sudo chown -R apache:apache /var/www/html/myproject
sudo chown -R apache:apache /var/log/apache2
sudo chmod -R 775 /var/www/html/myproject/storage/
sudo chmod -R 775 /var/www/html/myproject/bootstrap/cache/
sudo usermod -a -G apache $USER
sudo find /var/www/html/myproject -type f -exec chmod 664 {} \;
sudo find /var/www/html/myproject -type f -exec chmod 775 {} \;
sudo chmod -R gu+w /var/www/html/myproject
{% endhighlight %}

### 4. Restart Apache and access it in the browser
{% highlight bash %}
# In some cases where there is the a2enmod command, also run:
sudo a2enmod rewrite
sudo systemctl restart apache2
{% endhighlight %}
> Use the way to restart Apache according to your system. On mine it is: `sudo rc-service apache restart`.

Now, access the address corresponding to your project in the browser, but for the `public` folder:
#### <http://localhost/myproject/public>

And note that your project is already running directly on Apache!

---

# Redirection BY CHANGING the URL
You may still want to access the project, but identify in the URL that it was redirected.

For this case, create a file named: `.htaccess` in the root of your server, example:
{% highlight bash %}
vim /var/www/html/.htaccess
{% endhighlight %}

And paste the content below, replace the name `myproject` with the name of your project:
{% highlight svg %}
RewriteEngine On

# Redirect http://localhost to http://localhost/myproject/public/
RewriteCond %{HTTP_HOST} ^(localhost)$ [NC]
RewriteCond %{REQUEST_URI} ^/$
RewriteRule ^(.*)$ /myproject/public/$1 [L,R=301]
{% endhighlight %}

There are cases where you may need to restart Apache once again and other cases until you clear your browser's cache:
{% highlight bash %}
sudo systemctl restart apache2

# For example clear Google Chrome cache on Ubuntu
rm -rf ~/.cache/google-chrome
{% endhighlight %}

Now test by accessing: <http://localhost> and you will be redirected to <http://localhost/meuprojeto/public>

---

# Redirection WITHOUT CHANGING the URL
> Perhaps this is the most interesting part of this article, that is, something you won't find in the Laravel documentation! 😃

If you want to access the project, redirect to `myproject/public`, but without changing the URL, replace the content of `.htaccess` with this content:
> Change `myproject` to the name of your project. `vim /var/www/html/.htaccess`

{% highlight svg %}
RewriteEngine On

# Internally rewrite http://localhost to http://localhost/myproject/public/
RewriteCond %{HTTP_HOST} ^localhost$ [NC,OR]
RewriteCond %{HTTP_HOST} ^localhost$
RewriteCond %{REQUEST_URI} !myproject/public/
RewriteRule (.*) /myproject/public/$1 [L]
{% endhighlight %}

----

I hope I helped, if in your case you have any problems, review the steps.

And don't forget to share this article!
