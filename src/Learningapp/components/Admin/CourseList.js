import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./CourseList.css";
import CourseUpdate from "./CourseUpdate";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);

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

  const handleDelete = async (id) => {
    try {
      await axios
        .delete(`http://localhost:3001/courses/deletecourse/${id}`)
        .then((res) => {
          NotificationManager.success(
            "Course has been successfully Delete.",
            "",
            3000
          );
        });
      setCourses(courses.filter((course) => course._id !== id));
    } catch (error) {
      NotificationManager.error("Error Deleting Course!", "", 3000);
    }
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
  };

  const handleUpdate = (id, updatedData) => {
    setCourses(
      courses.map((course) =>
        course._id === id
          ? {
              ...course,
              ...updatedData,
              topics: updatedData.topics.split(", "),
            }
          : course
      )
    );
  };

  const handleCloseForm = () => {
    setEditingCourse(null);
  };

  return (
    <div>
      <AdminHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <AdminSidebar />
        <div className="container courseListcontainer">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="courseListTitle">All Courses</h2>
              <div className="tableArea">
                {courses.length === 0 ? (
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
                  <table className="styled-table">
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Course Title</th>
                        <th>Instructor Name</th>
                        <th>Operations</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((course, index) => (
                        <tr key={course._id}>
                          <td>{index + 1}</td>
                          <td>{course.title}</td>
                          <td>{course.instructor}</td>
                          <td>
                            <div>
                              <button
                                className="operationsBtn"
                                id="updateButton"
                                onClick={() => handleEdit(course)}
                              >
                                Update
                              </button>
                              <button
                                className="operationsBtn"
                                id="deleteButton"
                                onClick={() => handleDelete(course._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
              <div className="updateFormArea">
                <br></br>
                {editingCourse && (
                  <CourseUpdate
                    course={editingCourse}
                    onClose={handleCloseForm}
                    onUpdate={handleUpdate}
                  />
                )}
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
