import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Register.css";
import regLogo from "./images/reg2.png";

const Register = () => {
  //const [user, setUser] = useState();
  const [role, setRole] = useState();
  const [secretkey, setSecretkey] = useState();
  const [fullname, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/user/register", {
        name: fullname,
        email: email,
        password: password,
        role: role,
        secretId: secretkey,
      })
      .then((res) => {
        NotificationManager.success(
          `User ${res.data.savedUser.name} has been successfully registered.`,
          "",
          3000
        );

        navigate("/login");
      })
      .catch((err) => {
        NotificationManager.error(err.response.data, "", 3000);
      });
  };
  return (
    <div>
      <Header />
      <br />
      <div className="container register">
        <div className="row">
          <div className="col-sm-5 myregcol">
            <div className="leftSide">
              <h1 className="leftTitle">Register, Here!</h1>
            </div>
            <div className="leftDescription">
              <p>
                Before login, you should register youself and create your oun
                account!
              </p>
            </div>
            <br></br>
            <div className="leftButton">
              <p>If you have your account, please login here!</p>
              <Link to="/login">
                <button>Login Here!</button>
              </Link>
            </div>
          </div>
          <div className="col-sm-7 colTwo">
            <div className="formArea">
              <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={(e) => register(e)}>
                  <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Registration Form</h3>
                    <img
                      src={regLogo}
                      alt="regLogo"
                      className="regLogo"
                      style={{ width: "20%", height: "20%" }}
                    />
                    <div className="form-group mt-3" id="radioBtn">
                      <div class="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          onChange={(e) => setRole(e.target.value)}
                          value="Student"
                          checked={role === "Student"}
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          Student
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          required
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          onChange={(e) => setRole(e.target.value)}
                          value="Teacher"
                          checked={role === "Teacher"}
                        />
                        <label className="form-check-label" for="inlineRadio2">
                          Teacher
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          required
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                          onChange={(e) => setRole(e.target.value)}
                          value="Admin"
                          checked={role === "Admin"}
                        />
                        <label className="form-check-label" for="inlineRadio3">
                          Admin
                        </label>
                      </div>
                    </div>
                    {(role === "Teacher" || role === "Admin") && (
                      <div className="form-group mt-3">
                        <label className="regLabel">ID Number</label>
                        <input
                          type="text"
                          required
                          className="form-control mt-1"
                          placeholder="Secret ID No"
                          onChange={(e) => setSecretkey(e.target.value)}
                          value={secretkey}
                          id="secretkeyField"
                        />
                      </div>
                    )}
                    <div className="form-group mt-3">
                      <label className="regLabel">Full Name</label>
                      <input
                        type="text"
                        required
                        className="form-control mt-1"
                        placeholder="Full Name"
                        onChange={(e) => setName(e.target.value)}
                        value={fullname}
                        id="fullName"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label className="regLabel">Email Address</label>
                      <input
                        type="email"
                        required
                        className="form-control mt-1"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        id="email"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label className="regLabel">Password</label>
                      <input
                        type="password"
                        required
                        className="form-control mt-1"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        id="password"
                      />
                    </div>
                    <div className="gap-2 mt-3">
                      <button type="submit" className="registerBtn">
                        Submit
                      </button>
                    </div>
                    <br></br>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
