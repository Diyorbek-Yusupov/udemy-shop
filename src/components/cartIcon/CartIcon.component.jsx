import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./cartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
   console.log("cartIcon rendered");
   return (
      <div className="cart-icon" onClick={toggleCartHidden}>
         <ShoppingIcon className="shopping-icon" />
         <span className="item-count">{itemCount}</span>
      </div>
   );
};

// const mapStateToProps = state => {
//    return {
//       hidden: state
//    }
// }

const mapStateToProps = (state) => ({
   itemCount: selectCartItemsCount(state),
});

const mapDispatchProps = (dispatch) => ({
   toggleCartHidden: () => {
      dispatch(toggleCartHidden());
   },
});

export default connect(mapStateToProps, mapDispatchProps)(CartIcon);
