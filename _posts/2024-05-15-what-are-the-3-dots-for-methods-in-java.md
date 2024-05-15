---
layout: post
title: "What are the 3 dots for methods in Java?"
date: 2024-05-15 12:11:07
image: '/assets/img/java/var-args-java.jpg'
description: 'It is important to avoid method overloads.'
tags:
- java
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

As in other programming languages: [C++](https://terminalroot.com/tags#cpp) and [C](https://terminalroot.com/tags#clanguage), for example, the three dots (`...`) are used when declaring a method as a parameter.

These points allow NO arguments to be passed, as well as multiple arguments to be passed when the method is called. These three points are also known as `var args`.

---

# Examples
Suppose you have this code below with a method named `threePoints` that returns a `String` and also receives a `var args` as `String`:
{% highlight java %}
public class Code {

   public static String threePoints(String...i){
     String phrase = "";
     for (String s : i) {
       phrase += s;
     }
     return sentence;
   }

   public static void main(String[] args) {
     System.out.println("Result: " + threePoints("On that ", "day"));
   }
}
{% endhighlight %}

Note that the method does not specify that it receives only 2 arguments, but we pass 2 arguments and it returns the output:
{% highlight bash %}
Result: That day
{% endhighlight %}

If I don't pass arguments or pass more than 2 it will understand normally, for example:
{% highlight java %}
public class Code {

   public static String threePoints(String...i){
     String phrase = "";
     for (String s : i) {
       phrase += s;
     }
     return sentence;
   }

   public static void main(String[] args) {
     System.out.println("Result: " + threePoints());
     System.out.println("Result: " + threePoints("On that ", "day"));
     System.out.println("Result: " + threePoints("That ", "day ", "I was"));
     System.out.println("Result: " + threePoints("That ", "day ", "I was ", "a little anxious."));
   }
}
{% endhighlight %}

The output will be:
{% highlight bash %}
Result:
Result: That day
Result: That day I was
Result: That day I was a little anxious.
{% endhighlight %}

We could also use another method, this time of type `void` and which receives `var args` of type `int`:
> Calling: without passing arguments and with a varied number of arguments!

{% highlight java %}
public class Code {

   public static String threePoints(String...i){
     String phrase = "";
     for (String s : i) {
       phrase += s;
     }
     return sentence;
   }

   public static void threePointsInt(int ... i){
     int sum = 0;
     for (int x : i) {
       sum += x;
     }
     System.out.println("The sum is: " + sum);
   }

   public static void main(String[] args) {
     System.out.println("Result: " + threePoints());
     System.out.println("Result: " + threePoints("On that ", "day"));
     System.out.println("Result: " + threePoints("That ", "day ", "I was"));
     System.out.println("Result: " + threePoints("That ", "day ", "I was ", "a little anxious."));

     Code.threePointsInt();
     Code.threePointsInt(3);
     Code.threePointsInt(3, 6);
     Code.threePointsInt(0, 6, 3, 1, 9);
     Code.threePointsInt(1, 2, 3, 4, 5, 6);
   }
}
{% endhighlight %}

It will work normally, in addition to the output of the `threePoints()` method we will also have:
{% highlight bash %}
The sum is: 0
The sum is: 3
The sum is: 9
The sum is: 19
The sum is: 21
{% endhighlight %}

---

Easy to understand, right?!

For more information, access the [official documentation topic](https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html#varargs).

