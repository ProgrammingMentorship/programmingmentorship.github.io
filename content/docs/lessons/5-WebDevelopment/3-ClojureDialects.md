---
title: "Clojure Dialects"
weight: 3
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---


# Clojure Dialects
The Core Clojure language compiles to what is called **byte code** that is able
to run on the Java Virtual Machine (JVM). There are however other ways we can
compile clojure code so that it can run on a different platform. 

Because different platforms will naturally have different interfaces, different
structures, and different requirements. We cannot have the exact same setup as
we do with the JVM. For example if I wanted to write a function that prints out
the time, in normal Clojure I would access the Java time library, but if we are
running on a different platform, that same interface does not exist.

In many cases it is not practical for a language to target multiple platforms,
But because Clojure is well designed, the creators of it have been able to add
additional **dialects** of the language that target different platforms.

> In the real world a **dialect** of a language is usually related to a geographic
area where the language is used. This parallels the idea of running clojure on a
different platform as we are changing _where_ we are using the language.

The most common secondary dialect of the Clojure Language is called
ClojureScript and it has been written to target the web by compiling to
**JavaScript**.

> It is important to understand that **Java** and **JavaScript** are completely different
languages and are essentially unrelated other than in name.

In addition, other developers not associated with the core clojure team have
added support for additional platforms and languages. The most well known of
these is ClojureCLR and it is used to write program that run on the .NET
framework from Microsoft.

## ClojureScript
ClojureScript is a dialect of Clojure that compiles to JavaScript code. Before
reading this section you should have an understanding of what JavaScript is.

Between Clojure and ClojureScript most of the core functionality is the same.
For most of this course we have kept to simple functions and so most of what you
are used to using should be directly transferable between the two dialects. You
can think of this as travelling between Canada and the US. The language is
almost entirely the same but a few of the words are spelled differently and the
system of governance is slighlty different so as we get into some of the
specific aspects of the language we will have different words we need to use to
deal with the differences.

### Main differences
- How Macros are loaded
- Parallel threads and futures as JavaScript has no threads
- For all see https://www.clojurescript.org/about/differences


> If you are familiar with Javascript then we should let you know that
> ClojureScript actually compiles to the google closure style engine and that is
> what is used to convert into normal Javascript to run on the web. There are a
> couple of complications that can arise with this setup if you are writing your
> own ClojureScript or dealing with interop between JavaScript and
> ClojureScript. The main complication from my understanding has to do with how
> variables get renamed or instanced and how that can cause some complications.
> With Clojure Electric however we can largely ignore any of these differences.

For the most part the useage of the language is the same and so most of what is
different is when we start to use other libraries. Some common clojure libraries
are written for both dialects, but often times, a library will only work on one
or the other. To further our earlier analogy think of how you would access
health care in Canada vs in the States. Both have benefits and drawbacks to the
system and the access methods are different however there is commonality such as
the idea of calling 911. 

ClojureScript files have the extension .cljs as opposed to clojure files which
have the extension .clj

There are ClojureScript REPLs that we can setup, however we will not do that




## Clojure Common Code
Since the two primary dialects of the Clojure language are very similar, we can
call any common functionality as independed of the dialect that it is written
in. For example all of the core functionality of the library works essentially
the same, so if I have a custom function that I have written to modify a string,
or deal with a particular type of data, I can copy the code from my .clj file
into a .cljs file.

But if I copy the code then I have to maintain 2 different copies of that code
and that is never an ideal situation. If I make a change to the Clojure copy of
the code then I will also have to make the change to the ClojureScript copy.
There is an alternative that is called Clojure common and it has the extension
.cljc.

Clojure Common code is designed mostly for library files that contain code that
is callable from both clojurescript and from Clojure. It techincally does not
have an actual platform that it is able to run on, so we cannot directly call a
repl and jack into it like we have been able to do with Clojure and that can
also be done with ClojureScript