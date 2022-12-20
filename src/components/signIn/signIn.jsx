import React from "react";

import "./signIn.scss";

import Button from "../buttons/Button";
import FormInput from "../form-input/FormInput";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         email: "",
         password: "",
      };
   }

   handleSubmit = async (event) => {
      const { email, password } = this.state;
      event.preventDefault();
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
   };

   handleChange = (event) => {
      const { value, name } = event.target;
      this.setState({ [name]: value });
   };

   render() {
      return (
         <div className="sign-in">
            <h2>I have already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
               <label>Email</label>
               <FormInput
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  value={this.state.email}
                  required
                  label={"email"}
               />
               <label>Password</label>
               <FormInput
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  value={this.state.password}
                  required
                  label={"password"}
               />
               <div className="buttons">
                  <Button type="submit">Submit form</Button>
                  <Button isGoogleSignIn onClick={signInWithGoogle}>
                     Sign in Google
                  </Button>
               </div>
            </form>
         </div>
      );
   }
}

export default SignIn;
