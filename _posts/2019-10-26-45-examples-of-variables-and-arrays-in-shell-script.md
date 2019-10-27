---
layout: post
title: "45 Examples of Variables and Arrays in Shell Script"
date: 2019-10-26 22:08:03
image: '/assets/img/'
description:
featured-img: ../bash/bashlogo.jpg
tags:
---

![45 Examples of Variables and Arrays in Shell Script](/assets/bash/bashlogo.jpg)

1 - Create a variable, **${var}** is the same as $ var, but not ambiguous.
{% highlight bash %}
var="http://www.terminalroot.com.br/"
echo $var
http://www.terminalroot.com.br/
{% endhighlight %}

2 - Return string length
{% highlight bash %}
echo ${#var}
31
{% endhighlight %}

3 - Execute the contents of $ var (same as 'eval \$$var')
{% highlight bash %}
echo ${!var}
{% endhighlight %}

4 - Returns variable names beginning with 'U'
{% highlight bash %}
echo ${!U*}
UID USER USERNAME
{% endhighlight %}

5 - Returns the text from position 7
{% highlight bash %}
echo ${var:7}
www.terminalroot.com.br/
{% endhighlight %}

6 - Returns 8 characters from position 11
{% highlight bash %}
echo ${var:11:8}
terminal
{% endhighlight %}


7 - Cut 'http://' from beginning of string
{% highlight bash %}
echo ${var#http://}
www.terminalroot.com.br/
{% endhighlight %}

8 - Cut '.com.br/' from end of string
{% highlight bash %}
echo ${var%.com.br/}
http://www.terminalroot
{% endhighlight %}


9 - Replaces 'terminalroot' with 'aurelio' once
{% highlight bash %}
echo ${var/terminalroot/aurelio} 
http://www.aurelio.com.br/
{% endhighlight %}

10 - Replaces 'o' with 'O', always
{% highlight bash %}
echo ${var//o/O}
http://www.terminalrOOt.cOm.br/
{% endhighlight %}

11 - If string starts with 'http', replace 'http' with 'Site'
{% highlight bash %}
echo ${var/#http/Site}
Site://www.terminalroot.com.br/
{% endhighlight %}

12 - If string ends with 'st', replace 'st' with 'STING'
{% highlight bash %}
var2="test"
echo ${var2/%st/STING}
teSTING
{% endhighlight %}

13 - **""** (double quotation marks) protect a string, but recognize **$**, **\\** and **`** as specials
{% highlight bash %}
echo "$var"
http://www.terminalroot.com.br/
{% endhighlight %}

14 - **''** (single quotes) protects a string, but recognizes **$**, **\\** and **`** as specials
{% highlight bash %}
echo '$var'
$var
{% endhighlight %}

15 - **$'...'** (dollar sign before single quotes) protects a string completely, but interprets **\\n**, **\\t**, **\\a**, etc.
{% highlight bash %}
echo $'$var\n'
$var
{% endhighlight %}

16 - `...` (between crases) Execute commands in a subshell, returning the result
{% highlight bash %}
echo `ls`
Desktop Documents Downloads Images Templates Music Public Videos
{% endhighlight %}

17 - Execute commands on a subshell
{% highlight bash %}
(ls)
Desktop Documents Downloads Images Templates Music Public Videos
{% endhighlight %}

18 - Execute commands on a subshell, returning the result
{% highlight bash %}
echo $(ls)
Desktop Documents Downloads Images Templates Music Public Videos
{% endhighlight %}

19 - Tests an arithmetic operation, returning 0 or 1
{% highlight bash %}
((11>9))
{% endhighlight %}

20 - Returns the result of an arithmetic operation.
{% highlight bash %}
echo $((11-9))
2
{% endhighlight %}

21 - Tests an expression, returning 0 or 1 (alias of command 'test')
{% highlight bash %}
[[ $var ]] && echo 'It's bigger'
It's bigger
{% endhighlight %}

22 - Tests an expression, returning 0 or 1 (can use **&&** and **||** )
{% highlight bash %}
[[ $var ]] && echo 'Is there this variable'
Is there this variable
{% endhighlight %}

23 - Special Variables

| Variable | Positional Parameters |
|---|---|
| `$0` | Parameter Number 0 (Name of Command or Function) |
| `$1` | Parameter Number 1 (from command line or function) |
| `...` | Parameter number N ... |
| `$9` | Parameter Number 9 (from command line or function) |
| `${10}` | Parameter Number 10 (from command line or function) |
| `...` | Parameter number NN ... |
| `$#` | Total number of command line or function parameters |
| `$*` | All parameters as a single string |
| `$@` | All parameters, such as multiple protected strings |
      
| Variable | Miscellania |
|---|---|
| `$$` | PID number of current process (from script itself) |
| `$!` | PID number of last background job |
| `$_` | Last argument of last command executed |
| `$?` | Return code from last command executed |


25 - Special escapes to use at prompt (PS1)

| Escape | Reminder | Expands to ... |
|---|---|---|
| `\a` | Alert | Alert (beep) |
| `\d` | Date | Date in "Weekday Month Day" format (Sat Jan 15) |
| `\e` | Escape | Esc Character |
| `\h` | Hostname | Machine Name Without Domain (dhcp11) |
| `\H` | Hostname | Full Machine Name (dhcp11.company) |
| `\j` | Jobs | Number of Active Jobs |
| `\l` | Tty | Current Terminal Name (ttyp1) |
| `\n` | Newline | Newline |
| `\r` | Return | Return by car | 
| `\s` | Shell | Name of the shell (basename $ 0) |
| `\t` | Time | Time in 24-hour format HH: MM: SS |
| `\T` | Time | 12-hour format HH: MM: SS |
| `\@` | At | Time in 12-hour format HH: MM am/pm |
| `\A` | At | Time in 24-hour format HH:MM |
| `\u` | User | Current user login |
| `\v` | Version | Bash Version (2.00) |
| `\V` | Version | Bash Version  Subversion (2.00.0) |
| `\w` | Working Dir | Current directory, full path ($PWD) |
| `\W` | Working Dir | Current directory, only the last one (basename $PWD) |
| `\!` | History ico | Current command number in history |
| `\#` | Number | Current command number |
| `\$` | ID > | Show "#" if root, "$" if normal user |
| `\nnn` | Octal | Character whose octal is nnn |
| `\\` | Backslash | Backslash \ literal |
| `\[` | Escapes | Starts a sequence of escapes (color coded type) |
| `\]` | Escapes | Ends an escape sequence |

27 - Formatters of the date Command

| Format | Description |
|---|---|
| `%a` | Abbreviated Weekday Name (Sun..Sab) |
| `%A` | Name of the day of the week (Sunday..Saturday) |
| `%b` | Abbreviated Month Name (Jan. Dec) |
| `%B` | Name of the month (January.December) |
| `%c` | Complete date (Sat Nov 04 12:02:33 EST 1989) |
| `%y` | Year (two digits) |
| `%Y` | Year (four digits) |
| `%m` | Month (01..12) |
| `%d` | Day (01..31) |
| `%j` | Day of the year (001..366) |
| `%H` | Hours (00..23) |
| `%M` | Minutes (00..59) |
| `%S` | Seconds (00..60) |
| `%s` | Seconds since January 1, 1970 |
| `%%` | A % literal |
| `%t` | One TAB |
| `%n` | A line break |


28 - Printf Command Formatters

| Format | Description |
|---|---|
| `%d` | Decimal number |
| `%o` | Octal Number |
| `%x` | Hexadecimal Number (a-f) |
| `%X` | Hexadecimal Number (A-F) |
| `%f` | Floating-point number |
| `%e` | Number in scientific notation (e + 1) |
| `%E` | Number in scientific notation (E + 1) |
| `%s` | String |


29 - To know all local variables, execute
{% highlight bash %}
set
{% endhighlight %}
or, and open txt to see later
{% highlight bash %}
set > VariablesLocations.txt
{% endhighlight %}

30 - Global Variables, to know all global variables, execute
{% highlight bash %}
env
{% endhighlight %}
or
{% highlight bash %}
printenv
{% endhighlight %}

31 - To assign a value to a local variable
{% highlight bash %}
LINUX=free
echo $LINUX
free
{% endhighlight %}

32 - check if the variable created in the previous item appears in the list of local variables
{% highlight bash %}
set | grep LINUX
LINUX=free
{% endhighlight %}

33 - Now let's make this local variable a global variable.
{% highlight bash %}
export LINUX
env | grep LINUX
LINUX=free
{% endhighlight %}

34 - Delete a 'local environment variable' from memory using unset command
{% highlight bash %}
unset LINUX
echo $LINUX
{% endhighlight %}

35 - Create an alias (nickname for a command or program), you can still include it in your ~/.bashrc
{% highlight bash %}
alias list='ls -la color=auto'
{% endhighlight %}

36 - Destroying an aliase
{% highlight bash %}
unalias list
{% endhighlight %}

37 - Verify all commands entered
{% highlight bash %}
history
{% endhighlight %}

run command by his number in history
{% highlight bash %}
!468
{% endhighlight %}
execute last command typed
{% highlight bash %}
!!
{% endhighlight %}
they stay in bash_history
{% highlight bash %}
cat ~/.bash_history
{% endhighlight %}
clear history
{% highlight bash %}
history -c
{% endhighlight %}

38 - Command Line Interpreters
> **$** - Shell of an ordinary user;
> 
> **#** - Superuser shell root (administrator)

Check of Available Shells
{% highlight bash %}
cat /etc/shells
{% endhighlight %}

Variable that shows the SHELL you use
{% highlight bash %}
echo $SHELL
{% endhighlight %}

39 - Creating an Array (Array) "Variable Set"
{% highlight bash %}
DISTROS=("Debian" "Trisquel" "Ubuntu" "RedHat")
{% endhighlight %}
If you print the DISTROS Array as a variable, it prints variable 0, the array displays the variables contained in it starting at 0 (zero), so it would be the same as printing at 
`${DISTROS[0]}`
{% highlight bash %}
echo $DISTROS
{% endhighlight %}

40 - Print element 1 of array DISTROSS
{% highlight bash %}
echo ${DISTROS[1]}
Trisquel
{% endhighlight %}

41 - You can also create an array by inserting element one at a time.
{% highlight bash %}
DISTROS[0]="Debian"
DISTROS[1]="Trisquel"
DISTROS[2]="Ubuntu"
DISTROS[3]="RedHat"
{% endhighlight %}

42 - Change element 2 of array DISTROSS
{% highlight bash %}
DISTROS[2]="Linux Mint"
echo ${DISTROS[2]}
Linux Mint
{% endhighlight %}

43 - Display Element 2 Distro to End
{% highlight bash %}
echo ${DISTROS[@]:2} 
Ubuntu RedHat
{% endhighlight %}

44 - This displays the elements starting at position 1 followed by two more elements consecutive to position 1
{% highlight bash %}
echo ${DISTROS[@]:1:2} 
Trisquel Ubuntu
{% endhighlight %}

45 - Know how many elements the array has DISTROSS
{% highlight bash %}
echo ${#DISTROS[@]} 
4
{% endhighlight %}


# Thanks!

