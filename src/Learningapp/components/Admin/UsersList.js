import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import UserUpdateForm from "./UserUpdateForm";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./UsersList.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updateTrigger, setUpdateTrigger] = useState(false);

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
  }, [updateTrigger]);

  const handleDeleteClick = (userId) => {
    // Show a confirmation dialog to confirm deletion
    const confirmDeletion = window.confirm(
      `Are you sure you want to delete this user?`
    );

    if (confirmDeletion) {
      // Make a DELETE request to delete the user's record on the backend
      axios
        .delete(`http://localhost:3001/api/user/users/${userId}`)
        .then(() => {
          // Update the local state by removing the deleted user
          const updatedUsers = users.filter((user) => user._id !== userId);
          setUsers(updatedUsers);
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };

  const handleUpdateClick = (user) => {
    // Set the selected user and enable editing
    setSelectedUser(user);
    setIsEditing(true);
  };

  const handleUpdateComplete = () => {
    // Clear selected user and disable editing after update
    setSelectedUser(null);
    setIsEditing(false);
    // Optionally, you can re-fetch the users to refresh the list
    setUpdateTrigger(!updateTrigger);
  };

  const handleCancelClick = () => {
    // Clear selected user and disable editing, without making any changes
    setSelectedUser(null);
    setIsEditing(false);
  };

  return (
    <div>
      <AdminHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <AdminSidebar />
        <div className="container" style={{ overflowY: "auto" }}>
          <div className="row">
            <div className="col-sm-12">
              <br></br>
              <h5 className="alluserlist">All Users List</h5>
              {users.length === 0 ? (
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
                      <th scope="col">Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((users, index) => (
                      <tr key={users._id}>
                        <td>{index + 1}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.role}</td>
                        <td>
                          <div className="userslistbtn">
                            <button
                              onClick={() => handleUpdateClick(users)}
                              id="userlistupdatebtn"
                            >
                              Update
                            </button>
                            <button
                              onClick={() => handleDeleteClick(users._id)}
                              id="userlistdeletebtn"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          {isEditing && selectedUser && (
            <UserUpdateForm
              user={selectedUser}
              onComplete={handleUpdateComplete}
              onCancel={handleCancelClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
