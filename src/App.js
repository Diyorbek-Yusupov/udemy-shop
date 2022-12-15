import React from "react";
import { Route, Routes, HistoryRouterProps } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const Hats = () => {
   return <h1>Hats page</h1>;
};

function App() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hats" element={<Hats />} />
         </Routes>
      </div>
   );
}

export default App;
