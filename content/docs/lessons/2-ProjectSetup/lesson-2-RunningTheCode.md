---
title: "Lesson 2: Running the Code"
weight: 3
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---

# Project Setup: Lesson 2: Running the Code

{{< hint warning >}}
**Warning: Work in Progress**  
We are still working to improve this page before releasing it to
students. It may change considerably before first release.  
{{< /hint >}}


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






## Running a Compiled Jar File
If we want to run a jar file we simply tell the computer terminal to run the
java file and the program will start 

>_java -jar CompiledFile.jar_ 


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



 