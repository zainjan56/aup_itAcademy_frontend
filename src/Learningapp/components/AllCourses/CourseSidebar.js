import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";
//import "./CourseSidebar.css";

const CourseSidebar = () => {
  const topicName = useSelector((state) => state.cart.items.topics);
  const studentRecords = useSelector((state) => state.studentrecord.items);

  // Function to get score by courseCode
  const getScoreByCourseCode = (courseCode) => {
    const record = studentRecords.find((record) => record.courseCode === courseCode);
    return record ? record.score : 0;
  };

  const cplusScore = getScoreByCourseCode("cplus22");
  const reactScore = getScoreByCourseCode("react11");

  if (!topicName) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <NavLink
            to="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Home
          </NavLink>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <b>Topics</b>
              </CDBSidebarMenuItem>
            </NavLink>
              <CDBSidebarMenuItem>
                <b>React JS</b>
                <ProgressBar now={reactScore} label={`${reactScore}%`} />
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem>
                <b>C++</b>
                <ProgressBar now={cplusScore} label={`${cplusScore}%`} />
              </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default CourseSidebar;
