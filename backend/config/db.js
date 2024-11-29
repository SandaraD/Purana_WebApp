const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');

const mongoURI = 'your_mongodb_uri';

const connectDB = async () => {
  const conn = await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);

  let gfs;
  conn.connection.once('open', () => {
    gfs = Grid(conn.connection.db, mongoose.mongo);
    gfs.collection('uploads');
  });

  const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
      return {
        bucketName: 'uploads',
        filename: `${Date.now()}-${file.originalname}`, 
      };
    },
  });

  const upload = multer({ storage });
  return { gfs, upload };
};

module.exports = connectDB;
