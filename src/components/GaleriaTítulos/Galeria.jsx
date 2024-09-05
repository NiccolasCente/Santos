//Componentes React
import React, {useContext}from "react";
import {ThemeContext} from "../common/ThemeProvider/ThemeContext";
import {Container, Col, Row} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes CSS
import "../../assets/styles/SubSection.css";

//Componentes Imagens


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
                    </AnimatedScroll>
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Galeria;