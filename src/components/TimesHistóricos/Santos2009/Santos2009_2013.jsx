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




const Santos2009_2013 = () => {
    const { theme } = useContext(ThemeContext);
  
    return (
      <section className={`meninos-da-vila-2002-2005 ${theme}`}>
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
                  <p className="p-subsection">Escalação do time titular na final da Copa do Brasil 2010!</p>
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

                <AnimatedScroll>
                 <p className="p-subsection">Neymar, o maior jogador do Santos no Século XXI</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">Após os anos mágicos entre 2002 e 2005, com 2 títulos brasileiros e 1 vice-campeonato de Libertadores, o Santos passava por uma transiçaõ em 2009.</p>
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

                <AnimatedScroll>
                 <p className="p-subsection">Neymar e R9 se cumprimentando na final do paulista 2009. </p>
                </AnimatedScroll>

                <AnimatedScroll>
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
                   titles="Campeonato Paulista 2010 e 2012"
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
                  <p className="p-subsection">Neymar escapando de falta do jogador São Paulino</p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">No dia 25 de Abril de 2010, o Santos enfrentava o surpreedente Santo André pelo título.</p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                   {/*<img src={Diego3} className="img-section" alt="Diego provocando SP"/>*/}
                  <p className="p-subsection">Clássica comemoração de Diego Ribas contra o São Paulo</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">O próximo desafio do time da baixada era o Grêmio e com mais um show de futebol, ganharam deles com sobras na Vila Belmiro
                     por 3x0 e com mais um show de Robinho, porém no jogo de volta perderam por 1x0, mas já não importava mais, pois no placar agregado ficaria 3x1,
                      e o mais importante, a tão desejada vaga na final. E sonho esse, que parecia impossível para eles no começo do campeonato, depois de 7 anos,
                       o Santos voltava a disputar uma final de brasileiro.</p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  {/*<img src={SaoGre} className="img-section" alt="Santos x Gremio"/>*/}
                  <p className="p-subsection">Santos Enfrentando o Grêmio pela semi-final do Brasileiro</p>
                </AnimatedScroll>
                <br></br>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <p className="p-subsection">O útlimo adversário não poderia ser outro, era o Corinthians, um dos maiores rivais do Peixe e com um time que vinha embalado com 2 títulos no ano,
                   <strong style={{color:"#007bff"}}> Copa do Brasil 2002 </strong>e o <strong style={{color: "#007bff"}}>Torneio Rio São Paulo 2002</strong>. Ambos os jogos seriam no Morumbi.
                  </p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  {/*<img src={Pedaladas} className="img-section" alt="Pedaladas"/>*/}
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
                  {/*<img src={BR2002} className="img-section" alt="Titulo do BR 2002"/>*/}
                  <p className="p-subsection">Os Meninos Da Vila Diego e Robinho comemorando o título do Brasileiro de 2002</p>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  <h2 className="h2-subsection">O Ano de 2003, O Ano do "Quase"</h2>
                </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden">
                  {/* <img src={Ano2003} className="img-section" alt="Elenco 2003"/>*/}
                  <p className="p-subsection">Time Titular do Santoa na Final da Taça Libertadores da América</p>
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
                    {/*<img src={Oitavas2003} className="img-section" alt="Libertadores Oitavas  2003"/>*/}
                    <p className="p-subsection">Santos jogando contra o Nacional do Uruguai pela Oitavas de final da Libertadores</p>
                    </AnimatedScroll>
  
                <AnimatedScroll animationClass="animate-hidden"> 
                    <p className="p-subsection">Pelas quartas de final, enfrentaram o Cruz Azul. O time da baixada empatou em 2x2 no México, e venceu na Vila Belmiro por 1x0, gol de Robinho.
                    </p>
                 </AnimatedScroll>  
  
                 <AnimatedScroll animationClass="animate-hidden">
                   {/* <img src={Semi2003} className="img-section" alt="SemiFinal Libertadores 2003" />*/}
                 </AnimatedScroll> 
  
  
                 <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Diego sendo caçado em campo pela SemiFinal da Libertadores 2003</p>
                    <p className="p-subsection"> Nas semi finais, enfrentaram o Independiente Medellín(COL), com o resultado de 1x0 na Vila, e 3X2, fora.</p>
                    <p className="p-subsection">Infelizmente, para o azar dos Meninos da Vila(que vinham fazendo história, afinal uma equipe só de garotos chegar em uma Final de Taça Libertadores, com um time QUE apesar de grande, estava há 19 anos sem disputar a competição, por si só já era um grande feito),
                       eles pegariam o destemido BOCA JUNIORS na grande final.</p>
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                    {/*<img src={Final2003} className="img-section" alt="Final da Libertadores da América"/>*/}
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
                   {/* <img src={BR2003} className="img-section" alt="Recomposição no BR"></img>*/}
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
                     {/*<img src={BR2004} className="img-section" alt="Elenco de 2004" />*/}
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
                      {/*<img src={Robinho2004} className="img-section" alt="Robinho 2004"></img>*/}
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
                     {/*<img src={Ricardinho2004} className="img-section" alt="Ricardinho"/>*/}
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

                   <AnimatedScroll animationClass="animate-hidden">
                   {/*<img src={Basilio2004} className="img-section" alt="Basilio"/> */}
                   </AnimatedScroll>

                   <AnimatedScroll animationClass="animate-hidden">
                   <p className="p-subsection">Basílio, o amuleto da Vila, mesmo sendo reserva marcou 15 gols no campeonato!</p>
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                   {/*<img src={Deivid2004} className="img-section" alt="Deivid"/>*/}
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
                   {/*<img src={Titulo2004} className="img-section" alt="Titulo 2004"/>*/}
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Elenco do Santos comemorando mais um caneco levantado</p>
                   </AnimatedScroll>
  
                   <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection"> 2005, O fim da Era Diego e Robinho</h2>
  
                   </AnimatedScroll>
                   
                   <AnimatedScroll animationClass="animate-hidden">
                    {/*<img src={Robinho2005} className="img-section" alt="Robinho apresentação real madrid"/>*/}
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
                    {/*<img src={DiegoRobinho} className="img-section" alt="Diego e Robinho em treino pelo Santos"/>*/}
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
  
  export default Santos2009_2013;
  