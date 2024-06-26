import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import logo from "../images/web_logo1.png";
import { FaUserTie } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import "./TeacherHeader.css";

const TeacherHeader = () => {
  const teacherName = localStorage.getItem("name");
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
    >
      <img
        src={logo}
        alt="website logo"
        style={{ width: "5%", height: "5%" }}
      />
      <Container>
        <Navbar.Brand>
          <b>Online-Education</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand>Welcome To Teacher Portion</Navbar.Brand>
          </Nav>
          <Nav>
            <Dropdown className="d-inline mx-2" autoClose="inside">
              <Dropdown.Toggle id="dropdown-autoclose-inside" variant="secondary">
                <Navbar.Brand>{teacherName}</Navbar.Brand>
                <i>
                  <FaUserTie size={30} color="PeriwinkleBlue" />
                </i>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: "100%" }}>
                <Dropdown.Item><Link exact to="/tprofile" className="profile-link">Profile</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TeacherHeader;
