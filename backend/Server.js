const express = require('express');
const mongoose = require('mongoose'); // Add mongoose import
const cors = require('cors');
const bodyParser = require('body-parser');
const Contact = require('./models/Contact'); // Ensure the Contact model is correctly imported

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const MONGODB_URL = 'mongodb://localhost:27017/PortfolioDB';
mongoose
    .connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((error) => console.error('MongoDB connection error:', error));

app.post('/Contact', async (req, res) => {
    try {
        // Create a new contact document from request body data
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });

        // Save to MongoDB
        const savedContact = await newContact.save();
        res.status(201).json({ message: 'Contact form data saved successfully!', data: savedContact });
    } catch (error) {
        console.error('Error saving contact form data:', error);
        res.status(500).json({ message: 'Server error' });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});