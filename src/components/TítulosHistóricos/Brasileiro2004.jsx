//Componentes React
import React,{useContext} from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import {Container, Row, Col} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes Imagens
import Elenco2004 from "../../assets/Brasileiro2004/Elenco2004.jpg";
import Luxemburgo from "../../assets/Brasileiro2004/Luxemburgo.webp";
import Robinho2004 from "../../assets/Brasileiro2004/Robinho2004.webp";
import Ricardinho2004 from "../../assets/Brasileiro2004/ricardinho.jpg";
import Deivid2004 from "../../assets/Brasileiro2004/deivid.jpg";
import Basilio2004 from "../../assets/Brasileiro2004/basilio.jpg";
import Titulo2004 from "../../assets/Brasileiro2004/Titulo2004.jpg";
//Componentes CSS
import "../../assets/styles/SubSection.css";

const Brasileiro2004 = () => {
    const {theme} = useContext(ThemeContext);
    
  return (
    <section className={`brasileiro-2004 ${theme}`}>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                  <div className="text-center">
                    <AnimatedScroll animationClass="animate-hidden">
                    <h1 className="h1-subsection">Títulos Históricos - Campeonato Brasileiro 2004</h1>
                    <img src={Elenco2004} className="img-section" alt="Elenco 2004"/>
                    <p className="p-subsection">Elenco TItular Do Santos Em 2004</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                      <h2 className="h2-subsection">Antes Do Brasileiro</h2>
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

                    
                    <AnimatedScroll animationClass="animate-hidden">
                      <img src={Luxemburgo} className="img-section" alt="Luxemburgo Em 2004"/>
                      <p className="p-subsection">Luxemburgo Em 2004 Treinando O Santos</p>
                    </AnimatedScroll>

                    
                    <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Até conseguiram reverter o placar e se classificar para as quartas de final, porém, 
                    o favorito Santos perdeu o confronto para o surpreendente Once Caldas!
                  </p>
                    </AnimatedScroll>
                    
                    <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Depois de uma campanha decepcionante na <strong style={{color:"#007bff"}}>Libertadores 2004</strong>, sendo eliminados para o surpreendente Once Caldas
                    (clube esse que ganhou de Santos, São Paulo e do Boca Juniors na grande final), o Santos se voltou todo para o campeonato brasileiro daquele ano.</p>
                    </AnimatedScroll>

                    
                    <AnimatedScroll animationClass="animate-hidden">
                      <h2 className="h2-subsection">O Brasileirão 2004</h2>
                      <img src={Robinho2004} className="img-section" alt="Robinho2004"/>
                      <p className="p-subsection">Robinho Pelo Santos Em 2004</p>
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

                    
                    <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">O Santos lutou pelo titulo até o último jogo, que foi contra o Vasco, o Santos ganhou por 2x1, mais uma vez o Santos levantava um caneco para a 
                  alegria da torcida, com Robinho e Deivid tendo anotados 22 gols cada, apesar dos problemas de arbitragem, sequestro da mãe de Robinho e fora da Vila Belmiro,
                   o Santos ganhava seu 
                  oitavo título brasileiro.</p>
                    </AnimatedScroll>
                    
                    <AnimatedScroll animationClass="animate-hidden">
                    <img src={Titulo2004} className="img-section" alt="Robinho Titulo 2004"/>
                    <p className="p-subsection">Robinho comemorando mais um caneco levantado</p>
                    </AnimatedScroll>

                    
                    <AnimatedScroll animationClass="animate-hidden">
                      <p className="p-subsection">Infelizmente, esse foi o último título de <strong style={{color: "#007bff"}}>Campeonato Brasileiro</strong> que o Santos ganhou.
                      Mostrando o quanto as diretorias amadoras ferraram e ferram o clube até hoje.                     
                      </p>
                    </AnimatedScroll>
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Brasileiro2004;