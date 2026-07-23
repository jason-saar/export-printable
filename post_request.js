// Sends a Post Request (FROM MAIN SERVICE)

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


const response = await fetch("http://localhost:5555/export", 
    // OPTIONS OBJECT
    {
        method: "POST",     // look for app.post
        headers: { "Content-Type": "application/json" },    // data sending is JSON
        body: JSON.stringify({doc})      // passing JS and converting because HTTP only accepts text
    }
);

const html = await response.text(); // .text = read text
console.log(html);