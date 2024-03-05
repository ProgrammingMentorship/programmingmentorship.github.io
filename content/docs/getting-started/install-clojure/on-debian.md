---
title: "Debian"
weight: 1
---

# Clojure on Debian

Instructions for Debian GNU/Linux 12 (bookworm) 6.1.0-13-amd64.

Using the builtin **apt** package manager, install development tools:

```
apt-get install emacs vim git syncthing inotify-tools filezilla \
                fonts-firacode fonts-terminus curl gpg gawk m4 \
                build-essential software-properties-common rlwrap \
                qdirstat kompare
```

Install dev dependencies:

```
apt-get -y install curl git dirmngr gpg gawk build-essential autoconf \
        m4 libncurses5-dev libwxgtk3.2-dev libwxgtk-webview3.2-dev \
        libgl1-mesa-dev libglu1-mesa-dev libpng-dev libssh-dev unixodbc-dev \
        xsltproc fop libxml2-utils libncurses-dev default-jdk default-jre
```

Install the ASDF software version manager:

```
# Install ASDF
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.13.1

# To ~/.bash_profile add:
. "$HOME/.asdf/asdf.sh"
. "$HOME/.asdf/completions/asdf.bash"
```

Close and reopen your terminal.

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
```