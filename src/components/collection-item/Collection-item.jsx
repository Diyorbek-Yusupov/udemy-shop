import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import Button from "../buttons/Button";

import "./collection-item.scss";

function CollectionItem({ item, addItem }) {
   const { id, name, price, imageUrl } = item;
   return (
      <div className="collection-item">
         <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className="image"
         ></div>
         <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
         </div>
         <Button
            onClick={() => {
               addItem(item);
            }}
            className="custom-button"
            inverted
         >
            Add to cart
         </Button>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => ({
   addItem: (cartItem) => dispatch(addItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
