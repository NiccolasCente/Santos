// Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player";

// Componentes Imagens
import CoutinhoSantos from "../../../assets/Coutinho/Coutinho.jpg";
import CoutinhoPlayer from "../../../assets/Coutinho/CoutinhoPlayer.jfif";

const Coutinho = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`jogadores-historicos/coutinho ${theme}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="text-center">
                            <AnimatedScroll animationClass="animate-hidden">
                                <h1 className="h1-subsection-players">
                                    Coutinho, o Gênio da Pequena área
                                </h1>
                                <img
                                    src={CoutinhoSantos}
                                    className="img-section mb-4"
                                    alt="Coutinho"
                                />
                                <p className="p-subsection-players">
                                Coutinho, o Gênio da Pequena área
                                </p>
                            </AnimatedScroll>

                            <AnimatedScroll animationClass="animate-hidden">
                                <Player
                                    image={CoutinhoPlayer}
                                    name="Coutinho"
                                    titles="Campeonato Paulista 1960, 1961, 1962, 1964, 1965 e 1967"
                                    titles2="Torneio Rio-São Paulo 1959, 1963, 1964 e 1966"
                                    titles3="Copa Libertadores da América 1962 e 1963"
                                    titles4="Mundial 1962 e 1963"
                                    titles5="Campeonato Brasileiro 1961, 1962, 1963, 1964 e 1965 "
                                    position="Centro-Avante"
                                    number="9"
                                    stats="Partidas: 455 | Gols: 387"
                                    life={[
                                        "Coutinho é um dos maiores ídolos da história do Santos FC e do futebol brasileiro. Com seu talento e criatividade, ele conquistou o coração dos torcedores e ajudou a equipe a ganhar diversos títulos, incluindo a Copa Libertadores e o Mundial.",
                                        "Conhecido por sua habilidade na pequena área e finalização, Coutinho era um jogador fundamental na equipe do Santos, especialmente durante as décadas de 1950 e 1960. Sua contribuição para o futebol é lembrada até hoje, e ele continua sendo uma figura reverenciada no esporte, o maior camisa 9 da história do Peixe."
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

export default Coutinho;
