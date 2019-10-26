---
layout: post
title: "30 examples of the sed command - with regex"
date: 2019-10-25 20:56:20
image: '/assets/img/dev/sed.jpg'
description:
featured-img: ../dev/sed.jpg
tags:
- sed
- linux
- terminal
- gnu
---

> Sed is a non-interactive text editor. It comes from English [S]tream [ED]itor, ie text flow editor. GNU Sed is currently used by most Linux distributions and has the most new features: GNU/Linux.

It's case sensitive

+ `-i` change the file
+ `-e` print to screen without changing file
+ `-n` suppress, show only command output
+ `s`  replaces one piece of text with another
+ `!`  inverts the logic of the command
+ `;`  command separator
+ `|`  string separator
+ `d`  at the end delete
+ `p`  at the end prints
+ `g`  at ​​the end (as d and p is used) changes all occurrences
+ `q`  quit sed, does not continue command

### Complete list of GNU sed character classes

+ `[[: alnum:]]` Alphabetic and Numeric [a-z A-Z 0-9]
+ `[[: alpha:]]` Alphabetic [a-z A-Z]
+ `[[: blank:]]` Blank character, space, or tab [\ t]
+ `[[: cntrl:]]` Control characters [\ x00- \ x1F \ x7F]
+ `[[: digit:]]` Numbers [0-9]
+ `[[: graph:]]` Any visible character (i.e. except blank) [\ x20- \ x7E]
+ `[[: lower:]]` Lowercase letters [a-z]
+ `[[: upper:]]` Capital letters [A-Z]
+ `[[: print:]]` Visible characters (ie except control characters) [\ x20- \ x7E]
+ `[[: punct:]]` Score [-! ”# $% & '() * +,. /:;? @ [\] _` {} ~].
+ `[[: space:]]` White space [\ t \ r \ n \ v \ f]
+ `[[: xdigit:]]` Hexadecimal Number [0-9 a-f A-F]

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

1 - Swap all words in one file for another

{% highlight bash %}
sed -i 's/word/other/' file.txt
{% endhighlight %}

2 - Prints only the ninth line

{% highlight bash %}
sed -n '9p' file.txt
{% endhighlight %}

3 - Prints from the sixth line to the ninth line

{% highlight bash %}
sed -n '6.9p' file.txt
{% endhighlight %}

4 - Delete all lines containing the word string in the file.

{% highlight bash %}
sed -i '/dmx/d' file.txt
{% endhighlight %}

5 - Put one word at the beginning of each line.

{% highlight bash %}
sed 's/^/word/' file.txt
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

6 - Put a word at the end of each line.

{% highlight bash %}
sed 's/$/word/' file.txt
{% endhighlight %}

7 - Prints only lines that START with the string ‘http’

{% highlight bash %}
sed -n '/^http/p' file.txt
{% endhighlight %}

8 - Deletes only lines that START with the string ‘http’

{% highlight bash %}
sed -n '/^http/d' file.txt
{% endhighlight %}

9 - Exchange ALL occurrences of the word “marcos”, “eric”, “camila” with the word “penguin”

{% highlight bash %}
sed 's/marcos\|eric\|camila/penguin/g' file.txt
{% endhighlight %}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

10 - Exchange everything between the words "Marcos" and "Eric" for the word "they", for example, the text is:

“On Saturday Marcos went out to bike with Eric, but they didn't stay up late.” And it will look like this: “On Saturday they didn't stay up late.”

{% highlight bash %}
sed's/Marcos.*Eric/they/' file.txt
{% endhighlight %}

11 - Delete blank line and change file

{% highlight bash %}
sed -i '/^$/d' file.txt
{% endhighlight %}

12 - Replaces “foo” with “bar” only lines containing “plop”

{% highlight bash %}
sed '/plop/s/foo/bar/g' file.txt
{% endhighlight %}

13 - Replaces “foo” with “bar” except lines containing “plop”

{% highlight bash %}
sed '/plop/!s/foo/bar/g 'file.txt
{% endhighlight %}

14 - Insert Line 2 with line 7 the “#” at the beginning of each line

{% highlight bash %}
sed '2,7s/^/#/' file.txt
{% endhighlight %}

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:100px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

15 - Inserts the word 'NEW' at the beginning of each line from line 21 to line 28

{% highlight bash %}
sed -i '21,28s/^/NEW/' file.txt
{% endhighlight %}

16 - Swap everything between the tags “<” and “>” for the word “CODE”:

{% highlight bash %}
sed 's/<[^>]*>/CODE/g' file.txt
{% endhighlight %}

17 - Prints only first occurrence of line with given string

{% highlight bash %}
sed -n '/day/{p;q;}' file.txt
{% endhighlight %}

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:300px;height:100px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

18 - Include text at end of line 9

{% highlight bash %}
sed '9s/$/end of line/' file.txt
{% endhighlight %}

19 - Put all lines into one

{% highlight bash %}
sed ':a;$!N;s/\n//;ta;' file.txt
{% endhighlight %}

20 - Replaces the word “BEAUTY” with “YES” only between certain lines.

{% highlight bash %}
sed '3,6s/BEAUTY/YES/' file.txt
{% endhighlight %}

21 - Deletes what is between the word “spoke” and “second” (delimiters)

{% highlight bash %}
sed '/second/{/spoke/{s/second.*spoke//;t};:a;/spoke/!{N;s/\n//;ta;};s/second.*spoke/\n/;}' file.txt
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

22 - Removes HTML commands

{% highlight bash %}
sed 's/<[^>]*>//g' file.txt
{% endhighlight %}

23 - Deletes the 1st character of the sentence.

{% highlight bash %}
sed 's/.//' file.txt
{% endhighlight %}

24 - Deletes the 4th character of the sentence.

{% highlight bash %}
sed 's/.//4' file.txt
{% endhighlight %}

25 - Deletes the first 4 characters

{% highlight bash %}
sed 's/.\{4\}//' file.txt
{% endhighlight %}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

26 - Deletes at least 4 characters

{% highlight bash %}
sed 's/.\{4,\}//' file.txt
{% endhighlight %}

27 - Deletes 2 to 4 characters

{% highlight bash %}
sed 's/.\{2,4\}//' file.txt
{% endhighlight %}

28 - Range Examples
{% highlight bash %}
echo "aáeéiíoóuú" | sed "s/[a-u]//g"
áéíóú
{% endhighlight %}
{% highlight bash %}
echo "aáeéiíoóuú" | sed "s/[á-ú]//g"
aeiou
{% endhighlight %}

29 - Transforms text (URL) into HTML link tags.

It was: `http://www.com`

It is: `<a href="http://www.com">http://www.com</a>`

{% highlight bash %}
sed 's_\<\(ht\|f\)tp://[^ ]*_<a href="&">&</a>_' file.txt
{% endhighlight %}

30 - Regular Expressions with SED (sed regex)

This sed reads data from file.txt and erases (command d) from the first line to the line containing 3 numbers in a row, throwing the result on the screen. If you want to save the result, redirect it to another file, not the file.txt itself.

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

{% highlight bash %}
sed '1,/[0-9]\{3\}/d' file.txt
{% endhighlight %}

Delete numbers
{% highlight bash %}
s/[0-9]\+//g' file.txt
{% endhighlight %}

Prints only lines containing SCORE
{% highlight bash %}
sed -n '/[[:punct:]]/p' file.txt
{% endhighlight %}

Print only lines beginning with Numbers
{% highlight bash %}
sed -n '/^[[:digit:]]/p' file.txt
{% endhighlight %}

## Formatting Phone Number

We have a file with the phone numbers like this:

{% highlight txt %}
7184325689
4333285236
1140014004
3633554488
{% endhighlight %}

Running some of these command modes in SED:

- Neanderthal Mode

> Replaces 2 characters “..” with “&” which is the output of the request.
> Performs another sed to replace 8 characters again with “&”
> Note: You must always escape the parentheses “\(“ and “\)”

{% highlight bash %}
sed 's/../\(&\)/' file.txt | sed 's/......../&-/' file.txt
{% endhighlight %}

- Medieval mode

> Same as above, just put the "{8}" to mark 8 characters "."
> Also, ALWAYS need to escape the “\{“ and “\}” keys

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight bash %}
sed 's/../\(&\)/' file.txt | sed 's/.\{8\}/&-/' file.txt
{% endhighlight %}

- Modern mode

Instead of throwing the exit, I separated the command with a semicolon “;” and launched another sed “s”

{% highlight bash %}
sed 's/../\(&\)/;s/.\{8\}/&-/' arquivo.txt
{% endhighlight %}

- Postmodern mode

This mode is to understand the following

> The first command in parentheses “\(..\)”
> Then separated by slash \
> I threw or command in parentheses “\ (.\{4 \} \)”
> The first command output goes to bar 1 “\1”
> And the second command for slash 2 “\2”
> It could also have bar 3, n,…

{% highlight bash %}
sed 's/\(..\)\(.\{4\}\)/(\1)\2-/g' arquivo.txt
{% endhighlight %}

Stays like this:
{% highlight bash %}
(71) 8432-5689
(43) 3328-5236
(11) 4001-4004
(36) 3355-4488
{% endhighlight %}

Thanks for read.
    
