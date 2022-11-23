---
layout: post
title: "Create your own social network easily"
date: 2022-11-23 08:47:09
image: '/assets/img/php/humhub-en.png'
description: 'Use a CMS that makes everything easy for you!'
tags:
- php
- mysql
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**HumHub** is a free and open-source social network software written on top of the Yii [PHP](https://terminalroot.com/tags#php) framework that provides an easy to use toolkit for creating and launching your own social network.

The platform can be used for internal communication and collaboration that can range from a few users up to huge Intranets that serve companies with hundreds and thousands of employees. The platform was meant to be self-hosted and currently comes with pretty normal requirements, working with most shared hosting environments around. HumHub also supports themes and modules to extend the functionality for almost all requirements.

HumHub was originally developed by zeros+ones, a web agency from Munich and was spun off as an independent company in early 2015.

---

# Instalation

First of all, you will need PHP and MySQL installed and pre-configured, in addition to packages used by HumHub, example installation on Debian:

Install and configure the MariaDB Server using Debian packages:
{% highlight bash %}
apt update
apt install mariadb-server mariadb-client automysqlbackup
mysql_secure_installation
{% endhighlight %}

Set the following parameters inside the PHP configuration file `php.ini` to at least following values:
> Example path to `php.ini`: `/etc/php/8.1/apache2/php.ini`.
Change the lines in the file to values equal to or greater than the following:
{% highlight bash %}
upload_max_filesize = 32M
post_max_size = 32M
max_execution_time = 120
{% endhighlight %}

For PHP:
{% highlight bash %}
apt update
apt install php php-cli \
    php-imagick php-curl php-bz2 php-gd php-intl php-mbstring \
    php-mysql php-zip php-apcu-bc php-apcu php-xml php-ldap
{% endhighlight %}

Create a user for your social network, a database, a password and give necessary privileges for administration:
{% highlight bash %}
mysql> CREATE USER 'humhub_prod' IDENTIFIED BY 'change-me';
mysql> CREATE DATABASE `humhub_prod_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
mysql> GRANT ALL ON `humhub_prod_db`.* TO `humhub_prod`@localhost IDENTIFIED BY 'change-me';
mysql> FLUSH PRIVILEGES;
{% endhighlight %}

Make the web server user the owner of the directory:
{% highlight bash %}
chown -R www-data:www-data /var/www/humhub
{% endhighlight %}
> The name and group on your system can be different, in the case of Apache it can also be user and group: `apache`.

To install, just download, unzip and move renaming to the directory of your web server.
{% highlight bash %}
cd /tmp
wget https://www.humhub.com/download/package/humhub-<version>.tar.gz
tar xvfz humhub-<version>.tar.gz
mv /tmp/humhub-<version> /var/www/humhub
{% endhighlight %}
> Change the <version> to the corresponding version, example: `1.10.3`

Now access the address: `http://localhost/humhub` and proceed with the installation that is similar to Wordpress

{% highlight bash %}
gio open http://localhost/humhub
{% endhighlight %}

There are several other optional settings, such as:
+ SSL
+ Email server
+ Settings for either Apache or NGINX, depending on your server
+ `.htaccess`
+ And several others!

I recommend you access the links below for more information:
+ <https://www.humhub.com/en>
+ <https://docs.humhub.org/>
+ <https://docs.humhub.org/docs/about/humhub>
+ <https://docs.humhub.org/docs/admin/installation>
+ <https://docs.humhub.org/docs/admin/server-setup/>

If you want to see a video showing the procedure mentioned in this video, watch the video below:
> Remembering that the video is in Portuguese and the example was made in [Gentoo](https://terminalroot.com/tags#gentoo), but you can enable subtitles and use automatic translation from Youtube. However, commands and procedures are universal!

<iframe width="1253" height="705" src="https://www.youtube.com/embed/5ISZhc5nuuc?t=130" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



