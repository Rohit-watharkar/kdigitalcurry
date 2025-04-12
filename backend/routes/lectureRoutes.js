import express from 'express';
import Lecture from '../models/Lecture.js';  


const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const { title, date, time, instructor, course, duration } = req.body;
    const newLecture = new Lecture({ title, date, time, instructor, course, duration });
    await newLecture.save();
    res.status(201).json({ success: true, message: 'Lecture scheduled successfully!' });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to schedule lecture', error });
  }
});


router.get('/', async (req, res) => {
  try {
    const lectures = await Lecture.find().populate('instructor').populate('course');
    res.status(200).json(lectures);
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to fetch lectures', error });
  }
});

export default router;
