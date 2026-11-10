from django.shortcuts import render

def invitation_view(request):
    """
    Renders the interactive Midnight Celestial wedding reception invitation
    for Tanvir & Afsa with soft Sanai melody and mobile-first experience.
    """
    context = {
        "couple": {
            "groom": "Tanvir",
            "groom_full": "Tanvir Ahmed",
            "groom_short": "Tanvir",
            "bride": "Afsa",
            "bride_full": "Afsa Jahan Rimi",
            "bride_short": "Afsa",
            "monogram": "T & A",
            "hashtag": "#TanvirWedsAfsa #TanvirAndAfsa2026",
            "groom_parents": {
                "father": "MD. Rowshan Iqbal",
                "mother": "Niru Shamsun Nahar",
            },
            "bride_parents": {
                "father": "AJM. Humayon Kabir",
                "mother": "Tahmina Akter",
            }
        },
        "event": {
            "title": "Royal Wedding Reception",
            "tagline": "Under the celestial canopy of stars, two souls unite to begin an eternal journey of love, friendship, and cherished moments.",
            "date_display": "Saturday, 12th December, 2026",
            "day": "SATURDAY",
            "date_short": "12.12.2026",
            "iso_date": "2026-12-12T13:30:00",
            "time_display": "1:30 PM onwards",
            "venue_name": "The Grand Hall Convention Center",
            "venue_detail": "Level-4, Hasnat Square",
            "address": "231/7 BB Road, Chashara",
            "city_state": "Narayanganj, Bangladesh",
            "maps_url": "https://maps.app.goo.gl/rhFnDu2FZYefCht66",
            "dress_code": "Midnight Celestial & Traditional Festive",
            "dress_description": "We warmly encourage shades of midnight blue, deep royal navy, celestial gold, starlight silver, or vibrant traditional festive attire.",
        },
        "palette": [
            {"name": "Midnight Obsidian", "hex": "#0A0E23", "border": "#F4D068"},
            {"name": "Celestial Gold", "hex": "#F4D068", "border": "#FFFFFF"},
            {"name": "Royal Sapphire", "hex": "#1E2A5E", "border": "#F4D068"},
            {"name": "Starlight Silver", "hex": "#E2E8F0", "border": "#F4D068"},
            {"name": "Nebula Amethyst", "hex": "#4C1D95", "border": "#F4D068"},
        ],
        "timeline": [
            {
                "time": "1:30 PM",
                "title": "Warm Welcome & Celestial Reception",
                "desc": "Arrival of honored family, relatives, and esteemed guests with refreshing welcome drinks and appetizers.",
                "icon": "fa-champagne-glasses"
            },
            {
                "time": "2:15 PM",
                "title": "Grand Entrance of Tanvir & Afsa",
                "desc": "Welcome the bride and groom as they step into their new beginning amidst cheers, prayers, and celebratory confetti.",
                "icon": "fa-wand-magic-sparkles"
            },
            {
                "time": "2:45 PM",
                "title": "Royal Feast & Celebratory Banquet",
                "desc": "A lavish banquet prepared in honor of our distinguished guests to celebrate this joyous union.",
                "icon": "fa-utensils"
            },
            {
                "time": "3:45 PM",
                "title": "Cake Cutting & Stage Moments",
                "desc": "Ceremonial cake cutting, family portraits, and capturing precious memories on the grand stage.",
                "icon": "fa-cake-candles"
            },
            {
                "time": "4:30 PM",
                "title": "Blessings, Photos & Sweet Farewells",
                "desc": "Sharing heartfelt prayers, blessings for the newlyweds, and distributing sweet tokens of gratitude.",
                "icon": "fa-heart"
            },
        ],
        "love_story": [
            {
                "period": "The Beginning",
                "title": "Written in the Stars",
                "desc": "Two distinct paths converging under an auspicious sky, discovering shared laughter, values, and an unspoken harmony."
            },
            {
                "period": "The Journey",
                "title": "Growing Stronger Together",
                "desc": "With the love, prayers, and blessings of both families, a beautiful bond blossomed into lifelong companionship."
            },
            {
                "period": "The Promise",
                "title": "Forever & Beyond",
                "desc": "On this glorious day of December 12, 2026, Tanvir and Afsa take their sacred vows to walk hand-in-hand through eternity."
            },
        ],
        "contacts": [
            {
                "name": "Tanvir Ahmed",
                "role": "Groom",
                "phone": "+8801823555505",
                "display_phone": "01823-555505",
                "clean_phone": "8801823555505"
            },
            {
                "name": "Faisal Ahmed",
                "role": "Event Coordinator / Family",
                "phone": "+8801911917926",
                "display_phone": "01911-917926",
                "clean_phone": "8801911917926"
            },
        ]
    }
    return render(request, "invitation.html", context)
