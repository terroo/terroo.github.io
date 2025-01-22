---
layout: post
title: "How to Consume APIs with cURL and C++ in the Terminal"
date: 2025-01-22 15:12:00
image: '/assets/img/cppdaily/curlpp.jpg'
description: "🚀 Bundled with RegEx, Tabulate and JSON++"
tags:
- curl
- cpp
- json
- tui
- regex
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

🔊 In this video we show how to use [Curlpp](https://www.curlpp.org/) which is a wrapper for [libcurl](https://terminalroot.com/tags#curl) consuming *API*s together with [JSON++](https://terminalroot.com/json-cpp-for-creating-and-parsing-json-with-cpp/) and [Tabulate](https://terminalroot.com/easily-create-tables-in-terminal-with-cpp/).

Install [cURLpp](https://github.com/jpbarrette/curlpp/releases/latest):
> Search in your package manager, for example in [Ubuntu](https://terminalroot.com/tags#ubuntu):
{% highlight bash %}
sudo apt install libcurlpp-dev libcurl4-openssl-dev libcurlpp0t64
{% endhighlight %}

---

## Watch the Video

<iframe width="1253" height="705" src="https://www.youtube.com/embed/KhZb_1nZ-L4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> **The video is in Portuguese, however, in addition to the automatic subtitle option, there is also the AUTOMATIC DUBBING option. Click on settings and choose: Audio track.**

---

## Code created in the video
> `main.cpp`

{% highlight cpp %}
#include <iostream>
#include <sstream>
#include <curlpp/Easy.hpp>
#include <curlpp/Options.hpp>
#include <curlpp/cURLpp.hpp>
#include <memory>
//#include <regex>
#include <nlohmann/json.hpp>
#include <tabulate/table.hpp>
using namespace tabulate;
#include <unordered_map>

/*constexpr auto change_ip = [](const std::string& str){
  //std::regex ip("\\b(\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})\\b");
  std::regex ip("Follow.*");
  return std::regex_replace(str, ip, "");
};*/

constexpr auto unicode = [](const std::string& str){
  static const std::unordered_map<std::string, std::string> html = {
    {"&euro;", "\u20AC"},
    {"&pound;", "\u00A3"},
    {"&#36;", "$"},
  };

  for(auto var : html){
    if(var.first == str){
      return var.second;
    }
  }
  return std::string{};
};

int main(){
  try{
    auto cleanup  = std::make_unique<curlpp::Cleanup>();
    auto response = std::make_unique<std::ostringstream>();
    auto request  = std::make_unique<curlpp::Easy>(); 

    //request->setOpt<curlpp::options::Url>("https://gnu.terminalroot.com.br/ip.php");
    //request->setOpt<curlpp::options::Url>("https://v2d.wttr.in/Londrina");
    request->setOpt<curlpp::options::Url>("https://api.coindesk.com/v1/bpi/currentprice.json");
    request->setOpt<curlpp::options::UserAgent>("curl/7.68.0 GNU/Linux Ubuntu x86_64");

    request->setOpt<curlpp::options::WriteStream>(response.get());

    request->perform();

    //std::cout << change_ip(response->str()) << '\n';
    //std::cout << response->str() << '\n';
    nlohmann::json json = nlohmann::json::parse(response->str());
    //std::cout << std::setw(2) << json["bpi"]["USD"] << '\n';
    
    Table table;
    table.add_row({"CURRENCY", "DESCRIPTION", "RATE", "RATE_FLOAT", "SYMBOL"});
    
    for(auto& [key, value]: json["bpi"].items()){
      table.add_row({
        key,
        value["description"],
        value["rate"],
        std::to_string(value["rate_float"].get<double>()),
        unicode(value["symbol"]),
      });
    }

    table.format()
      .multi_byte_characters(true)
      .font_style({FontStyle::bold})
      .border_top("─")
      .border_bottom("─")
      .border_left("│")
      .border_right("│")
      .corner("∎");

    for(size_t i = {}; i <= table.size(); ++i){
      table[0][i].format()
        .font_background_color(Color::blue)
        .font_color(Color::white);
      table[1][i].format()
        .font_background_color(Color::red)
        .font_color(Color::white);
      table[2][i].format()
        .font_background_color(Color::green)
        .font_color(Color::white);
      table[3][i].format()
        .font_background_color(Color::magenta)
        .font_color(Color::white);
    }

    std::cout << table << std::endl;

  }catch(const curlpp::RuntimeError& e){
    std::cerr << "Runtime error: " << e.what() << '\n';
  }catch(const curlpp::LogicError& e){
    std::cerr << "Logic error: " << e.what() << '\n';
  }
  return EXIT_SUCCESS;
}
{% endhighlight %}

---

## Additional links
+ <https://www.whatismybrowser.com/guides/the-latest-user-agent/chrome>
+ <https://wttr.in/New_york>
+ <https://v2.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html?redirect=true>



