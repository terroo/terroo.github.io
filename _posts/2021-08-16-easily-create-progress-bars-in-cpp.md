---
layout: post
title: "Easily Create Progress Bars in C++"
date: 2021-08-16 19:53:04
image: '/assets/img/cpp/indicators.jpg'
description: 'Various styles of progress bars.'
featured-img: ../cpp/indicators.jpg
tags:
- cpp
- cppdaily
---

![Easily Create Progress Bars in C++](/assets/img/cpp/indicators.jpg)

**Indicators** is a project that has code ready for you to implement when creating progress bars in the [terminal](https://en.terminalroot.com.br/the-10-best-terminal-emulators-for-your-linux/).

## Characteristics
+ Thread-safe progress bars and spinners
+ Header-only library. Take a copy to include.
+ Single header version in `single_include`.
+ The source of the GIF
+ MIT License

## Creating a Basic Progress Bar
To implement a progress bar in your app, add `indicators/progress_bar.hpp` and create a ProgressBar object. This is the general structure of a progress bar:
{% highlight bash %}
{prefix} {start} {fill} {lead} {remaining} {end} {percentage} [{elapsed}<{remaining}] {postfix}
         ^^^^^^^^^^^^^ Bar Width ^^^^^^^^^^^^^^^
{% endhighlight %}

The amount of progress in ProgressBar is kept as a `size_t` in the range *[0, 100]*. When the progress reaches 100, the progression is complete.

In application-level code, there are two ways to update this progress: Update progress using `bar.tick()`

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

![Progress Bar](https://raw.githubusercontent.com/p-ranav/indicators/master/img/progress_bar_tick.gif)

{% highlight cpp %}
#include <indicators/progress_bar.hpp>
#include <thread>
#include <chrono>

int main() {
  using namespace indicators;
  ProgressBar bar{
    option::BarWidth{50},
    option::Start{"["},
    option::Fill{"="},
    option::Lead{">"},
    option::Remainder{" "},
    option::End{"]"},
    option::PostfixText{"Extracting Archive"},
    option::ForegroundColor{Color::green},
    option::FontStyles{std::vector<FontStyle>{FontStyle::bold}}
  };

  // Update bar state
  while (true) {
    bar.tick();
    if (bar.is_completed())
      break;
    std::this_thread::sleep_for(std::chrono::milliseconds(100));
  }

  return 0;
}
{% endhighlight %}

# Another examples
Indeterminate progress bar

![Progress Bar](https://raw.githubusercontent.com/p-ranav/indicators/master/img/indeterminate_progress_bar.gif)

Blocked progress bar

![Progress Bar](https://raw.githubusercontent.com/p-ranav/indicators/master/img/block_progress_bar.gif)

Spinners

![Spinners](https://raw.githubusercontent.com/p-ranav/indicators/master/img/progress_spinner.gif)

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Implemented in real life
If you have an iso of say *5GB* and you want to copy it to another directory, the code would be;

{% highlight cpp %}
#include <indicators/indeterminate_progress_bar.hpp>
#include <indicators/cursor_control.hpp>
#include <atomic>
#include <filesystem>
#include <thread>
#include <chrono>
namespace fs = std::filesystem;

int main() {

  // Configure an indeterminate progress bar
  indicators::IndeterminateProgressBar bar{
      indicators::option::BarWidth{40},
      indicators::option::Start{"["},
      indicators::option::Fill{"·"},
      indicators::option::Lead{"<==>"},
      indicators::option::End{"]"},
      indicators::option::PostfixText{"Copying file..."},
      indicators::option::ForegroundColor{indicators::Color::yellow},
      indicators::option::FontStyles{
          std::vector<indicators::FontStyle>{indicators::FontStyle::bold}}
  };

  indicators::show_console_cursor(false);

  // Setup a file copy job to run in a separate thread
  auto copyfile_job = [&bar]() {
    const std::string src = "/home/user/5GB.iso";
    const std::string dst = "/home/user/Downloads/5GB.iso";

    try {
        auto done = fs::copy_file(src, dst, fs::copy_options::overwrite_existing);
        if (done) {
            std::cout << termcolor::bold << termcolor::green 
                << "Copy completed\n" << termcolor::reset;
        } 
        else {
            std::cout << termcolor::bold << termcolor::red 
                << "Copy failed\n" << termcolor::reset;
        }
    }
    catch (std::exception& e) {
        std::cout << e.what() << "\n";
    }

    // When the job is done, mark the progress bar as completed
    bar.mark_as_completed();
  };
  std::thread copyfile_job_completion_thread(copyfile_job);

  // Update bar state and wait for copy to complete
  while (!bar.is_completed()) {
    bar.tick();
    std::this_thread::sleep_for(std::chrono::milliseconds(100));
  }

  copyfile_job_completion_thread.join();
  
  indicators::show_console_cursor(true);  
  return 0;
}
{% endhighlight %}

# Installing indicators and compiling your code
Just clone and use [CMake](https://en.terminalroot.com.br/how-to-compile-your-programs-with-cmake/) and [Make](https://en.terminalroot.com.br/how-to-create-a-makefile/)

{% highlight bash %}
git clone https://github.com/p-ranav/indicators
cd indicators
mkdir build && cd build
cmake -DINDICATORS_SAMPLES=ON -DINDICATORS_DEMO=ON ..
make
cd
vim filecopy.cpp
g++ -pthread -std=c++17 filecopy.cpp
{% endhighlight %}


For more examples and with the code ready visit the official Indicators repository:
### <https://github.com/p-ranav/indicators/>


    
