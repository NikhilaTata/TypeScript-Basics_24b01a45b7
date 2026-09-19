const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(__dirname));

// Sample supermarket products
let products = [
    {
        id: 1,
        name: "Rice",
        category: "Groceries",
        price: 60,
        quantity: 50
    },
    {
        id: 2,
        name: "Milk",
        category: "Dairy",
        price: 30,
        quantity: 25
    },
    {
        id: 3,
        name: "Biscuits",
        category: "Snacks",
        price: 20,
        quantity: 40
    }
];

// GET - Get all products
app.get("/api/products", (req, res) => {
    res.json(products);
});

// GET - Get one product by ID
app.get("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

// POST - Add a new product
app.post("/api/products", (req, res) => {
    const { name, category, price, quantity } = req.body;

    if (!name || !category || price === undefined || quantity === undefined) {
        return res.status(400).json({
            message: "Please provide all product details"
        });
    }

    const newProduct = {
        id: products.length > 0
            ? products[products.length - 1].id + 1
            : 1,
        name: name,
        category: category,
        price: Number(price),
        quantity: Number(quantity)
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
});

// PUT - Update a product
app.put("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { name, category, price, quantity } = req.body;

    product.name = name;
    product.category = category;
    product.price = Number(price);
    product.quantity = Number(quantity);

    res.json({
        message: "Product updated successfully",
        product: product
    });
});

// DELETE - Delete a product
app.delete("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(index, 1);

    res.json({
        message: "Product deleted successfully",
        product: deletedProduct[0]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Supermarket Management System running at http://localhost:${PORT}`);
});