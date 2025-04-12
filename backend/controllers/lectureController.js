import Lecture from '../models/Lecture.js';

export const scheduleLecture = async (req, res) => {
  try {
    const { course, instructor, date, time, duration } = req.body;

   
    const existingLectures = await Lecture.find({ instructor, date });

    const newStart = new Date(`${date}T${time}:00`);
    const newEnd = new Date(newStart.getTime() + duration * 60 * 60 * 1000);

    for (let lec of existingLectures) {
      const existingStart = new Date(`${lec.date}T${lec.time}:00`);
      const existingEnd = new Date(existingStart.getTime() + lec.duration * 60 * 60 * 1000);

      if (newStart < existingEnd && newEnd > existingStart) {
        return res.status(400).json({ message: 'Lecture time overlaps for instructor' });
      }
    }

    const lecture = new Lecture({ course, instructor, date, time, duration });
    await lecture.save();
    res.status(201).json({ message: 'Lecture scheduled', lecture });

  } catch (error) {
    res.status(500).json({ message: 'Failed to schedule lecture', error: error.message });
  }
};

export const getLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find().populate('course instructor');
    res.status(200).json(lectures);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch lectures', error: error.message });
  }
};
