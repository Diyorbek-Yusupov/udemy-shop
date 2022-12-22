import React from "react";
import { connect } from "react-redux";

import {
   addItem,
   removeCartItem,
   decreaseQuantityOfItem,
} from "../../redux/cart/cart.actions";
import "./checkoutItem.scss";

const CheckoutItem = ({
   cartItem,
   removeCartItem,
   addItem,
   decreaseQuantityOfItem,
}) => {
   const { name, imageUrl, price, quantity, id } = cartItem;
   return (
      <div className="checkout-item">
         <div className="image-container">
            <img src={imageUrl} alt="item" />
         </div>
         <span className="name">{name}</span>
         <span className="quantity">
            <div
               onClick={() => {
                  decreaseQuantityOfItem(cartItem);
               }}
               className="arrow"
            >
               &#10094;
            </div>
            <span className="value">{quantity}</span>
            <div
               onClick={() => {
                  addItem(cartItem);
               }}
               className="arrow"
            >
               &#10095;
            </div>
         </span>
         <span className="price">${price}</span>
         <div
            onClick={() => {
               removeCartItem(id);
            }}
            className="remove-button"
         >
            &#10005;
         </div>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => ({
   removeCartItem: (itemId) => dispatch(removeCartItem(itemId)),
   addItem: (item) => dispatch(addItem(item)),
   decreaseQuantityOfItem: (item) => dispatch(decreaseQuantityOfItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
