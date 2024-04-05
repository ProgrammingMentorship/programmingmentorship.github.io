---
title: "Client Server Architecture"
weight: 3
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---

# Program Communication: Client Server Architecture

Communication between programs is a major topic of specialty in the programming
industry. We generally do not write very many programs that do not have some
form of interaction with the code that is written by other developers. As the
saying goes, we do not exist on an island, we need to learn how to work with
others.

We have talked before about the concept of an **abstraction** and how the layers of
a program are built up from the hardware so that we can form increasingly
complex and viable programs without having to reinvent the wheel every time we
want to create a new program.

Up until now we have for the most part ignored the details relating to how these
communications actually work simply because we have not needed to understand
much more than how to call the functions to get data that we can then process in
our code.

There are however much more complicated communication schemes that enable
bidirectional communication between 2 programs.

Most of these schemes do not involve equal partnerships between programs.
Generally one program will provide a service and the other will use or consume
the service.

We call the program that provides the service the **server** and we call the
program that uses or consumes the service the **client**.

You can think about ordering food at a restaurant as a good analogy of this
system. A **client** will sit down at a table and place an order with the
**server**. The **server** will then go back and intiate the process that will
eventually result in a delivery of food back to the customer.

Even when we do have equal relationships between programs (for example when we
have synchornization of information) generally one of the programs will have to
initiate the code that waits for a connection to occur. So even in the case of
equal partnership, we generally still have a **client** and a **server**.


## Key Concepts - Draft
- Separation of Client and Server
- How information is transfered between Client and Server (Serialization)
- Concept of an active instance vs a snapshot of data (i.e. can't pass an Atom or database connection through an API)
- Concept of an API and how to work with interfaces
- Relevant Security concepts simply to know



## An API
An API is an Application Programming Interface and it describes the way that we
have programs communicate to each other. We do this between applications on the
desktop as well as in the web. There are also a great many other terms that
describe various types of APIs and there are common structures that exist to
make it easy to know what types of services we are connecting to.

For example on the windows desktop many of the program APIs are implemented in
what is called the Common Object Model Interop or COM Interop for short. This is
a protocal that is implemented whereby we can search through the Windows
programs that are currently runnning and find the object that we want to. For
example, if I wanted to automatically feed some data into an open Excel Spreadsheet, I would first need to find Excel, I would just need to know what the program
ID (called the progID) of the Microsoft Excel program is and then I would search through what is called the Running Object Table to find the active instance of the program

### Namespaces - the simplest API
If you recall the concept of a **namespace** this is essentially the simplest
API that we can conceive of. We have a scope where a set of functions or data
exists, and we have a way in our language that allows us to access that
functionality.

Namespaces and the interfaces we have dealt with so far are the simplier
approaches to adding code to our program. We are essentially downloading the
open source libraries from Github and then we are directly calling the functions
contained in the files with little additional fanfare. Often times we can even
open up the original source code files and see what is happening (which is the
beauty of open source).

The key here is that we do not have an issues of security. However we do lock
down certain aspects of the program so that we can protect the vital mechanisms
and ensure that the library operates as the user expects it to

#### Public Variables/Functions
Generally these are variables that are meant to be part of the interface and
used by our program.

#### Private Variables/Functions
If we have access to the source code you may wonder what the point of a private
variable is... it gives us an indication that a variable is not part of the
interface

In Summary the comcepts that are important here is that at the end of the day we
are doing _something_ and so to do that we will end up calling a function that
will either perform some operation or provide us with data that our program can
use. The key however is that we are using a _service_ of some kind from the code
that we are calling. This really is not that complicated to understand, but if
we can generalize this idea it will help us decypher the more complex mechanisms
of more sophisticated APIs.

We could refer to this as an **open system** so let us now look at a **closed system**

## Closed System
To go back to our earlier analogy of a client ordering food from a server...
would there ever be a time that you would want the client to be in the kitchen?
Generally no, that would compromise the ability for your restaurant to provide
food to all of its customers. 

Let's say for instance that I wanted to write a program to pull all of the
latest econmic data from the stock exchange. There are various sites that will
provide this service, but I have to do it as a request for information, I cannot
expect to be able to walk into the server room where the website is hosted and
directly access the database where all of the information is stored. That would
be a security risk and would potentially compromise the company.

Even if the information I am accessing is provided free of charge... 


**write this better later..**



The Browser is a **closed system**. What would happen if we connected to a
website as a client? Do we want to allow the website to download all of our
personal files?

The Browser is a wonderful playground of cool features that we can put together
to form a virtually infinite number of possible programs and websites, however
it is one that we have to deal with security.

Even in the cases where we don't want to worry about security (example me using a local host as a program GUI)

This concept is important to understand simply because we need to understand
that there is a limit to what information can be transferred between a client
and a server.



## The "Hello" handshake
This occurs on connection

## An Event or Message
- What these are
- How to use them
- What a callback handler is

## A Transaction
Requires a communication and a response

## Asynchronicity
When response is ignored (non-blocking)
When a response is awaited (blocking)

## Security
Generally we are going to ignore this topic for now. But if you want to look
more into this you can. That or maybe we will write an appendix.

One thing to know is that most of the so called "hacking" attempts are actually
just finding ways to compromise the login credentials from a high enough level
user. There are other ways to compromise systems, but it is good to know that
the Hollywood style hacking is not an accurate portrayal of what hacking is.

### Suggested Topics
- How a login works
- How password security and hashing works
- Encryption and public and private keys
- Tokens (since they are used with APIs like github)


### How to Design a Secure Program
This is a topic we need to cover a little bit... basically we rely on a system
to do this for us. In Theory Clojure Electric is secure... but not entirely sure
so in the meantime don't put any vital information on it.