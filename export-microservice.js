// Microservice that receives JSON and returns formatted HTML

import express from "express";
import { formatHtml } from "./format-html.js";

const app = express(); // create application
const PORT = 3000;  // port listening on
app.use(express.json()); // parse jSON

// GET
app.get("/", (req, res) => {
    res.send("Export Printable Microservice is working.");
});

// POST
app.post("/export", (req, res) => {
    const html = formatHtml();

    res.type("html").send(html);
});

// LISTEN
app.listen(PORT, () => {
    console.log(`Export Printable Microservice is running on port ${PORT}`);
});