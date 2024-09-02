// Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player";

// Componentes Imagens
import DiegoSantos from "../../../assets/Diego/Diego.jpg";
import DiegoPlayer from "../../../assets/Diego/DiegoPlayer.webp";

const Diego= () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`jogadores-historicos/diego ${theme}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="text-center">
                            <AnimatedScroll animationClass="animate-hidden">
                                <h1 className="h1-subsection-players">
                                Diego Ribas, o Menino da Vila Camisa 10
                                </h1>
                                <img
                                    src={DiegoSantos}
                                    className="img-section mb-4"
                                    alt="Diego"
                                />
                                <p className="p-subsection-players">
                                Diego Ribas, o Menino da Vila Camisa 10
                                </p>
                            </AnimatedScroll>

                            <AnimatedScroll animationClass="animate-hidden">
                                <Player
                                    image={DiegoPlayer}
                                    name="Diego Ribas"
                                    titles="Campeonato Brasileiro 2002 e 2004"                       
                                    position="Meio-Campista"
                                    number="10"
                                    stats="Partidas: 127 | Gols: 38"
                                    life={[
                                           "Diego Ribas, conhecido como um dos 'Meninos da Vila', surgiu como uma das maiores promessas do Santos FC no início dos anos 2000. Com apenas 17 anos, Diego se destacou por sua técnica refinada, visão de jogo apurada e capacidade de comandar o meio-campo com maturidade impressionante.",
                                        "Ao lado de Robinho, Diego foi fundamental para o título do Campeonato Brasileiro de 2002, ajudando a encerrar um jejum de 18 anos sem conquistas nacionais para o Santos. Seu talento e habilidade o levaram a uma carreira internacional de sucesso, mas Diego sempre será lembrado como um ídolo que marcou uma geração no Santos FC."
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

export default Diego;
