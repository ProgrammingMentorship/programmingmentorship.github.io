---
title: Installing Clojure
weight: 1
---

# Clojure on Windows

This is a guide to installing Clojure on Windows from scratch.

## Install Scoop

**Step one:** Open Powershell & install Scoop using commands below.

```ps1
# First try to run this command
irm get.scoop.sh | iex
```

If it fails, then try other commands below where we will have
to change the security settings.

Run command `get-executionpolicy -List` and take note of
what your setting are before we change them.

**Step two:** Run the following commands. You may need to update them
to restore it to your other settings, but that should be
somewhat obvious.

When it prompts you respond with Y and hit enter:

```ps1
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
Set-ExecutionPolicy -ExecutionPolicy Undefined -Scope CurrentUser
```

**Step three:** Use Get-ExecutionPolicy -List again to check if your
before and after is the same. Assuming you care of course.

## Install Java

Open a new **cmd** window and run below commands:

```ps1
call scoop install 7zip
call scoop install git
call scoop bucket add java
call scoop install openjdk
call scoop update
call scoop update --all
```

Note for my users because I control the environment, steps 1 and
2 is what I use to install my programs as well since it is enough
for the clojure jar files to run. We do not need to go any
further if users are not doing development. The reason I do this
is that I like having scoop around to update stuff when it
becomes a problem

## Install Clojure

Taken from here: https://github.com/littleli/scoop-clojure…
we've already installed Java so there are a few steps we can
skip, but listing it here for reference to source material
Note do not use temurin-lts-jdk, I've had problems with
it and clojure for various dev tools. Use openjdk as we
already installed above.

**Run the following commands:**

```ps1
scoop bucket add java
scoop bucket add extras
scoop bucket add scoop-clojure https://github.com/littleli/scoop-clojure
scoop install clj-deps
scoop update clj-deps
# If you want leiningen, then also run 'scoop install'
leiningen
```
## Install a new project tool

A reasonable expectation with a modern platform is the
ability to generate a new template project of various types.
Clojure used to have a nice system for this called leiningen.
Then they upgraded to deps.edn because it is better in many
ways, but it is a step backward…
In leiningen, you could now call lein new projectname
and a new project would be generated in your active
directory. To do the same in deps.edn, we need to install
another tool.

Use this tool, the install instructions should be enough
https://github.com/seancorfield/deps-new

The command to run is:

```ps1
clojure -Ttools install-latest :lib io.github.seancorfield/deps-new :as new
```

Note that if you use any other features of the install then you will need to escape the
strings differently as windows decided to do something much worse with their cmd line
and powershell tools. For reference here is an install for the precursor tool where the
version is specified in triple quotes due to how the cmd line escapes the strings.

```ps1
clojure -Ttools install com.github.seancorfield/clj-new '{:git/tag """v1.2.404"""}' :as
clj-new
```

Create a new project in your workspace folder using command below:

```ps1
clojure -Tnew app :name myusername/mynewapp
lein new app my-stuff
```

## Setup Dev Environment

### VS Code

Install VS code and use Calva extension. You can figure
out how to do this on your own.

To start a project and test the integration, the best
thing to do is to create a new project with the tool from
step 4 and then open it with vs code. The Calva extension
once installed should configure the files and setup the
syntax highlighting etc.

The command to test the integrated REPL is (cntrl-shipt-p
in vs code to bring up the command search) Calva: Start a
Project REPL and Connect (aka Jack-in). You can also
click the REPL text at the bottom left hand side of the
screen

You may see a couple of options come up, don't worry if
you don't see a particular option, it may already be
configured. Workspace root: Deps.edn or leiningen

For emacs, you can refer to [this page in brave clojure book](https://www.braveclojure.com/basic-emacs/).

_Note that I actually prefer the [prelude configuration for
emacs](https://prelude.emacsredux.com/en/latest/) instead
of the one in brave clojure, but the brave clojure one
will get you started and you can configure it from there.
The prelude extension is maintained by the guy who
developed/maintains many of the clojure tools for emacs
such as CIDER which is the backbone of many other editor
clojure integrations as well including Calva in VS Code._
