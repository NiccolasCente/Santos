import React, { useContext } from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";
import "../TimeSonhos/TimeSonhos.css";
import TimeDoSonhos from "../../assets/time dos sonhos.png";

const TimeSonhos = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`time-do-sonhos ${theme}`}>
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col xs={12} md={6} className="text-center">
                        <AnimatedScroll animationClass="animate-hidden">
                            <img src={TimeDoSonhos} alt="Time do Sonhos do Santos" />
                        </AnimatedScroll>
                    </Col>
                    <Col xs={12} md={6} className="text-md-start text-center">
                        <AnimatedScroll animationClass="animate-hidden">
                            <h1 className="h1-subsection">Time do Sonhos do Santos</h1>
                            <ul className="time-list">
                                <li className="p-subsection">Goleiro: Rodolfo Rodrigues</li>
                                <li className="p-subsection">Lateral Direito: Carlos Alberto Torres</li>
                                <li className="p-subsection">Zagueiro: Lucas Veríssimo</li>
                                <li className="p-subsection">Zagueiro: Alex</li>
                                <li className="p-subsection">Lateral Esquerdo: Léo</li>
                                <li className="p-subsection">Volante: Zito</li>
                                <li className="p-subsection">Meio-Campo: Clodoaldo</li>
                                <li className="p-subsection">Ponta De Lança: Pelé</li>
                                <li className="p-subsection">Ponta Direita: Pepe</li>
                                <li className="p-subsection">Centro-Avante: Coutinho</li>
                                <li className="p-subsection">Ponta Esquerda: Neymar Jr.</li>
                                <li className="p-subsection">Técnico: Lula</li>
                            </ul>
                        </AnimatedScroll>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TimeSonhos;
