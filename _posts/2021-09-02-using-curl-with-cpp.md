---
layout: post
title: "Using cURL with C++"
date: 2021-09-02 01:02:16
image: '/assets/img/cpp/curl-cpp.jpg'
description: 'A basic example code, but already useful for understanding how it works.'
featured-img: ../cpp/curl-cpp.jpg
tags:
- cpp
- cppdaily
---

![Using cURL with C++](/assets/img/cpp/curl-cpp.jpg)

**cURL** really is an awesome library and in *cpp::daily* we're basically going to talk about using it with [C++](https://en.terminalroot.com.br/5-quick-tips-for-cpp/) ! We made a video with lots of details on how to use cURL via the command line and you can see this link: [12 TIPS for you to use the curl COMMAND as a NINJA](https://en.terminalroot.com.br/12-tips-for-you-to-use-commando-curl-as-a-ninja/) .

But using it with C++ is a little more arduous task, but possible because many applications are made using cURL .

First of all make sure you have the cURL library installed on your system, examples:

> Remember that it's not the command, it's the library

{% highlight bash %}
sudo emerge net-misc/curl # Gentoo, Funtoo, ...
sudo apt install libcurl3 # or libcurl4, for Debian, Ubuntu, Linux Mint, ...
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

# Using with C++
There are many particularities in both writing code and compiling. But to keep it simple (because in the future we will have a more detailed video about cURL with C++), I'll show you a code example that accesses the address: <https://gnu.terminalroot.com.br/ip.php> that returns access data like: Operating Systems, Browser, Architecture and IP number and we will get it with C++ .

Note that we need to include the header:` #include <curl/curl.h>` and instantiate the CURL class, we also use the `size_t WriteCallback` function to show us the return. Read and analyze the entire code for greater understanding.

Example: `vim curl.cpp`

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>


{% highlight cpp %}
#include <iostream>
#include <curl/curl.h>

static size_t WriteCallback(void *contents, size_t size, size_t nmemb, void *userp){
    ((std::string*)userp)->append((char*)contents, size * nmemb);
    return size * nmemb;
}

int main(){
  CURL * curl;
  CURLcode res;
  std::string readBuffer;

  curl = curl_easy_init();
  if(curl) {
    curl_easy_setopt(curl, CURLOPT_URL, "https://gnu.terminalroot.com.br/ip.php");
    curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
    curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
    res = curl_easy_perform(curl);
    curl_easy_cleanup(curl);

    std::cout << readBuffer << std::endl;
  }
  return 0;
}
{% endhighlight %}

And to compile we need to inform the library to the compiler, for example:
{% highlight bash %}
c++ curl.cpp -lcurl -o get-data
{% endhighlight %}

If we run `./get-data` we will notice that the output will be with the data informed above, but we can filter and then get our IP address: global

{% highlight bash %}
./get-data | grep -i ip
IP: 201.51.63.71
{% endhighlight %}

Just with this basic example you can "have fun" with several possibilities!



    
