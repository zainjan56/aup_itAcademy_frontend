import React, { useState, useEffect } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import axios from "axios";
import "./AdminHome.css";

const AdminHome = () => {
  const [adminCount, setAdminCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  
  const [admins, setAdmins] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/user/userCounts")
      .then((response) => response.json())
      .then((data) => {
        setAdminCount(data.adminCount);
        setTeacherCount(data.teacherCount);
        setStudentCount(data.studentCount);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Make a GET request to fetch users data from your backend API
    axios.get("http://localhost:3001/api/user/users")
      .then((response) => {
        const users = response.data;
        const adminUsers = users.filter((user) => user.role === "Admin");
        const teacherUsers = users.filter((user) => user.role === "Teacher");
        const studentUsers = users.filter((user) => user.role === "Student");

        setAdmins(adminUsers);
        setTeachers(teacherUsers);
        setStudents(studentUsers);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="container adminHome" style={{ overflowY: "auto" }}>
        <div className="row">
          <div className="col-sm-12">
            <br></br>
            <div className="card" id="adminviewcard">
              <h3 className="adminviewcolor">Overview</h3>
              <p className="adminviewcolor">
                Here is the overview of our Online Learning Platform.
              </p>
              <div className="usergroups">
                <h6 className="adminviewcolor">
                  <i>
                    <MdAdminPanelSettings size={25} color="white" />
                  </i>
                  Admins: {adminCount}
                </h6>
                <h6 className="adminviewcolor">
                  <i>
                    <GiTeacher size={25} color="white" />
                  </i>
                  Teachers: {teacherCount}
                </h6>
                <h6 className="adminviewcolor">
                  <i>
                    <PiStudentBold size={25} color="white" />
                  </i>
                  Students: {studentCount}
                </h6>
              </div>
            </div>
            <br></br>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card" id="usercardlistOne">
              <h5 className="adminuserslist">Admins</h5>
              <ul className="diffusers">
            {admins.map((admin, index) => (
              <li key={index}>
                <strong>{admin.name}</strong>
              </li>
            ))}
          </ul>
            </div>
          </div>
          <div className="col-sm-4 admindata">
            <div className="card" id="usercardlistTwo">
              <h5 className="adminuserslist">Teachers</h5>
              <ul className="diffusers">
            {teachers.map((teacher, index) => (
              <li key={index}>
                <strong>{teacher.name}</strong>
              </li>
            ))}
          </ul>
            </div>
          </div>
          <div className="col-sm-4 admindata">
            <div className="card" id="usercardlistThree">
              <h5 className="adminuserslist">Students</h5>
              <ul className="diffusers">
            {students.map((student, index) => (
              <li key={index}>
                <strong>{student.name}</strong>
              </li>
            ))}
          </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AdminHome;