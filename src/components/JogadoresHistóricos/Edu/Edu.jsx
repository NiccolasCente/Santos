// Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player";

// Componentes Imagens
import EduSantos from "../../../assets/Edu/Edu.jfif";
import EduPlayer from "../../../assets/Edu/EduPlayer.jpg";

const Edu= () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`jogadores-historicos/edu ${theme}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="text-center">
                            <AnimatedScroll animationClass="animate-hidden">
                                <h1 className="h1-subsection-players">
                                    Edu, o Ponta-Esquerda
                                </h1>
                                <img
                                    src={EduSantos}
                                    className="img-section mb-4"
                                    alt="Edu"
                                />
                                <p className="p-subsection-players">
                                Edu, o Ponta-Esquerda
                                </p>
                            </AnimatedScroll>

                            <AnimatedScroll animationClass="animate-hidden">
                                <Player
                                    image={EduPlayer}
                                    name="Edu"
                                    titles="Campeonato Paulista 1967, 1968, 1969 e 1973"
                                    titles2="Torneio Rio-São Paulo  1966"
                                    titles3="Campeonato Brasileiro 1968"
                                    position="Ponta-Esquerda"
                                    number="11"
                                    stats="Partidas: 584 | Gols: 196"
                                    life={[
                                        "Edu, um dos maiores pontas-esquerdas da história do Santos FC, é lembrado por sua habilidade e criatividade em campo. Durante os anos 60 e 70, ele se destacou com suas dribles incisivos e capacidade de criar oportunidades de gol para seus companheiros.",
                                        "Sua contribuição foi fundamental para as conquistas do Santos, incluindo vários títulos do Campeonato Paulista e o Campeonato Brasileiro. Edu é lembrado como um dos jogadores mais talentosos e carismáticos que vestiram a camisa do Peixe."
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
export default Edu;
