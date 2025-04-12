import React, { useEffect, useState } from "react";

const ViewCourses = () => {
  const [courses, setCourses] = useState([]);

  
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold text-blue-600 text-center">
        Courses List
      </h1>
      <hr className="mt-2 border-gray-300" />

     
      <div className="mb-4">
        <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
          Filter
        </button>
      </div>
   
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Courses</h2>
        <table className="table-auto w-full border-collapse mt-4">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border-b px-4 py-2">Sr. No.</th>
              <th className="border-b px-4 py-2">Course Name</th>
              <th className="border-b px-4 py-2">Level</th>
              <th className="border-b px-4 py-2">Description</th>
              <th className="border-b px-4 py-2">Image</th>
            </tr>
          </thead>
          <tbody>
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <tr key={course._id}>
                  <td className="border-b px-4 py-2">{index + 1}</td>
                  <td className="border-b px-4 py-2">{course.name}</td>
                  <td className="border-b px-4 py-2">{course.level}</td>
                  <td className="border-b px-4 py-2">{course.description}</td>
                  <td className="border-b px-4 py-2">
                    {course.image ? (
                      <img
                        src={course.image}
                        alt={course.name}
                        className="w-16 h-16 object-cover"
                      />
                    ) : (
                      <span>No Image</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border-b px-4 py-2 text-center">
                  No courses available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCourses;
