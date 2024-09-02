// Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player";

// Componentes Imagens
import AlexSantos from "../../../assets/Alex/Alex.png";
import AlexPlayer from "../../../assets/Alex/AlexPlayer.jpg";

const Alex = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`jogadores-historicos/alex ${theme}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="text-center">
                            <AnimatedScroll animationClass="animate-hidden">
                                <h1 className="h1-subsection mb-4">
                                 Alex, o Canhão da Vila
                                </h1>
                                <img
                                    src={AlexSantos}
                                    className="img-section mb-4"
                                    alt="Pepe"
                                />
                                <p className="p-subsection mb-4">
                                Alex, o Canhão da Vila
                                </p>
                            </AnimatedScroll>

                            <AnimatedScroll animationClass="animate-hidden">
                                <Player
                                    image={AlexPlayer}
                                    name="Alex"
                                    titles="Campeonato Brasileiro 2002 e 2004"                           
                                    position="Zagueiro"
                                    number="6"
                                    stats="Partidas: 102 | Gols: 20"
                                    life={[
                                         "Alex, conhecido como o 'Canhão da Vila', foi um zagueiro extraordinário que marcou uma era no Santos FC. Com uma força física descomunal e uma precisão incrível em chutes de longa distância, Alex ganhou o apelido que antes pertencia ao lendário Pepe. Suas cobranças de falta e tiros de longe eram temidos pelos adversários, muitas vezes resultando em gols espetaculares.",
                                        "Defensivamente impecável, Alex era o pilar da defesa santista e foi eleito o melhor zagueiro do Campeonato Brasileiro em 2002 e 2003. Além de sua solidez defensiva, Alex também era decisivo no ataque, sendo lembrado pelo gol marcado na final da Copa Libertadores de 2003. Sua capacidade de influenciar tanto na defesa quanto no ataque o tornou um dos maiores ídolos da história recente do Santos FC."
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

export default Alex;
