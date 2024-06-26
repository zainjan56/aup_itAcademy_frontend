import React, { useState } from "react";
import TeacherHeader from "./TeacherHeader";
import TeacherSidebar from "./TeacherSidebar";
import axios from "axios";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./ZoomApp.css";
import { Link } from "react-router-dom";

const ZoomApp = () => {
  const [meeting, setMeeting] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const createMeeting = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/zoomapp/create-meeting"
      );
      setMeeting(response.data);
      setError(null);
    } catch (error) {
      setError("Error creating meeting");
      setMeeting(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <TeacherHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <TeacherSidebar />
        <Container>
          <Row>
            <Col sm={12} md={12}>
            <div className="zoomAppArea">
              <h1>Zoom Meeting</h1>
              <Button onClick={createMeeting} disabled={loading}>
                {loading ? "Creating..." : "Create Meeting"}
              </Button>
              {meeting && (
                <div>
                  <h2>Meeting Created</h2>
                  <h5>Meeting ID: {meeting.id}</h5>
                  {/* <p>
                    Join URL:{" "}
                    <a
                      href={meeting.join_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {meeting.join_url}
                    </a>
                  </p> */}
                  <Link to={meeting.join_url} target="_blank" rel="noopenernoreferrer"><Button>Join Meeting</Button></Link>
                </div>
              )}
              {error && <p>{error}</p>}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ZoomApp;
