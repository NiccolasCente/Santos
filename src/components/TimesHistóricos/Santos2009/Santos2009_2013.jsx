//Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../../common/AnimatedScroll/AnimatedScroll";
import Player from "../../common/Player/Player"; 
// Componentes CSS
import "../../../assets/styles/SubSection.css";

//Componentes Imagens
//Ano 2009
import Neymar2009 from "../../../assets/Santos2009/Neymar-Jr-2009.webp";
import Ganso2009 from "../../../assets/Santos2009/ganso_2009.jpg";
import Time2009 from "../../../assets/Santos2009/elenco2009.jpg";
import NeyR9 from "../../../assets/Santos2009/neymarronaldo.jpg";
import NeyMadson from "../../../assets/Santos2009/NeyMadson.jpg";
import Laor2009 from "../../../assets/Santos2009/Laor.webp";
// Ano 2010
import Time2010 from "../../../assets/Santos2009/timecdb2010.jpg";
import Neymar2010 from "../../../assets/Santos2009/Neymar2010.jpg";
import LaorRobinho from "../../../assets/Santos2009/LaorRobinho.jpg";
import NeymarTime from "../../../assets/Santos2009/Neymar.jpg";
import Ganso2010 from "../../../assets/Santos2009/Ganso2010.jpg";
import Rafael2010 from "../../../assets/Santos2009/Rafael2010.webp";
import Andre2010 from "../../../assets/Santos2009/Andre2010.jpg";
import Ataque2010 from "../../../assets/Santos2009/ataque2010.jpg";
import Sansao2010 from "../../../assets/Santos2009/semipaulista.jpg";
import Wesley from "../../../assets/Santos2009/wesley.jpg";
import NeyFinalPaulista2010 from "../../../assets/Santos2009/NeyFinalPaulista2010.jpg";
import TaçaPaulista2010 from "../../../assets/Santos2009/taçaPaulista2010.jpg";
import Danca from "../../../assets/Santos2009/danca.jpg";
import SanGreCDB from "../../../assets/Santos2009/sangrecbd.jpg";
import RobinhoCopaDoMundo from "../../../assets/Santos2009/copa do mundo.jpg";
import CopaDoBrasilTitulo from "../../../assets/Santos2009/cdb2010.webp";
import Escalacao2010 from "../../../assets/Santos2009/escalação2010.jpg";
import Danilo2010 from "../../../assets/Santos2009/danilo2010.jfif";
import NeymarDorival  from "../../../assets/Santos2009/NeymarDorival.jpg";
import NeymarGansoSelecao  from "../../../assets/Santos2009/NeymarGansoSelecao.webp";
// Ano 2011
import NeymarGanso2011 from "../../../assets/Santos2009/NeymarGanso2011.webp";
import Muricy2011 from "../../../assets/Santos2009/Muricy2011.webp";
import Paulista2011 from "../../../assets/Santos2009/Paulista2011.webp";
import Ganso2011 from "../../../assets/Santos2009/Ganso2011.jpg"
import NeymarLibertaQuartas2011 from "../../../assets/Santos2009/NeymarLibertaQuartas2011.avif";
import NeymarSemiLiberta2011 from "../../../assets/Santos2009/NeymarSemiLiberta2011.jpg";
import NeymarFinal2011 from "../../../assets/Santos2009/NeymarFinal2011.webp";
import PeleLeo from "../../../assets/Santos2009/PeléLéo.webp";
import Escalacao2011 from "../../../assets/Santos2009/escalação2011.jpg";
import NeymarPuskas from "../../../assets/Santos2009/NeymarPuskas.jpg";
import NeymarFlamengo from "../../../assets/Santos2009/NeymarFlamengo.jpg";
import NeymarBorges from "../../../assets/Santos2009/NeymarBorges.jpg";
import NeymarMessi from "../../../assets/Santos2009/NeymarMessi.jpg";
// Ano 2012
import NeymarGanso from "../../../assets/Santos2009/NeymarGanso2012.jpg";
import NeymarSanSao2012 from "../../../assets/Santos2009/NeymarSanSão2012.jpg";
import NeymarPiris2012 from "../../../assets/Santos2009/NeymarPiris2012.jpg";
import NeymarGansoElano2012 from "../../../assets/Santos2009/NeymarGansoElano2012.webp"
import NeymarInternacional2012 from "../../../assets/Santos2009/NeymarInternacional2012.webp"
import NeymarOitavas2012 from "../../../assets/Santos2009/NeymarOitavas2012.jpg";
import RafaelCabral from "../../../assets/Santos2009/RafaelCabral.jpg";


const Santos2009_2013 = () => {
    const { theme } = useContext(ThemeContext);
  
    return (
      <section className={`meninos-da-vila-2009-2013 ${theme}`}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <div className="text-center">
                <AnimatedScroll animationClass="animate-hidden">
                  <h1 className="h1-subsection">Geração Neymar e Ganso (2009-2013)</h1>
                </AnimatedScroll>
                <AnimatedScroll animationClass="animate-hidden">
                   <img src={Time2010} className="img-section" alt="Time de 2010" /> 
                </AnimatedScroll>
                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Escalação do time titular na final do Campeonato Paulista 2010!</p>
                </AnimatedScroll>
                <AnimatedScroll animationClass="animate-hidden">
                  <h4 className="h4-subsection">Títulos Ganhos:</h4>
                  <p className="p-subsection">Campeonato Paulista 2010</p>
                  <p className="p-subsection">Campeonato Paulista 2011</p>
                  <p className="p-subsection">Campeonato Paulista 2012</p>
                  <p className="p-subsection">Copa do Brasil 2010</p>
                  <p className="p-subsection">Copa Libertadores da América 2011</p>
                  <p className="p-subsection">Recopa Sul-Americana 2012</p>
                </AnimatedScroll>
                <AnimatedScroll animationClass="animate-hidden">
                  <h2 className="h2-subsection">
                    <span className="upercase">O Raio cai pela Terceira Vez no mesmo Lugar!</span>
                  </h2>
                </AnimatedScroll>
                <AnimatedScroll animationClass="animate-hidden">
                   <img src={Neymar2009} className="img-section" alt="Neymar o novo Raio"/>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                 <p className="p-subsection">Neymar, o maior jogador do Santos no Século XXI</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Após os anos mágicos entre 2002 e 2005, com 2 títulos brasileiros e 1 vice-campeonato de Libertadores, o Santos passava por uma transição em 2009.</p>
                  <p className="p-subsection">A equipe apesar de bons resultados em 2006 e 2007 com o bi-campeonato do Paulista, vice-campeonato do <strong style={{color:"#007bff"}}> Brasileiro 2007 </strong>
                    e semi-final da  <strong style={{color:"#007bff"}}>Libertadores 2007</strong>,
                    sofria uma crise dentro e fora de campo, com problemas de dinheiro e quase sendo rebaixado em 2008.
                 </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">A  solução que tentaram encontrar para mudar a situação do time em 2009 foi subir da base a maior promessa do mundo na época, <span>Neymar Jr</span>.</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Outra solução encontrada foi dar mais respaldo para a até então promessa Paulo Henrique de Chagas Lima, o Ganso.</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                   <img src={Ganso2009} className="img-section" alt="PH Ganso"/>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Ganso em um treino pelo Santos em 2009</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection">O Ano de 2009</h2>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                   <img src={Time2009} className="img-section" alt="Elenco do Santos em 2009"/>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Elenco do Santos treinando em 2009</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                <h2 className="h2-subsection">O Campeonato Paulista 2009</h2>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> No <strong style={{color:"#007bff"}}>Campeonato Paulista de 2009</strong>, o Santos teve uma campanha impressionante (já que tinha um time limitado), indo até a final. No entanto,
                      enfrentaram o Corinthians, que contava com o estrelato de Ronaldo Fenômeno. 
                    <br></br>
                     <br></br>
                    Apesar de uma luta valente e uma campeonato
                     notável, o Santos acabou ficando com o vice-campeonato após perder para o Corinthians na final.
                     </p>
                </AnimatedScroll>

                <AnimatedScroll>
                 <p className="p-subsection">Inclusive foi nesse jogo o lendário gol de cobertura de Ronaldo Fenômeno em plena Vila Belmiro. </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeyR9} className="img-section" alt="Neymar e R9 na final do paulista 2009"/>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                 <p className="p-subsection">Neymar e R9 se cumprimentando na final do paulista 2009. </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                <h2 className="h2-subsection">Desafios no Campeonato Brasileiro</h2>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeyMadson} className="img-section" alt="Neymar e Madson pelo Brasileiro 2009"/>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">Neymar e Madson pelo Brasileiro 2009. </p>
                </AnimatedScroll>


                <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">No <strong style={{color:"#007bff"}}>Campeonato Brasileiro de 2009</strong>, o Santos enfrentou uma temporada cheia de dificuldades. A equipe passou por uma crise
                que a colocou em risco de rebaixamento. O desempenho irregular e a pressão intensa tornaram a luta pela permanência na
                elite do futebol brasileiro extremamente difícil. </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection"> Neymar foi crucial para evitar o rebaixamento. Com sua habilidade e determinação, ele marcou gols e deu assistências importantes em momentos
            decisivos, salvando o Santos da queda para a segunda divisão. Sua atuação foi um dos principais fatores para a recuperação
            da equipe durante a temporada. </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">Apesar das dificuldades e da luta para evitar o rebaixamento, 2009 foi um ano revelador para o Santos. Com o talento de Neymar
                e Ganso, a equipe mostrou seu potencial e estabeleceu uma base sólida para o futuro. Mal sabiam eles o que 2010 reservava,
                que se mostraria um ano ainda mais emocionante e promissor para o clube. </p>
                </AnimatedScroll>

                <AnimatedScroll  animationClass="animate-hidden">
                <h2 className="h2-subsection">Reestruturação na Diretoria</h2>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                   <img src={Laor2009} className="img-section" alt="Laor 2009"/>
                </AnimatedScroll>

                <AnimatedScroll  animationClass="animate-hidden">
                <p className="p-subsection">Presidente eleito em 2009 foi o Laor</p>
                </AnimatedScroll>

                <AnimatedScroll  animationClass="animate-hidden">
                <p className="p-subsection">Com as crises tanto dentro quanto fora de campo, a gestão Marcelo Teixeira não aguentou e teve que ver Laor ganhar a presidência.</p>
                </AnimatedScroll>

                <AnimatedScroll  animationClass="animate-hidden">
                <p className="p-subsection">Algo inédito já que ele estava no poder desde os anos 90.</p>
                </AnimatedScroll>
                
                <AnimatedScroll  animationClass="animate-hidden">
                <h2 className="h2-subsection">O Ano de 2010, o ano MÁGICO</h2>
                </AnimatedScroll>
                

                <AnimatedScroll animationClass="animate-hidden">
                   <img src={Neymar2010} className="img-section" alt="Neymar 2010"/>
                </AnimatedScroll>

                <AnimatedScroll  animationClass="animate-hidden">
                <p className="p-subsection">Neymar pela final do Campeonato Paulista</p>
                </AnimatedScroll>

                <AnimatedScroll  animationClass="animate-hidden">
                <p className="p-subsection">Como dito anteriormente, Laor ganhou a presidência e desde cedo queria mostrar negócio e logo de cara contratou por empréstimo
                    Robinho, que vinha do Manchester City, da Inglaterra e precisava performar para ser convocado para a <strong style={{color:"#007bff"}}>Copa do Mundo de 2010</strong>.
                </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                   <img src={LaorRobinho} className="img-section" alt="Laor e Robinho"/>
                </AnimatedScroll>

                <AnimatedScroll  animationClass="animate-hidden">
                <p className="p-subsection">Laor e Robinho em 2010</p>
                </AnimatedScroll>

                <AnimatedScroll  animationClass="animate-hidden">
                <p className="p-subsection">Além de Robinho, foi contratado o volante Arouca, o zagueiro Durval, a volta por empréstimo de Wesley e subiram da base daquele ano:
                    Rafael Cabral e Alan Patrick.  </p>
                </AnimatedScroll>

                <AnimatedScroll  animationClass="animate-hidden">
                <p className="p-subsection"> Para comandar essa verdadeira seleção cheia de jovens promessas, foi contratado o técnico Dorival Júnior, que
                    tinha acabado de subir com o Vasco para a série A. </p>
                </AnimatedScroll>

                <AnimatedScroll  animationClass="animate-hidden">
                <p className="p-subsection"> Ninguém esperava que um punhado de jovens talentosos e jogadores experientes praticariam o esporte mais vistoso 
                    do futebol brasileiro no século! E esses jogadores eram: </p>
                </AnimatedScroll>
                <br></br>
        
                <AnimatedScroll animationClass="animate-hidden">
                  <Player
                    image={NeymarTime}
                    name="Neymar Jr."
                    titles="Campeonato Paulista 2010, 2011 e 2012"
                    titles2 = "Copa do Brasil 2010"
                    titles3 ="Copa Libertadores da América 2011"
                    titles4 ="Recopa Sul-Americana 2012"
                    position="Ponta-Esquerda"
                    number="11"
                    stats="Partidas: 230 | Gols: 138"
                    life={[
                        "Neymar Jr. é um dos jogadores mais talentosos e habilidosos da sua geração. Com uma incrível capacidade de driblar adversários e uma precisão impressionante nos chutes, ajudando-o a conquistar diversos títulos importantes, incluindo a Copa do Brasil e Copa Libertadores da América.",
                        " Em 2013, ele encerrou sua trajetória no Santos e transferiu-se para o Barcelona por 88 milhões de euros. No Santos, Neymar tornou-se um dos maiores ídolos da história do clube, deixando uma marca indelével no coração dos torcedores."
                      ]}          
                  />
                  </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <Player
                    image ={Ganso2010}
                    name="PH Ganso"
                    titles="Campeonato Paulista 2010, 2011 e 2012"
                    titles2 = "Copa do Brasil 2010"
                    titles3 ="Copa Libertadores da América 2011"
                    titles4 ="Recopa Sul-Americana 2012"
                    position="Meio-Campo"
                    number="10"
                    stats="Partidas: 162 | Gols: 36"
                    life={[
                      "Paulo Henrique Ganso, conhecido por sua visão de jogo excepcional e habilidade de criar jogadas com precisão, estreou no time principal do Santos em 2008. Com sua técnica refinada e capacidade de controlar o meio-campo, foi fundamental para as conquistas do Campeonato Paulista e da Copa Libertadores da América.",
                      "Após não cumprir as expectativas de ser um Craque e ir para a Europa, Ganso foi transferido para o São Paulo em 2012 por 8 milhões de euros, onde continuou sua carreira de destaque."
                    ]}
                  />
                  </AnimatedScroll>
  
                  <AnimatedScroll animationClass="animate-hidden">
                  <Player
                    image ={Rafael2010}
                    name="Rafael Cabral"
                    titles="Campeonato Paulista 2010, 2011 e 2012"
                    titles2 = "Copa do Brasil 2010"
                    titles3 ="Copa Libertadores da América 2011"
                    titles4 ="Recopa Sul-Americana 2012"
                    position="Goleiro"
                    number="6"
                    stats="Partidas: 190"
                    life={[
                        "Rafael Cabral foi um goleiro crucial para o Santos FC, conhecido por suas excelentes habilidades de reação e segurança nos pênaltis. Iniciou sua carreira profissional no clube e rapidamente se destacou com suas atuações consistentes e importantes, ajudando o time a conquistar títulos.",
                        "Durante sua passagem pelo Santos, Rafael se consolidou como um dos melhores goleiros do país. Em 2013, após sua notável contribuição para o sucesso do clube, transferiu-se para o Napoli por 5 milhões de euros em uma negociação que marcou o início de uma nova fase em sua carreira europeia."
                      ]}
                  />
                  </AnimatedScroll>

  
                  <AnimatedScroll animationClass="animate-hidden">
                  <Player
                   image={Andre2010}
                   name="André"
                   titles="Campeonato Paulista 2010"
                   titles2="Copa do Brasil 2010"
                   titles4="Recopa Sul-Americana 2012"
                   position="Centroavante"
                   number="9"
                   stats="Partidas: 94 | Gols: 46"
                   life={[
                         "André, fez sua estreia no time principal do Santos em 2009, vindo da base do clube. Com seu faro de gol afiado e presença de área, rapidamente se tornou um atacante fundamental para o time. Sua habilidade em finalizar e contribuir com gols importantes ajudou o Santos a conquistar vários títulos durante sua passagem.",
                         "Durante sua trajetória no Santos, André se destacou como um dos principais artilheiros do time. Em 2010, após uma série de boas atuações, transferiu-se para o Dínamo de Kiev, porém sem sucesso lá, voltou para o clube em 2012, mas sem jogar tão bem quanto em 2010."
                      ]}
                    />
                  </AnimatedScroll>
  
                  <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection">A Campanha do Santos em 2010</h2>
                  </AnimatedScroll>
                  <br></br>
                  <AnimatedScroll animationClass="animate-hidden">
                    <h3 className="p-subsection">O Campeonato Paulista 2010</h3>
                  </AnimatedScroll>

                  <AnimatedScroll animationClass="animate-hidden">
                  <img src={Ataque2010} className="img-section" alt="Quarteto mágico do Santos em 2010" /> 
                  <p className="p-subsection"> O Quarteto mágico do Santos em 2010</p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Agora que pincelamos as principais estrelas do time naquele ano, iremos falar um pouco sobre como foi o ano do Santos em 2010. Foi neste <strong style={{color:"#007bff"}}>Campeonato Paulista</strong> que a magia começou.</p>
                  <p className="p-subsection">O Santos com muita folga foi o líder do campeonato, com 15 vitórias, 2 empates e 2 derrotas em 19 jogos.</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">O grande diferencial desse time eram o futebol rápido e ofensivo, esse time tinha uma incrível de 3,21 gols por jogo. O peixão marcou 61 gols nesse torneio.</p>
                  <p className="p-subsection">As partidas mais memoráveis com certeza são contra o Ituano em que o Santos ganhou de 9x1, contra o Prudente que aplicou um 5x0, e
                    o 6x3 contra o Bragantino. Era show toda partida.
                  </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Embalados com o desempenho da fase de grupos, o peixão enfrentou o São Paulo de Rogério Ceni nas semi-finais e foi nesta partida
                    que a paternidade de Neymar contra o SP começou, com direito a famosa paradinha dele contra o goleiro tricolor. 
                    <br></br>
                    <br></br>
                    Primeiro Jogo no Morumbi vitória por 3x2 
                    e na Vila Belmiro vitória por 3x0, com doblete de Neymar e um de Ganso. </p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <img src={Sansao2010} className="img-section" alt="Sansão na Vila 2010" />
                  <p className="p-subsection">Neymar no clássico SanSão em 2010</p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">No dia 25 de Abril de 2010, o Santos enfrentava o surpreedente Santo André pelo título. No primeiro jogo, no Pacaembu, o Peixe fez um primeiro tempo apagado,
                    mas acordou no segundo e acabou vencendo o Santo André de virada, por 3x2, 2 gols de Wesley e um de André.
                  </p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                   <img src={Wesley} className="img-section" alt="Wesley "/>
                  <p className="p-subsection">Wesley comemorando gol na final do paulista 2010</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">No dia 02 de maio, novamente no Pacaembu, Santos e Santo André fizeram um confronto histórico.
                    Ambos os times completamente ofensivos, cheios de agilidade e rapidez.
                  </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">O time do ABC marcou o seu primeiro gol com Nunes, logo no começo do jogo. Porém o Peixão não se abalou e meteu o gol
                    com uma jogadaça de Robinho e Neymar, que escapou da defesa, do goleiro e fuzilou as redes.
                  </p>
                </AnimatedScroll>


                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Entretanto o Santo André não se abalou, e meteu uma bola na trave e depois teve um gol mal anulado pela arbitragem.
                    Aos 19´, Alê marcou o segundo do Ramalhão, que precisava de mais um gol para ser campeão pelo fato de o Santos ter a melhor campanha.
                  </p>
                </AnimatedScroll>

                
                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Neymar, com sua rapidez, dribles e talento, provocou uma confusão ao cair e ser acusado de simulação pelos rivais.
                    No meio da confusão toda, o juiz expulsou Léo, lateral do Santos, e Nunes, do Santo André.
                  </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Aos 31´, um dos gols mais marcantes dessa geraçaõ foi feito: Robinho ganhou uma dividade e passou a bola para Ganso.
                    O camisa 10 tocou de primeira e de letra para o atacante Neymar, que marcou o segundo dele no jogo.
                  </p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <img src={NeyFinalPaulista2010} className="img-section" alt="Neymar paulsita 2010"/>
                  <p className="p-subsection">Neymar comemorando gol na final do Paulista 2010</p>
                </AnimatedScroll>
                <br></br>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection"> Aos 37´, o Santos perdeu Marquinhos, expulso, e deixou a torcida apreensiva. Aos 44´, contra-ataue letal do Santo André,
                    bola de pé em pé até a conclusão de Branquinho: 3 a 2. E mais um golaço no Pacaembu. E apenas 45 minutos, 5 gols, 3 sendo pinturas e 3 expulsões. E ainda tinha o
                    segundo tempo.
                  </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Naturalmente o ritmo no segundo tempo diminuiu, e o Santos começou a se defender muito mais do que atacar. O Santo André só não marcou
                    os gols nos ataques, pois naquele dia o time da Vila estava iluminado. Ansioso, o alvinegro praiano voltou a ter um jogador expulso, Roberto Brum, substituto 
                    de Neymar, aos 36´.
                    <br></br><br></br>
                    Desesperado para recompor sua defesa a fim de evitar os contra-ataques mortais do Ramalhão, Dorival decidiu substituir Ganso para colocar um zagueiro.
                    <br></br>                
                    No entanto, o meia se negou a sair de campo num momento de muita personalidade. Com a bola no pé, Ganso ganhou preciosos minutos, o que tornou o Santos o
                    <strong style={{color:"#007bff"}}> Campeão Paulista de 2010</strong>!
                  </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Em 23 jogos, o Santos venceu 18, empatou 2 e perdeu apenas 3. Foram 72 gols marcados e 31 sofridos, média de 3,13 gols por jogo, 
                    que deu ao Peixe a alcunha de time mais ofensivo do paulista no século. 
                    <br></br>
                    Neymar foi o artilheiro do time com 14 gols, André, com 13, e Ganso, com 11.
                  </p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <img src={TaçaPaulista2010} className="img-section" alt="Time com a taça do Paulista 2010"/>
                  <p className="p-subsection">Time com a taça do Paulista 2010</p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <h2 className="p-subsection">A Copa do Brasil 2010</h2>
  
                  <p className="p-subsection">Paralelo aos jogos do Paulista, o Santos teve compromissos com a  <strong style={{color:"#007bff"}}>Copa do Brasil</strong>,
                  competição até então jamais vencida pelo Alvinegro Praiano. Foi em um dos primeiros jogos desta competição que o Santos aplicou a goleada histórica contra o
                  Navirairense, por 10x0, na terceira fase da CdB, o Santos goleou o Remo por 4x0, e nas Oitavas de Final, o Guarani por 8x1, com direito a 
                  5 gols de Neymar Jr.
                  </p>
  
                  <p className="p-subsection">Era a terceira goleada da equipe por mais de sete em gols em menos de 4 meses de time! O time montado por Dorival começava a 
                    despertar a atenção do Brasil inteiro pelo futebol vistoso e ofensivo. Para esse time não bastava apenas o futebol ser ofensivo e bonito, eles tinham
                    que se exibir e mostrar talento por meio das famosas dancinhas que marcaram época.
                  </p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <img src={Danca} className="img-section" alt="Time dançando depois de mais uma goleada"/>
                  <p className="p-subsection">Se tinha gol, tinha dança</p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <h2 className="h2-subsection">Os jogos históricos contra Atlético - MG e Grêmio</h2>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Pelas Quartas de final na Ida, foram até o Mineirão enfrentar o Atlético-MG, e perdeu por 3x2,
                    com os 3 gols do galo marcados pelo Diego Tardelli, enquanto Robinho e Edu Dracena descontaram para o Santos.
                  </p>
                </AnimatedScroll>
                <br></br>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">3 dias depois da conquista do <strong style={{color:"#007bff"}}> Campeonato Paulista</strong>, o Santos voltou
                  em campo com a finalidade de revertar o placar, porém agora jogando na Vila Belmiro. A equipe subiu no embalo do título paulista e ganhou por
                  3x1, com gols de André, Neymar e Wesley.</p>
                </AnimatedScroll>
       
                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Já pela semifinal, enfrentaram o Grêmio e perdeu o jogo de ida, em Porto Alegre, por 4x3, os gols santistas
                    foram marcados por Robinho e André fez o doblete.
                    <br></br>
                    <br></br>
                    Pelo jogo de volta na Vila, o peixão reverteu a desvantagem e aplicou um sonoro 3x1, com gols de Ganso, Robinho e Wesley, resultado que colocou o 
                    Santos em mais uma final de campeonato.
                    </p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                    <img src={SanGreCDB} className="img-section" alt="Ganso na semifinal da CDB 2010"/>
                    <p className="p-subsection">Ganso marcou um golaço na semifinal da Copa do Brasil 2010</p>
                    </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden"> 
                    <p className="p-subsection">Em junho, o time entrou de férias por causa da <strong style={{color:"#007bff"}}>Copa do Mundo</strong> e o Brasil inteiro esperava que o técnico da seleção na época,
                      Dunga, convocasse a dupla alvinegra: Neymar e Ganso, mas as esperanças foram por água abaixo apos o anúncio. 
                      <br></br><br></br>
                      Em terras africanas, o Brasil foi eliminado nas quartas de final pela Holanda, com o santista Robinho sendo o jogador
                      destaque do mata-mata até aquele momento.
                    </p>
                 </AnimatedScroll>  
  
                 <AnimatedScroll animationClass="animate-hidden">
                   <img src={RobinhoCopaDoMundo} className="img-section" alt="Robinho Copa do Mundo" />
                 </AnimatedScroll> 
  
                 <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Robinho comemorando o gol contra a Holanda na Copa do Mundo de 2010</p>
                    <h2 className="h2-subsection"> A Final da Copa do Brasil 2010.</h2>
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                   <p className="p-subsection">Em julho, o Peixe começou a decidir o título da <strong style={{color:"#007bff"}}>Copa do Brasil </strong>contra o Vitória.</p>
                   <p className="p-subsection">Na primeira partida da final, na Vila Belmiro, o Peixe ganhou de 2x0, com gols de Neymar e Marquinhos.</p>
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">A partida de volta, em Salvador, o Vitória virou para 2x1 no segundo tempo, mas não foi o bastante para impedir o Peixe de levantar a tão
                      sonhada taça inédita, o Santos era campeão da  <strong style={{color:"#007bff"}}>Copa do Brasil </strong>!
                      <br></br>
                      <br></br>
                    O time da Vila, teve o melhor ataque da história da Copa do Brasil, 39 gols em 11 jogos, média de 3,5 gols por jogo. 
                    <br></br>
                    Os artilheiros do Peixão no campeonato
                    foram Neymar, com 11 gols, André, com 8 gols, e Robinho, com 6 gols.  
                      </p>
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                    <img src={CopaDoBrasilTitulo} className="img-section" alt="Título da Copa do Brasil 2010"/>
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                   <p className="p-subsection">Neymar e Ganso levantando o caneco inédito</p>
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Se contabilizar os gols do <strong style={{color:"#007bff"}}>Campeonato Paulista</strong> e da
                    <strong style={{color:"#007bff"}}> Copa do Brasil</strong>, o Peixão contabilizou fantásticos 111 gols em 34 partidas.
                    <br></br>
                    <br></br>
                    A taça inédita, deu para o Peixe uma vaga direta para a <strong style={{color:"#007bff"}}>Copa Libertadores da América</strong>, 
                    de 2011, e ali a história continuaria sendo feita, mas antes disso brigas internas e vendas aconteceram.
                    </p>
                  </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                     <img src={Escalacao2010} className="img-section" alt="Elenco de 2010" />
                   </AnimatedScroll>
                   
                   <AnimatedScroll animationClass="animate-hidden"> 
                    <p className="p-subsection">Escalação titular do Santos de 2010 no primeiro semestre</p>
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection">Saídas, Vendas e Brigas Internas
                   </h2>
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Após os títulos do primeiro semestre, o Santos começou a sofrer com saídas e vendas de atletas. Robinho foi contratado pelo Milan,
                      André foi vendido para o Dínamo Kiev, e Wesley foi vendido para o Werder Bremen da Alemanha.
                      <br></br>
                      <br></br>
                      Outro que quase deixou a Vila Belmiro foi Neymar, que foi seduzido por uma proposta milionária do Chelsea, mas um árduo trabalho de bastidores
                      em que Neymar ganhava um projeto de carreia, além da interferência de Rei Pelé, conseguiram manter o Menino da Vila.                                        
                   </p>
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animation-hidden">
                    <p className="p-subsection">Para amenizar um pouco as perdas, contrataram o lateral direito Danilo e anunciou, em novembro daquele ano,
                      a repatriação de Elano, ídolo do time que fez parte da geração passada, e um dos destaques da  <strong style={{color:"#007bff"}}>Copa do Mundo</strong>.
                    </p>
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                      <img src={Danilo2010} className="img-section" alt="Danilo 2010" />
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Danilo sendo anunciado em 2010</p>
                   </AnimatedScroll>


                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">De Julho de 2010 até Novembro, o time perdeu a oportunidade de conquistar a Tríplice Coroa ao não fazer uma boa
                      campanha no Brasileiro e terminar apenas na oitava posição.
                      <br></br>                       
                      A lesão fatal de PH Ganso no jogo contra o Grêmio também contribuiu para o desempenho abaixo do time no campeonato.
                      </p>
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Um dos motivos para o fraco rendimento, além das saídas e vendas pós-título nacional, foi o desentendimento
                      entre Neymar e Dorival Júnior após uma partida contra o Atlético-GO. Neymar foi impedido de bater o pênalti pelo treinador e xingou
                      Dorival de maneira impiedosa, claramente descontente com a decisão.
                      <br></br>
                      <br></br>
                      Dorival afastou o jovem por indisciplina, mas a diretoria alvinegra comrpou o lado de Neymar e demitiu o técnico.
                    </p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">A diretoria queria que o garoto voltasse a campo para um clássico contra o Corinthians, mas Dorival não tinha deixado.
                    </p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarDorival} className="img-section" alt="Neymar e Dorival"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Neymar e Dorival em 2010
                    </p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">A única coisa boa no segundo semestre de 2010 foram as constantes convocações de Neymar pela seleção brasileira.
                    </p>
  
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarGansoSelecao} className="img-section" alt="Neymar e Ganso pela seleção"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                   <p className="p-subsection">Neymar e PH Ganso pela seleção brasileira em 2010</p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection"> 2011, Os Meninos da Vila, se tornam Meninos da América</h2>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarGanso2011} className="img-section" alt="Neymar e Ganso em 2011"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Neymar e Ganso em 2011 pelo Santos</p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <h4 className="h4-subsection">O Campeonato Paulista 2011</h4>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Na temporada de 2011, o Santos contratou o técnico Adílson Batista e começou a defender seu 
                      título de campeão. Estrearam com o pé direito, um 4x1 sobre o Linense. No entanto a boa estreia não foi o suficiente para
                      manter o técnico no cargo, depois de 11 jogos de um péssimo trabalho, Adílson Batista foi demitido.
                    </p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Um técnico interino assumiu o cargo até a chegada do novo, Muricy Ramalho. O Santos de Muricy não chegava 
                      nem perto de ser aquele time ofensivo de 2010, porém tinha uma consistência defensiva muita maior. Obviamente as saídas de Robinho
                      e André fizeram falta, além dos problemas físicos de Ganso que começaram no ano de 2010 devido a lesão no joelho.
                    </p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={Muricy2011} className="img-section" alt="Muricy em 2011"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Muricy Ramalho em campo pelo Santos em 2011</p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">O técnico deixou o time encaixado novamente, foram 40 gols feitos e 20 sofridos, o Peixão se classificava pro mata-mata!</p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Nas Quartas de Final, venceu a Ponte Preta por 1 a 0(gol de Neymar), e nas SemiFinais venceu o São Paulo por 2x0(gols de Ganso e Elano).</p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Na final enfrentariam o Corinthians na ida no Pacaembu(0x0), e a grande partida da volta
                      seria na Vila Belmiro. E advinhe? Obviamente um gol de Neymar Jr, que em um chute potente marcou para a equipe santista, o outro gol
                      foi feito por Arouca. 2x1 para o bi-campeão paulista!</p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={Paulista2011} className="img-section" alt="Taça do  Paulista 2011"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Neymar carregando a taça do Paulista 2011</p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">O artilheiro do Santos no Paulista 2011 foi justamente o ídolo Elano que tinha voltado no começo do ano, tendo marcado 11
                      gols.
                    </p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection"> O Caminho Para a América</h2>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Em paralelo com o Paulistão, o Santos teve compromissos pela fase de grupos da <strong style={{color:"#007bff"}}>Copa Libertadores</strong>,
                    com o Peixão se classificando em segundo colocado com 3 vitórias, 2 empates e 1 derrota.</p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">A partir da fase mata-mata Neymar começou a ter seu desempenhado sobrenatural sendo decisivo em
                      todos os jogos, fazendo gols ou dando assistências.</p>
                   </AnimatedScroll>

                   
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Nas Oitavas de final, contra o América do México, Ganso marcou o gol da vitória na Vila Belmiro.
                      Pela partida de volta, empate de 0x0, Peixão classificado.
                    </p>
                   </AnimatedScroll>

                   
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Um fato engraçado é que o Santos foi o único clube brasileiro a ter se classificado nesse dia, 
                      TODOS os outros foram eliminados ao mesmo tempo.</p>
                   </AnimatedScroll>


                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={Ganso2011} className="img-section" alt="Ganso em 2011 pelas oitavas de final"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Ganso discutindo com jogador adversário pelas Oitavas de final da Libertadores 2011.</p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">O adversário nas Quartas de Final, era o algoz Once Caldas, que elimiou Diego e Robinho em 2004.</p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">No jogo de Ida, na Colômbia, venceu por 1x0, gol salvador de Alan Patrick. No jogo de volta, no Pacaembu, empate
                      por 1x1, gol de Neymar Jr.
                    </p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarLibertaQuartas2011} className="img-section" alt="Neymar pelas quartas de final da Libertadores"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Neymar pelas Quartas de final da Libertadores</p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">O adversário na SemiFinal, era o Cerro Porteño. No jogo de Ida, em São Paulo, Pacaembu, vitória por 1X0,
                      gol de Edu Dracena. No jogo da Volta, empate por 3x3, com gols de Neymar, Zé Love e Jonathan. Depois de 8 anos, o peixão estaria
                      novamente numa final internacional, e iria se reencontrar com o Peñarol, o mesmo que enfrentou na Final de 1962, na qual o Santos
                      saiu campeão de sua primeira Libertadores.
                    </p>
                   </AnimatedScroll>

                   
                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarSemiLiberta2011 } className="img-section" alt="Neymar pela SemiFinal da Libertadores"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Neymar pela SemiFinal da Libertadores</p>
                   </AnimatedScroll>
                 
                   <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection"> Reis da América, 48 Anos Depois</h2>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarFinal2011} className="img-section" alt="Neymar pela final da Libertadores"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Neymar comemorando o gol decisivo contra o Peñarol pela final da Libertadores</p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">A primeira partida da final foi disputada em Montevidéu, no estádio Centenário.
                      O Peñarol apostava na força da sua torcida e na raça de seus jogadores para conseguir uma vitória mínima e jogar
                      pelo empate na volta, em São Paulo. Mas a defesa alvinegra composta por Danilo, Edu Dracena, Durval e Alex Sandro,
                     não deixaram passar nada.
                     <br></br>
                     <br></br>
                     No jogo de volta, no Pacaembu, com 40 mil pessoas no estádio, todas esperando ver um título que desde a época de Pelé não
                     era conquistado. Depois de um primeiro tempo tenso, sem gols e com os uruguais tentando achar um gol, o craque, o Menino Da Vila,
                     Neymar Jr. marca o primeiro da partida, assistência de Arouca, vinda de uma jogadaça de PH Ganso. Se alguém ainda duvidava do 
                     poder de decisão do camisa 11, aí estava a resposta.
                    </p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Aos 23´, Danilo recebe na direita de Elano, driblou, e num chute colocado, meteu um golaço para abrir
                      vantagem no placar, 2x0 na final da  <strong style={{color:"#007bff"}}>Libertadores</strong>.
                    </p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Aos 34´do segundo tempo, Durval faz o gol contra, 2x1, mas não adiantava mais nada, como disse Léo: "AGORA
                      NINGUÉM TIRA!", o Santos se segurou e se tornou campeão da América pela terceira vez, o Peixe era campeão da <strong style={{color:"#007bff"}}>
                       Copa Libertadores da América de 2011. </strong>
                    </p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={PeleLeo} className="img-section" alt="Pelé e Léo levantando a taça da Libertadores"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> O Rei Pelé e o lateral Léo levantando a taça da Libertadores</p>
                   </AnimatedScroll>
                   <br></br>
                   
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> Era o fim de uma longa espera e a consagração de um time que brilhava desde 2010. Mais do que isso
                      , era o elixir de Neymar, o maior símbolo do futebol brasileiro da década de 2010, com seu moicano e jeito caiçara de ser,
                      decidiu uma final de <strong style={{color:"#007bff"}}>Libertadores</strong> com apenas 19 anos, sendo o jogador mais jovem da história a meter gol em uma final de Liberta.
                      <br></br>
                      <br></br>
                      O Santos em 14 jogos, ganhou 7, empatou 6 e perdeu apenas 1, com 20 gols marcados e 13 sofridos. Neymar foi o artilheiro do time,
                      com 6 gols e 4 assistências, 1 a menos que os artilheiros Nanni, do Cerro, e Wallyson, do Cruzeiro. Neymar participou de 50%
                      dos gols do time no campeonato.
                    </p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={Escalacao2011} className="img-section" alt="Escalação do Santos na Final da Libertadores 2011"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> Escalação do Santos na Final da Libertadores 2011. <br></br>Créditos: Imortais do Futebol</p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection"> Á Espera Do Mundial </h2>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarFlamengo} className="img-section" alt="Neymar Marcardo o gol Puskas contra o Flamengo"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Neymar Marcardo o gol Puskas contra o Flamengo em 2011.</p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> Como acontece com todos os times do Brasil, depois de um título importante vem a ressaca, e o Santos ficou
                      até dezembro com um futebol bem mais ou menos, com o intuito de preservar o time titular para o Mundial, mas fica a menção honrosa de mencionar
                      a contratação do jogador Borges e do golaço de Neymar, contra o Flamengo, que lhe rendeu o prêmio Puskas de 2011, além de ter sido 
                      eleito 10º melhor jogador do mundo,
                      jogando na América do Sul, feito único até hoje na história do futebol Sul-Americano.
                    </p>
                   </AnimatedScroll>

                   
                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarPuskas} className="img-section" alt="Neymar recebendo o prêmio Puskas"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> Neymar na premiação da Bola de Ouro 2011, ano em que ficou em 10º colocado </p>
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection"> O Sonho do Tri Mundial Destroçado Pelo Esquadrão de Messi </h2>
                   </AnimatedScroll>      
                   
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> Depois de vários meses de espera, o Santos viajou até o Japão com o objetivo de ser TriMundial. A equipe brasileira era
                      uma das favoritas, mas simplesmente não teve como superar o Barcelona de Messi, Xavi e Iniesta. </p>
                   </AnimatedScroll>       

                    <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Nas SemiFinais, enfrentaram o Kashiwa Reysol, do Japão, ganhando por 3x1, com gols de Neymar, Danilo e Borges. Como era 
                    de se esperar, o Barcelona goleou o time deles e avançou para a final, Neymar x Messi na <strong style={{color:"#007bff"}}>Final do Mundial de CLubes da FIFA 2011</strong>.
                    </p>
                   </AnimatedScroll>    

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarBorges} className="img-section" alt="Neymar e Borges pela SemiFinal do Mundial de Clubes 2011"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> Neymar e Borges pela SemiFinal do Mundial de Clubes 2011 </p>
                   </AnimatedScroll> 
                   
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> Na final do Mundial de Clubes da FIFA em 2011, o Barcelona dominou completamente o Santos, vencendo por 4 a 0. 
                      O time catalão teve impressionantes 70% de posse de bola, controlando o jogo do início ao fim. No primeiro tempo, Lionel Messi, Xavi e Cesc Fàbregas
                       marcaram os gols, deixando o Santos sem reação.
                       <br></br>
                       <br></br>

                        No segundo tempo, Messi completou o placar, marcando mais um gol. O Santos, que era conhecido por seu 
                       futebol ofensivo, mostrou-se apático e incapaz de impor seu jogo. 
                       <br></br>
                       <br></br>
                       Muitos torcedores santistas ainda se perguntam se o time de 2010, que era mais completo,
                        teria tido uma chance melhor contra aquele poderoso Barcelona, já que o time de 2011 já apresentava diferenças significativas em comparação ao ano 
                        anterior. </p>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarMessi} className="img-section" alt="Neymar e Messi se cumprimentando após a Final do Mundial de Clubes 2011"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> Neymar e Messi se cumprimentando após a Final do Mundial de Clubes 2011 </p>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection">O Ano de 2012, O Tri Paulista e o Começo Da Queda</h2>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarGanso} className="img-section" alt="Neymar e Ganso em uma partida pelo Paulista 2012"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> Neymar e Ganso em uma partida pelo Paulista 2012 </p>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection">O Campeonato Paulista 2012, O Tri Paulista</h2>
                   </AnimatedScroll> 
                   
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> Depois da dor de cabeça causada pela derrota no Mundial. O Santos iniciou em marcha lenta o
                    <strong style={{color:"#007bff"}}> Campeonato Paulista de 2012</strong>.
                    <br></br>
                    Foi a partir deste ano que a "Neymar dependência" começou, pois com as vendas dos laterais Alex Sandro, Jonathan e Danilo e Alan Patrick, tanto 
                    o time titular, quanto o banco de reservas decaiu muito, e a diretoria junto de Muricy Ramalho fizeram PÉSSIMAS reposições, reposições essas que
                    não tinham nível técnico suficiente para jogar num time que disputava todos os títulos.
                     </p>
                   </AnimatedScroll> 
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> Com a manutenção do elenco e de Neymar(que passou a ficar no time devido a inúmeros apoios financeiros De
                      parceiros publicitários), a equipe santista, junto do rival Corinthians, eram as favoritas a conquistar o títuo estadual. </p>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">O Peixe terminou a primeira fase na terceira posição, com 12 vitórias, 3 empates e 4 derrotas em 
                      19 jogos, com 46 gols marcados(pra variar, o melhor ataque disparado) e 18 sofridos. </p>
                   </AnimatedScroll> 

                   
                   <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection">O Mata-Mata do Paulista 2012</h2>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarSanSao2012} className="img-section" alt="Neymar no SanSão 2012"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> Neymar depois de marcar um Hat-Trick contra o São Paulo em pleno Morumbi </p>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Pelas Quartas de Final, vitória por 2x0, contra o Mogi Mirim. Com golaço e assintência de Neymar. </p>
                   </AnimatedScroll> 

                   
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Pelas Semi Finais, vitória por 3x1, contra o São Paulo. Com a melhor atuação de Neymar com a camisa do Santos.
                      O Menino da Vila marcou um Hat-Trick(3 gols) em pleno Morumbi, dançou, provocou e HUMILHOU o lateral Piris, que disse dias antes que tinha
                      total capacidade de marcar o jovem santista.<br></br>
                      A freguesia do São Paulo já era notória, 3 eliminações seguidas sofrendo com Neymar e Ganso.
                       </p>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarPiris2012} className="img-section" alt="Neymar x Piris pelo Paulista 2012"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> Neymar momentos antes de dar 5 dribles seguidos encima do lateral Piris</p>
                   </AnimatedScroll> 

                   
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection"> A partida final seria contra o Guarani, e ambas seriam no Morumbi. E o Santos deitou e rolou. No primeiro duelo, vitória fácil por 3x0,
                      2 gols de Neymar e um golaço de Ganso. Na partida de Volta, o Santos venceu por 4x2, com doblete de Neymar e outro de Alan Kardec, garantindo o tricampeonato paulista.
                      <br></br>
                      Assim, o Peixão foi campeão do <strong style={{color:"#007bff"}}> Campeonato Paulista de 2012</strong>.
                    </p>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarGansoElano2012} className="img-section" alt="Neymar, Ganso e Elano pela final do paulista 2012"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Neymar, Ganso e Elano pela Final do Paulista 2012</p>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Neymar foi o grande artilheiro tanto do time como do Paulistão em si, 20 gols na competição.</p>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection">O sonho do Tetra acabado</h2>
                   </AnimatedScroll> 

                   
                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarInternacional2012} className="img-section" alt="Neymar depois de meter um golaço contra o internacional em 2012"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Neymar depois de meter um golaço contra o internacional pela Copa Libertadores 2012</p>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Pela <strong style={{color:"#007bff"}}>Copa Libertadores da América de 2012</strong>, o Peixe com o protagonismo
                    de Neymar, somou 4 vitórias, 1 empate e 1 derrota pela fase de grupos. Uma menção honrosa é para o jogo HISTÓRICO, onde Neymar marcou um Hat-Trick, 
                    sendo 2 desses golaços dignos de Puskás.
                    </p>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Pelas Oitavas de Final, o Peixe encarou o Bolívar, e perdeu por 2x1, em La Paz. Com o técnico do Bolívar dizendo no pós-jogo que não
                      conhecia o o "tal de Neymar", bem, como disse Neymar: "Eu só tenho uma coisa pra falar, o jogo não é só de ida não, tem volta, lá em Santos eles 
                      vão ver!".
                      <br></br>
                      <br></br>
                      E realmente viram, o jogo de Volta, em Santos, foi um dos maiores chocolates da HISTÓRIA da <strong style={{color:"#007bff"}}>Libertadores</strong>!
                      Foi um singelo 8x0, com 2 gols  e 3 assistências de Neymar, 2 de Elano, 2 de Ganso, 1 de Borges e Alan Kardec, foi nesse jogo que Neymar fez sua famosa comemoração
                      se apresentando para todos, como forma de provocar o técnico do Bolivar pelo que ele disse semanas antes.
                    </p>
                   </AnimatedScroll> 

                    
                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={NeymarOitavas2012} className="img-section" alt="Neymar fazendo a saudação"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Neymar fazendo a sua famosa saudação em plena noite de Libertadores na Vila Belmiro em 2012</p>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Pelas Quartas de Final, a equipe da Baixada Santista enfrentou o Vélez Sarsfield. No jogo de Ida, em Buenos
                      Aires, Neymar foi anulado e viu o Peixão ser derrotado por 1x0.
                      <br></br>
                      <br></br>
                      Na Volta, em Santos, Alan Kardec marcou o gol da vitória que levou a decisão para os pênaltis, onde o Menino da Vila, o goleiro Rafael Cabral brilhou e
                      defendeu 2 pênaltis. Peixão classificado para a SemiFinal, contra o poderoso Corinthians de Tite, esse jogo foi considerado a final antecipada.
                    </p>
                   </AnimatedScroll> 

                   <AnimatedScroll animationClass="animate-hidden">
                   <img src={RafaelCabral} className="img-section" alt="Goleiro Rafael Cabral"/> 
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">O Menino da Vila Rafael Cabral foi o Herói das Quartas de Final da Libertadores 2012 pelo Peixão</p>
                   </AnimatedScroll> 




                   








              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
  
  export default Santos2009_2013;
  