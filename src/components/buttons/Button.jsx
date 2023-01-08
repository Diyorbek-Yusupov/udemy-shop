import React from "react";

import { CustomButtomContainer } from "./button.styles";

export default function Button(props) {
   return (
      <CustomButtomContainer {...props}>{props.children}</CustomButtomContainer>
   );
}
