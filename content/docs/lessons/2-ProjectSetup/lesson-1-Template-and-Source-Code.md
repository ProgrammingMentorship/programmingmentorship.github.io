---
title: "Lesson 1 - Template and Source Code"
weight: 3
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---

# Project Setup: Lesson 1 - Template and Source Code

{{< hint warning >}}
**Warning: Work in Progress**  
We are still working to improve this page before releasing it to
students. It may change considerably before first release.  
{{< /hint >}}

This Lesson will cover the fundamentals of how to work with a new programming
project using proper development tools.

Previous lessons focused on the syntax of the language and allowed you to run
the lines of code directly in the browser to see what they evaluate to. This was
meant to teach you the basics of how to use a _programming language_ to
accomplish meaningful things.

What we did not have to worry about with these lessons was _how_ your computer
was actually evaluating these lines of code and showing them on the screen. To
move forward it is important that we understand the concept of a **compiler**, a
**project template**, and what format our **source code files** need to be in.

The goal here is to start with a **project template** where we can place our
**source code** (in the language we choose) and then **compile** it into a
**program** that our computer is able to run.

To avoid any confustion, let's take a step back and look at the steps we need to go
through to create a program (in the general sense).

## Steps of Creating a Program
1. Decide what program you are going to create
2. Pick the _Programming Language_ you will use
3. Pick the _Project Template_ you will use
4. Pick the _Programming Libraries_ you will use
5. Write the program's _source code_ (using the template)
6. Test that the program works (using a _development environment_)
7. _Compile_ the program so it is ready for use
8. Provide compiled program to intended users

As junior programmers, the only steps we really want to worry about are steps 5
and 6. The rest of it should be taken care of by other more experienced developers.

As you progress as developers, you will start to dig into other steps. For now
you must just trust that we have selected good tools and projects for you to
work on.

The rest of this lesson will focus on what you need to know so that you can keep
your focus on steps 5 and 6.


## A Programming Project
Like any project we start, a new programming project needs to have a couple of
decisions made up front. These are things like the below list.

- Programming Language(s) used
- Operating System(s) or Platform program will run on
- Development Tools (Text Editor or Integrated Development Environment)
- Build tools & Pipeline
- Version Control and Collaboration Platform

For now, we are making all of these choices for you. We have picked a versatile
template that will allow you to do a variety of different project types.

This is standard practice in the industry. It is a reasonable expectation for
even experienced developers to be starting with a template of some sort with any
new project that they start working on.

- Programming Language: **Clojure**
- Platform: **Java Virtual Machine (JVM)**
- Development Tools: **VS Code & Calva Extension**
- Build Tools: **Deps.edn & tools.build**
- Version Control & Collaboration: **Github**

Later we will get into web development and we will provide you another template
with carefully selected tools that are _additions_ to the above. The cool thing
about clojure is the tools we are using to start you off are the same tools we
can use to do more advanced things later as well. We simply add more tools as we
start to do cooler things. This is a foundation that can take you very far.

The purpose and correct usage of each of the above tools will become clearer
over time and as you progress through the tutorials on this site. For now we can
focus on the basics of how to use these tools to get you programming as quickly
as possible.


## Setup of the Programming Environment
Although we have instructions on how to do this. We suggest that you have Jaxan
set you up and show you how to get the development environment started. 

**From here on out we are assuming you already have the setup on your computer and all you need to do is is open VS Code.**

## What is in a Program?
As mentioned above, we are starting with a project template. The remainder of
this lesson will discuss what the aspects of this template are so that you know
where to put your code and where to run the training exercises.

Some of this stuff can get complicated, so stick to the basics for now and ask
any questions if something about this is not clear. Ultimately what matters at
this point is if you are able to save and run the code that you write.

For every program that we write we create a single **directory** or **folder**
on our computer to store all of the files required to create the program. This
folder has a structure that is defined in the project template however it is
useful to know that there are only 2 types of files.

- **Plain Text Files** that contain source code or configuration for our
  program. These are readable in any text editor. These files have extensions
  such as [.txt, .clj, .cljs, .md, .edn, ...]. Essentially any file that you can
  see plain text when you open it.
- **Binary Files** containing compiled project code - these are only readable by
  the computer through a specific program. For example a .docx file is a binary
  Microsoft Word file that can only be opened by Microsoft Word (or compatible
  programs). For our projects we will be using Jar files which are files that
  can only be read by the Java plaform. We will create Jar files later when we
  compile our program.

To write our program we will be using various formats of text files. It is
important to understand that all of these files regardless of the extension are
seen by the computer as the same thing... just text... The only difference comes
from how we decide to process that text.

As an example, let's say we have two formats of a book we have written, an
english version and a mandarin version. Although we could label the filename as
book-english.txt and book-mandarin.txt, we could also do something like book.en
and book.mn where we change the file extension to indicate what language it is
in. If for example we had an english spell checking program, then we could
easily set it to run on all .en files. More practically let's say we have a
reading program that opens the text and formats it into nice pages and gives us
the ability to look up words in the dictionary for that language. The way we
would want to do this is going to be slighly different between English and
Mandarin. So again, the file extension difference can be used to decide what
reader program the file should be passed into.

In the same way, we can use the file extension to indicate what language a
source code file is in. Modern programs are often written using a variety of
programming languages to accomplish different tasks.


> Summary: Each file extension gives us an indication of what language and format the text
is formatted in. This allows us to more easily work with files of various types.

See [Plain Text vs Binary Files]({{< relref
"/docs/Appendix/Plain-text-vs-binary-files" >}}) for more information on
file types.


## Aspects of a Program Template

1. Source code files (**.clj) 
2. Configuration file (deps.edn) 
3. Build/compiling files 
4. Testing Files 
5. Documentation 
6. Editor setup files 
7. Github files
8. License files
… 
 
For now, the only files we want to worry about are the source code files. The
remaining files in the template we will use when we expand our program, add
**libraries** or when we compile and run our program or deploy it to our users.
The project template helps with all of these things.

## Source Code File

A Source code file is a standard text file and it contains plain text. This
means that it does not have any fancy fonts or special symbols or characters. A
file can contain what are called ascii characters. In a nutshell these are the
characters that you can type on your keyboard. They are not for example the ©
symbol or some advanced mathematical symbols like you can insert in Microsoft
Word. 

These source code files are where we write our programs. A build tool will take
the text in these source code files and compile it into a program that we can
run on the computer. 

Every programming language has its own requirements for how to specify the
source code in the file. We can often tell what language the source code file is
meant for by the extension used in the file. For example the file types below
are used for various languages 

>- _filename.clj_   -    Clojure source code file
>- _filename.cljs_  -    ClojureScript source code File 
>- _filename.cs_    -    a C# source code file 
>- _filename.java_  -    a java source code file 
>- _filename.html_  -    an HTML source code file used to specify web page content 
>- _filename.css_   -    a CSS source code file used to specify web page style choices 
>- _filename.js_    -    a javascript file 
>- _filename.edn_   -    a data file serialized in EDN format 
>- _filename.json_  -    a data file serialized in json format 
>- _filename.xml_   -    a data file serialized in xml format 

 
It is important to understand that all of the above file types are all
considered text files. There are other types of files called binary files. These
are files that consist of ones and zeros and are only readable by a computer. If
you see any of the above file types, you can edit them in a simple text editor
like notepad.  

Source code files are designed to be edited by a programmer. They are setup to
be as convenient as possible for the given language they are meant for. Once we
have written a program in the source code file, we run another program called a
**compiler** to turn our text into a program that the computer can run. Typically
this means that we are using the compiler to create a binary file that contains
all the instructions to the operating system. There are many low level details
we will not go into here. The below diagram should suffice for understanding
this. 


{{< mermaid class="center" >}}
flowchart LR
    C[Clojure Source Code File] --> A[Clojure Compiler]
    A --> D[Jar File ]

{{< /mermaid >}}


When we compile our clojure code we produce what is called a jar file. This is a
binary file that can run on any system where java has been installed. 


## Source Code Format

In clojure we have 4 things we need to be aware about in our source code files

1. Namespace Declaration
2. Expressions
3. Comments
4. Whitespace

> If we are writting our code in clojure common dialect (as we will do for the web
> applications) we also have what are called reader conditionals, but that is an
> advanced topic we will cover later.

Note: Other languages typically have additional structures and formatting that
needs to be followed in order for the program to be able to compile and run.
There is also usually the concept of context which is where you are actually
writting your lines of code. Whitespace call also be used to differentiate lines
of code such as with Python.

### Namespace Declaration
We will need to cover what a namespace actually is, but for now just think of
this as the first line of code that needs to be in a clojure file.

```clojure
  (ns template.main
    (:require [jaxank.ExtensionLibs.JaxExtension :refer :all]
              [jaxank.ExtensionLibs.Geometry :as g]))
```

This statement indicates where in our program this source code file is and what
**dependencies** are required to run the code in the rest of the file. 

We will go into more depth about what a dependency is, but for now think of it
as the code that this file is able to call upon to perform a calculation.

For example, I have a geometry library that helps me perform the mathematical
calculations required for 3D object positioning in real space. The functions in
that code library are not something I want to include in every code file where I
use them and so I can load them into a file using the _ns_ statement above. That
way when I want to use any of the functions in my geometry library I can simply
call the function and the **compiler** will know where to find the code for the
function.

>Note: A Namespace declaration is actually just an expression, but it is
important enough to list on its own.


### Expressions
If you refer back to [lesson 1]({{<
relref"/docs/lessons/1-Foundations/lesson-one">}}) you will recall the concept of
an expression.

These are what we think of when we think of **lines of code** they are the
operations written in a given programming language that accomplish something. 

In the case of Clojure, we can refer to most of the items in a file as a form of
an expression or a value and just evaluate the file from the top down.

The brackets or parenthesis in the file are the format used to determine how we
evaluate the expressions in the file and in what order. Typically we start a
clojure file with what is called a namespace declaration, and then we simply run
each line of code as it is encountered from the top of the text file to the
bottom.

If I define a function in a clojure source file like the below...
```clojure
(defn my-function [number1 number2]
 (+ number1 number2))
```
notice how we are defining the function, but we do not actually run the addition
operation until we call the function. This is an idea you should be aware of by
now from the foundation lessons.

In the file we could call the function...
```clojure
(def my-value (my-function 1 2))
```
and the result would get calculated and stored in the my-value variable.

### Comments 

Essentially every programming language has comments. These are just lines of
text that are not used by the compiler. Typical use of comments is to describe
what your code is doing or notate any important information that anyone who
looks at the file in the future needs to know. Comments are also used to
temporarily stop specific sections of the code from running or being compiled
without having to delete it. 

```clojure
;This code defines the function
(defn my-function [number1 number2]
 (+ number1 number2) ;Addition operation
 )

;This variable causes the function to run
(def my-value (my-function 1 2))

;(def my-value (my-function 5 6))

```

What will the final value of my-value be? Notice the second my-value statement
has a semi-colon in front of it. We refer to this line of code as
**commented-out**. It will not run when the file is loaded. The final value of
my-value will be 3.

Notice how the text is displayed as a different color when it is commented out.
This is what we call **syntax highlighting** and it is very helpful in allowing
us to read our code.

Notice the _Addition operation_ comment on the second line above. Everything to
the right of a semicolon on a given line is considered a comment, everything to
the left is not as the color of the text indicates.

Other languages have their own syntax for commenting code. For example in C
based languages // is a comment and is used in the same way the semicolon is
here.

### Whitespace
Whitespace in a file are the
- spaces
- tabs
- returns
- commas

Some whitespace is required in order to run. For example if I want to add 1, 2 and 3...

```clojure
(+ 1 2 3)
```
Notice this is not the same as 

```clojure
(+ 12 3)
```

 Whitespace is used to separate our function arguments as well as to make the
 code more readable.

 Fairly unique to clojure is the idea that commas are actually considered
 whitespace as well. This means they are just a visual queue that people can use
 to make things more readable. you can think of commas as the same thing as a
 space character.

 >**We strongly recommend not using commas in clojure code** but they are
 important to know about since you will see them when you evaluate maps.


