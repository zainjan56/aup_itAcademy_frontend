import React, { useState, useEffect } from "react";
import axios from "axios";
import TeacherHeader from "./TeacherHeader";
import TeacherSidebar from "./TeacherSidebar";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const StudentsList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Make a GET request to fetch users data from your backend API
        axios
          .get("http://localhost:3001/api/user/users")
          .then((response) => {
            setUsers(response.data);
          })
          .catch((error) => {
            console.error("Error fetching users:", error);
          });
      }, []);

      const studentUsers = users.filter((user) => user.role === "Student");
  return (
    <div>
        <TeacherHeader />
        <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <TeacherSidebar />
        <div className="container" style={{ overflowY: "auto"}}>
          <div className="row">
            <div className="col-sm-12"><br></br>
                <h5 className="alluserlist">Student List</h5>
                {studentUsers.length === 0 ? (
                  <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>
                ) : (
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentUsers.map((users, index) => (
                        <tr key={users._id}>
                          <td>{index + 1}</td>
                          <td>{users.name}</td>
                          <td>{users.email}</td>
                          <td>{users.role}</td>
                          <td>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default StudentsList;