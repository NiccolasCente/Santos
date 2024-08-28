// Import React
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/common/ThemeProvider/ThemeContext";

// Import Section
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

//Import SubSections Times Históricos

import Santos2002_2005 from "../src/components/TimesHistóricos/Santos2002/Santos2002_2005";


// Import CSS
import "./App.css";

function App() {
  return (
    <ThemeProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="inicio" element={<Main />} />
        <Route path="/times-historicos/meninos-da-vila-2002-2005" element={<Santos2002_2005 />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
