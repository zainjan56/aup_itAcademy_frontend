import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import AdminHeader from './AdminHeader';
import AdminSidebar from "./AdminSidebar";

const AdminstudentRec = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:3001/studentscore/students");
        if (response.status === 200) {
          const data = response.data;
          
          // Transform the data to group quizzes by student
          const studentData = {};
          data.forEach(record => {
            if (!studentData[record.studentname]) {
              studentData[record.studentname] = {
                studentName: record.studentname,
                quizzes: []
              };
            }
            studentData[record.studentname].quizzes.push({
              courseCode: record.courseCode,
              score: record.score
            });
          });

          setStudents(Object.values(studentData));
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
        <AdminHeader />
        <div
          style={{
            display: "flex",
            height: "100vh",
            overflow: "scroll initial",
          }}
        >
          <AdminSidebar />
          <div className="container" style={{ overflowY: "auto" }}>
            <div className="container">
              <h1>Students Records</h1>
              <Row xs={1} md={3} className="g-4">
                {students.map((student) => (
                  <Col key={student.studentName}>
                    <Card style={{ width: "18rem" }}>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <h6>{student.studentName}</h6>
                        </ListGroup.Item>
                        {student.quizzes.map((quiz, index) => (
                          <ListGroup.Item key={index}>
                            <h6>{quiz.courseCode} Quiz Score</h6>
                            <ProgressBar
                              now={quiz.score}
                              label={`${quiz.score}%`}
                            />
                          </ListGroup.Item>
                        ))}
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

export default AdminstudentRec;