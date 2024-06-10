import React, { useState } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import "./AddCourse.css";

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    courseCode: "",
    title: "",
    instructor: "",
    topics: "",
    description: "",
    courseImage: null,
    coursePDF: null,
    courseVideo: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourseData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("courseCode", courseData.courseCode);
    formData.append("title", courseData.title);
    formData.append("instructor", courseData.instructor);
    formData.append("topics", courseData.topics);
    formData.append("description", courseData.description);
    formData.append("courseImage", courseData.courseImage);
    formData.append("coursePDF", courseData.coursePDF);
    formData.append("courseVideo", courseData.courseVideo);

    try {
      const res = await axios.post("http://localhost:3001/courses/addcourse", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      NotificationManager.success(
        `${res.data.course.title} course has been successfully stored.`,
        "",
        3000
      );
      event.target.reset();
      setCourseData({
        courseCode: "",
        title: "",
        instructor: "",
        topics: "",
        description: "",
        courseImage: null,
        coursePDF: null,
        courseVideo: null,
      });
    } catch (error) {
      NotificationManager.error(error.response.data, "", 3000);
    }
  };

  return (
    <div>
      <AdminHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <AdminSidebar />
    <div className="container addCourseFormArea">
      <br></br>
      <div className="col-sm-12">
        <div className="row">
        <div className="Auth-form-container">
          <form className="Auth-form CourseformArea" onSubmit={handleSubmit}>
            <div className="form-group mt-3">
              <h3 className="CourseTitle">Course Adding Form</h3>
            </div>
            <div className="form-group mt-3">
                    <label className="courseAddLabel">Course Code</label>
                    <input
                      type="text"
                      required
                      className="form-control mt-1"
                      name="courseCode"
                      placeholder="Course Code"
                      value={courseData.courseCode}
                      onChange={handleChange}
                      id="mycourseCode"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="courseAddLabel">Course Title</label>
                    <input
                      type="text"
                      required
                      className="form-control mt-1"
                      name="title"
                      placeholder="Course Title"
                      value={courseData.title}
                      onChange={handleChange}
                      id="mycourseTitle"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="courseAddLabel">Instructor Name</label>
                    <input
                      type="text"
                      required
                      className="form-control mt-1"
                      name="instructor"
                      placeholder="Instructor Name"
                      value={courseData.instructor}
                      onChange={handleChange}
                      id="mycourseInstructor"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="courseAddLabel">Topics</label>
                    <input
                      type="text"
                      required
                      className="form-control mt-1"
                      name="topics"
                      placeholder="Topics (comma separated)"
                      value={courseData.topics}
                      onChange={handleChange}
                      id="mycourseTopics"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="courseAddLabel">Description (1-15 Words)</label>
                    <textarea
                      type="text"
                      required
                      className="form-control mt-1"
                      name="description"
                      placeholder="Course Description"
                      value={courseData.description}
                      onChange={handleChange}
                      id="mycoursedesc"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="courseAddLabel">Course Image</label>
                    <input
                      type="file"
                      required
                      className="form-control mt-1"
                      name="courseImage"
                      onChange={handleFileChange}
                      id="mycourseImage"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="courseAddLabel">Course PDF</label>
                    <input
                      type="file"
                      required
                      className="form-control mt-1"
                      name="coursePDF"
                      onChange={handleFileChange}
                      id="mycoursePDF"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="courseAddLabel">Course Video</label>
                    <input
                      type="file"
                      required
                      className="form-control mt-1"
                      name="courseVideo"
                      onChange={handleFileChange}
                      id="mycourseVideo"
                    />
                  </div>
            <div className="gap-2 mt-3">
              <button type="submit" className="courseAddbtn">
                Submit
              </button>
            </div>
            <br></br>
          </form><br></br>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AddCourse;
