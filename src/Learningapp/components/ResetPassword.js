import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
//import { useNavigate } from "react-router-dom";
import { Routes, Route, useParams } from 'react-router-dom';
import "./Login.css";
//import { Link } from "react-router-dom";
import logo from "./images/login2.png";
import StudentHome from "./Student/StudentHome";

const ResetPassword = () => {
  //const dispatch = useDispatch();
  const [password, setPassword] = useState();
  //const [password, setPassword] = useState();

  //const navigate = useNavigate();

  const {id, token} = useParams();

  const login = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/api/user/reset-password/${id}/${token}`, {
        password: password,
      })
      .then((res) => {
        console.log(res);
        NotificationManager.success(`Password Reset successfully!`,"",3000)
      })
      .catch((err) => {
        NotificationManager.error(`Password Not Reset Successfully!`, "", 3000);
      });
  };

  return (
    <div>
    <Header /><br />
    <div className="container login">
      <Routes>
      <Route path="/studenthome" element={<StudentHome />}></Route>
      </Routes>
      <div className="row">
        <div className="col-sm-12">
          <div className="loginFormArea">
            <img src={logo} alt="loginLogo" className="logo" />
            <h2 className="loginHeading">New Password</h2>
            <form onSubmit={(e) => login(e)}>
              <input
                type="password"
                required
                className="form-control mt-1"
                placeholder="Enter New Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="inputOne"
              />
              <button
                type="submit"
                className="btn btn-primary"
                id="loginButton"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ResetPassword;