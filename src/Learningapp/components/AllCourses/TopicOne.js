import React from "react";
import StudentHeader from "../Student/StudentHeader";
import CourseSidebar from "./CourseSidebar";
import "./TopicOne.css";
import { useSelector } from "react-redux";

const TopicOne = () => {
     const courseName = useSelector((state) => state.cart);
     const videoPath = courseName.items.videoPath;
  return (
    <div>
      <StudentHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CourseSidebar />
        <div className="container firstTopic">
        <br />
          <div className="row">
            <div className="col-sm-12">
              <h1>Video Lecture</h1>
              <div className='videoArea'>
                <iframe
                className="videoFrame"
                width="580"
                height="360"
                src={`http://localhost:3001/${videoPath}`}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              </div>
            </div>
          </div>
          <div className="row">
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicOne;
