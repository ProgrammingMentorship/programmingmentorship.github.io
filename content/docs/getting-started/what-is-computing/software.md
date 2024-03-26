---
weight: 2
title: "Software"
---

# Software

Software is the easiest part of a computing system to adjust and tinker with.
Unlike hardware and processors which are expensive to change (you have to get a
job at Intel,) or massive computer networks, you can write a few lines of code
and change the behaviour of your computer in moments at the software level. This
is where (for us today) the magic happens.

Software is divided into layers that build on top of each other from the ones
and zeros all the way _up_ to the complex network architectures we take for
granted today. The main things to understand right now are the concepts of
**layers** and how these form **abstractions** that we can use to develop
software more efficiently. If we can pick the right **abstractions** for our
problem we can avoid having to reinvent the wheel with every new program we
write.

>An **abstraction** in software is something that hides the details of the
implementation underneath a simple interface. For example if you press on the
gas pedal of a car, a sequence of much more complicated interactions occurs in
order to feed gas to the engine and cause the car to accelerate. As a
driver/user of the vehicle, you only need to worry about how much you press the
pedal down and it allows you to focus on more important things such as not
crashing the vehicle. Another example is when you move your mouse across the
screen. There are many layers of both hardware and software that are combined to
ensure that the mouse moves smoothly. Imagine if every program had to read
directly from the light or trackball sensors on the mouse to determine how fast
to move the cursor across the screen. **Abstractions** are one of the most fundametal
concepts in the design of software.

Let's start by exploring the **operating system** layer since that is where we
do most of our interaction with a computer.

## Operating System (OS)

 There are five main computer operating systems that most people are aware of

- Windows    (desktop) 
- Mac OS       (desktop) 
- Linux           (desktop) 
- Android      (mobile) 
- iPhone OS   (mobile) 

Typical modern programs run on what is called the **Application Layer** of a computer's or device's Operating System.

{{< mermaid class="center" >}}
flowchart LR
    H[Hardware] 
    --> OS[Operating System]
    --> App[Application Layer]
    --> p[Our Program]
{{< /mermaid >}}

Mobile operating systems are a little different but operate on the same
principles. Any program that we write today can be thought of as running on top
of a lower level program.

We can think of this system as a series of **layers**. As mentioned above we are
mostly concerned with the **application layer** of whatever operating system we
are writting our programs for. Since we do not have to worry about the lower
levels of the system, we can refer to this as an **abstraction**. We will expand
on this term later.

>So essentially we have programs running on top of other programs which are
running on other programs until we get right down into the ones and zeros that
form the instruction set for the processor. Each **layer** forms a progressively
higher and higher level of **abstraction**. We have names for each of these sub
layers such as _kernals_, _drivers_ etc. but that is not important for this
introduction.

# Platform Independence
If I have a program that runs on the Windows Application Layer will it also run on
a Mac? The answer is a resounding no!

So what happens if I want to create a program that is able to run on both Windows
and Mac?

The easiest way to do this is to add another abstraction onto the diagram above.


{{< mermaid class="center" >}}
flowchart LR
    H1[Hardware]   --> WOS[Windows OS] --> WApp[Windows Application Layer] --> Java[Another Abstraction Layer]  --> p[Our Program]
    HA[Hardware]  --> MOS[Mac OS] --> MApp[Mac Application Layer] --> Java

{{< /mermaid >}}

### Another Abstraction
There are a couple of different ways to do this, but the core concept is that
any code that we write for the program needs to be written in a way that it can
be compiled down into the appropriate ones and zeros for each operating system.

This can be as simple as choosing a programming language that we can compile to
both systems. For example, the _C language_ has compilers for both Windows and Mac.

If all we are doing is printing a message to the command line terminal (called a
_Hello World_ Program) then this approach is sufficient. This can become a
challange however when we start needing to interact with the operating system at
a deeper level.

For example, how would we get the current position of the mouse? How would we
detect which object is clicked on? That process will vary depending on the
operating system.

We could write code that runs when the operating system is Windows, and other
code that only runs when the operating system is Mac. But is this something we
want to do with every program? Is a mouse click on a Mac significantly different
than a mouse click on Windows?

This is why as modern developers we try not to write code at the application
layer of a particular operating system. There are times we have to do this, but
most of the time we are better off picking a platform that we can develop our
programs on that will deal with the differences between operating systems. 

Ideally we want to write our programs at the highest possible level of
**abstraction**. This reduces the amount of work that we need to do in order to
launch a working program. We have to be careful however, if we pick too high of
an abstraction, then we may not be able to access certain features of the device
our program is running on. 
>For example if we build our app to be a website application, are we going to be
able to connect to a bluetooth health tracking sensor using the bluetooth
adapter on an iPhone? Not without a great deal of difficulty.

For this course we will use the _Java Platform_ which is called the **Java
Virtual Machine** or **JVM** for short. That way we don't have to worry too much
about this for 99% of the programs we may wish to write.

## Java Platform

We will be running our programs on Java which can be thought of as essentially just another
operating system. The actual name for the platform is called the **Java
Virtual Machine** or **JVM** for short.

{{< mermaid class="center" >}}
flowchart LR
    H[Hardware] 
    --> OS[Operating System]
    --> App[Application Layer]
    --> Java[Java Virtual Machine]
    --> p[Our Program]
{{< /mermaid >}}

If we write each of our programs to run on Java then we will be able to run them
on Windows, Mac, Linux, iPhone, Android... Whatever we want.

The exception to this is if we were to write a program to integrate with the
camera on an iPhone for example, that code would obviously not work to access a
different brand of camera on a Windows laptop. However there are ways to deal
with this without creating separate programs, but that is an advanced topic. 

{{< mermaid class="center" >}}
flowchart LR
    H1[Asus Hardware]   --> WOS[Windows OS] --> WApp[Windows Application Layer] --> Java[Java Virtual Machine]  --> p[Our Program]
    H2[Lenovo Hardware] --> WOS
    H3[Dell Hardware]   --> WOS
    H4[...]             --> WOS
    HA[Apple Hardware]  --> MOS[Mac OS] --> MApp[Mac Application Layer] --> Java
    LOS[Linux OS] --> LApp[Linux Application Layer] --> Java
    H1[Asus Hardware]   --> LOS
    H2[Lenovo Hardware] --> LOS
    H3[Dell Hardware]   --> LOS
    H4[...]             --> LOS

{{< /mermaid >}}

>If you think about it, an operating system (mostly) deals with the differences
between computer manufacturers and processors. So again, the concept of an
**abstraction** is key.

Once of the great aspects of the Java ecosystem is that over the last 2 decades
many developers have built **libraries** that allow us to integrate with many
different systems. We will expand on this feature later.

#### Java Language
The primary programming language used on the JVM is java. This is what is called
an **Object Oriented Language** and it is difficult for beginners and even
experienced developers to work with. Java is also one of the most hated
languages in the world.

So we are going to add another abstraction called **clojure** which is
potentially the best programming language in the world. 

#### Clojure Language
Clojure compiles to Java code and has the cool feature of being able to run
essentially any Java code or libraries without issue.

With clojure we will be able to very quickly bring you up to speed on industry
leading and cutting edge software technologes.

We could talk at length about why Clojure is a great pick, but for now let's
just say **because it is awesome**.

With Clojure we will be able to build **Terminal applications**, **Desktop
Applications**, and eventually **Web Applications**.


## Web Platform
If you think of Facebook, Google... any modern application, these are what we
call **web applications**. And these can be thought of as perhaps the highest form
of **abstraction** at which we would write programs.

We consider these a little bit different to a simple **website**. Where a
**Website** exists mostly for information, a **Web Application** is meant to be
interacted with. Think of the difference between Facebook and the site you are
reading this on.

If we write a program for the web then any device with a browser can access the
application. Some browsers on certain devices are limited, but there are ways of
dealing with that. For example, if you have every tried to browse the web on a
smart TV, you will notice that some features will not work. 

We won't dig too much into these types of applications at this time, but we will
be able to develop applications that are able to be accessed on the web. Many
companies are doing this to avoid having to create separate applications for
every device or operating system. 
