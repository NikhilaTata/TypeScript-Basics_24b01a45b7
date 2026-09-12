const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
// Set EJS as template engine
app.set("view engine", "ejs");
// To read form data
app.use(express.urlencoded({ extended: true }));
// To read cookies
app.use(cookieParser());

//LOGIN PAGE 
app.get("/login", (req, res) => {
    res.render("login");
});

//  LOGIN 
app.post("/login", (req, res) => {

    // Get username and password from form
    const { username, password } = req.body;

    // Check username and password
    if (username === "Meghana" && password === "1234") {

        // Create cookies after successful login
        res.cookie("loggedIn", "true");
        res.cookie("username", username);

        // Go to dashboard
        res.redirect("/dashboard");

    } else {

        // Wrong username or password
        res.send("Invalid username or password");
    }
});


// DASHBOARD / MAINTAINING STATE 
app.get("/dashboard", (req, res) => {
    // Check whether user is logged in using cookie
    if (req.cookies.loggedIn === "true") {

        // Send username to dashboard.ejs
        res.render("dashboard", {
            username: req.cookies.username
        });

    } else {

        // User is not logged in
        res.redirect("/");
    }
});

//LOGOUT 
app.get("/logout", (req, res) => {

    // Remove login cookies
    res.clearCookie("loggedIn");
    res.clearCookie("username");

    // Redirect to login page
    res.redirect("/login");
});

//START SERVER 
app.listen(3000, () => {

    console.log("Server running on port 3000");
    console.log("Open: http://localhost:3000");

});