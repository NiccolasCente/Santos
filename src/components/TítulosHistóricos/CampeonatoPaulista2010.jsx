//Componentes React
import React, {useContext} from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import {Container,Row,Col} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes CSS
import "../../assets/styles/SubSection.css";

//Import Imagens
import TimeTitular from "../../assets/CampeonatoPaulista2010/TimeTitular.jpg";
import NeymarGanso from "../../assets/CampeonatoPaulista2010/NeymarGanso2010.jpg";
import NeymarAndre from "../../assets/CampeonatoPaulista2010/NeymarAndre.jpg";
import RobinhoSP from "../../assets/CampeonatoPaulista2010/RobinhoSP.jpg";
import NeymarSP from "../../assets/CampeonatoPaulista2010/NeymarSP.jpg";
import SantosTitulo from "../../assets/CampeonatoPaulista2010/SantosTitulo.jpg";

const CampeonatoPaulista2010 = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <section className={`campeonato-paulista-2010 ${theme}`}>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                  <div className="text-center">
                    <AnimatedScroll animationClass="animate-hidden">
                        <h1 className="h1-subsection">Títulos Históricos - Campeonato Paulista 2010</h1>
                        <img src={TimeTitular} className="img-section" alt="Time Titular do Paulista 2010"/>
                        <p className="p-subsection">Time Titular do Santos Comemorando o Título do Paulista 2010</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">Antes da Magia Acontecer</h2>
                        <p className="p-subsection">Depois do período mágico vivido em 2002-2005 com os craques da base
                            Diego e Robinho, o Santos viveu bons resultados nos anos seguintes: 2006/2007
                             BiCampeão do <strong style={{color: "#007bff"}}>Campeonato Paulista</strong>, 2007:Vice do 
                             <strong style={{color: "#007bff"}}> Brasileirão</strong> e 
                             SemiFinal da  <strong style={{color: "#007bff"}}>Libertadores</strong>.
                        </p>
                    </AnimatedScroll>

                    
                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Porém o time havia entrado em uma espiral de crises dentro e fora de campo, gastou todo o dinheiro ganho
                            com a geração passada em jogadores que não ganharam nenhum título relevante, resultando em um ano desesperador em 2008, onde quase foi rebaixado no
                            campeonato nacional.
                            <br></br>
                            <br></br>
                            No ano de 2009 decidiram encontrar 2 possiveis soluções para seus problemas: Subir o jovem Neymar Jr. da base e dar mais respaldo para Paulo
                            Henrique, o Ganso que havia subido em 2008.
                        </p>
                    </AnimatedScroll>

                    
                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">E realmente começaram a dar liga, foram vice-campeões do <strong style={{color: "#007bff"}}>Campeonato Paulista 2009</strong>, com
                        Neymar sendo o grande destaque do time, inclusive eliminando o Palmeiras de Marcos marcando um golaço de fora da área.
                        <br></br>
                        Entretanto, o desempenho no  <strong style={{color: "#007bff"}}>Campeonato Brasileiro 2009</strong> foi assustador e mais uma vez quase foram rebaixados,
                        se salvando por muito pouco.
                        <br></br>
                         O que a torcida e nem os próprios jogadores sabiam, é que desse time surgiriam talentos que explodiriam no ano de 2010.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">Os Meninos Da Vila 3.0</h2>
                        <img src={NeymarGanso} className="img-section" alt="Neymar e Ganso em 2010"/>
                        <p className="p-subsection">Neymar e Ganso em 2010</p>
                    </AnimatedScroll>

                    
                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">O primeiro ato do presidente da época, Laor, foi contratar o ídolo Robinho
                            novamente, que estava encostado no Manchester City e precisava de minutagem para jogar a 
                            <strong style={{color:"#007bff"}}> Copa do Mundo 2010</strong>. 
                            <br></br>
                            <br></br>
                            Junto das contratações de Durval, Arouca, Alex Sandro,
                            a volta de Wesley que estava por empréstimo, e as subidas de Alan Patrick e Rafael Cabral da base para o time
                            principal, o elenco estava montado. Experiência e juventude sendo mescladas.
                        </p>
                        
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">O Começo Da Magia</h2>
                        <img src={NeymarAndre} className="img-section" alt="Neymar e André"/>
                        <p className="p-subsection">Neymar e André Pelo Santos em 2010</p>
                    </AnimatedScroll>


                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">A estreia de Robinho foi memorável: no clássico contra o São Paulo, no Morumbi, o atacante fez um 
                            golaço de letra, selando a vitória por 2x1 e mostrando que o Santos vinha forte na competição.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                    <img src={RobinhoSP} className="img-section" alt="Robinho gol de letra"/>
                    <p className="p-subsection">Robinho Marcando um Gol de Letra contra o Rogério Ceni em 2010</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Ao longo do campeonato, o Santos protagonizou algumas das partidas mais empolgantes do 
                            torneio. Em um dos momentos mais marcantes, goleou o Ituano por 9x1, uma verdadeira demonstração de força e
                             entrosamento ofensivo. Outra partida que ficou para a história foi contra o Bragantino, onde o Santos venceu por 6x3,
                              em um jogo recheado de gols e belas jogadas. Além de outros jogos como: Rio Branco 4x0, Grêmio Barueri 5x0 e
                              e Monte Azul por 5x0.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">O Santos com muita folga foi o líder do campeonato, com 15 vitórias, 2 empates e 2 derrotas em 19 jogos.
                        O time ainda é lembrado pelo futebol bonito e pelo incrível número de gols marcados naquela edição. Foram 72, o que
                         colocam o Santos de 2010 como o melhor ataque do século no Campeonato Paulista.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">O Mata-Mata</h2>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Nas SemiFinais, o Santos voltou a enfrentar o São Paulo, e o resultado foi novamente favorável 
                            ao time da Vila Belmiro. No jogo de ida, no Morumbi, o Santos venceu por 3x2, com dois gols de André e um gol contra do 
                            São Paulo. 
                            <br></br>
                            <br></br>
                            Neymar brilhou ao dar uma assistência precisa para o segundo gol de André. Na volta, na Vila Belmiro, o Santos 
                            confirmou a classificação com uma vitória por 3x0, com dois gols de Neymar e um de Ganso. Esse jogo marcou o início de uma
                             freguesia absurda do São Paulo contra Neymar.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <img src={NeymarSP} className="img-section" alt="Neymar comemorando vitória em um jogo contra o São Paulo" />
                        <p className="p-subsection">Neymar Comemorando Vitória Em Um Jogo Contra O São Paulo</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">A Grande Final Do Paulista</h2>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">A grande final foi contra o Santo André, e a primeira partida, realizada no Pacaembu, foi um
                             espetáculo. O Santos saiu atrás no placar, mas conseguiu uma virada épica para 3x2, com dois gols de Wesley e um de André.
                             <br></br>
                             <br></br>
                              No jogo de volta, também no Pacaembu, o Santo André venceu por 3x2, em um dos jogos mais emocionantes do campeonato. 
                              O primeiro tempo foi eletrizante, com cinco gols, sendo três de fora da área. Neymar marcou dois gols, sendo um deles após
                               uma assistência sensacional de Ganso, que deu um passe de letra de costas.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Apesar da derrota na segunda partida, o Santos se sagrou campeão paulista de 2010, graças ao
                             resultado agregado, coroando uma campanha que ficou marcada como uma das mais brilhantes da história do clube.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <img src={SantosTitulo} className="img-section" alt="Time com o Título Paulista 2010" />
                        <p className="p-subsection">Time Com o Título Paulista 2010</p>
                    </AnimatedScroll>

                    
                    
                  </div>
                </Col>
            </Row>
        </Container>
      
    </section>
  );
};

export default CampeonatoPaulista2010;
