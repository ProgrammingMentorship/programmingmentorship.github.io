---
title: "Text Editor Preferences and Selection"
weight: 3
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---


# Text Editor Preferences and Selection

Notice the difference between these two images? ![](/img/FiraCodeDifference.png)
These are actually viewing the exact same file. The left side is in VS Code and
the right side is in Notepad on Windows.

- HTML specific Syntax is highlighted and links are clickable
- The font is different however they are actually viewing the same file.
- Notice the highlighted symbols? These are called ligatures and are provided by
  something called [_fira code_](https://github.com/tonsky/FiraCode) which is
  actually just another font that I installed because it makes me happy to see
  symbols in my code


This is a bad way of showing that the way that you decide to edit your text
files does not matter. This is not the same thing as deciding to work in
Microsoft Word vs Google Docs. 

You can use whatever editor or suite of development tools that you like to
develop your code.

Now we could start to talk about developer preferences and the ongoing war
between Emacs and Vim but we will leave that for another day. 

For now let's cover a few things typically desired in a proper text editor

### Syntax Highlighting
A good text editor will provide different options for rendering your view of the text file however. To help us make fewer errors we want an editor that has syntax highlighting so we can see our code better

### Code Liner
A Code linter is like a spell checker for your code. With our development setup we have this added via the Calva extension for VS code. This is another topic for later.

### Documentation for Programming Language

### Version Control (i.e. Github) integration
Git is the most used version control system for Source Code. We will discuss this later

### Ability to Add Extensions for Additional Functionality
Typically developed by other developers and offered as extensions to the
program. Often used to modify behaviour or make it easier to work with certain
languages or frameworks.

### Terminal integration
- Ability to run scripts

### Project Tree View
A programming project essentially always exists in its own directory so a file browser is often really useful.

### Integrated Development Environment
Integrated Development Environments or IDEs for short typically include all of
the above and sometimes require a license (aka money) to use them.

IDEs are typically an important aspect of programming with object oriented
languages like Java or C#. This is because to work with those languages we need
more advanced testing systems that will tell us what is wrong with our program
and 

#### Debugging Tools/Testing Suite
- Program breakpoints 
- Program evaluation pause & resume on error.
- Variable tracing or watches
- Option to test on different platforms (i.e. Android or iPhone)
- Jump to the code that is not working
- ...

#### Other Features
- Integrated selection of project templates
- Integrated selection of typical project references
- Managing project configuration & code compilation of source code into
  development/debugging and release versions. For example visual studio
  Professional has a full GUI to pick all .NET configuration options associated
  with each template and version of .NET




