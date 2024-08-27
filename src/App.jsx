// Import React
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Section
import Header from "./components/Header/Header";

// Import CSS
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/*<Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
         */}
      </Routes>
    </Router>
  );
}

export default App;
