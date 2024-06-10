import React from 'react';
import Courses from "../AllCourses/Courses";

const StudentHome = () => {
  return (
    <div className="container" style={{ overflow: "auto" }}>
        <div className="row">
          <div className="col-sm-12">
            <Courses />
          </div>
        </div>
      </div>
  )
}

export default StudentHome;