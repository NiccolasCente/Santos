// Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player";

// Componentes Imagens
import ElanoSantos from "../../../assets/Elano/Elano.jpg";
import ElanoPlayer from "../../../assets/Elano/ElanoPlayer.webp";

const Elano = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`jogadores-historicos/elano ${theme}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="text-center">
                            <AnimatedScroll animationClass="animate-hidden">
                                <h1 className="h1-subsection mb-4">
                                    Elano, o Coringa da Vila
                                </h1>
                                <img
                                    src={ElanoSantos}
                                    className="img-section mb-4"
                                    alt="Pepe"
                                />
                                <p className="p-subsection mb-4">
                                Elano, o Coringa da Vila
                                </p>
                            </AnimatedScroll>

                            <AnimatedScroll animationClass="animate-hidden">
                                <Player
                                    image={ElanoPlayer}
                                    name="Elano"
                                    titles="Campeonato Brasileiro 2002 e 2004"
                                    titles2="Copa Libertadores da América 2011"
                                    titles3="Campeonato Paulista 2011, 2012 e 2016"
                                    titles4="Recopa Sul-Americana 2012"
                                    position="Meia-Direita"
                                    number="11 e 8"
                                    stats="Partidas: 332 | Gols: 68"
                                    life={[
                                         "Elano, conhecido como o 'Coringa da Vila', foi um dos jogadores mais versáteis e talentosos a vestir a camisa do Santos FC. Destacando-se como um meia-direita com excelente visão de jogo, habilidade nos passes e precisão nas cobranças de falta, Elano teve um papel crucial em diversas conquistas do clube.",
                                        "Elano foi uma peça-chave nos títulos do Campeonato Brasileiro de 2002 e 2004, e seu retorno ao Santos em 2011 contribuiu para a vitória na Copa Libertadores da América. Além de sua importância em campo, Elano também é lembrado por sua liderança e identificação com o clube, sempre demonstrando amor pela camisa do Peixe."
                                    ]}
                                />
                            </AnimatedScroll>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Elano;
