---
layout: post
title: "Read files with this CLI App made with C++"
date: 2024-05-05 20:59:21
image: '/assets/img/cpp/ftx-file-reader.jpg'
description: "Replaces the 'less' command for pagination. And more tips on how to control your terminal's default cursor via C++ and FTXUI!"
tags:
- cpp
- ftxui
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

If you want a good alternative to the `less` command of [Unix](https://terminalroot.com/tags#unix)/[GNU](https://terminalroot.com/tags#gnu), **ftxuiFileReader** is a good alternative.

It is a simple software made with [C++](https://terminalroot.com/tags#cpp) and the [FTXUI](https://terminalroot.com/create-graphical-programs-in-terminal-with-ftxui/) library!

---

# Compiling and installing ftxuiFileReader
To install, of course, you will need the basic dependencies, they are:
+ [Git](https://terminalroot.com/tags#git)
+ [G++](https://terminalroot.com/tags#gcc) or [Clang++](https://terminalroot.com/tags#clang)
+ [GNU Make](https://terminalroot.com/tags#make)
+ and [CMake](https://terminalroot.com/tags#cmake)
> The FTXUI library is automatically cloned as a dependency when running CMake!

Just clone, compile and run:
{% highlight bash %}
git clone https://github.com/J0sephDavis/ftxuiFileReader
cd ftxuiFileReader
cmake -B build .
cd build && make
{% endhighlight %}

After that, there will be a binary in the `build/` directory, where you ran `make`, with the same name as the program: `ftxuiFileReader`. Just run it and pass as an argument the path of the file you want to read, example:
{% highlight bash %}
./ftxuiFileReader /path/to/main.cpp
{% endhighlight %}

### The result will be similar to the GIF below:

![ftxuiFileReader GIF](https://github.com/ArthurSonzogni/ftxuiFileReader/assets/4759106/2dd434a1-7969-4d0b-b94c-ab635cd163ae)

---

# Installation with additional tips
Still within the directory you built: `build/` you can install it in the desired location on your system.

But, before that I recommend some changes for better usability of **ftxuiFileReader**, as there are some problems that I detected, they are:

#### First: There is a *bug* in the terminal cursor when finishing the program execution
When you run and exit the program, your terminal cursor changes to **blinking underline**(`_`). In my case I use (and it is defined by default) the **vertical line**(`|`) and it didn't look good.

To solve this, still within `build/`, I edited the source file `main.cc`:
{% highlight bash %}
vim ../src/main.cc
{% endhighlight %}

And before the `return EXIT_SUCCESS;` in the `main()` function on line **250** I added this `std::cout << "\x1b[\x35 q";`, looking like this:
{% highlight cpp %}
std::cout << "\x1b[\x35 q";
return EXIT_SUCCESS;
{% endhighlight %}

This works for me, as this `x35` is precisely to return to my cursor *blinking vertical line*. You can change it depending on your cursor, the alternatives are:
+ `std::cout << "\x1b[\x31 q";` → Changes to *blinking block*;
+ `std::cout << "\x1b[\x32 q";` → Change to *constant block*;
+ `std::cout << "\x1b[\x33 q";` → Changes to *blinking underline*;
+ `std::cout << "\x1b[\x34 q";` → Changes to *constant underscore*;
+ `std::cout << "\x1b[\x35 q";` → Changes to *blinking vertical line*;
+ `std::cout << "\x1b[\x36 q";` → Also changes to *constant vertical line*;
> The numbers actually start from `30` and can go even higher, however, the modifications will be similar to these! If you want, you can even declare one: `std::system("reset");`.

#### Use the modification depending on your terminal's **default cursor**, the one you chose!

Once this is done, just recompile:
> Remembering that recompilation takes much less time, as we only modify one file!
{% highlight bash %}
make
{% endhighlight %}

And to install, for example, in: `/usr/local/bin`, more recommended, I also suggest installing with a more **Unix style** name (only with lowercase letters and separated by dashes instead of capitalizations), example: `ftx-file-reader`:

{% highlight bash %}
sudo install -v ftxuiFileViewer /usr/local/bin/ftx-file-reader
{% endhighlight %}

Now you can even remove the cloned repository, e.g.: `cd ../.. && rm -rf ftxuiFileViewer` and use the modified `ftx-file-reader` command or the default one (`ftxuiFileReader`), if you modified it, example reading a `main.cpp` file:

{% highlight bash %}
ftx-file-reader main.cpp
{% endhighlight %}

> **Note**: You can exit the program by typing the letter `q`, for example, but there is a small *bug* that can display the typed character when exiting, but in the form of *detectable input*, example for `q`: `1R`. To resolve this, simply scroll the down arrow keypad line at least twice. In short, to exit, press the key combination: `↓ ↓ q`.

Any questions or improvement tips (getting the default cursor automatically and resetting it when exiting, for example) visit the [official repository](https://github.com/J0sephDavis/ftxuiFileReader).

There is other software made with FTXUI that we have already published here on the blog, you can read them by clicking on the links below:
+ [Listen to Music on Terminal with Spectrum](https://terminalroot.com/listen-to-music-in-terminal-with-spectrum/)
+ [View JSON interactively from the terminal](https://terminalroot.com/view-json-interactively-from-the-terminal/)
+ [Select Colors in Terminal with RGB-TUI](https://terminalroot.com/select-colors-in-terminal-with-rgb-tui/)
+ [Create Graphical Programs in Terminal with FTXUI](https://terminalroot.com/create-graphical-programs-in-terminal-with-ftxui/)


