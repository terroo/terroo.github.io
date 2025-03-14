---
layout: post
title: "How to Automate Encryption with C++ Script"
date: 2025-03-14 16:17:37
image: '/assets/img/cppdaily/gnupg-cpp-terlang.png'
description: "🚀 From the C++ as Shell Script series"
tags:
- cpp
- cppdaily
- gnupg
- shellscript
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The other day I noticed that I had compressed several files as backups on a DVD media (the DVDs were at least [15 years old](https://www.instagram.com/p/DGWWW2-S4f4/?img_index=1)) and I had also encrypted all of them with [GnuPG](https://gnupg.org/).

And all of these files had the same password for `.gpg` and I needed to know what was inside them.

Since many of the files were [very long](https://www.instagram.com/p/DGWWW2-S4f4/?img_index=1), there were even files larger than 5GB =)

I was about to start writing the [shell script](https://terminalroot.com/tags#shellscript) code to decrypt and unpack them all at once to find out what was inside them.

But, I remembered the [limpeza](https://terminalroot.com/using-cpp-as-shell-script/) command and this could be quick to write the code, but it would take me a lot of time to execute.

I could use the [GPGME](https://www.gnupg.org/software/gpgme/index.html) API and create it directly via C++ code, but it's not a complete application, it's just a basic *little script*!!!

So, I decided, once again, to create a script that could be done with [GNU Bash](https://terminalroot.com/tags#bash) in [C++](https://terminalroot.com/tags#cpp).


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

## Introduction
First, **what is GnuPG?**

[GnuPG](https://gnupg.org/) is the acronym for: "**GNU** **P**rivacy **G**uard (GnuPG or GPG)" is a [free software](https://terminalroot.com/tags#freesoftware) alternative to Symantec's PGP cryptographic software suite.

**GnuPG** is part of the [Free Software Foundation](https://www.fsf.org/) and the [GNU Project](https://terminalroot.com/tags#gnu). In addition, it received great sponsorship from the German Government.

### Installing GnuPG
Use your operating system's package manager, examples:

+ On [Windows](https://terminalroot.com/tags#windows)
{% highlight bash %}
winget install --id=GnuPG.GnuPG -e
{% endhighlight %}
> Via: <https://winstall.app/apps/GnuPG.GnuPG> or <https://winget.run/pkg/GnuPG/GnuPG>.

+ On [macOS](https://terminalroot.com/tags#macos)
{% highlight bash %}
brew install gnupg
{% endhighlight %}
> Via: <https://formulae.brew.sh/formula/gnupg>

+ On Ubuntu
{% highlight bash %}
sudo apt install gnupg
{% endhighlight %}

### Basic use of GnuPG
Let's suppose you have a folder named `files/` and you compressed it in `.zip` format and it became: `files.zip`.

If you want to protect it with a password and encryption, just run the command:
{% highlight bash %}
gpg -c files.zip
{% endhighlight %}

Next, you will be asked for a password and confirmation of the password to create the file: `files.zip.gpg`. Only those who have access to this password will be able to decrypt it.

The cool (and dangerous) thing is that you can enter the password via the command line, both for encryption and decryption, and this can save you time from having to enter interactive mode and type password after password...

And it was thinking about not suffering from this repetitive *boredom/stress* that I had this idea!

---

## Creating the C++ script
First of all, these `.gpg` type files were mixed with other types of files and I didn't want to filter them, because keeping them where they were was ideal before sending them to my local server here at home. So, they will also include the `<filesystem>` header to handle these files:

{% highlight cpp %}
#include <iostream>
#include <filesystem>
#include <vector>

namespace fs = std::filesystem;

int main(){
    // Indicate the path of the folder, in this case, where the script is
    std::string directory_path = "./"; std::vector<std::string> gpg_files {};

    // Check if directory exists
    if (!fs::exists(directory_path) || !fs::is_directory(directory_path)) {
        std::cerr << "Directory does not exist or is not valid." << std::endl;
        return 1;
    }

    // Iterate over files in directory
    for (const auto& entry : fs::directory_iterator(directory_path)) {
        if (entry.is_regular_file() && entry.path().extension() == ".gpg") {
            gpg_files.push_back(entry.path().filename().string()); }
    }

    // Optional
    // Displays the names of the .gpg files found
    std::cout << "Found .gpg files:" << std::endl;
    for (const auto& file : gpg_files) {
        std::cout << file << ' ';
    }
    std::cout.put('\n');

    // Set the password for all files
    std::string str = "SECRET_PASSWORD";
}
{% endhighlight %}

Now just run the command to decrypt the files found and listed:
{% highlight cpp %}
for (const auto& file : gpg_files) {
    std::string com = "gpg --yes --batch --passphrase=" + str + " " + file + " 2>/dev/null"; std::cout << "Decrypting: " << file << std::endl;
    std::system(com.data());
}
{% endhighlight %}

I would still automatically unpack them by adding them to the `loop`, but I gave up, in this case using the [extract](https://github.com/terroo/extract) command because the types could vary: `zip`, `rar`, `tar.gz`,...
{% highlight cpp %}
// filename equals file to separate the logic
std::string filename = file;

// Remove the .gpg from the filename
if (filename.size() >= 4) {
    filename = filename.substr(0, filename.size() - 4);
}

// Execute
std::string extract = "/usr/bin/extract " + filename;
std::cout << extract << std::endl;
std::system(extract.data());
{% endhighlight %}

I gave up doing this because it would mix up my specific task, and then I tried it, but the result was not so good.

The complete code is: `decript.cpp`

{% highlight cpp %}
#include <iostream>
#include <filesystem>
#include <vector>

namespace fs = std::filesystem;

int main(){
    // Indicate the path of the folder, in this case, where the script is
    std::string directory_path = "./";
    std::vector<std::string> gpg_files {};

    // Check if the directory exists
    if (!fs::exists(directory_path) || !fs::is_directory(directory_path)) {
        std::cerr << "The directory does not exist or is not valid." << std::endl;
        return 1; }

    // Iterate over the files in the directory
    for (const auto& entry : fs::directory_iterator(directory_path)) {
        if (entry.is_regular_file() && entry.path().extension() == ".gpg") {
            gpg_files.push_back(entry.path().filename().string());
        }
    }

    // Optional
    // Print the names of the .gpg files found
    std::cout << "Found .gpg files:" << std::endl;
    for (const auto& file : gpg_files) {
        std::cout << file << ' ';
    }
    std::cout.put('\n');

    // Set the password for all files
    std::string str = "SECRET_PASSWORD"; }

{% endhighlight %}

If you want to do the same script, but to create `.gpg` files with passwords dynamically, replace `com` with:
{% highlight cpp %}
std::string com = "gpg --yes --batch --passphrase=" + str + " -c " + file;
{% endhighlight %}
> Note the use of `-c`.


<!-- RECTANGLE 2 - OnParagragraph -->
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
## Final script
> `decript.cpp`

{% highlight cpp %}
#include <iostream>
#include <filesystem>
#include <vector>

namespace fs = std::filesystem;

int main(){
    std::string directory_path = "./";
    std::vector<std::string> gpg_files {};

    if (!fs::exists(directory_path) || !fs::is_directory(directory_path)) {
        std::cerr << "The directory does not exist or is not valid." << std::endl;
        return 1;
    }

    for (const auto& entry : fs::directory_iterator(directory_path)) {
        if (entry.is_regular_file() && entry.path().extension() == ".gpg") {
            gpg_files.push_back(entry.path().filename().string());
        }
    }

    std::cout << ".gpg files found:" << std::endl;
    for (const auto& file : gpg_files) {
        std::cout << file << ' ';
    }
    std::cout << "\n\n";

    std::string str = "SECRET_PASSWORD";

    for (const auto& file : gpg_files) {
        std::string com = "gpg --yes --batch --passphrase=" + str + " " + file + " 2>/dev/null";
        std::cout << "Decrypting: " << file << std::endl;
        int run = std::system(com.data());
        if(run != 0){
            std::cerr << "Failed to run: " << com << std::endl;
        }
    }

    return EXIT_SUCCESS;
}
{% endhighlight %}

If you want to ensure that there is no memory violation, compile:
{% highlight bash %}
g++ -g -Wpedantic -Wall -Werror -fsanitize=address decript.cpp
{% endhighlight %}

But, to run, add [more speed in execution](https://terminalroot.com/8-flags-to-drastically-improve-the-speed-of-your-software/):
{% highlight bash %}
g++ -Ofast decript.cpp
{% endhighlight %}

Then just run: `./a.out`.

To extract, I used a script in [Terlang](https://github.com/terroo/terlang):
> `vim unzip.ter`

{% highlight cpp %}
auto files = {"TheDir.tar.gz", "MyFolder.zip", "BigData.tar.gz"}
auto filesSize = 3

for(auto i = 0; i < filesSize; ++i){
    output("Unpacking: " + files[i])
    exec("extract " + files[i])
}
{% endhighlight %}

---

And so, I did, in my own way, a task that could take me a long time, quickly and practically! 😃

