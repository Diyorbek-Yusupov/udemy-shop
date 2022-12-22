import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";

import "./App.css";
import Header from "./components/header/header";
import SignInUp from "./components/signInUp/SignInUp";
import HomePage from "./pages/home/homepage.component";
import Shop from "./pages/shop/shop.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import Checkout from "./pages/checkout/Checkout";

class App extends React.Component {
   componentDidMount() {
      const { setCurrentUser } = this.props;
      auth.onAuthStateChanged(async (user) => {
         if (user) {
            const userDocRef = await createUserProfileDocument(user);
            onSnapshot(userDocRef, (snapshot) => {
               setCurrentUser({
                  id: snapshot.id,
                  ...snapshot.data(),
               });
            });
         } else {
            setCurrentUser(user);
         }
      });
   }

   componentWillUnmount() {
      // this.unSubscribeFromAuth();
   }
   render() {
      console.log("app render");
      return (
         <div className="App">
            <Header />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/shop" element={<Shop />} />
               <Route path="/checkout" element={<Checkout />} />
               <Route
                  path="/signin"
                  element={
                     this.props.currentUser ? <Navigate to="/" /> : <SignInUp />
                  }
               />
            </Routes>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
