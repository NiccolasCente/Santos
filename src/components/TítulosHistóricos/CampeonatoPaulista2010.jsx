//Componentes React
import React, {useContext} from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import {Container,Row,Col} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes CSS
import "../../assets/styles/SubSection.css";

//Import Imagens
import TimeTitular from "../../assets/CampeonatoPaulista2010/TimeTitular.jpg";
import NeymarGanso from "../../assets/CampeonatoPaulista2010/NeymarGanso2010.jpg";

const CampeonatoPaulista2010 = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <section className={`campeonato-paulista-2010 ${theme}`}>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                  <div className="text-center">
                    <AnimatedScroll animationClass="animate-hidden">
                        <h1 className="h1-subsection">Títulos Históricos - Campeonato Paulista 2010</h1>
                        <img src={TimeTitular} className="img-section" alt="Time Titular do Paulista 2010"/>
                        <p className="p-subsection">Time Titular do Santos Comemorando o Título do Paulista 2010</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">Antes da Magia Acontecer</h2>
                        <p className="p-subsection">Depois do período mágico vivido em 2002-2005 com os craques da base
                            Diego e Robinho, o Santos viveu bons resultados nos anos seguintes: 2006/2007
                             BiCampeão do <strong style={{color: "#007bff"}}>Campeonato Paulista</strong>, 2007:Vice do 
                             <strong style={{color: "#007bff"}}> Brasileirão</strong> e 
                             SemiFinal da  <strong style={{color: "#007bff"}}>Libertadores</strong>.
                        </p>
                    </AnimatedScroll>

                    
                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Porém o time havia entrado em uma espiral de crises dentro e fora de campo, gastou todo o dinheiro ganho
                            com a geração passada em jogadores que não ganharam nenhum título relevante, resultando em um ano desesperador em 2008, onde quase foi rebaixado no
                            campeonato nacional.
                            <br></br>
                            <br></br>
                            No ano de 2009 decidiram encontrar 2 possiveis soluções para seus problemas: Subir o jovem Neymar Jr. da base e dar mais respaldo para Paulo
                            Henrique, o Ganso que havia subido em 2008.
                        </p>
                    </AnimatedScroll>

                    
                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">E realmente começaram a dar liga, foram vice-campeões do <strong style={{color: "#007bff"}}>Campeonato Paulista 2009</strong>, com
                        Neymar sendo o grande destaque do time, inclusive eliminando o Palmeiras de Marcos marcando um golaço de fora da área.
                        <br></br>
                        Entretanto, o desempenho no  <strong style={{color: "#007bff"}}>Campeonato Brasileiro 2009</strong> foi assustador e mais uma vez quase foram rebaixados,
                        se salvando por muito pouco.
                        <br></br>
                         O que a torcida e nem os próprios jogadores sabiam, é que desse time surgiriam talentos que explodiriam no ano de 2010.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">Os Meninos Da Vila 3.0</h2>
                        <img src={NeymarGanso} className="img-section" alt="Neymar e Ganso em 2010"/>
                        <p className="p-subsection">Neymar e Ganso em 2010</p>
                    </AnimatedScroll>

                    
                    <AnimatedScroll animationClass="animate-hidden">
                        s
                    </AnimatedScroll>


                    
                    <AnimatedScroll animationClass="animate-hidden">
                        s
                    </AnimatedScroll>


                    <AnimatedScroll animationClass="animate-hidden">
                        s
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        s
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        s
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        s
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        s
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        s
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        s
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        s
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        s
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        s
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        s
                    </AnimatedScroll>

                    
                    
                  </div>
                </Col>
            </Row>
        </Container>
      
    </section>
  );
};

export default CampeonatoPaulista2010;
