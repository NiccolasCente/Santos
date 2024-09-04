//Componentes React
import React, { useContext } from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import {Container, Row, Col} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes CSS
import "../../assets/styles/SubSection.css";

//Import Imagens
import TimeTitular from "../../assets/CopaDoBrasil2010/TimeTitular.jpg";
import Naviraiense from "../../assets/CopaDoBrasil2010/Naviraiense.jpg";
import Remo from "../../assets/CopaDoBrasil2010/Remo.jpg";
import Guarani from "../../assets/CopaDoBrasil2010/Guarani.avif";
import AtleticoMG from "../../assets/CopaDoBrasil2010/AtleticoMG.jpeg";
import Gremio from "../../assets/CopaDoBrasil2010/Gremio.jpg";

const CopaBrasil2010 = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <section className={`copa-do-brasil-2010 ${theme}`}>
      <Container>
        <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
             <div className="text-center">
                <AnimatedScroll animationClass="animate-hidden">
                    <h1 className="h1-subsection">Títulos Históricos - Copa Do Brasil 2010</h1>
                    <img src={TimeTitular} className="img-section" alt="Time Titular na Final da Copa do Brasil 2010"/>
                    <p className="p-subsection">Time Titular do Santos na Final da Copa do Brasil 2010</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection">A Fase de Grupos da Copa do Brasil 2010</h2>
                    <p className="p-subsection">Paralelo aos jogos do <strong style={{color: "#007bff"}}>Campeonato Paulista</strong>,
                    o Santos teve compromissos pela <strong style={{color: "#007bff"}}>Copa do Brasil</strong>, competição até então
                    jamais vencida pelo time da baixada.
                    </p>
                </AnimatedScroll>
                
                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">A primeira partida da competição foi contra o Naviraiense, do Mato Grosso do Sul.
                        A partida de Ida, fora de casa, foi vencida pelo Peixão por 1x0, gol de Marquinhos. Pela partida de Volta, na
                        Vila, um dos maiores massacres da histório da competição, um singelo 10x0!
                        <br></br>
                        <br></br>
                        Os Meninos da Vila fizeram um show, Marquinhos, Ganso e Robinho marcaram o deles, enquanto Neymar e Madson colocaram 2 bolas pra dentro,
                        porém o destaque foi para André, que fez um Hat-Trick.
                    </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={Naviraiense} className="img-section" alt="Neymar e Robinho na lendária goleada"/>
                    <p className="p-subsection">Neymar e Robinho na Lendária Goleada contra o Naviraiense</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Pela segunda fase, a equipe fez mais uma vítima, o Remo, fora de casa.
                        Um sonoro 4x0, com doblete de Neymar e outro de André.
                    </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={Remo} className="img-section" alt="Jogo contra o Remo"/>
                    <p className="p-subsection">Time Comemorando a Goleada Contra o Remo</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection">O Mata-Mata da Copa do Brasil</h2>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Pelas oitavas de final, enfrentariam o Guarani, em Plena Vila Belmiro e em seu aniversário de 
                        98 anos. E bem... a torcida ganhou o melhor presente que poderiam ter ganho: Mais um show dos Meninos da Vila.
                        <br></br>
                        <br></br>
                        Uma goleada por 8x1, com 5 gols de Neymar, doblete de Robinho e um de Marcel. Era a terceira goleada do time em 4 jogos, e
                        apenas mais uma para a coleção de um time que vinha chamando a atenção do Brasil.
                        <br></br>
                        O time de Dorival esbanjava talento, futebol ofensivo e claro, as famosas dancinhas.
                    </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={Guarani} className="img-section" alt="Neymar contra o Guarani"/>
                    <p className="p-subsection">Neymar Marcou 5 gols Em Apenas Uma Partida</p>
                </AnimatedScroll>
                
                <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection">As Lendárias Partidas Contra Atlético-MG e Grêmio</h2>
                    <p className="p-subsection">Apenas 3 dias depois da partida de Ida pela final do <strong style={{color: "#007bff"}}>Campeonato Paulista</strong>,
                    enfrentaram o Atlético-MG de Diego Tardelli, pela  <strong style={{color: "#007bff"}}>Copa do Brasil</strong>.
                    <br></br>
                    <br></br>
                    Pelo jogo de Ida, perderam por 3x2, Hat-Trick de Diego Tardelli, e Robinho e Edu Dracena descontaram para o Peixe.
                     </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Apenas alguns dias depois do título do <strong style={{color: "#007bff"}}>Campeonato Paulista</strong>, os
                    Meninos da Vila, voltaram inspirados para reverter a desvantagem e conseguir a classificação para as Semi-Finais.
                    <br></br>
                    O jogo de Volta, na Vila Belmiro, venceram o Galo por 3x1, com gols de André, Neymar e Wesley.
                     </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={AtleticoMG} className="img-section" alt="Neymar contra o Galo"/>
                    <p className="p-subsection">Neymar em Partida Válida pelo Atlético-MG</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">Pelas SemiFinal, no jogo de Ida, em Porto Alegre, enfrentaram o Grêmio.
                        Os Meninos da Vila perderam por 4x3, com gols de Robinho e doblete de André.
                        <br></br>
                        O jogo de volta mais uma vez, seria na Vila Belmiro. O Peixão voltou a reverter a vantagem do rival e 
                        fez 3x1, com gols de Ganso, Robinho e Wesley. 
                        O Peixão estava em mais uma final!
                    </p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <img src={Gremio} className="img-section" alt="Ganso nas semifinais"/>
                    <p className="p-subsection">Ganso Marcou um Golaço de Fora da Área Contra o Grêmio</p>
                </AnimatedScroll>

                <AnimatedScroll animationClass="animate-hidden">
                    <h2 className="h2-subsection">A Grande Final da Copa do Brasil</h2>
                </AnimatedScroll>

  
             </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CopaBrasil2010;
