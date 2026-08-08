const express = require("express");

const app = express();

const PORT = 3000;

// 1. Home Route
app.get("/", (req, res) => {
    res.send("Welcome to the Home Page");
});

// 2. Data Route
app.get("/data", (req, res) => {
    res.json({
        name: "Nikhila",
        course: "BTech",
        subject: "Express JS"
    });
});

// 3. About Route
app.get("/about", (req, res) => {
    res.send("This is the About Page");
});

// 4. Server Route
app.get("/server", (req, res) => {
    res.send("Express Server is Working Successfully");
});

// 5. Dynamic URL using Route Parameter
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;

    res.send(`User ID is: ${userId}`);
});

// 6. Dynamic URL using Query Parameters
app.get("/products", (req, res) => {
    const name = req.query.name;
    const price = req.query.price;

    res.send(`Product: ${name}, Price: ${price}`);
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});