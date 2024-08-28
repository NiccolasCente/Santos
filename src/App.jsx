// Import React
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/common/ThemeProvider/ThemeContext";

// Import Section
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// Import CSS
import "./App.css";

function App() {
  return (
    <ThemeProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="inicio" element={<Main />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
