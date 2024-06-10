import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from "cdbreact";
import { NavLink } from "react-router-dom";
//import "./AdminSidebar.css";

const TeacherSidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#2B3035">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <NavLink
            exact to="/home"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
           Home
          </NavLink>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/teacherapp" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tcourselist" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Course Lists</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/taddcourses" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book-open">Add Course</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/studentslist" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">
                Students List
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addquiz" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sticky-note">
                Add Quizz
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/logout" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sign-out-alt">
                Logout
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px"
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default TeacherSidebar;
