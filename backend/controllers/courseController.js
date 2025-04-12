import express from 'express';
import multer from 'multer';
import path from 'path';
import Course from '../models/Course.js';


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');  
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  
  },
});
const upload = multer({ storage: storage });

const router = express.Router();


router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, level, description } = req.body;
    const image = req.file ? req.file.path : null;  

    const newCourse = new Course({
      name,
      level,
      description,
      image,
    });

    await newCourse.save();
    res.status(201).json({ success: true, message: 'Course added successfully!' });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to add course', error });
  }
});

export default router;
