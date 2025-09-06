---
layout: archive
title:  A Model to Predict LLM Effectiveness
date:   2025-07-18
permalink: /misc/llm/
author_profile: true
tags: ["technical", "blog"]
abstract: What problems are LLMs good at and what problems do they struggle with? We break down problem-solving into four techniques, and compare LLMs to traditional computing and human reasoning on each technique. Only qualitative discussion. It has an interactive visualization! :)
---

_[Aditi Kabra](https://aditink.github.io/), [Margarida Ferreira](https://marghrid.github.io/), Sagar Bharadwaj_

{{ page.date | date: "%-d %B %Y" }}

This post presents a framework for predicting what problems LLMs are good at and what problems they would struggle with.
It divides problem-solving into four techniques, some of which LLMs are better at than others.
LLM performance on a problem can then be predicted by the kind of techniques that the solution requires.

The four techniques that we decompose problem-solving into are:
 1. *algorithmic computation*, which is executing a step-by-step procedure,
 2. *retrieval from memory*, which is recalling known facts,  
 3. *identifying decompositions*, which is breaking complex problems into simpler ones, and  
 4. *identifying abstractions*, which is recognizing shared structure across problems.

Sometimes, different combinations of techniques can solve the same problem.
For example, memorizing answers can compensate for slow or inaccurate algorithm execution.
On the other hand, some problems are hard to solve without the right technique.
For example, formalizing a novel idea described in natural language as a mathematical theorem requires the ability to *create abstractions*.
For each problem-solving technique, the properties we desire in a problem-solving approach (such as querying an LLM), are:
1. *accuracy*, that is, when an answer is provided, it is correct;
2. *efficiency*, where reaching the answer consumes minimal time and energy, and
3. *generality*, that is, the ability to provide an answer for most questions.

What other "solving systems" provide alternatives to LLM inference?
In this post, we consider *traditional computing*, that is programs without any statistical inference or learning from data, and *human reasoning*.

How do LLMs shape up compared to the alternatives?
For simplicity, let's consider each solving system in *isolation* (e.g., LLM inference alone without access to code execution or human feedback).
We discuss the tradeoffs that each problem-solving *system* offers for each solving *technique*.

1. *Algorithmic computation*, for example, multiplying two numbers following the multiplication algorithm.
   Traditional computing is very good at this.
   In comparison, humans and LLMs are inefficient and inaccurate.
   When multiplying two very large numbers, a traditional computer program will likely produce the correct answer faster than humans or LLMs that don't have access to calculators or traditional computing.
   On generality all three approaches perform well: traditional computing is able to execute anything computable (which all algorithms are by definition), while humans and LLMs can in principle simulate algorithm execution.

2. *Retrieval from memory*, for example, recounting the name of a specific bone in the human body.
   Traditional computing accomplishes this well already, using the Internet, where humanity has collectively created a vast store of information.
   For most questions about the world, a Google search turns up more information than most humans can recall.
   LLMs are also very good at remembering information about the world, as they are trained on the Internet, though perhaps a bit worse than traditional computing.
   LLMs suffer on generality because of information lost during the training process, which might lead them to forget information that is not well represented in the training data.
   They are generally less energy efficient, and they are less accurate due to hallucination.
   Humans are in comparison less general with less information memorized, and usually slower, especially when recalling older memories of more obscure facts.

3. *Identifying decompositions*, which is recognizing how to break down a problem into sub-problems, and stitching the pieces back together.
   For example, counting the number of bones in the human body that end with suffix “-oid” can be *divided into*  
   (1) recalling the names of all bones,  
   (2) filtering this list to keep only names ending in “-oid”, and  
   (3) counting them.
   Traditional computing can decompose problems for narrow domains through *symbolic AI* (traditional, rule-based solving systems, for example pre-machine learning chess engines).
   But traditional computing does not provide a solution at the level of generality required to solve most real-world problems out-of-the-box.
   LLMs begin to show the ability to break general problems down, especially in the more recent reasoning models.
   But for unseen problems, humans are currently more accurate.
   Indeed, problem decomposition is fundamental to how we operate, letting us solve our most complex problems by breaking them down into more manageable pieces, delegating some pieces to specialized experts, and yet other pieces to tools such as computer programs.

4. *Identifying abstractions*, that is, recognizing how to view objects as a coherent subset of their behaviors or properties, thus becoming able to recognize the abstract similarities (and differences) between them.
   This is what lets us convert word problems into mathematical equations and back.
   Traditional computing, via carefully designed symbolic AI, can do this for narrow domains, but not at the level of generality that solves most real-world problems.
   LLMs begin to show the ability to reason with abstraction for real world objects and ideas.
   But currently, in our experience, well-trained humans are more accurate and creative.
   Understanding and working with abstractions is again a fundamental part of modern human existence.
   In everyday life, society is an abstraction that lets people interact with the 8 billion other people in the world without getting overwhelmed by reasoning about every individual's role.
   At the leading edge of human problem-solving ability, we search for the right abstractions to predict or explain the behavior of the world, such as physicists seeking a small set of rules to predict the behavior of the universe, or mathematicians developing the right language to precisely represent the defining features of problems.

In summary, traditional computing has high accuracy, but is limited by generality when identifying abstractions and decompositions.
Humans and LLMs are pretty general.
But LLMs currently have accuracy limitations.
Humans, while comparatively accurate, are limited by memory and speed of mental execution of algorithms.
The overall "usefulness" of a problem-solving system for a given technique is generally bounded by its weakest dimension.
For example, when humans face an algorithmic question, generality is not an issue and performance on accuracy can be acceptable, but efficiency becomes the bottleneck that makes complex computations out of reach without external tools.
The interactive visualization below summarizes this discussion, where the graphs are meant to be *qualitative* and approximate.
<style>
.responsive-iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 102%; /* aspect ratio */
  height: 0;
  overflow: hidden;
}

.responsive-iframe-container iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>

<div class="responsive-iframe-container">
  <iframe
    src="https://sagar-bharadwaj-ks.github.io/LLMBlogVisualization/"
    title="LLM Blog Visualization"
    loading="lazy"
    allowfullscreen>
  </iframe>
</div>

This discussion gives us a framework to predict what problems LLMs would be good at solving, and where they would benefit from external help, tooling, and verification of their output.
To multiply large numbers, LLMs would generally be better off writing a traditional computer program than reasoning through the problem directly.
LLMs would be able to recall the name of a bone in the human body easily and fairly accurately.
LLMs can identify problem decompositions.
Especially for simple problems like listing bones with suffix “-oid”, how to decompose this style of questions is well-known, and LLMs will do well by leaning on their memory of what process to follow.
But if the problem is fundamentally new with little available data on how to solve this problem “type”, human guidance will likely produce better results, and it is a good idea to write a checking procedure to catch any accuracy issues.
In data-rich domains, e.g., software development, it is possible that LLMs compensate for lower decomposition and abstraction abilities with superior memory compared to humans.

All four types of reasoning play off each other.
*Abstraction* is most powerful when one has *memory* of many objects to compare and draw abstract analogies between.
*Decomposition* is especially useful when some pieces can be solved *algorithmically*, some others by *remembering* the answer to the sub-question, and yet others by noticing that sub-question has common features with another one that you know how to solve as they both can be described by the same *abstraction*.
A significant strength of LLMs is that they show some ability to perform operations across all four domains.
Humans have experienced drastically improved problem-solving ability as we build tools that compensate for the areas where we are weakest.
Similarly, for problems that LLMs struggle with but that humanity cares about automating, building the *tools* that compensate for their weaknesses will likely be an interesting area of research.