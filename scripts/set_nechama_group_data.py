# -*- coding: utf-8 -*-

import django
django.setup()

from sefaria.model.group import Group

g = Group().load({"name": u"גיליונות נחמה"})

g.toc = {
	"categories": ["Tanakh", "Commentary"],
	"title": "The Nechama Leibowitz Collection",
	"heTitle": u"גיליונות נחמה",
	"collectiveTitle": {
		"en": "Nechama Leibowitz",
		"he": u"נחמה ליבוביץ",
	},
	"description": "<span class='dedication'>In loving memory of our mother, grandmother, and great-grandmother Miriam Magda Reichner<br>The Rubinstein, Koschitzky & Pertman families<br> Toronto, Canada and Raanana, Israel</span>",
	"heDescription": u"<span class='dedication'>לעילוי נשמת אמנו, סבתנו, וסבתא רבתא שלנו מרים רייכנער<br>נדבת משפחות רובינשטיין, קושיצקי ופרטמן<br>טורונטו, קנדה ורעננה, ישראל</span class='dedication'>"}

g.save()


