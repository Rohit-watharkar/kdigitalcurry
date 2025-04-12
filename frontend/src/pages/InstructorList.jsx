import React, { useEffect, useState } from "react";

const InstructorList = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      const response = await fetch("/api/instructors");
      const data = await response.json();
      setInstructors(data);
    };

    fetchInstructors();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
   
      <div className="text-center mb-4">
        <h1 className="text-3xl font-semibold text-blue-600">
          Instructors List
        </h1>
        <hr className="mt-2 border-gray-300" />
      </div>

      
      <div className="mb-4">
        <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
          Filter
        </button>
      </div>

      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium">Instructor</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Instructor
        </button>
      </div>

    
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-4 border">Sr No</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Phone No</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {instructors.length > 0 ? (
              instructors.map((instructor, index) => (
                <tr key={instructor.id} className="text-center border-t">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{instructor.name}</td>
                  <td className="py-2 px-4 border">{instructor.phone}</td>
                  <td className="py-2 px-4 border">{instructor.email}</td>
                  <td className="py-2 px-4 border">
                    <button className="text-blue-600 hover:underline mr-2">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No instructors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorList;
