import React from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminHome from "./AdminHome";

const AdminApp = () => {
  return (
    <div>
      <AdminHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <AdminSidebar />
        <AdminHome />
    </div>
    </div>
  );
};

export default AdminApp;
