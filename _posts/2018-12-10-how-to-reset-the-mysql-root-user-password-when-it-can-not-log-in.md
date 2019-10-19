---
layout: post
title: "How to reset the MySQL root user password when it can not log in"
date: 2018-12-10 22:05:31
image: '/assets/img/mysql/mysql-root.png'
description: 'How to reset the MySQL root user password when it can not log in'
featured-img: ../mysql/mysql-root.png
tags:
- mysql
---

When you forgot the mysql root password and can not log in to change the password.
> Use sudo or root

+ You must first stop the mysql server
{% highlight bash  %}
systemctl stop mysqld.service # systemd
rc-update stop mysqld.service # openrc
{% endhighlight  %}

+ Then you need to start the server in safe mode
> While running, DO NOT press control- {c, d, z}
{% highlight bash  %}
mysqld_safe --skip-grant-tables
{% endhighlight  %}


+ Now, open a new tab in the terminal, or a new terminal and enter MySQL
{% highlight bash  %}
mysql -u root
{% endhighlight  %}

+ And then change the MySQL root password
{% highlight bash  %}
mysql> UPDATE mysql.user SET Password=PASSWORD('password') WHERE User='root';
{% endhighlight  %}

+ Okay, now just restart the MySQL server and login with the new password you used.
> After giving Ctrl + Z on the previous tab and kill the process, or simple exit and close the corresponding terminal or tab.
{% highlight bash  %}
systemctl start mysqld.service # systemd
rc-update start mysqld.service # openrc
# Now login, normal user or root user
mysql -u root -p
{% endhighlight  %}

# Enjoy!
