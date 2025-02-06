const { Client, Events, EmbedBuilder } = require("discord.js");

// Crear nuevo cliente de Discord
const client = new Client({
    intents: 53608447
});

// Definir los datos dentro del código
const characters = [
    {
        "id": 1,
        "name": "Storm",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607171%2Frivals%2520v2%2Fstorm_jan4ge.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=256&q=75",
        "parallelogram": {
            "title": "Storm",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher",
                "description": "He can land multiple consistent damage to her in a safe distance, forcing her to retreat."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela",
                "description": "Her long-range attacks can be a pain to Storm's low mobility in the air."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLuna_Snow_Icon_snupak.webp&w=96&q=75",
                "name": "Luna Snow",
                "description": "Her ultimate ability can block Storm's ultimate."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Fist_Icon_t1byee.webp&w=96&q=75",
                "name": "Iron Fist",
                "description": "He can surprise and burst Storm in mid-air and make her ineffective."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke",
                "description": "She can surprise Storm from behind, while her burst damage can force Storm to disengage."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=96&q=75",
                "name": "Groot"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FPeni_Parker_Icon_u0uafv.webp&w=96&q=75",
                "name": "Peni Parker"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagik_Icon_tkyxty.webp&w=96&q=75",
                "name": "Magik"
            }
        ]
    },
    {
        "id": 2,
        "name": "Iron Man",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737619436%2Frivals%2520v2%2Fironmannew_eadtkr.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=256&q=75",
        "parallelogram": {
            "title": "Iron Man",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FStar-Lord_Icon_mvulbd.webp&w=96&q=75",
                "name": "Star-Lord",
                "description": "He can chase and solo-kill Iron Man in mid air almost instantly."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher",
                "description": "He can pressure Iron Man while maintaining consistent damage output, and force him to retreat."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke",
                "description": "Her mobility and quick damage output can burst Iron Man before he can even escape."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man",
                "description": "He can be a pain to deal in the air with or without the Venom's Suit Expulsion skill."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela",
                "description": "She can land massive damage to him in a safe distance."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=96&q=75",
                "name": "Hawkeye",
                "description": "Similar with Hela, he can land massive damage to him in a safe distance."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Fist_Icon_t1byee.webp&w=96&q=75",
                "name": "Iron Fist",
                "description": "He can get behind and solo kill Iron Man in mid air."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLuna_Snow_Icon_snupak.webp&w=96&q=75",
                "name": "Luna Snow"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FPeni_Parker_Icon_u0uafv.webp&w=96&q=75",
                "name": "Peni Parker"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FJeff_the_Land_Shark_Icon_mkp5f4.webp&w=96&q=75",
                "name": "Jeff"
            }
        ]
    },
    {
        "id": 3,
        "name": "Invisible Woman",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607168%2Frivals%2520v2%2Finvis_woman_sdpex8.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736610733%2FRivals%2Finvis-woman-x1_bga15m.png&w=256&q=75",
        "parallelogram": {
            "title": "Invisible Woman",
            "subtitle": "Strategist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher",
                "description": "Punisher's ultimate can outdamage Invisible Woman's ultimate."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMoon_Knight_Icon_c8keu4.webp&w=96&q=75",
                "name": "Moon Knight",
                "description": "With great positioning, he can pressure her with Crescent Dart."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSquirrel_Girl_Icon_gtg592.webp&w=96&q=75",
                "name": "Squirrel Girl",
                "description": "Squirrel Girl can completely melt \u2153 of Guardian Shield\u2019s health per Burst Acorn (LMB). Her Unbeatable Squirrel Tsunami (Q) passes through her Guardian Shield."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FHulk_Icon_d2xnfs.webp&w=96&q=75",
                "name": "Hulk"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Fist_Icon_t1byee.webp&w=96&q=75",
                "name": "Iron Fist"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484734%2FRivals%2FWolverine_Icon_xhlm8q.webp&w=96&q=75",
                "name": "Wolverine"
            }
        ]
    },
    {
        "id": 4,
        "name": "Mr. Fantastic",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607169%2Frivals%2520v2%2Fmr_fantastic_np1ays.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736686183%2FRivals%2Fmr_fantastic_rh931l.png&w=256&q=75",
        "parallelogram": {
            "title": "Mr. Fantastic",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm",
                "description": "Even though Mr. Fantastic can block Storm's ultimate with Reflexive Rubber, she can still deal massive damage to him using Goddess Boost."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher",
                "description": "His Culling Turret ability can melt down Mr. Fantastic's hp before he can even get value."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "Even though Mr. Fantastic can block Iron Man's ultimate with Reflexive Rubber, his flight abilities and consistent damage output can still overwhelm him."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=96&q=75",
                "name": "Hawkeye",
                "description": "He can pressure Mr. Fantastic from a safe distance."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela",
                "description": "Similar to Hawkeye, she can pressure Mr. Fantastic from a safe distance."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FPeni_Parker_Icon_u0uafv.webp&w=96&q=75",
                "name": "Peni Parker"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FHulk_Icon_d2xnfs.webp&w=96&q=75",
                "name": "Hulk"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSquirrel_Girl_Icon_gtg592.webp&w=96&q=75",
                "name": "Squirrel Girl"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man"
            }
        ]
    },
    {
        "id": 5,
        "name": "Venom",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607173%2Frivals%2520v2%2Fvenom_lu4wjv.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FVenom_Icon_mwro7g.webp&w=256&q=75",
        "parallelogram": {
            "title": "Venom",
            "subtitle": "Vanguard"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher",
                "description": "His Culling Turret ability can be a nightmare for Venom's hp."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm",
                "description": "Her Goddess Boost ability can pressure Venom if he attempts to dive."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagneto_Icon_tlpvn5.webp&w=96&q=75",
                "name": "Magneto",
                "description": "His shield can negate Venom\u2019s attacks, while Metal Bulwark shields allies from Venom\u2019s dive attempts."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "His flight abilities and consistent damage can pressure Venom easily."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FAdam_Warlock_Icon_exkpa4.webp&w=96&q=75",
                "name": "Adam Warlock"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FNamor_Icon_ri6epi.webp&w=96&q=75",
                "name": "Namor"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FRocket_Raccoon_Icon_fqblcl.webp&w=96&q=75",
                "name": "Rocket Racoon"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FWinter_Soldier_Icon_lceqsq.webp&w=96&q=75",
                "name": "Winter Soldier"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=96&q=75",
                "name": "Groot"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLoki_Icon_tysbig.webp&w=96&q=75",
                "name": "Loki"
            }
        ]
    },
    {
        "id": 6,
        "name": "Black Panther",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737619435%2Frivals%2520v2%2Fbpnew_xzsr2r.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=256&q=75",
        "parallelogram": {
            "title": "Black Panther",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FStar-Lord_Icon_mvulbd.webp&w=96&q=75",
                "name": "Star-Lord",
                "description": "He can land consistent DPS to T'Challa without getting hit by his spears or dashes, making him a natural counter."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736686183%2FRivals%2Fmr_fantastic_rh931l.png&w=96&q=75",
                "name": "Mr. Fantastic",
                "description": "His Reflexive Rubber negates T'Challa's spear and dashes."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FPeni_Parker_Icon_u0uafv.webp&w=96&q=75",
                "name": "Peni Parker",
                "description": "She can prevent or slow down Black Panther by placing mines and spider nest."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "His flight ability allows him to swiftly burst him down without being reached."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm",
                "description": "She can deal massive damage to him while being unreachable."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FNamor_Icon_ri6epi.webp&w=96&q=75",
                "name": "Namor",
                "description": "He can disrupt Black Panther from engaging the enemy backline using his spawns."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLoki_Icon_tysbig.webp&w=96&q=75",
                "name": "Loki",
                "description": "His lamp and clone swapping abilities can prevent Black Panther from killing him instantly."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FCloak__26_Dagger_Icon_qgjwi4.webp&w=96&q=75",
                "name": "Cloak & Dagger",
                "description": "She's the best strategist to counter Black Panther. All of her abilities makes him ineffective in the game."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FAdam_Warlock_Icon_exkpa4.webp&w=96&q=75",
                "name": "Adam Warlock"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Widow_Icon_hfelvs.webp&w=96&q=75",
                "name": "Black Widow"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=96&q=75",
                "name": "Hawkeye"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FWinter_Soldier_Icon_lceqsq.webp&w=96&q=75",
                "name": "Winter Soldier"
            }
        ]
    },
    {
        "id": 7,
        "name": "Cloak & Dagger",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607168%2Frivals%2520v2%2Fcnd_ivfbce.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FCloak__26_Dagger_Icon_qgjwi4.webp&w=256&q=75",
        "parallelogram": {
            "title": "Cloak & Dagger",
            "subtitle": "Strategist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagneto_Icon_tlpvn5.webp&w=96&q=75",
                "name": "Magneto",
                "description": "His ultimate can pierce through Cloak and Dagger's ultimate. You just need to time his ult and use it when she stops her dashes."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagik_Icon_tkyxty.webp&w=96&q=75",
                "name": "Magik",
                "description": "She can disrupt her by flanking from the back while being tanky and hard to kill."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela",
                "description": "Hela can target C&D from a safe distance, forcing her to retreat."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=96&q=75",
                "name": "Hawkeye",
                "description": "Same with Hela, he can target C&D from a safe distance, forcing her to retreat."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke",
                "description": "She can disrupt C&D by attacking from behind and escaping quickly."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FVenom_Icon_mwro7g.webp&w=96&q=75",
                "name": "Venom"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FHulk_Icon_d2xnfs.webp&w=96&q=75",
                "name": "Hulk"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Fist_Icon_t1byee.webp&w=96&q=75",
                "name": "Iron Fist"
            }
        ]
    },
    {
        "id": 8,
        "name": "Groot",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607167%2Frivals%2520v2%2Fgroot_xxhfud.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=256&q=75",
        "parallelogram": {
            "title": "Groot",
            "subtitle": "Vanguard"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher",
                "description": "He can easily destroy Groot's walls and deal massive damage to Groot as well."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FVenom_Icon_mwro7g.webp&w=96&q=75",
                "name": "Venom",
                "description": "Venom can escape over Groot's walls whenever Groot decides to block him in the back."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm",
                "description": "Her Goddess Boost ability can simply burst him from above."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484734%2FRivals%2FWolverine_Icon_xhlm8q.webp&w=96&q=75",
                "name": "Wolverine",
                "description": "He can easily catch Groot and focus on him due to his low mobility."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "He can pressure Groot and force him to back up or melt his hp with his Unibeam ability."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FWinter_Soldier_Icon_lceqsq.webp&w=96&q=75",
                "name": "Winter Soldier",
                "description": "He can easily hook Groot if he overcommits and kill him instantly since Groot has low mobility."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela",
                "description": "Groot has low mobility. So she can pressure Groot and force him to back up."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FCloak__26_Dagger_Icon_qgjwi4.webp&w=96&q=75",
                "name": "Cloak & Dagger",
                "description": "Cloak and Dagger can blind Groot, making it hard for him to know where to build a wall."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMantis_Icon_wjrezu.webp&w=96&q=75",
                "name": "Mantis"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLuna_Snow_Icon_snupak.webp&w=96&q=75",
                "name": "Luna Snow"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=96&q=75",
                "name": "Hawkeye"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Widow_Icon_hfelvs.webp&w=96&q=75",
                "name": "Black Widow"
            }
        ]
    },
    {
        "id": 9,
        "name": "Hela",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607168%2Frivals%2520v2%2Fhela_lluyca.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=256&q=75",
        "parallelogram": {
            "title": "Hela",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=96&q=75",
                "name": "Hawkeye",
                "description": "Long-range against long-range fight can be effective. It will only be a matter of skill."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher",
                "description": "His consistent damage shots can pressure her and make her retreat."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagik_Icon_tkyxty.webp&w=96&q=75",
                "name": "Magik",
                "description": "She can flank and pressure Hela while being hard to hit."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FCaptain_America_Icon_cehji6.webp&w=96&q=75",
                "name": "Captain America",
                "description": "Rushing forward while shielded in front of Hela can pressure her into a defensive position."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FDoctor_Strange_Icon_qtd9ik.webp&w=96&q=75",
                "name": "Doctor Strange",
                "description": "He can block Hela's attacks and ultimate by flying and shielding in front of her."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLuna_Snow_Icon_snupak.webp&w=96&q=75",
                "name": "Luna Snow",
                "description": "Luna Snow can make Hela less of a threat with her ultimate."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLoki_Icon_tysbig.webp&w=96&q=75",
                "name": "Loki",
                "description": "His mischief abilities can slow down Hela's playstyle."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FStar-Lord_Icon_mvulbd.webp&w=96&q=75",
                "name": "Star-Lord"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Widow_Icon_hfelvs.webp&w=96&q=75",
                "name": "Black Widow"
            }
        ]
    },
    {
        "id": 10,
        "name": "Luna Snow",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607169%2Frivals%2520v2%2Fluna_s8dvx4.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLuna_Snow_Icon_snupak.webp&w=256&q=75",
        "parallelogram": {
            "title": "Luna Snow",
            "subtitle": "Strategist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "His ultimate can pierce through Luna Snow's ultimate."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke",
                "description": "She can flank and solo-kill Luna easily."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FScarlet_Witch_Icon_mdkxbf.webp&w=96&q=75",
                "name": "Scarlet Witch",
                "description": "Her ultimate ability can pierce through Luna Snow's ultimate."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FCaptain_America_Icon_cehji6.webp&w=96&q=75",
                "name": "Captain America",
                "description": "He can rush forward and pressure her, since Luna has limited mobility. And his shield can block her freezing ability."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLoki_Icon_tysbig.webp&w=96&q=75",
                "name": "Loki",
                "description": "He can simply copy Luna and activate her ultimate."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FStar-Lord_Icon_mvulbd.webp&w=96&q=75",
                "name": "Star-Lord"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=96&q=75",
                "name": "Groot"
            }
        ]
    },
    {
        "id": 11,
        "name": "Magik",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607169%2Frivals%2520v2%2Fmagik_t6cemu.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagik_Icon_tkyxty.webp&w=256&q=75",
        "parallelogram": {
            "title": "Magik",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "Magik won't be able to reach him in open areas."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm",
                "description": "Just like Iron Man, Magik won't be able to reach her in open areas."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=96&q=75",
                "name": "Hawkeye",
                "description": "His range and vision control can force her to play defensively."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FDoctor_Strange_Icon_qtd9ik.webp&w=96&q=75",
                "name": "Doctor Strange",
                "description": "His Eye of Agamotto prevents Magik's teleportation."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FVenom_Icon_mwro7g.webp&w=96&q=75",
                "name": "Venom",
                "description": "You can help your strategists easily when they're being flanked."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLuna_Snow_Icon_snupak.webp&w=96&q=75",
                "name": "Luna Snow",
                "description": "Freezing abilities disrupt her combos."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FAdam_Warlock_Icon_exkpa4.webp&w=96&q=75",
                "name": "Adam Warlock"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLoki_Icon_tysbig.webp&w=96&q=75",
                "name": "Loki"
            }
        ]
    },
    {
        "id": 12,
        "name": "Iron Fist",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607168%2Frivals%2520v2%2Firon_fist_uxavml.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Fist_Icon_t1byee.webp&w=256&q=75",
        "parallelogram": {
            "title": "Iron Fist",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FNamor_Icon_ri6epi.webp&w=96&q=75",
                "name": "Namor",
                "description": "Namor can disrupt Iron Fist from engaging the enemy backline using his spawns."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FCaptain_America_Icon_cehji6.webp&w=96&q=75",
                "name": "Captain America",
                "description": "Cap is too tanky to be burst by Iron Fist. Plus he can use shield to negate his normal attacks."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736610733%2FRivals%2Finvis-woman-x1_bga15m.png&w=96&q=75",
                "name": "Invisible Woman",
                "description": "With her Close Quarter Combat combo, or even her simple Agile Strike + Force Physics \u2014 Sue can effectively flake off an Iron Fist. Her Force Physics is also doubled whenever he uses his Harmony Recovery (E)."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FRocket_Raccoon_Icon_fqblcl.webp&w=96&q=75",
                "name": "Rocket Racoon",
                "description": "Rocket can escape easily when he gets pounced by Iron Fist, making it difficult for him to be killed."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLoki_Icon_tysbig.webp&w=96&q=75",
                "name": "Loki",
                "description": "Iron Fist won't be able to land damage inside Loki's Regeneration Domain."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther"
            }
        ]
    },
    {
        "id": 13,
        "name": "Peni Parker",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607170%2Frivals%2520v2%2Fpeni_wdcktf.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FPeni_Parker_Icon_u0uafv.webp&w=256&q=75",
        "parallelogram": {
            "title": "Peni Parker",
            "subtitle": "Vanguard"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "Flight abilities allow him to bypass nests and mines, giving him freedom to attack her from any angle."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm",
                "description": "Her Normal attacks and Bolt Rush ability are more than enough to reduce Peni's HP instantly. She can also destroy nests and mines easily."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher",
                "description": "He can quickly destroy spider nests and mines from a safe distance."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FStar-Lord_Icon_mvulbd.webp&w=96&q=75",
                "name": "Star-Lord",
                "description": "He can pressure from different angles while maintaining consistent damage output"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FDoctor_Strange_Icon_qtd9ik.webp&w=96&q=75",
                "name": "Doctor Strange",
                "description": "Shield and portals help team push through her defenses while blocking her damage"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=96&q=75",
                "name": "Groot",
                "description": "His normal attacks can destroy spider nests and mines from a safe position."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLoki_Icon_tysbig.webp&w=96&q=75",
                "name": "Loki",
                "description": "Can escape to Peni's ultimate easily by swapping position to another doppleganger."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagik_Icon_tkyxty.webp&w=96&q=75",
                "name": "Magik"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484734%2FRivals%2FWolverine_Icon_xhlm8q.webp&w=96&q=75",
                "name": "Wolverine"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FHulk_Icon_d2xnfs.webp&w=96&q=75",
                "name": "Hulk"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Fist_Icon_t1byee.webp&w=96&q=75",
                "name": "Iron Fist"
            }
        ]
    },
    {
        "id": 14,
        "name": "Hulk",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607168%2Frivals%2520v2%2Fhulk_i6rxrq.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FHulk_Icon_d2xnfs.webp&w=256&q=75",
        "parallelogram": {
            "title": "Hulk",
            "subtitle": "Vanguard"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "He can pressure Hulk from above using his Unibeam ability, preventing him from diving onto the back line."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm",
                "description": "Her Goddess Boost and consistent damage output can force Hulk to retreat."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher",
                "description": "He can melt Hulk's hp with his consistent DPS and force him to retreat."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThor_Icon_vziina.webp&w=96&q=75",
                "name": "Thor",
                "description": "Thor can pressure and push Hulk away out of his position."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FDoctor_Strange_Icon_qtd9ik.webp&w=96&q=75",
                "name": "Doctor Strange"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=96&q=75",
                "name": "Groot"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FAdam_Warlock_Icon_exkpa4.webp&w=96&q=75",
                "name": "Adam Warlock"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FCloak__26_Dagger_Icon_qgjwi4.webp&w=96&q=75",
                "name": "Cloak & Dagger"
            }
        ]
    },
    {
        "id": 15,
        "name": "Hawkeye",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607167%2Frivals%2520v2%2Fhawkeye_yybihp.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=256&q=75",
        "parallelogram": {
            "title": "Hawkeye",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke",
                "description": "Her high mobility and burst damage can kill him from behind."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FDoctor_Strange_Icon_qtd9ik.webp&w=96&q=75",
                "name": "Doctor Strange",
                "description": "He can easily block him making his arrows ineffective."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=96&q=75",
                "name": "Groot",
                "description": "He can easily block his arrows with walls."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man",
                "description": "He can eliminate Hawkeye with a single combo if he catches him off guard."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela",
                "description": "Her long distance shots makes him focus on her instead of attacking her allies."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FPeni_Parker_Icon_u0uafv.webp&w=96&q=75",
                "name": "Peni Parker"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FJeff_the_Land_Shark_Icon_mkp5f4.webp&w=96&q=75",
                "name": "Jeff"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FAdam_Warlock_Icon_exkpa4.webp&w=96&q=75",
                "name": "Adam Warlock"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Widow_Icon_hfelvs.webp&w=96&q=75",
                "name": "Black Widow"
            }
        ]
    },
    {
        "id": 16,
        "name": "Psylocke",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607170%2Frivals%2520v2%2Fpsy_feub8t.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=256&q=75",
        "parallelogram": {
            "title": "Psylocke",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FStar-Lord_Icon_mvulbd.webp&w=96&q=75",
                "name": "Star-Lord",
                "description": "His mobility, evasiveness, and consistent damage can pressure Psylocke."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FScarlet_Witch_Icon_mdkxbf.webp&w=96&q=75",
                "name": "Scarlet Witch",
                "description": "She can overwhelm Psylocke with her constant DPS."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FNamor_Icon_ri6epi.webp&w=96&q=75",
                "name": "Namor",
                "description": "He can defend the backline with spawns if Psylocke tries to flank."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FVenom_Icon_mwro7g.webp&w=96&q=75",
                "name": "Venom",
                "description": "Venom is too mobile and tanky for Psylocke to handle."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736610733%2FRivals%2Finvis-woman-x1_bga15m.png&w=96&q=75",
                "name": "Invisible Woman",
                "description": "Sue\u2019s invisibility exempts her from being in the line of sight for Psylocke\u2019s Dance of the Butterfly (Q). The healing rate of Invisible Boundary (Q) also outheals the damage done by Psylocke\u2019s ultimate."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLuna_Snow_Icon_snupak.webp&w=96&q=75",
                "name": "Luna Snow",
                "description": "Her freezing abilities can disrupt Psylocke's movements."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMantis_Icon_wjrezu.webp&w=96&q=75",
                "name": "Mantis",
                "description": "Her sleeping abilities can shut down Psylocke."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FAdam_Warlock_Icon_exkpa4.webp&w=96&q=75",
                "name": "Adam Warlock"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=96&q=75",
                "name": "Groot"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FJeff_the_Land_Shark_Icon_mkp5f4.webp&w=96&q=75",
                "name": "Jeff"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FRocket_Raccoon_Icon_fqblcl.webp&w=96&q=75",
                "name": "Rocket"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Widow_Icon_hfelvs.webp&w=96&q=75",
                "name": "Black Widow"
            }
        ]
    },
    {
        "id": 17,
        "name": "Captain America",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607168%2Frivals%2520v2%2Fcap_j99m6o.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FCaptain_America_Icon_cehji6.webp&w=256&q=75",
        "parallelogram": {
            "title": "Captain America",
            "subtitle": "Vanguard"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela",
                "description": "Her Soul Drainer's stun and massive damage can pressure him from a safe distance."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm",
                "description": "Her aerial abilities and consistent damage output can make him less of a threat."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FScarlet_Witch_Icon_mdkxbf.webp&w=96&q=75",
                "name": "Scarlet Witch",
                "description": "Her consistent DPS can overwhelm him."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FDoctor_Strange_Icon_qtd9ik.webp&w=96&q=75",
                "name": "Doctor Strange",
                "description": "His Eye of Agamotto bypasses cap's shield defenses."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLoki_Icon_tysbig.webp&w=96&q=75",
                "name": "Loki",
                "description": "His clones and mobility can make it hard for Cap to pressure him."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FAdam_Warlock_Icon_exkpa4.webp&w=96&q=75",
                "name": "Adam Warlock"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=96&q=75",
                "name": "Groot"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FRocket_Raccoon_Icon_fqblcl.webp&w=96&q=75",
                "name": "Rocket"
            }
        ]
    },
    {
        "id": 18,
        "name": "Moon Knight",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737619034%2Frivals%2520v2%2Fmk-new_1_tcgzik.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMoon_Knight_Icon_c8keu4.webp&w=256&q=75",
        "parallelogram": {
            "title": "Moon Knight",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm",
                "description": "Her higher aerial abilities and long-range attacks can pressure Moon Knight and force him to change position."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther",
                "description": "Moon Knight's Ankh can be useless to Black Panther, since he can simply dash out of its area of effect, while still dealing massive damage to him."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "Moon Knight's abilities are useless to unreachable heroes like Iron Man. Additionally, Iron Man can outdamage his normal attacks if he tries to target him."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man",
                "description": "He can hunt down Moon Knight and kill him with a single combination with our without Venom's suit expulsion skill (E)."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagneto_Icon_tlpvn5.webp&w=96&q=75",
                "name": "Magneto",
                "description": "His shield and Metal Bulwark simply deny Moon Knight\u2019s attacks."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke",
                "description": "She can hunt Moon Knight from behind and kill him instantly."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FNamor_Icon_ri6epi.webp&w=96&q=75",
                "name": "Namor"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FPeni_Parker_Icon_u0uafv.webp&w=96&q=75",
                "name": "Peni Parker"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FAdam_Warlock_Icon_exkpa4.webp&w=96&q=75",
                "name": "Adam Warlock"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLuna_Snow_Icon_snupak.webp&w=96&q=75",
                "name": "Luna Snow"
            }
        ]
    },
    {
        "id": 19,
        "name": "Loki",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607169%2Frivals%2520v2%2Floki_qeoeyh.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLoki_Icon_tysbig.webp&w=256&q=75",
        "parallelogram": {
            "title": "Loki",
            "subtitle": "Strategist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Moon Knight",
                "description": "He can easily destroy Loki's clones and prevent him from getting his preferred position."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "He can track the original Loki from above and deal massive damage to him."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man",
                "description": "He can surprise attack Loki and pressure him from the backline."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke",
                "description": "She can hunt Loki from the backline and pressure him."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLuna_Snow_Icon_snupak.webp&w=96&q=75",
                "name": "Luna Snow"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FPeni_Parker_Icon_u0uafv.webp&w=96&q=75",
                "name": "Peni Parker"
            }
        ]
    },
    {
        "id": 20,
        "name": "Mantis",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607169%2Frivals%2520v2%2Fmantis_xhldqc.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMantis_Icon_wjrezu.webp&w=256&q=75",
        "parallelogram": {
            "title": "Mantis",
            "subtitle": "Strategist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "He can easily pressure Mantis from above and force her to hide."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher",
                "description": "Punisher's ultimate can outdamage Mantis's ultimate."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Fist_Icon_t1byee.webp&w=96&q=75",
                "name": "Iron Fist",
                "description": "He can deal massive damage to Mantis and force her to use resources rather than healing allies."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FCaptain_America_Icon_cehji6.webp&w=96&q=75",
                "name": "Captain America",
                "description": "He can chase and harass Mantis and avoid sleeping abilities using his shield."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke",
                "description": "Her mobility and mid-range attacks can pressure Mantis from the backline without being stunned."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagik_Icon_tkyxty.webp&w=96&q=75",
                "name": "Magik"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FPeni_Parker_Icon_u0uafv.webp&w=96&q=75",
                "name": "Peni Parker"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FNamor_Icon_ri6epi.webp&w=96&q=75",
                "name": "Namor"
            }
        ]
    },
    {
        "id": 21,
        "name": "Spider-Man",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607170%2Frivals%2520v2%2Fspidey_bti4dq.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=256&q=75",
        "parallelogram": {
            "title": "Spider-Man",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FNamor_Icon_ri6epi.webp&w=96&q=75",
                "name": "Namor",
                "description": "His spawns disrupts Spider-Man's ability to pressure the backline."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Fist_Icon_t1byee.webp&w=96&q=75",
                "name": "Iron Fist",
                "description": "He's stronger against him in one-on-one combat, and can chase him in the air using double jumps."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FDoctor_Strange_Icon_qtd9ik.webp&w=96&q=75",
                "name": "Doctor Strange",
                "description": "Shield of Seraphim blocks web attacks, and his crowd control abilities disrupt Spider-Man\u2019s combos"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela",
                "description": "With great positioning, she can instantly kill Spider-Man with few attacks. Plus she has an escape if Spider-Man decides to combo her."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=96&q=75",
                "name": "Hawkeye",
                "description": "He can instantly kill Spider-Man with 2-3 shots before Spider-Man even has a chance to dive."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLuna_Snow_Icon_snupak.webp&w=96&q=75",
                "name": "Luna Snow",
                "description": "Her freezing abilities can disrupt his attacks from the backline. She can also negate Spider-Man's ultimate with her own ultimate."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FPeni_Parker_Icon_u0uafv.webp&w=96&q=75",
                "name": "Peni Parker"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMoon_Knight_Icon_c8keu4.webp&w=96&q=75",
                "name": "Moon Knight"
            }
        ]
    },
    {
        "id": 22,
        "name": "Rocket Racoon",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737619035%2Frivals%2520v2%2Frocket-new_1_raqc7g.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FRocket_Raccoon_Icon_fqblcl.webp&w=256&q=75",
        "parallelogram": {
            "title": "Rocket Racoon",
            "subtitle": "Strategist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FStar-Lord_Icon_mvulbd.webp&w=96&q=75",
                "name": "Star-Lord",
                "description": "He can chase Rocket at the back while avoiding minigun fire."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther",
                "description": "He can pressure Rocket and make him focus on escaping instead of healing allies."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "With his flight abilities, he can pressure Rocket and deal massive damage to him from above."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke",
                "description": "She can flank easily at the back with invisibility, forcing him to escape instead of healing allies."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FVenom_Icon_mwro7g.webp&w=96&q=75",
                "name": "Venom",
                "description": "Venom can dive and chase Rocket with his high mobility and survivability."
            }
        ],
        "goodAgainst": []
    },
    {
        "id": 23,
        "name": "Wolverine",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607173%2Frivals%2520v2%2Fwolvie_j9xibh.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484734%2FRivals%2FWolverine_Icon_xhlm8q.webp&w=256&q=75",
        "parallelogram": {
            "title": "Wolverine",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FPeni_Parker_Icon_u0uafv.webp&w=96&q=75",
                "name": "Peni Parker",
                "description": "Her spider nests and mines can disrupt Wolverine from reaching the front line."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "He is unreachable and can melt down Wolverine's hp instantly."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FNamor_Icon_ri6epi.webp&w=96&q=75",
                "name": "Namor",
                "description": "His spawns can pressure Wolverine from flanking the back line."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm",
                "description": "She is unreachable and can punish Wolverine if he dives."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736610733%2FRivals%2Finvis-woman-x1_bga15m.png&w=96&q=75",
                "name": "Invisible Woman",
                "description": "Force Physics can take Wolverine out of his leaps and dashes, which is roughly the entire point of his kit. If there is any time to be saving Force Physics, it's to specifically counter the Wolverine in the enemy team as its cooldown is shorter than his Feral Leap."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=96&q=75",
                "name": "Groot"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FDoctor_Strange_Icon_qtd9ik.webp&w=96&q=75",
                "name": "Doctor Strange"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagneto_Icon_tlpvn5.webp&w=96&q=75",
                "name": "Magneto"
            }
        ]
    },
    {
        "id": 24,
        "name": "Thor",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607172%2Frivals%2520v2%2Fthor_lhhqwi.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThor_Icon_vziina.webp&w=256&q=75",
        "parallelogram": {
            "title": "Thor",
            "subtitle": "Vanguard"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "He is unreachable in certain areas and can melt down Thor's hp instantly."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm",
                "description": "She is unreachable in certain areas and can reduce Thor's hp."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher",
                "description": "High sustained damage output forces Thor to retreat."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FStar-Lord_Icon_mvulbd.webp&w=96&q=75",
                "name": "Star-Lord",
                "description": "He can maintain safe distance while dealing consistent damage."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FScarlet_Witch_Icon_mdkxbf.webp&w=96&q=75",
                "name": "Scarlet Witch",
                "description": "She can burst Thor's HP instantly at range."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMantis_Icon_wjrezu.webp&w=96&q=75",
                "name": "Mantis",
                "description": "As a hybrid duelist/strategist, she can also deal enough damage to Thor while maintaining safe distance."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FHulk_Icon_d2xnfs.webp&w=96&q=75",
                "name": "Hulk"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=96&q=75",
                "name": "Groot"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther"
            }
        ]
    },
    {
        "id": 25,
        "name": "Squirrel Girl",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607171%2Frivals%2520v2%2Fsqui_yo6cgm.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSquirrel_Girl_Icon_gtg592.webp&w=256&q=75",
        "parallelogram": {
            "title": "Squirrel Girl",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther",
                "description": "He can catch her easily with his dashes, and vibranium armor protects from burst acorn's damage."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FCaptain_America_Icon_cehji6.webp&w=96&q=75",
                "name": "Captain America",
                "description": "Shield blocks acorns while his charge can pressure her and force her to retreat."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man",
                "description": "His high mobility can close the distance and forces her to reposition."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela",
                "description": "High burst damage while maintaing safe distance."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=96&q=75",
                "name": "Hawkeye",
                "description": "Long-range burst damage while maintaing safe distance."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FAdam_Warlock_Icon_exkpa4.webp&w=96&q=75",
                "name": "Adam Warlock"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FPeni_Parker_Icon_u0uafv.webp&w=96&q=75",
                "name": "Peni Parker"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThor_Icon_vziina.webp&w=96&q=75",
                "name": "Thor"
            }
        ]
    },
    {
        "id": 26,
        "name": "Namor",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607170%2Frivals%2520v2%2Fnamor_acnpav.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FNamor_Icon_ri6epi.webp&w=256&q=75",
        "parallelogram": {
            "title": "Namor",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela",
                "description": "Her long-range attacks can destroy Namor's spawns easily."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=96&q=75",
                "name": "Hawkeye",
                "description": "Long-range burst damage while maintaing safe distance."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "He can destroy Namor's spawn with normal attacks and pressure him at a straight angle."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm",
                "description": "Her normal attacks can easily destroy Namor's spawns, and in a one-on-one situation, Storm wins effortlessly with the help of Goddess Boost (E) and Bolt Rush (Right Click)."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FVenom_Icon_mwro7g.webp&w=96&q=75",
                "name": "Venom",
                "description": "Venom can dive on Namor and destroy his spawns while pressuring him."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Fist_Icon_t1byee.webp&w=96&q=75",
                "name": "Iron Fist"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagik_Icon_tkyxty.webp&w=96&q=75",
                "name": "Magik"
            }
        ]
    },
    {
        "id": 27,
        "name": "The Punisher",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607170%2Frivals%2520v2%2Fpunisher_g8ytdf.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=256&q=75",
        "parallelogram": {
            "title": "The Punisher",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela",
                "description": "She can challenge Punisher in long-range distance."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=96&q=75",
                "name": "Hawkeye",
                "description": "Similar with Hela, he can challenge Punisher in long-range easily."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Fist_Icon_t1byee.webp&w=96&q=75",
                "name": "Iron Fist",
                "description": "He can pressure him at the back and land successful combinations."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagik_Icon_tkyxty.webp&w=96&q=75",
                "name": "Magik",
                "description": "She can flank at the back and target him with her abilities."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FDoctor_Strange_Icon_qtd9ik.webp&w=96&q=75",
                "name": "Doctor Strange"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=96&q=75",
                "name": "Groot"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm"
            }
        ]
    },
    {
        "id": 28,
        "name": "Jeff",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607168%2Frivals%2520v2%2Fjeff_wadppv.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FJeff_the_Land_Shark_Icon_mkp5f4.webp&w=256&q=75",
        "parallelogram": {
            "title": "Jeff",
            "subtitle": "Strategist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man",
                "description": "He can simply punish Jeff in mid air while not being reached by Jeff's ultimate."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FStorm_Icon_ncerpu.webp&w=96&q=75",
                "name": "Storm",
                "description": "She can simply punish Jeff from above while not being reached by Jeff's ultimate."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man",
                "description": "He can pressure Jeff at the back and force him to retreat instead of healing allies. He can also avoid Jeff's ultimate with his exceptional mobility."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke",
                "description": "She can pressure him at the back and force him to retreat instead of healing allies."
            }
        ],
        "goodAgainst": []
    },
    {
        "id": 29,
        "name": "Scarlet Witch",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607170%2Frivals%2520v2%2Fscar_xspbho.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FScarlet_Witch_Icon_mdkxbf.webp&w=256&q=75",
        "parallelogram": {
            "title": "Scarlet Witch",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke",
                "description": "She can surprise her with combinations and assasinate her easily."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher",
                "description": "High consistent damage output can eliminate her before she can escape, plus his ultimate counters her aerial positioning."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FDoctor_Strange_Icon_qtd9ik.webp&w=96&q=75",
                "name": "Doctor Strange",
                "description": "His Shield of Seraphim negates her attacks and limit her effectiveness."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hawkeye",
                "description": "He can inflict massive damage to her in a safe distance."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThor_Icon_vziina.webp&w=96&q=75",
                "name": "Thor"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLuna_Snow_Icon_snupak.webp&w=96&q=75",
                "name": "Luna Snow"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FCaptain_America_Icon_cehji6.webp&w=96&q=75",
                "name": "Captain America"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=96&q=75",
                "name": "Groot"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man"
            }
        ]
    },
    {
        "id": 30,
        "name": "Black Widow",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607167%2Frivals%2520v2%2Fbtw_pnokvx.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Widow_Icon_hfelvs.webp&w=256&q=75",
        "parallelogram": {
            "title": "Black Widow",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke",
                "description": "She can surprise her with combinations and assasinate her from unexpected angles."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man",
                "description": "His swinging mobility can quickly close the distance and land combinations to her."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FDoctor_Strange_Icon_qtd9ik.webp&w=96&q=75",
                "name": "Doctor Strange",
                "description": "His shield and crowd control abilities negates her attacks and limit her effectiveness."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagik_Icon_tkyxty.webp&w=96&q=75",
                "name": "Magik",
                "description": "With her teleporation abilities, she can flank and punsish her in the backline."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man"
            }
        ]
    },
    {
        "id": 31,
        "name": "Adam Warlock",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607167%2Frivals%2520v2%2Fadam_w2m9ek.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FAdam_Warlock_Icon_exkpa4.webp&w=256&q=75",
        "parallelogram": {
            "title": "Adam Warlock",
            "subtitle": "Strategist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man",
                "description": "His swinging mobility can quickly close the distance and land combinations to him."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke",
                "description": "She can surprise him with combinations and assasinate him easily."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther",
                "description": "He can flank and pressure Adam from unexpected angles and capitalize on his low mobility."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FVenom_Icon_mwro7g.webp&w=96&q=75",
                "name": "Venom",
                "description": "Venom can simply dive in front of him and force him to retreat rather than healing allies."
            }
        ],
        "goodAgainst": []
    },
    {
        "id": 32,
        "name": "Winter Soldier",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607167%2Frivals%2520v2%2Fbucky_tdwc4f.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FWinter_Soldier_Icon_lceqsq.webp&w=256&q=75",
        "parallelogram": {
            "title": "Winter Soldier",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484731%2FRivals%2FPsylocke_Icon_ls6zo3.webp&w=96&q=75",
                "name": "Psylocke",
                "description": "She can land surprise attacks at different angles, and can easily avoid his combos with dashes and invisibility."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FVenom_Icon_mwro7g.webp&w=96&q=75",
                "name": "Venom",
                "description": "Venom can make his hook and stun abilities ineffective because of his superior mobility and survivability."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela",
                "description": "She can deal massive damage to him in long-distance."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThor_Icon_vziina.webp&w=96&q=75",
                "name": "Thor",
                "description": "Thor can escape if he decides to pull him with bionic hook."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=96&q=75",
                "name": "Groot"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FSpider-Man_Icon_lvnyoc.webp&w=96&q=75",
                "name": "Spider-Man"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FPeni_Parker_Icon_u0uafv.webp&w=96&q=75",
                "name": "Peni Parker"
            }
        ]
    },
    {
        "id": 33,
        "name": "Magneto",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607169%2Frivals%2520v2%2Fmagneto_wbantn.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagneto_Icon_tlpvn5.webp&w=256&q=75",
        "parallelogram": {
            "title": "Magneto",
            "subtitle": "Vanguard"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FThe_Punisher_Icon_hqyd44.webp&w=96&q=75",
                "name": "Punisher",
                "description": "Punisher's Culling Turret (E) ability can break Magneto's shield quickly, forcing him to hide or retreat."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FVenom_Icon_mwro7g.webp&w=96&q=75",
                "name": "Venom",
                "description": "Constant damage from basic attacks chipps away at his shields, and Feast of the Abyss replenishes any health lost to Magneto's counter-attacks."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=96&q=75",
                "name": "Hawkeye"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela"
            }
        ]
    },
    {
        "id": 34,
        "name": "Doctor Strange",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607172%2Frivals%2520v2%2Fstrange_t4560m.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FDoctor_Strange_Icon_qtd9ik.webp&w=256&q=75",
        "parallelogram": {
            "title": "Doctor Strange",
            "subtitle": "Vanguard"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484734%2FRivals%2FWolverine_Icon_xhlm8q.webp&w=96&q=75",
                "name": "Wolverine",
                "description": "His claws can pierce through Strange's shield. Additionaly, he can catch strange mid air if he uses Cloak of Levitation."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FWinter_Soldier_Icon_lceqsq.webp&w=96&q=75",
                "name": "Winter Soldier",
                "description": "He can pull Strange with bionic hook and punish him with the team."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther",
                "description": "His mobility lets him bypass Strange's shield and attack from unexpected angles."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484733%2FRivals%2FVenom_Icon_mwro7g.webp&w=96&q=75",
                "name": "Venom",
                "description": "He can disrupt Strange\u2019s shield while providing consistent crowd control."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FHulk_Icon_d2xnfs.webp&w=96&q=75",
                "name": "Hulk",
                "description": "His Radioactive Lockdown prevents his ultimate, while World Breaker can grab Strange out of the air."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=96&q=75",
                "name": "Hawkeye"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHela_Icon_kvrhsp.webp&w=96&q=75",
                "name": "Hela"
            }
        ]
    },
    {
        "id": 35,
        "name": "Star-Lord",
        "image_url": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fe_improve%2Cw_300%2Ch_600%2Cc_thumb%2Cg_auto%2Fv1737607171%2Frivals%2520v2%2Fstar_du9q4c.png&w=640&q=75",
        "mainImage": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484732%2FRivals%2FStar-Lord_Icon_mvulbd.webp&w=256&q=75",
        "parallelogram": {
            "title": "Star-Lord",
            "subtitle": "Duelist"
        },
        "counterPicks": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMagneto_Icon_tlpvn5.webp&w=96&q=75",
                "name": "Magneto",
                "description": "Metallic Curtain negates Star-Lord's damage output, while Metal Bulwark can shield allies from incoming damage."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FLuna_Snow_Icon_snupak.webp&w=96&q=75",
                "name": "Luna",
                "description": "Her ultimate can completely block Star-Lord's attacks and ultimate."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FDoctor_Strange_Icon_qtd9ik.webp&w=96&q=75",
                "name": "Doctor Strange",
                "description": "His shield negates Star-Lord's damage output, while his crowd control can also help allies to avoid his attacks."
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FHawkeye_Icon_q7o2so.webp&w=96&q=75",
                "name": "Hawkeye",
                "description": "One headshot can force him to retreat or eliminate him entirely from a safe distance."
            }
        ],
        "goodAgainst": [
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484728%2FRivals%2FBlack_Panther_Icon_pzkpcd.webp&w=96&q=75",
                "name": "Black Panther"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Man_Icon_vyqsna.webp&w=96&q=75",
                "name": "Iron Man"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FGroot_Icon_udutn9.webp&w=96&q=75",
                "name": "Groot"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484730%2FRivals%2FMoon_Knight_Icon_c8keu4.webp&w=96&q=75",
                "name": "Moon Knight"
            },
            {
                "image": "https://www.peakrivals.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqrtlfjc0%2Fimage%2Fupload%2Fv1736484729%2FRivals%2FIron_Fist_Icon_t1byee.webp&w=96&q=75",
                "name": "Iron Fist"
            }
        ]
    }
];

// Evento ready
client.on(Events.ClientReady, async () => {
    console.log(`Conectado como ${client.user.username}!`);
});

// Evento messageCreate
client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;
    
    if (!message.content.toLowerCase().startsWith("pick ")) return;
    
    const characterName = message.content.slice(5).trim().toLowerCase();
    const character = characters.find(char => char.name.toLowerCase() === characterName);

    if (character) {
        const embed = new EmbedBuilder()
            .setTitle(character.parallelogram.title)
            .setDescription(`**Rol:** ${character.parallelogram.subtitle}`)
            .setColor(0x0099FF)
            .setThumbnail(character.mainImage); // La imagen queda en la esquina superior derecha

        // Agregar Counter Picks asegurando que ocupa todo el ancho
        if (character.counterPicks.length > 0) {
            const counters = character.counterPicks.map(c => `**${c.name}**: ${c.description}`).join('\n\n');
            embed.addFields({ name: "🔴 Counter Picks", value: counters, inline: false });
        }

        // Agregar Good Against asegurando que ocupa todo el ancho
        if (character.goodAgainst.length > 0) {
            const goodAgainst = character.goodAgainst.map(g => g.name).join(', ');
            embed.addFields({ name: "✅ Bueno Contra", value: goodAgainst, inline: false });
        }

        await message.reply({ embeds: [embed] });
    }
});



// Token del bot
client.login(process.env.token);