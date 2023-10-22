import React from "react";
import MenuPage from "./pages/Menu/MenuPage";
import LandingPage from "./pages/Landing/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
