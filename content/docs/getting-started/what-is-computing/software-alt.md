---
weight: 2
title: "Software I"
---

# Software

...here's where you come into the picture. In the last section on
[hardware]({{< relref "/docs/getting-started/what-is-computing/hardware" >}})
we discussed how **processors** were designed - now we'll dig into how
programmers like you can put these processors to work!

Smart people have designed **very easy** ways to tell computers what
to do, but here is a look at all the work that is in between your
programming language and the 1s and 0s that a processor eventually
reads!

## Binary

Computers think in *binary*. Binary is literally just 1s and 0s.

You can also think of binary as **true and false** or **on and off**.

## One Instruction At A Time

Let's pretend when you woke up in the morning your brain thought like this:

**0 - WAKE UP ROUTINE**

| Address | Instruction                                              |
|---------|----------------------------------------------------------|
| 1       | Open your eyes                                           |
| 2       | Sit up in bed                                            |
| 3       | Look at the clock                                        |
| 4       | Read the time (NOW)                                      |
| 5       | Remember the time you need to wake up (TARGET)           |
| 6       | Compare these two times                                  |
| 7       | If NOW is past TARGET, get ready for school!             |
| 8       | If NOW is before TARGET, go back to sleep for 10 minutes |
| 9       | Restart at instruction 1                                 |

This is **exactly** how processors think: **procedurally** (that's
fancy for one thing at a time, and one action after another.)

You may think that sounds dumb, but Computer Engineers have figured
out how to make processors that can process _tens of billions of
instructions per second._

When writing programs for processors to run, we can't tell them
directly "is the sun up?" or "how cold will it be next Tuesday?" -
they have no idea about anything. _They need to be given everything
they need to solve a problem._

We do this by providing **instructions** for the processor to read and
run. 

...let's take a peek at the brain that reads these instructions first!

## A Simple MIPS Processor

Depending on the design of the processor, the binary (zeroes and ones)
instructions we give a processor will look a lot different. Just like
people speak *English* and *French*, processors speak *MIPS* and *ARM*
and *X86* **assembly language**.

Conceptually, let's begin from a simple processor[^1] we mentioned on
the previous page. This guy is designed to read *MIPS* instructions.

![](/img/mips-simple.png)

Since you probably aren't familiar with processor anatomy, I'll point
out a few important bits to you:

- **PC** - *Program Counter* - Like the waking-up routine above, the
  Program Counter keeps our place in the program and can be reset to a
  different place, like back to 1 if we were to snooze.
- **Instruction Memory** holds your program. To the right of this, you
  can see each instruction broken up as it is read and sent to
  different parts of the CPU.
- **Registers** are like your short term memory. You can keep a few
  things here to reference quickly.
- **ALU** - *Arithmetic Logic Unit* - Is like your deep memory. It
  takes quite a while to pull things from here, so usually you save
  whatever you want from here into a register.

## Machine Code

**The point of showing you all this:** When we are giving our very
lowest level instructions to a computer, we are directly referencing
these parts with instructions like:

- Get memory address 89 and move it to register 3
- Add the contents of register 2 and register 3 into register 4
- Save register 4 into memory address 90

The computer sees these instructions like this:

- `001000 10011010100000000000000100`
- `000010 00000000000000000100000001`
- `000000 10001100101000000000100000`
- `100011 10011010000000000000100000`
- `000100 01000000000000000000000101`

**How do we know which 1's and 0's to give to the machine?**

## Assembly Language

Luckily, we don't need to write machine code directly.

For every processor, the designer will have also designed an
[instruction format](http://www.cs.kzoo.edu/cs230/Resources/MIPS/MachineXL/InstructionFormats.html)
that lets users know how to command and control a processor.

![](/img/mips-instruction-types.png)

For each instruction type, there will be a variety of functions we can
tell the processor to perform.

![](/img/mips-r-instructions.png)

What I show here is not a complete assembly language, but (explanation
here)

```
assembly code:    add $s0, $s1, $s2
                      rd   rs   rt

machine code:     000000 10001 10010 10000 0000 100000
                  op     rs    rt    rd         funct 
```

From http://www.cs.kzoo.edu/cs230/Resources/MIPS/MachineXL/InstructionFormats.html


## Low-Level Programming Languages

Luckily, we don't need to write assembly languages directly.


```
C:                a  =  b  +  c
                  rd    rs    rt

assembly code:    add $s0, $s1, $s2
                      rd   rs   rt

machine code:     000000 10001 10010 10000 0000 100000
                  op     rs    rt    rd         funct 
```

## High-Level Programming Languages

Luckily, we don't need to write low-level languages directly. 

```
(+ 1 2)
```

## Overview

{{< mermaid class="center" >}}
flowchart TD
    subgraph Editor
        direction LR
        EI[Ideas] -- write --> ES[Source Code]
    end
    subgraph Compiler
        direction LR
        A[Source Code] -- compile --> B[Assembly Language]
        B -- compile --> C[Machine Instructions]
    end
    subgraph Processor
        direction LR
        D[Machine Instructions] -- execute --> E[Results!]
    end 
    Editor -- a text file --> Compiler
    Compiler -- machine instructions --> Processor 
{{< /mermaid >}}


[^1]: MIPS assembly language programming tutorials ([link](https://microcontrollerslab.com/mips-assembly-language-programming/))
