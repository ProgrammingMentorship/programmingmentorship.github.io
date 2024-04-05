---
weight: 3
bookCollapseSection: true
title: "Course Rationale"
---



# GUI Design and Web Development (Developer Tangent Thoughts)
When designing the programming course, one of the things that we wanted to be
able to do is give our students the ability to design Graphical User Interfaces
(GUIs) without having to dig into a very complicated area of development.

As an example, It took me 8 hours just to get a simple GUI with an input Field
working after 2 months of learning Java in University. The same task took me 15
minutes in a language called Racket. 

We wanted to find a compromise between these two systems so that we can help you
build the skills neccessary to understand how user interaction on a computer
actually occurs without having to teach you Object Oriented Programming and how
to create GUIs within those systems.

To futher complicate matters, there are also tools such as the Windows Forms
Designer that allow you to drag and drop items onto a canvas and quickly design
and modify a GUI for a windows program. Everything is great until you actually
have to understand how to make the buttons work and more importantly what the
automatically generated code is actually doing and how to fix inevitable errors
that come up when you delete a component. Suddenly the Windows Forms Designer
cannot open the interface until you have fixed the code.

Clojure was an ideal pick of a language for introducing algorithmic design while
providing industry quality tools as well as integration that could enable a lot
of practical programs in a short amount of time. But it was not without
compromises since one of the challanges with Clojure is that it does not have
its own GUI system, it just allows you to use any of the many possible JAVA GUI
frameworks.

Overall the thing to understand is that GUI Frameworks Predominently suck. Many
major programs will go outside of these frameworks and build their own
systems... In short the concepts of abstration only take you so far when there
are not enough developers willing to create quality systems that can form
standards.

The other interesting thing about GUI design is that most of the actual progress
that has been made over the last decade or so has been on the web development
side with most of the interfaces for programs now needing to have a website.

Frameworks such as Electron have become popular as well which let you build all
of your desktop application using web development tools rather than traditional
desktop tools. In fact VS Code that we have been using for development is
actually running on Electron.

So to kill a couple of birds with one stone we have found a way to introduce you
to GUI development as well as Web Development with one system. That System is
called Clojure Electric and it has been released in the last year. It is very
cutting-edge and many companies are already starting to use it. It is in what is
called an "alpha state" but it is stable enough that we can use it to provide a
solid foundation that will help you learn what you need to know and skip all the
things that you do not need to know.

After this you will be well equipped if you want to go and learn how to use
other GUI frameworks or if you want to go and learn more items to client server
architectures and how the web works. for now though we will be able to use what
we have learned and create a fully fleged web application without having to
worry about details that have nothing to do with the program we are trying to
create and everything to do with the structure underneath that we need to deal
with in order to create the program.

### On Static Sites and Generators
If you use a website creator tool, you can create a website in 15 minutes. We
can't compete with that. There are many systems that you can pay a subscription
fee to each month that will allow you to create a website using predefined
templates and you can toss up a website in short order. This is a training
course however and so we want to equip you to have actual skills. No body is
particularily impressed with someone who can put up a word press site. It is
important that you know we are taking a slightly longer path, but it is a better
path and you will learn more as you progress through it.

There is also a big difference between a static site (like the one you are
reading this on) and a dynamic site like the type we are about to build. If you
think about a social networking site like facebook or instagram, you can think
of a web application, If you think about it you are constantly interacting back
and forth with the application servers which are interaction with the friends
that you are communiating with and keep the chat history between all the clients
synchronized. that is a whole other set of problems compared to simply putting a
blog article or a restaurant menu up on a website. With the Clojure Electric
System we can actually build a chat like system with relatively very little
code. In fact you can go to
https://electric-examples-app.fly.dev/(electric-tutorial.demo-chat!%43hat)/ to
see one in action. In less than an hour we could toss something like this up and
have a working chat system would could between our friends if we wanted to.