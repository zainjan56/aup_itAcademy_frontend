import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import StudentHeader from "../Student/StudentHeader";
import CourseSidebar from "./CourseSidebar";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import "./Course.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BsFilePdfFill } from "react-icons/bs";
import { RiFolderVideoFill } from "react-icons/ri";
import { BsChatSquareTextFill } from "react-icons/bs";
import { FaBarsProgress } from "react-icons/fa6";
import { blog } from "../../../dummydata";
import courseIcon from "../images/education1.png";

const Course = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Get the course ID from the URL parameter
  const [course, setCourse] = useState({});

  useEffect(() => {
    // Fetch the specific course's details based on the course ID
    axios
      .get(`http://localhost:3001/courses/addcourse/${id}`)
      .then((response) => {
        setCourse(response.data);
        dispatch(cartActions.addItemToCart(response.data));
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
      });
  }, [id, dispatch]);

  const openPdf = () => {
    window.open(
      `http://localhost:3001/${course.pdfPath}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div>
      <StudentHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CourseSidebar />
        <div className="container courseCont">
          <br />
          <div className="row introArea">
            <div className="col-sm-6 selectedCourse">
             <div className="courseTitleIntro">
              <h1 className="courseTitle">Introduction To {course.title}</h1>
              <h5>{course.description}</h5>
              <div className="courseIntroIcon">
                <img src={courseIcon} alt="" width={300}/>
              </div>
             </div>
            </div>
            <div className="col-sm-6 selectedCourseTwo">
             <img src={blog[1]?.cover} alt="cover" width="100%" height="100%"/>
             </div>
          </div>

          <Row xs={1} md={4} className="g-4">
            <Col>
              <Card className="pdf-display-cards">
                <Card.Body>
                  <span className="student-logos">
                    <BsFilePdfFill size={35} color="black" />
                  </span>
                  <Card.Title className="pdf-cards-title">PDF</Card.Title>
                  <div className="student-logos">
                  <Button onClick={openPdf} size="sm" variant="secondary">
                    Open PDF
                  </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="pdf-display-cards">
                <Card.Body>
                  <span className="student-logos">
                    <RiFolderVideoFill size={35} color="black" />
                  </span>
                  <Card.Title className="pdf-cards-title">Video</Card.Title>
                  <div className="student-logos">
                  <Link to="/topicone">
                    <Button size="sm" variant="secondary">
                      Open Video
                    </Button>
                  </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="pdf-display-cards">
                <Card.Body>
                  <span className="student-logos">
                    <BsChatSquareTextFill size={35} color="black" />
                  </span>
                  <Card.Title className="pdf-cards-title">Quizz</Card.Title>
                  <div className="student-logos">
                  <Link className="nav-link" to="/quizhome">
                    <Button size="sm" variant="secondary">
                      Start Quizz
                    </Button>
                  </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="pdf-display-cards">
                <Card.Body>
                  <span className="student-logos">
                    <FaBarsProgress size={35} color="black" />
                  </span>
                  <Card.Title className="pdf-cards-title">Records</Card.Title>
                  <div className="student-logos">
                  <Link className="nav-link" to="/studentrecord">
                    <Button size="sm" variant="secondary">
                      Progress
                    </Button>
                  </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Course;
