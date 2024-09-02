// Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player";

// Componentes Imagens
import ZitoSantos from "../../../assets/Zito/Zito.jfif";
import ZitoPlayer from "../../../assets/Zito/ZitoPlayer.jfif";

const Zito= () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`jogadores-historicos/zito ${theme}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="text-center">
                            <AnimatedScroll animationClass="animate-hidden">
                                <h1 className="h1-subsection mb-4">
                                    Zito, o Gerente
                                </h1>
                                <img
                                    src={ZitoSantos}
                                    className="img-section mb-4"
                                    alt="Pepe"
                                />
                                <p className="p-subsection mb-4">
                                Zito, o Gerente
                                </p>
                            </AnimatedScroll>

                            <AnimatedScroll animationClass="animate-hidden">
                                <Player
                                    image={ZitoPlayer}
                                    name="Zito"
                                    titles="Campeonato Paulista 1955, 1956, 1958, 1960, 1961, 1962, 1964, 1965 e 1967"
                                    titles2="Torneio Rio-São Paulo 1959, 1963, 1964 e 1966"
                                    titles3="Copa Libertadores da América 1962 e 1963"
                                    titles4="Mundial 1962 e 1963"
                                    titles5="Campeonato Brasileiro 1961, 1962, 1963, 1964 e 1965 "
                                    position="Volante"
                                    number="5"
                                    stats="Partidas: 727 | Gols: 57"
                                    life={[
                                        "Zito, um dos maiores volantes da história do Santos FC e da Seleção Brasileira, é celebrado por sua inteligência tática e liderança em campo. Ele foi uma peça chave na equipe vitoriosa dos anos 60, ajudando o Santos a conquistar inúmeros títulos, incluindo a Copa Libertadores e o Mundial.",
                                        "Reconhecido por sua capacidade de marcar, distribuir o jogo e proteger a defesa, Zito foi essencial tanto para o Santos quanto para a Seleção Brasileira. Seu estilo de jogo e sua importância como capitão são lembrados como exemplo de dedicação e competência no futebol."
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

export default Zito;
