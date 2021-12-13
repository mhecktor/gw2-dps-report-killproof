const data = [
    {
        "id": 88485,
        "name": "Legendary Divination",
        "iconUrl": "https://killproof.me/static/images/icon-ld.png",
        "key": [
            "killproofs",
            "linked_totals.killproofs"
        ]
    },
    {
        "id": 77302,
        "name": "Legendary Insight",
        "iconUrl": "https://killproof.me/static/images/icon-li.png",
        "key": [
            "killproofs",
            "linked_totals.killproofs"
        ]
    },
    {
        "id": 94020,
        "name": "Unstable Fractal Essence",
        "iconUrl": "https://killproof.me/static/images/icon-ufe.png",
        "key": [
            "killproofs",
            "linked_totals.killproofs"
        ]
    },
    {
        "id": 93781,
        "name": "Boneskinner Ritual Vial",
        "iconUrl": "https://wiki.guildwars2.com/images/d/d5/Boneskinner_Ritual_Vial.png",
        "key": [
            "killproofs",
            "linked_totals.killproofs"
        ]
    }
];

const raidBosses = {
    1: [
        {
            "name": "Vale Guardian Fragment",
            "id": 77705,
            "iconUrl": "https://wiki.guildwars2.com/images/b/be/Vale_Guardian_Fragment.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "name": "Gorseval Tentacle Piece",
            "iconUrl": "https://wiki.guildwars2.com/images/b/bf/Gorseval_Tentacle_Piece.png",
            "id": 77751,
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "name": "Sabetha Flamethrower Fragment Piece",
            "id": 77728,
            "iconUrl": "https://wiki.guildwars2.com/images/0/0c/Sabetha_Flamethrower_Fragment_Piece.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        }
    ],
    2: [
        {
            "name": "Slothasor Mushroom",
            "id": 77706,
            "iconUrl": "https://wiki.guildwars2.com/images/1/18/Slothasor_Mushroom_%28trophy%29.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "name": "White Mantle Abomination Crystal",
            "id": 77679,
            "iconUrl": "https://wiki.guildwars2.com/images/4/40/White_Mantle_Abomination_Crystal_%28trophy%29.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        }
    ],
    3: [
        {
            "name": "Turret Fragment",
            "id": 78873,
            "iconUrl": "https://wiki.guildwars2.com/images/c/c3/Turret_Fragment.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "id": 78902,
            "name": "Keep Construct Rubble",
            "iconUrl": "https://wiki.guildwars2.com/images/c/cb/Keep_Construct_Rubble_%28trophy%29.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "id": 78942,
            "name": "Ribbon Scrap",
            "iconUrl": "https://wiki.guildwars2.com/images/4/47/Ribbon_Scrap.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        }
    ],
    4: [
        {
            "id": 80623,
            "name": "Cairn Fragment",
            "iconUrl": "https://wiki.guildwars2.com/images/6/63/Cairn_the_Indomitable_Shard.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "name": "Recreation Room Floor Fragment",
            "id": 80269,
            "iconUrl": "https://wiki.guildwars2.com/images/f/f1/Rec_Room_Floor_Tile.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "name": "Impaled Prisoner Token",
            "id": 80087,
            "iconUrl": "https://wiki.guildwars2.com/images/a/aa/Impaled_Prisoner.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "name": "Fragment of Saul's Burden",
            "id": 80542,
            "iconUrl": "https://wiki.guildwars2.com/images/c/cf/Fragment_of_Saul%27s_Burden.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        }
    ],
    5: [
        {
            "name": "Desmina's Token",
            "id": 85993,
            "iconUrl": "https://wiki.guildwars2.com/images/1/11/Desmina%27s_Token.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "name": "River of Souls Token",
            "id": 85785,
            "iconUrl": "https://wiki.guildwars2.com/images/2/27/River_of_Souls_Token.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "name": "Statue Token",
            "id": 85800,
            "iconUrl": "https://wiki.guildwars2.com/images/7/79/Statue_Token.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "name": "Dhuum's Token",
            "id": 85633,
            "iconUrl": "https://wiki.guildwars2.com/images/2/24/Dhuum%27s_Token.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        }
    ],
    6: [
        {
            "id": 88543,
            "name": "Conjured Amalgamate Token",
            "iconUrl": "https://wiki.guildwars2.com/images/c/c4/Conjured_Amalgamate_Token.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "name": "Twin Largos Token",
            "id": 88860,
            "iconUrl": "https://wiki.guildwars2.com/images/0/0a/Twin_Largos_Token.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "id": 88645,
            "name": "Qadim's Token",
            "iconUrl": "https://wiki.guildwars2.com/images/b/ba/Qadim%27s_Token.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        }
    ],
    7: [
        {
            "id": 91246,
            "name": "Cardinal Adina's Token",
            "iconUrl": "https://wiki.guildwars2.com/images/2/28/Cardinal_Adina%27s_Token.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "name": "Cardinal Sabir's Token",
            "id": 91270,
            "iconUrl": "https://wiki.guildwars2.com/images/1/12/Cardinal_Sabir%27s_Token.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
        {
            "id": 91175,
            "name": "Ether Djinn's Token",
            "iconUrl": "https://wiki.guildwars2.com/images/0/0e/Ether_Djinn%27s_Token.png",
            "key": [
                "tokens",
                "linked_totals.tokens"
            ]
        },
    ]
}

const justAllIds = [...data, ...raidBosses[1], ...raidBosses[2], ...raidBosses[3], ...raidBosses[4], ...raidBosses[5], ...raidBosses[6], ...raidBosses[7]]