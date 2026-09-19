const express = require('express');
const mongoose = require('mongoose');
const dns = require('dns');

const app = express();
const PORT = 3000;

app.use(express.json());

// Use Google DNS for MongoDB Atlas SRV lookup
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// ======================================================
// STEP 1 & 2: MongoDB Atlas Configuration & Connection
// ======================================================

// Replace <my_password> with your actual Atlas database
// user's password. Do NOT include the < > symbols.
const dbURI =
    "mongodb+srv://kavyanjalisakile76_db_user:Atlasmongo2026@cluster0.drqzuph.mongodb.net/LabDB?retryWrites=true&w=majority";

mongoose.connect(dbURI)
    .then(() => {
        console.log("Connected to MongoDB Atlas successfully!");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });

// ======================================================
// STEP 3: Create Schema and Model
// ======================================================

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    rollNumber: {
        type: Number,
        required: true,
        unique: true
    },

    course: String,

    isActive: {
        type: Boolean,
        default: true
    }
});

// Model for the "students" collection
const Student = mongoose.model('Student', studentSchema);

// ======================================================
// STEP 4 & 5: CRUD Operations & RESTful Services
// ======================================================

// CREATE - Add a new student
app.post('/students', async (req, res) => {
    try {
        const newStudent = new Student(req.body);

        const savedStudent = await newStudent.save();

        res.status(201).json(savedStudent);

    } catch (error) {
        res.status(400).json({
            message: "Error saving student",
            error: error.message
        });
    }
});

// READ - Get all students
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });
    }
});

// UPDATE - Modify a student by ID
app.put('/students/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(updatedStudent);

    } catch (error) {
        res.status(400).json({
            message: "Error updating student",
            error: error.message
        });
    }
});

// DELETE - Remove a student by ID
app.delete('/students/:id', async (req, res) => {
    try {
        const deletedStudent =
            await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student record deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting student",
            error: error.message
        });
    }
});

// ======================================================
// Start Express Server
// ======================================================

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("Ready for CRUD operations testing.");
});
