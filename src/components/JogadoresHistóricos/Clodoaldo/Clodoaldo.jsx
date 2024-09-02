// Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player";

// Componentes Imagens
import ClodoaldoSantos from "../../../assets/Clodoaldo/Clodoaldo.jfif";
import ClodoaldoPlayer from "../../../assets/Clodoaldo/ClodoaldoPlayer.jpg";

const Clodoaldo= () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`jogadores-historicos/clodoaldo ${theme}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="text-center">
                            <AnimatedScroll animationClass="animate-hidden">
                                <h1 className="h1-subsection-players">
                                    Clodolado, o Corró
                                </h1>
                                <img
                                    src={ClodoaldoSantos}
                                    className="img-section mb-4"
                                    alt="Clodoaldo"
                                />
                                <p className="p-subsection-players">
                                Clodolado, o Corró
                                </p>
                            </AnimatedScroll>

                            <AnimatedScroll animationClass="animate-hidden">
                                <Player
                                    image={ClodoaldoPlayer}
                                    name="Clodoaldo"
                                    titles="Campeonato Paulista 1967, 1968, 1969, 1973 e 1978"
                                    titles2=" Recopa dos Campeões Intercontinentais 1968"
                                    titles3="Campeonato Brasileiro 1968"
                                    position="Volante"
                                    number="5"
                                    stats="Partidas: 508 | Gols: 14"
                                    life={[
                                         "Clodoaldo, conhecido como Corró, é uma lenda do Santos FC e do futebol brasileiro. Como volante, Clodoaldo foi essencial na conquista de títulos importantes, incluindo o Campeonato Paulista, a Recopa dos Campeões Intercontinentais e o Campeonato Brasileiro.",
                                        "Renomado por sua inteligência tática, visão de jogo e precisão nos passes, Clodoaldo foi um dos grandes líderes em campo durante a Era de Ouro do Santos. Seu desempenho na Copa do Mundo de 1970 pela Seleção Brasileira, onde ajudou o Brasil a conquistar o tricampeonato, é lembrado como um dos momentos mais brilhantes de sua carreira."
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

export default Clodoaldo;
