import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setCourses } from "../features/user/userSlice"; 

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const courses = useSelector((state) => state.user.courses);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      dispatch(setUser(data)); 
    };

    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const data = await response.json();
      dispatch(setCourses(data)); 
    };

    fetchUserData();
    fetchCourses();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <h2 className="text-xl mb-6">Welcome, {user ? user.name : "Guest"}</h2>
      <div>
        <h3 className="text-2xl mb-4">Your Courses</h3>
        <ul className="space-y-4">
          {courses &&
            courses.map((course) => (
              <li key={course.id} className="border p-4 rounded-lg">
                <h4 className="font-semibold">{course.name}</h4>
                <p>{course.description}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
