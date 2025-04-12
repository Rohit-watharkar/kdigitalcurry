import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">
          Welcome to the Online Lecture Scheduling System
        </h1>
        <p className="text-xl mb-4">
          Manage your courses and schedule lectures with ease.
        </p>
        <a
          href="/dashboard"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
};

export default Home;
