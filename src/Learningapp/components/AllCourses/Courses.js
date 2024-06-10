import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "./Courses.css";

const Courses = () => {
  const hasToken = localStorage.getItem("token");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses when the component mounts
    axios
      .get("http://localhost:3001/courses/addcourse")
      .then((response) => {
        console.log("first", response);
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div className="container courseArea">
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
        <Row xs={1} md={3} className="g-4">
          {courses.map((course) => (
            <Col key={course._id}>
              <Card id="courseCard">
                <Card.Img
                  variant="top"
                  src={`http://localhost:3001/${course.imagePath}`}
                  alt="Course"
                  className="coursePictures"
                />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {course.instructor}
                  </Card.Subtitle>
                  <Card.Text>{course.description}</Card.Text>
                  {hasToken ? (
                    <Link className="nav-link" to={`/course/${course._id}`}>
                      <div className="text-center">
                        {" "}
                        {/* Wrap the button in a div with text-center class */}
                        <Button variant="primary">Start Course</Button>
                      </div>
                    </Link>
                  ) : (
                    <h6>Please first register yourself and then login and then you will able to start learning.</h6>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))
          }
        </Row>
      )}
    </div>
  );
};

export default Courses;
