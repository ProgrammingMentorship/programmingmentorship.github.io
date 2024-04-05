---
weight: 2
title: "Software Alt"
---

# Software

...here's where you come into the picture. In the last section on
[hardware]({{< relref "/docs/getting-started/what-is-computing/hardware" >}})
we discussed how **processors** were designed - now we'll dig into how
programmers like you can put these processors to work!

By the end of this article, you will understand at a high level how
**programs** that we write are turned into 1's and 0's (machine code,)
that the processor can understand!



{{< mermaid class="center" >}}
flowchart TD

    subgraph Editor
        direction LR
        EI[Ideas] -- write --> ES[Source Code]
    end

    subgraph Compiler
        direction LR
        A[Source Code] -- compile --> B[Machine Instructions]
    end
    
    subgraph Processor
        direction LR
        D[Machine Instructions] -- execute --> E[Results!]
    end
    
    Editor -- a text file --> Compiler
    Compiler -- machine instructions --> Processor
    
{{< /mermaid >}}


