---
layout: page
permalink: /categories/
title: Categories
description: All the posts are sorted based on their category.
---


<div class="categories-page">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
   <a name="{{ category_name | slugify }}"></a>    
    <h3 class="category-head">{{ category_name | capitalize}}</h3>
        <div class="row">
    {% for post in site.categories[category_name] %}
    <div class="col-md-4">
     <a class="nostyle" href="{{ site.baseurl }}{{ post.url }}">
       <div class="cards">
           <div class="image" style="background-image: url({{site.baseurl}}{{post.image}})"></div>
            <p class="text-center">{{post.title}}</p>
        </div>
     </a>
     </div>
    {% endfor %}
     </div>
  </div>
{% endfor %}
</div>