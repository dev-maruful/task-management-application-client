import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto pt-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
