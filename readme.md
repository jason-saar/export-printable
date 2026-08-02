# Export Printable Microservice

## Description
A headless microservice that takes a generic document (title, subtitle, and an ordered list of sections) as JSON, and returns a self-contained, printable HTML document as text. All user-supplied text is HTML-escpaed before being inserted into the output, so the returned document can be safely rendered or printed without risk of injected markup or scripts.

## Communication Contract

### Requesting Data

Send an HTTP POST to /export with header Content-type: application/json. The calling program sends a JSON body describing a generic document. Any program can map onto the same title/sections/item structure.

| Field | Type | Description |
|---|---|---|
| title | string | Heading at the top of the page |
| subtitle | string | Line under the title |
| sections | array | One or more sections, rendered in order |
| sections[].heading | string | Section heading |
| sections[].items | array of strings | Lines listed under heading |

```javascript
const doc = {
    "title": "Mono-Red Burn",
    "subtitle": "Modern - 60 cards",
    "sections": [
        {
            "heading": "Creatures (8)",
            "items": ["4x Goblin Guide", "4x Monastery Swiftspear"]
        },
        {
            "heading": "Spells (8)",
            "items": ["4x Lightning Bolt", "4x Lava Spike"]
        }
    ]
};
 
const res = await fetch("http://localhost:5555/export", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(doc)
});
```

### Receiving Data

The microservice responds with a self-contained HTML document (embedded CSS included) so the caller can save it and open it without any additional files. The calling program can either write the response body to a file and open it in a browser, or directly render it if the caller UI supports HTML. If the request body is malformed or missing a required field, the service returns 400 with a JSON error object instead of HTML.

```javascript
const fs = require("fs");
 
if (res.status === 200) {
    const html = await res.text();
    fs.writeFileSync("deck.html", html);
    open("deck.html");
} else {
    const err = await res.json();
    console.log("Export failed: ", err.error);
}
```

### UML Sequence Diagram

See export_portable.png in this repo