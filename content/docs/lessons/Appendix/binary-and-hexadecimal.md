---
title: "Binary and Hex Numbers"
weight: 3
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---
# Binary And Hex Numbers
At the core of a computer a circuit is either on or off. This forms the basics
of digital design theory.

The state of on is _encoded_ as 1
The state of off is _encoded_ as 0

We know have the basis for a number system that we can use to represent
everything you see on your screen.

The normal numbers we are used to seeing are what are called _base 10_ numbers and we have digits that go from 0-9. In a similar way, a base 2 system only has 1's and 0's

You can do your own research into binary systems and the mathematics involved, but for now suffice it to say that number conversions are like the below.

```
0000 -> 0
0001 -> 1
0010 -> 2
0011 -> 3
0100 -> 4
0101 -> 5
0110 -> 6
0111 -> 7
1000 -> 8
1001 -> 9
1010 -> 10
1011 -> 11
1100 -> 12
1101 -> 13
1110 -> 14
1111 -> 15
```

## Hexadecimal
For convenience, programmers often use Hexadecimal (base 16) instead of binary
(base 2).

Every 4 digits of binary forms one Hexadecimal digit. Assembly programmers often
use Hex notation as it is a little clearer to read than binary and does not
break the structure that base 10 would. We use the normal base ten digits and
then A-F as symbols to fill for numbers 11-15. 16 of course would be 10 in base 16.

```
0000 -> 0    -> 0
0001 -> 1    -> 1
0010 -> 2    -> 2
0011 -> 3    -> 3
0100 -> 4    -> 4
0101 -> 5    -> 5
0110 -> 6    -> 6
0111 -> 7    -> 7
1000 -> 8    -> 8
1001 -> 9    -> 9
1010 -> 10   -> A
1011 -> 11   -> B
1100 -> 12   -> C
1101 -> 13   -> D
1110 -> 14   -> E
1111 -> 15   -> F
```

Note: Hex numbers are often donated with a _0x_ in front of the number in various languages. Clojure is no different. Notice how the 2 expressions are equivalent.
```
(+  10   17) => 27
(+ 0xA 0x11) => 27

(+   6853   4387) => 11240
(+ 0x1Ac5 0x1123) => 11240
```
