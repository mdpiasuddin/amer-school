import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./menubar/Menu";

const Main = () => {
  return (
    <div>
      <Menu></Menu>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
