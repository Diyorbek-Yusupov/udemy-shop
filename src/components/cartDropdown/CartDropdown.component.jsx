import React from "react";
import CartItem from "../cartItem/CartItem.component";
import Button from "../buttons/Button";
import "./cartDropdown.scss";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
   return (
      <div className="cart-dropdown">
         <div className="cart-items">
            {cartItems.map((cartItem) => (
               <CartItem key={cartItem.id} item={cartItem} />
            ))}
         </div>
         <Button>Go to checkout</Button>
      </div>
   );
};

const matStateToProps = ({ cart: { cartItems } }) => ({
   cartItems,
});

export default connect(matStateToProps)(CartDropdown);
