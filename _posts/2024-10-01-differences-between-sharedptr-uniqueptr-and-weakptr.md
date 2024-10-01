---
layout: post
title: "Differences between shared_ptr, unique_ptr and weak_ptr"
date: 2024-10-01 15:39:00
image: '/assets/img/cppdaily/smarts.jpg'
description: "🏹 Used to manage automatic memory allocation and deallocation."
tags:
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Smart pointers in [C++](https://terminalroot.com/tags#cpp) (`std::shared_ptr`, `std::unique_ptr` and `std::weak_ptr`) are used to manage the automatic allocation and deallocation of memory, helping to avoid problems such as memory leaks and *dangling pointers* (pointers that point to a memory location that has already been deallocated).

Let's see the difference between the main smart pointers!


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

## `std::shared_ptr`
+ A shared pointer that can have multiple owners.
+ Keeps a <u>reference counter</u>. Each time a new copy of the `shared_ptr` is made, this counter is incremented. When all `shared_ptr`s that point to the same object are destroyed (counter reaches zero), the pointed object is deallocated.
+ Useful when you need multiple places in your code to share ownership of a resource.

Example:
{% highlight cpp %}
#include <iostream>
#include <memory>

struct Resource{
    Resource(){ std::cout << "Resource acquired\n"; }
    ~Resource(){ std::cout << "Resource destroyed\n"; }
};

int main(){
    std::shared_ptr<Resource> ptr1 = std::make_shared<Resource>();
    {
        std::shared_ptr<Resource> ptr2 = ptr1; // ptr2 also shares the object.
        std::cout << "Reference count: " << ptr1.use_count() << "\n"; // Print the counter.
    }
    // When ptr2 goes out of scope, the counter is decremented, but the resource still exists.

    std::cout << "Reference count: " << ptr1.use_count() << "\n"; // Print the counter.
    // When ptr1 goes out of scope, the object is destroyed, since the counter reaches 0.
}
{% endhighlight %}
Output:
{% highlight bash %}
Resource acquired
Reference count: 2
Reference count: 1
Resource destroyed
{% endhighlight %}

---

## `std::unique_ptr`
+ A unique pointer, which has **exclusive ownership** over the object. Only one `unique_ptr` can point to the same resource at a time.
+ **Does not allow copies**, only moves via `std::move`(move semantics) which ensures that the object will be managed by a single pointer.
+ Ideal when you want to ensure that a resource will not be shared.

Example:
{% highlight cpp %}
#include <iostream>
#include <memory>

struct Resource {
  Resource() { std::cout << "Resource acquired\n"; }
  ~Resource() { std::cout << "Resource destroyed\n"; }
};

int main() {
  std::unique_ptr<Resource> ptr1 = std::make_unique<Resource>();
  // std::unique_ptr<Resource> ptr2 = ptr1; // This would not compile, copying not allowed.

  std::unique_ptr<Resource> ptr2 = std::move(ptr1); // Transfer of ownership.

  if (!ptr1) {
    std::cout << "ptr1 is null\n";
  }

  // When ptr2 goes out of scope, the resource is automatically destroyed.
}
{% endhighlight %}
Output:
{% highlight bash %}
Resource acquired
ptr1 is null
Resource destroyed
{% endhighlight %}

---

## `std::weak_ptr`
+ A weak pointer, which **does not own** the object. It observes an object managed by a `shared_ptr` without contributing to the reference count.
+ It is useful for **avoiding reference cycles** (when two or more `shared_ptr` reference each other, creating a cycle that prevents the memory from being freed).
+ Before accessing the object, you need to check if it is still valid using `lock()`, which returns a `std::shared_ptr` if the object still exists.

Example:
{% highlight cpp %}
#include <iostream> 
#include <memory> 

struct Resource { 
  Resource() { std::cout << "Resource acquired\n"; } 
  ~Resource() { std::cout << "Resource destroyed\n"; } 
};

int main(){ 
  std::shared_ptr<Resource> ptr1 = std::make_shared<Resource>();
  std::weak_ptr<Resource> weakPtr = ptr1; // weakPtr observes but does not contribute to the counter.

  if(auto tempPtr = weakPtr.lock()){ // Checks if the resource still exists.
    std::cout << "Resource is still alive\n";
  }else{ 
    std::cout << "Resource has been destroyed\n";
  } 
  ptr1.reset(); // Releases the resource.

  if(auto tempPtr = weakPtr.lock()){ 
    std::cout << "Resource is still alive\n";
  }else{ 
    std::cout << "Resource has been destroyed\n";
  } 
}
{% endhighlight %}
Output:
{% highlight bash %}
Resource acquired
Resource is still alive
Resource destroyed
Resource has been destroyed
{% endhighlight %}

---

That is, `shared_ptr`: Owned by multiple owners, with reference counting to manage the destruction of the object. `unique_ptr`: Exclusive ownership, cannot be copied, only moved. `weak_ptr`: Observes the resource managed by a `shared_ptr`, but does not interfere with the reference counting, used to avoid reference cycles.
