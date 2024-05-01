---
title: Home
permalink: /
---

{% for post in collections.posts | reverse %}
  <article class="flow inset-square">
    <div class="stack">
      <h2><a href="{{ post.url }}">#{{ post.fileSlug }} &middot; {{ post.data.title }}</a></h2>
      <p class="subdued">{{ post.data.pubDate }}</p>
    </div>
    {{ post.content | safe }}
  </article>
{% endfor %}