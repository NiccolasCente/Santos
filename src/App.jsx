import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/common/ThemeProvider/ThemeContext";
import ScrollTop from "./components/common/ScrollTop/ScrollTop";
// Import Section
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import TimeSonhos from "./components/TimeSonhos/TimeSonhos";
import Contato from "./components/Contato/Contato";
//Import SubSections Times Históricos
import Santos2002_2005 from "../src/components/TimesHistóricos/Santos2002/Santos2002_2005";
import Santos2009_2013 from "../src/components/TimesHistóricos/Santos2009/Santos2009_2013";

//Import JogadoresHistóricos
import Pepe from "../src/components/JogadoresHistóricos/Pepe/Pepe";
import Coutinho from "../src/components/JogadoresHistóricos/Coutinho/Coutinho";
import Zito from "../src/components/JogadoresHistóricos/Zito/Zito";
import Edu from "../src/components/JogadoresHistóricos/Edu/Edu";
import Clodoaldo from "./components/JogadoresHistóricos/Clodoaldo/Clodoaldo";
import Diego from "./components/JogadoresHistóricos/Diego/Diego";
import Elano from "./components/JogadoresHistóricos/Elano/Elano";
import Alex from "./components/JogadoresHistóricos/Alex/Alex";
import Neymar from "./components/JogadoresHistóricos/Neymar/Neymar";
import Ganso from "./components/JogadoresHistóricos/Ganso/Ganso";
//Import Títulos Históricos
import CampeonatoPaulista2010 from "./components/TítulosHistóricos/CampeonatoPaulista2010";
import CopaBrasil2010 from "./components/TítulosHistóricos/CopaBrasil2010";
import CopaLibertadores2011 from "./components/TítulosHistóricos/CopaLibertadores2011";

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
          <Route path="/jogadores-historicos/clodoaldo" element={<Clodoaldo />} />
          <Route path="/jogadores-historicos/diego" element={<Diego />} />
          <Route path="/jogadores-historicos/elano" element={<Elano />} />
          <Route path="/jogadores-historicos/alex" element={<Alex />} />
          <Route path="/jogadores-historicos/neymar" element={<Neymar />} />
          <Route path="/jogadores-historicos/ph-ganso" element={<Ganso />} />
          //Títulos Históricos
          <Route path="/titulos-historicos/campeonato-paulista-2010" element={<CampeonatoPaulista2010 />} />
          <Route path="/titulos-historicos/copa-do-brasil-2010" element={<CopaBrasil2010 />} />
          <Route path="/titulos-historicos/copa-libertadores-2011" element={<CopaLibertadores2011 />} />
          //Time Sonhos
          <Route path="/time-do-sonhos" element={<TimeSonhos />} />
          // Contato
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
