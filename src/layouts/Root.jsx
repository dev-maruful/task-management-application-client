import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto pt-10">
        <Outlet></Outlet>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;
