---
layout: post
title: "How to get Mime-Type of files with C++"
date: 2024-05-16 10:39:09
image: '/assets/img/cpp/mime-types-cpp.jpg'
description: 'The correct way to avoid data insecurity!'
tags:
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**MIME** (*Multipurpose Internet Mail Extensions*) type is a standard used on the internet to indicate the type of content of a file.

> Originally developed to identify the types of files attached to emails, the MIME type is now widely used in different contexts, such as on the web, to indicate the type of content of files transmitted via the HTTP protocol.

Each file type is associated with a specific MIME type, which is represented by a string. For example, the MIME type for plain text files is text/plain, while the MIME type for JPEG images is `image/jpeg`. There are hundreds of standard MIME types that cover a variety of file types, from text documents to audio and video files.

In this article we will see how to identify the `mime-type` of a file using [C++](https://terminalroot.com/tags#cpp) in both [GNU+Linux](https://terminalroot.com/tags#gnulinux) and as a tip on [Windows](https://terminalroot.com/tags#windows).

---

# Identifying mime-type in Linux
To achieve this in [distribuições](https://terminalroot.com/tags#distro) [GNU+Linux](https://terminalroot.com/tags#gnulinux) we will use the library [libmagic](https://terminalroot.com/tags#https://man.netbsd.org/libmagic.3).

It is the library used by the [file](https://darwinsys.com/file/) command, which will include the [magic.h](https://github.com/torvalds/linux/blob/master) header /include/uapi/linux/magic.h) which is linked in a [static](https://en.wikipedia.org/wiki/Static_library)([static](https://www.ibm.com/docs/en-us/integration-bus/10.0?topic=libraries-static)).

To install you can use your system's package manager, some examples below:

{% highlight bash %}
sudo apt install libmagic-dev # Debian, Ubuntu, Mint, ...
sudo pacman -S libmagic # Arch
sudo dnf install file-devel # Fedora
brew install libmagic # macOS
{% endhighlight %}

If you don't find it in your system's repository, <u>you can compile from scratch</u>:
> Remember before you have the compilation tools: [gcc](https://terminalroot.com/tags#gcc), [make](https://terminalroot.com/tags#make), in addition to [wget](https://en.wikipedia.org/wiki/Wget) to download the tarball.

{% highlight bash %}
wget ftp://ftp.astron.com/pub/file/file-5.40.tar.gz
tar -xzf file-5.40.tar.gz
cd file-5.40
./configure
makeup
sudo make install
{% endhighlight %}
> [See here the path where the files are installed](https://gist.github.com/terroo/8adeb310dac49dca7eb5529b53600ac8)

For this example, let's see the `mime-type` of this image below which is in PNG format, download it by right-clicking on the image and clicking: *Save as* in the directory where the code binary will be .

![image: cpp-icon.png, for download](/assets/img/cpp/cpp-icon.png)
> `cpp-icon.png`

Create a `main.cpp` file and paste the code below:
> The code is properly commented explaining each block of code to clarify actions.

{% highlight cpp %}
// Include libmagic and iostream to write to standard output
#include <iostream>
#include <magic.h>

int main() {
   // Start the cookie
   magic_t magic_cookie;

   // Inform the file we want to see the mime-type
   const char *file_path = "cpp-icon.png";

   // Initialize libmagic
   magic_cookie = magic_open(MAGIC_MIME_TYPE);
   if (magic_cookie == NULL) {
     std::cerr << "Unable to initialize libmagic\n";
     return 1;
   }

   // Load definitions from the mime types database
   if (magic_load(magic_cookie, NULL) != 0) {
     std::cerr << "Unable to load database definitions\n";
     magic_close(magic_cookie);
     return 1;
   }

   // Determines the MIME type of the file
   const char *mime_type = magic_file(magic_cookie, file_path);
   if (mime_type == NULL) {
     std::cerr << "Unable to determine the MIME type of the file\n";
     magic_close(magic_cookie);
     return 1;
   }

   std::cout << "MIME type of file: " << mime_type << "\n";

   // Close libmagic
   magic_close(magic_cookie);

   return 0;
}
{% endhighlight %}

Once that's done, just compile it, pass the `-lmagic` flag and run:
{% highlight bash %}
g++ main.cpp -lmagic
./a.out
{% endhighlight %}

The possible and probable output will be:
{% highlight bash %}
MIME type of file: image/png
{% endhighlight %}

Note that if we change the file extension to any extension, even though the file manager displays an icon referring to the extension, *libmagic* is safe and correct in this regard, it will show the true mime-type of that file.
> This happens a lot in systems where malicious people want to run code on the Web and the page asks to load only the file: jpeg and png, but they only change the extension, but in fact the file is a *script*.

If I rename the file to `.mp4`, for example:
{% highlight bash %}
mv cpp-icon.png cpp-icon.mp4
{% endhighlight %}

And change the code to load `cpp-icon.mp4`:
{% highlight cpp %}
const char *file_path = "cpp-icon.mp4";
{% endhighlight %}

After compiling and running, you will see that libmagic will display the **CORRECT Mime-Type!** and not the extension.

---

# Tip to identify Mime-Type on Windows
On [Windows](https://terminalroot.com/tags#windows), you can use `urlmon.h` with the code below:

{% highlight cpp %}
#include <iostream>
#include <urlmon.h>
#include <windows.h>

#pragma comment(lib, "urlmon.lib")

int main() {
     LPCWSTR file_path = L"file_path";
     LPWSTR mime_type = NULL;

     HRESULT hr = FindMimeFromData(NULL, file_path, NULL, 0, NULL, 0, &mime_type,
0); if (SUCCEEDED(hr) && mime_type != NULL) { std::wcout << L"MIME type do
file: " << mime_type << std::endl; CoTaskMemFree(mime_type); } else {
         std::cerr << "Unable to determine the MIME type of the file\n";
     }

     return 0;
}
{% endhighlight %}

Remembering that for you to be able to compile, you need to enable `urlmon.dll` in the Windows Registry, as described [in this link](https://answers.microsoft.com/en-us/windows/forum/all/lost-urlmondll/13eddedb-444c-40b8-9bf6-871f95741eee).

---

# Beware of fakes!
There are several C++ *"libraries"* on GitHub that do a **FAKE MIME-TYPE**, that is, if we do the procedure we described above of renaming the file extension, these "*libraries*" tell us the incorrect mime-type. This is unsafe and dangerous!

For example, I found this one <https://github.com/lasselukkari/MimeTypes>, if you clone it:
{% highlight bash %}
git clone https://github.com/lasselukkari/MimeTypes
{% endhighlight %}

Use this example after renaming the extension:
{% highlight cpp %}
#include <iostream>
#include "MimeTypes/MimeTypes.h"

int main(){
   std::cout << MimeTypes::getType("./cpp-icon.mp4") << '\n';
   return 0;
}
{% endhighlight %}

Compile your file and `MimeTypes.cpp` from this repository:
{% highlight bash %}
g++ main.cpp MimeTypes/MimeTypes.cpp
{% endhighlight %}

After running, note that it will incorrectly report the MIME type of the file:
{% highlight bash %}
video/mp4
{% endhighlight %}

This does not happen with `libmagic`!

---

Not all repositories on GitHub do a *fake mime-type*, but be aware of these cases!

