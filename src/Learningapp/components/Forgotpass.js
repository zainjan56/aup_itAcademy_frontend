import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
//import { useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import "./Login.css";
//import { Link } from "react-router-dom";
import logo from "./images/login2.png";
import StudentHome from "./Student/StudentHome";

const Forgotpass = () => {
  //const dispatch = useDispatch();
  const [email, setEmail] = useState();
  //const [password, setPassword] = useState();

  //const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/user/forgot-password", {
        email: email,
      })
      .then((res) => {
        console.log(res);
        NotificationManager.success(`Link is send to your email!`,"",3000)
      })
      .catch((err) => {
        NotificationManager.error(`Password or Email is Incorrect!`, "", 3000);
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
            <h2 className="loginHeading">Forgot Password</h2>
            <form onSubmit={(e) => login(e)}>
              <input
                type="email"
                required
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="inputOne"
              />
              <button
                type="submit"
                className="btn btn-primary"
                id="loginButton"
              >
                Send Email
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

export default Forgotpass;