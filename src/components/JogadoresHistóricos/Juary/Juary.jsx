// Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player";

// Componentes Imagens
import JuarySantos from "../../../assets/Juary/JuarySantos.webp";
import JuaryPlayer from "../../../assets/Juary/JuaryPlayer.webp";

const Juary = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`jogadores-historicos/juary ${theme}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="text-center">
                            <AnimatedScroll animationClass="animate-hidden">
                                <h1 className="h1-subsection-players">
                                Juary, O Pai Do São Paulo
                                </h1>
                                <img
                                    src={JuarySantos}
                                    className="img-section mb-4"
                                    alt="Juary"
                                />
                                <p className="p-subsection-players">
                                Juary, O Pai Do São Paulo
                                </p>
                            </AnimatedScroll>

                            <AnimatedScroll animationClass="animate-hidden">
                                <Player
                                    image={JuaryPlayer}
                                    name="Jaury"
                                    titles="Campeonato Paulista 1978"
                                    position="Centro-Avante"
                                    number="9"
                                    stats="Partidas: 229 | Gols: 101"
                                    life={[
                                          "Juary é um dos maiores ídolos da primeira geração dos Meninos da Vila do Santos FC. Ele se destacou como um atacante veloz e habilidoso, com uma impressionante capacidade de finalização. Juary ficou famoso por ser o 'Pai do São Paulo', devido ao grande número de gols que marcou contra o time rival, incluindo um gol decisivo na final do Campeonato Paulista de 1978.",
                                        "Nesse campeonato, Juary foi o artilheiro com 29 gols, foi eleito o melhor jogador do torneio e ajudou o Santos a conquistar o título, sendo o primeiro pós Era Pelé. Até o surgimento de Robinho e Neymar, Juary foi o maior artilheiro do Santos na era pós-Pelé, consolidando seu nome na história do clube."
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

export default Juary;
