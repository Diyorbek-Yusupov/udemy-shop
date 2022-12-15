import React from "react";

import "./collection-item.scss";

export default function CollectionItem({ id, name, price, imageUrl }) {
   console.log(name, price, imageUrl);
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
      </div>
   );
}
