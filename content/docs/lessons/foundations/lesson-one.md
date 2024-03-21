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
the operator, and we also give arguments "2" and "3". 
Try changing the numbers and clicking _Run Program_ again.

{{< scheme >}}
(+ 2 3)
{{< /scheme >}}

It may be strange to see the + first, but this format enables us to do
a lot of powerful things later on. In this case, + _is the
**operator**._

The **operator** decides how the rest of the **elements** are **evaluated**.

{{< scheme >}}
(+ 1 2)
(+ 1 2 3 4)
{{< /scheme >}}
Now with Multiplication and Division...
{{< scheme >}}
(* 2 4)
(* 2 4 2)

(/ 20 4)
(/ 20 4 2)
(/ 5 2)
{{< /scheme >}}

Play with the above example. You'll notice that depending on the **operator**,
order really matters here - the first element, "20", is successively divided by
every other element in the list.

You may also notice that expressions such as (/ 5 2) will evaluate to 5/2. Try
the below instead {{< scheme >}} (/ 5 2.0) {{< /scheme >}}

Notice how it now evaluates to 2.5 instead of the fractional component. 
This will lead us into a study of **types** in the next sections

**What have we learned?**

- We use **expressions** to explain ideas to a computer
- Computers **evaluate** expressions
- The **operator** determines what action the computer takes

Now that we have established the following things, we can move along
to the next topic.

## Values & Types

Each **expression** in the last section produced a **value** whenever it was
evaluated. Up until this point we have only seen operators that produce
_numbers_. There are however other **types** of values we need to learn about.

Try running the code below:

{{< scheme >}}

(positive?  5)
(negative? -5)

{{< /scheme >}}

Notice how we now have _true_ and _false_ values produced from the above
expressions. These values are referred to as _boolean_ values and are handled
differently by our computer compared to the _numbers_ we have seen previously.

Every programming lanugage has a series of categories to describe the **values**
it can work with. We refer to each of these categories as **types**.

We can call the _get-type_ operator to see what **type** a particular value has

{{< scheme >}}
(get-type 5)
(get-type 5.2)
(get-type "Hello, I am a String of text")
(get-type true)
(get-type false)
{{< /scheme >}}

Notice the text above is referred to as a _string_. In almost all programming languages
strings use double quotes _" "_ to enclose the text and turn it into a **value**
that we can do _something_ with. 

For example let's say that we wanted to write a program to capitalize every
character of a string. To do this we can make use of the _string-upcase_
operator and pass it a string of text.

{{< scheme >}}

(string-upcase  "I am text, that can be operated on.")

{{< /scheme >}}

When the program is run, all characters in the string are changed to be all
capitals. In the same way that we perform operations on a number through an
**expression**. We can also perform operations on a string through an **expression**.

We perform a series of **operations** on **values** by using **expressions**. 
Each **expression** has an **operator** and a **return value** whenever the expression is evaluated.
Just like the input values have types, the return values also have types.

We have other **types** as well, but we will cover these at a later date

{{< scheme >}}
(get-type /)
(get-type nil)
(get-type 'x)
(get-type #\a)
(get-type (list  1 2 3 4))
{{< /scheme >}}



Part of the reason that we care about the **type** a **value** has is so that we
can store them for later use. This is what we will cover in the next section.

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

Let's create a counting function that will increment each time the
program is run.

First lets setup our counter variable:
{{< scheme >}}
(define x 0)
{{< /scheme >}}

Now let's increment x each time we run the below code. Try running the program a
few times to see x increase with each run.

{{< scheme >}}
(define x (+ 1 x))

(+ x 0)
{{< /scheme >}}

Notice how we are adding zero to x in the last step of the code below. We can
also just evaluate x directly without having to run it through an expression
{{<scheme >}} 
x 
{{< /scheme >}}

Now what is the type of _x_?
{{<scheme >}} 
(type x)
{{< /scheme >}}

We can store different things inside of _x_ and we will get a different type

{{<scheme >}}
(define x 0)
(type x)
(define x "Hello, I am a string!!")
(type x)
(define x true)
(type x)

{{< /scheme >}}


## Functions

So we can do basic math with the `+ - * /` operators - what else?

Turns out we can _define our own operators._ Wrapping up a set of
instructions like this is known as writing a **function**. In fact, the
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
