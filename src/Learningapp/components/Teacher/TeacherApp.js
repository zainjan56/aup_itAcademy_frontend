import React from 'react'
import TeacherHeader from './TeacherHeader';
import TeacherSidebar from './TeacherSidebar';
import TeacherHome from './TeacherHome';

const TeacherApp = () => {
  return (
    <div>
      <TeacherHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <TeacherSidebar />
        <TeacherHome />
    </div>
    </div>
  )
}

export default TeacherApp;