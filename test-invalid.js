const badDocs = [
    { sections: [] },                                               // missing title
    { title: "    ", sections: [] },                                // empty title
    { title: "Deck", sections: "nope" },                            // sections not array
    { title: "Deck", sections: [{ items: [] }] },                   // sections missing heading
    { title: "Deck", sections: [{ heading: "A", items: "no" }] },   // items not an array
    { title: "Deck", sections: [{ heading: "A", items: ["4x Fireball", 42] }] },      // item not a string
    { title: "Deck", sections: [{ heading: "", items: [] }, { heading: "Spells", items: [1, 2] }]}  // collection of errors
]

for (const doc of badDocs) {
    const res = await fetch("http://localhost:5555/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(doc)
    });
    console.log(res.status, await res.json());
}