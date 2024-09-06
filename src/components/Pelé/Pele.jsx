//Componentes React
import React, {useContext} from "react";
import {Container, Row, Col} from "react-bootstrap" ;
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";
import {ThemeContext} from "../common/ThemeProvider/ThemeContext";

//Componentes Imagens
import PeleCrianca from "../../assets/Pele/PeleCriança.jpg";
import Pele15 from "../../assets/Pele/Pele15.jpg";
import PeleDespedida from "../../assets/Pele/PeleDespedida.jfif";
import PeleAdeus from "../../assets/Pele/PeleAdeus.jpg";
//Componentes CSS
import "../../assets/styles/SubSection.css"

const Pele = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <section className={`pele ${theme}`}>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                  <div className="text-center">
                    <AnimatedScroll animationClass="animate-hidden">
                        <h1 className="h1-subsection">Rei Pelé, O MAIOR DE TODOS</h1>
                        <img src={PeleCrianca} className="img-section" alt="Pele Crianca"/>
                        <p className="p-subsection">Rei Pelé Quando Era Uma Criança</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">A Ascensão de um Gênio do Futebol desde a Infância Humilde até o Santos Futebol Clube</h2>
                        <p className="p-subsection">Edson Arantes do Nascimento, conhecido como Pelé, nasceu em 23 de outubro de 1940, em Três Corações, Minas Gerais, Brasil. Filho do jogador Dondinho e Celeste
                             Arantes, Pelé foi criado em uma família humilde.
                             <br></br>
                             <br></br>
                             Desde cedo, demonstrou talento para o futebol, apesar das dificuldades financeiras, jogando com bolas improvisadas. Começou a jogar em times locais e 
                             rapidamente se destacou, conquistando campeonatos juvenis e futsal. 
                             </p>
                    </AnimatedScroll>
                    
                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Sua habilidade chamou a atenção de Waldemar de Brito, que o levou ao Santos Futebol Clube em 1956, contra a vontade inicial de sua mãe, 
                            que não queria que ele se mudasse para uma cidade grande.
                            <br></br>
                            <br></br>
                            Pelé foi apelidado assim na escola, apesar de inicialmente não gostar do nome. Ele atribui grande parte de sua habilidade e agilidade mental no futebol ao 
                            futsal, que jogou durante a juventude.
                            </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">Pelé e Santos, A MAIOR HISTÓRIA DE AMOR DO FUTEBOL</h2>
                        <img src={Pele15} className="img-section" alt="PeleSantos" />
                        <p className="p-subsection">A Primeira Foto De Pelé Com A Camisa Do Santos</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Em 1956, Pelé foi levado por Waldemar de Brito ao Santos Futebol Clube, onde foi apresentado como um futuro craque. Aos 15 anos, impressionou o treinador
                             Luís Alonso Pérez e assinou seu primeiro contrato profissional em junho daquele ano.
                             <br></br>
                             <br></br>
                             O Santos já era bi paulista (1955-56) quando Ele chegou ao time principal, ainda com 15 anos. Com Pelé, claro, passaria a patamares interplanetários.
                             </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection"><strong style={{color:"#007bff"}}>Campeão Paulista</strong> em 1958, 1960, 1961, 1962, 1964, 1965, 1967, 1968, 1969 e 1973.
                        <br></br>
                        Pentacampeão do <strong style={{color:"#007bff"}}> Campeonato Brasileiro</strong> em 1961, 1962, 1963, 1964, 1965 e 1968.
                        <br></br>
                        Bicampeão da <strong style={{color:"#007bff"}}>Libertadores da América</strong> em 1962 e 1963.
                        <br></br>
                        Bicampeão <strong style={{color:"#007bff"}}>Mundial</strong> em 1962 e 1963.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">A Despedida</h2>
                        <img src={PeleDespedida} className="img-section" alt="Pelé Despedida"/>
                        <p className="p-subsection">Pelé Em Seu Último Jogo Pelo Santos</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Foi a última partida oficial do Rei com a camisa do Santos, depois de 18 anos defendendo as cores do Alvinegro mais famoso do mundo. Era o adeus do melhor 
                            jogador de futebol de todos os tempos. O adversário do Santos naquela partida histórica foi a Ponte Preta que foi derrotada pelo placar de 2 a 0, com gols 
                            de Cláudio Adão e Geraldo contra, a favor do Peixe.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Durante a semana a cidade de Santos recebeu muitos jornalistas, ávidos em presenciar a despedida do Atleta do Século, de várias partes, não só do Brasil
                             como de todo o mundo. Só se falava no derradeiro jogo do craque santista.  </p>

                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">E foi exatamente aos 20 minutos do primeiro tempo que Pelé pegou a bola e sem que ninguém esperasse, ele se ajoelhou no meio do círculo central, abriu os
                             braços e disse adeus ao futebol. Na sequência se levantou e cercado de repórteres e fotógrafos deu a volta olímpica com a camisa na mão correndo e chorando
                              para os vestiários do Santos, saindo depois em um carro da Polícia Militar que o esperava na parte externa do estádio. No lugar do Rei entrou Gílson, o 
                              popular beija-flor.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Desde a primeira vez em que vestiu a camisa do time principal do Peixe no dia 7 de setembro de 1956, em Santo André na vitória pelo placar de 7 a 1, até a
                         partida contra a Ponte Preta, foram 1116 apresentações com 1091 gols marcados só pelo Alvinegro. Ao todo o Rei jogou em sua fantástica carreira 1365 partidas 
                         com 1282 gols marcados. 
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Pelé foi o artilheiro máximo no Campeonato Paulista nos anos de 1957 até 1965, depois em 1969 e por último em 1973. No ano de 1958 o Rei marcou 58 gols no 
                            certame regional um recorde. </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <img src = {PeleAdeus} className="img-section" alt="Pele last dance"/>
                        <p className="p-subsection">Famosa Foto De Pelé Ajoelhado Na Vila Belmiro Em Seu Último Jogo Pelo Peixão, Em 1974</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h1 className="h1-subsection">PELÉ ETERNO, DESCANSE EM PAZ REI</h1>
                    </AnimatedScroll>                          
                 </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Pele;