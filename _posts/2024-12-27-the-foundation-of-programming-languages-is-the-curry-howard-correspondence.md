---
layout: post
title: "The Foundation of Programming Languages is the Curry–Howard Correspondence"
date: 2024-12-27 21:22:59
image: '/assets/img/compilers/curry-howard.jpg'
description: "💭 An observation by Haskell Curry and William Howard."
tags:
- compilers
- interpreters
- programming
- terlang
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[The](https://en.wikipedia.org/wiki/Curry%E2%80%93Howard_correspondence) Curry–Howard correspondence is a profound observation in computer science and mathematical logic that establishes a direct relationship between formal proof systems and programming systems. In short, the correspondence states that:

- **Logical proofs correspond to computer programs.**
- **Logical formulas correspond to types.**

In this way, constructing a proof for a logical formula can be seen as constructing a program with a corresponding type.

---

## Origin and Context

![Haskell Curry](/assets/img/compilers/curry.png)
![William Howard](/assets/img/compilers/howard.jpg)

The correspondence was named after Haskell Curry and William Howard, who worked separately to establish the relationship between propositional logic and programming systems.

- **Haskell Curry**: Explored the relationship between formal systems and functions.
- **William Howard**: Formalized the relationship between logical proofs and types in programming systems in his 1969 paper.

The idea gained notoriety when it was applied to intuitionistic logic, especially with the type system in the context of functional programming.

---

## Intuition Behind Correspondence

![Correspondence](https://i.gifer.com/origin/b1/b106c2c02471a031d2e9c5fc3c739ca1_w200.gif)

- **Logical formulas**: Represent specifications or constraints.
- **Proofs**: Represent constructions that demonstrate the validity of specifications.
- **Programs**: Are implementations of these constructions.
- **Types**: Ensure that programs follow specifications.

For example, in the context of functional programming, a program that has type `A -> B` can be seen as a proof that, given an input of type `A`, it is possible to produce a value of type `B`.

---

## Practical Examples

![Practical Examples](https://media.tenor.com/trIRGeV6UUcAAAAM/allen-iverson-meme-iverson-meme.gif)

#### 1. Simple Logic: Implication
In logic, the implication `A → B` means that if `A` is true, then `B` is also true.

In the type system, this corresponds to a program that receives a value of type `A` and returns a value of type `B`. Such a program can be represented in a functional language such as Haskell:

```haskell
implication :: (A -> B) -> A -> B
implication f x = f x
```

Here, the `implication` function demonstrates how to transform a value of `A` into a value of `B` using a given function.

#### 2. Conjunctive Logic: Logical "AND"
In logic, the conjunction `A ∧ B` means that both `A` and `B` are true.

In the type system, this corresponds to a pair of values, one of type `A` and the other of type `B`.

In Haskell, we can represent this with tuples:

```haskell
conjunction :: (A, B)
conjunction = (valueA, valueB)
```

#### 3. Disjunctive Logic: Logical "OR"
In logic, the disjunction `A ∨ B` means that at least one of the values, `A` or `B`, is true.

In the type system, this corresponds to a sum type, that is, a value that can be of one type or the other.

In Haskell, we use `Either` to represent this:

```haskell
disjunction :: Either A B
disjunction = Left valueA -- Or Right valueB
```

---

## Benefits of the Curry–Howard Correspondence
![Benefits of the curry-howard correspondence](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Coq_plus_comm_screenshot.jpg/300px-Coq_plus_comm_screenshot.jpg)

1. **Type safety**: Ensuring that a program is correct is equivalent to proving a logical formula.
2. **Formal reasoning**: Programmers can reason about code as if they were mathematicians reasoning about proofs.
3. **Verification tools**: Systems like Coq and Agda allow you to create proofs and extract code directly from them.

---

The Curry–Howard correspondence is a powerful concept that unifies logic and programming, allowing for a deeper understanding of how we design and verify software. Using concrete examples and modern tools, it is possible to apply these principles to write safer and more reliable code.

With this insight, we can appreciate how [modern programming languages](https://github.com/terroo/terlang) are deeply influenced by type theory and mathematical logic.

---

<!--
Via: <https://en.wikipedia.org/wiki/Curry%E2%80%93Howard_correspondence>
-->
Sources:
+ <http://wadler.blogspot.com/2014/08/howard-on-curry-howard.html>
+ <https://web.archive.org/web/20080819185521/http://www.thenewsh.com/~newsham/formal/curryhoward/>
+ <http://www.haskell.org/wikiupload/1/14/TMR-Issue6.pdf>
+ <https://books.google.com/books?id=TLHfQPHNs0QC>

