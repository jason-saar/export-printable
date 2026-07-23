// Microservice that receives JSON and returns formatted HTML

import express from "express";
import { formatHtml } from "./format-html.js";

const app = express(); // create application
const PORT = 3000;  // port listening on
app.use(express.json()); // parse jSON

// LISTEN
app.listen(PORT, () => {
    console.log(`Export Printable Microservice is running on port ${PORT}`);
});

// POST
app.post("/export", (req, res) => {
    const name = req.body.name;     // extract name from request
    
    const html_response = formatHtml(name); // run this other function/file

    res.type("html").send(html_response);   // send it back
});