---
layout: post
title: "How to Install MariaDB/MySQL on Ubuntu 22.10"
date: 2023-03-06 10:39:01
image: /assets/img/mariadb/mariadb-mysql.jpg'
description: 'Several software constantly update their ways of configuring due to security reasons and among others.'
tags:
- mariadb
- mysql
- ubuntu
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

Here at [blog](https://terminalroot.com/) there is a lot of content about [MySQL/MariaDB](https://terminalroot.com/tags#mysql).

As several software constantly update their ways of configuring due to security reasons and others, today we will see how to install MariaDB/MySQL on [Ubuntu](https://terminalroot.com/tags#ubuntu) 22.10 that will most likely serve for newer and even older versions.

---

## 1. Update your system
{% highlight bash %}
sudo apt update
{% endhighlight %}

## 2. Install the packages
{% highlight bash %}
sudo apt install mariadb-server mariadb-client
{% endhighlight %}

## 3. Now configure the access password:
{% highlight bash %}
sudo mysql_secure_installation
{% endhighlight %}

It will start this prompt with some questions and ask you to create a password, use a password with 11 characters including uppercase and lowercase and a different character, example password: `PasswordAny@` , and for all questions of *[Yes/No] → [Y/N]* , check Y for all:

{% highlight bash %}
NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

In order to log into MariaDB to secure it, we'll need the current
password for the root user. If you've just installed MariaDB, and
haven't set the root password yet, you should just press enter here.

Enter current password for root (enter for none): 
OK, successfully used password, moving on...

Setting the root password or using the unix_socket ensures that nobody
can log into the MariaDB root user without the proper authorisation.

You already have your root account protected, so you can safely answer 'n'.

Switch to unix_socket authentication [Y/n] y
Enabled successfully!
Reloading privilege tables..
 ... Success!


You already have your root account protected, so you can safely answer 'n'.

Change the root password? [Y/n] y
New password: 
Re-enter new password: 
Password updated successfully!
Reloading privilege tables..
 ... Success!


By default, a MariaDB installation has an anonymous user, allowing anyone
to log into MariaDB without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] y
 ... Success!

Normally, root should only be allowed to connect from 'localhost'.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] y
 ... Success!

By default, MariaDB comes with a database named 'test' that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] y
 - Dropping test database...
 ... Success!
 - Removing privileges on test database...
 ... Success!

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] y
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
{% endhighlight %}


## 4. Check the database status:
{% highlight bash %}
sudo systemctl status mariadb
{% endhighlight %}

Output example:

{% highlight bash %}
● mariadb.service - MariaDB 10.6.11 database server
     Loaded: loaded (/lib/systemd/system/mariadb.service; enabled; preset: enabled)
     Active: active (running) since Tue 2023-02-07 21:52:51 -03; 6min ago
       Docs: man:mariadbd(8)
             https://mariadb.com/kb/en/library/systemd/
    Process: 15772 ExecStartPre=/usr/bin/install -m 755 -o mysql -g root -d /var/run/mysqld (code=exited, status=0/SUCCESS)
    Process: 15773 ExecStartPre=/bin/sh -c systemctl unset-environment _WSREP_START_POSITION (code=exited, status=0/SUCCESS)
    Process: 15775 ExecStartPre=/bin/sh -c [ ! -e /usr/bin/galera_recovery ] && VAR= ||   VAR=`cd /usr/bin/..; /usr/bin/galera_recovery`; [ $? -eq 0 ]   && systemctl set-en>
    Process: 15818 ExecStartPost=/bin/sh -c systemctl unset-environment _WSREP_START_POSITION (code=exited, status=0/SUCCESS)
    Process: 15820 ExecStartPost=/etc/mysql/debian-start (code=exited, status=0/SUCCESS)
   Main PID: 15805 (mariadbd)
     Status: "Taking your SQL requests now..."
      Tasks: 9 (limit: 4512)
     Memory: 62.0M
        CPU: 730ms
     CGroup: /system.slice/mariadb.service
             └─15805 /usr/sbin/mariadbd

fev 07 21:52:51 notebook mariadbd[15805]: 2023-02-07 21:52:51 0 [Note] InnoDB: Loading buffer pool(s) from /var/lib/mysql/ib_buffer_pool
fev 07 21:52:51 notebook mariadbd[15805]: 2023-02-07 21:52:51 0 [Note] Plugin 'FEEDBACK' is disabled.
fev 07 21:52:51 notebook mariadbd[15805]: 2023-02-07 21:52:51 0 [Warning] You need to use --log-bin to make --expire-logs-days or --binlog-expire-logs-seconds work.
fev 07 21:52:51 notebook mariadbd[15805]: 2023-02-07 21:52:51 0 [Note] Server socket created on IP: '127.0.0.1'.
fev 07 21:52:51 notebook mariadbd[15805]: 2023-02-07 21:52:51 0 [Note] InnoDB: Buffer pool(s) load completed at 230207 21:52:51
fev 07 21:52:51 notebook mariadbd[15805]: 2023-02-07 21:52:51 0 [Note] /usr/sbin/mariadbd: ready for connections.
fev 07 21:52:51 notebook mariadbd[15805]: Version: '10.6.11-MariaDB-0ubuntu0.22.10.1'  socket: '/run/mysqld/mysqld.sock'  port: 3306  Ubuntu 22.10
fev 07 21:52:51 notebook systemd[1]: Started MariaDB 10.6.11 database server.
fev 07 21:52:51 notebook /etc/mysql/debian-start[15822]: Upgrading MySQL tables if necessary.
fev 07 21:52:51 notebook /etc/mysql/debian-start[15837]: Triggering myisam-recover for all MyISAM tables and aria-recover for all Aria tables
{% endhighlight %}

> Press 'q' to exit.

---

## 5. Login to MariaDB/MySQL:

{% highlight bash %}
sudo mysql
{% endhighlight %}

SQL commands to create a root password:

{% highlight sql %}
SHOW DATABASES; --optional
use mysql;
SHOW TABLES; --optional
ALTER USER 'root'@'localhost' IDENTIFIED BY 'PASSWORD_TO_ROOT_USER';
flush privileges;
exit
{% endhighlight %}

Test the same command used to sign in without a password:

{% highlight bash %}
sudo mysql
{% endhighlight %}
> You will get the error: `ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: NO)`.

Now to login is the command:

{% highlight bash %}
mysql -u root -p
#Enter password:PASSWORD_TO_ROOT_USER
{% endhighlight %}

---

# Tip for managing MariaDB/MySQL
You can install [PHPMyAdmin](https://www.phpmyadmin.net/), but it's easier to install and use the one from the link below:
## [Install this SQL Client that has a Modern Interface](https://terminalroot.com/install-this-sql-client-which-has-a-modern-interface/)

---

# Additional tip: Also install SQLite:
{% highlight bash %}
sudo apt install libsqlite3-dev sqlite3
{% endhighlight %}
> Learn more: [How to use SQLite](https://terminalroot.com/tags#sqlite)

---

