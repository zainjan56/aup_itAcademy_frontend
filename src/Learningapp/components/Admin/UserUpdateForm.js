import React, { useState } from "react";
import axios from "axios";
import "./UserUpdate.css";

const UserUpdateForm = ({ user, onComplete, onCancel }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/api/user/users/${user._id}`, formData)
      .then((response) => {
        onComplete();
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleUpdateSubmit}>
              <div className="form-group mt-3">
                <h2>Edit User</h2>
                <div className="form-group mt-3">
                  <label className="courseAddLabel">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-control mt-1"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="courseAddLabel">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="form-control mt-1"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="courseAddLabel">Role</label>
                  <input
                    type="text"
                    name="role"
                    required
                    className="form-control mt-1"
                    value={formData.role}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="gap-2 mt-3 userupdateformbtns">
              <button type="submit" id="userupdatesubmitbtn">Update</button>
              <button type="button" onClick={onCancel} id="userupdatecancel">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdateForm;
