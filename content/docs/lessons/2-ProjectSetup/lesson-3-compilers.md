---
title: "Lesson 3: Compilers"
weight: 3
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---

# Project Setup: Lesson 3: Compilers

{{< hint warning >}}
**Warning: Work in Progress**  
We are still working to improve this page before releasing it to
students. It may change considerably before first release.  
{{< /hint >}}


 
# Output from a Compiler
A compiler essentially converts all of our source code into a binary file that
our computer can easily run. It also packages up any dependencies required to
run the file and spits it out into a build folder in the target destination of
our project directory.

For our java programs we are compiling everything into a single file, but this
is not always the case. If you have ever looked in the program files folder of a
Windows computer, you will see all the files required for a particular program
to run.

For example, lets look at a C# program I wrote called the Controller. When I
compiled the source code and all the project dependencies, the output from the
compiler looks like the below

 ![CSharpCompiledProgramExample](/img/lessonXscreenshot.png)

> If we compile C# for the windows 11 platform using the Microsoft build tools, we
will get an exe file along with a bunch of other files that are used by the exe
file to run the program. All of these files are typically stored in the program
files folder on your computer. 

To run the program from C# we can double click on the controller.exe file or we
can just call the .exe file in a command terminal. The Exe file starts the
program but it will reference the other files when it runs.



 