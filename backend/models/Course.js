import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, 
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

export default Course;
