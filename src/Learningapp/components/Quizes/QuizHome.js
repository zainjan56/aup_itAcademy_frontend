import React from 'react';
import StudentHeader from '../Student/StudentHeader';
import CourseSidebar from '../AllCourses/CourseSidebar';
import QuizApp from './QuizApp';

const QuizHome = () => {
  return (
    <div>
      <StudentHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CourseSidebar />
        <QuizApp />
    </div>
    </div>
  )
}

export default QuizHome;