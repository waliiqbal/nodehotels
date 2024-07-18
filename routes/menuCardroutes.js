const express = require('express');
const router = express.Router();
const MenuCard = require('./../models/MenuCard'); // Adjust the path based on your project structure

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenuCard = new MenuCard(data);
        const savedMenuCard = await newMenuCard.save();
        console.log("MenuCard saved:", savedMenuCard);
        res.status(201).json(savedMenuCard);
    } catch (err) {
        console.error("Error saving MenuCard:", err);
        res.status(500).json({ error: 'Error saving MenuCard: ' + err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const menuItems = await MenuCard.find();
        console.log("MenuCards fetched");
        res.status(200).json(menuItems);
    } catch (err) {
        console.error("Error fetching MenuCards:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// wali
module.exports = router;
