//Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player"; 
// Componentes CSS
import "../../../assets/styles/SubSection.css";

// Componentes Imagens
// Ano 2002
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
// Ano 2003
import Ano2003 from "../../../assets/Santos2002/2003-poster-Santos-Libertadores-acervo.jpg";
import Oitavas2003 from "../../../assets/Santos2002/elano2003.jpg";
import Semi2003 from "../../../assets/Santos2002/santosSemi2003.png";
import Final2003 from "../../../assets/Santos2002/santos_final_2003.webp";
import BR2003 from "../../../assets/Santos2002/br_2003.jpg";
// Ano 2004
import BR2004 from "../../../assets/Santos2002/br_2004.jpg";
import Robinho2004 from "../../../assets/Santos2002/robinho2004.jpg";
import Ricardinho2004 from "../../../assets/Santos2002/ricardinho.jpg";
import Basilio2004 from "../../../assets/Santos2002/basilio.jpg";
import Deivid2004  from "../../../assets/Santos2002/deivid.jpg";
import Titulo2004 from "../../../assets/Santos2002/brasileiro2004titulo.jpg";
// Ano 2005
import Robinho2005 from "../../../assets/Santos2002/robinho2005.jpg";
import DiegoRobinho from "../../../assets/Santos2002/DiegoRobinho.jpg"

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
                <p className="p-subsection">Escalação do time titular na final do Brasileiro de 2002!</p>
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
                <p className="p-subsection">Os Meninos da Vila comemorando um gol</p>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">Após anos e anos de marasmo, aquele time que encantou o Brasil na década de 60 com O Rei Pelé e seu parceiro Coutinho, na década de 90 e começo de 2000, não passava de um clube pobre e que não disputava nada.</p>
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
                    "Um habilidoso meia que chutava muito bem de fora da área e armava muito bem o jogo, além de dribles e muito velocidade, estreou no profissional com apenas 16 anos e com a 10 do Rei Pelé.",
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
                  <h2 className="h2-subsection">Antes do Brasileiro</h2>
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
                  <h2 className="h2-subsection">O Histórico Mata-Mata</h2>
                </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">No primeiro jogo na Vila Belmiro, o Santos mostrou toda a sua capacidade ofensiva e, com gols de Alberto, 
                  Robinho e Diego, ganhou por 3x1, precisando apenas segurar o resultado no Morumbi. <br></br> <br></br>Mas o Santos não queria apenas segurar o resultado, queria mais,
                   e com mais um show de Diego e Robinho, venceu por 2x1. Essa classificação impressionou a todos na época, já que o São Paulo era, disparado,
                    o melhor time do Brasil naquele momento.</p>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <img src={Diego3} className="img-section" alt="Diego provocando SP"/>
                <p className="p-subsection">Clássica comemoração de Diego Ribas contra o São Paulo</p>
              </AnimatedScroll>
              <br></br>

              <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">O próximo desafio do time da baixada era o Grêmio e com mais um show de futebol, ganharam deles com sobras na Vila Belmiro
                   por 3x0 e com mais um show de Robinho, porém no jogo de volta perderam por 1x0, mas já não importava mais, pois no placar agregado ficaria 3x1,
                    e o mais importante, a tão desejada vaga na final. 
                    <br></br>
                    <br></br>
                    E sonho esse, que parecia impossível para eles no começo do campeonato, depois de 7 anos,
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

              <AnimatedScroll animationClass="animtae-hidden">
                <h2 className="h2-subsection">A Grande Final Do Brasileiro 2002</h2>
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
                    <strong style={{color: "#007bff"}}> Campeão Brasileiro de 2002</strong>, com um placar agregado de 5x2. Com muitas doses de drama, o Brasil tinha um
                     novo campeão nacional!
                </p>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <img src={BR2002} className="img-section" alt="Titulo do BR 2002"/>
                <p className="p-subsection">Os Meninos Da Vila Diego e Robinho comemorando o título do Brasileiro de 2002</p>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <h2 className="h2-subsection">O Ano de 2003, O Ano do "Quase"</h2>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                <img src={Ano2003} className="img-section" alt="Elenco 2003"/>
                <p className="p-subsection">Time Titular do Santos na Final da Taça Libertadores da América</p>
              </AnimatedScroll>
              <br></br>

              <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">Depois de um ano de 2002 mágico, o Santos depois de décadas voltava a disputar uma Libertadores. O time de Diego e Robinho
                   continuava impressionando a todos, conseguindo 4 vitórias e 2 empates na fase de grupos.</p>
              </AnimatedScroll>
     
              <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">O primeiro desafio do time da baixada pelo mata-mata da Libertadores era contra O Nacional(URU), depois de um 4x4 no primeiro jogo
                  , em Montevidéu, e um 2x2 no Brasil, o time passava paras as quartas em uma disputa de pênalti.</p>
              </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden">
                  <img src={Oitavas2003} className="img-section" alt="Libertadores Oitavas  2003"/>
                  <p className="p-subsection">Santos jogando contra o Nacional do Uruguai pela Oitavas de final da Libertadores</p>
                  </AnimatedScroll>

              <AnimatedScroll animationClass="animate-hidden"> 
                  <p className="p-subsection">Pelas quartas de final, enfrentaram o Cruz Azul. O time da baixada empatou em 2x2 no México, e venceu na Vila Belmiro por 1x0, gol de Robinho.
                  </p>
               </AnimatedScroll>  

               <AnimatedScroll animationClass="animate-hidden">
                  <img src={Semi2003} className="img-section" alt="SemiFinal Libertadores 2003" />
               </AnimatedScroll> 


               <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Diego sendo caçado em campo pela SemiFinal da Libertadores 2003</p>
                  <p className="p-subsection"> Nas semi finais, enfrentaram o Independiente Medellín(COL), com o resultado de 1x0 na Vila, e 3X2, fora.</p>
                  <p className="p-subsection">Infelizmente, para o azar dos Meninos da Vila(que vinham fazendo história, afinal uma equipe só de garotos chegar em uma Final de Taça Libertadores, com um time QUE apesar de grande, estava há 19 anos sem disputar a competição, por si só já era um grande feito),
                     eles pegariam o destemido BOCA JUNIORS na grande final.</p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <h2 className="h2-subsection">A Final da Taça Libertadores da América 2003</h2>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                 <img src={Final2003} className="img-section" alt="Final da Libertadores da América"/>
                 <p className="p-subsection">Diego em campo pela Final da Libertadores 2003</p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">As partidas da Grande Final, seriam respectivamente na La Bombonera, pelo jogo de ida, e no Morumbi, pelo jogo de volta. O Santos, que até então não 
                    sabia o que era o gosto da derrota naquela Libertadores, conhecia pela primeira vez ela, mas infelizmente no pior momento, logo na final.
                    <br></br>
                    <br></br>
                     O Boca Juniors vencia em casa por 2x0. No Morumbi, O Santos até começou melhor, mas perdeu oportunidades e viu ruir o sonho do TRI, 3x1, no Morumbi.
                      Boca Juniors, o time que ousou tirar uma Libertadores de Diego e Robinho.</p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <h2 className="h2-subsection">A Tentativa de Recomposição no Brasileirão</h2>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <img src={BR2003} className="img-section" alt="Recomposição no BR"></img>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                 <p className="p-subsection">Robinho em um jogo Válido pelo Brasileiro 2003</p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Depois do frustrante vice para o Boca Juniors, o Santos não teve forças para alcançar o Cruzeiro de Alex, afinal focaram na Libertadores e
                     deixaram o Brasileiro de lado, campeonato esse que era o primeiro em pontos corridos na história.</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">O time de Alex venceu com folga e mais uma vez o Santos amargurava um vice-campeonato. Infelizmente o grito de campeão ficava intalado mais uma vez. 
                    Triste, pois esse em minha opinião é o melhor time da história do Santos, depois de Pelé e companhia.
                    <br></br> <br></br>
                     A única coisa que deixava a desejar neste elenco
                     era a inexperiência dos jogadores, mas infelizmente este foi o fator que vez o Santos amargurar 2 vices no ano.</p>   
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <h2 className="h2-subsection"> O Bi Campeonato Brasileiro</h2>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <img src={BR2004} className="img-section" alt="Elenco de 2004" />
                 </AnimatedScroll>
                 
                 <AnimatedScroll animationClass="animate-hidden"> 
                  <p className="p-subsection">Elenco Vencedor do Brasileiro 2004</p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">O ótimo trabalho feito pelo técnico Emerson Leão nos anos de 2002 e 2003 começou a desmoronar em 2004, 
                    demonstrando declínios severos logo no <strong style={{color: "#007bff"}}>Campeonato Paulista de 2004</strong>, onde o time tomou 4 x 0 do São Caetano 
                    em plena Vila Belmiro, em uma semifinal do Campeonato Paulista.
                 </p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">A isso sucedeu uma crise de relacionamentos, que explodiu na derrota por 4 a 2 contra a LDU, nas oitavas de final da 
                    Libertadores. O técnico, em comum acordo, se desligou do time. O técnico Vanderlei Luxemburgo foi contratado para apagar o incêndio deixado 
                    por Leão e fazer o time voltar a desempenhar bem.
                 </p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animation-hidden">
                  <p className="p-subsection">Até conseguiram reverter o placar e se classificar para as quartas de final, porém, 
                    o favorito Santos perdeu o confronto para o surpreendente Once Caldas!
                  </p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Depois de uma campanha decepcionante na <strong style={{color:"#007bff"}}>Libertadores 2004</strong>, sendo eliminados para o surpreendente Once Caldas
                    (clube esse que ganhou de Santos, São Paulo e do Boca Juniors na grande final), o Santos se voltou todo para o campeonato brasileiro daquele ano.</p>

                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <img src={Robinho2004} className="img-section" alt="Robinho 2004"></img>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Robinho comemorando um gol</p>

                 </AnimatedScroll>
                 <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Robinho tinha apenas um defeito entre 2002-2003: não era finalizador. O menino da vila construía jogadas maravilhosas, 
                    costurava defesas inteiras, mas pecava na finalização.
                    <br></br>
                    <br></br>
                    Este foi exatamente o ponto que Vanderlei Luxemburgo corrigiu, Robinho naquele ano mais uma vez seria protagonista, 
                    porém marcando muito mais gols.
                    </p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Como dito anteriormente o Santos foi eliminado pelo Once Caldas, e se voltou completamente para o Brasileiro daquele ano
                     e infelizmente com algumas peças a menos como: Diego Ribas, Alex e Paulo Almeida, que tinham sido vendidos logo após a eliminação. 
                     <br></br>
                     <br></br>
                     Isso fez com que o time no começo tivesse alguns problemas na defesa e na criação, porém o técnico Luxemburgo arrumou isso fazendo um jogo coletivo
                      e rápido.</p>

                 </AnimatedScroll>
                 <AnimatedScroll animationClass="animate-hidden">
                 <img src={Ricardinho2004} className="img-section" alt="Ricardinho"/>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Ricadinho, contratação de 2004 para substituir o Meia Diego</p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">As principais contratações desse ano para substituir as peças perdidas foram: Deivid, Basílio e Ricardinho.
                    <br></br>
                    Deivid vindo por empréstimo da França, Basílio veio de um time da série B, ambos compondo um ótimo ataque na ausência de Robinho, e por último
                    Ricardinho, o meia cobrador de faltas que veio da Inglaterra!
                  </p>

                 </AnimatedScroll>
                 <img src={Basilio2004} className="img-section" alt="Basilio"/>

                 <AnimatedScroll animationClass="animate-hidden">
                 <p className="p-subsection">Basílio, o amuleto da Vila, mesmo sendo reserva marcou 15 gols no campeonato!</p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                 <img src={Deivid2004} className="img-section" alt="Deivid"/>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                 <p className="p-subsection">Deivid comemorando um gol pelo Brasileiro 2004</p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                 <p className="p-subsection">Deivid, o parceiro de ataque de Robinho, foi artilheiro do time ao lado do próprio com 22 gols no campeonato!
                  Deivid teve 9 gols mal anulados neste campeonato e mesmo assim foi artilheiro do time!
                 </p>

                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Até a 33.º rodada, o principal rival do Santos era o Athlético-PR que estava na liderança brigando para ganhar o título. 
                    Athlético-PR esse que há alguns anos tinha sido Campeão<strong style={{color:"#007bff"}}> Brasileiro de 2001</strong>, e depois vice da  
                    <strong style={{color:"#007bff"}}> Libertadores 2005</strong>.
                  </p>
                </AnimatedScroll>
                <p className="p-subsection">O Santos lutou pelo titulo até o último jogo, que foi contra o Vasco, o Santos ganhou por 2x1, mais uma vez o Santos levantava um caneco para a 
                  alegria da torcida, com Robinho e Deivid tendo anotados 22 gols cada, apesar dos problemas de arbitragem, sequestro da mãe de Robinho e fora da Vila Belmiro,
                   o Santos ganhava seu 
                  oitavo título brasileiro.</p>
                 <AnimatedScroll animationClass="animate-hidden">
                 <img src={Titulo2004} className="img-section" alt="Titulo 2004"/>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Elenco do Santos comemorando mais um caneco levantado</p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <h2 className="h2-subsection"> 2005, O fim da Era Diego e Robinho</h2>

                 </AnimatedScroll>
                 
                 <AnimatedScroll animationClass="animate-hidden">
                 <img src={Robinho2005} className="img-section" alt="Robinho apresentação real madrid"/>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                 <p className="p-subsection"> Robinho em sua apresentação no Real Madrid
                </p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Depois de mais um caneco levantado, convocações constantes para a seleção brasileira e  atuações cada vez melhores era 
                    impossível para o Santos segurar sua maior joia, 
                    Robinho. Depois de muitas especulações, 
                    o menino da vila foi para o Real Madrid ser o camisa 10.</p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">
                  Apesar de Diego e Robinho não terem correspondido as expectativas de serem os melhores jogadores do mundo, tiveram carreiras bem sólidas no Brasil e Europa. 
                  O legado que eles deixaram foram o da alegria e ousadia que tanto faltava no Santos.
                  <br></br>
                  <br></br>
                    Uma geração gigante em termos de titulos e futebol bem jogado. Se não existisse Diego e Robinho,
                   possivelmente nunca veriamos Neymar e Ganso.
                  </p>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <img src={DiegoRobinho} className="img-section" alt="Diego e Robinho em treino pelo Santos"/>
                 </AnimatedScroll>

                 <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Diego e Robinho em um treino pelo Santos</p>
                 </AnimatedScroll>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Santos2002_2005;
