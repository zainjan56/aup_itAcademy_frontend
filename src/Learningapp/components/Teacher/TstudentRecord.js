import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import TeacherHeader from "./TeacherHeader";
import TeacherSidebar from "./TeacherSidebar";
//import { useSelector } from 'react-redux';

const TstudentRecord = () => {
  const [students, setStudents] = useState([]);
  //const courseTitle = useSelector((state) => state.cart.items.title);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/studentscore/students"
        ); // Replace with your API endpoint
        if (response.status === 200) {
          setStudents(response.data);
          //console.log(students)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <>
      <div>
        <TeacherHeader />
        <div
          style={{
            display: "flex",
            height: "100vh",
            overflow: "scroll initial",
          }}
        >
          <TeacherSidebar />
          <div className="container" style={{ overflowY: "auto" }}>
            <div className="container">
              <h1>Students Records</h1>
              <Row xs={1} md={3} className="g-4">
                {students.map((student) => (
                  <Col key={student._id}>
                    <Card style={{ width: "18rem" }}>
                      <ListGroup variant="flush">
                        <ListGroup.Item><h6>{student.studentName}</h6></ListGroup.Item>
                        <ListGroup.Item>
                          <h6>Quiz Score</h6>
                          <ProgressBar
                            now={student.quizScore}
                            label={`${student.quizScore}%`}
                          />
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>Reading Score</h6>
                          <ProgressBar
                            now={student.readingScore}
                            label={`${student.readingScore}%`}
                          />
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TstudentRecord;
