import React from "react";

import "./collection-preview.scss";

import CollectionItem from "../collection-item/Collection-item";

export default function CollectionPreview({ title, items }) {
   return (
      <div className="collection-preview">
         <h1 className="title">{title.toUpperCase()}</h1>
         <div className="preview">
            {console.log(items)}
            {items.map(({ id, ...otherCollectionProps }) => (
               <CollectionItem key={id} {...otherCollectionProps} />
            ))}
         </div>
      </div>
   );
}
