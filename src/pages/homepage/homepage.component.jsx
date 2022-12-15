import React from "react";
import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

import "./homepage.scss";

const HomePage = () => (
   <div className="homepage">
      <Directory />
      <Outlet />
   </div>
);

export default HomePage;
