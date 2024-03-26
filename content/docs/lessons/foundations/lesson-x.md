---
title: "Lesson X"
weight: 3
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---

# Foundations: Lesson X

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
move forward it is important that we understand the concept of a **compiler**
and a **project template**. For now we will not need to worry about how
everything works, but we do need to know a little bit about how to work with
these tools. 

The goal here is to start with a **project template** where we can place our
**source code** (in the language we choose) and then **compile** it into a
**program** that our computer is able to run.

To avoid any confustion, let's take a step and look at the steps we need to go
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
and 6. The rest of it should be taken care off by more experienced developers
and a **project template**.

As you progress as developers, you will start to dig into other steps. For now
you must just trust that we have selected good tools and projects for you to
work on.

The rest of this lesson will focus on what you need to know so that you can keep
your focus on steps 5 and 6.
> Ideally we would keep you evaluating code in the browser and not worrying
about these topics until a subsequent course however we would be too limited in
what we are able to do. You will learn faster once we get you setup and running
with what is called the **REPL** but more on that later.


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
seen by the computer as the same thing... just text...

If we want to do something different for a particular type of file then we give
it an extension so that we know what language or format the text file is meant
for. For example, this website you are reading right now is actually written in
plain text files called markdown files that have the extension _.md_. 

For more information on the difference between Binary and Text Files see the Appendix


## Aspects of a program 

1. Source code files (**.clj) 
2. Configuration file (deps.edn) 
3. Build/compiling files 
4. Testing Files 
5. Documentation 
6. Editor setup files 
7. Github files
8. License files
… 
 
We always start with a project template. This is a reasonable expectation for
even experienced developers. 
 

## Source Code File

All we care about for now are the source code files.  

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
compiler to turn our text into a program that the computer can run. Typically
this means that we are using the compiler to create a binary file that contains
all the instructions to the operating system. There are many low level details
we will not go into here. The below diagram should suffice for understanding
this. 


{{< mermaid class="center" >}}
flowchart LR
    C[Clojure Source Code File] --> A[Clojure Compiler]
    A --> D[Jar File ]

{{< /mermaid >}}



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

 

When we compile our clojure code we produce what is called a jar file. This is a binary file that can run on any system where java has been installed. If we want to run a jar file we simply tell the computer terminal to run the java file and the program will start 

 

>_java -jar CompiledFile.jar_ 

 

If we were using C# then we would have 

{{< mermaid class="center" >}}
flowchart LR
    C[C# Source Code File] --> A[C# Compiler]
    A --> D[exe file & dependencies]

{{< /mermaid >}}

 

If we compile C# for the windows 11 platform using the Microsoft build tools, we
will get an exe file along with a bunch of other files that are used by the exe
file to run the program. All of these files are typically stored in the program
files folder on your computer. 


 ![CSharpCompiledProgramExample](/img/lessonXscreenshot.png)

To run the program from C# we can double click on the controller.exe file
or we can just call the .exe file in a command terminal. 

Controller.exe 


Notice how on the windows platform we do not need to call Java 

 

## Note: might be better to use C# as an example here instead of Java and then introduce java... it gets complicated though since we are basically launching java as another program... so this won't be fun to explain and will confuse people that are not really computer savy. 
 



 

All common programming languages have at least 3 things we need to be aware of 

 

Comments 

Expressions or lines of code 

Values 

Whitespace 

 

Depending on the language there may be other structures required as well. 

 

For clojure, we also have what is called a namespace declaration, but we will talk about that in a later lesson. 

 

Comments 

Essentially every programming language has comments. These are just lines of text that are not used by the compiler. Typical use of comments is to describe what your code is doing or notate any important information that anyone who looks at the file in the future needs to know. Comments are also used to temporarily stop specific sections of the code from running or being compiled without having to delete it. 

 

All comments have a syntax to indicate to the compiler that a particular string of text should be ignored. 

In clojure and most LISP languages, anything line prefaced with a semi-colon ; will be ignored 

In C based languages anything with // will be ignored. Other forms such as /* ….. */ are also common 

In HTML <!-- comment string... -->   is a comment 

Every language will specify what the syntax for comments are  

 

Typically there are single line comments and block comments. Block comments ignore more than one line of text but we don't have traditional block comments in Clojure. Instead we have what are called rich comments but that is a topic best saved for a later lesson. 

 

 

Expressions or lines of code 

In lisp languages this is pretty straight forward. Another name for these are S-expressions or sexp for short. These are anything encased between brackets () 

In clojure we also use curly braces and square brackets but these are actually just expressions 

In LISP languages we do not need to distinguish between lines of code and S-expressions. The only thing we need to worry about is the order of the epressions in the file. 

In clojure we also need a namespace declaration at the top of the file, but that is the only structure otherwise 

In other languages there are typically more structures required and we often need to consider the spacing, syntax and where we write our lines of code. For example the structure below is required for C# and Java 

 

Import Libraries 

 

Namespace declaration (or implied by filename) 

 

Class *name* 

Class properties 

Class members 

Class methods 

Lines of code 

Class Main function 

 

 

The main function 

Any non-trivial program will be made up of many functions and so we need a way that we can specify which function is meant to be called whenever the program starts up. For example, I can write a function that prints "hello" to the screen, but I need to decide when to call that function. 

This is what I would use the "main" function of a program to do. Lets say on program start, I print "Hello" to the screen, wait 5 seconds and then print "goodbye" and exit the program. In clojure this would look like the below 

 

(ns trivialprogram.core) 

 

(defn PrintHello [] (println "Hello!")) 

(defn PrintGoodbye [] (println "Goodbye!)) 

 

(defn -main [] 

(PrintHello) 

(Thread/sleep 5000) 

(PrintGoodbye) 

) 

 

Notice the (Thread/sleep 5000) 

5000 milliseconds = 5 seconds 

The slash indicates that sleep is a function in the clojure Thread library. This leads us into our next topic 

 

Libraries 


## Running A Program
The important thing to understand about using java however is that any code that
we write will get compiled into a .jar file which is a file designed to run on
the java operating system. To run it on windows or any of the above operating
systems we have to specify that we need to use java to run the program 

java -jar CompiledFile.jar 

Fortunately this command is the same regardless of whether you are running on
Windows, Mac, or Linux. Mobile operating systems are slightly different but the
concept of how the program is run is the same. 

Now that we know what a source code file is we can talk about what the format
must be in order for our compiler to read the text that we write and turn it
into a computer program 


## Cool things to note
1. We are getting you started with a fully functional testing environment right
   away. Typically this is restricted until you take an entire course on
   testbenches and test driven development. Many times this is a specific role
   on the development team.
2. You are now using industry level tools. All of the structures we are learning
   about here are used to build large industry applications from companies like
   Walmart and Netflix.
3. You are at the cutting edge of progress. The next set of tools we will be
   adding were only created within the last few years.