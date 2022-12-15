import React from "react";
import { Route, Routes, HistoryRouterProps } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header";

import HomePage from "./pages/home/homepage.component";
import Shop from "./pages/shop/shop.component";

function App() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
         </Routes>
      </div>
   );
}

export default App;
