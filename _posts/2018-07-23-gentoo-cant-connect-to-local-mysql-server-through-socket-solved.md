---
layout: post
title: "Gentoo - Can't connect to local MySQL server through socket"
date: 2018-07-23 00:56:34
image: '/assets/img/tips/gentoo-mysql.gif'
description: 'How to solved this is problem.'
featured-img: ../tips/gentoo-mysql.gif
tags:
- mysql
---

![Gentoo - Can't connect to local MySQL server through socket](/assets/img/tips/gentoo-mysql.gif "Gentoo - Can't connect to local MySQL server through socket")

When you get the error:

{% highlight bash %}
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)
{% endhighlight %}

It can be for several reasons, one of them is also the post installation.

To resolve follow these steps:

- 1st - Find out which version of MySQL you have

{% highlight bash %}
mysql --version
{% endhighlight %}

- 2nd - Then run the command

> Where __X.X.XX__ is the version of your MySQL

{% highlight bash %}
emerge --config =dev-db/mysql-X.X.XX
{% endhighlight %}

The output will be something like:

{% highlight bash %}


Configuring pkg...

 * Trying to get password for mysql 'root' user from 'mysql' section ...
 * Trying to get password for mysql 'root' user from 'client' section ...
 * Please provide a password for the mysql 'root' user now
 * or through the /root/.my.cnf file.
 * Avoid ["'\_%] characters in the password
  ...
  
 * Done


{% endhighlight %}


After that, you will need to restart your MySQL server (example for systemd, if you have OpenRC use the `rc-update` command)

{% highlight bash %}
systemctl restart mysqld.service
{% endhighlight %}

- 3rd - And then run the command below with root

> The password you should enter (if you have not yet created a root password for MySQL) is your system root user's password

{% highlight bash %}
mysql -u root -p -h localhost
{% endhighlight %}


So you'll probably be able to log in to MySQL.

{% highlight bash %}
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 2
Server version: 5.6.40-log Source distribution

Copyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
{% endhighlight %}

If you want the normal user to log in as __root__, run the command below:

{% highlight bash %}
mysql_secure_installation
{% endhighlight %}

## Okay, solved, enjoy MySQL !!!

via: <https://wiki.gentoo.org/wiki/MySQL> and <https://wiki.gentoo.org/wiki/MySQL/Startup_Guide>

recommended reading: <https://wiki.gentoo.org/wiki/MySQL/Migrate_to_5.0>
