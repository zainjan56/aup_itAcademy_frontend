import React from "react";
import { useSelector } from "react-redux";
import StudentHeader from "./StudentHeader";
import StudentSidebar from "./StudentSidebar";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBProgress,
  MDBProgressBar,
} from "mdb-react-ui-kit";
import "./Studentrecord.css";

const Studentrecord = () => {
  const studentRecords = useSelector((state) => state.studentrecord.items);

  // Function to get score by courseCode
  const getScoreByCourseCode = (courseCode) => {
    const record = studentRecords.find((record) => record.courseCode === courseCode);
    return record ? record.score : 0;
  };

  const cplusScore = getScoreByCourseCode("cplus22");
  const reactScore = getScoreByCourseCode("react11");

  // Check if studentRecords is empty
  if (!studentRecords || Object.keys(studentRecords).length === 0) {
    return (
      <div>
        <StudentHeader />
        <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
          <StudentSidebar />
          <div className="container" style={{ overflowY: "auto" }}>
            <section style={{ backgroundColor: "#eee" }}>
              <MDBContainer className="py-5">
                <MDBRow>
                  <MDBCol lg="8">
                    <div className="text-center">
                      <h5>Please first take a quiz to view your records.</h5>
                      {/* You can add a button or link here to redirect the user to the quiz page */}
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <StudentHeader />
        <div
          style={{
            display: "flex",
            height: "100vh",
            overflow: "scroll initial",
          }}
        >
          <StudentSidebar />
          <div className="container" style={{ overflowY: "auto" }}>
            <section style={{ backgroundColor: "#eee" }}>
              <MDBContainer className="py-5">
                <MDBRow>
                  <MDBCol lg="8">
                    <MDBRow>
                      <MDBCol md="6">
                        <MDBCard className="mb-4 mb-md-0">
                          <MDBCardBody>
                            <MDBCardText className="mb-4">
                              <b>Course's Quizzes Progress</b>
                            </MDBCardText>
                            <MDBCardText
                              className="mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              React Score
                            </MDBCardText>
                            <MDBProgress className="rounded">
                              <MDBProgressBar
                                width={reactScore}
                                valuemin={0}
                                valuemax={100}
                              />
                            </MDBProgress>

                            <MDBCardText
                              className="mt-4 mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              C++ Score
                            </MDBCardText>
                            <MDBProgress className="rounded">
                              <MDBProgressBar
                                width={cplusScore}
                                valuemin={0}
                                valuemax={100}
                              />
                            </MDBProgress>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studentrecord;