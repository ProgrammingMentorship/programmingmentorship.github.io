---
title: Introduction
type: docs
---

# Learn to Program!

Join us in a fun-first community to learn the fundamentals of good programming.

{{< mermaid class="center" >}}
flowchart LR
    C[Clojure] --> A[Functions]
    C --> D[Data]
    A --> R[Recursion]
    A --> CF[Control Flow]
    D --> P[Primitives]
    D --> DS[Data Structures]
    R --> PR[Fun & Projects]
    CF --> PR
    P --> PR
    DS --> PR
    PR --> P1[JavaScript & Web Apps]
    PR --> P2[C & Embedded]
    PR --> P3[Server Systems]
    PR --> P4[Video Games]
{{< /mermaid >}}


{{< columns >}}

## Good Foundations

With the aim of grounding students in a strong foundation of systems
design and computer science, we teach *functional programming* using
the Clojure language.

<--->

## Practical Fun

To keep students engaged, we emphasize project-based collaborative
work that produce interesting programs students can show off and be
proud of.

{{< /columns >}}


{{< hint warning >}}
**Course Under Construction**  
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
{{< /hint >}}


```scm
(define (sum-of-squares x y)
  (+ (square x) (square y)))
  
(sum-of-squares 3 4)
25
```
