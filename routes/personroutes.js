const express = require('express');
const router = express.Router();
const Person = require('./../models/Person'); // Adjust the path based on your project structure

router.post('/addperson', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const savedPerson = await newPerson.save();
        console.log("Person saved:", savedPerson);
        res.status(201).json(savedPerson);
    } catch (err) {
        console.error("Error saving person:", err);
        res.status(500).json({ error: 'Error saving person: ' + err.message });
    }
});

router.get('getworktype/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype;
        const response = await Person.find({ work: worktype });
        console.log("Persons fetched for worktype:", worktype);
        res.status(200).json(response);
    } catch (err) {
        console.error("Error fetching persons:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Update person
router.put('updatePerson/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedData = req.body;

        // Find the person by ID and update with the new data
        const updatedPerson = await Person.findByIdAndUpdate(personId, updatedData,
            // return the uodated data
            { new: true });

        if (!updatedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log("Person updated:", updatedPerson);
        res.status(200).json(updatedPerson);
    } catch (err) {
        console.error("Error updating person:", err);
        res.status(500).json({ error: 'Error updating person: ' + err.message });
    }}
)

module.exports = router;
