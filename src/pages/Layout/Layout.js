import React from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <div className="maincontainer">
        <div className="layoutnav">
          <Navbar />
        </div>
        <Outlet />
      </div>
    </>
  );
}
