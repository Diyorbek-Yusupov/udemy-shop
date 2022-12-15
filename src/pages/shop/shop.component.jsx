import React from "react";

import shopData from "./081 shop.data";

import CollectionPreview from "../../components/collection-preview/Collection-preview";

class Shop extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         collections: shopData,
      };

      console.log(this.state.collections);
   }

   render() {
      const { collections } = this.state;
      return (
         <div className="shop-page">
            {collections.map(({ id, ...otherCollectionProps }) => (
               <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
         </div>
      );
   }
}

export default Shop;
