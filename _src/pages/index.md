---
title: Home
permalink: /
eleventyExcludeFromCollections: true
---

{% for post in collections.posts | reverse %}
  <article class="flow inset-square">
    <div class="stack">
      <h2><a href="{{ post.url }}">#{{ post.fileSlug }} &middot; {{ post.data.title }}</a></h2>
      <p class="subdued">{{ post.data.date }}</p>
    </div>
    {{ post.content | safe }}
  </article>
{% endfor %}