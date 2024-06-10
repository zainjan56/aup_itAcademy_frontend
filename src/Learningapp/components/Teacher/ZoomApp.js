import React from 'react'
import TeacherHeader from './TeacherHeader';
import TeacherSidebar from './TeacherSidebar';

const ZoomApp = () => {
  return (
    <div>
      <TeacherHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <TeacherSidebar />
        
      </div>
    </div>
  )
}

export default ZoomApp;