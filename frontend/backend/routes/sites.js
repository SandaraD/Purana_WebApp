const express = require('express');
const { createSite, getSites, getSite, deleteSite, updateSite } = require('../controllers/siteController');
const requireAuth = require('../middleware/requireAuth');
const multer = require('multer');
const path = require('path');
const Site = require('../models/siteModel');

const router = express.Router();

// Configure multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage }).array('images', 10); 

// routes that require authentication
router.use('/create', requireAuth);
router.use('/update', requireAuth);
router.use('/delete', requireAuth);

// Create a new site
router.post('/', upload, async (req, res) => {
    try {
        const imageUrls = req.files.map(file => `/uploads/${file.filename}`);
        const site = new Site({ ...req.body, images: imageUrls });
        await site.save();
        res.status(201).json(site);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a site
router.put('/:id', upload, async (req, res) => {
    try {
        const imageUrls = req.files.map(file => `/uploads/${file.filename}`);
        const site = await Site.findByIdAndUpdate(req.params.id, { ...req.body, images: imageUrls }, { new: true });
        res.status(200).json(site);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE a site
router.delete('/:id', async (req, res) => {
    try {
        const site = await Site.findByIdAndDelete(req.params.id);
        if (!site) {
            return res.status(404).json({ message: 'Site not found' });
        }
        res.status(200).json({ message: 'Site deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET all sites (public route)
router.get('/', async (req, res) => {
    try {
        const sites = await Site.find();
        res.json(sites);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch sites' });
    }
});

// GET single site (public route)
router.get('/:id', async (req, res) => {
    console.log(`Received request for site ID: ${req.params.id}`); 
    try {
        const site = await Site.findById(req.params.id);
        if (!site) {
            return res.status(404).json({ message: 'Site not found' });
        }
        res.json(site);
    } catch (error) {
        console.error('Error fetching site details:', error.message);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;