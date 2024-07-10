import React from "react";
import Layout from "../components/Layout";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.webp";
import c4 from "../images/c4.jpg";
import c5 from "../images/c5.jpg";
import c6 from "../images/c6.jpg";
import c7 from "../images/c7.jpg";
import c8 from "../images/c8.webp";
import c9 from "../images/c9.jpg";
import lms from "../images/lms.jpg";
import lms2 from "../images/lms2.png";
import "../styles/Home.css";

function Home() {
  return (
    <Layout>
      <div className="home-container">
        <div className="left">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={c1} className="d-block w-100 slideImage" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Introduction to Machine Learning</h5>
                  <p>Instructor: Dr. Laura Thompson</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={c2} className="d-block w-100 slideImage" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Introduction to Deep Learning</h5>
                  <p>Instructor: Dr. Karen Lee</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={c3} className="d-block w-100 slideImage" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Modern Web Development</h5>
                  <p>Instructor: Prof. John Doe</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={c4} className="d-block w-100 slideImage" alt="Fourth slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Introduction to Computer Science</h5>
                  <p>Instructor: Dr. Alice Smith</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={c5} className="d-block w-100 slideImage" alt="Fifth slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Fundamentals of Data Science</h5>
                  <p>Instructor: Dr. Emma Johnson</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={c6} className="d-block w-100 slideImage" alt="Sixth slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Environmental Science and Sustainability</h5>
                  <p>Instructor: Dr. David Martinez</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={c7} className="d-block w-100 slideImage" alt="Seventh slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Introduction to Artificial Intelligence</h5>
                  <p>Instructor: Dr. Liam Anderson</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={c8} className="d-block w-100 slideImage" alt="Eigth slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Principles of Economics</h5>
                  <p>Instructor: Dr. Olivia Wilson</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={c9} className="d-block w-100 slideImage" alt="Ninth slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Digital Marketing Strategies</h5>
                  <p>Instructor: Prof. Michael Brown</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="right-sidebar">
            <img src={lms} className="sidebar-image" alt="LMS 1" />
          </div>
          <div className="right-sidebar" style={{ height: "40vh" }}>
            <h3 style={{color:"orange",textAlign:"center"}}>Add & Drop</h3>
            <hr/>
            <p className="px-4" style={{ textAlign: "justify" }}>
              The "Add and Drop" feature in an LMS allows students to manage their course enrollments efficiently. Within a specified period, students can add new courses to their schedule or drop existing ones. This flexibility helps students tailor their academic workload, ensuring they can balance their studies with other commitments. It also allows them to adjust their learning paths based on their evolving interests and needs.
            </p>
          </div>
          <div className="right-sidebar">
            <img src={lms2} className="sidebar-image" alt="LMS 2" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
