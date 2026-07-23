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
                <h1>${doc.title}</h1>

                <!-- Play Format -->
                <h2>${doc.subtitle}</h2>

                <!-- Sections -->
                    ${doc.sections.map(section => `
                        <h3>${section.heading}</h3>
                        <ul>
                            ${section.items.map(item => `<li>${item}</li>`).join("")}
                        </ul>    
                    `).join("")}
            </body>
        </html>
    `;
}