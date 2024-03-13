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

# Lesson One: Expressions and Variables

The very first idea we need to discuss is the idea of an
**expression.**

This is like a sentence in english - it is how we communicate ideas
with the computer, the same way we use english to communicate ideas
with people.

Behold, brackets!!! _This is an empty expression._

{{< scheme >}}
( )
{{< /scheme >}}

If you **run** that, you'll notice it doesn't do much.

Like an english sentence, expressions have a structure:

```scm
(operator  argument-1 argument-2 argument-n)
```

For example: Here is a simple function that adds two numbers. "+" is
the operator, and we also give arguments "2" and "3". You can change
the numbers if you'd like:

{{< scheme >}}
(+ 2 3)
{{< /scheme >}}

It may be strange to see the + first, but this format enables us to do
a lot of powerful things later on. In this case, + _is the
**operator**._

When a computer evaluates an

{{< scheme >}}
(define size 2)
(+ size 2)
{{< /scheme >}}


{{< scheme >}}
(let ((a 10) (b 20)) (* a b))
{{< /scheme >}}

{{< scheme >}}
(define (fib n)
  (if (< n 2) 
      1
      (+ 
       (fib (- n 1)) 
       (fib (- n 2))
       )
      ))

(fib 7)
{{< /scheme >}}

You can think of brackets as a 
