---
title: Partner Up
image: /assets/images/partner.png
author: Eaternity
categories: 
    - partners
layout: post
lang: de
ref: join
---

## Schließ dich uns als Partner an

Wenn du daran interessiert bist, uns bei der Verteilung des Plakats zu helfen: kontaktiere uns mit der Anzahl der gewünschten Plakate, der Adresse, an die wir sie schicken können, und einer kurzen Info, an wen du sie weitergeben möchtest.

Das Einzige, worum wir dich bitten, ist, dass du deine Verteilung öffentlich machst (Website, soziale Medien, etc.) - damit wir deinen Beitrag teilen und unterstützen können.

Sie dürfen das Poster ab dem 21. September 2021 frei verteilen. Das ist das Datum, an dem wir es für die Öffentlichkeit freigeben werden.

<small>Wir freuen uns über alle Partner, die uns bei der Verteilung des Posters helfen (<a href="/blog/poster-campaign-de/">siehe hier</a>). Wenn Sie ein schneller Entscheider sind, können Sie uns <a href="/de/purchase/">hier</a> mitteilen, dass wir Ihnen sofort 100 Plakate schicken sollen.</small>


<div class="container">
    <div class="row">
        {% for item in site.data.partners %}
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-4">
            <div class="item">
                <img height="100" width="100%" src="{{item.image}}" alt="{{item.name}}" title="{{item.name}}">
            </div>
        </div>
        {% endfor %}
    </div>
</div>

