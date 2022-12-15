import React from "react";
import { Route, Routes, HistoryRouterProps } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home/homepage.component";
import Shop from "./pages/shop/shop.component";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
         </Routes>
      </div>
   );
}

export default App;
