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
  const courseTitle = useSelector((state) => state.cart.items.title);

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

  const quizScore = studentRecords.quizScore;
  // const readingScore = studentRecords.readingScore;

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
                              <b>{courseTitle} Course</b>
                            </MDBCardText>
                            <MDBCardText
                              className="mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              Quizz Score
                            </MDBCardText>
                            <MDBProgress className="rounded">
                              <MDBProgressBar
                                width={quizScore}
                                valuemin={0}
                                valuemax={100}
                              />
                            </MDBProgress>

                            <MDBCardText
                              className="mt-4 mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              Reading Score
                            </MDBCardText>
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