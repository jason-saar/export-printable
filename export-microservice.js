// Microservice that receives JSON and returns formatted HTML

import express from "express";
import { formatHtml } from "./format-html.js";

const app = express(); // create application
const PORT = 5555;  // port listening on
app.use(express.json()); // parse jSON

// LISTEN
app.listen(PORT, () => {
    console.log(`Export Printable Microservice is running on port ${PORT}`);
});

// POST
app.post("/export", (req, res) => {
    const doc = req.body;    // extract doc from request
    
    // Validate request body against the communication contract. Title and sections fail quickly, 
    // since nothing else needs to be checked without them. Per-section errors are collected so
    // callers can fix everything at once.
    if (typeof doc.title !== "string" || doc.title.trim() === "") {
        return res.status(400).json({ error: "title is required and must be a non-empty string"});
    }
    if (!Array.isArray(doc.sections)) {
        return res.status(400).json({ error: "sections is required and must be an array" });
    }
    const errors = [];
    doc.sections.forEach((section, i) => {
        if (typeof section.heading !== "string" || section.heading.trim() === "") {
            errors.push(`section ${i}: heading is required`);
        }
        if (!Array.isArray(section.items)) {
            errors.push(`section ${i}: items must be an array`);
        } else {
            section.items.forEach((item, j) => {
                if (typeof item !== "string") {
                    errors.push(`section ${i}, item ${j}: must be a string`);
                }
            })
        }
    })
    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join("; ")})
    }

    const htmlResponse = formatHtml(doc); // run this other function/file
    res.type("html").send(html_response);   // send it back
});