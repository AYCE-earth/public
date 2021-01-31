---
title: Avocado Theme
image: /assets/images/thought-catalog-620865-unsplash.jpg
description: Avocado is a bootstrap based, clean, minimal Jekyll theme.
buy-link: https://rzp.io/l/avocado-theme
author: john
categories:
    - work
layout: post
published: false
---



Bored of the same old website designs? [Avocado theme]({{site.baseurl}}/) presents a unique way to show off your skills on the web.


Avocado is a bootstrap based, clean, minimal Jekyll theme.

<a href="#buy-avocado-jekyll-theme" class="btn btn-success">Buy <strike>$25</strike> $19</a>

## Features
The theme is suitable for personal, blog, portfolio or a company website. The highlight of this theme is the [blog]({{site.baseurl}}/blog/){: target="_blank"} section.

### Bootsrap 4 Based
Avocado is built on the latest Bootstrap 4 Framework. The theme can be easily customized.



### Addictive typography
We have selected fonts that go with the design and highly legible. The focus is on the content.


![Avocado minimal responsive jekyll theme](/assets/images/avocado-theme.png)

![Avocado minimal responsive jekyll theme](/assets/images/avocado-jekyll-theme-screenshot-2.png)


### Responsive videos
Just add a class to your video iframe to make it responsive. For example

{% highlight html %}
<iframe class="video" src="https://www.youtube.com/embed/YE7VzlLtp-4"></iframe>
{% endhighlight %}

Adding ``video`` class to any iframe makes it responsive in Avocado.

<iframe class="video" src="https://www.youtube.com/embed/YE7VzlLtp-4?start=53&rel=0" allowfullscreen frameborder="0"></iframe>

### Paginated posts
Only 4 posts are shown in one page. Older posts are paginated. [Check it out](/blog){: target="_blank"}. You can change the number of posts in configuration.

``
paginate: 4
``

### Automatic Breadcrumbs
Breadcrumbs are generated for every page and post automatically. The default one looks like this.

{% include breadcrumbs.html %}

The color changes with the color scheme.


### Auto generated TOC
Table of contents is automatically generated for each post.

### Get comments
Disqus comments is pre-installed. Just sign-up, get a shortname and update the variable ``disqus`` in the configuration.

If you do not mention the ``disqus:`` value in configuration then the disqus comments code will not be included in the website.

### Track visitors
The website uses Google Analytics for tracking visitors. Use your own UA code in the configuration. Analytics code will not be used in the website if you do not mention UA code.

### Instant search
[Search]({{site.baseurl}}/search/){: target="_blank"} anything from your articles in an instant.

### Auto generated feed and sitemap
We have given much importance to SEO and made sure you have the [sitemap]({{site.baseurl}}/sitemap.xml){: target="_blank"} ready to submit to search engines. A well formatted [feed]({{site.baseurl}}/feed.xml){: target="_blank"} is readily available for RSS.

### MathJax Support
Now render beautiful math formulas by enabling MathJax in the configuration (enabled by default).

$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$

### Subtle animations
While scrolling through the page, you may observe some important elements fade in slowly. These elements will attract user attention.

### Fully responsive
It will be a pleasure reading content on avocado through a smartphone. Try it to know it.

### Clean code
The website is w3c compliant. We have tried to keep it without any errors.


### Chart.js Support
Use amazing charts using Chart.js. Enable Chart.js in the configuration(enabled by default)

<canvas id="myChart" width="400" height="200"></canvas>
<script>
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'Colors',
            data: [6, 5, 4, 3, 2, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
</script>



### Other simple stuff
We have given special importance in designing things like reading time, tags, share buttons, recent articles etc...

## Style Guide

### Typography
This is how the headlines will look like on this website.

<h1>This is a H1</h1>
<h2>This is a H2</h2>
<h3>This is a H3</h3>
<h4>This is H4, H5 and H6</h4>

{% highlight html %}

<h1>This is a H1</h1>
<h2>This is a H2</h2>
<h3>This is a H3</h3>
<h4>This is H4, H5 and H6</h4>

{% endhighlight %}
<p></p>

These are sample paragraphs showing *italics*, **bold** and ``code`` text style. Fonts are carefully choosen for longer user retention. The text is optimized for legibility. Viewers will get a good experience reading through the blog.

Here is an unordered  list

* Item 1
* Item 2
* Item 3

and an ordered list

1. Item 1
2. Item 2
3. Item 3


### Buttons

<button class="btn btn-default">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>

<br>

### Syntax Hihglighting

{% highlight html %}

<button class="btn btn-default">Default</button>

<button class="btn btn-primary">Primary</button>

<button class="btn btn-success">Success</button>

<button class="btn btn-warning">Warning</button>

<button class="btn btn-danger">Danger</button>

{% endhighlight %}


### Blockquote

> This is an important sentence from the paragraph.

> Another blockquote.
>
> With multiple lines!



### Table
This is a simple markdown table

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

<br>

{% highlight html %}
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
{% endhighlight %}




## Installation Guide

Right after the purchase, you will get a zip folder with the following files.
{% highlight html %}
.
.
├── _data
|   ├── main.yml
|
├── _includes
|   ├── author.html
|   └── header.html
|   └── footer.html
|   .
|   .
|
├── _layouts
|   ├── default.html
|   └── post.html
|
├── _posts
|   ├── {{page.path | remove: '_posts/'}}
|   └── 2009-04-26-title-of-post.md
|
├── _pages
|   ├── about.md
|   └── contact.md
|   .
|   .
|
├── _sass
|   └── _auhtor.scss
|   └── _google-fonts.scss
|   .
|   .
|
├── _config.yml
├── assets
├── blog
├── images
└── index.html

{% endhighlight %}

You can serve this locally using the command ``bundle exec jekyll serve``.

Make necessary changes in the **_config.yml**, **_data/main.yml** files.

All these files can be put in a repository(GitHub, GitLab etc) or hosting service where Jekyll is supported.

If Jekyll is not supported, then use the **_site/** folder which is actually a complete rendered website in itself.

Do contact us for any help - ``hello@webjeda.com``.





## Buy Avocado Jekyll Theme

<a class="btn btn-success" href="{{page.buy-link}}" target="_blank">Buy Now for $19</a>
<br />
<br />
<a class="btn btn-success" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FNZDEVW4QTT9C" target="_blank">Paypal</a>

**We provide 6 months support.**

<span class="right"><strong>✓</strong></span> Get your questions answered within 24 hours.

<span class="right"><strong>✓</strong></span> Get assistance with reported bugs and issues.

<span class="right"><strong>✓</strong></span> Help with included 3rd party assets.

You can always leave us an email at ``hello@webjeda.com``.
