---
title: MacOS
weight: 3
---

# Clojure on MacOS

You can use the 
[official guide](https://clojure.org/guides/install_clojure)
if you want, but this method gives more flexibility
in choosing your specific Java version.

This guide assumes you are using the **zsh** shell.

## Install Homebrew

[Homebrew](https://brew.sh/) is a package manager for MacOS.

Copy and paste this into your terminal to download and run the install script:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Install ASDF



Install the ASDF language manager:

```
brew update
brew install asdf
```

Make sure ASDF starts when you open your terminal:

```
echo -e "\n. $(brew --prefix asdf)/libexec/asdf.sh" >> ${ZDOTDIR:-~}/.zshrc
```

**Close and reopen your terminal.**

## Install Java and Clojure

Run these commands to install Java and Clojure:

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

Finally, add this line to your `~/.zshrc` file:

```
. ~/.asdf/plugins/java/set-java-home.zsh
```

**Close and reopen your terminal.** Then run:

```
java -version
clj -version
```

...if the versions pop up correctly, we are done!
