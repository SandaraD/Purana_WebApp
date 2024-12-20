require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const siteRoutes = require('./routes/sites');
const userRoutes = require('./routes/user');
const uploadRoute = require('./routes/upload');

const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/sites', siteRoutes);
app.use('/api/user', userRoutes);
app.use('/api/upload', uploadRoute);
app.use('/uploads', express.static('uploads'));

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
        console.log(`Connected to DB & listening on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log(error);
});

module.exports = app;
