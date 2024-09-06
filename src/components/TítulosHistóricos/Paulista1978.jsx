import React, {useContext} from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import {Container, Row, Col} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes Imagens
import TimeTitular from "../../assets/CampeonatoPaulista1978/TimeTitular.webp";
//Componentes CSS
import "../../assets/styles/SubSection.css";

const Paulista1978 = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <section className={`paulista-1978 ${theme}`}>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                   <div className="text-center">
                     <AnimatedScroll animationClass="animate-hidden">
                        <h1 className="h1-subsection">Títulos Históricos - Campeonato Paulista 1978</h1>
                        <img src={TimeTitular} className="img-section" alt="Time Titular"/>
                        <p className="p-subsection">Time Titular Do Santos Em 1978</p>
                     </AnimatedScroll>
                   </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Paulista1978;