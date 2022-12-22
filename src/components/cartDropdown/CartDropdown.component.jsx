import React from "react";
import CartItem from "../cartItem/CartItem.component";
import Button from "../buttons/Button";
import "./cartDropdown.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

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

const matStateToProps = (state) => ({
   cartItems: selectCartItems(state),
});

export default connect(matStateToProps)(CartDropdown);
