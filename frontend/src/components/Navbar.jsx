import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn((prevState) => !prevState); 
  };

  return (
    <nav className="bg-blue-600 text-white w-64 p-4 h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-6">EduDash</h1>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="hover:underline block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:underline block">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/instructors" className="hover:underline block">
              Instructors List
            </Link>
          </li>
          <li>
            <Link to="/add-course" className="hover:underline block">
              Add Course
            </Link>
          </li>
          <li>
            <Link to="/schedule-lecture" className="hover:underline block">
              Schedule Lecture
            </Link>
          </li>
          <li>
            <Link to="/view-lectures" className="hover:underline block">
              View Lectures
            </Link>
          </li>
          <li>
            <Link to="/view-courses" className="hover:underline block">
              View Courses
            </Link>
          </li>
        </ul>
      </div>

   
      <div className="mt-auto pt-4">
        {!isLoggedIn ? (
          <button
            onClick={handleLoginLogout}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg w-full hover:bg-blue-700"
          >
            Login
          </button>
        ) : (
          <button
            onClick={handleLoginLogout}
            className="bg-red-500 text-white py-2 px-6 rounded-lg w-full hover:bg-red-700"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
