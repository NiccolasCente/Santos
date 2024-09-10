//Componentes React
import React, {useContext} from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import {Container, Row, Col} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes Imagens
import TimeTitular from "../../assets/CopaLibertadores1963/TimeTItular.jpg";
//Componentes CSS
import "../../assets/styles/SubSection.css";

const CopaLibertadores1963 = () => {
    const{theme} = useContext(ThemeContext);
    
  return (
    <section className={`libertadores-1963 ${theme}`}>
        <Container>
            <Row className="justify-content-center">
                <Col  xs={12} md={8} lg={6}>
                  <div className="text-center">
                    <AnimatedScroll animationClass="animate-hidden">
                        <h1 className="h1-subsection">Títulos Históricos - Taça Libertadores Da América 1963</h1>
                        <img src={TimeTitular} className="img-section" alt="Time Titular na libertadores 63"/>
                        <p className="p-subsection">Time Titular Do Santos Na Taça Libertadores Da América 1963</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>                   
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default CopaLibertadores1963;
