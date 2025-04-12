import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/lectureScheduling';

app.use(cors());
app.use(express.json());


import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import lectureRoutes from './routes/lectureRoutes.js';


app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/lectures', lectureRoutes);


app.get('/', (req, res) => {
  res.send('Lecture Scheduling API is running...');
});

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err);
  });
