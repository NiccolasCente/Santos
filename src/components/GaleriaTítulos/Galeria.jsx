//Componentes React
import React, {useContext}from "react";
import {ThemeContext} from "../common/ThemeProvider/ThemeContext";
import {Container, Col, Row} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes CSS
import "../../assets/styles/SubSection.css";

//Componentes Imagens
import BiMundial from "../../assets/Galeria/BiMundial.jpg";
import TriLibertadores from "../../assets/Galeria/TriLibertadores.jpg";
import Recopa from "../../assets/Galeria/Recopa.jpg";
import Br2002 from "../../assets/Galeria/BR2002.webp";
import CdB2010 from "../../assets/Galeria/CDB2010.webp";
import CampeonatoPaulista from "../../assets/Galeria/CampeonatoPaulista.webp";

const Galeria = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <section className={`galeria-de-titulos ${theme}`}>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                  <div className="text-center">
                    <AnimatedScroll animationClass="animate-hidden">
                        <h1 className="h1-subsection">Galeria De Títulos</h1>
                        <p className="p-subsection">Bem-vindo à Galeria de Títulos do Santos FC! Aqui, você encontrará a história gloriosa de um dos clubes mais vitoriosos do futebol
                           brasileiro e mundial. 
                          Desde suas conquistas inesquecíveis até os momentos que marcaram gerações, este espaço celebra as vitórias que tornaram o Santos FC uma lenda no esporte.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                      <h2 className="h2-subsection">2 Taças Intercontinentais:</h2>
                      <p className="p-subsection">1962 e 1963</p>
                      <img src={BiMundial} className="img-section" alt="Bimundial" />
                     
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                      <h2 className="h2-subsection">3 Copas Libertadores Da América:</h2>
                      <p className="p-subsection">1962, 1963 e 2011</p>
                      <img src={TriLibertadores} className="img-section" alt="TriLibertadores"/>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                      <h2 className="h2-subsection">1 Recopa Sul-Americana:</h2>
                      <p className="p-subsection">2012</p>
                      <img src={Recopa} className="img-section" alt="Recopa"/>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                      <h2 className="h2-subsection">8 Campeonatos Brasileiros:</h2>
                      <p className="p-subsection">1961, 1962, 1963, 1964, 1965, 1968, 2002 e
                      2004</p>
                      <img src={Br2002} className="img-section" alt="Brasileiro"/>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                      <h2 className="h2-subsection">1 Copa do Brasil:</h2>
                      <p className="p-subsection">2010</p>
                      <img src={CdB2010} className="img-section" alt="CdB"/>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                      <h2 className="h2-subsection">22 Campeonatos Paulistas:</h2>
                      <p className="p-subsection">1935, 1955, 1956, 1958, 1960, 1961, 1962
                      1964, 1965, 1967, 1968, 1969, 1973, 1978, 1984, 2006, 2007, 2010, 2011,
                      2012, 2015 e 2016
                      </p>
                      <img src={CampeonatoPaulista} className="img-section" alt="Paulista"/>
                    </AnimatedScroll>

                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Galeria;