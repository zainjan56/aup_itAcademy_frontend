import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Course from "./AllCourses/Course";
import Courses from "./AllCourses/Courses";
import Logout from "./Logout";
import Register from "./Register";
import Forgotpass from "./Forgotpass";
import About from "./About";
import AddCourse from "./Admin/AddCourse";
import CourseList from "./Admin/CourseList";
import TcourseList from "./Teacher/TcourseList";
import AdminProfile from "./Admin/AdminProfile";
import AdminApp from "./Admin/AdminApp";
import UsersList from "./Admin/UsersList";
import TaddCourses from "./Teacher/TaddCourses";
import TeacherApp from "./Teacher/TeacherApp";
import StudentApp from "./Student/StudentApp";
import TopicOne from "./AllCourses/TopicOne";
import AddQuiz from "./Quizes/AddQuiz";
import QuizHome from "./Quizes/QuizHome";
import StudentsList from "./Teacher/StudentsList";
import Tprofile from "./Teacher/Tprofile";
import Changepassword from "./Teacher/Changepassword";
import Profilechange from "./Teacher/Profilechange";
import Studentrecord from "./Student/Studentrecord";
import StudentProfile from "./Student/StudentProfile";
import { NotificationContainer } from "react-notifications";
import StudentpChange from "./Student/StudentpChange";
import StudentChangepass from "./Student/StudentChangepass";
import AdminprofileChange from "./Admin/AdminprofileChange";
import AdminpasswordChange from "./Admin/AdminpasswordChange";
import TstudentRecord from "./Teacher/TstudentRecord";
import TopicTwo from "./AllCourses/TopicTwo";
import AdminstudentRec from "./Admin/AdminstudentRec";
import Hcourses from "./Hcourses";
import ResetPassword from "./ResetPassword";
import ZoomApp from "./Teacher/ZoomApp";
import QuizQuestions from "./Quizes/QuizQuestions";

const App = () => {
  return (
    <Router>
      <NotificationContainer />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/course/:id" element={<Course />}></Route>
          <Route path="/course" element={<Course />}></Route>
          <Route path="/hcourses" element={<Hcourses />}></Route>
          <Route path="/login/*" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgotpass" element={<Forgotpass />}></Route>
          <Route path="/reset-password/:id/:token" element={<ResetPassword />}></Route>
          <Route path="/adminapp" element={<AdminApp />}></Route>
          <Route path="/addcourse" element={<AddCourse />}></Route>
          <Route path="/courselist" element={<CourseList />}></Route>
          <Route path="/tcourselist" element={<TcourseList />}></Route>
          <Route path="/adminprofile" element={<AdminProfile />}></Route>
          <Route path="/usersrecords" element={<UsersList />}></Route>
          <Route path="/taddcourses" element={<TaddCourses />}></Route>
          <Route path="/teacherapp" element={<TeacherApp />}></Route>
          <Route path="/studentapp" element={<StudentApp />}></Route>
          <Route path="/topicone" element={<TopicOne />}></Route>
          <Route path="/addquiz" element={<AddQuiz />}></Route>
          <Route path="/quizhome" element={<QuizHome />}></Route>
          <Route path="/studentslist" element={<StudentsList />}></Route>
          <Route path="/tprofile" element={<Tprofile />}></Route>
          <Route path="/changepassword" element={<Changepassword />}></Route>
          <Route path="/profilechange" element={<Profilechange />}></Route>
          <Route path="/studentrecord" element={<Studentrecord />}></Route>
          <Route path="/studentprofile" element={<StudentProfile />}></Route>
          <Route path="/studentpchange" element={<StudentpChange />}></Route>
          <Route path="/studentchangepass" element={<StudentChangepass />}></Route>
          <Route path="/adminprofilechange" element={<AdminprofileChange />}></Route>
          <Route path="/adminpasswordchange" element={<AdminpasswordChange />}></Route>
          <Route path="/tstudentrecord" element={<TstudentRecord />}></Route>
          <Route path="/topictwo" element={<TopicTwo />}></Route>
          <Route path="/adminstudentrec" element={<AdminstudentRec />}></Route>
          <Route path="/zoomapp" element={<ZoomApp />}></Route>
          <Route path="/quizquestions" element={<QuizQuestions />}></Route>
        </Routes>
    </Router>
  );
};

export default App;
