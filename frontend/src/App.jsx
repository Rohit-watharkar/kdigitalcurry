import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import InstructorList from "./pages/InstructorList";
import AddCourse from "./pages/AddCourse";
import ScheduleLecture from "./pages/ScheduleLecture";
import ViewLectures from "./pages/ViewLectures"; 
import ViewCourses from "./pages/ViewCourses"; 
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
    
      <Navbar />

      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/instructors" element={<InstructorList />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/schedule-lecture" element={<ScheduleLecture />} />
          <Route path="/view-lectures" element={<ViewLectures />} />{" "}
         
          <Route path="/view-courses" element={<ViewCourses />} />{" "}
        
        </Routes>
      </div>
    </div>
  );
};

export default App;
