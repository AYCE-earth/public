---
layout: page
title: Search
permalink: /search/
description: Search anything in the site from here.
---




<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input" placeholder="Search..." autofocus>
</div>
<div id="results-container"></div>

<!-- Script pointing to jekyll-search.js -->
<script src="{{site.baseurl}}/assets/js/jekyll-search.min.js" type="text/javascript"></script>
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
    searchResultTemplate: '<a class="nostyle" href="{url}"><div class="row cards blog-list"><div class="col-md-3 image" style="background-image: url({image})"></div><div class="col-md-9 content"><h3 class="title">{title}</h3><p class="description">{description}</p></div></div></a>',
  noResultsText: 'No results found',
  json: '{{site.baseurl}}/search.json'
})
</script>
