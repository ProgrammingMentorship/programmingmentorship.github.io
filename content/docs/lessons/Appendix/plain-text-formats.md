---
title: "Plain Text Formats"
weight: 3
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---

 # Plain Text Formats

## Data Files & Serialization Formats
These formats typically store data in text format. Some of the formats can also
be easily translated to equivalent binary formats for faster read times. The reason that we use these formats is because there are existing parsers that can be used to read/write to these formats efficiently.

The other reason is that we can serialize the data and send it over a network and trust that we will be able to read it.
### XML
May fill out later, or you can do your own research.

### JSON
May fill out later, or you can do your own research.

### EDN
EDN is the superior clojure format that has essentially all the benefits of JSON
or XML but with the addition of being able to store more information related to
first class functions which is not supported in the other two.

Clojure source files are also essentially in EDN format so there is some
consistency here that we can leverage when writing code that writes other code
(aka macros).

### CSV
Stands for comma separated values and represents a table or spreadsheet of
values in plain text format. If you want to see what it looks like take an Excel
file and save it as a CSV. CSVs can be useful as well since they typically open
by default in Excel so they can be effective for log information or for
hardcoded data that your users are able to modify using Excel.

## Streams
We can read a text file line by line or character by character if we choose to.

When we do this it becomes a **stream** of information.

This is a much larger topic on its own as streams are also used in networks to
send information over _wires_.

## Presentation Formats
### Markdown Format
The website you are reading right now is actually written in plain
text files called markdown files that have the extension _.md_. 

You will notice however that we do have headings and **bolded text** that are
not available in normal text files. This is because we have a markdown language
format that if followed will allow us to transform the plain text file into a
different format that is easily displayed or **rendered** on a website.

In VS Code if you right click on the README.md file in our template and select _Open Preview_ a new window will open that shows what the file looks like when it is **rendered**. If you have your program on Github it will show up automatically in the rendered form.

This is what we call **rendering** and it is not all that different from the
idea of compiling your source code into a binary file that your computer can use
to start the program.

## Source Code Formats
These are specific to the programming language and will vary depending on which
language they are meant for.

These files can be as simple as individual lines of code to run, or they can
require everything be in a specific structure with a specific syntax. Typically
there is also a list of dependencies or libraries that are required to compile
the file.

For example Clojure files always start with a namespace declaration which
includes any library dependencies to load in before going through and running
each line of code remaining in the file. The structure is largely up to us
however as we have a pretty flexible compiler.

For C# and Java we need a specific top-down structure that places all lines of
code into a hierarchy structure called a class. These classes are compiled and
are only evaluated when specifically called upon from another section of the
program. To do this requires a runtime state of the program where the class is
first instantiated and then the specific code section (called a method) is
called. We do not need to worry about these languages in this course though,
just listed for contrast and to illustrate that the structure of a source code
file is entirely dependent on the language and the compiler used.