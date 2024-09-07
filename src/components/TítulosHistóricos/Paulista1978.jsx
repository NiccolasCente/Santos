import React, {useContext} from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import {Container, Row, Col} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes Imagens
import TimeTitular from "../../assets/CampeonatoPaulista1978/TimeTitular.webp";
import MeninosDaVila from "../../assets/CampeonatoPaulista1978/MeninosDaVila.jpg";
import JuarySP from "../../assets/CampeonatoPaulista1978/JuarySP.jpg";
import Juary from "../../assets/CampeonatoPaulista1978/Juary.jpeg";

//Componentes CSS
import "../../assets/styles/SubSection.css";

const Paulista1978 = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <section className={`paulista-1978 ${theme}`}>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                   <div className="text-center">
                     <AnimatedScroll animationClass="animate-hidden">
                        <h1 className="h1-subsection">Títulos Históricos - Campeonato Paulista 1978</h1>
                        <img src={TimeTitular} className="img-section" alt="Time Titular"/>
                        <p className="p-subsection">Time Titular Do Santos Em 1978</p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                      <h2 className="h2-subsection">A Primeira Geração De Meninos Da Vila</h2>

                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                      <p className="p-subsection">Depois da saída de Pelé e dos grandes medalhões do time principal (com exceção do Clodoaldo), o Santos começou uma grande reestruturação por volta de 1975.</p>

                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                      <p className="p-subsection">Chico Formiga, então técnico naquela época, promoveu diversos garotos da base santista e, graças a ele, o termo “Meninos da Vila” ganhou fama. Muitas pessoas não sabem, mas Formiga foi o principal responsável para este apelido ganhar força, principalmente junto à imprensa. Na maioria das entrevistas que concedia, Formiga se referia ao time como “Meus Meninos”, que rapidamente viraram os “Meninos da Vila”.

                      </p>
                     </AnimatedScroll>
                      <p className="p-subsection">Aílton Lira, João Paulo, Juary, Nilton Batata, Pita, entre outros, foram os grandes destaques da equipe que conquistou o 
                       <strong style={{color:"#007bff"}}> Campeonato Paulista 1978</strong>, diga-se de passagem, um dos campeonatos mais longos da história com 56 jogos, três turnos e uma final diante do 
                        São Paulo já no ano de 1979. Na ocasião, Juary ainda foi o artilheiro da competição com 29 gols marcados</p>
                     <AnimatedScroll animationClass="animate-hidden">

                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                       <img src={MeninosDaVila} className="img-section" alt="Meninos Da Vila" />
                       <p className="p-subsection">Meninos Da Vila De 1978</p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                       <h2 className="h2-subsection">A Grande Final Do Paulista De 1978: Santos Vs São Paulo</h2>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                      <img src={JuarySP} className="img-section" alt="Juary contra o SP" />
                      <p className="p-subsection">Juary Contra o São Paulo</p>


                      </AnimatedScroll> 

                     <AnimatedScroll animationClass="animate-hidden">
                       <p className="p-subsection">Foi perante público de 80.488 espectadores que na noite fria de 28 de junho de 1979, o Santos FC sagrava-se <strong style={{color:"#007bff"}}>Campeão Paulista </strong> 
                        referente ao ano de 1978 pela 
                        14ª vez.</p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Na partida final, ao ser derrota pelo São Paulo pelo placar de 2 a 0. Esse resultado obrigou que o título fosse disputado em uma prorrogação a qual 
                        terminou com o empate em 0 a 0. Pelo critério de desempate que privilegiava o time santista por ter tido o maior nº de gols no 3º turno (21 gols marcados), o 
                        Peixe ficou com o título, na primeira partida da fase final o Santos venceu o time do Morumbi por 2 a 1, com gols de Juary e Pita, na segunda empatou em 1 a 1 
                        com gol de Célio.
                        </p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Esse foi também o primeiro título regional sem a presença do Rei Pelé que houvera encerrado sua carreira no clube em 1974, a última conquista do torneio regional foi no ano de 1973.
                        </p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                         <p className="p-subsection">Esse time campeão ficou conhecido como a primeira geração dos “Meninos da Vila” devido a juventude da equipe capitaneada pelo guerreiro Clodoaldo, o 
                          meio-campista da base e camisa 10, Pita, além do matador e velocista Juary.
                          <br></br>
                          Um dos títulos mais importantes de nossa história!
                         </p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <img src={Juary} className="img-section" alt="Juary" />
                        <p className="p-subsection">Juary, Menino Da Vila, Camisa 9 E Goleador, Foi O Artilheiro Do Paulista 78 Com 29 Gols</p>
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

export default Paulista1978;