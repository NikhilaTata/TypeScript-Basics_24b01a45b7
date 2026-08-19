const express = require('express');

const app = express();

const PORT = 3000;
// EJS setup
app.set('view engine', 'ejs');
app.set('views', __dirname);

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// GET route - display registration page
app.get('/', (req, res) => {
    res.render('index', {
        message: null,
        name: '',
        email: ''
    });
});

// POST route - handle form submission
app.post('/submit', (req, res) => {

    const { name, email } = req.body;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return res.send(`
            <h2>Invalid Email Address</h2>
            <p>Please enter a valid email address.</p>
            <a href="/">Go Back</a>
        `);
    }

    // Render the same page with submitted data
    res.render('index', {
        message: 'Registration successful!',
        name: name,
        email: email
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});