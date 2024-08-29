import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
// Componentes CSS
import "../Santos2002/Santos2002.css";
import "../../../assets/styles/SubSection.css";

// Componentes Imagens
import Time2002 from "../../../assets/Santos2002/2002_time.webp";
import TimeFoto01 from "../../../assets/Santos2002/comemorando.png";
import Diego from "../../../assets/Santos2002/diego_santos.webp";
import Robinho from "../../../assets/Santos2002/robinho_2002.webp";
import Alex from "../../../assets/Santos2002/alex.jpg";
import Elano from "../../../assets/Santos2002/elano.jpg";

const Santos2002_2005 = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`meninos-da-vila-2002-2005 ${theme}`}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="text-center">
              <AnimatedScroll animationClass="animate-hidden">
                <h1 className="h1-subsection">Geração Diego e Robinho (2002-2005)</h1>
              </AnimatedScroll>
              <AnimatedScroll animationClass="animate-hidden">
                <img src={Time2002} className="img-section" alt="Time de 2002" />
              </AnimatedScroll>
              <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">Escalação do time titular na final de 2002!</p>
              </AnimatedScroll>
              <AnimatedScroll animationClass="animate-hidden">
                <h4 className="h4-subsection">Títulos Ganhos:</h4>
                <p className="p-subsection">Campeonato Brasileiro 2002</p>
                <p className="p-subsection">Campeonato Brasileiro 2004</p>
              </AnimatedScroll>
              <AnimatedScroll animationClass="animate-hidden">
                <h2 className="h2-subsection">
                  Antes do raio cair novamente no mesmo lugar.<br />
                  <span className="upercase">PELA SEGUNDA VEZ!</span>
                </h2>
              </AnimatedScroll>
              <AnimatedScroll animationClass="animate-hidden">
                <img src={TimeFoto01} className="img-section" alt="Time Comemorando"/>
              </AnimatedScroll>
              <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">Após anos e anos de marasmo, aquele time que encantou o Brasil na década de 60 com O Rei Pelé e seu parceiro Coutinho, na década de 2000, não passava de um clube pobre e que não disputava nada.</p>
                <p className="p-subsection">Pelo fato de terem comprado jogadores caros e que não renderam nenhum título e consequentemente dinheiro, o Santos começou a entrar em falência, fazendo com que assim, voltassem a usar a única coisa que deu sucesso para o clube em seus 110 anos(90 na época), A BASE.</p>
              </AnimatedScroll>
              <AnimatedScroll animationClass="animate-hidden">
                <h2 className="h2-subsection">O Surgimento de Diego, Robinho, Alex e Elano.</h2>
                <p className="p-subsection-intro">
                  Com graves problemas financeiros e sem nenhuma alternativa para contratar jogadores, eles tiveram de ir para as categorias de base. Emerson Leão, técnico recém-contratado e com um fraco trabalho tanto na seleção brasileira e no Juventude, viu nos garotos da base, uma esperança, esses garotos eram:
                </p>
              </AnimatedScroll>
              <AnimatedScroll animationClass="animate-hidden">
                <ul className="player-list">
                  <li className="player-info">
                    <div className="player-image">
                      <img src={Diego} className="img-section-jogadores" alt="Diego Ribas" />
                    </div>
                    <div className="player-text">
                      <h3 className="player-h">Diego Ribas</h3>
                      <h4 className="player-titles">Campeonato Brasileiro 2002 e Campeonato Brasileiro 2004</h4>
                      <div className="player-details">
                        <div className="player-position">Meio-campista</div>
                        <div className="player-number">Número: 10</div>
                      </div>
                      <h5 className="player-stats">Partidas: 133 | Gols: 38</h5>
                      <p className="player-life">Um habilidoso meia que chutava muito bem de fora da área e armava muito bem o jogo, além de dribles e muito velocidade, estreou no profissional com apenas de 16 anos e com a 10 do Rei Pelé.<br /></p>
                      <p className="player-life">Diego Ribas foi um dos principais jogadores do time durante o período de 2002 a 2004, contribuindo significativamente para as vitórias e desempenhando um papel crucial em vários campeonatos.<br /></p>
                      <p className="player-life">Encerrou sua passagem pelo Santos em 2004, indo para o Porto por 8 milhões de euros.</p>
                    </div>
                  </li>
                </ul>
              </AnimatedScroll>
              <AnimatedScroll animationClass="animate-hidden">
                <ul className="player-list">
                  <li className="player-info">
                    <div className="player-image">
                      <img src={Robinho} className="img-section-jogadores" alt="Robinho" />
                    </div>
                    <div className="player-text">
                      <h3 className="player-h">Robinho</h3>
                      <h4 className="player-titles">Campeonato Brasileiro 2002 e Campeonato Brasileiro 2004</h4>
                      <div className="player-details">
                        <div className="player-position">Segundo-Atacante</div>
                        <div className="player-number">Número: 7</div>
                      </div>
                      <h5 className="player-stats">Partidas: 182 | Gols: 81</h5>
                      <p className="player-life">Conhecido por sua habilidade em driblar adversários com facilidade. Estreou no time principal em 2002 e teve papel fundamental na conquista do título do Campeonato Brasileiro daquele ano.</p>
                      <p className="player-life">Robinho continuou a brilhar em 2004, liderando o ataque do time e ajudando o Santos a conquistar mais um Campeonato Brasileiro.</p>
                      <p className="player-life">Após seu sucesso no Santos, Robinho foi transferido para o Real Madrid em 2005 por 24 milhões de euros, onde continuou sua carreira de destaque no futebol internacional.</p>
                      </div>
                  </li>
                </ul>
                <AnimatedScroll animationClass="animate-hidden">
                <ul className="player-list">
                  <li className="player-info">
                    <div className="player-image">
                      <img src={Alex} className="img-section-jogadores" alt="Alex" />
                    </div>
                    <div className="player-text">
                      <h3 className="player-h">Alex</h3>
                      <h4 className="player-titles">Campeonato Brasileiro 2002 e Campeonato Brasileiro 2004</h4>
                      <div className="player-details">
                        <div className="player-position">Zagueiro</div>
                        <div className="player-number">Número: 6</div>
                      </div>
                      <h5 className="player-stats">Partidas: 102 | Gols: 20</h5>
                      <p className="player-life">Alex foi uma peça fundamental na defesa do Santos, com sua habilidade em interceptar bolas e liderar a linha defensiva.</p>
                      <p className="player-life">Além de sua solidez defensiva, Alex era conhecido por sua habilidade em marcar gols de falta, principalmente em jogadas de bola parada. Seu desempenho constante ajudou o Santos a conquistar os títulos de 2002 e 2004.</p>
                      <p className="player-life">Após sua passagem vitoriosa pelo Santos, Alex se transferiu para o Chelsea em 2004 por 12 milhões de euros.</p>
                      </div>
                  </li>
                </ul>
              </AnimatedScroll>
              <AnimatedScroll animationClass="animate-hidden">
                <ul className="player-list">
                  <li className="player-info">
                    <div className="player-image">
                      <img src={Elano} className="img-section-jogadores" alt="Elano" />
                    </div>
                    <div className="player-text">
                      <h3 className="player-h">Elano</h3>
                      <h4 className="player-titles">Campeonato Brasileiro 2002 e Campeonato Brasileiro 2004</h4>
                      <div className="player-details">
                        <div className="player-position">Meia-Direita</div>
                        <div className="player-number">Número: 11</div>
                      </div>
                      <h5 className="player-stats">Partidas: 212 | Gols: 52</h5>
                      <p className="player-life">Elano foi um meio-campista versátil e dinâmico, conhecido por sua capacidade de marcar gols de longa distância e sua precisão em cobranças de falta. Ele começou a se destacar no Santos durante a campanha vitoriosa do Campeonato Brasileiro de 2002, sendo um dos principais articuladores do time.</p>
                      <p className="player-life"> Sua consistência, consiência tática, qualidade defensiva e liderança em campo foram fundamentais para o sucesso do time em 2004, ajudando o Santos a conquistar mais um título brasileiro.</p>
                      <p className="player-life">Em 2005, após sua excelente performance pelo Santos, Elano foi vendido ao Shakhtar Donetsk da Ucrânia por 7,6 milhões de euros, onde continuou a brilhar no futebol europeu.</p>
                      </div>
                  </li>
                </ul>
              </AnimatedScroll>
              </AnimatedScroll>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Santos2002_2005;
