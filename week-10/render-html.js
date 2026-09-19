const express = require("express");

const app = express();

const PORT = 3000;

// Render HTML page
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>HTML Web Page</title>
            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    margin-top: 100px;
                }

                h1 {
                    color: blue;
                }

                p {
                    font-size: 20px;
                }
            </style>
        </head>

        <body>
            <h1>Welcome to My Web Page</h1>
            <p>This HTML page is rendered using Express.js.</p>
            <p>Student Name: S. Kavyanjali</p>
        </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
