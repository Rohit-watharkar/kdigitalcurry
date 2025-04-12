import React, { useState } from "react";
import axios from "axios";
const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseImage, setCourseImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 15 * 1024 * 1024) {
      setCourseImage(file);
    } else {
      alert("Image must be less than or equal to 15 MB.");
      e.target.value = null;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newCourse = {
      name: courseName,
      level: courseLevel,
      description: courseDescription,
      image: courseImage,
    };
  
    try {
      const formData = new FormData(); 
      formData.append("name", courseName);
      formData.append("level", courseLevel);
      formData.append("description", courseDescription);
      formData.append("image", courseImage);
  
      const response = await axios.post("http://localhost:5000/api/courses", formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });
  
      const data = response.data; 
  
      console.log("Add course response: ", data);
  
      if (data.success) {
        alert("Course added successfully!");
        // Reset form
        setCourseName("");
        setCourseLevel("");
        setCourseDescription("");
        setCourseImage(null);
      } else {
        alert("Failed to add course");
      }
    } catch (error) {
      console.error("Error adding course:", error);
      alert("Failed to add course");
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-5xl space-y-6"
      >
        <div className="text-center mb-4">
          <h1 className="text-3xl font-semibold text-blue-600">
            Add New Course
          </h1>
          <hr className="mt-2 border-gray-300" />
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-lg mb-1">Course Name</label>
            <input
              type="text"
              className="border p-2 w-full rounded"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-1">Course Level</label>
            <select
              className="border p-2 w-full rounded"
              value={courseLevel}
              onChange={(e) => setCourseLevel(e.target.value)}
              required
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div>
            <label className="block text-lg mb-1">Course Description</label>
            <input
              type="text"
              className="border p-2 w-full rounded"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              required
            />
          </div>
        </div>

       
        <div>
          <label className="block text-lg mb-2">Course Image</label>
          <label
            htmlFor="courseImage"
            className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center text-gray-600 cursor-pointer hover:bg-gray-100 transition"
          >
            {courseImage
              ? courseImage.name
              : "Click to add photo (Max size: 15 MB)"}
            <input
              type="file"
              id="courseImage"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
