// Sends a Post Request

const response = await fetch("http://localhost:3000/export", 
    // OPTIONS OBJECT
    {
        method: "POST",     // look for app.post
        headers: { "Content-Type": "application/json" },    // data sending is JSON
        body: JSON.stringify({ name: "Josh" })      // passing JS and converting because HTTP only accepts text
    }
);

const html = await response.text(); // .text = read text
console.log(html);