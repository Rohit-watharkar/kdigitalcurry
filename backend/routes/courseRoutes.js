import express from 'express';
import Course from '../models/Course.js';

const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const { name, level, description, image } = req.body;
    const newCourse = new Course({ name, level, description, image });
    await newCourse.save();
    res.status(201).json({ success: true, message: 'Course added successfully!' });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to add course', error });
  }
});


router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to fetch courses', error });
  }
});

export default router;
