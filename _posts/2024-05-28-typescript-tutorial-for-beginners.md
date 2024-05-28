---
layout: post
title: "TypeScript Tutorial for Beginners"
date: 2024-05-28 12:29:59
image: '/assets/img/typescript/typescript.jpg'
description: "🗞️ TypeScript supports definition files that can contain type information from JavaScript libraries, as well as C++ header files."
tags:
- typescript
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[TypeScript](https://terminalroot.com/tags#typescript) is an [open source](https://terminalroot.com/tags#opensource) programming language developed by **Microsoft** . 

It is a strict syntactical superset of JavaScript and adds optional static typing to the language. 

This tutorial is especially aimed at programmers who already know [JavaScript](https://terminalroot.com/tags#javascript), it will cover the fundamental concepts of [TypeScript](https://terminalroot.com/tags# typescript) and will highlight some of the most important "*gotchas*".

TypeScript was developed by Anders Hejlsberg, architect of the [C#] language (https://terminalroot.com/tags#csharp) and creator of the [Delphi] languages (https://www.embarcadero.com/products/delphi ) and [Turbo Pascal](https://terminalroot.com/install-turbo-editor-for-c-cpp-style-turbo-vision/).

**TypeScript** supports definition files that can contain type information from existing *JavaScript* libraries, just as [C++](https://terminalroot.com/tags#cpp) header files can describe the structure of existing object files.

The official address of TypeScript is: <https://www.typescriptlang.org/>.

You ask:
#### *— If TypeScript is a superset of JavaScript, then all JavaScript code is also TypeScript?!!!*
Even though the [official TypeScript documentation itself](https://www.typescriptlang.org/pt/docs/handbook/typescript-in-5-minutes.html), the answer is **NO**!

There are some differences, for example, if you create variables or constants (`var`, `let` or `const`) with the name: `name` in TypeScript, it will not work, it will give an error:
{% highlight typescript %}
var name = "Marcos"
{% endhighlight %}

You will get the error:
{% highlight bash %}
■ Cannot redeclare block-scoped variable 'name'.
{% endhighlight %}

This is because the TypeScript *transpiler* already uses a declaration with the same name: `name`. If you are going to use something to name an object or anything else, use examples like this:
{% highlight bash %}
var userName = "Eric"
let firstName = "Camila"
const theName = "Marcos"
{% endhighlight %}

But, in [JavaScript](https://terminalroot.com/tags#javascript) this is no problem, examples:
{% highlight javascript %}
var name = "Deborah"
console.log(name)
alert(name)
document.write(name) // For use in the browser
{% endhighlight %}

This code below also **DOES NOT WORK IN TypeScript**!

<blockquote class="twitter-tweet"><p lang="pt" dir="ltr">the cool thing about JS is that it has several easter eggs <a href="https://t.co/Jbks00bTTX">pic .twitter.com/Jbks00bTTX</a></p>&mdash; Terminal Root (@TerminalRootTV) <a href="https://twitter.com/TerminalRootTV/status/1794001079140585554?ref_src=twsrc%5Etfw">May 24, 2024</a></blockquote> <script async src=" https://platform.twitter.com/widgets.js" charset="utf-8"></script>

> `console.log(++[[]][+[]]+[+[]])`

However, if you come from other programming languages, you will still have some difficulties understanding TypeScript. This, for example, works in TypeScript:

<blockquote class="twitter-tweet"><p lang="pt" dir="ltr">In JS constants are modifiable, this took a while to sink in <a href="https://t.co/ NVBd9ctCF3">pic.twitter.com/NVBd9ctCF3</a></p>&mdash; Terminal Root (@TerminalRootTV) <a href="https://twitter.com/TerminalRootTV/status/1787261823793725508?ref_src=twsrc%5Etfw">May 5, 2024</a></blockquote> <script async src=" https://platform.twitter.com/widgets.js" charset="utf-8"></script>



---

## How to Install TypeScript
To test TypeScript codes, you can write to TypeScript's [Playground](https://www.typescriptlang.org/pt/play). Or install the `tsc` command on your machine using [NPM](https://terminalroot.com/tags#npm), like this:

{% highlight bash %}
sudo npm install -g typescript
{% endhighlight %}
> On [Windows](https://terminalroot.com/tags#windows) and [macOS](https://terminalroot.com/tags#macos) you do not need `sudo`.

Then create a basic code, for example, `main.ts` (`.ts` extension):
{% highlight typescript %}
console.log("Save, TypeScript!")
{% endhighlight %}

Run the file with the `tsc` command:
{% highlight bash %}
tsc main.ts
tsc main.ts --outFile index.js // Compiles to a different name
{% endhighlight %}

After running this command it will create a file with the same name, but with the extension `.js`: `main.js`.

And run using a *JavaScript runtime*, examples: [Bun](https://terminalroot.com/tags#nodejs), [Node](https://terminalroot.com/tags#nodejs) or [QuickJS](https://github.com/bellard/quickjs):
{% highlight bash %}
bun main.js
node main.js
qjs main.js
{% endhighlight %}

iYou can also create a development environment, for example:
{% highlight bash %}
mkdir learn-typescript
cd learn-typescript
npm init -y
npm install typescript --save-dev
npx tsc --init
{% endhighlight %}
> This is more interesting for your LSP: [How to Configure the LSP for TypeScript in Neovim](https://terminalroot.com/2022/07/como-configurar-o-lsp-para-typescript-no-neovim. html).

You can modify the `tsconfig.json` file, and leave it like this:
{% highlight json %}
{
   "compilerOptions": {
     "outDir": "./dist",
     "module": "commonjs",
     "target": "es6"
   },
   "include": ["main.ts"]
}
{% endhighlight %}

It will always compile the `main.ts` file just by running:
{% highlight bash %}
tsc
{% endhighlight %}
> And it will create a `main.js` inside the `dist` folder.

And run the JavaScript file:
{% highlight bash %}
bun dist/main.js
{% endhighlight %}
> Or all at once: `tsc && bun dist/main.js`

For more details about the `tsc` command use the help:
{% highlight bash %}
tsc --help
{% endhighlight %}

---

# Basic tutorial
TypeScript has *types*, that's why its name is: TypeScript! 😃 

#### 01. Examples of its primitive types:
{% highlight typescript %}
let isDone: boolean = false;
let age: number = 42;
let userName: string = "John Doe";
{% endhighlight %}
> There is no `float` or `double` it's all `number`! But, there are [other types](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#built-in-types) primitives like: `bigint`, `symbol` , `unknown`, ...

In my case, I have [OpenGL](https://terminalroot.com/tags#opengl) installed and it defined types for TypeScript, so the `GLfloat` type is available:
> My LSP lists all the types for me!
![OpenGL TypeScript 1](./glfloat-opengl-ts-1.png) 
![OpenGL TypeScript 2](./glfloat-opengl-ts-2.png) 

But, if it doesn't work for you (you have to have OpenGL installed on the system), set it like this:
{% highlight typescript %}
type GLfloat = number;

let pi: GLfloat = 3.14;
console.info(pi);
{% endhighlight %}


There is a special type: `any`, which you can use whenever you don't want a specific value to cause typing errors.
{% highlight typescript %}
let obj: any = { x: 0 };
{% endhighlight %}
> Find out more [here](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any).

#### 02. It has Arrays and Tuples:
A *tuple type* is another type of `Array` that knows exactly how many elements it contains and exactly which types it contains at specific positions.

{% highlight typescript %}
let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["Hello", 42];

console.info(numbers[1])
console.log(tuple[1])
{% endhighlight %}

#### 03. Enumerators
Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent or create a set of distinct cases. TypeScript provides numeric and string-based enumerations.

{% highlight typescript %}
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

console.log(`The Green number is: ${c}`)
{% endhighlight %}

#### 04. Interfaces and Classes
An interface declaration is another way of naming an object type:

> Interface
{% highlight typescript %}
interface Person {
     firstName: string;
     lastName: string;
     age?: number; // Optional
}

function greeter(person: Person) {
     return `What's up, ${person.firstName} ${person.lastName}?!`;
}

const myPerson: Person = {
     firstName: "Mark",
     lastName: "Simmons",
     age: 39
};

console.log(greeter(myPerson));
{% endhighlight %}

> Class
{% highlight typescript %}
class Animal {
     name: string;

     constructor(name: string) {
         this.name = name;
     }

     distance(distanceInMeters: number = 0) {
         console.log(`${this.name} is ${distanceInMeters}m away from me.`);
     }
}

const myAnimal = new Animal("cat");
myAnimal.distance(10);
{% endhighlight %}
> Note: `name` is inside a class! 😃 

---

## Tips
+ You can use union (`|`) and intersection (`&`) types for greater flexibility.
{% highlight typescript %}
function padLeft(value: string, padding: number | string) {
   if (typeof padding === "number") {
     return `${value}: ${padding}`
   }
   if (typeof padding === "string") {
     return `${value} ${padding}`;
   }
   throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

console.log(padLeft("Hello", "friend"))
console.log(padLeft("Hello", 36))
//console.log(padLeft(9, 36)) // Error
{% endhighlight %}

+ Avoid using automatic types:
{% highlight typescript %}
// Bad ideia
let myStr1 = "This is my string"

// Good idea
let myStr2 : string = "That's my string"
{% endhighlight %}

+ Use modules (`import` and `export`) to organize your code.
{% highlight typescript %}
// mymodule.ts
export function dizAi(name: string) {
     return `Calm ${name}`;
}

// main.ts
import { dizAi } from './mymodule';
console.log(dizAi("Calabreso"));
{% endhighlight %}
> Note: I declared the variable `name`, but as a function argument!

After compiling and running:
{% highlight bash %}
tsc && bun dist/main.js
Calabreso
{% endhighlight %}

---

## EXERCISE: Generate Numbers for Mega Millions with TypeScript
As we are going to use the `process.stdout.write()` function we need to install `@types/node`, so run:
{% highlight bash %}
npm i --save-dev @types/node
{% endhighlight %}

Now read the properly commented code with an explanation of each block:

{% highlight typescript %}
// This function draws six different numbers between 1 and 60.
function megaMillions(): number[] { // Return type is an array of numbers

   // We use a Set to store the numbers. 
   // A Set does not allow duplicates, so it guarantees that all numbers are unique.
   const numbers: Set<number> = new Set();

   while (numbers.size < 6) {
     // The Math.random() function generates a pseudorandom number between 0 (inclusive) and 1 (exclusive). 
     // We multiply by 60 and add 1 to get a number between 1 and 60.
     const randomNumb = Math.floor(Math.random() * 60) + 1;
     numbers.add(randomNumb);
   }

   // After generating six numbers, convert them from Set to an Array and sort them in ascending order.
   return Array.from(numbers).sort((a, b) => a - b);
}

// we call the function that returns an Array
const array = megaMillions();

// We make a loop and use process.stdout.write to not skip lines, console.log skips
for (let index = 0; index < array.length; index++) {
   process.stdout.write(`${array[index]} `)
}
console.log()
{% endhighlight %}

Spin and don't forget to play those numbers! 😃 

---

## Conclusion
**TypeScript** offers a powerful way to write typed JavaScript making your code easier to maintain. 

> With the above basics, you should be well equipped to start using TypeScript in your projects. Remember to take advantage of TypeScript's features to create more robust code.

Continue your learning and consult the documentation on the [official website](https://www.typescriptlang.org/).
