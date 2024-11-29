const express = require('express');
const router = express.Router();
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const Site = require('../models/siteModel');  

let gfs;
const conn = mongoose.connection;
conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
    url: process.env.MONGO_URI,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = `${Date.now()}-${file.originalname}`;
            const fileInfo = {
                filename: filename,
                bucketName: 'uploads'
            };
            resolve(fileInfo);
        });
    }
});
const upload = multer({ storage });

// File upload route
router.post('/', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;

        const siteId = req.body.siteId;  // Get site ID from request body
        if (file && siteId) {
            await Site.findByIdAndUpdate(siteId, {
                $push: { images: file.filename }
            });
        }

        res.status(200).json({ file: req.file });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;


