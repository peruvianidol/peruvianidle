---
title: Home
permalink: /
---

{% for post in collections.posts %}
  <p>{{ post.title }}</p>
  {{ post.content | safe }}
{% endfor %}