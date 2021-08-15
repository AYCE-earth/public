---
title: Partner Up
image: /assets/images/partner.png
author: Eaternity
categories: 
    - partners
layout: post
lang: en
ref: join
---

## Join us as a partner

If you are interested in helping us distribute the poster: contact us with the number of poster you want, the address we can send them to and a quick info who you want to provide it to.

The only thing we ask you, is to make your distribution public (website, social media, etc.) - so we can share and endorse your contribution.

You will be allowed to distribute the poster freely starting with the 21.September 2021. That is the date when we are all going to release it to the public.


<div class="container">
    <div class="row">
        <div class="col-md-12">
            {% for item in site.data.partners %}
            <div class="item">
                <img height="100" width="100%" src="{{item.image}}" alt="{{item.name}}" title="{{item.name}}">
            </div>
            {% endfor %}
        </div>
    </div>
</div>


