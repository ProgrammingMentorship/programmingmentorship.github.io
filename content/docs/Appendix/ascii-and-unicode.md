---
title: "Ascii and Unicode"
weight: 3
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---
# ASCII & Unicode Characters
With clojure or any high level language we don't often have to work with ascii characters, but they are still good to know about.

Fundamentally our computer can only store or process things as Ones and Zeros. With these _binary numbers_ we can represent essentially any information that we want to provided that we have an **encoding scheme** to accompany it.
>For more info on binary numbers see [**Binary Numbers**]({{< relref "/docs/Appendix/binary-and-hexadecimal" >}}) appendix.

One of the most universal encoding schemes is what are called **ascii numbers**. With ASCII we can represent 128 different characters. These roughly correlate to the characters you can type on a standard keyboard.
> See [ascii-code.com](https://www.ascii-code.com/) for full character list.

```
Capital A -> 65
Capital B -> 66
...

Lowercase a -> 97
Lowercase b -> 98
...
```

In clojure we can get the ascii values by converting to an integer
```
(int \A) => 65
(int \a) => 97
```

>Every ascii character takes up 1 byte of memory which is 8 bits. The most astute of you may notice that 0 to 127 only requires 7 bits. The last bit is an implementation detail and piece of history as to why 1 byte was used for ascii encoding.

Commonly now, we actually use **unicode** which adds more bytes depending on what category the character is in. For interest you can look at the full list at https://symbl.cc/en/unicode-table/#lao. 

There are half a million symbols that can represented with unicode. The key idea here though is they are all actually just numbers. This is why the type of something is very important. 

>65 can be the integer 65 or it can be the character A entirely depending on how we reference the memory location.

If you are interested in this topic we encourage you to research further. There are other ideas here that form the basis of the types that our computer uses in many different calculations. For example, how would you represent negative numbers? How would you represent decimal numbers? For even more fun, think about how you would build a digital circuit to perform the calculation... or maybe don't do that until you are in 3rd year electrical engineering :D

