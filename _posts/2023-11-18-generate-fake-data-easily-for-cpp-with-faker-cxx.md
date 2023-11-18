---
layout: post
title: "Generate Fake Data easily for C++ with faker-cxx"
date: 2023-11-18 20:45:03
image: '/assets/img/cpp/faker-cxx.jpg'
description: 'Similar to Laravel's Factory and Faker.js, useful for development environments.'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**C++ Faker** is a modern open source library that uses [C++20](https://terminalroot.com/tags#cpp) to generate fake data for testing during the development of your applications.

The library is heavily inspired by [Faker.js](https://fakerjs.dev/).

---

# Using
Despite using in conjunction with [LibFMT](https://github.com/fmtlib/fmt) and [GoogleTest](https://github.com/google/googletest), at the same time, having them is still optional. In the case of LibFMT it will be automatically cloned and GoogleTest can be disabled during compilation.

## For you to test from scratch:

### 01. create a project, enter it and start a repository [Git](https://terminalroot.com/tags#git):
{% highlight bash %}
mkdir myproject
cd myproject
git init
{% endhighlight %}

---

### 02. Recursively clone Faker-cxx:
{% highlight bash %}
git submodule add https://github.com/cieslarmichal/faker-cxx.git
{% endhighlight %}

---

### 03. Now create a `CMakeLists.txt`
And add the content below:
{% highlight make %}
cmake_minimum_required(VERSION 3.10)

project(TestFaker
   CXX LANGUAGES
   VERSION 0.0.1
)

set(BUILD_FAKER_TESTS OFF)

add_subdirectory(faker-cxx)

set (CMAKE_CXX_STANDARD 23)
add_executable(a.out main.cpp)

target_link_libraries(a.out faker-cxx)
{% endhighlight %}
> Note that in the line: `set(BUILD_FAKER_TESTS OFF)` we deactivate GoogleTest, and I recommend it because I noticed that there is an *array* that is *bugged*. 😃

---

### 04. Create a C++ file `main.cpp`
And add the content below:

{% highlight cpp %}
#include <format>
#include <iostream>

#include "faker-cxx/include/faker-cxx/Datatype.h"
#include "faker-cxx/include/faker-cxx/Date.h"
#include "faker-cxx/include/faker-cxx/Internet.h"
#include "faker-cxx/include/faker-cxx/String.h"

auto main() -> int {
   const auto id = faker::String::uuid();
   const auto email = faker::Internet::email();
   const auto password = faker::Internet::password();
   const auto nickname = faker::Internet::username();
   const auto active = faker::Datatype::boolean();
   const auto email_check = faker::Datatype::boolean();
   const auto code_check = faker::String::numeric(8);
   const auto created_at = faker::Date::pastDate();
   const auto updated_at = faker::Date::recentDate();

   std::cout << std::format("id: {}", id) << '\n';
   std::cout << std::format("email: {}", email) << '\n';
   std::cout << std::format("password: {}", password) << '\n';
   std::cout << std::format("nickname: {}", nickname) << '\n';
   std::cout << std::format("active: {}", active) << '\n';
   std::cout << std::format("email_check: {}", email_check) << '\n';
   std::cout << std::format("code_check: {}", code_check) << '\n';
   std::cout << std::format("created_at: {}", created_at) << '\n';
   std::cout << std::format("updated_at: {}", updated_at) << '\n';

   return 0;
}
{% endhighlight %}
> In this example there are several *fakers* that you can generate, but there are more examples such as: *Company Name*, *Animals*, ... and others!

----

### 05. Copy and run
{% highlight bash %}
cmake . -B build
cd build && make
./a.out
{% endhighlight %}

Example of similar output:
{% highlight bash %}
id: 885c6f73-48e1-49c5-b718-cc099c26486c
email: WendyWest586@yahoo.com
password: Gy4.hX*=HA|OG?_
nickname: AltonKulas
active: true
email_check: true
code_check: 23567299
created_at: 2023-05-05T11:39:05Z
updated_at: 2023-11-16T13:07:05Z
{% endhighlight %}

Every time you run the binaries, new data will be generated!

---

For more information visit the repository: <https://github.com/cieslarmichal/faker-cxx>.



