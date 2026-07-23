// Sends a Post Request (FROM MAIN SERVICE)

import fs from "fs";

// Testing Data
const doc = {
    title: "Mono-Red Burn",
    subtitle: "Modern - 60 cards",
    sections: [
        {
            heading: "Creatures (10)",
            items: [
                "4x Dragon's Rage Channeler",
                "2x Goblin Guide",
                "4x Monastery Swiftspear"
            ]
        },
        {
            heading: "Sorceries (16)",
            items: [
                "4x Boltwave",
                "4x Lava Spike",
                "4x Light Up the Stage",
                "4x Skewer the Critics"
            ]
        },
        {
            heading: "Instants (8)",
            items: [
                "4x Lava Dart",
                "4x Lightning Bolt"
            ]
        },
        {
            heading: "Artifacts (8)",
            items: [
                "4x Mishra's Bauble",
                "4x Cori-Steel Cutter"
            ]
        },
        {
            heading: "Lands (18)",
            items: [
                "3x Arid Mesa",
                "4x Barbarian Ring",
                "1x Elegant Parlor",
                "1x Sacred Foundry",
                "3x Scalding Tarn",
                "4x Snow-Covered Mountain",
                "2x Sunbaked Canyon"
            ]
        },
        {
            heading: "Sideboard (15)",
            items: [
                "3x Tormod's Crypt",
                "3x Meltdown",
                "3x Unholy Heat",
                "4x Molten Rain",
                "2x Wear // Tear"
            ]
        }
    ]
};


// Send to Microservice
const response = await fetch("http://localhost:5555/export", 
    // OPTIONS OBJECT
    {
        method: "POST",     // look for app.post
        headers: { "Content-Type": "application/json" },    // data sending is JSON
        body: JSON.stringify(doc)      // passing JS and converting because HTTP only accepts text
    }
);

// Recieve Reseponse
const html = await response.text(); // .text = read text

// Save to File
fs.writeFileSync("output.html", html);  

// Log to Console
console.log(html);