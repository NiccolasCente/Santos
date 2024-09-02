// Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player";

// Componentes Imagens
import PepeSantos from "../../../assets/Pepe/Pepe.jpg";
import PepePlayer from "../../../assets/Pepe/PepePlayer.jpg";

const Pepe = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`jogadores-historicos/pepe ${theme}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="text-center">
                            <AnimatedScroll animationClass="animate-hidden">
                                <h1 className="h1-subsection mb-4">
                                    Pepé, O Canhão da Vila
                                </h1>
                                <img
                                    src={PepeSantos}
                                    className="img-section mb-4"
                                    alt="Pepe"
                                />
                                <p className="p-subsection mb-4">
                                    Pepé, O Canhão da Vila
                                </p>
                            </AnimatedScroll>

                            <AnimatedScroll animationClass="animate-hidden">
                                <Player
                                    image={PepePlayer}
                                    name="Pepe"
                                    titles="Campeonato Paulista 1955, 1956, 1958, 1960, 1961, 1962, 1964, 1965, 1967, 1968 e 1969"
                                    titles2="Torneio Rio-São Paulo 1959, 1963, 1964 e 1966"
                                    titles3="Copa Libertadores da América 1962 e 1963"
                                    titles4="Mundial 1962 e 1963"
                                    titles5="Campeonato Brasileiro 1961, 1962, 1963, 1964, 1965 e 1968"
                                    titles6="Recopa dos Campeões Intercontinentais 1968"
                                    position="Ponta-Esquerda"
                                    number="11"
                                    stats="Partidas: 750 | Gols: 403"
                                    life={[
                                        "Pepe é considerado um dos maiores jogadores da história do futebol brasileiro e um ícone do Santos FC. Conhecido por sua habilidade e cobranças de falta que lhe renderam o apelido Canhão da Vila, Pepe foi um grande parceiro de Pelé, formando uma dupla lendária que levou o Santos a conquistar inúmeros títulos.",
                                        "Durante sua carreira, Pepe foi fundamental para o sucesso do Santos, especialmente nas décadas de 1950 e 1960. Seu talento e contribuição para o futebol brasileiro são lembrados até hoje, e ele permanece como uma figura admirada e respeitada no esporte."
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

export default Pepe;
