// // // src/pages/View.js
// // import React from "react";
// // import "../styles/View.css";

// // function View({ selectedCourses = [] }) {
// //   return (
// //     <div className="viewMain">
// //       <h2>Selected Courses</h2>
// //       <div className="courseList">
// //         {selectedCourses.length === 0 ? (
// //           <p>No courses selected.</p>
// //         ) : (
// //           selectedCourses.map((course) => (
// //             <div key={course.id} className="card">
// //               <div className="card-image">
// //                 <img
// //                   src={course.image}
// //                   style={{ width: "100%", height: "8rem" }}
// //                   alt={course.title}
// //                 />
// //               </div>
// //               <div className="card-body">
// //                 <h5 className="card-title">{course.title}</h5>
// //                 <h6 className="card-subtitle mb-2 text-body-secondary">
// //                   {course.instructor}
// //                 </h6>
// //                 <p className="card-text">{course.description}</p>
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default View;

// import React from "react";
// import "../styles/View.css";

// function View({ selectedCourses = [] }) {
//   return (
//     <div className="viewMain">
//       <h2>Selected Courses</h2>
//       <div className="courseList">
//         {selectedCourses.length === 0 ? (
//           <p>No courses selected.</p>
//         ) : (
//           selectedCourses.map((course) => (
//             <div key={course.id} className="card">
//               <div className="card-image">
//                 <img
//                   src={course.image}
//                   style={{ width: "100%", height: "8rem" }}
//                   alt={course.title}
//                 />
//               </div>
//               <div className="card-body">
//                 <h5 className="card-title">{course.title}</h5>
//                 <h6 className="card-subtitle mb-2 text-body-secondary">
//                   {course.instructor}
//                 </h6>
//                 <p className="card-text">{course.description}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default View;

import React from "react";
import "../styles/View.css";
import deleted from "../images/delete.png";
import Layout from "../components/Layout";

function View({ selectedCourses = [], removeCourse }) {
  return (
    <Layout>
      <div className="viewMain">
        <h2>Selected Courses</h2>
        <div className="courseList">
          {selectedCourses.length === 0 ? (
            <p>No courses selected.</p>
          ) : (
            selectedCourses.map((course) => (
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
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <button
                      className="deleteCourse btn btn-danger ms-5 pb-2"
                      onClick={() => removeCourse(course.id)}
                    >
                      <img src={deleted} className="buttonImage" alt="Delete" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

export default View;
