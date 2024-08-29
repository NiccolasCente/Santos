//Componetnes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player"; 

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
import Diego2 from "../../../assets/Santos2002/time_2002.jpg";
import Saonsao from "../../../assets/Santos2002/saoxsp.jfif";
import Diego3 from "../../../assets/main3.jpeg";
import SaoGre from "../../../assets/Santos2002/santosxgremio.jpg";
import Pedaladas from "../../../assets/Santos2002/pedalada.jpg";
import BR2002 from "../../../assets/Santos2002/titulo.jpeg";


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
              <br></br>
              <AnimatedScroll animationClass="animate-hidden">
                <h2 className="h2-subsection">O Surgimento de Diego, Robinho, Alex e Elano.</h2>
                <p className="p-subsection-intro">
                  Com graves problemas financeiros e sem nenhuma alternativa para contratar jogadores, eles tiveram de ir para as categorias de base. Emerson Leão, técnico recém-contratado e com um fraco trabalho tanto na seleção brasileira e no Juventude, viu nos garotos da base, uma esperança, esses garotos eram:
                </p>
              </AnimatedScroll>
              <AnimatedScroll animationClass="animate-hidden">
                <Player
                  image={Diego}
                  name="Diego Ribas"
                  titles="Campeonato Brasileiro 2002 e Campeonato Brasileiro 2004"
                  position="Meio-campista"
                  number="10"
                  stats="Partidas: 133 | Gols: 38"
                  life={[
                    "Um habilidoso meia que chutava muito bem de fora da área e armava muito bem o jogo, além de dribles e muito velocidade, estreou no profissional com apenas de 16 anos e com a 10 do Rei Pelé.",
                    "Encerrou sua passagem pelo Santos em 2004, indo para o Porto por 8 milhões de euros."
                  ]}
                />
                </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <Player
                  image={Robinho}
                  name="Robinho"
                  titles="Campeonato Brasileiro 2002 e Campeonato Brasileiro 2004"
                  position="Segundo-Atacante"
                  number="7"
                  stats="Partidas: 182 | Gols: 81"
                  life={[
                    "Conhecido por sua habilidade em driblar adversários com facilidade. Estreou no time principal em 2002 e teve papel fundamental na conquista do título do Campeonato Brasileiro daquele ano.",
                    "Após seu sucesso no Santos, Robinho foi transferido para o Real Madrid em 2005 por 24 milhões de euros, onde continuou sua carreira de destaque no futebol internacional."
                  ]}
                />
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                <Player
                  image={Alex}
                  name="Alex"
                  titles="Campeonato Brasileiro 2002 e Campeonato Brasileiro 2004"
                  position="Zagueiro"
                  number="6"
                  stats="Partidas: 102 | Gols: 20"
                  life={[
                    "Alex foi uma peça fundamental na defesa do Santos, com sua habilidade em interceptar bolas,  marcar gols de falta, principalmente em jogadas de bola parada ajudaram o Peixe a ganhar os títulos brasileiros de 2002 e 2004 .",
                    "Após sua passagem vitoriosa pelo Santos, Alex se transferiu para o Chelsea em 2004 por 12 milhões de euros."
                  ]}
                />
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                <Player
                  image={Elano}
                  name="Elano"
                  titles="Campeonato Brasileiro 2002 e Campeonato Brasileiro 2004"
                  position="Meia-Direita"
                  number="11"
                  stats="Partidas: 212 | Gols: 52"
                  life={[
                    "Elano foi um meio-campista versátil e dinâmico, conhecido por sua capacidade de marcar gols de longa distância, consistência, consiência tática, qualidade defensiva.  ",
                    "Em 2005, após sua excelente performance pelo Santos, Elano foi vendido ao Shakhtar Donetsk da Ucrânia por 7,6 milhões de euros, onde continuou a brilhar no futebol europeu."
                  ]}
                />
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                  <h2 className="h2-subsection">A Campanha do Santos em 2002</h2>
                </AnimatedScroll>
                <AnimatedScroll animationClass="animate-hidden">
                <img src={Diego2} className="img-section" alt="Diego Comemorando 2002" />
                <p className="p-subsection">Diego Comemorando gol contra o São Paulo pelo mata-mata no Morumbi!</p>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">Agora que pincelamos as principais estrelas do time naquele ano, iremos falar um pouco sobre como foi o ano do Santos em 2002. Depois de um torneio RIO-SP fraco, o Santos
                  era forte candidato ao rebaixamento, tanto pelos graves problemas financeiros e por metade do time titular ser de garotos da base com menos de 19 anos.</p>
                <p className="p-subsection">O Santos fez um campeonato brasileiro apenas razoável e se classificou para o mata-mata graças a outros resultados, fazendo com que assim o Santos fosse o último da lista para jogar o mata-mata, e logo de cara, pegaria o São Paulo na Vila Belmiro.</p>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <img src={Saonsao} className="img-section" alt="Sansão na Vila" />
                <p className="p-subsection">Robinho escapando de falta do jogador São Paulino</p>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">No primeiro jogo na Vila Belmiro, o Santos mostrou toda a sua capacidade ofensiva e, com gols de Alberto, 
                  Robinho e Diego, ganhou por 3x1, precisando apenas segurar o resultado no Morumbi. <br></br> <br></br>Mas o Santos não queria apenas segurar o resultado, queria mais,
                   e com mais um show de Diego e Robinho, venceu por 2x1. Essa classificação impressionou a todos na época, já que o São Paulo era, disparado,
                    o melhor time do Brasil naquele momento</p>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <img src={Diego3} className="img-section" alt="Diego provocando SP"/>
                <p className="p-subsection">Clássica comemoração de Diego Ribas contra o São Paulo</p>
              </AnimatedScroll>
              <br></br>

              <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">O próximo desafio do time da baixada era o Grêmio e com mais um show de futebol, ganharam deles com sobras na Vila Belmiro
                   por 3x0 e com mais um show de Robinho, porém no jogo de volta perderam por 1x0, mas já não importava mais, pois no placar agregado ficaria 3x1,
                    e o mais importante, a tão desejada vaga na final. E sonho esse, que parecia impossível para eles no começo do campeonato, depois de 7 anos,
                     o Santos voltava a disputar uma final de brasileiro.</p>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <img src={SaoGre} className="img-section" alt="Santos x Gremio"/>
                <p className="p-subsection">Santos Enfrentando o Grêmio pela semi-final do Brasileiro</p>
              </AnimatedScroll>
              <br></br>

              <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">O útlimo adversário não poderia ser outro, era o Corinthians, um dos maiores rivais do Peixe e com um time que vinha embalado com 2 títulos no ano,
                 <strong style={{color:"#007bff"}}> Copa do Brasil 2002 </strong>e o <strong style={{color: "#007bff"}}>Torneio Rio São Paulo 2002</strong>. Ambos os jogos seriam no Morumbi.
                </p>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <img src={Pedaladas} className="img-section" alt="Pedaladas"/>
                <p className="p-subsection">As famosas 8 pedaladas de Robinho contra o lateral Rogério</p>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">No primeiro jogo, o Santos derrotou o Corinthians por 2x0, com gols de Alberto e Renato. Porém, era cedo demais para comemorar, 
                  pois no jogo de volta, com menos de 1 minuto de jogo, Diego, Camisa 10 e um dos protagonistas do time junto de Robinho, sentiu fortes dores e teve que ser
                   substituido.<br></br><br></br> No entanto, para o azar da torcida corinthiana, tinha um tal de Robinho que, em uma jogada individual, pedalou 8 vezes em cima de Rogério,
                    lance esse que até hoje é o que mais representa essa geração do Santos.</p>

                <p className="p-subsection">A jogada individual das pedaladas originou um pênalti, pênalti que o próprio Robinho cobrou e converteu. Um garoto de apenas 18 anos era,
                   disparado, o melhor jogador daquela edição do Campeonato Brasileiro, marcou gol em todas as partidas do mata-mata, marcou contra o São Paulo, Grêmio e Corinthians.
                   <br></br><br></br> Porém, 3 gols de vantagem sobre o Corinthians eram muito pouco, e mesmo com 3 gols de desvantagem, o time não se abalou e foi para cima, marcando 2 gols, com o placar agregado em 3x2.
                </p>

                <p className="p-subsection">Depois do <strong style={{color: "#007bff"}}>Brasileiro de 1983</strong> e do <strong style={{color:"#007bff"}}>Brasileiro de 1995</strong>, 
                os torcedores santistas, por um momento, ficaram com medo de que, de novo, pela terceira vez,
                   batessem na trave, MAS NÃO, o garoto Robinho não deixou isso acontecer, pegou a bola e iniciou uma jogada pela direita, cruzando para que Elano
                    (outro garoto da base) pudesse marcar aos 43 minutos do segundo tempo: Santos 2x2 Corinthians.
                     <br></br> <br></br>
                    No entanto, Robinho queria mais, e depois de mais uma jogada espetacular, tocou para Léo que, em um chute absurdo, fez com que o Santos fosse
                     Campeão Brasileiro de 2002, com um placar agregado de 5x2. Com muitas doses de drama, o Brasil tinha um novo campeão nacional!
                </p>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <img src={BR2002} className="img-section" alt="Titulo do BR 2002"/>
                <p className="p-subsection">Os Meninos Da Vila Diego e Robinho comemorando o título do Brasileiro de 2002</p>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <h2 className="h2-subsection">O Ano de 2003, O Ano do "Quase"</h2>
              </AnimatedScroll>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Santos2002_2005;
