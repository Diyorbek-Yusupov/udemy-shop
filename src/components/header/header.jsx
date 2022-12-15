import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.scss";

const Header = () => {
   return (
      <div className="header">
         <Link className="logo-container" to={"/"}>
            <Logo className="logo" />
         </Link>
         <div className="options">
            <Link className="otion" to={"/shop"}>
               SHOP
            </Link>
            <Link className="otion" to={"/contact"}>
               CONTACT
            </Link>
         </div>
      </div>
   );
};

export default Header;
