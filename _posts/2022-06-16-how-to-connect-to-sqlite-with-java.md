---
layout: post
title: "How to Connect to SQLite with Java"
date: 2022-06-16 12:32:38
image: '/assets/img/java/java-sqlite.jpg'
description: 'Simple, fast, secure and portable!'
tags:
- java
- sqlite
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

We are often developing applications where the complexity of several other databases can influence practicality and performance.

Not to mention that saving data to simple files can be insecure and/or more complicated.

The good thing about this is that there is [SQLite](https://terminalroot.com/tags#sqlite), which is simple, fast and secure. Here on the blog there is almost a series (if we can call it that) that shows similar procedures to this one in other [programming languages](https://terminalroot.com/tags#programming).

Today we are going to see how to do this with [Java](https://terminalroot.com/tags#java), one of the most powerful languages when it comes to portability.

Let's go step by step on how to connect Java to SQLite!

---

### 1. Create a Java file, example `vim Base.java`

{% highlight java %}
public class Base {
  public static void main(String[] args) {
  }
}
{% endhighlight %}

### 2. Add the necessary packages:
> The names are very intuitive so there's no need to explain. When in doubt use: `import java.sql.*;`

{% highlight java %}
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
{% endhighlight %}

### 3. Create an instance of the `Connection` class and set it to `null`:

{% highlight java %}
Connection connection = null;
{% endhighlight %}

### 4. Create an exception to connect to the database and run the commands you want:
> If it doesn't already exist, it will create the `base.db` file

{% highlight java %}
try {
  // Create the connection to the database
  connection = DriverManager.getConnection("jdbc:sqlite:base.db");
  Statement statement = connection.createStatement();
  statement.setQueryTimeout(30); // Wait only 30 seconds to connect

  // Run commands for SQLite
  statement.executeUpdate("DROP TABLE IF EXISTS terminalroot");
  statement.executeUpdate("CREATE TABLE terminalroot (id INTEGER, name STRING)");
  statement.executeUpdate("INSERT INTO terminalroot VALUES(1, 'Marcos Oliveira')");
  statement.executeUpdate("INSERT INTO terminalroot VALUES(2, 'James Gosling')");
  ResultSet rs = statement.executeQuery("SELECT * FROM terminalroot");
  while(rs.next()) {
    // Read the entered data
    System.out.println("NAME : " + rs.getString("name"));
    System.out.println("ID : " + rs.getInt("id"));
  }
} catch(SQLException e) {
  // If the error message is: "out of memory",
  // Probably error creating(permission) or database path
  System.err.println(e.getMessage());
}
{% endhighlight %}

### 5. Use `finally` to perform an action even if there is an error after the exception
> To close the file or detail the previous error

{% highlight java %}
finally {
  try {
    if(connection != null){
      connection.close();
    }
  } catch(SQLException e) {
    // Also failed to close the file
    System.err.println(e.getMessage());
  }
}
{% endhighlight %}

The complete `Base.java` file is this one:

{% highlight java %}
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Base {
  public static void main(String[] args) {
    Connection connection = null;
    try {
      // Create the connection to the database
      connection = DriverManager.getConnection("jdbc:sqlite:base.db");
      Statement statement = connection.createStatement();
      statement.setQueryTimeout(30); // Wait only 30 seconds to connect

      // Run commands for SQLite
      statement.executeUpdate("DROP TABLE IF EXISTS terminalroot");
      statement.executeUpdate("CREATE TABLE terminalroot (id INTEGER, name STRING)");
      statement.executeUpdate("INSERT INTO terminalroot VALUES(1, 'Marcos Oliveira')");
      statement.executeUpdate("INSERT INTO terminalroot VALUES(2, 'James Gosling')");
      ResultSet rs = statement.executeQuery("SELECT * FROM terminalroot");
      while(rs.next()) {
        // Read the entered data
        System.out.println("NAME : " + rs.getString("name"));
        System.out.println("ID : " + rs.getInt("id"));
      }
    } catch(SQLException e) {
      // If the error message is: "out of memory",
      // Probably error creating(permission) or database path
      System.err.println(e.getMessage());
    }

    finally {
      try {
        if(connection != null){
          connection.close();
        }
      } catch(SQLException e) {
        // Also failed to close the file
        System.err.println(e.getMessage());
      }
    }

  }
}
{% endhighlight %}

### 6. Now download SQLite JDBC [here](https://github.com/xerial/sqlite-jdbc/releases)

> Example with [wget](https://terminalroot.com/2019/05/aprenda-a-explorar-o-comando-wget.html) for [GNU/Linux](https://terminalroot.com/tags#gnu):
{% highlight bash %}
wget https://github.com/xerial/sqlite-jdbc/releases/download/3.36.0.3/sqlite-jdbc-3.36.0.3.jar
{% endhighlight %}

> Example with [PowerShell](https://terminalroot.com/how-to-install-powershell-on-ubuntu-and-getting-started/) for [MS/Windows](https://terminalroot.com/tags#windows):
{% highlight ps %}1
Invoke-WebRequest -Uri "https://github.com/xerial/sqlite-jdbc/releases/download/3.36.0.3/sqlite-jdbc-3.36.0.3.jar"
{% endhighlight %}
<!--https://lazyadmin.nl/powershell/download-file-powershell/-->

> Example with [cURL](https://terminalroot.com/12-tips-for-you-to-use-commando-curl-as-a-ninja/), for [BSD] (https://terminalroot.com/tags#bsd)/[macOS](https://terminalroot.com/tags#macos):
{% highlight bash %}
curl -LO https://github.com/xerial/sqlite-jdbc/releases/download/3.36.0.3/sqlite-jdbc-3.36.0.3.jar
{% endhighlight %}
> Use the `-LO` parameter, GitHub has redirection.

### 7. Compile your code and after compiling, run it with the `-classpath` parameter and enter the **sqlite-jdbc-[version].jar** and the class name:

> If it's GNU/Linux/BSD/macOS, use `.:`
{% highlight bash %}
javac Base.java
java -classpath ".:sqlite-jdbc-3.36.0.3.jar" Base
{% endhighlight %}

> If it's Microsoft Windows, use `.;`
{% highlight bash %}
javac Base.java
java -classpath ".;sqlite-jdbc-3.36.0.3.jar" Base
{% endhighlight %}

Possible and probable exit:
{% highlight bash %}
NAME: Marcos Oliveira
ID: 1
NAME: James Gosling
ID: 2
{% endhighlight %}

For more information visit: <https://github.com/xerial/sqlite-jdbc> .

