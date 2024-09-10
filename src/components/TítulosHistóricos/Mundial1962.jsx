//Componentes React
import React, {useContext} from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import {Container, Row, Col} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes Imagens
import TimeTitular from "../../assets/Mundial1962/TimeTitular.webp";
import PeleEusebio from "../../assets/Mundial1962/PeleEusebio.webp";
import PeleCabeceio from "../../assets/Mundial1962/SantosBenfica.jpg";
import Esquadrao from "../../assets/Mundial1962/Esquadrao.jpg";

//Componentes CSS
import "../../assets/styles/SubSection.css";

const Mundial1962 = () => {
    const{theme} = useContext(ThemeContext);

  return (
    <section className={`mundial-1962 ${theme}`}>
        <Container>
            <Row className="justify-content-center"> 
                <Col xs={12} md={8} lg={6}>
                   <div className="text-center">
                    <AnimatedScroll animationClass="animate-hidden">
                        <h1 className="h1-subsection">Títulos Históricos - Mundial 1962</h1> 
                        <img src={PeleEusebio} className="img-section" alt="O Esquadrão Alvinegro"/>
                        <p className="p-subsection">Os Craques Do Benfica E Do Santos, Eusébio E Pelé </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">A Consagração Do Maior Time Da Terra</h2>
                        <br></br>
                        <p className="p-subsection">Foi diante de 70 mil pessoas presentes no Estádio da Luz, em Lisboa, que o Santos goleou o Benfica por 5 a 2 e se tornou o primeiro time brasileiro campeão mundial.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">O Peixe já havia vencido a partida de ida, por 3 a 2, em um Maracanã com mais de 90 mil espectadores. Por sua vez, o Benfica acreditava na vitória em casa e
                             na realização da terceira e última partida. O clube português tinha motivos para isso, afinal era o bicampeão europeu, título que conseguiu ao vencer
                              o poderoso Real Madrid de Puskas e Di Stéfano por 5 a 3, em Amsterdam, em maio daquele ano.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">Santos x Benfica - Pelé x Eusébio</h2>
                        <img src={TimeTitular} className="img-section" alt="O Esquadrão Alvinegro"/>
                        <p className="p-subsection">O Time Titular Do Maior/Melhor Time De Futebol De Todos Os Tempos </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Naquela noite mágica de quinta-feira, 11 de outubro de 1962, há exatos 60 anos, o técnico Lula foi decisivo na armação da equipe. 
                            Com a ausência de Mengálvio, machucado, Lula lançou Lima no meio-campo ao lado de Zito. Na lateral direita, o técnico contou com o experiente Olavo.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">O jogo foi muito disputado até a abertura do placar. Gylmar fez algumas defesas empolgantes nas investidas dos atacantes portugueses, enquanto o time santista procurava armar suas jogadas e encontrar os espaços no campo.
                        </p>

                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Aos 17 minutos veio o primeiro gol. Coutinho deu um passe para Pepe que correu e chutou forte. Na passagem da bola, Pelé deu um carrinho para alcançar o cruzamento e vencer o goleiro Costa Pereira pela primeira vez.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Dez minutos depois, o gol de placa. Pelé recebeu a bola de Zito, driblou três jogadores e finalizou com um chute cruzado, superando mais uma vez o goleiro português. O primeiro tempo terminou com a vantagem de 2 a 0.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <img src={PeleCabeceio} className="img-section" alt="O Esquadrão Alvinegro"/>
                        <p className="p-subsection">Pelé Na Final Do Mundial De 1962 </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p  className="p-subsection">O Santos ampliou logo no início da segunda etapa. Aos 3 minutos, Pelé recebeu um passe de Lima, passou por dois e deixou Coutinho em condições de
                             empurrar a bola para o gol.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Aos 19, o time de Vila Belmiro voltava a marcar. Pelé passou a bola entre as pernas de Coluna, correu entre os adversários e chutou forte para o gol. 
                        O goleiro rebateu e Pelé na corrida estufou as redes. Pepe marcou seu gol aos 31 minutos. Depois de trocar passes com Pelé, o ponta-esquerda aproveitou a 
                        falha do goleiro após o chute e completou para o gol.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Com 5 a 0 no marcador, o Alvinegro relaxou. O Benfica aproveitou a oportunidade para marcar aos 41 e 44 minutos, com Eusébio e Santana, colocando números finais à partida: 5 a 2.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Os heróis dessa conquista inesquecível foram Gylmar, Olavo, Mauro, Calvet e Dalmo; Zito e Lima; Dorval, Coutinho, Pelé e Pepe. O Benfica jogou com Costa Pereira, Humberto, Raul e Cruz; Cavem e Jacinto; José Augusto, Santana, Eusébio, Coluna e Simões. O árbitro foi Pierre Schwinté, da França.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                    <img src={Esquadrao} className="img-section" alt="O Esquadrão Alvinegro"/>
                    <p className="p-subsection">O Esquadrão Alvinegro Comemorando O Título Inédito Após O Apito Final</p>
                    </AnimatedScroll>                   
                   </div>
                </Col>
            </Row>
        </Container>

    </section>
  );
}
;
export default Mundial1962;
