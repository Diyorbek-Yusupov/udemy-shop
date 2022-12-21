import React from "react";
import Button from "../buttons/Button";
import "./cartDropdown.scss";

const CartDropdown = () => {
   return (
      <div className="cart-dropdown">
         <div className="cart-items" />
         <Button>Go to checkout</Button>
      </div>
   );
};

export default CartDropdown;
