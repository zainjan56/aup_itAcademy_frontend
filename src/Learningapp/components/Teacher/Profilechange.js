import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import TeacherHeader from "./TeacherHeader";
import TeacherSidebar from "./TeacherSidebar";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import {Link} from "react-router-dom";

const Profilechange = () => {
  const loginData = useSelector((state) => state.login);
  //console.log(loginData.items.id);
  const id = loginData.items.id;
  // console.log(id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // Add other fields
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfileUpdate = async () => {
    // Check if the "name" and "email" fields are empty
    if (!formData.name || !formData.email) {
      NotificationManager.error("Name and Email are required");
      return; // Exit the function to prevent saving data
    }
  
    try {
      await axios.put(
        `http://localhost:3001/api/user/update/${id}`,
        formData
      );
      //console.log(response.data);
      NotificationManager.success("Records Save Successfully");
      setFormData({
        name: "",
        email: "",
      });
    } catch (error) {
      NotificationManager.error("Records not Save Successfully");
    }
  };
  
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
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <Link to='/tprofile'><button className="btn btn-warning">Back</button></Link>
                      <button type="button" onClick={handleProfileUpdate} className="btn btn-primary ms-1">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profilechange;
