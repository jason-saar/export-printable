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
            </head>

            <body>
                <!-- Deck Name -->
                <h1>${escapeHtml(doc.title)}</h1>

                <!-- Play Format -->
                <h2>${escapeHtml(doc.subtitle)}</h2>

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