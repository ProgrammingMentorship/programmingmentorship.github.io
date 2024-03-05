---
title: "GNU/Linux"
weight: 1
---

# Clojure on GNU/Linux

Instructions for **Debian GNU/Linux 12** (bookworm) 6.1.0-13-amd64.

At a high level, perform the following steps:

1. Install build tools and prerequisites
1. Install the ASDF language manager tool
1. Install Java and Clojure using ASDF

## Install Prerequisites

Using the builtin **apt** package manager, install dependencies:

```
apt-get install emacs vim git syncthing inotify-tools filezilla \
                fonts-firacode fonts-terminus curl gpg gawk m4 \
                build-essential software-properties-common rlwrap \
                qdirstat kompare curl autoconf gpg
```

## Install ASDF

Install the ASDF software version manager:

```
# Install ASDF
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.13.1

# To ~/.bash_profile add:
. "$HOME/.asdf/asdf.sh"
. "$HOME/.asdf/completions/asdf.bash"
```

Close and reopen your terminal.


## Use ASDF to Install Clojure

Install Java and Clojure:

```
# Java
asdf plugin-add java https://github.com/halcyon/asdf-java.git

asdf install java adoptopenjdk-17.0.9+9
asdf global java adoptopenjdk-17.0.9+9

# Clojure
asdf plugin add clojure https://github.com/asdf-community/asdf-clojure.git

asdf install clojure 1.11.1.1413
asdf global clojure 1.11.1.1413
```

Verify that everything installed correctly:

```
java -version
clj -version
```

...congrats! You're now ready to program in Clojure!