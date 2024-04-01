---
title: Peruvian Idle
permalink: /
---

{% for issue in collection.issues %}
  {{ issue.templateContent }}
{% endfor %}