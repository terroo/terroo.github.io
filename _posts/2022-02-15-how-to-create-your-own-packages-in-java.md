---
layout: post
title: "How to create your own packages in Java"
date: 2022-02-15 10:19:22
image: '/assets/img/java/package.jpg'
description: 'A Java package is used to group classes. In this tutorial we will see how to create and add multiple classes.'
tags:
- java
- programming
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

![Java](./package.jpg)

We already know that [Java](https://terminalroot.com/tags#java) has packages from [its API](https://docs.oracle.com/javase/8/docs/api/) and we usually import classes from the `java.util` package.

In this tutorial we will show you how to create your own packages in: [GNU](https://terminalroot.com/tags#gnu)/[LINUX](https://terminalroot.com/tags#linux), [\*BSD](https://terminalroot.com/tags#bsd), [macOS](https://terminalroot.com/tags#macos) and in [WSL/Windows](https://terminalroot.com/tags#windows) and import them into your own .

---

# Creating a basic package
Suppose you create a class with a single method and you want to make it available to anyone who wants to import:
> `vim MyClass.java`

On the first line use the keyword `package` followed by a space and the name you want for your package, example: `MyPackage;` and then create your class with the methods you want to share, example `public void myMethod( )`, which just returns any string:
{% highlight java %}
package MyPackage;

public class MyClass {
  public void myMethod() {
    System.out.println("This is my package!");
  }
}
{% endhighlight %}

Now let's create the package directory already with this class with the command:
{% highlight sh %}
javac -d . MyClass.java
{% endhighlight %}

Note that inside your project (in this case: *sandbox*) there is now a directory named `MyPackage/` with the following files inside and outside it:
> [tree](http://mama.indstate.edu/users/ice/tree/) `sandbox/`
{% highlight sh %}
sandbox/
├── MyPackage
│   └── MyClass.class
└── MyClass.java

1 directory, 2 files
{% endhighlight %}

If you want, we can even remove the file `sandbox/MinhaClasse.java` and now the project(*sandbox*) will only have one directory and inside it a file `MinhaClasse.java` that was not what we removed, but the file inside the MyPackage directory:
{% highlight sh %}
sandbox/
└── MyPackage
    └── MyClass.class

1 directory, 1 file
{% endhighlight %}


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

Now let's import our package into another file, another project that you are creating:
> `vim MyProgram.java`
{% highlight java %}
import MyPackage.MyClass;

public class MyProgram {
  public static void main(String[] args) {
   MyClass obj = new MyClass();
   obj.myMethod();
  }
}
{% endhighlight %}

That is, when instantiating the package class and calling the method, it is successfully executed:
{% highlight sh %}
javac MyProgram.java
java MyProgram
{% endhighlight %}
> Possible and probable output: `This is my package!` .

---

# Adding one more class to your package
Let's say you have a new class and you want to add it to your package: `MyPackage`
{% highlight java %}
package MyPackage;

public class NewClass {
  public String newMethod(){
    String name = "For example only";
    return name;
  }
}
{% endhighlight %}

Now run:
{% highlight sh %}
javac -d . NewClass.java
{% endhighlight %}
> If you want after running the command, remove the file: `rm ./NewClass.java`

Now in your `MyProgram.java` code also import this `NewClass` class:
{% highlight java %}
import MyPackage.MyClass;
import MyPackage.NewClass;

public class MyProgram {
  public static void main(String[] args) {
   MyClass obj = new MyClass();
   NewClass obj2 = new NewClass();
   obj.myMethod();
   System.out.println(obj2.newMethod());
  }
}
{% endhighlight %}
> After compiling and running the possible output will be:
{% highlight sh %}
That's my package!
just for example
{% endhighlight %}

If you wanted to import all the classes in your package, just use: `import MyPackage.*;`:
> `MyProgram.java`
{% highlight java %}
import MyPackage.*;

public class MyProgram {
  public static void main(String[] args) {
   MyClass obj = new MyClass();
   NewClass obj2 = new NewClass();
   obj.myMethod();
   System.out.println(obj2.newMethod());
  }
}
{% endhighlight %}

---

# Useful links
+ <https://docs.oracle.com/javase/8/docs/api/>
+ <https://docs.oracle.com/javase/tutorial/java/package/packages.html>
+ <http://mama.indstate.edu/users/ice/tree/>
