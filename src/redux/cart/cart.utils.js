const addItemToCart = (cartItems, cartItem) => {
   const existCardItemIndex = cartItems.findIndex(
      (cart) => cart.id === cartItem.id
   );

   if (existCardItemIndex >= 0) {
      cartItems[existCardItemIndex].quantity++;
      return [...cartItems];
   } else {
      return [...cartItems, { ...cartItem, quantity: 1 }];
   }
};

export default addItemToCart;
