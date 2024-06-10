import React from "react";
import teacherPic from "../images/education11.jpg";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./TeacherHome.css";
import { BiLogoZoom } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { FaFileUpload } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";

const TeacherHome = () => {
  const teacherName = localStorage.getItem("name");
  return (
    <div className="container" style={{ overflow: "auto" }}>
      <div className="row">
        <div className="col-sm-6 teacherColumn">
          <br />
          <br />
          <h2 className="teacher-title">Welcome Dear {teacherName}!</h2>
          <p className="teacher-details">
            Teaching is the profession that teaches all the other professions!
          </p>
          <p className="teacher-request">
            Dear teachers! Please upload your courses here, you are able to see
            registered sudents and progress of students.
          </p>
          <Link to="/taddcourses" className="teacher-btn">
            <button className="teacher-button">Add Course Here</button>
          </Link>
        </div>
        <div className="col-sm-6 teacherColumn">
          <img
            src={teacherPic}
            alt="teacher display"
            className="teacher-display-pic"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 teacher-second">
            <div className="teacherActivities">
            <h1>Teacher's Activities</h1>
            </div><br />
          <Row xs={1} md={5} className="g-4">
            <Col>
            <Link exact to="/taddcourses" className="profile-link">
              <Card className="teacher-display-cards">
                <Card.Body>
                <span className="allLogos"><IoBookSharp size={35} color="black"/></span>
                  <Card.Title className="teacher-cards-title">Add Course</Card.Title>
                </Card.Body>
              </Card>
              </Link>
            </Col>

            <Col>
            <Link exact to="/addquiz" className="profile-link">
              <Card className="teacher-display-cards">
                <Card.Body>
                <span className="allLogos"><FaFileUpload size={35} color="black"/></span>
                  <Card.Title className="teacher-cards-title">Add Quizz</Card.Title>
                </Card.Body>
              </Card>
              </Link>
            </Col>

            <Col>
            <Link exact to="/studentslist" className="profile-link">
              <Card className="teacher-display-cards">
              <Card.Body>
                  <span className="allLogos"><FaUsers size={35} color="black"/></span>
                  <Card.Title className="teacher-cards-title">Student List</Card.Title>
                </Card.Body>
              </Card>
              </Link>
            </Col>

            <Col>
            <Link exact to="/tstudentrecord" className="profile-link">
              <Card className="teacher-display-cards">
                <Card.Body>
                <span className="allLogos"><FaBarsProgress size={35} color="black"/></span>
                  <Card.Title className="teacher-cards-title">Student Records</Card.Title>
                </Card.Body>
              </Card>
              </Link>
            </Col>

            <Col>
            <Link exact to="/zoomapp" className="profile-link">
              <Card className="teacher-display-cards">
                <Card.Body>
                  <span className="allLogos"><BiLogoZoom size={40} color="black"/></span>
                  <Card.Title className="teacher-cards-title">Zoom App</Card.Title>
                </Card.Body>
              </Card>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
