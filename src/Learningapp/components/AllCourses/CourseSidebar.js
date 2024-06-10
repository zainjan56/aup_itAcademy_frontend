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
  const quizScore = useSelector((state) => (state?.studentrecord?.items ? state?.studentrecord?.items?.quizScore : 0));
  
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
                <b>Quiz Score</b>
                <ProgressBar now={quizScore} label={`${quizScore}%`} />
              </CDBSidebarMenuItem>
            {/* <NavLink exact to="/quizhome" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <b>Quiz</b>
                <ProgressBar now={quizScore} label={`${quizScore}%`} />
              </CDBSidebarMenuItem>
            </NavLink> */}
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