import React, { useState } from "react";

const ScheduleLecture = () => {
  const [instructor, setInstructor] = useState("");
  const [course, setCourse] = useState("");
  const [lectureDate, setLectureDate] = useState("");
  const [lectureTime, setLectureTime] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLecture = {
      instructor,
      course,
      date: lectureDate,
      time: lectureTime,
      duration,
    };

    const response = await fetch("/api/lectures", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLecture),
    });

    const data = await response.json();

    if (data.success) {
      alert("Lecture scheduled successfully!");
    } else {
      alert("Failed to schedule lecture.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold text-center text-blue-600">
        Add Lecture
      </h1>
      <hr className="border-gray-300 mb-6" />

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow space-y-6"
      >
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="instructor" className="block text-lg">
              Instructor
            </label>
            <input
              type="text"
              id="instructor"
              className="border p-2 w-full"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="course" className="block text-lg">
              Course
            </label>
            <select
              id="course"
              className="border p-2 w-full"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              <option value="">Select a Course</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>
              <option value="course4">Course 4</option>
             
            </select>
          </div>

          <div>
            <label htmlFor="lectureDate" className="block text-lg">
              Lecture Date
            </label>
            <input
              type="date"
              id="lectureDate"
              className="border p-2 w-full"
              value={lectureDate}
              onChange={(e) => setLectureDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="lectureTime" className="block text-lg">
              Lecture Time
            </label>
            <input
              type="time"
              id="lectureTime"
              className="border p-2 w-full"
              value={lectureTime}
              onChange={(e) => setLectureTime(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="duration" className="block text-lg">
              Duration (in minutes)
            </label>
            <input
              type="number"
              id="duration"
              className="border p-2 w-full"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            Schedule Lecture
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleLecture;
