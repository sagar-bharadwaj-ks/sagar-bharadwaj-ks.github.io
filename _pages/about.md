---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

# About

I am a **PhD student** in the Computer Science department at **Carnegie Mellon University**. I am advised by [Prof. Srinivasan Seshan](https://www.cs.cmu.edu/~srini/) and [Prof. Anthony Rowe](https://users.ece.cmu.edu/~agr/). 

I am working on building a world-scale federated localization and mapping system called **[OpenFLAME](https://openflam.github.io/)**. OpenFLAME enables the next generation of location-based applications, including large-scale mixed-reality, taking us closer to the dream of the Spatial Web -- the web where data is associated with and rendered against physical spaces.

<p align="center">
  <a href="https://openflam.github.io/">
    <img src= 
      "{{ "/images/openflame_logo.png" | prepend: base_path }}"
      alt="OpenFLAME Logo" 
      width="200"/>
  </a>
</p>

I also worked with **Netflix** on designing the bitrate ladder algorithm for 2D video streaming that is in the process of being deployed for millions of subscribers. Previously, I worked at **Microsoft Research** on building a [large-scale data discovery framework](https://www.vldb.org/pvldb/vol14/p1392-bharadwaj.pdf) and [optimizing inter-datacenter network](https://www.usenix.org/system/files/nsdi22-paper-sharma.pdf).

# Select Publications

{% for post in site.publications reversed %}
  {% if post.selected %}
    {% include single-publication.html post=post %}
  {% endif %}
{% endfor %}

[See all publications]({{ "/publications/" | prepend: base_path }})

# Experience

{% for post in site.experience reversed %}
  {% if post.selected %}
    {% include single-experience.html post=post %}
  {% endif %}
{% endfor %}
