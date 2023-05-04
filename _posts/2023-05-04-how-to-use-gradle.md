---
layout: post
title: "How to use Gradle"
date: 2023-05-04 08:28:41
image: '/assets/img/java/gradle.jpg'
description: 'Supports programming languages: C++, Java, Kotlin, JavaScript, Scala, Swift and Groovy.'
tags:
- java
- cpp
- kotlin
- javascript
- groovy
- swift
- scala
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Gradle** is a build automation tool based on [Groovy](https://groovy-lang.org/). It supports several programming languages: [C++](https://terminalroot.com/tags#cpp), [Kotlin](https://terminalroot.com/tags#kotlin), [JavaScript]( https://terminalroot.com/tags#javascript), [Scala](https://terminalroot.com/tags#scala), [Swift](https://terminalroot.com/tags#swift) and [Groovy](https://terminalroot.com/tags#groovy).

---

# Installation
You can use your operating system's package manager to search and install, examples: [Windows](https://terminalroot.com/tags#windows)(`winget`, `choco`, ...), [macOS](`brew`), [GNU/Linux](https://terminalroot.com/tags#gnu)(`apt`, `pacman`, ...).

However, if you want to install binaries directly, just download the latest version directly from the [releases page](https://gradle.org/releases/), unzip, install, like this:
> Taking as an example the most current version according to the publication date of this article: `8.1.1`.

{% highlight bash %}
wget https://downloads.gradle.org/distributions/gradle-8.1.1-bin.zip
sudo mkdir /opt/gradle
unzip -d /opt/gradle gradle-8.1.1-bin.zip
sudo ln -s /opt/gradle/gradle-8.1.1/bin/gradle /usr/local/bin/gradle
{% endhighlight %}

Once installed, check if everything is right by running the command plus the argument to get the version:
{% highlight bash %}
gradle --version
{% endhighlight %}

For Windows users unzip and move to `C:/` drive and copy folder path `C:\gradle-8.1.1\bin` and add to **System Environment Variables**, then open [Powershell ](https://terminalroot.com/tags#powershell) or [Windows Terminal](https://terminalroot.com/tags#windows) even `CMD` and run the same command to see the version.

---

# Usage
Gradle is written in Groovy and to run a basic *Hello, World!*, just create a file named `build.gradle` and insert the content below:

{% highlight groovy %}
task hello {
   doLast {
    println 'Hello, Gradle!'
   }
}
{% endhighlight %}

Now inside the same directory that `build.gradle` is in [terminal](https://terminalroot.com/tags#terminal) run the command:
{% highlight bash %}
gradle -q hello
{% endhighlight %}
> It will load the process and then display the message: `Hello, Gradle!`.

For more information about Groovy [see the documentation](https://groovy-lang.org/).

---

# Compiling Java files
There is a whole structure for Gradle to compile your projects with Gradle, the correct way is:

#### 01. Create a new project and enter it:
{% highlight bash %}
mkdir hello
cd hello
{% endhighlight %}

Inside your project, run the command:
{% highlight bash %}
gradle init
{% endhighlight %}

The *Wizard* will start with several questions, see the output below for the answers I passed:
> Remembering that some I left blank, so it was answered as the default answer (`default`)

{% highlight bash %}
gradle init

Select type of project to generate:
  1: basic
  2: application
  3: library
  4: Gradle plugin
Enter selection (default: basic) [1..4] 2

Select implementation language:
  1: C++
  2: Groovy
  3: Java
  4: Kotlin
  5: Scala
  6: Swift
Enter selection (default: Java) [1..6] 3

Generate multiple subprojects for application? (default: no) [yes, no] 

Select build script DSL:
  1: Groovy
  2: Kotlin
Enter selection (default: Groovy) [1..2] 

Select test framework:
  1: JUnit 4
  2: TestNG
  3: Spock
  4: JUnit Jupiter
Enter selection (default: JUnit Jupiter) [1..4] 

Project name (default: hello): 

Source package (default: hello): 

Enter target version of Java (min. 7) (default: 17): 

Generate build using new APIs and behavior (some features may change in the next minor release)? (default: no) [yes, no] 


> Task :init
Get more help with your project: https://docs.gradle.org/8.1.1/samples/sample_building_java_applications.html

BUILD SUCCESSFUL in 39s
2 actionable tasks: 2 executed
<-------------> 0% WAITING
> IDLE
{% endhighlight %}

After that several files and folders were created including `./gradlew`(A shell script) and `./gradlew.bat`(A batch script). And it is with them (`gradlew` for Linux and macOS; and `gradlew.bat` for Windows) that we will run our example.

But first of all let's edit the file inside our project in the path:
> `vim app/src/main/java/hello/App.java`

And change it however you want, example:

{% highlight java %}
package hello;

public class App {
   public String getGreeting() {
     return "Basic Gradle Java example!";
   }

   public static void main(String[] args) {
     System.out.println(new App().getGreeting());
   }
}
{% endhighlight %}

Now you can build using `./gradlew build` or `./gradlew.bat build`, but if you want to build and run automatically run the command:

{% highlight bash %}
./gradlew run
{% endhighlight %}

The output will be similar will be:
{% highlight bash %}
> Task :app:run
Basic Gradle Java example!

BUILD SUCCESSFUL in 1s
2 actionable tasks: 2 executed
{% endhighlight %}

---

For more information use `gradle --help` and go to: <https://gradle.org/>.

