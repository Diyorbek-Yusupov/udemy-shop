import React from "react";
import "./button.scss";

export default function Button({
   children,
   inverted,
   isGoogleSignIn,
   ...otherProps
}) {
   return (
      <button
         className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
            inverted ? "inverted" : ""
         } custom-button`}
         {...otherProps}
      >
         {children}
      </button>
   );
}
