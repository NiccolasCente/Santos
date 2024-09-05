//Componentes React
import React ,{useContext} from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import {Container, Row, Col} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes Imagens
import Elenco2002 from "../../assets/Brasileiro2002/Elenco2002.jpg";
import Sansao2002 from "../../assets/Brasileiro2002/Sansão2002.jpg";
import SantosSemi from "../../assets/Brasileiro2002/SantosSemi.jpg";
import RobinhoFinal2002 from "../../assets/Brasileiro2002/RobinhoFinal2002.webp";
import MeninosDaVila2002 from "../../assets/Brasileiro2002/MeninosDaVila2002.webp";

//Componentes CSS
import "../../assets/styles/SubSection.css";

const Brasileiro2002 = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <section className={`brasileiro-2002 ${theme}`}>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                   <div className="text-center">
                    <AnimatedScroll className="animate-hidden">
                        <h1 className="h1-subsection">Títulos Históricos - Campeonato Brasileiro 2002</h1>
                        <img src={Elenco2002} className="img-section" alt="Elenco 2002"/>
                        <p className="p-subsection">Elenco Do Santos Em 2002 </p>
                    </AnimatedScroll>

                    <AnimatedScroll className="animate-hidden">
                    <p className="p-subsection">Após anos e anos de marasmo, aquele time que encantou o Brasil na década de 60 com O Rei Pelé e seu parceiro Coutinho, na década de 90 e começo de 2000, não passava de um clube pobre e que não disputava nada.</p>
                    <p className="p-subsection">Pelo fato de terem comprado jogadores caros e que não renderam nenhum título e consequentemente dinheiro, o Santos começou a entrar em falência, fazendo com que assim, voltassem a usar a única coisa que deu sucesso para o clube em seus 110 anos(90 na época), A BASE.</p>
                    </AnimatedScroll>

                    <AnimatedScroll className="animate-hidden">
                    <h2 className="h2-subsection">Antes do Brasileiro</h2>
                    <p className="p-subsection">Depois de um torneio RIO-SP fraco, o Santos
                  era forte candidato ao rebaixamento, tanto pelos graves problemas financeiros e por metade do time titular ser de garotos da base com menos de 19 anos.</p>
                  <p className="p-subsection">O Santos fez um campeonato brasileiro apenas razoável e se classificou para o mata-mata graças a outros resultados, fazendo com que assim o Santos fosse o último da lista para jogar o mata-mata, e logo de cara, pegaria o São Paulo na Vila Belmiro.</p>
                    </AnimatedScroll>

                    <AnimatedScroll className="animate-hidden">
                        <h2 className="h2-subsection">O Mata-Mata De 2002</h2>
                    </AnimatedScroll>

                    <AnimatedScroll className="animate-hidden">
                        <img src={Sansao2002} className="img-section" alt="Sansão2002"/>
                        <p className="p-subsection">Robinho Escapando de Uma Dividida De Um Jogador Do São Paulo</p>
                    </AnimatedScroll>

                    <AnimatedScroll className="animate-hidden">
                        <p className="p-subsection">No primeiro jogo na Vila Belmiro, o Santos mostrou toda a sua capacidade ofensiva e, com gols de Alberto, 
                  Robinho e Diego, ganhou por 3x1, precisando apenas segurar o resultado no Morumbi. <br></br> <br></br>Mas o Santos não queria apenas segurar o resultado, queria mais,
                   e com mais um show de Diego e Robinho, venceu por 2x1. Essa classificação impressionou a todos na época, já que o São Paulo era, disparado,
                    o melhor time do Brasil naquele momento.</p>
                    </AnimatedScroll>

                    <AnimatedScroll className="animate-hidden">
                        <h2 className="h2-subsection">As SemiFinais Do Brasileiro De 2002</h2>
                        <img src={SantosSemi} className="img-section" alt="Diego 2002"/>
                        <p className="p-subsection">Diego Ribas Pelo Santos em 2002</p>
                    </AnimatedScroll>

                    <AnimatedScroll className="animate-hidden">
                    <p className="p-subsection">O próximo desafio do time da baixada era o Grêmio e com mais um show de futebol, ganharam deles com sobras na Vila Belmiro
                   por 3x0 e com mais um show de Robinho, porém no jogo de volta perderam por 1x0, mas já não importava mais, pois no placar agregado ficaria 3x1,
                    e o mais importante, a tão desejada vaga na final. 
                    <br></br>
                    <br></br>
                    E sonho esse, que parecia impossível para eles no começo do campeonato, depois de 7 anos,
                     o Santos voltava a disputar uma final de brasileiro.</p>
                    </AnimatedScroll>
                    
                    <AnimatedScroll className="animate-hidden">
                        <h2 className="h2-subsection">A Grande Final Do Brasileiro De 2002</h2>
                        <img src={RobinhoFinal2002} className="img-section" alt="Robinho 2002"/>
                        <p className="p-subsection">Robinho Contra O Corinthians Na Grande Final em 2002</p>
                    </AnimatedScroll>

                    <AnimatedScroll className="animate-hidden">
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

                    <AnimatedScroll className="animate-hidden">
                    <img src={MeninosDaVila2002} className="img-section" alt="Robinho e Diego Comemorando O Título De 2002"/>
                    <p className="p-subsection">Robinho e Diego Comemorando O Título De 2002</p>
                    </AnimatedScroll>
                   </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Brasileiro2002;