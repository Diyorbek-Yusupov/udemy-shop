import React from "react";
import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

import "./homepage.scss";
import { HomepageContainer } from "./homepage.styles";

const HomePage = () => (
   <HomepageContainer>
      <Directory />
   </HomepageContainer>
);

export default HomePage;
