import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "./images/login2.png";
import StudentHome from "./Student/StudentHome";
import { useDispatch } from 'react-redux';
import { loginActions } from "../../store/login-slice";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.headers.token);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("name", res.data.name);
        dispatch(loginActions.addDataToLogin(res.data));
        NotificationManager.success(`Logged in successfully!`,"",3000)
        // navigate("/home")
        if (res.data.role === "Student") {
          navigate("/studentapp");
        } else if (res.data.role === "Teacher") {
          navigate("/teacherapp");
        }
         else if (res.data.role === "Admin") {
          navigate("/adminapp");
        }
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
        <div className="col-sm-6 loginLeft">
          <div className="loginTitle">
            <h1 className="loginTitleOne">The best platform</h1>
            <h1 className="loginTitleTwo">to polish your skills!</h1>
          </div>
          <div className="welcomeParagraph">
            <p className="welcomeMessage">
              Welcome to our Online Learning Platform! Embrace the joy of
              learning, seize every opportunity to grow, and enjoy the
              transformative power of education. We're thrilled to have you on
              board and can't wait to witness your accomplishments. Happy
              learning!
            </p>
          </div>
        </div>
        <div className="col-sm-6 loginRight">
          <div className="loginFormArea">
            <img src={logo} alt="loginLogo" className="logo" />
            <h1 className="loginHeading">LOGIN</h1>
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
              <input
                type="password"
                required
                className="form-control mt-1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="inputTwo"
              />
              <Link className="nav-link" to="/forgotpass" id="forgotPass">
                Forgot Password?
              </Link>
              <button
                type="submit"
                className="btn btn-primary"
                id="loginButton"
              >
                LOGIN
              </button>
              <p className="noAccount">Don't have an account?</p>
              <Link className="nav-link" to="/register" id="signUp">
                <b>Sign Up</b>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Login;
