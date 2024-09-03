//Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import {Container, Row, Col} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes CSS
import "../../assets/styles/SubSection.css";

//Import Imagens
import TimeTitular from "../../assets/CopaLibertadores2011/TimeTitular.jpg";
import Time2010 from "../../assets/CopaLibertadores2011/Time2010.webp";
import NeymarPaulista2011 from "../../assets/CopaLibertadores2011/NeymarPaulista2011.jpg";
import NeymarFinalPaulista2011 from "../../assets/CopaLibertadores2011/NeymarFinalPaulista2011.jpg";
import NeymarElano from "../../assets/CopaLibertadores2011/NeymarElano.webp";
import DaniloGrupos2011 from "../../assets/CopaLibertadores2011/Danilo2011.jpg";
import Ganso2011 from "../../assets/CopaLibertadores2011/Ganso2011.jpg";
import AlanPatrick2011 from "../../assets/CopaLibertadores2011/AlanPatrick2011.webp";
import ZeLove2011 from "../../assets/CopaLibertadores2011/ZeLove.jpg";
import Arouca2011 from "../../assets/CopaLibertadores2011/Arouca2011.jpg";
import NeymarFinalLibertadores2011 from  "../../assets/CopaLibertadores2011/NeymarFinalLibertadores2011.jpg";
import NeymarGansoTituloLibertadores2011 from  "../../assets/CopaLibertadores2011/NeymarGansoTituloLibertadores2011.webp";

const CopaLibertadores2011 = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <section className={`libertadores-2011 ${theme}`}>
      <Container>
        <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
             <div className="text-center">
                <AnimatedScroll animationClass="animate-hidden">
                    <h1 className="h1-subsection">Títulos Históricos - Copa Libertadores da América 2011</h1>
                    <img src={TimeTitular} className="img-section" alt="Time Titular na Final da Libertadores 2011"/>
                    <p className="p-subsection">Time Titular do Santos na Final da Copa Libertadores 2011</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection">Antes de 2011</h2>
                    <p className="p-subsection">Antes de contarmos o título da <strong style={{color:"#007bff"}}>Copa Libertadores de 2011</strong>, devemos voltar um pouco no tempo, sendo mais exato, para 2010.
                        <br></br>
                    </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                <p className="p-subsection">
                O Santos de 2010 foi um time histórico, marcando uma temporada memorável tanto na<strong style={{color:"#007bff"}}> Copa do Brasil</strong> quanto no 
                <strong style={{color:"#007bff"}}> Campeonato Paulista</strong>. 
                        No <strong style={{color:"#007bff"}}>Campeonato Paulista</strong>, o time se destacou como o mais artilheiro do campeonato no século, com uma performance impressionante. 
                        <br></br>
                        <br></br>
                        E na <strong style={{color:"#007bff"}}>Copa do Brasil</strong>,
                        que Santos conquistou, aconteceu exatamente a mesma coisa, 
                         o que garantiu a sua vaga na <strong style={{color:"#007bff"}}>Copa Libertadores 2011</strong> do ano seguinte. Esse título foi conquistado com uma campanha marcante,
                         evidenciando o poder ofensivo da equipe e se tornando a equipe com o melhor ataque da história da competição.
                </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={Time2010} className="img-section" alt="O Time das Dancinhas"/>
                    <p className="p-subsection">O Time das Dancinhas, sempre que marcavam um gol, era uma Dança diferente</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection">O Ano Mágico, O Tri da Libertadores</h2>
                    <img src={NeymarPaulista2011} className="img-section" alt="Neymar Paulista 2011"/>
                    <p className="p-subsection">Neymar pelo Paulista 2011</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                <h2 className="h2-subsection">O BiCampeonato Paulista</h2>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">O <strong style={{color:"#007bff"}}>Campeonato Paulista de 2011</strong> começou com grandes expectativas, especialmente com a chegada do novo técnico Muricy Ramalho. 
                        Sob sua orientação, o Santos teve um desempenho consistente, culminando na vitória sobre o Corinthians na final. 
                        <br></br>
                        <br></br>
                        Neymar foi o destaque, marcando o gol decisivo que garantiu o título para o Santos, reforçando sua posição como um dos 
                        maiores talentos do futebol brasileiro.</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={NeymarFinalPaulista2011} className="img-section" alt="Neymar Final Paulista 2011"/>
                    <p className="p-subsection">Neymar Depois de Marcar o Gol Decisivo contra o Corinthians pelo Paulista 2011</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                <h2 className="h2-subsection">A Jornada Pela Fase de Grupos Na Libertadores 2011</h2>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={NeymarElano} className="img-section" alt="Neymar e Elano Libertadores 2011"/>
                    <p className="p-subsection">Neymar e Elano pela Libertadores 2011 </p>
                </AnimatedScroll>               

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">A campanha do Santos na fase de grupos da <strong style={{color:"#007bff"}}>Copa Libertadores 2011</strong> foi marcada 
                    por altos e baixos, e o time quase não
                         avançou para a fase seguinte. Com um desempenho irregular sob o comando do técnico Adílson Batista(técnico que foi demitido, e depois Muricy ganhou o cargo), o Santos teve dificuldades e esteve 
                         perto de cair para a <strong style={{color:"#007bff"}}>Copa Sul-Americana</strong>.
                         <br></br>
                         <br></br>
                         Neymar, uma das principais estrelas do time, foi injustamente expulso em uma das partidas, o que resultou em sua ausência em jogos cruciais e impactou o desempenho da equipe.
                         </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Durante essa fase, o Santos contou com atuações decisivas de jogadores como o lateral Danilo e o meia Elano. Ambos marcaram gols 
                        importantes(todos golaços) que ajudaram a garantir a classificação da equipe. Esses gols foram essenciais para melhorar a posição do time na tabela e 
                        garantir uma vaga na fase de mata-mata.
                        <br></br>
                        O Santos se classificou em segundo lugar com: 3 Vitórias, 2 Empates e 1 Derrota.
                        </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={DaniloGrupos2011} className="img-section" alt="Danilo Libertadores 2011"/>
                    <p className="p-subsection">Danilo pela Libertadores 2011 </p>
                </AnimatedScroll>    

                <AnimatedScroll animationClass="animate-hidden">
                <h2 className="h2-subsection">O Histórico Mata-Mata</h2>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Na fase de mata-mata, o Santos mostrou um desempenho impressionante e recuperou sua forma.
                    <br></br>
                    Nas oitavas de final, o adversário foi o América do México. Na partida de ida, o Santos venceu com um gol de Ganso na Vila Belmiro. No jogo de volta,
                     o empate em 0x0 garantiu a classificação para as quartas de final.
                    </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={Ganso2011} className="img-section" alt="Ganso Libertadores 2011"/>
                    <p className="p-subsection">Ganso pela Libertadores 2011 </p>
                </AnimatedScroll>    


                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">O adversário nas quartas de final foi o Once Caldas, um time colombiano que havia eliminado Diego e Robinho em 2004. 
                        <br></br>
                        Na partida de ida, realizada na Colômbia, o Santos conseguiu uma vitória por 1x0, com um gol decisivo de Alan Patrick. O jogo de volta, no Pacaembu,
                         terminou em um empate de 1x1, com Neymar marcando o gol do Santos.</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={AlanPatrick2011} className="img-section" alt="Alan Patrick Libertadores 2011"/>
                    <p className="p-subsection">Alan Patrick marcou um gol decisivo pela Libertadores 2011 </p>
                </AnimatedScroll>    

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Nas semifinais, o Santos enfrentou o Cerro Porteño. No jogo de ida, realizado em São Paulo no estádio Pacaembu, 
                        o Santos venceu por 1x0, com um gol de Edu Dracena. 
                        <br></br>
                        <br></br>
                        Na partida de volta, em Assunção, o Santos empatou por 3x3, com gols de Neymar, Zé Love 
                        e Jonathan. Esse resultado garantiu a equipe na final, marcando a volta do Santos a uma decisão internacional após 8 anos.
                        <br></br>
                        <br></br>
                        Na final, o Santos teve pela frente o Peñarol, um adversário histórico que o Santos já havia enfrentado na final de 1962.
                        </p>
                </AnimatedScroll>    

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={ZeLove2011} className="img-section" alt="ZeLove2011 Libertadores 2011"/>
                    <p className="p-subsection">Zé Love marcou um gol contra o Cerro pela Libertadores 2011 </p>
                </AnimatedScroll>   

                <AnimatedScroll animationClass="animate-hidden">
                <h2 className="h2-subsection">A Grande Final</h2>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={Arouca2011} className="img-section" alt="Arouca Final Libertadores 2011"/>
                    <p className="p-subsection">Arouca Contra o Peñarol na Final da Libertadores 2011 </p>
                </AnimatedScroll>   

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">O primeiro jogo da final foi disputado em Montevidéu, no estádio Centenário, e terminou em 0x0. A partida de volta 
                        aconteceu no Pacaembu, com uma grande expectativa da torcida. No primeiro tempo, o jogo foi tenso e sem gols, com o Peñarol tentando encontrar
                         uma brecha na defesa santista. </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">O Santos abriu o placar no segundo tempo com um gol de Neymar, que recebeu uma assistência de Arouca após uma bela 
                        jogada de PH Ganso. Em seguida, Danilo ampliou a vantagem com um chute colocado, fazendo 2x0.
                        <br></br>
                        <br></br>
                         O Peñarol ainda conseguiu aplicar um gol, o contra 
                        de Durval,
                         mas não foi o suficiente para mudar o resultado. O Santos se sagrou campeão da <strong style={{color:"#007bff"}}>Copa Libertadores da América de 2011</strong> com uma vitória por 2x1,
                          conquistando o título pela terceira vez e encerrando uma longa espera de 48 anos.. </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={NeymarFinalLibertadores2011} className="img-section" alt="Neymar Final Libertadores 2011"/>
                    <p className="p-subsection">Neymar Depois de Marcar o Gol Decisivo  Contra o Peñarol na Final da Libertadores 2011 </p>
                </AnimatedScroll>   

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Neymar teve um papel fundamental na conquista, sendo o artilheiro da competição com 6 gols e 4 assistências, 
                        e demonstrou ser um dos maiores talentos do futebol brasileiro.
                        <br></br>
                        <br></br>
                         Foi a consagração de Neymar como jogador, e o último brilho de Ganso
                        com a camisa do Peixão. Os Meninos da Vila eram campeões novamente da <strong style={{color:"#007bff"}}>Copa Libertadores da América</strong> </p>
                </AnimatedScroll>  

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={NeymarGansoTituloLibertadores2011} className="img-section" alt="Neymar e Ganso segurando o troféu da Libertadores 2011"/>
                    <p className="p-subsection">Neymar e Ganso segurando o troféu da Libertadores 2011 </p>
                </AnimatedScroll>    




             </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CopaLibertadores2011;
