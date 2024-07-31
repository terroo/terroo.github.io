---
layout: post
title: "GCC has been rewritten in C++"
date: 2024-07-31 00:11:48
image: '/assets/img/cpp/gcc-cpp.jpg'
description: "🦬 Just like Clang/LLVM, which has always been written in C++."
tags:
- gnu
- gcc
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The [GNU Compiler Collection (GCC)](https://terminalroot.com/tags#gcc) was, from the beginning, written in [C](https://terminalroot.com/tags#clanguage) and compiled by a C compiler.

Starting in 2008, an effort was made to change GCC so that it could be compiled by a [C++](https://terminalroot.com/tags#cpp) compiler and take advantage of a subset of [C++](https://terminalroot.com/tags#cpp) constructs.

This effort was spurred by [a presentation by Ian Lance Taylor [PDF]](http://airs.com/ian/cxx-slides.pdf) at the June 2008 GCC summit. As with any major change, this one had its opponents and problems, as well as its proponents and successes.

---

## Reasons for the change
Taylor's slides list the reasons for committing to writing **GCC** in **C++**:
+ [C++](https://terminalroot.com/tags#cpp) is well known and popular.
+ It is almost a superset of **C90**, in which GCC was written.
+ The C subset of [C++](https://terminalroot.com/tags#cpp) is as efficient as [C](https://terminalroot.com/tags#clanguage).
+ [C++](https://terminalroot.com/tags#cpp) "supports cleaner code in many significant cases". It never requires "*uglier*" code.
+ [C++](https://terminalroot.com/tags#cpp) makes it harder to break interface boundaries, which leads to cleaner interfaces.

The popularity of [C++](https://terminalroot.com/tags#cpp) and its superset relationship with C speak for themselves. By stating that the [C](https://terminalroot.com/tags#clanguage) subset of [C++](https://terminalroot.com/tags#cpp) is as efficient as C, Taylor meant that if developers are concerned about efficiency, limiting themselves to C constructs will generate code that is just as efficient.

Having cleaner interfaces is one of the main advantages of **C++**, or any object-oriented language. To say that [C++](https://terminalroot.com/tags#cpp) never requires "*uglier*" code is a value judgment. However, to say that it supports "*cleaner code in many significant cases*" has a deep history, best demonstrated by *gengtype*.

---

## [According to the GCC Wiki](http://gcc.gnu.org/wiki/gengtype):
> Since [C](https://terminalroot.com/tags#clanguage) has no means of reflection [*...*] gengtype was introduced to support some **GCC**-specific type annotations and variables, which in turn support garbage collection within the compiler and precompiled headers. As such, *gengtype* is a big *kludge* of a rudimentary C parser and lexical analyzer.

What happened was that developers were emulating features like *garbage collection*, a vector class, and a tree class in C. This was the "*ugly*" code that Taylor was referring to.

In his slides, Taylor also attempted to address many of the initial objections: that [C++](https://terminalroot.com/tags#cpp) was complicated, that there would be a bootstrap problem, and that the Free Software Foundation (FSF) would not like it. He addressed the speed issue by pointing out that the C subset of [C++](https://terminalroot.com/tags#cpp) is just as efficient as C. As for the FSF, Taylor wrote, “The FSF is not writing the code.”

The complexity of a language is in the eye of the beholder. Many GCC developers were primarily or exclusively C programmers, so there would necessarily be a period of time when they would be less productive and/or might use [C++](https://terminalroot.com/tags#cpp) in ways that negated all of its supposed benefits. To combat this problem, Taylor hoped to develop coding standards that would limit development to a subset of C++.

The bootstrap problem could be solved by ensuring that GCC version **N-1** could always build GCC version N, and that they could link statically with libstdc++ . GCC version N-1 should link with `libstdc++ N-1` while building **GCC N** and `libstdc++ N ; GCC N` in turn would need `libstdc++ N`. Static linking ensures that each version of the compiler runs with the appropriate version of the library.

For many years before 2008, there was general agreement to restrict GCC code to a common subset of C and C++, according to Taylor (via email). However, there was a lot of resistance to replacing the C compiler with a C++ compiler.

At the 2008 GCC summit, Taylor surveyed the extent of this resistance, and about 40% were opposed. [C++](https://terminalroot.com/tags#cpp) advocates paid close attention to identifying and addressing the specific objections raised by [C++](https://terminalroot.com/tags#cpp) opponents (speed, memory usage, developer inexperience, and so on), so that each year thereafter the size of the opposition decreased significantly.

Most of these discussions took place at GCC summits and through unregistered IRC chats. Thus, the only record available is in the [GCC mailing list archives](http://gcc.gnu.org/ml/gcc).

---

## First Steps
The first step, a true baby step, was merely to try to compile the existing C codebase with a C++ compiler. While Taylor was still at the conference, he created a [gcc-in-cxx branch](http://gcc.gnu.org/ml/gcc/2008-06/msg00385.html) to experiment with building GCC with a C++ compiler. The developers were quick to announce their intention to work on the project. Initial build attempts encountered many errors and warnings, which were then cleaned up.

In June 2009, almost exactly a year after proposing this switch, Taylor reported that phase one was complete. He configured GCC with the enable-build-with-cxx option to make the main compiler build with C++. A bootstrap on a single target system was complete. Around this time, the separate cxx branch was merged into the main GCC trunk, and people continued their work, using the enable-build-with-cxx option. (However, the separate branch was revived on at least one occasion for experimentation.)

In May 2010, there was a [GCC Release Manager Q&A on IRC](http://gcc.gnu.org/wiki/Release%20Manager%20Q%26A?action=AttachFile&do=view&target=rmqa-20100527.txt). The conclusion of this meeting was to request permission from the GCC Steering Committee to use [C++](https://terminalroot.com/tags#cpp) language features in GCC itself, rather than just compiling with a C++ compiler. Permission was granted, with agreement also coming from the FSF. Mark Mitchell [announced the decision](http://gcc.gnu.org/ml/gcc/2010-05/msg00705.html) in an email to the GCC mailing list on May 31, 2010.

In that thread, [Jakub Jelinek](http://gcc.gnu.org/ml/gcc/2010-05/msg00746.html) and [Vladimir Makarov](http://gcc.gnu.org/ml/gcc/2010-05/msg00744.html) expressed a lack of enthusiasm for the change. However, as Makarov said, he had no desire to start a flame war over a decision that had already been made. That said, he recently shared via email that his main concern was that the GCC community would rush to convert the GCC codebase to [C++](https://terminalroot.com/tags#cpp):
> "...instead of working on things that are more important to GCC users (like improving performance, new features, and so on). Fortunately, that didn't happen."

Richard Guenther was concerned about [creating a tree-like class hierarchy](http://gcc.gnu.org/ml/gcc/2010-05/msg00745.html):
> That's a lot of work (the tree spans all three Frontends, Middleend, and Backends). And my fear is that we'll only get a half-baked transition - worse than no transition at all.
The proponents' efforts to allay concerns and the "please be careful" messages from opponents give some indication of the other concerns. In addition to the issues raised by Taylor in the 2008 presentation, Jelinek mentioned memory usage. Others, often as asides to other comments, were concerned that novice [C++](https://terminalroot.com/tags#cpp) programmers would use the language inappropriately and create unmaintainable code.

There was much discussion of coding standards in the thread. Several argued in favor of existing standards, but others pointed out that they needed to define a "safe" subset of [C++](https://terminalroot.com/tags#cpp) to use. There was initially little agreement on which features of [C++](https://terminalroot.com/tags#cpp) were safe for a novice [C++](https://terminalroot.com/tags#cpp) developer.

Taylor proposed a set of coding standards. They were amended by Lawrence Crowl and others, and then adopted. Each requirement has a full justification and discussion attached. However, the guiding principle about maintainability is not the coding standard, but one that has always existed for GCC: the maintainer of a component makes the final decision about any changes to that component.

---

## Current status
Currently, those who supported the changes feel that their efforts have provided the benefits they expected. No one has publicly expressed any dissatisfaction with the effort. Makarov was relieved that his fear that the conversion effort would be a drain on resources did not materialize.

In addition, he cites the benefits of improved modularity as a way to make GCC easier to learn and thus more likely to attract new developers.

As far as speed goes, Makarov noted that a bootstrap on a multi-CPU platform is as fast as it was for [C](https://terminalroot.com/tags#clanguage). However, on uniprocessor platforms, a C bootstrap was 30% faster. He did not speculate on why this was.

He also found positive impacts, such as the conversion to C++ hash tables, which sped up compilation times by 1-2%. This latter work is an ongoing process, which Lawrence Crowl last reported on in October 2012. In keeping with Makarov's concerns, this work is being done slowly, as time and people's interests allow.

Of the initial desired ports (`gengtype`, `tree`, and `vector`), vector support is provided using [C++](https://terminalroot.com/tags#cpp) constructs (i.e., a class), and gengtype has been rewritten for **C++** compatibility.

Trees are a different matter. Although they have been much discussed and volunteered several times, no changes have been made to the code. This lends credence to Guenther's (who changed his last name to Biener) 2010 claim that it would be difficult to do correctly.

Contacted recently, Biener stated that he felt it was too early to assess the impact of the port because, compared to the size of **GCC**, there were few changes to the C++ constructs. On the negative side, he noted (as others have) that because of the changes, long-time contributors must relearn things they were familiar with in the past. In 2008, 2009, and 2010 (i.e., at the beginning and after each milestone) Taylor provided formal plans for next steps. There is no formal plan going forward. People will use [C++](https://terminalroot.com/tags#cpp) constructs in future patches as they see fit, but not just for the sake of it. Some will limit their changes to times when they are fixing the code anyway. Others approach existing C code with the goal of converting the code to [C++](https://terminalroot.com/tags#cpp) whenever that makes the code clearer or more efficient. So this is an ongoing effort on a winding path for the foreseeable future. As the [C++](https://terminalroot.com/tags#cpp) project has progressed, some fears have been allayed, while some developers are still in a holding pattern. For them, it’s too early to definitively assess things, and too late to change course. However, most seem to be pleased with the changes. Only time will tell what new benefits or problems will emerge.

---
Article originally published by **Linda Jacobson** for [lwn.net](https://lwn.net/Articles/542457/).

