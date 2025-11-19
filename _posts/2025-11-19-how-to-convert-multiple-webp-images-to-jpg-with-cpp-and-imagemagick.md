---
layout: post
title: "How to Convert Multiple WEBP Images to JPG with C++ and ImageMagick"
date: 2025-11-19 12:26:41
image: '/assets/img/cpp/w2j.jpg'
description: "🪄 With speed and precision."
tags:
- magick
- imagemagick
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

A long time ago, I had created a [script](https://terminalroot.com/tags#shell) where I could just enter a folder, run a command, and even with multiple files, it would convert WEBP images to JPG.

However, besides occasionally witnessing *conversion failures*, there was a time I had a folder with many `.webp` files and noticed a *slight* **slowness**.

So, I decided to rewrite the code in [C++](https://terminalroot.com/tags#cpp).


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

## Code
First of all, you need to have `ImageMagick Dev` (the `.h` API) installed on your machine. To do this, run:
> Example for systems with APT:

{% highlight bash %}
sudo apt install imagemagick graphicsmagick-libmagick-dev-compat
{% endhighlight %}

Now create the [C++](https://terminalroot.com/tags#cpp) file, for example: `main.cpp` and paste this code inside.
> The code itself is self-explanatory; it lists the `.webp` files, converts them to `.jpg`, and after that, removes the `.webp` files. If there are no `.webp` files in the directory where you run the binary, it issues a warning.

{% highlight cpp %}
#include <Magick++.h>
#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

int main(int argc, char **argv){
  (void)argc;
  Magick::InitializeMagick(*argv);

  bool found = false;

  for(const auto &entry : fs::directory_iterator(fs::current_path())){
    if(entry.is_regular_file() && entry.path().extension() == ".webp"){
      found = true;
      std::string input = entry.path().string();

      fs::path out_path = entry.path();
      out_path.replace_extension(".jpg");
      std::string output = out_path.string();

      try{
        Magick::Image img(input);
        img.write(output);
        fs::remove(entry.path());
      }catch(Magick::Exception &e){
        std::cerr << input << ": " << e.what() << "\n";
        return EXIT_FAILURE;
      }
    }
  }

  if(!found){
    std::cout << "There are no images to convert.\n";
  }
}
{% endhighlight %}

Compile with `-ffast-math` for even faster binary execution:

{% highlight bash %}
g++ -ffast-math -o w2j $(Magick++-config --cxxflags --cppflags) main.cpp $(Magick++-config --ldflags --libs)
{% endhighlight %}

After that, just install it:

{% highlight bash %}
sudo install -v w2j /usr/local/bin/
{% endhighlight %}

Then just use it, for example:
{% highlight bash %}
cd folder/with/many/webp/
w2j
{% endhighlight %}

And all WEBP files will be converted to JPG and automatically deleted at the end.

Just out of curiosity, the [GNU Bash](https://terminalroot.com/tags#bash) script that did this was this:

{% highlight bash %}
w2jpg(){
    shopt -s nullglob
    local files=( *.webp )

    (( ${#files[@]} == 0 )) && {
        echo "No images to convert."
        return
    }

    for f in "${files[@]}"; do
        convert "$f" "${f%.webp}.jpg"
    done

    rm -- *.webp
}
{% endhighlight %}

---

## See also:
### [How to Combine Images with C++ and ImageMagick](https://terminalroot.com.br/2025/11/como-combinar-imagens-com-cpp-e-imagemagick.html)


