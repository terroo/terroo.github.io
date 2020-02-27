---
layout: post
title: "MongoDB Beginner Tutorial"
date: 2020-02-27 00:19:01
image: '/assets/img/mongodb/mongodb.png'
description: 'A free, open source, multiplatform document-oriented database software, written in the C ++ language.'
featured-img: ../mongodb/mongodb.png
tags:
- mongodb
- mysql
- cpp
---

![MongoDB Beginner Tutorial](/assets/img/mongodb/mongodb.png)

[MongoDB](https://www.mongodb.com/) is a free, open source, multiplatform document-oriented database software, written in the [C++ language](https://terminalroot.com.br/cpp).

Classified as a database program [NoSQL](https://en.wikipedia.org/wiki/NoSQL) (generic term that represents non-relational databases, that is, it is not based on the principle that all data are stored in tables).

[MongoDB](https://pt.wikipedia.org/wiki/MongoDB) uses documents similar to [JSON](https://www.json.org/) with schematics.

It is developed by [MongoDB Inc.](https://www.mongodb.com/company) and published under a combination of the [GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.en.html) and [Apache License](https://www.apache.org/licenses/LICENSE-2.0).

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Data model
> As the data is stored in MongoDB (JSON style), so it is a non-relational database (unlike MySQL, Oracle, PostgreSQL, SQLite, ...).

Relational Model:
![Relational Model](/assets/img/mongodb/rdbms.png)

MongoDB Model (NOT Relational):
![NOT Relational JSON](/assets/img/mongodb/model-no-relacional.jpg)

# Terminologies in MongoDB
### Database
The database is a physical container for collections.

### Collection
Collection is a group of MongoDB documents. It is the equivalent of an RDBMS table.

### Document
A document is a set of key-value pairs. The documents have a dynamic layout.

### Comparison with names used in SQL

| RDBMS | MongoDB |
| --- | --- |
| Database | Database |
| Table | Collection |
| Line | Document |
| Column | Field |
| Table join | Embedded documents |
| Primary Key | Primary Key (standard key _id provided by mongodb himself) |
| mysqld/oracle | mongod |
| mysql/sqlplus | Mongo |

### Sample document
The following example shows the structure of a blog document, which is simply a pair of key values ​​separated by commas.
{% highlight js %}
{
   _id: ObjectId(7df78ad8902c)
   title: 'MongoDB overview',
   description: 'MongoDB, a NoSQL database',
   by: 'Marcos Oliveira',
   url: 'https://en.terminalroot.com.br',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100,
   comments: [
      {
         user:'user1',
         message: 'My first comment',
         dateCreated: new Date(2011,1,20,2,15),
         like: 0
      },
      {
         user:'user2',
         message: 'My second comment',
         dateCreated: new Date(2011,1,25,7,45),
         like: 5
      }
   ]
}
{% endhighlight %}

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Advantages of MongoDB
Several large sites, mainly WebCommerces use MongoDB, as it generates a lot of work and server processing when creating a variety of data from a single product.

For example, in a notebook there are several descriptive data: brand, model, series, description, color, ... and that for those who program databases know the "headache" that is to create these relationships in SQL. But with MongoDB this is very simple.

Among several areas such as:
- Big data
- Mobile and social infrastructure
- User data management
- DataHub
They use MongoDB.

# Installation
First of all, you need to have the [XFS file system](https://docs.mongodb.com/manual/administration/production-notes/#kernel-and-file-systems) enabled in [Kernel](https://github.com/torvalds/linux/), as MongoDB uses it together with the [GNU C Library](http://www.gnu.org/software/libc/), better known as [glibc](http://www.gnu.org/software/libc/):
> This will only be necessary if you use Gentoo

{% highlight bash %}
su
cd /usr/src/linux
make menuconfig
{% endhighlight %}

Enable according to these images:

![File System Kernel Linux](/assets/img/mongodb/fs-kernel-linux.jpg)
![XFS Kernel Linux](/assets/img/mongodb/xfs-kernel-linux.jpg)

Then rebuild and restart the computer:
> This will only be necessary if you use Gentoo

{% highlight bash %}
make && make modules_install && make install
grub-mkconfig -o /boot/grub/grub.cfg
reboot
{% endhighlight %}

In [Gentoo](https://gentoo.org/) just run the command (or without `sudo` with the user` root`, `su -c "emerges dev-db/mongodb"`):
> Use `--ask` or just `-a` as a parameter, and if you want not to add to * world * use `--oneshot` or simply `-1`, example: `sudo emerges -a1 dev-db/mongodb `

{% highlight bash %}
sudo emerges dev-db/mongodb
{% endhighlight %}

For other Linux distributions
{% highlight bash %}
sudo apt install mongodb # Debian, Ubuntu, Mint,...
sudo pacman -S mongodb # Arch Linux, Manjaro,...
sudo yum install mongodb # Red Hat, CentOS,...
sudo dnf install mongodb # Fedora
sudo zypper install mongodb # OpenSUSE
# ...
{% endhighlight %}

<!-- RETANGULO LARGO 2 -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="8549252987"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

After installing, you need to create a directory at the root of your system for MongoDB to create the directory for databases:
{% highlight bash %}
sudo mkdir -p /data/db
{% endhighlight %}

Now check if there is already a `mongodb` group created with the command:
{% highlight bash %}
cat /etc/group | cut -d: -f1 | grep mongodb
{% endhighlight %}
If the output is: **mongodb**, then everything is fine, if not, you will need to create this group with the command: `sudo groupadd mongodb`

Now add your user to that group:
> After adding, it will be necessary to log out and log back into the system for the changes to take effect.

{% highlight bash %}
sudo usermod -aG mongodb $USER
{% endhighlight %}

# Settings
The MongoDB configuration file can be found at: `cat /etc/mongodb.conf` and it contains the following information:
> 'Commented' lines (starting with *#* are ignored)

{% highlight bash %}
storage:
    dbPath: "/data/db"

systemLog:
    destination: file
    path: "/var/log/mongodb/mongodb.log"
    quiet: true
    logAppend: true

net:
    port: 27017
    bindIp: 127.0.0.1
{% endhighlight %}

About the settings:
- `dbPath: "/data/db"` - The MongoDB path, if yours is with `/var/lib/mongodb` change to this;
- `path: "/var/log/mongodb/mongodb.log"` - Where the logs are kept;
- `port: 27017` - The default port, that is, you do not need to start MongoDB with the command: `mongo --port 27017` if this line is properly configured and "uncommented".
- `bindIp: 127.0.0.1` - Execution address, that is, the loopback, if you want to change to a specific address, use this line.

<!-- RETANGULO LARGO -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

To avoid permission problems, I recommend that you delete everything that might exist inside the directory: `/var/lib/mongodb`
{% highlight bash %}
sudo rm /var/lib/mongodb/*
{% endhighlight %}

After that, it is necessary to start the daemon, in this case for [OpenRC](https://wiki.gentoo.org/wiki/OpenRC):
> If you use SystemD, see the equivalent command here: <https://wiki.gentoo.org/wiki/OpenRC_to_systemd_Cheatsheet>

{% highlight bash %}
sudo rc-service mongodb start
{% endhighlight %}

If you want MongoDB to start automatically whenever you start your system, run:
{% highlight bash %}
sudo rc-update add mongodb default
{% endhighlight %}
> If you want to check if the service is already running, use one of these commands: `rc-service mongodb status`.

Example:
![OpenRC MongoDB](/assets/img/mongodb/openrc-mongodb.png)


After properly configured, just enter MongoDB via [shell](https://en.wikipedia.org/wiki/Shell_script):
{% highlight bash %}
mongo
{% endhighlight %}

To exit MongoDB, simply run the command: `exit`.

# Creating an administrator user
In the mongo shell, add a user with the `userAdminAnyDatabase` role in the `admin` database. Add additional functions as needed for this user. For example, the following creates the user `username` in the `admin` database with the `userAdminAnyDatabase` function and the `readWriteAnyDatabase` function.
> As of version 4.2 of the mongo shell, it is possible to use the `passwordPrompt()` method in conjunction with various methods/authentication commands/user management to request the password, instead of specifying the password directly in the method call/command. However, you can still specify the password directly as you would with previous versions of the mongo shell.

{% highlight js %}
use admin
db.createUser (
  {
    user: "userName",
    pwd: passwordPrompt(), // or pwd: "abc123", or even a blank password
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ] // full privileges
  }
)
{% endhighlight %}
> If you want to copy and paste the code (**Shift + Control + V**, to paste in the terminal) with the necessary changes made, example output:

{% highlight bash %}
Successfully added user: {
	"user" : "marcos",
	"roles" : [
		{
			"role" : "userAdminAnyDatabase",
			"db" : "admin"
		},
		"readWriteAnyDatabase"
	]
}
{% endhighlight %}

Exit the *mongo shell* `exit`. Now to log in the parameters are similar to that of [MySQL](https://www.mysql.com/):
{% highlight bash %}
mongo -u username -p
# MongoDB shell version v4.2.2
# Enter password: [TYPE_YOUR_PASSWORD]
{% endhighlight %}
> Or with more details: `mongo --port 27017 --authenticationDatabase "admin" -u "userName" -p`

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

### [Optional] - Create additional users if needed
Note that it will only have specific `read` and/or `readWrite` permissions on specific banks as well: `test` and `reporting`
{% highlight js %}
use test
db.createUser (
  {
    user: "normaluser",
    pwd: passwordPrompt(), // or cleartext password
    roles: [{role: "readWrite", db: "test"},
             {role: "read", db: "reporting"}]
  }
)
{% endhighlight %}
Then just log in with that user: `mongo --port 27017 -u "normalUser" --authenticationDatabase "test" -p`.

The documentation has details for general situations, if you want to [take a look documentation](https://docs.mongodb.com/manual/tutorial/enable-authentication/).

# Using MongoDB (Commands)
- Databases (databases)
  - `show dbs` - Lists all databases, the alias of this command is `show databases`;
  - `use [database-name]` - Select a database, eg: `use admin`;
  - `db` - Check which database is currently in use;
  - `use terminalroot` - Creates a database, but only effectively exists when you create a collection and insert some data into it, if it is not available when you list the banks, it will cease to exist;
  - `db.dropDatabase()` - [Deletes a database](https://docs.mongodb.com/manual/reference/method/db.dropDatabase/), use after selecting `use database-name` What do you want;


- Collections(tables)
  - `show collections` - Shows the collections;
  - `createCollection()` - Creates a collection, its prototype is `createCollection("tableName", Options)`, example: `db.createCollection ("mycolection")`.
  - `db.COLLECTIONNAME.find().pretty()` - Read all data in a collection, eg `db.system.users.find().pretty ()`, read all data in the `system.users`, equivalent to `SELECT * FROM table`. This output will be formatted, if you want the data on a single line, use it without the `.pretty()` method: `db.system.users.find()`;
  - `db.COLLECTION.NAME.insert ()` - Insert data into a collection, eg: `db.mycolection.insert ({"_id": 0, " site" : "Terminal Root" , "url" : "en.terminalroot.com.br", "content" : " About MongoDB"})`;
  - `db.COLLECTION_NAME.update (QUERY_NAME, THE_UPDATE, Options)` - Updates (UPDATE) data in a Document (field), eg: `db.mycolection.update ({'content': 'About MongoDB'}, { $ set: {'content': 'MongoDB Definitive Tutorial'}}) `, changes the document named **content** which has the value: **About MongoDB** by **MongoDB Definitive Tutorial**;
  - `db.COLLECTION_NAME.drop()` - Deletes a collection, eg: `db. mycollection.drop()`, deletes the collection **mycolection**.


- `help` output as shown in the image below:
![help MongoDB](/assets/img/mongodb/help-mongodb.png)

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

See the image below of some commands we quote:
![MongoDB Terminal Root command](/assets/img/mongodb/commands-mongodb.png)

For more commands see the [comparison reference](https://docs.mongodb.com/manual/reference/sql-comparison/) and if you already know SQL and want to *translate* the command to MongoDB use [QueryMongo](http://www.querymongo.com/). 😀️

# More command information
{% highlight bash %}
# Shell
mongo --help
mongo man

# Server
mongod --help
mongod man

# Data Dump Utility
mongodump --help
mongodump man

# Export Utility
mongoexport --help
man mongoexport

# GridFS Utility
mongofiles --help
man mongofiles

# Import Utility
mongoimport --help
mongoimport man

# Traffic capture and replay tool
mongoreplay --help
man mongoreplay

# Data restoration tool
mongorestore --help
mongorestore man

# Cluster Lookup Router
mongos --help
man monks

# Statistics utility
mongostat --help
mongostat man

# Activity Monitor
mongotop --help
mongotop man
{% endhighlight %}

# Useful links
- <https://fantinel.dev/mongodb-error-datadb-on-linux/>
- <https://www.tutorialspoint.com/mongodb/mongodb_quick_guide.htm>
- <https://cheatography.com/amicheletti/cheat-sheets/mongoengine/>
- <https://docs.mongodb.com/manual/reference/mongo-shell/>
- <https://gist.github.com/michaeltreat/d3bdc989b54cff969df86484e091fd0c>
- <https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/>
- <https://hevodata.com/blog/install-mongodb-on-ubuntu/>
- <https://docs.mongodb.com/manual/reference/method/db.dropUser/#db.dropUser>
- <https://stackoverflow.com/questions/4837673/how-to-execute-mongo-commands-through-shell-scripts>
- <https://stackoverflow.com/questions/15229412/unable-to-create-open-lock-file-data-mongod-lock-errno13-permission-denied>
- <https://en.wikipedia.org/wiki/Dump_de_banco_de_dados>

# Thanks for reading!
