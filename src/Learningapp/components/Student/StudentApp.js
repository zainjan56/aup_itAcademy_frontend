import React, {useEffect} from 'react';
import axios from 'axios';
import StudentHeader from './StudentHeader'
import StudentSidebar from "./StudentSidebar";
import StudentHome from './StudentHome';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { studentrecordActions } from "../../../store/studentrecord-slice";

const StudentApp = () => {
  const dispatch = useDispatch();
  const studentid = useSelector((state) => state.login.items.id);

  useEffect(() => {

      axios
      .get(`http://localhost:3001/studentscore/student-scores/${studentid}`)
      .then((response) => {
        // setQuizscore(response.data.quizScore);
        // setReadingScore(response.data.readingScore);
        console.log(response.data);
        dispatch(studentrecordActions.studentallrecords(response.data));
        //console.log(readingScore);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch,studentid]);
  return (
    <div>
      <StudentHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <StudentSidebar />
        <StudentHome />
    </div>
    </div>
  )
}

export default StudentApp;