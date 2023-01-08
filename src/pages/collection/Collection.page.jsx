import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CollectionItem from "../../components/collection-item/Collection-item";
import WithSpinner from "../../components/withSpinner/WithSpinner";
import "./collection.scss";

const Category = ({ collection }) => {
   console.log(collection);
   return (
      <div className="collection-page">
         <h2 className="title">{collection.title}</h2>
         <div className="items">
            {collection.items.map((item) => (
               <CollectionItem key={item.id} item={item} />
            ))}
         </div>
      </div>
   );
};

export default Category;
