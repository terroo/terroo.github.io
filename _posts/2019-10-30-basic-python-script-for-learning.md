---
layout: post
title: "Basic Python Script for Learning"
date: 2019-10-30 10:50:17
image: '/assets/img/python/python3.jpg'
description: 'For those who are starting in Python.'
featured-img: ../python/python3.jpg
tags:
- python
- script
- terminal
---

![Basic Python Script for Learning](/assets/img/python/python3.jpg)

This script works on **python3**, but to work with **python2**, in short, the lines that contain this content must be changed:

+ **Python2** → `print "String"`, **Python3** → `print("String")`
+ **Python2** → `raw_input`, **Python3** → `input`

For those who are starting in **Python**. It is not necessary to take a course from the start, but to analyze the Python syntax, such as:
+ variables
+ loops
+ functions
+ inputs

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

And among other basic things, but you can do a lot of things in mind. See the script below.
> To run save with the name you want, for example: `vim starting-at-python.py`, enter the code below and run:

{% highlight bash %}
python starting-at-python.py
{% endhighlight %}

Or give execute permission and run directly:

{% highlight bash%}
chmod +x starting-in-python.py
./starting-in-python.py
{% endhighlight%}

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

## Basic Python Script for Learning

{% highlight python %}
#!/usr/bin/python
print("The script header is: #!/usr/bin/env python or #!/usr/bin/python")
print("Comments start with: #")
print("To print on screen, eg print(\"Hello world!\")")
print("You don't need the ';' at the end, but I put it here and didn't get an error;")
print("May have comments in the middle of the line like here and it doesn't appear") #comment

variable = "My Variable"
print(variable)
print("Create variables like this: variable = 'My Variable', you can use single or double quotes")

sum = 8 + 8
print("Arithmetic operations (sum +, subtraction-, multiplication *, division /): print 8 + 8 =", sum)
print("To concatenate strings just use the +, eg print('Wo' + 'rd')")
print("Wo" + "rd")
print("But to contact strings and integer, use comma (,) (sum is a variable/integer 8 + 8), eg print('8 + 8', sum)")
print("You can use the comma to separate strings too, however, you will have space, eg 'Pala', 'vra' -> Pala vra")

"double quote comment"
'single quote comment'

print("Comments can also be in single or double quotation marks, as there is in this script, but you cannot mix them in the same comment")
print(7/2)
print(7.0/2)
print("When splitting when you want to get irrational numbers (float), you have to do float as well, as an example above")
print("You can create arithmetic expressions, see result below expression: print(9 - (1 + 2))/3.0")
print(9 - (1 + 2)/3.0)
print("Error messages are descriptive and in the case of syntax python uses a ^ to indicate the exact location of the error")
print("There are several types of errors as in other programming languages, see the documentation: \nhttp: //turing.com/pydoc/2.7/tutorial/errors.html")
print("As you saw above, \\n skips line")

meuarray = ['marcos', 'eric', 'camila']
print( meuarray[1] )

print("Creating a meuarray: meuarray = ['marcos', 'eric', 'camila']")
print("printing a particular element from a myray: print(myray [1]) -> eric")
print("If and else conditions use condition in parentheses and colons (:) at the end, eg")
print("Unlike Bash, there is no fi to close condition, eg: \nn \nif (condition): \n print \nelse: \n print()")
print
print("print alone skips a line like in Bash")

total = 27
if (total> 30):
    print("total variable is greater than 30")
else:
    print("total variable is less than 30")

print
initial = 18

print("Using if, elif and else, plus the logical operator and. could also be: or or not, see this script")

if (total <30) and (initial <15):
    print("Less than 30 and less than 15")
elif (total <30) and (initial <16):
    print("Less than 30 and less than 16")
elif (total <30) and (initial <17):
    print("Less than 30 and less than 17")
elif (total <30) and (initial == 18):
    print("Less than 30 equals 18")
else:
    print("I don't know")

print
print("See documentation: \n https: //docs.python.org/2/tutorial/controlflow.html")
print
print("Using the while loop, see this script")

count = 0
while (count <4):
    print("The counter is:", count)
    count = count + 1

print("Bye!")
print("Using the while loop with else")
print

count = 1
while count <3:
   print(count, "is less than 3")
   count = count + 1
else:
   print(count, "not less than 3")

print
print("Loop for, print array elements myarray: for i in myarray: print i")
for i in meuarray: print(i)
print

print("If the loop were: \n \nfor letter in 'Python': \n \n print letter")
print("Print: each letter of the Python word and can also use the else as no while")
print("Use one of the reserved words (def) and the name of the function, plus the colon (:) at the end")
print
print("Using and creating functions")

def myfunction (str):
    print("My profession is:", str)
    return
print
myfunction("Python Developer")

print
print("Using predefined functions, example of Bash read-style raw_input function")

str = input("Enter your name: 👤 ")
print("Your name is → ", str)
print
print("The range:")
print(range (4))
print
print("Basically, to get this started, wait for the next exercise posts and continuations, hugs!")
{% endhighlight%}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
    
