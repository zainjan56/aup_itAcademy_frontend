import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import logo from "./images/web_logo1.png";
import "./Header.css";

const Header = () => {
  const userRole = localStorage.getItem("role");
  const hasToken = localStorage.getItem("token");
  const isLoggedIn = !!userRole;
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
      <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{' '}
            <b>IT Acedemay</b>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/home">
              <b>Home</b>
            </Link>
            <Link className="nav-link" to="/hcourses">
              <b>Courses</b>
            </Link>
            <Link className="nav-link" to="/about">
              <b>About Us</b>
            </Link>
            <Link className="nav-link" to="/register">
              <b>Register</b>
            </Link>
            {isLoggedIn ? (
              userRole === "Student" ? (
                <Link className="nav-link" to="/studentapp">
                  <b>Student Home</b>
                </Link>
              ) : userRole === "Admin" ? (
                <Link className="nav-link" to="/adminapp">
                  <b>Admin Home</b>
                </Link>
              ) : userRole === "Teacher" ? (
                <Link className="nav-link" to="/teacherapp">
                  <b>Teacher App</b>
                </Link>
              ) : (
                <span className="nav-link disabled">
                  <b>Enrolled Courses</b>
                </span>
              )
            ) : (
              <span className="nav-link disabled">
                <b>Enrolled Pleased</b>
              </span>
              // Render something else when the user is not logged in
              // For example, you can render a login link or message
            )}
          </Nav>
          <Nav>
            {hasToken ? (
              <Link className="nav-link" to="/logout">
                <b>Logout</b>
              </Link>
            ) : (
              <Link className="nav-link" to="/login">
                <b>Login</b>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
