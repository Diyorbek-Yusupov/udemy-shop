import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.scss";

class Directory extends React.Component {
   constructor() {
      super();

      this.state = {
         sections: [
            {
               title: "hats",
               imageUrl: "/images/hats.png",
               id: 1,
               linkUrl: "hats",
            },
            {
               title: "jackets",
               imageUrl: "/images/jackets.png",
               id: 2,
            },
            {
               title: "sneakers",
               imageUrl: "/images/sneakers.png",
               id: 3,
            },
            {
               title: "mens",
               imageUrl: "/images/men.png",
               size: "large",
               id: 5,
            },
         ],
      };
   }

   render() {
      return (
         <div className="directory-menu">
            {this.state.sections.map(({ id, ...otherProps }) => (
               <MenuItem key={id} {...otherProps} />
            ))}
         </div>
      );
   }
}

export default Directory;
