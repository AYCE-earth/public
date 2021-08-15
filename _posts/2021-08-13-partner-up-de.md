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


{% for item in site.data.partners %}
<div class="item">
    <img height="100" width="100%" src="{{item.image}}" alt="{{item.name}}" title="{{item.name}}">
</div>
{% endfor %}