import React from "react";
import CartItem from "../cartItem/CartItem.component";
import Button from "../buttons/Button";
import "./cartDropdown.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, dispatch }) => {
   const navigate = useNavigate();
   return (
      <div className="cart-dropdown">
         <div className="cart-items">
            {cartItems.length ? (
               cartItems.map((cartItem) => (
                  <CartItem key={cartItem.id} item={cartItem} />
               ))
            ) : (
               <span className="empty-message">Your cart is empty</span>
            )}
         </div>
         <Button
            onClick={() => {
               navigate("/checkout");
               dispatch(toggleCartHidden());
            }}
         >
            Go to checkout
         </Button>
      </div>
   );
};

const matStateToProps = (state) => ({
   cartItems: selectCartItems(state),
});

export default connect(matStateToProps)(CartDropdown);
