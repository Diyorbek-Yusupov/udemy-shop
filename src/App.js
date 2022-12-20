import React from "react";
import { Route, Routes } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";

import "./App.css";
import Header from "./components/header/header";
import SignInUp from "./components/signInUp/SignInUp";
import HomePage from "./pages/home/homepage.component";
import Shop from "./pages/shop/shop.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
   unSubscribeFromAuth = null;
   constructor() {
      super();
      this.state = {
         currentUser: null,
      };
   }
   componentDidMount() {
      auth.onAuthStateChanged(async (user) => {
         console.log(user);
         if (user) {
            console.log(user);
            const userDocRef = await createUserProfileDocument(user);
            onSnapshot(userDocRef, (snapshot) => {
               this.setState(
                  {
                     currentUser: {
                        id: snapshot.id,
                        ...snapshot.data(),
                     },
                  },
                  () => {
                     console.log(this.state);
                  }
               );
            });
         } else {
            this.setState({ currentUser: user });
         }
      });
   }

   componentWillUnmount() {
      // this.unSubscribeFromAuth();
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
