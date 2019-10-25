---
layout: post
title: "Why is the C programming language still on the rise?"
date: 2019-10-25 11:48:45
image: '/assets/img/'
description: 'Including comparatives to C++, Java and Python.'
featured-img: '../dev/programer-c.jpg'
tags:
- c
- python
- java
- programming
- development
---

> Active since the 1970s, language still persists and few can outperform. But how does it compare to the competition?

![Why is the C programming language still on the rise?](/assets/img/dev/programer-c.jpg)

> No technology stays alive for 50 years unless it does its job very well. The **C** programming language has been active since 1972, and still reigns as one of the fundamental elements of the software world. In some cases, a particular technology survives because people simply cannot replace it. In the last few decades, dozens of other languages ​​have emerged - some explicitly designed to challenge C, others standing out as a byproduct of its popularity.

It is not difficult to say that **C** needs to be replaced. Programming language research and software development practices suggest that there are much better ways to work. However, **C** persists equally, with decades of research and development behind it. In the end, few languages ​​can outperform. Still, it's worth seeing how the **C** compares to the competition.

## C vs. C++

Of course, **C** is compared to **C++** , the language that - as its name implies - was created as an extension of C. The differences between **C++**  and **C** can be characterized as extensive or excessive depending on who is talking about it. .

Although still similar to **C** in its syntax and approach, **C++**  provides many genuinely useful features that are not available natively in C: namespaces, templates, exceptions, automatic memory management, and so on. Projects that require high level performance - databases, machine learning systems - are often written in **C++**  using these features to get the most out of system performance.

<!-- RETANGULO LARGO -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script> 

> In addition, **C++**  continues to expand much more intensely than C. The next **C++** 20 brings even more features, including modules, a synchronization library, and concepts that make it easier to use. The most recent revision of the **C** standard added little news and focused only on maintaining backward compatibility.

The problem is that all the advantages of **C++**  can also work as disadvantages. The more **C++**  features you use, the more complexity you get and the harder it gets to tame the results. Developers who limit themselves to a subset of **C++**  can avoid many of their worst pitfalls and excesses. The Linux kernel development team, for example, avoids **C++** .

Choosing **C** over **C++**  is one way to avoid having to deal with **C++**  overeating by enforcing minimalism. Of course, **C++**  has a rich set of high level features for good reason. But if minimalism is better suited for current and future projects, then **C** makes more sense.

## C vs. Java

After decades, **Java**  remains one of the highlights in enterprise software development. Many of the most important projects were written in **Java**  - including the vast majority of Apache Software Foundation projects.

**Java**  syntax borrows a lot from **C** and **C++** . Unlike C, however, **Java**  does not compile native code by default. Instead, the **Java**  Runtime Environment, JVM, just-in-time (JIT) compiles **Java**  code for execution in the target environment. Under the right circumstances, **Java**  JITted code may approach or even exceed C's performance.

The “write once, run anywhere” philosophy behind **Java**  also allows programs to work with little tweaking. On the other hand, although **C** was developed for many architectures, any **C** program may still need customization to run correctly.

<!-- RETANGULO LARGO 2 -->
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

> This combination of portability and strong performance, coupled with a huge ecosystem of libraries and software frameworks, makes **Java**  an ideal language for building enterprise applications.

However, **Java**  falls short of **C** in an area it never intended to compete: working directly with hardware. **Java**  is compiled in bytecode, which is intermediate code that the JVM interpreter converts to code. In addition, while **Java** 's automatic memory management is a blessing in most circumstances, **C** is best suited for programs that should make optimal use of limited memory resources.

There are also some areas where **Java**  can approach **C** in terms of speed. JVM's JIT engine optimizes runtime based on program behavior, allowing for many classes of enhancements not possible with C.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## C vs. Python

Nowadays, whenever the conversation is about software development, **Python**  always seems to be in the conversation. After all, **Python**  is “the second best language for everything” and unquestionably one of the most versatile with thousands of third party libraries available.

What **Python**  emphasizes, and where it differs most from C, is in favor of development speed over execution speed. A program that can take an hour to build in another language - such as **C** - can be written in **Python**  in minutes. On the other hand, this program may take a few seconds to run in C, but a minute to run in **Python** . But for many works on modern hardware, **Python**  is fast enough, and this was critical to its acceptance.

> Another big difference is memory management. **Python**  programs are fully managed at runtime so developers don't have to worry about the details of memory allocation and release. But here again, developer ease costs runtime performance. Writing **C** programs requires attention to memory management, but the resulting programs are often the gold standard for machine speed.

Behind the scenes, though, **Python**  and **C** share a deep connection: the reference **Python**  runtime is written in C. This allows **Python**  programs to group libraries written in **C** and **C++** . Significant chunks of the **Python**  ecosystem of third-party libraries, such as for machine learning, have **C** code at their core.

If development speed matters more than execution speed, and if most performance parts of the program can be isolated into standalone components, pure **Python**  or a mix of **Python**  and **C** libraries may be a better choice than using it. **C** alone. Otherwise, **C** still prevails.

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:50px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Via: [Terminal Root PT-BR](https://terminalroot.com.br/2019/10/por-que-a-linguagem-de-programacao-c-ainda-esta-em-alta.html)    
