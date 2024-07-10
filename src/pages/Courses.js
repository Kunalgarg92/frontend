import React from "react";
import "../styles/Courses.css";
import add from "../images/add.png";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function Courses({ courses, addCourse }) {
  // Receive courses and addCourse as props
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "3rem",
        }}
        className="courseMain px-2 py-5"
      >
        {courses.map((course) => (
          <div key={course.id} className="card">
            <div className="card-image">
              <img
                src={course.image}
                style={{ width: "100%", height: "8rem" }}
                alt={course.title}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {course.instructor}
              </h6>
              <p className="card-text">{course.description}</p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <button
                  className="addCourse btn btn-success me- pb-2"
                  onClick={() => addCourse(course)}
                >
                  <img src={add} className="buttonImage" alt="Add" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/add-course" className="btn btn-primary">
          Add New Course
        </Link>
      </div>
    </Layout>
  );
}

export default Courses;
