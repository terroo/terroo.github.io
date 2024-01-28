---
layout: post
title: "The various faces of const C++"
date: 2024-01-28 19:40:31
image: '/assets/img/cppdaily/const.jpg'
description: '3 basic rules allow you to get the logic for a lot of things!'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Yes, [C++](https://terminalroot.com/tags#cpp) is great. But, you don't need to know everything to write great or good code, especially if we take into account the size of the [STL](https://en.wikipedia.org/wiki/Standard_Template_Library). However, if you understand the basic rules in detail, all the other things that will take you to an "almost infinite" path will always be the same rules with intuitive specifications.

One of the basic things about [C++](https://terminalroot.com/tags#cpp) is the use of the `const` keyword (constant, non-modifiable value). As we know, it is immutable/read only, that is, once a value is assigned, the declaration cannot be modified.

But, there are contexts of use. Let's see "some sides" of C++ const!

---

# Rule 1
If it declared, you need to initialize it immediately!

If you do this below:
{% highlight cpp %}
const int x;
{%endhighlight%}

**By default, it does not compile.** You will get an error:
> `■ Default initialization of an object of const type 'const int' (fix available)`.

If you are very stubborn, you can use the [-fpermissive](https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html#index-fpermissive) flag and you will be able to compile. I don't know why this `flag` exists, but I advise you never to use it.

If you want to compile it, you need to initialize it:
{% highlight cpp %}
const int x = 10;
{%endhighlight%}
> Any initial value must be defined when declaring the constant.

---

# Rule 2
`const` keyword positions are interchangeable for *non-address* values!

There is absolutely no difference between the statements below:
{% highlight cpp %}
const int x = 0;
int const y = 0;
{%endhighlight%}
> The only wrong way is to put `const` at the end of *lvalue*: ~`int x const = 0;`~.

But, this rule only applies to *not addresses*, because when you are declaring [ponteirs](https://en.wikipedia.org/wiki/Pointer_(computer_programming)), the position has different results, that is:

1st. That:
{% highlight cpp %}
const int * x = &value1;
{%endhighlight%}

2nd. It is other than:
{% highlight cpp %}
int * const y = &value1;
{%endhighlight%}

In the first, you **NOT** can modify the ADDRESS that the pointer is associated with:
{% highlight cpp %}
*x = &value2; ■ Read-only variable is not assignable
{%endhighlight%}
> But, you can modify the VALUE that the pointer is pointing to: `x = &value2;`. And remember that addresses are different from values, so this: `x = value2;`, without the (mis)reference sign (`&`), independent of `const`, is another type of error: ** Logic error!**

For the second case, it is the opposite of the explanations for the first!

You can still combine (use twice) the `const` keyword in the same declaration, that is, make both the address and the value immutable:
{% highlight cpp %}
const int * const z = &value1;
{%endhighlight%}
> With this, any other modification, whether of the value or the address, will not work.

---

# Rule 3
Using the `const` keyword at the end of the declaration of a **MEMBER-FUNCTION** (I highlighted, as this does not work in non-member functions), you just cannot modify any other member of a class. Example:

{% highlight cpp %}
class MyClass {
   std::string m_str;
   public:
     void member() const {
       this->m_str = "Hello"; ■ No viable overloaded '='
     }
};
{%endhighlight%}
> This doesn't compile!

Unless you use `const` at the beginning:
{% highlight cpp %}
class MyClass {
   std::string m_str;
   public:
     const void member() {
       this->m_str = "Hello";
     }
};
{%endhighlight%}

Or use another keyword: `mutable` for the class member:
{% highlight cpp %}
class MyClass {
   mutable std::string m_str;
   public:
     void member() const {
       this->m_str = "Hello";
     }
};
{%endhighlight%}
> The keywords: `mutable` and `const` cannot be mixed, as a matter of logic!

Once a person enrolled in the [Modern C++ Course](https://terminalroot.com/tags#cpp) asked me the "why" of being able to modify a variable that receives the returned value of a function (member or non-member) :
{% highlight cpp %}
const int myFunction(const int& z){
   return z + 2;
}

int main(){
   int myVar = myFunction(9);
   myVar = 3;
}
{%endhighlight%}
It seems a bit pointless, but the task of `const` in this case only has to do with "no modifications" at runtime. Well, that really sounds strange and can be quite confusing, it would be another type of writing "style"!

However, the rules for parameters passed to functions: `int myFunction(const int a)`(constant `a`, in this case), are the same as if they were not a function parameter.

---

# Conclusion
It may be “a lot” for some and “a little” for others. However, these 3 basic rules serve to *contextualize* which positions and places of use in C++ may or may not influence the final result.

If you want to go even deeper, I suggest the links below:
+ <https://en.cppreference.com/w/cpp/language/cv>
+ <https://learn.microsoft.com/pt-br/cpp/cpp/const-cpp?view=msvc-170>
+ <https://en.cppreference.com/w/cpp/language/member_functions#Member_functions_with_cv-qualifiers>

