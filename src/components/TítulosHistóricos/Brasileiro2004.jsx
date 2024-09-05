//Componentes React
import React,{useContext} from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import {Container, Row, Col} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes Imagens
import Elenco2004 from "../../assets/Brasileiro2004/Elenco2004.jpg";
//Componentes CSS
import "../../assets/styles/SubSection.css";

const Brasileiro2004 = () => {
    const {theme} = useContext(ThemeContext);
    
  return (
    <section className={`brasileiro-2004 ${theme}`}>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                  <div className="text-center">
                    <AnimatedScroll animationClass="animate-hidden">
                    <h1 className="h1-subsection">Títulos Históricos - Campeonato Brasileiro 2004</h1>
                    <img src={Elenco2004} className="img-section" alt="Elenco 2004"/>
                    <p className="p-subsection">Elenco TItular Do Santos Em 2004</p>
                    </AnimatedScroll>
                    
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Brasileiro2004;