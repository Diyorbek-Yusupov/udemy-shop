import React from "react";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { selectArrayShopData } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/Collection-preview";

import "./collectionsOverview.scss";

const CollectionsOverview = ({ collections }) => {
   console.log(collections);
   return (
      <div className="collections-overview">
         {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
         ))}
      </div>
   );
};

export default CollectionsOverview;
