---
layout: post
title: "How to 'hack' the Ter/Terlang programming language"
date: 2025-03-21 14:37:32
image: '/assets/img/terlang/hack-terlang.jpg'
description: "🚀 Incorporate your own functions directly via source code with C++"
tags:
- ter
- terlang
- programming
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

When I [created the Ter/Terlang programming language](https://terminalroot.com/i-created-my-own-programming-language-with-cpp/) one of the things I wanted it to have was precisely: the ease of being able to *hack* the language and incorporate functions built in by the programmer.

In other words, you can create your own [native functions](https://terminalroot.com.br/mylang/#21-funções-nativas). This will be interesting when I start incorporating libraries, mainly from [GameDev](https://terminalroot.com/tags#gamedev), such as: [SFML](https://terminalroot.com/tags#sfml), [SDL](https://terminalroot.com/tags#sdl), [Raylib](https://terminalroot.com/tags#raylib) and others to be used by [Ter/Terlang](https://github.com/terroo/terlang).

In this example, we will create the native function: `helloworld()`, that is, when printing this function, it should display the message: *Hello, World!*.

Right now if you create a `helloworld.ter` file and try to do this:
{% highlight cpp %}
output(helloworld())
{% endhighlight %}

After running: `ter helloworld.ter`, the output will be an error:
{% highlight bash %}
[line 1] Error: Undefined variable: 'helloworld'.
{% endhighlight %}

So, let's modify the source code to make this work!


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

## Procedure
We just need to follow 3 basic steps to do this.

### 01. First of all, you need to clone

And enter the project:

{% highlight bash %}
git clone https://github.com/terroo/terlang
cd terlang
{% endhighlight %}

### 02. Now let's edit the file: `./src/Builtin.hpp`

And add the code below to the end of the file:

{% highlight cpp %}
class HelloWorld : public Callable {
    public:
        int arity() override;
        std::any call(Interpreter &interpreter, std::vector<std::any> arguments) override;
        std::string toString() override;
};
{% endhighlight %}
All functions need to *inherit* `Callable` in a public form. The member functions: `arity()`, `call()` and `toString()` are the template for all functions that will be built in and need to be public.

### 03. Next, we need to create the execution for the member functions of the `HelloWorld` class that we added.
Edit the file `./src/Builtin.cpp` and insert the following content at the end of the file:

{% highlight cpp %}
// ------ HelloWorld -----------
int HelloWorld::arity(){
    return 0;
}

std::any HelloWorld::call(Interpreter &interpreter, std::vector<std::any> arguments){
    if(arguments.size() > (size_t)arity() && interpreter.global != nullptr){
        builtinError("helloworld");
    }

    std::string hello = "Hello, World!";

    return std::any_cast<std::string>(hello); 
}

std::string HelloWorld::toString(){
    return "<function builtin>";
}
{% endhighlight %}
+ The member function `arity()` needs to return the number of arguments it receives. Since the function `helloworld()` does not receive any arguments, we return zero. If it were, for example, a function named `add(x, y)` that receives 2 arguments, we would need to return `return 2;`

+ The member function `call()` always needs to have this initial `if` to check the number of arguments. All returns need to be transformed into [std::any](https://terminalroot.com/use-modern-cpp-stdany-in-your-projects/) with `std::any_cast`. Since we want it to return a `string`, we convert it to `std::string`, which will be the sentence that will be displayed.

+ And finally `toString()` must always have this content so that we can map the error type and know that the failure is actually in this type of function.

### 04. Add `helloworld` to the Terlang map
Now let's edit the file: `./src/BuiltinFactory.cpp` and add the context AT THE END OF THE MAPS `builtinFactory` and `builtinNames`. With the syntax below, inform the name of the class of your built-in function, in this case: `HelloWorld`:
> Remember that in the line above it, you need to ADD A COMMA: `,` at the end of the line to show that we have a new element.

{% highlight cpp %}
{typeid(std::shared_ptr<HelloWorld>), [](){ return std::make_shared<HelloWorld>(); }}
{% endhighlight %}

And do the same in `builtinNames`, the first element of this map is the name you want to call in your `.ter` file, in this case we call it `"helloworld"`:

{% highlight cpp %}
{"helloworld", typeid(std::shared_ptr<HelloWorld>)}
{% endhighlight %}

---

All right now just compile and test:
{% highlight bash %}
# rm -rf build/ if you have already built it once, because CMake can use the cache
cmake -B build . cmake --build build
{% endhighlight %}

Create the test file: `helloworld.ter`:
{% highlight cpp %}
auto hello = helloworld()
output(hello)
{% endhighlight %}
> In this case, we did it differently from the file above, we stored the return of `helloworld()` in the variable `hello`, but you can also print it directly if you want: `output(helloworld())`

And run:
{% highlight bash %}
./build/ter helloworld.ter
{% endhighlight %}
> The output will be: **Hello, World!**

If you want it to be available for your system, just install it: `sudo cmake --install build/`.

---

Pretty simple, right?! This procedure is available on the [Wiki](https://github.com/terroo/terlang/wiki/Wiki-Terlang(dev-mode)).

For more information, access the repository: <https://github.com/terroo/terlang/>.

Learn how to create your own programming language with our Course:
## <https://terminalroot.com.br/mylang>


