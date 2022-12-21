import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import "./header.scss";

const Header = ({ currentUser }) => {
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
            {currentUser ? (
               <div
                  onClick={() => {
                     auth.signOut();
                  }}
                  className="option"
               >
                  SIGN OUT
               </div>
            ) : (
               <Link to={"/signin"}>SIGN IN</Link>
            )}
         </div>
      </div>
   );
};

const mapStateToProps = (state) => ({
   currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
