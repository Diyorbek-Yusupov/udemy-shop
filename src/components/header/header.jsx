import React from "react";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import "./header.scss";
import CartIcon from "../cartIcon/CartIcon.component";
import CartDropdown from "../cartDropdown/CartDropdown.component";

import {
   HeaderContainer,
   LogoContainer,
   OptionsContainer,
   OptionDiv,
   OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
   return (
      <HeaderContainer>
         <LogoContainer to={"/"}>
            <Logo className="logo" />
         </LogoContainer>
         <OptionsContainer>
            <OptionLink to={"/shop"}>SHOP</OptionLink>
            <OptionLink to={"/contact"}>CONTACT</OptionLink>
            {currentUser ? (
               <OptionLink
                  as="div"
                  onClick={() => {
                     auth.signOut();
                  }}
               >
                  SIGN OUT
               </OptionLink>
            ) : (
               <OptionLink to={"/signin"}>SIGN IN</OptionLink>
            )}
            <CartIcon />
         </OptionsContainer>
         {hidden ? null : <CartDropdown />}
      </HeaderContainer>
   );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
   currentUser,
   hidden,
});

export default connect(mapStateToProps)(Header);
