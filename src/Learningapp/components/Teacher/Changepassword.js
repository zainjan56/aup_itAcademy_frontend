import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import TeacherHeader from "./TeacherHeader";
import TeacherSidebar from "./TeacherSidebar";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { Link } from "react-router-dom";

const Changepassword = () => {
  const loginData = useSelector((state) => state.login);
  const id = loginData.items.id;
  console.log(id);

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangePassword = async () => {
    // Check if the required fields are empty
    if (!formData.currentPassword || !formData.newPassword) {
        NotificationManager.warning("Current Password and New Password are required");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:3001/api/user/change-password/${id}`,
        formData
      );
      console.log(response.data);
      // Handle success and show a confirmation message
      NotificationManager.success("Password change successfully!");
      // Clear the input fields after a successful password change
      setFormData({
        currentPassword: "",
        newPassword: "",
      });
    } catch (error) {
      console.error(error);
      // Handle error and show an error message
      NotificationManager.error("Password changed failded!");
    }
}

  return (
    <div>
      <TeacherHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <TeacherSidebar />
        <div className="container" style={{ overflowY: "auto" }}>
          <br />
          <div className="row">
            <div className="col-sm-12">
              <div className="Auth-form-container">
                <form>
                  <div className="form-group mt-3">
                    <h1>Edit Profile</h1>
                  </div>
                  <div className="form-group mt-3">
                    <label>Current Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>New Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group mt-3">
                  <Link to='/tprofile'><button className="btn btn-warning">Back</button></Link>
                    <button type="button" className="btn btn-primary ms-1" onClick={handleChangePassword}>
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Changepassword;
