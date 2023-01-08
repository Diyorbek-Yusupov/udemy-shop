import React from "react";
import CartItem from "../cartItem/CartItem.component";
import Button from "../buttons/Button";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
   CartDropdownContainer,
   CartItems,
   EmptyMessage,
} from "./cartDropdown.styles";

const CartDropdown = ({ cartItems, dispatch }) => {
   const navigate = useNavigate();
   return (
      <CartDropdownContainer>
         <CartItems>
            {cartItems.length ? (
               cartItems.map((cartItem) => (
                  <CartItem key={cartItem.id} item={cartItem} />
               ))
            ) : (
               <EmptyMessage>Your cart is empty</EmptyMessage>
            )}
         </CartItems>
         <Button
            onClick={() => {
               navigate("/checkout");
               dispatch(toggleCartHidden());
            }}
         >
            Go to checkout
         </Button>
      </CartDropdownContainer>
   );
};

const matStateToProps = (state) => ({
   cartItems: selectCartItems(state),
});

export default connect(matStateToProps)(CartDropdown);
