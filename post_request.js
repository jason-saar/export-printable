// Sends a Post Request (FROM MAIN SERVICE)

import fs from "fs";

// Testing Data
const doc = {
    title: "Mono-Red Burn",
    subtitle: "Modern - 60 cards",
    sections: [
        {
            heading: "Creatures (8)",
            items: [
                "4x Goblin Guide",
                "4x Monastery Swiftspear"
            ]
        },
        {
            heading: "Spells (8)",
            items: [
                "4x Lightning Bolt",
                "4x Lava Spike"
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
        body: JSON.stringify({doc})      // passing JS and converting because HTTP only accepts text
    }
);

// Recieve Reseponse
const html = await response.text(); // .text = read text

// Save to File
fs.writeFileSync("output.html", html);  

// Log to Console
console.log(html);