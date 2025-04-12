import React, { useEffect, useState } from "react";

const ViewLectures = () => {
  const [lectures, setLectures] = useState([]);


  useEffect(() => {
    const fetchLectures = async () => {
      const response = await fetch("/api/lectures");
      const data = await response.json();
      setLectures(data);
    };

    fetchLectures();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold text-blue-600 text-center">
        Lectures List
      </h1>
      <hr className="mt-2 border-gray-300" />


      <div className="mb-4">
        <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
          Filter
        </button>
      </div>

 
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Lectures</h2>
        <table className="table-auto w-full border-collapse mt-4">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border-b px-4 py-2">Sr. No.</th>
              <th className="border-b px-4 py-2">Lecture Title</th>
              <th className="border-b px-4 py-2">Instructor</th>
              <th className="border-b px-4 py-2">Course</th>
              <th className="border-b px-4 py-2">Date</th>
              <th className="border-b px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {lectures.length > 0 ? (
              lectures.map((lecture, index) => (
                <tr key={lecture._id}>
                  <td className="border-b px-4 py-2">{index + 1}</td>
                  <td className="border-b px-4 py-2">{lecture.title}</td>
                  <td className="border-b px-4 py-2">{lecture.instructor}</td>
                  <td className="border-b px-4 py-2">{lecture.course}</td>
                  <td className="border-b px-4 py-2">{lecture.date}</td>
                  <td className="border-b px-4 py-2">{lecture.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="border-b px-4 py-2 text-center">
                  No lectures available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLectures;
