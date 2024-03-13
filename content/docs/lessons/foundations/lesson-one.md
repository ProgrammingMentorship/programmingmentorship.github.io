---
title: "Lesson One"
weight: 3
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---

# Foundations: Lesson One

{{< hint warning >}}
**Warning: Work in Progress**  
We are still working to improve this page before releasing it to
students. It may change considerably before first release.  If you can
see this message, congrats, you have been introduced to this material
early to provide feedback!

Use the **edit page** button at the bottom of this lesson to directly
submit changes for consideration.
{{< /hint >}}


## Expressions

The very first idea we need to discuss is the idea of an
**expression.**

This is like a sentence in english - it is how we communicate ideas
with the computer, the same way we use english to communicate ideas
with people.

Instead of listening and understanding, computers **read** and
**evaluate** expressions.

Behold, brackets!!! 

{{< scheme >}}
( )
{{< /scheme >}}

If you run that, you'll notice it doesn't do much. This is an
empty expression. _Run Program_ tells your computer to evaluate the
code we provide in the text box.

Like an english sentence, expressions have a structure:

```scm
(operator  argument-1 argument-2 argument-n)
```

Here is a simple expression that adds two numbers. "+" is
the operator, and we also give arguments "2" and "3". You can change
the numbers if you'd like:

{{< scheme >}}
(+ 2 3)
{{< /scheme >}}

It may be strange to see the + first, but this format enables us to do
a lot of powerful things later on. In this case, + _is the
**operator**._

The **operator** decides how the rest of the **elements** are **evaluated**.

{{< scheme >}}
(/ 20 4)
(/ 20 4 2)
{{< /scheme >}}

Play with the above example. You'll notice that the order really
matters here - the first element, "20", is successively divided by
every other element in the list.

**What have we learned?**

- We use **expressions** to explain ideas to a computer
- Computers **evaluate** expressions
- The **operator** determines what action the computer takes

Now that we have established the following things, we can move along
to the next topic.

## Variables

We could type full problems into computers to solve our problems, but
it's much easier if they can hold on to data for us! We can **define**
variables to keep data in memory for other expressions to use.

```scm
(define variable-name value-to-keep)
```

When we evaluate this expression, it associates a value with a name we specify.

Now you try:

{{< scheme >}}
(define x 1)
(define y 2)

(+ x y 3)
{{< /scheme >}}

## Functions

So we can do basic math with the `+ - * /` operators - what else?

Turns out we can _define our own operators._ Wrapping up a set of
instructions like this is known as writng a **function**. In fact, the
`+ - * /` operators we have been using are also functions.

We define a function that adds two to something like this:

{{< scheme >}}
(define (add-two v)
  (+ v 2))
  
(add-two 7)
{{< /scheme >}}

A more complex example to test the performance of the in-browser scheme:

{{< scheme >}}
(define (fib n)
  (if (< n 2) 
      1
      (+ 
       (fib (- n 1)) 
       (fib (- n 2))
       )
      ))

(fib 10)
{{< /scheme >}}

You can think of brackets as a 
