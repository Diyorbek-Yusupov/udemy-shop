import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./withSpinner.style";

const WithSpinner = (ChildComponent) => {
   return ({ isLoading, ...props }) => {
      return isLoading ? (
         <SpinnerOverlay>
            <SpinnerContainer />
         </SpinnerOverlay>
      ) : (
         <ChildComponent {...props} />
      );
   };
};
export default WithSpinner;
