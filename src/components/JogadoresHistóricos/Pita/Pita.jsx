// Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player";

// Componentes Imagens
import PitaSantos from "../../../assets/Pita/PitaSantos.jpg";
import PitaPlayer from "../../../assets/Pita/PitaPlayer.jpg";

const Pita = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`jogadores-historicos/pita ${theme}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="text-center">
                            <AnimatedScroll animationClass="animate-hidden">
                                <h1 className="h1-subsection-players">
                                    Pita, O Herdeiro da Camisa 10
                                </h1>
                                <img
                                    src={PitaSantos}
                                    className="img-section mb-4"
                                    alt="Pita"
                                />
                                <p className="p-subsection-players">
                                    Pita, O Herdeiro da Camisa 10
                                </p>
                            </AnimatedScroll>

                            <AnimatedScroll animationClass="animate-hidden">
                                <Player
                                    image={PitaPlayer}
                                    name="Pita"
                                    titles="Campeonato Paulista 1978"
                                    position="Meio-Campista"
                                    number="10"
                                    stats="Partidas: 412 | Gols: 54"
                                    life={[
                                        "Pita, um dos Meninos da Vila, foi o meio-campista que herdou a lendária camisa 10 do Santos FC. Ele se destacou como um dos maiores craques do clube no final dos anos 70 e início dos anos 80, conhecido por sua visão de jogo, passes precisos e habilidade técnica.",
                                        "Fez uma parceria inesquecível com Juary, contribuindo significativamente para o título do Campeonato Paulista de 1978. Contudo, sua idolatria no Santos diminuiu um pouco quando ele se transferiu para o São Paulo em 1984. Mesmo assim, Pita deixou uma marca indelével na história do Santos como um dos grandes jogadores de sua época."
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

export default Pita;
