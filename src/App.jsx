import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/common/ThemeProvider/ThemeContext";
import ScrollTop from "./components/common/ScrollTop/ScrollTop";
// Import Section
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import TimeSonhos from "./components/TimeSonhos/TimeSonhos";

//Import SubSections Times Históricos
import Santos2002_2005 from "../src/components/TimesHistóricos/Santos2002/Santos2002_2005";
import Santos2009_2013 from "../src/components/TimesHistóricos/Santos2009/Santos2009_2013";
//Import JogadoresHistóricos
import Pepe from "../src/components/JogadoresHistóricos/Pepe/Pepe";
import Coutinho from "../src/components/JogadoresHistóricos/Coutinho/Coutinho";
import Zito from "../src/components/JogadoresHistóricos/Zito/Zito";
import Edu from "../src/components/JogadoresHistóricos/Edu/Edu";

// Import CSS
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Main />} />
          //TIMES HISTÓRICOS
          <Route path="/times-historicos/meninos-da-vila-2002-2005" element={<Santos2002_2005 />} />
          <Route path="/times-historicos/meninos-da-vila-2009-2013" element={<Santos2009_2013 />} />
          //JOGADORES HISTÓRICOS
          <Route path="/jogadores-historicos/pepe" element={<Pepe />} />
          <Route path="/jogadores-historicos/coutinho" element={<Coutinho />} />
          <Route path="/jogadores-historicos/zito" element={<Zito />} />
          <Route path="/jogadores-historicos/edu" element={<Edu />} />
          //Time Sonhos
          <Route path="/time-do-sonhos" element={<TimeSonhos />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
