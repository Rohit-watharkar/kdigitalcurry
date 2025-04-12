import mongoose from 'mongoose';

const lectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  duration: { type: Number, required: true }, 
}, { timestamps: true });

const Lecture = mongoose.model('Lecture', lectureSchema);

export default Lecture;
