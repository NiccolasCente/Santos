// Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player";

// Componentes Imagens
import NeymarSantos from "../../../assets/Neymar/Neymar.jpg";
import NeymarPlayer from "../../../assets/Neymar/NeymarPlayer.webp";

const Neymar = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`jogadores-historicos/neymar ${theme}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="text-center">
                            <AnimatedScroll animationClass="animate-hidden">
                                <h1 className="h1-subsection-players">
                                Neymar Jr, o Melhor Pós-Pelé
                                </h1>
                                <img
                                    src={NeymarSantos}
                                    className="img-section mb-4"
                                    alt="Neymar"
                                />
                                <p className="p-subsection-players">
                                Neymar Jr, o Melhor Pós-Pelé
                                </p>
                            </AnimatedScroll>

                            <AnimatedScroll animationClass="animate-hidden">
                                <Player
                                    image={NeymarPlayer}
                                    name="Neymar Jr."
                                    titles="Campeonato Paulista 2010, 2011 e 2012"
                                    titles2 = "Copa do Brasil 2010"
                                    titles3 ="Copa Libertadores da América 2011"
                                    titles4 ="Recopa Sul-Americana 2012"
                                    position="Ponta-Esquerda"
                                    number="11"
                                    stats="Partidas: 230 | Gols: 138"
                                    life={[
                                         "Neymar Jr, amplamente considerado o maior jogador a surgir no Santos FC após Pelé, é um ícone mundial do futebol. Com seu talento excepcional, dribles desconcertantes e uma habilidade inigualável para marcar gols, Neymar rapidamente se tornou o principal jogador do Santos desde que começou a atuar como profissional em 2009.",
                                        "Durante sua passagem pelo Santos, Neymar ajudou o clube a conquistar títulos importantes, incluindo a Copa Libertadores de 2011, a primeira do clube desde a era Pelé. Seus feitos em campo, como os três títulos consecutivos do Campeonato Paulista e a artilharia em diversos campeonatos, consolidaram sua posição como um dos maiores ídolos do Santos. A combinação de velocidade, técnica e precisão fez de Neymar um dos jogadores mais temidos pelos adversários e mais amados pelos torcedores."
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

export default Neymar;
