//Componentes React
import React, {useContext} from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import {Container, Row, Col} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes Imagens
import TimeTitular from "../../assets/CopaLibertadores1963/TimeTitular.jpg";
import PeleBocaJuniors from "../../assets/CopaLibertadores1963/PeleBocaJuniors.jpg";
import PeleCoutinho from "../../assets/CopaLibertadores1963/PeleCoutinho.png";
import Libertadores63 from "../../assets/CopaLibertadores1963/LaBambonera.jpg";
//Componentes CSS
import "../../assets/styles/SubSection.css";

const CopaLibertadores1963 = () => {
    const{theme} = useContext(ThemeContext);
    
  return (
    <section className={`libertadores-1963 ${theme}`}>
        <Container>
            <Row className="justify-content-center">
                <Col  xs={12} md={8} lg={6}>
                  <div className="text-center">
                    <AnimatedScroll animationClass="animate-hidden">
                        <h1 className="h1-subsection">Títulos Históricos - Taça Libertadores Da América 1963</h1>
                        <img src={TimeTitular} className="img-section" alt="Time Titular na libertadores 63"/>
                        <p className="p-subsection">Time Titular Do Santos Na Taça Libertadores Da América 1963</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Numa quarta-feira, 11 de setembro, há exatos 60 anos, o Santos entrava no estádio La Bombonera aos gritos de uma multidão enfurecida de 85 mil fanáticos e novo recorde de renda para partidas de futebol na América (120 000 dólares).</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Os torcedores do Boca Juniors tinham um bom motivo para lotar o estádio e acreditar no 
                          título inédito. No primeiro jogo da decisão da <strong style={{color:"#007bff"}}>Taça Libertadores de 1963</strong>
                          , no Maracanã, o Santos vencia por 3 a 0,
                           com dois gols de Coutinho e um de Lima, mas nos minutos finais Sanfilippo marcou duas vezes e a vitória foi ofuscada.
                            Mais do que isso, a vantagem santista parecia possível de ser revertida com o Boca jogando em casa.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">O Santos, campeão da <strong style={{color:"#007bff"}}>Libertadores de 1962</strong>, entrou direto na semifinal da edição de 1963, quando enfrentou o rival brasileiro
                           Botafogo, líder isolado de um grupo que tinha Alianza Lima, do Peru, e Milionários, da Colômbia. Santos e Botafogo formaram a
                            base da Seleção na Copa do Mundo disputada naquele ano e o elenco carioca era o vice-campeão brasileiro, atrás do Peixe. 
                            <br></br>
                            <br></br>
                            No
                             primeiro duelo entre ambos, no Pacaembu, o Alvinegro da Vila Belmiro só conseguiu um empate por 1 a 1, e mesmo assim com um gol
                              de Pelé aos 45 minutos do segundo tempo. Porém, no Maracanã, diante de mais de 44 mil espectadores, o Santos despachou o
                               Botafogo por 4 a 0, com três gols de Pelé e um de Lima.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">O Boca, por sua vez, era o campeão argentino e participava do torneio sul-americano pela primeira vez. Para chegar à
                           final o time portenho liderou o seu grupo, superando Olimpia do Paraguai e Universidad de Chile, e na semifinal 
                           passou com duas vitórias pelo temido Peñarol, campeão uruguaio. A derrota por 3 a 2 para o
                            Santos na primeira partida da final era mais um ingrediente poderoso no caldeirão que se formou para a partida de volta. </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <img src={PeleBocaJuniors} className="img-section" alt="Pelé e Boca Juniors" />
                        <p className="p-subsection">Pelé e Boca Juniors</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">A pressão para o jogo final era grande e o gramado estava péssimo. O time da Técnica e da Disciplina precisaria 
                          muito mais do que isso para superar as adversidades. Sem Mengálvio, o técnico Lula trouxe Lima para o meio e colocou Dalmo na lateral-direita
                          , fazendo entrar Geraldino na esquerda. O time ficou com Gylmar, Dalmo, Mauro, Calvet e Geraldino; Lima e Zito; Dorval, Coutinho, Pelé e Pepe.

                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">O Boca foi escalado por Aristóbolo Deambrosi com Errea, Magdalena, Orlando Peçanha e Simeone; Rattin e Silveira; Grillo, Menéndez, Rojas, Sanfilippo e González. Para arbitrar a partida foi convidado o francês Marcel Albert Bois.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Precisando da vitória, o time da casa se lançou ao ataque. Gylmar, em grande fase, fez uma
                           série de defesas nos primeiros minutos de jogo. O Santos reagiu e Pelé só não marcou porque foi parado com violência. O árbitro controlou a animosidade, advertindo o infrator. O primeiro tempo terminou assim: o Santos controlando o jogo e o Boca procurando vencer a qualquer custo.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">O Lendário Segundo Tempo De Santos x Boca Juniors</h2>
                        <img src={PeleCoutinho} className="img-section" alt="Pele e Coutinho"/>
                        <p className="p-subsection">Pelé E Coutinho</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Logo no minuto inicial da etapa complementar, o atacante Grillo cruzou na área. Gylmar e Mauro se atrapalharam ao tentar interceptar a bola e ela sobrou para Sanfilippo, que chutou de pé direito para dentro do gol.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">O estádio veio abaixo. A vitória do Boca forçaria a terceira partida. Ao Santos até o empate
                           interessava. Sem se abater com a pressão da torcida, o Alvinegro respondeu rápido ao gol. A alegria dos argentinos durou
                            pouco. Três minutos depois, Dorval interceptou um tiro de meta mal cobrado por Errea e tocou para Pelé, 
                            que imediatamente vislumbrou Coutinho entrando entre os zagueiros. O centroavante bateu seco, rasteiro, no canto. 
                            O Santos empatava a partida e assumia o controle do jogo.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Com Mauro seguro na defesa, Lima em uma atuação brilhante na cobertura e os laterais Dalmo e Geraldino recebendo o apoio dos pontas Dorval e Pepe que seguravam as investidas de Grillo e Gonzalez, sobrou para a dupla de ataque Coutinho e Pelé infernizar a defesa adversária.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Aos 37 minutos, deslocado pela ponta esquerda, Coutinho seguiu com a bola, cortou para o meio e serviu Pelé, na entrada da área. O Rei, cercado por três adversários, jogou a bola entre as penas de Orlando e tocou na saída de Errea, marcando o segundo gol do Santos.

                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Por um momento o estádio emudeceu. Pelé foi abraçado pelos companheiros de equipe e recebeu aplausos de todo o estádio, até da implacável torcida adversária, que se rendia ao talento do Rei do Futebol.

                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">A vitória classificou o Santos para disputar o título mundial com o Milan, o campeão europeu, em uma decisão que ficaria marcada por uma das viradas mais espetaculares do Alvinegro Praiano. Bem, mas isso é uma outra história, para outra das muitas datas marcantes da inigualável trajetória santista.

                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <img src={Libertadores63} className="img-section" alt="Libertadores 64" />
                        <p className="p-subsection">Pelé na La Bambonera Em 1963</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>                   
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default CopaLibertadores1963;
