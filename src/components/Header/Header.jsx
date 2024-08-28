// Import React
import React, { useContext } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdown from "../Header/Dropdown";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../components/common/ThemeProvider/ThemeContext";

// Import CSS
import "../Header/Header.css";

// Import Imagens
import LogoHeader from "../../assets/Santos_Logo.png";
import LeftRightLogo from "../../assets/sublogo_header.png";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const timesHistoricosItems = [
    { path: "/times-historicos/santos-1958-1974", label: "Santos 1958 - 1974" },
    { path: "/times-historicos/meninos-da-vila-2002-2005", label: "Santos 2002-2005" },
    { path: "/times-historicos/meninos-da-vila-2010-2012", label: "Santos 2010-2012" },
  ];

  const jogadoresHistoricosItems = [
    { path: "/jogadores-historicos/pepe", label: "Pepé" },
    { path: "/jogadores-historicos/coutinho", label: "Coutinho" },
    { path: "/jogadores-historicos/edu", label: "Edu" },
    { path: "/jogadores-historicos/clodoaldo", label: "Clodoaldo" },
    { path: "/jogadores-historicos/diego", label: "Diego" },
    { path: "/jogadores-historicos/elano", label: "Elano" },
    { path: "/jogadores-historicos/alex", label: "Alex" },
    { path: "/jogadores-historicos/renatinho", label: "Renatinho" },
    { path: "/jogadores-historicos/neymar", label: "Neymar Jr" },
    { path: "/jogadores-historicos/ph-ganso", label: "PH Ganso" },
    { path: "/jogadores-historicos/danilo", label: "Danilo" },
    { path: "/jogadores-historicos/rafael-cabral", label: "Rafael Cabral" },
  ];

  const titulosHistoricosItems = [
    { path: "/titulos-historicos/libertadores-1962", label: "Libertadores 1962" },
    { path: "/titulos-historicos/libertadores-1963", label: "Libertadores 1963" },
    { path: "/titulos-historicos/mundial-1962", label: "Mundial 1962" },
    { path: "/titulos-historicos/mundial-1963", label: "Mundial 1963" },
    { path: "/titulos-historicos/campeonato-paulista-1978", label: "Campeonato Paulista 1978" },
    { path: "/titulos-historicos/campeonato-brasileiro-2002", label: "Campeonato Brasileiro 2002" },
    { path: "/titulos-historicos/campeonato-brasileiro-2004", label: "Campeonato Brasileiro 2004" },
    { path: "/titulos-historicos/campeonato-paulista-2010", label: "Campeonato Paulista 2010" },
    { path: "/titulos-historicos/copa-do-brasil-2010", label: "Copa do Brasil 2010" },
    { path: "/titulos-historicos/copa-libertadores-2011", label: "Copa Libertadores 2011" },
  ];

  return (
    <header className={`header ${theme}`}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col>
            <div className="header-content">
              <div className="header-item align-left">
                <img src={LeftRightLogo} alt="Imagem Esquerda" className="header-img" />
                <p className="header-text">
                  Santos Futebol Clube<br />Desde 1912
                </p>
              </div>
              <img src={LogoHeader} alt="Imagem Logo Centro" className="header-img center" />
              <div className="header-item align-right">
                <p className="header-text">
                  Fã Page feita sem fins<br />lucrativos!
                </p>
                <img src={LeftRightLogo} alt="Imagem Direita" className="header-img" />
              </div>
            </div>
            <Navbar className="header-nav">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="header-nav-items">
                    <Nav.Link as={Link} to="/inicio">Início</Nav.Link>
                    <Dropdown title="Times Históricos" items={timesHistoricosItems} />
                    <Dropdown title="Jogadores Históricos" items={jogadoresHistoricosItems} />
                    <Dropdown title="Títulos Históricos" items={titulosHistoricosItems} />
                    <Nav.Link as={Link} to="/time-do-sonhos">Time do Sonhos</Nav.Link>
                    <Nav.Link as={Link} to="/galeria-de-titulos">Galeria de Títulos</Nav.Link>
                    <Nav.Link as={Link} to="/pele">Pelé</Nav.Link>
                    <Nav.Link as={Link} to="/historia">História</Nav.Link>
                    <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
                    <button onClick={toggleTheme} className={`theme-toggle-button ${theme}`}>
                      {theme === "light" ? <FaMoon className="theme-icon moon" /> : <FaSun className="theme-icon sun" />}
                    </button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
