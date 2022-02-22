---
layout: post
title: "How to hide input via CLI with C++"
date: 2022-02-22 09:46:41
image: '/assets/img/cppdaily/cli-cpp-en.jpg'
description: 'Both displaying empty and displaying asterisks during user typing.'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

<b style="font-size:24px;">O</b>ften we are developing an application that interacts with the user asking for the password and if he is doing it in the presence of someone or recording a video, the password will appear.

On most systems like [UNIX](https://terminalroot.com/tags#unix) this is already hidden by default. So let's see how to do it with [C++](https://terminalroot.com/tags#cpp) .

---

# Hiding the password
For this we will need to include the following headers:
{% highlight cpp %}
#include <iostream> // To use 'std::cout' and 'std::cin'
#include <termios.h> // To use 'termios' and 'tcsetattr'
#include <unistd.h> // To use 'STDIN_FILENO'
{% endhighlight %}

`iostream` is already known and commonly used by us.

`termios.h` is a library that contains the definitions used by the I/O interfaces of [terminal](https://terminalroot.com/tags#terminal) , it will be with it that we will hide the typed.

And `unistd.h` is a library that provides access to the POSIX operating system API and makes it compatible with any [operating system](https://terminalroot.com/tags#os) and [compiler](https: //terminalroot.com/tags#gcc).

After adding the headers, just:
+ Instantiate `termios`
+ Get the data from the terminal and store it in a variable with the `tcgetattr()` function
+ Create a new instance of `termios`, but this time to replicate the data from the previous instance so we can change
+ Hide the typed data and passing to the new instance with the `tcsetattr()` function after establishing the rule: `newt.c_lflag &= ~ECHO;`
+ Interact and get user-entered data with `std::cout`, `getline()` and `std::cin`, storing in a pre-declared variable
+ And finally, return the data display after finishing the program also with `tcsetattr`, but to return to the initial instance.
> Also in the code we added the data display (on the same line with `\r`) typed just for didactic reasons.


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

The code in short looks like this

> `vim hidden.cpp`
{% highlight cpp %}
#include <iostream>
#include <termios.h>
#include <unistd.h>

int main(int argc, char ** argv){
    termios oldt;
    tcgetattr(STDIN_FILENO, &oldt);
    termios newt = oldt;
    newt.c_lflag &= ~ECHO;
    tcsetattr(STDIN_FILENO, TCSANOW, &newt); // Hides

    std::string s;
    std::cout << "Enter your password: ";
    getline(std::cin, s);

    std::cout << "\rYour password is: " << s << '\n';
    tcsetattr(STDIN_FILENO, TCSANOW, &oldt); // return to display
    return EXIT_SUCCESS;
}
{% endhighlight %}
> Compile and run: `g++ hidden.cpp && ./a.out`

Example:
> Hide input, show password.

<img src="/assets/img/cppdaily/webp/1-empty-show-en-us.webp" loading="lazy" alt="Hide input, show password">

---

If during the optional `std::cout` you still want to replace the `std::string` with asterisks(`*`), add this snippet to your code:
{% highlight cpp %}
std::string n{};
for (int i{}; i < s.length(); ++i){
  n += "*";
}
std::cout << "\rYour password is: " << n << '\n'; // now display 'n' instead of 's'
{% endhighlight %}
> It will appear: `Your password is: ************` .

Example:
> Hide input, show asterisks.

<img src="/assets/img/cppdaily/webp/2-empty-aster-en-us.webp" loading="lazy" alt="Hides input, shows asterisks">


<!-- MINI ADS -->
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

We can see that the command in the terminal `stty -echo` (to hide the data typed in the terminal) and `stty echo` to return the display do the same thing. Note that the `stty` program/command makes use of the `termios.h` library.

---

# Displaying asterisks instead of empty or letters
I see a lot of people asking this question on [StackOverflow](https://stackoverflow.com/) and honestly I've never seen an effective solution that actually solves it the way one wants, not even using the `curses.h` library(Note, `curses.h`, also compiles with: `-lcurses -ltinfo`, not [NCURSES](https://terminalroot.com/tags#ncurses)) .

So, I created a way that solves this in a simple way, using `do while`, excluding `getline()` and using `getchar()` instead:
> Only the magic is on the line: `newt.c_lflag &= 'a';`, I replaced the `~ECHO` with any letter/character, in this `'a'`.

{% highlight cpp %}
#include <iostream>
#include <termios.h>
#include <unistd.h>

int main(int argc, char ** argv){
    termios oldt;
    tcgetattr(STDIN_FILENO, &oldt);
    termios newt = oldt;
    newt.c_lflag &= 'a'; // remove ~ECHO
    tcsetattr(STDIN_FILENO, TCSANOW, &newt); // Hides

    std::string s{}, current{};
    char c{};
    std::cout << "Enter your password: ";
    do {
      std::cout << current;
      s += c;
      current = "*";
    }while((c = getchar()) != '\n' && c != EOF);

    std::cout << "\rYour password is: " << s <<
    "                                 " << '\n';
    tcsetattr(STDIN_FILENO, TCSANOW, &oldt); // return to display
    return EXIT_SUCCESS;
}
{% endhighlight %}
> It will appear: `Enter your password: ************`, that is, asterisks instead of empty.

Example:
> Input asterisks, show password.

<img src="/assets/img/cppdaily/webp/3-asterisks-en-us.webp" loading="lazy" alt="Input, show password">

---

# Useful links
+ <https://pubs.opengroup.org/onlinepubs/7908799/xsh/termios.h.html>
+ <https://en.wikipedia.org/wiki/Unistd.h>
+ <https://pubs.opengroup.org/onlinepubs/7908799/xsh/unistd.h.html>
+ <https://en.wikipedia.org/wiki/POSIX_terminal_interface>

