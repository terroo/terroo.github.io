---
layout: post
title: "Definitive Guide to Lua for Beginners"
date: 2021-11-15 14:02:57
image: '/assets/img/neovim/lua.jpg'
description: 'Easily learn to program in Lua'
featured-img: ../neovim/lua.jpg
tags:
- lua
- programming
---

![Definitive Guide to Lua for Beginners](/assets/img/neovim/lua.jpg)

Lately, several international companies are offering a vacancy on [Stack Overflow](https://stackoverflow.com/jobs/developer-jobs-using-lua), remote or in person, for [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/) programmers. br/cpp) that have knowledge of the **Lua** programming language, in addition to various software and [Games](https://en.terminalroot.com.br/play-retro-games-on-linux-with-mednafen/) are adopting Lua very quickly. So, no let those opportunities slip away!

Here's everything for you to **start** in this world of the Lua programming language!

Come on!

> Note: This tutorial is suitable for anyone who basically knows any programming language.

---

# Introduction
**Lua** is a high-level, dynamically typed, multiparadigm, reflective, lightweight, interpreted programming language designed by **Tecgraf at PUC-Rio** in 1993 to expand general applications in an extensible manner (which joins parts of a program made in more than one language), for prototyping and to be embedded in complex software such as games. It resembles Python, Ruby and Icon, among others.

Lua was created by a team of Tecgraf developers from PUC-Rio, at first, to be used in a Petrobras project. Due to its efficiency, clarity and ease of learning, it started to be used in several branches of programming, such as in game development (Blizzard Entertainment, for example, used the language in the World of Warcraft game), robot control, computer processing. text, etc. It is also often used as a general purpose language.

Lua combines procedural programming with powerful data description constructs based on associative tables and extensible semantics. It is dynamically typed, interpreted from bytecodes, and has automatic memory management with garbage collection. These characteristics make Lua an ideal language for configuration, automation (scripting) and rapid prototyping.

### Who uses Lua?
+ In 2013, the Wikimedia Foundation started using the language in templates.
+ Neovim - It has native support for Lua. One of the reasons for doing this is that VimScript is a slow interpreter language, with almost no optimizations. Much of the time spent starting vim and plug-in actions that can block the main loop in the editor is parsing and running vimscript.


<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

And also:
+ Adobe Photoshop Lightroom
+ Celestia
+ Cheat Engine
+ ClanLib
+ CryEngine 3
+ Corona SDK
+ Damn Small Linux
+ Ginga
+ Kepler (software)
+ lighttpd
+ Liquid Feedback
+ MinGW
+ Monotone
+ Nmap
+ PlayStation Home

Games that also use Lua:
> Examples of companies that developed games using the Lua language: LucasArts, Croteam, BioWare, Microsoft, Relic Entertainment, Absolute Studios, Monkeystone Games, Blizzard, SNKPlaymore, Facepunch Studios, KOG.

+ Angry Birds
+ Baldur's Gate
+ The Battle for Wesnoth
+ Civilization V
+ Counter-Strike Online / Counter-Strike Nexon: Zombies
+ Escape from Monkey Island
+ Fable II
+ Far cry
+ FlyFF
+ Freeciv
+ Freelancer
+ Garry's Mod
+ Grand Chase
+ Grim Fandango
+ Impossible Creatures
+ Lego Universe
+ MapleStory
+ MDK2
+ Monopoly Tycoon
+ Multi Theft Auto

---

### Story
Lua was created in 1993 by Roberto Ierusalimschy, Luiz Henrique de Figueiredo and Waldemar Celes, members of the Computer Graphics Technology Group at PUC-Rio, the Pontifical Catholic University of Rio de Janeiro, in Brazil.[5] Versions of Lua before version 5.0 were released under a license similar to the BSD license. As of version 5.0, Lua has been licensed under the MIT license.

Some of its closest relatives are Icon, for its design, and Python, for its ease of use by non-programmers. In an article published in Dr. Dobb's Journal, the creators of Lua also claim that Lisp and Scheme were a big influence in the decision to develop the table as Lua's main data structure. Lua has been used in various applications, both commercial and non-commercial.

The first project using the language in games was in 1997 when LucasArts used it as a scripting language in the game Grim Fandango.[3]

In 2008 one of Lua's most famous engines was born (Corona SDK)


In 2009 Love2D was born, a 2D game engine.

### Characteristics

Lua is usually described as a multi-paradigm language, offering a small set of general features that can be extended to fit different types of problems, rather than providing a more complex and rigid specification to match a single paradigm. Lua, for example, does not contain explicit support for inheritance, but it does allow it to be performed relatively easily with metatables. Likewise, Lua allows programmers, when implementing names, classes, and other functions, to employ powerful functional programming techniques and complete lexical scopes.

Lua is a language that only supports a small number of structures, such as atomic data, boolean values, numbers (double-precision floating point by default), and strings. Common data structures such as arrays, sets, tables, lists, and records can be represented using Lua. Lua was not built with support for object-oriented programming.

Via: <https://wikipedia.org/wiki/Lua_(programming_language)>


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

---

# Preparing the Environment
To install Lua just use your distribution's package manager, for example:
+ In Gentoo, Funtoo and derivatives: `emerge lua`
+ On Debian, Ubuntu, Mint and derivatives: `sudo apt install lua` or if it doesn't work, enter the version, example: `sudo apt install lua51`

You can write in Lua in any IDE, however, the most recommended one is [Neovim](https://en.terminalroot.com.br/install-veonim-a-text-editor-based-on-vim-and-neovim/) which includes we'll see how to create a plugin for Neovim using Lua that has native integration.

After installing run: `lua --help` the output will be:
{% highlight lua %}
lua --help
usage: lua [options] [script [args]].
Available options are:
  -e stat execute string 'stat'
  -l name require library 'name'
  -i enter interactive mode after executing 'script'
  -v show version information
  -- stop handling options
  - run stdin and stop handling options
{% endhighlight %}

Examples:
> Running only `lua` command enters a subshell, run `os.exit()` inside the subshell to exit.

| Parameter | Usage |
|---|---|
| `-e` | `lua -e 'print("Hello, Lua!")'` |
| `-i` | `lua -i script.lua` |
| `-v` | `lua -v` |

| Version |
|---|
| **Lua 5.1.5 Copyright (C) 1994-2012 Lua.org, PUC-Rio** |


---

# Hello World!
The most basic program.

> `nvim hello-world.lua`
{% highlight lua %}
print("Hello Lua!")
{% endhighlight %}

And run: `lua hello-world.lua` or:

{% highlight lua %}
#!/usr/bin/env lua
print("Hello Lua!")
{% endhighlight %}
> `chmod +x hello-world.lua` and run: `./hello-world.lua` . You could still replace the header with `which lua` and add, for example: `#!/usr/bin/lua`

Other ways to print:
> No parentheses
{% highlight lua %}
print "Hello, no parentheses, Lua!"
{% endhighlight %}

> Multiple lines
{% highlight lua %}
print [[
it can be seen
in several lines
 including the initial spaces
]]
{% endhighlight %}
> Or also with parentheses: `print([[ ]])`

---

# Comments
Single-line comments use two dashes (--) can be:
{% highlight lua %}
-- up here
print "Luaaaaa" -- here on the side
-- here below
{% endhighlight %}

Or in multiple lines
{% highlight lua %}
print "Starting the code"
--[[ Comment
in
multiple
lines
]]
print "Finishing the code"
{% endhighlight %}
> Detail: the `--` must be pasted from the `[[` at the beginning.

---

# Variables
There are three types of variables in Lua: global variables, local variables and table fields. Every variable is assumed to be a global variable unless it is explicitly declared as a local variable.

{% highlight lua %}
name = "Marcos Oliveira"
print(name)
print("The name value is:", name) -- output spaced with TAB
{% endhighlight %}

Creating a local variable:
{% highlight lua %}
version location = _VERSION
print(version)
{% endhighlight %}

Table fields:
{% highlight lua %}
my_table = {
  x = 10,
  y = 20
}

print( my_table.x )
print( my_table.y )
{% endhighlight %}

Creating an empty table and adding later:
{% highlight lua %}
table = {}
table[1] = "Lua"
print(table[1])
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

---

# Concatenation
To concatenate strings in Lua you need to use the dot twice: `..` , example:
{% highlight lua %}
hello = "hello"
world = "world"
print( hello .. ", " .. world .. "!" )
{% endhighlight %}
> Output: `Hello World!` .

We can declare multiple variables and print it like this:
{% highlight lua %}
first name, last name = "Marcos","Olivera"
print(first name .. " " .. last name)
{% endhighlight %}

---

# Constants
Lua before version **5.4** didn't support constants automatically, but you can add a table and make the table read-only using metatable (we'll see this later). But from 5.4 on, use it like this:

{% highlight lua %}
location my_var <const> = 42
print( my_var )
{% endhighlight %}
> Run: `lua5.4 constants.lua`

If trying to reset, example:
{% highlight lua %}
my_var = 24
{% endhighlight %}
> You will get the error: `lua5.4: sandbox.lua:3: attempt to assign to const variable 'my_var'`

---

# Arrays
Arrays are ordered arrays of objects, which can be a one-dimensional array containing a collection of rows or a multidimensional array containing several rows and columns.

In Lua, arrays are implemented using index tables with integers. The size of an array is not fixed and can grow based on our requirements, subject to memory constraints.

> **In Lua the array/matrix starts from 1**, if you try to print 0(zero) the output will be `nil`

#### One-dimensional array
A one-dimensional array can be represented using a simple table structure and can be initialized as shown below.

{% highlight lua %}
my_array = {"Lua", "C++", "JavaScript", "C", "Bash", "Rust", "PHP"}
print( my_array[1]) -- Lua
{% endhighlight %}

---

# Data Types
Data typing in Lua is dynamic, but if you want to get the data type, just, for example:

{% highlight lua %}
print( type("What is the type of this data?") ) -- string
print( type(936) ) -- number
print( type( true ) ) -- boolean
print( type( print ) ) -- function
print( type( os ) ) -- table
print( type( nil ) ) -- nil

name = "Marcos Oliveira"
print( type( type ) ) -- function
print( type( 9.36 ) ) -- num
print( type( name ) ) -- string
{% endhighlight %}

Besides that there are also types: `userdata` and `thread` .

---

# Operators
Lua uses almost all the operators that other programming languages ​​use, examples:


| operator | operator | operator | operator |
|---|---|---|---|
| `+` | `-` | `*` | `/` |
| `%` | `^` | `==` | `~=` |
| `>` | `<` | `>=` | `<=` |
| `and` | `or` | `not` | `#` |


> In addition to the `..` we've already seen that serves for concatenation.

Examples:

{% highlight lua %}
-- sum
print("2 + 2:")
print(2 + 2) -- 4

-- subtraction
print("2 - 2:")
print(2 - 2) -- 0

-- multiplication
print("2 * 2:")
print(2 * 2) -- 4

-- division
print("2 / 2:")
print(2 / 2) -- 1

-- rest of division (module)
print("2 % 2:")
print(2 % 2) -- 0
{% endhighlight %}

The others will be seen later!


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

---

# Conditions
Like other programming languages, Lua also has conditions, of course (the most used resource in any programming language).
> Note the use of the words: `then` and `end`

To use the `if`, example:
{% highlight lua %}
number = 10

if( number == 10 ) then
  print("The number is equal to TEN")
end
{% endhighlight %}

To use `else`
{% highlight lua %}
number = 8

if( number == 10 ) then
  print("The number is equal to TEN")
else
  print("The number is different from TEN")
end

{% endhighlight %}


To use `elseif`
{% highlight lua %}
number = 8

if( number == 10 ) then
  print("The number is equal to TEN")
elseif( number == 8 ) then
  print("The number is EIGHT")
else
  print("The number is DIFFERENT from TEN and EIGHT")
end
{% endhighlight %}

---

# Loops
To perform an action at certain times we use loops, in Lua there are 3 types of loops: `while`, `for` and `repeat until`, let's see how to use them:
> Note the use of reserved words: `do` and `end`

`while` loop
{% highlight lua %}
number = 1

while( number < 4 ) do
  print("Printing " .. number .. "th time!")
  number = number + 1
end
{% endhighlight %}

`for` loop
> Miscellaneous examples.

{% highlight lua %}
-- increasing value
for i = 1.4 of the
 print("Printing "..i.."th time!")
end
{% endhighlight %}

{% highlight lua %}
-- decreasing value
for i = 4.1.-1 of the
 print("Printing "..i.."th time!")
end
{% endhighlight %}

`repeat until` loop
{% highlight lua %}
number = 4 -- starts from number 4
repeat
   print("The value of 'number' is: "..number)
   number = number + 1
until( number > 8 ) -- until number 8
{% endhighlight %}

Using `break`
{% highlight lua %}
number = 4 -- starts from number 4
repeat
  print("The value of 'number' is: "..number)
  if( number == 6 ) then -- if it is equal to 6 stop the loop
    break
  end
  number = number + 1
until( number > 8 ) -- until number 8
{% endhighlight %}

---

# Functions
Functions are important for code reuse, let's see some ways to use them in Lua.

Basic function:
{% highlight lua %}
function hello_world()
  print("Hello Lua via function!")
end

hello_world() -- call the function
{% endhighlight %}

Passing parameters:
{% highlight lua %}
function sum(x,y)
  print(x.." + "..y.." = "..x + y)
end

sum(3,9)
{% endhighlight %}

Using signature:
{% highlight lua %}
output = function(flag)
  print("The result is: "..flag)
end

function sum(x, y, callback)
  result = x + y
  callback(result)
end

sum(3, 9, output)
{% endhighlight %}

Function with variable argument:
> Note the use of the native `ipairs` function which is an *iterator* (we'll see more later)
{% highlight lua %}
function qtd_params(...)
  location qtd = 0;
  parameters = {...}
  for i,v in ipairs(parameters) do
    qtd = qtd + 1
  end
  return qtd
end

print([[The number of parameters passed
for the function qtd_params(...) is: ]] .. qtd_params(8,4,11,2,17))
{% endhighlight %}
> In this case we pass **5** parameters to the function.

Printing all parameters passed with variable argument:
{% highlight lua %}
function list_params(...)
  location qtd = 0;
  parameters = {...}
  for i,v in ipairs(parameters) do
    qtd = qtd + 1
  end

  for j = 1.qtd of
    print("The "..j.."th parameter is: "..parameters[j])
  end
end

list_params("Mark", "Olive", "Terminal", "Root")
{% endhighlight %}

---

# Working with strings
+ Another way of printing:
{% highlight lua %}
str = [[Lua is really cool!]]
print(str)
{% endhighlight %}

+ Printing colors:
{% highlight lua %}
str = "Lua is really cool!"
yellow = "\027[33m"
off = "\027[m"
print(yellow..str..hangs up)
{% endhighlight %}

+ Printing all colors:

{% highlight lua %}
str = "Lua is really cool!"

-- from 30 to 37 (8 colors)
-- but there's more: try 0 to 106
for i = 30.37 of the
  if( i == 30) then
    -- if your terminal is the background color
    -- the background will not appear
    print("\027[90m"..str.."\027[m")
  else
    print("\027["..i.."m"..str.."\027[m")
  end
end
{% endhighlight %}

+ Converting to UPPER or lower case
> For UPPERCASE
{% highlight lua %}
str = "Lua is really cool!"
print( string.upper( str ) )
{% endhighlight %}

Note that accented words do not change. We'll see how to change this when we talk about including libraries.

> To lowercase
{% highlight lua %}
str = "Lua is really cool!"
print( string.lower( str ) )
{% endhighlight %}

+ Replacing parts of a string
{% highlight lua %}
str = "Perl is really cool!"
str = string.gsub(str,"Perl","Lua")
print(str)
{% endhighlight %}

+ Formatting string:
  - in the middle of the sentence
{% highlight lua %}
str = "❤"
print( string.format("I %s Lua!",str))
{% endhighlight %}
  - Formatting date
{% highlight lua %}
day, month, year = 26.08.2021
print( string.format("%d/%02d/%d",day,month,year))
{% endhighlight %}
> For month with zero: `%02d`.

+ Print float with 4 significant digits:
{% highlight lua %}
print( string.format("%.4f",3.1415))
{% endhighlight %}

+ Finding a string:

{% highlight lua %}
str = "The Lua programming language is really cool"

if( string.find(str,"a lot") ) then
  print("Found the word 'very'")
else
  print("The word 'much' was not found")
end

if( string.find(str,"bye") ) then
  print("Found the word 'bye'")
else
  print("NO word found 'bye'")
end
{% endhighlight %}

+ Reversing a string:
{% highlight lua %}
str = "Wow! The Lua!"
print(string.reverse(str))
{% endhighlight %}

+ Getting the length of a string:
{% highlight lua %}
str = "Lua"
print(string.len(str))
{% endhighlight %}

+ Subdividing a string
> `string.sub(STRING, POS_INI, POS_FINAL)`
  - Prints only: **Lua**
{% highlight lua %}
str = "Lua Programming Language"
print( string.sub(str,0,3) )
{% endhighlight %}
  - Prints only: **Programming**
{% highlight lua %}
str = "Lua Programming Language"
print( string.sub(str, string.len(str) - 12, string.len(str) ) )
{% endhighlight %}
Or
{% highlight lua %}
str = "Lua Programming Language"
print( string.sub(str, 18, 30 ) )
{% endhighlight %}

+ Repeat string *n* times
> For this example: 4 times
{% highlight lua %}
str = "Lua"
print(string.rep(str,4))
{% endhighlight %}

+ Printing a letter in byte format (ASCII table number):
  - Getting number by letter
{% highlight lua %}
print( string.byte("Lua")) -- first character
print( string.byte("Lua",2)) -- second character
print( string.byte("Lua",-1)) -- last character
print( string.byte("Lua",-2)) -- penultimate character
{% endhighlight %}
  - Getting the letter by number
{% highlight lua %}
print( string.char(97)) -- first character
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

---

# Working with Tables
Tables are the only data structure available in Lua that help us create different types, such as arrays and dictionaries. Lua uses associative arrays and can be indexed not only with numbers but also with strings, except nil. Tables have no fixed size and can grow as per our need.

Lua uses tables in all representations, including the package representation. When we access a string.format method, it means that we are accessing the formatting function available in the string package.

Tables are called objects and are not values or variables. Lua uses a constructor expression {} to create an empty table. It should be noted that there is no fixed relationship between a variable that contains the table reference and the table itself.


> Read the comments in the code for greater understanding:

{% highlight lua %}
table = {"Lua", "C++", "JavaScript", "C"}

-- prints everything together
print("Printed the table: " .. table.concat(table))

-- prints with spacing
print("Printed the table: " .. table.concat(table," "))

-- prints from second to third element
print("Printed the table: " .. table.concat(table," ",2,3))

-- removing the last index from the table:
table.remove(table)
print( table.concat( table,", " ) )

-- removing the 3rd index (JavaScript) from the table:
table.remove(table, 3)
print( table.concat( table,", " ) )

-- inserts an index(Rust) in the last position
table.insert(table, "Rust" )
print( table.concat( table," " ) )

-- inserts an index (PHP) in the 1st position
table.insert(table, 1, "PHP" )
print( table.concat( table," " ) )

-- informs the number of indexes in the table
print("The 'table' has: "..table.maxn(table) .. " indexes")
{% endhighlight %}

There are also the functions: `sort`, `foreach`, `foreachi` and `getn`. Find out more [here](https://www.lua.org/pil/2.5.html).

---

# Modules
The module is like a library that can be loaded using `require` and has a unique global name containing the code to be used.

Example: Using a function that is in the `my_module.lua` file of the `program.lua` program:

> `my_module.lua`
{% highlight lua %}
function my_function( param )
  print("You passed the parameter: " .. param)
end
{% endhighlight %}

> `lua program`
{% highlight lua %}
require "my_module"

my_function("Hello module!")
{% endhighlight %}

Another way to use and *instantiate* the module:

> `my_module.lua`
{% highlight lua %}
location mf = {}

function mf.my_function( param )
  print("You passed the parameter: " .. param)
end

return mp
{% endhighlight %}

> `lua program`
{% highlight lua %}
mf = require ("my_module")
mf.minha_funcao("Lua is awesome!")
{% endhighlight %}

---

# Working with [Shell](https://en.terminalroot.com.br/45-examples-of-variables-and-arrays-in-shell-script/)
Let's use the `os` native library


+ Getting environment variables

{% highlight lua %}
home = os.getenv("HOME")
pwd = os.getenv("PWD")
editor = os.getenv("EDITOR")

print("Your home directory is: " .. home)
print("You are in the directory: " ..pwd)
print("Your default editor is: " .. editor)
{% endhighlight %}

+ Executing commands

{% highlight lua %}
os.execute("echo 'Hello Shell via Lua!'")
os.execute("uptime")
os.execute("touch file.txt")
os.execute("ls")
{% endhighlight %}

+ Removing files:
{% highlight lua %}
os.remove("file.txt")
{% endhighlight %}

Learn more at: <https://www.lua.org/pil/22.1.html>


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

---

# Passing Parameters via the command line
To do this, use the reserved word: `arg`. See the examples below:

{% highlight lua %}
print( "The filename is: " .. arg[0])

print([[Number of arguments
via the command line: ]] .. #arg)

if( #arg > 0 ) then
  for i = 1.#arg do
    print("Argument "..i.." is "..arg[i])
  end
end

print("The command is: " .. arg[-1])
{% endhighlight %}

# MetaTables
A metatable is a table that helps modify the behavior of a table to which it is attached with the help of a set of related meta keys and methods. These metamethods are powerful Lua features that enable features like -
+ Change/add functionalities to operators at tables.
+ Searching meta-tables when key is not available in table using `__index` in meta-table.

There are two important methods that are used in handling metatables, which include -
+ `setmetatable(table, metatable)` - This method is used to set the metatable to a table.
+ `getmetatable (table)` - This method is used to get the metatable of a table.

Let's first look at how to define one table as a metatable of another. It is shown below.

{% highlight lua %}
my_table = {}
my_meta_table = {}
setmetatable( my_table , my_meta_table )
{% endhighlight %}

Or just:
{% highlight lua %}
my_table = setmetatable({}, {})
{% endhighlight %}

### Using `__index`
A simple example of a metatable to search the metatable when it is not available in the table is shown below.

{% highlight lua %}
my_table = setmetatable({key1 = "value1"}, {
   __index = function(my_table, key)

      if key == "key2" then
         return "Metatable value"
      else
         return my_table[key]
      end
   end
})

print(my_table.key1,my_table.key2)
{% endhighlight %}
> Output: `value1 MetatableValue`

Summarizing the code above:
{% highlight lua %}
my_table = setmetatable({key1 = "value1"},
   { __index = { key2 = "META TABLE VALUE" } })
print(my_table.key1,my_table.key2)
{% endhighlight %}

If an index doesn't exist and you want to add it when it's called and it doesn't exist you can use `__newindex` and create a method/function for that.

More information [here](https://www.tutorialspoint.com/lua/lua_metatables.htm).

---

# LuaJIT
LuaJIT is a Just-In-Time (JIT) Compiler for the Lua programming language. Its official website is: <https://luajit.org/> .

JIT is a technology that compiles a program at runtime.
> The LuaJIT implementation seems to outperform all other dynamic JIT languages ​​(V8, Tracemonkey, PLT Scheme, Erlang HIPE) by an order of magnitude.

To install LuaJIT use your system's package manager, examples:

{% highlight sh %}
sudo emerge luajit # Gentoo, Funtoo and similar
sudo apt install luajit # Debian, Ubuntu and similar
sudo pacman -S luajit # Arch, Manjaro and similar
sudo dnf install luajit # Fedora, Red Hat and similar
# ...
{% endhighlight %}

To use it, instead of using the `lua` command, use `luajit`, example:

{% highlight sh %}
luajit myprogram.lua
{% endhighlight %}

LuaJIT provides superior performance to the Lua interpreter.

As with any high-performance system, the answer in the end comes down to two things: algorithms and engineering. LuaJIT uses advanced compilation techniques and also has a very precise engineering implementation. For example, when sophisticated compilation techniques cannot handle a piece of code, LuaJIT resorts to a very fast interpreter written in x86 assembly.

LuaJIT earns double points in the engineering aspect, because not only is LuaJIT itself well designed, but the Lua language itself has a simpler and more coherent design than Python and JavaScript. This makes it (marginally) easier for an implementation to deliver consistently good performance.

---

# LuaRocks
LuaRocks is a package manager for the Lua programming language, similar to package managers for other languages ​​such as: [npm](https://terminalroot.com.br/tags#javascript)(JavaScript), [composer](https ://terminalroot.com.br/tags#php)(PHP), [gem](https://terminalroot.com.br/tags#ruby)(Ruby), [pip](https://terminalroot.com .br/tags#pythons)(Python) and among others.

Its official website is: <https://luarocks.org/>

Provides a standard format for distributing Lua modules (in a standalone format called "rock"), a tool designed to easily manage the installation of rocks, and a server to distribute them. Although not included in the Lua distribution, it is called a "de facto package manager for community-contributed Lua modules".

To install it also use your system's package manager, examples:

{% highlight sh %}
sudo emerge luarocks # Gentoo, Funtoo and similar
sudo apt install luarocks # Debian, Ubuntu and similar
sudo pacman -S luarocks # Arch, Manjaro and similar
sudo dnf install luarocks # Fedora, Red Hat and similar
# ...
{% endhighlight %}

To use it use the command `luarocks --help` .

---

