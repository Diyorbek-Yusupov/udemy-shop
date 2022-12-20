import React from "react";
import SignIn from "../signIn/signIn";
import SignUp from "../signup/SignUp";
import "./signInUp.scss";

export default function SignInUp() {
   return (
      <div className="sign-in-and-sign-up">
         <SignIn />
         <SignUp />
      </div>
   );
}
