const API_URL = "http://localhost:3000/api/products";

let editingProductId = null;

// Load products when page starts
document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
});

// GET - Load all products
async function loadProducts() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        displayProducts(products);
    } catch (error) {
        console.error(error);
        alert("Unable to load products");
    }
}

// Display products in table
function displayProducts(products) {
    const tableBody = document.getElementById("productTableBody");

    tableBody.innerHTML = "";

    if (products.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6">No products available</td>
            </tr>
        `;
        return;
    }

    products.forEach(product => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>₹${product.price}</td>
            <td>${product.quantity}</td>
            <td>
                <button onclick="editProduct(${product.id})">
                    Edit
                </button>

                <button onclick="deleteProduct(${product.id})">
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// POST - Add product
async function addProduct() {
    const name = document.getElementById("productName").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;

    if (!name || !category || !price || !quantity) {
        alert("Please fill all fields");
        return;
    }

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                category: category,
                price: Number(price),
                quantity: Number(quantity)
            })
        });

        const result = await response.json();

        if (!response.ok) {
            alert(result.message);
            return;
        }

        alert("Product added successfully");

        clearForm();

        loadProducts();

    } catch (error) {
        console.error(error);
        alert("Error adding product");
    }
}

// Load product details into form
async function editProduct(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);

        const product = await response.json();

        document.getElementById("productName").value = product.name;
        document.getElementById("category").value = product.category;
        document.getElementById("price").value = product.price;
        document.getElementById("quantity").value = product.quantity;

        editingProductId = id;

        document.getElementById("submitButton").innerText = "Update Product";

    } catch (error) {
        console.error(error);
        alert("Error loading product");
    }
}

// PUT - Update product
async function updateProduct() {
    const name = document.getElementById("productName").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;

    if (!name || !category || !price || !quantity) {
        alert("Please fill all fields");
        return;
    }

    try {
        const response = await fetch(
            `${API_URL}/${editingProductId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    category: category,
                    price: Number(price),
                    quantity: Number(quantity)
                })
            }
        );

        const result = await response.json();

        if (!response.ok) {
            alert(result.message);
            return;
        }

        alert("Product updated successfully");

        editingProductId = null;

        document.getElementById("submitButton").innerText =
            "Add Product";

        clearForm();

        loadProducts();

    } catch (error) {
        console.error(error);
        alert("Error updating product");
    }
}

// DELETE - Delete product
async function deleteProduct(id) {
    const confirmDelete = confirm(
        "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        const result = await response.json();

        if (!response.ok) {
            alert(result.message);
            return;
        }

        alert("Product deleted successfully");

        loadProducts();

    } catch (error) {
        console.error(error);
        alert("Error deleting product");
    }
}

// Handle Add / Update button
function handleSubmit() {
    if (editingProductId === null) {
        addProduct();
    } else {
        updateProduct();
    }
}

// Clear form
function clearForm() {
    document.getElementById("productName").value = "";
    document.getElementById("category").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";

    editingProductId = null;

    document.getElementById("submitButton").innerText =
        "Add Product";
}
