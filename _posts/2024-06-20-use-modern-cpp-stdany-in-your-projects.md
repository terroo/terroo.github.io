---
layout: post
title: "Use Modern C++ std::any in your projects"
date: 2024-06-20 20:00:02
image: '/assets/img/cppdaily/std-any.jpg'
description: "🕳️ Say goodbye to void* once and for all."
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

`std::any` is a feature of the C++ standard library that was introduced in [C++17](https://terminalroot.com/tags#cppdaily).

This component belongs to the set of type-safe container classes, providing a safe means to store and manipulate values of any type.

It is especially useful when you need to deal with situations where the type of the variable can vary! 😃

Then you say:
> **- Oh man! Good. For these cases I use `void *`.**

Yes, you're really right, but have you seen how the new generation is in relation to *memory safety*???

Not to mention that `void*` is really dangerous!

If you do this, it works:
{% highlight cpp %}
void * some_data; // Bad idea

std::string str = "Hi";
int x = 3;
decltype(x) y = 6;

some_data = &str;
std::cout << *(std::string*)some_data << '\n';

some_data = &x;
std::cout << *(int*)some_data << '\n';

some_data = &y;
std::cout << "Type of y: " << typeid(y).name() << '\n'; // include typeinfo
{% endhighlight %}

But, the chance of this giving `s%1t` is great! At the end of using these variables, `some_data` will continue to exist, that is, an indefinite lifetime!

And it is to replace `void*` that `std::any` was created in Modern C++ which, of course, is totally **Safe**!

In other words, it is a *wrapper* that encapsulates your variable to a `shared_ptr`([smart pointers](https://en.cppreference.com/book/intro/smart_pointers)) of life! Yes, and there is even a `std::make_any`!!!


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

## How to use `std::any`
First you need to include its header:
> Logically, it only works from C++17 as was said at the beginning!

{% highlight cpp %}
#include <any>
{% endhighlight %}

And now the same code that was presented above, but using `std::any`:

{% highlight cpp %}
#include <iostream>
#include <any>

int main(){
 std::any some_data;

 std::string str = "Hi";
 int x = 3;
 auto y = std::make_any<decltype(x)>(6);

 some_data = str;
 std::cout << std::any_cast<std::string>(some_data) << '\n';

 some_data = x;
 std::cout << std::any_cast<int>(some_data) << '\n';

 some_data = y;
 std::cout << "Type of y: " << some_data.type().name() << '\n';
}
{% endhighlight %}

In the code above we saw that:
+ `std::any some_data;` - Declares the variable;
+ `std::any_cast<T>(some_data)` - Converts to the desired type;
+ `std::make_any<T>` - Another way to create objects;
+ `some_data.type().name()` - Gets the data type without needing `typeinfo`.

And you can use it for absolutely everything: `std::vector`, [Lambda](https://terminalroot.com/10-examples-of-using-lambda-functions-in-cpp/) and all existing data types!

And the guy asks something else:
> **- OK! What if I want to end the lifetime of `std::any` manually?**

Just use the `reset` union structure or even the initialization operator:

{% highlight cpp %}
some_data.reset();
// Or
some_data = {};
{% endhighlight %}

> **— And to check if `std::any` is empty?**

Use `has_value()`:

{% highlight cpp %}
std::cout << (some_data.has_value() ? "Full!" : "Empty.") << '\n';
{% endhighlight %}

The unionless `type()` with `name()` can be used to compare types:
{% highlight cpp %}
std::cout << (some_data.type() == typeid(void)) << '\n'; // 0 to false
std::cout << (some_data.type() == typeid(int)) << '\n'; // 1 to true
{% endhighlight %}
> To use *Boolean* names use: `std::cout << std::boolalpha << (some_data.type() == typeid(int)) << '\n';`.

To throw exceptions you must use `std::bad_any_cast`:
{% highlight cpp %}
try {

 std::any any_str("Hiii");
 auto my_any{ std::make_any<std::string>(any_str.type().name()) };
 std::cout << std::any_cast<std::string>(my_any) << '\n';

}catch (const std::bad_any_cast& e) {
 std::cerr << "Error: " << e.what() << std::endl;
}
{% endhighlight %}

To check whether everything really complies, never forget to use the flags for your compiler: `-Wall -Wextra -pedantic -g -fsanitize=address`.

---

## Real life example
Imagine you have code that needs to concatenate several types and return a string. However, one of the types can be: int, double or std::string.

If you use `std::any_cast<T>` in the return like this:
> Example:

{% highlight cpp %}
#include <iostream>
#include <any>
#include <sstream>

enum class Message {
    SUCCESS,
    WARNING,
    ERROR,
    UNKNOW
};

std::string add_info(Message, const std::string&, std::any, int);

int main(){
    std::any obj;

    obj = std::string("Start");
    std::cout << add_info(Message::SUCCESS, " of type string: ", obj, 3) << '\n';

    obj = 6;
    std::cout << add_info(Message::WARNING, " of type int: ", obj, 9) << '\n';

    obj = 3.14;
    std::cout << add_info(Message::ERROR, " of type double: ", obj, 0) << '\n';

    obj.reset();
    std::cout << add_info(Message::UNKNOW, " no type: ", obj, 9) << '\n';

    obj = "CONST_CHAR";
    std::cout << add_info(Message::SUCCESS, " no type: ", nullptr, 9) << '\n';

    return 0;
}

std::string add_info(Message msg, const std::string& out, std::any object, int num){
    return std::any_cast<std::string>(msg) + out + "'" + std::any_cast<std::string>(object) + "' " + std::to_string(num);
}
{% endhighlight %}
> Compile: `g++ -Wall -Wextra -pedantic -g -fsanitize=address main.cpp`.

There will be a `std::bad_any_cast` in the output:
{% highlight bash %}
terminate called after throwing an instance of 'std::bad_any_cast'
 what(): bad any_cast
Aborted
{% endhighlight %}

Both conversions (from `msg` and `object`) are incorrect:
{% highlight cpp %}
std::any_cast<std::string>(msg) + ...
// How much
std::any_cast<std::string>(object)
{% endhighlight %}

You need to make a `switch case` for the enumerator and in the case of the `object` parameter: You will need to use `has_value()`, store the `type()` in `std::type_info&` and use a `std:: stringstream` to assign return types with union to: `str()`, like this:

{% highlight cpp %}
#include <iostream>
#include <any>
#include <sstream>

enum class Message {
    SUCCESS,
    WARNING,
    ERROR,
    UNKNOW
};

std::string add_info(Message, const std::string&, std::any, int);

int main(){
    std::any obj;

    obj = std::string("Start");
    std::cout << add_info(Message::SUCCESS, " of type string: ", obj, 3) << '\n';

    obj = 6;
    std::cout << add_info(Message::WARNING, " of type int: ", obj, 9) << '\n';

    obj = 3.14;
    std::cout << add_info(Message::ERROR, " of type double: ", obj, 0) << '\n';

    obj.reset();
    std::cout << add_info(Message::UNKNOW, " no type: ", obj, 9) << '\n';

    obj = "CONST_CHAR";
    std::cout << add_info(Message::SUCCESS, " no type: ", nullptr, 9) << '\n';

    return 0;
}

std::string add_info(Message msg, const std::string& out, std::any object, int num){
    std::string local_msg {"NOTHING"};
    std::stringstream ss;

    switch (msg){
        case Message::SUCCESS:
            local_msg = "SUCCESS";
            break;
        case Message::WARNING:
            local_msg = "WARNING";
            break;
        case Message::ERROR:
            local_msg = "ERROR";
            break;
        case Message::UNKNOW:
            local_msg = "UNKNOW";
            break;
    }


    if (object.has_value()) {
        const std::type_info& type = object.type();
        if (type == typeid(std::string)) {
            ss << std::any_cast<std::string>(object);
        } else if (type == typeid(int)) {
            ss << std::any_cast<int>(object);
        } else if (type == typeid(double)) {
            ss << std::any_cast<double>(object);
        } else {
            ss << "null";
        }
    } else {
        ss << "[no object]";
    }

    return local_msg + out + "'" + ss.str() + "' " + std::to_string(num);
}
{% endhighlight %}

What a function!!! :O , but this way your code will be safe! Compile: `g++ -Wall -Wextra -pedantic -g -fsanitize=address main.cpp` and after running `./a.out`, the output will be:

{% highlight bash %}
SUCCESS of type string: 'Start' 3
WARNING of type int: '6' 9
ERROR of type double: '3.14' 0
UNKNOW without type: '[no object]' 9
SUCCESS without type: 'null' 9
{% endhighlight %}

It seems laborious, but this is the correct way to end the lifespan of any type!

---

In addition to being completely **SAFE**, `std::any` is very practical and a great help!

For more information visit: <https://en.cppreference.com/w/cpp/utility/any>


