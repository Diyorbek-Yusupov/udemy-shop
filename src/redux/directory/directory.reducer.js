const INITIAL_STATE = {
   sections: [
      {
         title: "hats",
         imageUrl: "/images/hats.png",
         id: 1,
         linkUrl: "shop/hats",
      },
      {
         title: "jackets",
         imageUrl: "/images/jackets.png",
         id: 2,
         linkUrl: "shop/jackets",
      },
      {
         title: "sneakers",
         imageUrl: "/images/sneakers.png",
         id: 3,
         linkUrl: "shop/sneakers",
      },
      {
         title: "mens",
         imageUrl: "/images/men.png",
         size: "large",
         id: 5,
         linkUrl: "shop/mens",
      },
   ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
   switch (action.state) {
      default:
         return state;
   }
};

export default directoryReducer;
