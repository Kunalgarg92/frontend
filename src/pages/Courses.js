// // // src/pages/Courses.js
// // import React from "react";
// // import "../styles/Courses.css";
// // import add from "../images/add.png";
// // import deleted from "../images/delete.png";
// // import course from "../pages/course"; // ye import ho raha hai lekin use nhi ho raha kahi yaha poar ok courses not defined bta rha h

// // function Courses({ courses, addCourse }) {
// //   // Receive courses and addCourse as props
// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         justifyContent: "space-between",
// //         paddingTop: "3rem",
// //       }}
// //       className="courseMain px-2 py-5"
// //     >
// //       {course.map((course) => (
// //         <div key={course.id} className="card">
// //           <div className="card-image">
// //             <img
// //               src={course.image}
// //               style={{ width: "100%", height: "8rem" }}
// //               alt={course.title}
// //             />
// //           </div>
// //           <div className="card-body">
// //             <h5 className="card-title">{course.title}</h5>
// //             <h6 className="card-subtitle mb-2 text-body-secondary">
// //               {course.instructor}
// //             </h6>
// //             <p className="card-text">{course.description}</p>
// //             <div style={{ display: "flex", justifyContent: "space-evenly" }}>
// //               <button
// //                 className="addCourse btn btn-success me- pb-2"
// //                 onClick={() => addCourse(course)}
// //               >
// //                 <img src={add} className="buttonImage" alt="Add" />
// //               </button>
// //               <button className="deleteCourse btn btn-danger ms-5 pb-2">
// //                 <img src={deleted} className="buttonImage" alt="Delete" />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Courses;

// import React from "react";
// import "../styles/Courses.css";
// import add from "../images/add.png";
// import deleted from "../images/delete.png";

// function Courses({ courses, addCourse }) {
//   // Receive courses and addCourse as props
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         paddingTop: "3rem",
//       }}
//       className="courseMain px-2 py-5"
//     >
//       {courses.map((course) => (
//         <div key={course.id} className="card">
//           <div className="card-image">
//             <img
//               src={course.image}
//               style={{ width: "100%", height: "8rem" }}
//               alt={course.title}
//             />
//           </div>
//           <div className="card-body">
//             <h5 className="card-title">{course.title}</h5>
//             <h6 className="card-subtitle mb-2 text-body-secondary">
//               {course.instructor}
//             </h6>
//             <p className="card-text">{course.description}</p>
//             <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//               <button
//                 className="addCourse btn btn-success me- pb-2"
//                 onClick={() => addCourse(course)}
//               >
//                 <img src={add} className="buttonImage" alt="Add" />
//               </button>
//               <button className="deleteCourse btn btn-danger ms-5 pb-2">
//                 <img src={deleted} className="buttonImage" alt="Delete" />
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Courses;

import React from "react";
import "../styles/Courses.css";
import add from "../images/add.png";
import Layout from "../components/Layout";

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
    </Layout>
  );
}

export default Courses;
