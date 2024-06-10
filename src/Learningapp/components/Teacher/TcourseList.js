import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TcourseList.css";
import TeacherHeader from "./TeacherHeader";
import TeacherSidebar from "./TeacherSidebar";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses when the component mounts
    axios
      .get("http://localhost:3001/courses/addcourse")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div>
      <TeacherHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <TeacherSidebar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="TcourseListTitle">
                All Courses Titles And Their Teachers Name
              </h2>
              {courses.length === 0 ? (
                // <p>Loading...</p>
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>
              ) : (
                <table className="table table-hover table-dark">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Course Title</th>
                      <th scope="col">Teacher Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((course, index) => (
                      <tr key={course._id}>
                        <td>{index + 1}</td>
                        <td>{course.title}</td>
                        <td>{course.instructor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
