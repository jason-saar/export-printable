export function formatHtml(name) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Printable Document</title>
            </head>

            <body>
                <h1>Printable Document</h1>
                <p>Request received. Hello ${name}</p>
            </body>
        </html>
    `;
}