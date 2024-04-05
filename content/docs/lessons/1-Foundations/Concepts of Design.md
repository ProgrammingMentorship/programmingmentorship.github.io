---
title: "Programming Design"
weight: 3
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---

# Program Design

This section will cover some of the main concepts when it comes to how to design a program.

This is very much a WIP, just brainstorming sections and ideas for now. Also
should be in a different section

## Most Important Principle
The only thing that matters when it comes to code design is how easy it is to expand on it later. If you think about it this encompasses a large number of concerns from how you comment your code, how you pick your variable names, how you structure your functions etc.

But to start off it is useful to understand that this is really the only metric to determining good code, is "how easily can I expand it?"

## Most Important Practice
We could talk all day about ideas related to modularity and how to tactically
and strategically design a program. But every method pales in comparison to this one thing

> With Every line of code that you write, ask yourself the question: "Is this
> something I could use somewhere else at some other time, for some other
> problem?" If the answer is yes then write it into a function or set of
> functions and then name them according to the general case rather than the
> specific case you need for your current script.

TODO: Give an example of this, we have plenty

## Top Down & Bottom Up Design
The key is to find the right mix here, you should be doing both Top down and
bottom up design and switching between the two. Look at first chapter of Paul
Graham's On LISP book

## Coupling
This becomes extremely important with certain types of systems and problems.
Also ties into what would be proper code use and modularity.

A lot of my current work is challanged by the need to keep coupling to a
minimum. This becomes especially important when you have systems that
communicate. I should be able to change one system without having to change the
other. 

### Copy & Paste
No!!! This is probabaly the most basic form of code coupling, when you copy and
paste similar code and then modify it. It is faster in the short term but is a
compromise that is never worth it, don't do it! If you want to use similar code
for 2 scripts, write it in a more general function with the modifiers as
parameters that you pass into the function

## Variable Naming and Self Documenting Code
For many years I over commented my code. Coming back to it months or years later
and I found I naturally just skipped over the comments and looked at the code.
LISP code is pretty easy to read and often the logic makes sense. You don't need
to describe everything that you are doing especially when you can just run the
code in the REPL line by line to see what everything is doing.

However to make this the most effective you should make sure to name your
variables effectively and use let statements that build up to the final answer
with intermediate variable names that indicate what your transformation to the
data looks like or how it has been processed and filtered.

## Code Styling
Code readability is huge

### Horizontal Code displaying
This is a debated topic even in the clojure community. I don't care though, you
can easily see the advantages of the two code display options below.

TODO: Add my comparison pictures of horizontal vs vertical code examples


This is especially useful with X, Y, & Z values when you are only changing a couple offsets or plus signs and negative signs

Helps greatly to reduce errors.

## SOLID Principles
Traditionally applied to Object Oriented Design, these are still solid
principles that are really good to understand. In my opinion they also start to
undermine some of the features of OOP such as inheritance when you get into the
nitty gritty details of your Top down design.

IMO the order of importance is actually reversed in the algorithm, so the
dependency inversion is most important followed by Interface segregation

I have also noticed that non-programmers have responded surprsiningly well to
these ideas as well. It did not seem to foreign of a set of ideas (At least with
engineers)

### Single Responsibility Principle

### Open for Extension Closed for Modification

### Liskov Principle
Less useful for functional programming, but still applies?

### Interface Segregation

### Dependency Inversion
This is the most important concept

## Other concepts

### Should I grab a library or write this myself?

### Performance and Design
As a general rule you should not worry about performance until it becomes a
problem. 

Performance is rarely the primary factor in your design. Saving a few
milliseconds is generally not worth it if it compromises readability of your
code.

Generally performance will compromise the ease at which other programmers can
read your code.

#### Threading in other languages vs threading in clojure
Clojure does this well so the readability is not as compromised compared to OOP
where we need to add a bunch of boilerplate and structure to call something in
paralell. Clojure allows us to simply call the future function and have a new
thread in line. 