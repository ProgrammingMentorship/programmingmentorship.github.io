---
title: "Clojure Electric"
weight: 3
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---

# Styling Web Pages

An important concept to understand from Web Development is the idea of how to
style the content on the page. Where HTML is used to setup the structure of the
page and most of the interaction with the JavaScript on the page, A new language
called CSS is added to the mix.

The idea behind CSS is essentially that you can control the entire style of a
website based on the CSS files without changing the content… it's an interesting idea
that is well described by the site https://www.csszengarden.com/


## CSS Basics
### Fonts
### Padding
### HTML Classes

## Styling with a Framework 

To get an idea of how powerful CSS potetially is, it is a good idea to look at
the site. https://www.csszengarden.com/ if you skipped it above.

Before we get sucked into the power of CSS, we should stop to consider if it is
a useful set of features. In programming, most of what we care about when it
comes to our code is how easily we can expand our code later, and what the level
of reuse is for the code that we have already written.

So it begs the question: How often are we going to want to completely change the
style of the site? Verses how often are we going to want to build either an
expansion onto the existing site, or a brand new site and reuse some components?

What this is leading to is the idea that the premise behind the idea of CSS is
not neccessarilly the best one.

As developers we do not want to reinvent the wheel everything which is why we
turn to component frameworks.

## Component Frameworks
These types of systems have been popular for years because they reduce or
eliminate the need to write custom CSS code for a website. These things can be a
huge time savor and generally will improve the quality of the site.

There are many options available... and you should just refer to my blog article
(if it is posted by the time you read this) on selecting a CSS framework if you
want to.

The main concept to understand is that we can have a series of prebuilt
components that we can reuse in different contexts.

Tailwind has a paid upgrade to their system that has a large library of prebuilt
components... Considering that we would not be able to use these in open source
work we are skipping the purchase of these as useful as they may be...

We can however embed our styles into the electric components that we create.

Tailwind is a utility first framework that is different than the component
frameworks like Bootstrap, Bulma, etc.

## Tailwind CSS
Tailwind is a utility first framework...

It allows us to add things a la carte to our site.

As you get to know the prefixes and how to use the site you can quickly modify
and create components. It takes longer to get started with than something like
bootstrap, but the customization options are much greater and this will save you
time overall.

Normally I would refer you to the documentation on the site, but most of it is
more of a sales pitch as to why Tailwind is a good choice of framework.

There are a few important concepts that we will cover

## Responsive Design
When the screen is resized, how does the component respond.

This is key for Websites to work on mobile as well.

Also consider modularity if we want to put a set of components in a sub frame on
our site. With electric components (derived from idea of react components) we
can actually move around the structures in our code if they are developed
correctly and decoupled.


TODO finish this article



