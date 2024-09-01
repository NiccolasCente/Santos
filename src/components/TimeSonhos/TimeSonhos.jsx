//Componentes React
import React, {useContext} from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import {Container, Row, Col} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";
//Componentes CSS
import "../TimeSonhos/TimeSonhos.css";
//Componente Imagens
import TimeDoSonhos from "../../assets/time dos sonhos.png";

const TimeSonhos = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <section className={`time-do-sonhos ${theme}`}>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                  <div className="text-center"> 
                    <AnimatedScroll animationClass="animate-hidden">
                        <h1 className="h1-subsection">Time do Sonhos do Santos</h1>
                        <img src={TimeDoSonhos}  alt="Time do Sonhos do Santos" />
                    </AnimatedScroll>
                  </div>
                </Col>
            </Row>
        </Container>

    </section>
  );
};

export default TimeSonhos;
