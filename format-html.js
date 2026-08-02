// Escape HTML entities so document content is rendered as text rather than
// parse as markup. Without this, a caller could inject arbitrary HTML or
// script into the generated document. 
function escapeHtml(text) {
    return String(text)
        .replace(/&/g, "&amp;")     // & must be escaped first
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export function formatHtml(doc) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Printable Document</title>
                <style>
                    body {
                        font-family: Georgia, "Times New Roman", serif;
                        max-width: 800px;
                        margin: 2rem auto;
                        padding: 0 1rem;
                        color: #1a1a1a;
                    }
                    h1 {
                        border-bottom: 2px solid #333;
                        padding-bottom: 0.5rem;
                    }
                    h2 {
                        color: #555;
                        font-weight: normal;
                        margin-top: -0.5rem;
                    }
                    h3 {
                        margin-top: 1.5rem;
                        border-bottom: 1px solid #ccc;
                    }
                    ul {
                        margin: 0.5rem 0 1rem 0;
                    }
                    li {
                        margin-bottom: 0.25rem;
                    }
                    @media print {
                        body { margin: 0; padding: 0.5in; }
                    }
                </style>
            </head>

            <body>
                <!-- Title -->
                <h1>${escapeHtml(doc.title)}</h1>

                <!-- Subtitle -->
                ${doc.subtitle ? `<h2>${escapeHtml(doc.subtitle)}</h2>` : ""}

                <!-- Sections -->
                    ${doc.sections.map(section => `
                        <h3>${escapeHtml(section.heading)}</h3>
                        <ul>
                            ${section.items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
                        </ul>    
                    `).join("")}
            </body>
        </html>
    `;
}