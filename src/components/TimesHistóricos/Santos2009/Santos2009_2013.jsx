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
  