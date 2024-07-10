// import logo from "./logo.svg";
// import "./App.css";
// import Layout from "./components/Layout";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import View from "./pages/View";
// import Courses from "./pages/Courses";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/view" element={<View />} />
//         <Route path="/courses" element={<Courses/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Layout from "./components/Layout";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import View from "./pages/View";
// import Courses from "./pages/Courses";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import coursesData from "./pages/course"; // Import the course data

// function App() {
//   const [selectedCourses, setSelectedCourses] = useState([]);

//   const addCourse = (course) => {
//     setSelectedCourses([...selectedCourses, course]);
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/view"
//           element={<View selectedCourses={selectedCourses} />}
//         />
//         <Route
//           path="/courses"
//           element={<Courses courses={coursesData} addCourse={addCourse} />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import View from "./pages/View";
import Courses from "./pages/Courses";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import coursesData from "./pages/course"; // Import the course data

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const addCourse = (course) => {
    setSelectedCourses([...selectedCourses, course]);
  };

  const removeCourse = (courseId) => {
    setSelectedCourses(
      selectedCourses.filter((course) => course.id !== courseId)
    );
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
          element={<Courses courses={coursesData} addCourse={addCourse} />}
        />
        {/* <Route path="/AddCourse" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
