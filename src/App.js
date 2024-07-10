import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import View from "./pages/View";
import Courses from "./pages/Courses";
import AddCourse from "./pages/AddCourse"; // Import AddCourse component
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import coursesData from "./pages/course"; // Import the course data

function App() {
  const [courses, setCourses] = useState(coursesData);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const addCourse = (course) => {
    setSelectedCourses([...selectedCourses, course]);
  };

  const removeCourse = (courseId) => {
    setSelectedCourses(
      selectedCourses.filter((course) => course.id !== courseId)
    );
  };

  const addNewCourse = (formData) => {
    // Generate a new course object with FormData received
    const newCourse = {
      id: formData.get("id"),
      image: URL.createObjectURL(formData.get("image")),
      title: formData.get("title"),
      instructor: formData.get("instructor"),
      description: formData.get("description"),
    };

    setCourses([...courses, newCourse]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/view"
          element={
            <View
              selectedCourses={selectedCourses}
              removeCourse={removeCourse}
            />
          }
        />
        <Route
          path="/courses"
          element={<Courses courses={courses} addCourse={addCourse} />} // Pass courses and addCourse as props
        />
        <Route
          path="/add-course"
          element={<AddCourse addNewCourse={addNewCourse} />} // Pass addNewCourse as a prop
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
