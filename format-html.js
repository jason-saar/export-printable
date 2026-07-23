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

                <!-- Creatures -->
                    <h3>${doc.sections[0].heading}</h3>
                    <ul>
                        <li>${doc.sections[0].items[0]}</li>
                        <li>${doc.sections[0].items[1]}</li>
                    </ul>

                <!-- Spells -->
                    <h3>${doc.sections[1].heading}</h3>
                    <ul>
                        <li>${doc.sections[1].items[0]}</li>
                        <li>${doc.sections[1].items[1]}</li>
                    </ul>

            </body>
        </html>
    `;
}