// Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player";

// Componentes Imagens
import GansoSantos from "../../../assets/Ganso/Ganso.jpeg";
import GansoPlayer from "../../../assets/Ganso/GansoPlayer.jpg";

const Ganso = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`jogadores-historicos/ganso ${theme}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="text-center">
                            <AnimatedScroll animationClass="animate-hidden">
                                <h1 className="h1-subsection-players">
                                Paulo Henrique Ganso, o Maestro
                                </h1>
                                <img
                                    src={GansoSantos}
                                    className="img-section mb-4"
                                    alt="Ganso"
                                />
                                <p className="p-subsection-players">
                                Paulo Henrique Ganso, o Maestro
                                </p>
                            </AnimatedScroll>

                            <AnimatedScroll animationClass="animate-hidden">
                                <Player
                                    image={GansoPlayer}
                                    name="PH Ganso."
                                    titles="Campeonato Paulista 2010, 2011 e 2012"
                                    titles2 = "Copa do Brasil 2010"
                                    titles3 ="Copa Libertadores da América 2011"
                                    titles4 ="Recopa Sul-Americana 2012"
                                    position="Meio-Campista"
                                    number="10"
                                    stats="Partidas: 162| Gols: 36"
                                    life={[
                                         "PH Ganso, conhecido como o Maestro da Vila, era um meio-campista de talento excepcional. Com uma visão de jogo rara e uma habilidade notável para lançamentos e chutes de fora da área, Ganso se destacou por suas cobranças de falta precisas e seu controle absoluto do meio-campo.",
                                        "Durante o auge de sua carreira, Ganso era a peça central das jogadas que Neymar Jr. finalizava, formando uma dupla temida no ataque. Apesar das lesões repetitivas no joelho que impediram seu desenvolvimento total, Ganso é lembrado como o camisa 10 da geração de Neymar. Sua contribuição para o Santos FC e o impacto que teve em sua época continuam a ser valorizados, solidificando seu lugar na memória dos torcedores como um dos grandes talentos da história do clube."
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

export default Ganso;
