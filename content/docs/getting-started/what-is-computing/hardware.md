---
weight: 1
title: "Hardware"
---

# Hardware

Programs run on **processors**.

Processors are nested on boards that provide them with power and
peripherals like memory, storage, input/output, and networking
equipment. Alone, a processor can't do much, but when connected to all
these other systems, processors become extremely useful tools.

Processors are also known as
[microprocessors](https://en.wikipedia.org/wiki/Microprocessor),
complex
[integrated
circuits](https://en.wikipedia.org/wiki/Integrated_circuit_design)
(ICs), or
[chips](https://www.asml.com/en/technology/all-about-microchips/microchip-basics).
A Central Processing Unit (CPU) is usually the
largest and fastest processor in a computer system, 
but not the only one - if you open up a laptop, cell phone, charger,
light bulb, or any piece of gadgetry, you'll see a whole team of ICs
working together!

Processors themselves are immensely complex systems that rely on
cutting edge material science. If you'd like to learn how to design
them, you can take a degree in **Computer Engineering**. In this
section I will briefly describe these systems so you can understand
processors enough to appreciate them!

![Computer Engineering Textbooks](/img/books.jpeg)

At a high level, a computer processor is created like this:

{{< mermaid >}}
flowchart LR
    A[Design Chip] --> B[Etch Design to Silicon Wafer]
    B --> C[Chop Up Disk]
    C --> D[Embed in a Package]
{{< /mermaid >}}

You'll see what I mean in a moment.

## Designing a Processor

Processors are fundamentally designed with **logic gates** that
represent very simple, everyday ideas. You'd recognize these ideas by
their names: **and**, **or**, and **not**. These ideas belong to a
whole branch of mathematics called **boolean algebra**.

At this level, we are dealing with **binary** data, ones and
zeroes. You can think of this like yes and no. There are only two
states, and there will only ever be **0** or **1** until quantum
computing becomes mainstream.

Here are what those logic symbols, called **gates**, look like:

![](/img/gates.jpeg)

These logical gates can be combined to form little structures to
solve small problems, like addition and subtraction. Figure 4-21 in
the image below is a _full adder_ circuit that adds two numbers,
including a carry, in binary.

**Don't worry,** we won't teach you how to do math in binary!
Just enjoy the cool shape.

![](/img/boolean.jpeg)

Essentially, by combining tons of little **logic circuits** like
these, we eventually form a much larger system that can eventually be
called a processor. While it looks very complicated, these large
machines have a simple purpose: do math fast. Two to six billion times
a second, in fact.

![](/img/mips.jpeg)

In the same way cars are designed to drive down the road, computer
processors are designed to do the following:

- Read the next line in memory
- Decide what to do 
- Do it

It's up to you what to feed these little machines!

**...but how do they get off paper and into your hands?**


## Etching Silicon Wafers

{{< columns >}}

The systems of logic gates explained in the previous section are
etched into silicon wafers with a process called 
[photolithography](https://en.wikipedia.org/wiki/Photolithography).
You **do not** need to understand computers at this level, we're only
making mention of it so you have a rough idea of how computers are made.

Basically, a picture of your processor shines onto a disk made of
silicon and layers of other special materials. The resulting chemical
reaction changes the _conductivity_ of parts of the disk, forming the
logic gates we discussed in the previous section.

This step (applying chemicals and projecting an image on the wafer)
happens a few times with different chemicals.  The picture shown here
shows an example of these stages.

<--->

![](/img/vlsi.jpeg)

{{< /columns >}}

The end result of this process is a big, beautiful disk with **many
copies** of your design etched on it. Silicon wafers are very pretty
to look at, and if you ever get the chance to see one in person, do!

![A silicon wafer etched with many computer chips](/img/wafer.jpg)

You may notice the repeating pattern on the wafer above - each of
those little postage-stamp sized squares is a processor. They don't
have to be the size of a stamp - they can be far bigger, up to the
size of a playing card, or much smaller, down to a grain of sand. 

In the end, the above disk is carefully cut up, so each processor is
separated from the others on its own **die**. They are carefully taken
and go through a process called wire bonding to connect them to the
external pins on an IC or CPU


{{< columns >}}
![](/img/wire-bonding.jpg)
<--->
![](/img/ic.jpg)
{{< /columns >}}

If you look with a microscope at a die, you'll be able to see the
sections of the processor. Like a city from above, each sector has its
own purpose and look.

{{< columns >}}

![Intel Core i7-5960X - 17.6mm x 20.2mm](/img/cores.jpg)

<--->

The "die photo" here is from a desktop processor that would be
commonly used in a gaming PC. You'll notice that besides the CPU
cores, each a small processor on its own, there are systems for
coordinating the actions of the sub-processors and granting access to
the RAM, which is not stored on this chip.

{{< /columns >}}

At this point, the processor is ready to be included in a computer
system! It will be embedded in a plastic or metal **package**, and
permanently attached to a board.

## Circuit Boards

After a processor is designed and manufactured, it needs to be given
power to drink, and tools to connect to the world around it. Here is
an example of a _single board computer_ (SBC):

![Raspberry Pi 5 with Broadcom BCM2712 SoC](/img/pi.png)

Here, the **IC** we discussed in the previous section is attached to
the board and hidden under that silver heat-sink. With so much
electricity running through them, processors can get hot!

## Use in Electronics

Processors are included in so many places you would never expect - not
just laptops and iPhones, but light bulbs, doorbells, street lights,
window frames, and more. As technology progresses and chips can do
more while sipping less power, they can be included in many more
places around you.

![](/img/the-source.jpg)

Finally, these boards are packaged up inside shiny plastic and metal
shells and shipped to consumers... _not!_

**There's one more extremely important thing to include** - here's
where _**you**_ come into the picture!

Computer hardware runs computer [software]({{< relref "/docs/getting-started/what-is-computing/software" >}}).
