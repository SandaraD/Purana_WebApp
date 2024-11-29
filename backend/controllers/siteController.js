const Site = require('../models/siteModel')
const mongoose = require('mongoose')
const multer = require('multer');

// Configure multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage }).array('files', 10);


//GET all sites
const getSites = async(req,res) => {
    const sites = await Site.find({}).sort({createdAt: -1})

    res.status(200).json(sites)
}

//GET a single site
const getSite = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such site'})
    }

    const site = await Site.findById(id)

    if(!site) {
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(site)
}


//CREATE a new site
const createSite = async (req, res) => {
    const { name, city, location, description } = req.body;

    let parsedLocation;
    try {
        parsedLocation = JSON.parse(location);
    } catch (error) {
        return res.status(400).json({ error: "Invalid location format, must be valid GeoJSON" });
    }


    if (!parsedLocation || parsedLocation.type !== "Point" || !Array.isArray(parsedLocation.coordinates) || parsedLocation.coordinates.length !== 2) {
        return res.status(400).json({ error: "Invalid location, must be GeoJSON Point with [longitude, latitude]" });
    }

    try {
        const newSiteData = {
            name,
            city,
            location: parsedLocation,
            description,
            images: req.files ? req.files.map(file => file.path) : [],
        };

        const site = await Site.create(newSiteData);
        res.status(200).json(site);
    } catch (error) {
        console.error("Error creating site:", error);
        res.status(500).json({ error: "Error saving site to the database" });
    }
};



//DELETE a site
const deleteSite = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'No such site'})
    }

    const site = await Site.findOneAndDelete({_id: id})

    if (!site) {
        return res.status(400).json({error: 'No such site'})
    }

    res.status(200).json(site)
}


//UPDATE a site
const updateSite = async(req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such site'})
    }

    const site = await Site.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!site) {
        return res.status(400).json({error: 'No such site'})
    }
    res.status(200).json(site)
}


module.exports = {
    createSite,
    getSites,
    getSite,
    deleteSite,
    updateSite
};