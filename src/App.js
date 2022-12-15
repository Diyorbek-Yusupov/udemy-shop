import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header";
import SignInUp from "./components/signInUp/SignInUp";
import HomePage from "./pages/home/homepage.component";
import Shop from "./pages/shop/shop.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
   unSubscribeFromAuth = null;
   constructor() {
      super();
      this.state = {
         currentUser: null,
      };
   }
   componentDidMount() {
      auth.onAuthStateChanged((user) => {
         this.setState({ currentUser: user }, () => {
            console.log(user);
         });
      });
   }

   componentWillUnmount() {
      this.unSubscribeFromAuth();
   }
   render() {
      return (
         <div className="App">
            <Header currentUser={this.state.currentUser} />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/shop" element={<Shop />} />
               <Route path="/signin" element={<SignInUp />} />
            </Routes>
         </div>
      );
   }
}

export default App;
