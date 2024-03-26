---
title: "Plain Text Files VS Binary Files"
weight: 3
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---

# Appendix: Plain Text vs Binary Files

- Do you know what a file type is?
- Do you know what a file extension is?
- Do you know how your operating system decides what program to open a file in?
- Do you know the difference between a binary file and a plain text file?

These questions are important for any developer to know.

For most people, a file extension is either hidden and never worried about or
they think of it as tied to the program that the file will open in when it is
double clicked on. This is not entirely true however.

Most people after years of using a computer will not know the difference between
a binary file and a plain text file.

If you already know the difference feel free to skip this section.

## What is a file?
If we start from the basics, every file stored on your computer has 4 things
1. A filename
2. A file Extension
3. A Directory path where it is stored
4. The _data_ that makes up the actual file

A filename is simple _string_ of characters

A file extension is simple _string_ of characters

A directory path is just the folder structure - most people are familiar with this

The data is just some ones and zeros formatted in some way.

Fundamentally every file stored on your computer is no more complicated than
these 4 things! 

The key is what format the _data_ is stored in. For us to do anything meaningful
with a file we need to know what format to attempt to read the data with.

## How does your OS open a file?
If you double click on a file, your operating system will attempt to open the
file using the appropriate program. 

The way it does this is through a look-up table of file extensions paired with
installed programs.

For example a .docx file will open in Microsoft Word if it is installed. a .xlsx
will open in Excel. A .html file will open in a web browser.

Ever had to switch your default web browser? All this does is change the program
that is associated with opening HTML files and web links. You are just changing
the lookup table to point to a different program.

So althrough the file extension is a good indication of which program it is
meant for, it is not a sure fire method to know what type of file you are
looking at.

For example with the IronCAD software .ics file extensions are the primary files
for representing 3D geometry. That file extension is also used by Microsoft
Outlook for calendar files. This occassionally creates some confusion with our
users as IronCAD files are opened by Outlook, or if Outlook calendar files are
opened by IronCAD. 

The key point to understand here is that the way the _data_ is formatted inside
the file is more important than the file name, the file extension, or where it
is stored.

## File Formats
For this discussion it is sufficient to say that there are only 2 types of file
formats
1. Text Files
2. Binary Files

Text Files are human readable and can be opened by any text editor. Typically
these files only contain ascii characters and can be summed up as one really
large string of characters. There are different ways we can deal with text files
in our programming languages, but for now just think of these as the simplest
file.

Binary files are not human readable. They consist of ones and zeros (often shown
as [hexadecimal]({{< relref "/docs/lessons/appendix/binary-and-hexadecimal" >}})
or [unicode]({{< relref "/docs/lessons/appendix/ascii-and-unicode" >}})
characters depending on how we try to read the file)


Binary files are faster for a computer to access and work with. Any sufficiently
advanced program will opt to using binary files to store information.

For example: If I say "text editor" most people will probably think of Microsoft
Word. But this is actually not a text editor, it is a document creator that is
focused on the formating and creating of written documents. Word does not save
its files as text files, it uses binary files to store all of the information
required for formatting etc. in a proprietary format that is specific to the
Microsoft Word Software.

image below is a screenshot from a Word file while it is open in the program.
 ![](/img/DrawingMDexample.png)

If we were to save this document as a plain text file, you can see how much of
it is retained
```
Heading

This is some text with bolded and underlined sections. 
I also have different fonts and line spacing
And a drawing!
```

Plain text has no formatting or anything associated with it. It is just [ASCII
or Unicode characters]({{< relref "/docs/lessons/appendix/ascii-and-unicode"
>}}) in one gigantic sequential list. In fact we could decide to read this file
one line at a time and form what is called a **stream** but that is a topic for
another time.

If I try to open the Microsoft Word .docx file in a text editor like notepad++
you will notice that it is gibberish. ![](/img/BinaryFileInUnicode.png)

You will notice that we are still seeing symbols however. This is because we are
trying to read One's and Zero's as a unicode formatted text file when it is
actually in a completely different format. If instead I load it as a binary file
![](/img/BinaryFileInHex.png)


Hopefully you are starting to see why it is important to keep track of what
format our data is stored in

>First thing I recommend doing is to turn on file extensions for your operating
system. As developers this is something you should be aware of at all time. In
my opinion it is actually something that every computer user should know about.

## Why are we talking about this?
Generally speaking we have 2 types of files that we will be dealing with in our
programming projects. Plain text files and binary files.

### Binary Files
Binary files are not useful or readable and so there is not much we need to
worry about here until we are building larger programs and needing to store lots
of information in a binary format. What is important to know about binary files
is that anytime we **build** or **compile** our program we are producing a
binary format that is more efficient for the computer to read and subsequently
run the operations associated with starting the program.
>For our clojure projects, we **compile** our source code into binary files
>called **jar files** which have the _.jar_ extension and typically reside in
>the _target_ folder of our project template.

### Plain Text Files
Any time we are editing the configuration or source code for our projects we
will be working with plain text files.

What is important to understand is that we have many types of plain text files
that are not associated with any program that will be installed on your
computer.

#### Examples of Plain Text files
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
considered text files. If you see any of the above file types, you can edit them
in a simple text editor like notepad or a more advanced editor like VS Code.

The reason that we use different file extensions is so that we have an
indication of what the file is for. For example, all of our clojure source code
is in .clj files so that our compile tool knows to look for all files with that
extension.



### Parsing a Text File
Text formats are ultimately a _string_ of characters. To read information out of
a string or file, we need to do what is called parsing. Typically this means
that we leverage the expected format of the string and look for placeholders
that allow us to further subdivide (or partition) the string into useful data
that we can then convert into something our program can work with.

A entire lesson could be written on parsers and how to write them.

Many text formats have parsers already available as libraries that we can use in our
program. For example Data serialization formats such as XML, JSON have parsers
available in essentially every language worth caring about.

### Compiling a file
If we have source code, then we would compile it into a binary file that our
computer can run efficiently.
