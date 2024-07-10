import React, { useState } from "react";
import Layout from "../components/Layout";
import Courses from "./Courses";
import View from "./View";
import courses from "../pages/course"; // Import the courses data

function CoursePage() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const addCourse = (course) => {
    setSelectedCourses((prevCourses) => [...prevCourses, course]);
  };

  return (
    <Layout>
      <Courses courses={courses} addCourse={addCourse} />
      <View selectedCourses={selectedCourses} />
    </Layout>
  );
}

export default CoursePage;
