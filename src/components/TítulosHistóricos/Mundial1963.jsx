//Componentes React
import React, {useContext} from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import {Container, Row, Col} from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes Imagens
import PeleMazzola from "../../assets/Mundial1963/PeléMazzola.jpg";
import SantosMilan from "../../assets/Mundial1963/SantosMilan.jpg";
import PeleBravo from "../../assets/Mundial1963/PeleBravo.jpg";
import Trebbi from "../../assets/Mundial1963/Trebbi.jpg";
import CampeaoMundial1963 from "../../assets/Mundial1963/CampeaoMundial1963.jpg";
//Componentes CSS
import "../../assets/styles/SubSection.css";

const Mundial1963 = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <section className={`mundial-1963 ${theme}`}>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                  <div className="text-center">
                    <AnimatedScroll animationClass="animate-hidden">
                        <h1 className="h1-subsection">Títulos Históricos - Mundial 1963</h1>
                        <img src={PeleMazzola} className="img-section" alt="Pelé e Rivera"/>
                        <p className="p-subsection">Pelé e Rivera Em 1963 No Mundial De 1963</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                     <h2 className="h2-subsection">O BiMundial Do Melhor Time Da Terra</h2>
                        <p className="p-subsection">A quarta edição da <strong style={{color: "#007bff"}}> Copa Intercontinental</strong>, disputada
                         em 1963, foi a primeira em que brasileiros e italianos mediram forças.
                             Os representantes dessas grandes escolas de futebol eram o Milan, primeiro clube da Itália a ganhar a
                             <strong style={{color: "#007bff"}}> Copa dos Campeões</strong> ,
                              e o Santos de Pelé, bicampeão da <strong style={{color: "#007bff"}}> Libertadores</strong>. No San Siro, os rubro-negros abriram 4 a 2 de vantagem, mas o alvinegro 
                              praiano devolveu o placar no Maracanã, forçando um terceiro jogo para apontar o campeão, também no Rio de Janeiro.
                              </p>
                     </AnimatedScroll>

                     
                     <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">Antes Da Lendária Final Do Mundial</h2>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Antes de se enfrentarem na <strong style={{color:"#007bff"}}> Copa Intercontinental</strong>, os dois times tiveram 
                        verdadeiras provas de fogo em suas respectivas competições
                             continentais. O Santos despachou o Botafogo de Amarildo na semifinal e enfrentou o Boca Juniors na decisão. O Peixe foi superior nos
                              180 minutos, vencendo por 3 a 2 no Brasil e por 2 a 1 na Bombonera, confirmando o segundo título consecutivo da 
                              <strong style={{color: "#007bff"}}> Libertadores</strong>.
                        </p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Do outro lado do oceano Atlântico, o Milan enfrentou o Benfica, então bicampeão europeu. Os encarnados buscavam o
                         terceiro título sob a batuta do craque Eusébio. Em partida única, no mítico estádio de Wembley, o camisa 10 deu a
                          vantagem para os portugueses, mas o Diavolo conseguiu a virada no segundo tempo com dois 
                          gols do brasileiro José Altafini, o Mazzola.
                        </p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">A Lendária Final Do Mundial De 1963</h2>
                        <img src={SantosMilan} className="img-section" alt="Santos x Milan" />
                        <p className="p-subsection">Santos Enfrentando O Milan Em 1963</p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Em 16 de outubro, as equipes travaram o primeiro duelo do <strong style={{color:"#007bff"}}> Mundial Interclubes</strong>, que terminou com vitória rossonera. A partida 
                        reuniu craques dos dois lados: afinal, além de campeões continentais, eram times acostumados a ceder jogadores às suas seleções.
                         O Santos, por exemplo, tinha Gilmar, Mauro, Mengálvio, Pepe, Coutinho e Pelé, que estavam no elenco campeão do planeta, em 1962.
                        </p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Por sua vez, o Milan tinha seis jogadores que defendiam a Squadra Azzurra: Giovanni Trapattoni, Cesare Maldini,
                             Mario David, Gianni Rivera, Bruno Mora e Altafini. José havia defendido tanto o Brasil, em 1958, quanto a Itália,
                              em 1962, e faz parte do seleto grupo de jogadores que defenderam mais de um país em Copas do Mundo. 
                              Altafini tinha a companhia de outros dois brasileiros campeões mundiais: Dino Sani e o recém-chegado Amarildo,
                               que trocou o Botafogo pelo Milan após a eliminação na semifinal da <strong style={{color: "#007bff"}}>Libertadores 
                                de 1963</strong>.</p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">No San Siro, o Diavolo começou a todo vapor diante de quase 52 mil espectadores e abriu 2 a 0 com 15 minutos jogados.
                             Um chute de fora da área, de Trapattoni, e uma cabeçada forte de Amarildo deram a vantagem para os milanistas 
                             no primeiro tempo. Contando com uma má atuação da equipe brasileira, os rubro-negros dominavam a partida e 
                             criavam as melhores chances. A verdade é que se não fossem as boas defesas de Gilmar, o placar 
                             seria ainda pior para o time do técnico Lula.</p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">No início da etapa complementar, os santistas esboçaram uma reação, quando Pelé reacendeu os ânimos do Peixe e 
                            diminuiu a diferença. Mas, na sequência, Amarildo e Mora foram às redes e transformaram o placar em goleada. 
                            Na reta final da partida, o Rei converteu uma cobrança de pênalti que diminuiu a vantagem para 4 a 2. Minutos
                             depois, contudo, sofreu uma lesão que o tiraria do jogo de volta.</p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Quase um mês depois, as duas equipes se preparavam para o jogo de volta no Brasil. O Santos costumava mandar suas
                         partidas no Pacaembu, mas naquela ocasião o presidente santista, Athié Jorge Cury, optou por disputar o confronto no 
                         Maracanã, mesmo palco da final da <strong style={{color: "#007bff"}}> Libertadores</strong>. Naquele tempo, o alvinegro praiano era o time a ser batido, 
                         e por conta dos inúmeros espetáculos dentro de campo, tinha caído nas graças da torcida carioca.
                        </p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        O elenco do Milan desembarcou no Rio de Janeiro com a confiança em alta e um cenário bastante favorável. Além da vantagem de 
                        dois gols, enfrentaria o Santos desfalcado de Pelé, Zito e Calvet. Lula estava sem suas estrelas, por isso teve que escalar
                         Almir Pernambuquinho, Ismael – improvisado na lateral direita – e Haroldo, enquanto o argentino Luis Carniglia pode contar
                          com os mesmos onze que haviam triunfado na Lombardia. Ex-atacante do Boca Juniors, o técnico sabia como era jogar no Brasil.
                           E o Maraca recebeu mais de 132 mil torcedores em suas arquibancadas.
                        </p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Quando a bola começou a rolar, o alvinegro praiano nitidamente sentia a ausência dos desfalques. Foi facilmente
                             dominado pelo Milan, que abriu 1 a 0 com Altafini e ampliou com Mora, em um lance de apagão total da defesa
                              santista. O placar parecia definido quando as equipes foram para o vestiário, afinal o Milan seria campeão
                               mesmo se sofresse dois gols no segundo tempo. O que parecia improvável, já que os visitantes aplicavam 
                               muito bem o catenaccio.</p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <img src={PeleBravo} className="img-section" alt="Pelé Bravo"/>
                        <p className="p-subsection">O duelo entre as equipes foi tenso: na foto, Lula, Geraldino, Amarildo e o auxiliar tentam acalmar 
                            Pelé </p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">Improvável, mas não impossível. Tanto é que o Peixe reverteu o placar. “Estávamos perdendo por 2 a 0 no Rio e só
                             restavam 45 minutos. O Lula fez uma preleção curta no intervalo, mas começou a cair um temporal. 
                             Nós aproveitamos o campo alagado, com meu chute forte, e fizemos os quatro gols, principalmente em
                              batidas de fora da área. "Foi uma chuva divina”, relembrou Pepe numa matéria exibida pela ESPN Brasil. A
                               virada alvinegra naquela noite forçava a decisão em um terceiro jogo, disputado no dia 16 de novembro,
                                dois dias depois da vitória santista.</p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        O terceiro e último capítulo da decisão foi marcado pelas polêmicas. A começar pelo clima que antecedeu ao jogo.
                         O Milan ameaçava não ir a campo se o árbitro Juan Brozzi apitasse novamente: os milanistas alegaram que o argentino
                          havia favorecido o Santos no segundo jogo. A federação decidiu escalar Brozzi e alertou os italianos que em caso d
                          e renúncia, o time brasileiro venceria por WO. O Diavolo, então, acabou voltando ao campo do Maracanã.
                        </p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        A partida foi marcada por reclamações, nervosismo dos dois lados e por um grande número de faltas, o que atrapalhou a 
                        fluidez do jogo em vários momentos. Sem Pelé em campo, o lance capital da partida foi protagonizado por Almir,
                         seu substituto. Justo o polêmico Pernambuquinho, que passara pela Itália entre 1962 e 1963, sem sucesso algum 
                         por Fiorentina e Genoa. O mesmo jogador que confessou, anos depois, que teria atuado dopado por um estimulante
                         conhecido como “bolinha”.
                        </p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Almir também garantia que Nicolau Moran, vice-presidente do Santos, lhe afirmou que o árbitro Brozzi não iria coibir a 
                        violência santista. O próprio camisa 10 brasileiro começou entrando forte em Amarildo: ele havia nutrido uma raiva
                         incomum do rossonero, por conta de supostos comentários que diminuíam Pelé, seu ídolo. Os mexericos não correspondiam
                          à realidade, como mostram as fotos entre os dois bicampeões mundiais, mas Almir não queria saber. O pernambucano 
                          também tirou o goleiro Luigi Balzarini do jogo ao lhe dar um chute na cabeça, numa dividida, e ainda cavou a
                           penalidade que mudou o rumo da decisão.

                        </p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">“Lima fez um cruzamento alto. Eu estava mais ou menos ali pela marca do pênalti. Ia chegar um pouco atrasado na bola,
                             mas tinha de tentar, tinha de acreditar em mim. Vi quando Maldini, desesperado, levantou o pé, tentando cortar 
                             o lançamento. Eu tinha de dar tudo ali naquele lance: meter a cabeça para levar um pontapé de Maldini, correr o
                              risco de uma contusão grave, ficar cego, até mesmo morrer, porque o italiano vinha com vontade. Agora era 
                              ele ou eu. Meti a cabeça. Maldini enfiou o pé, eu rolei de dor pelo chão. O argentino não conversou: pênalti”,
                               descreve Almir, no livro Eu e o Futebol.</p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <img src={Trebbi} className="img-section" alt="trebbi" />
                        <p className="p-subsection">A Tensão De San Siro Se Repetiu No Maracanã: Trebbi Teve De Ser Escoltado Pela Polícia Durante O Terceiro Jogo
                             </p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">O lance gerou um enorme tumulto em campo, que durou quase 10 minutos. Além dos jogadores, do árbitro e das comissões técnicas,
                             repórteres e até policiais acabaram tomando o gramado. Na briga, Maldini deu uma voadora num santista e acabou sendo expulso, 
                             o que causou inúmeras reclamações do lado milanista, a ponto de fazer Carniglia querer retirar seus jogadores do campo. 
                             Contudo, os dirigentes do Diavolo o fizeram mudar de ideia.
                        </p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">O pênalti, porém, ainda seria cobrado. E, da marca da cal, Dalmo estufou as redes, marcando o primeiro e único gol 
                            daquela partida. A partida prosseguiu e, nos últimos instantes do segundo tempo, um desentendimento entre Amarildo
                             e Ismael resultou na expulsão do santista, que deu uma cabeçada no adversário.</p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">No fim das contas, o gol de Dalmo deu o troféu à equipe brasileira, já que o 1 a 0 não saiu
                             do placar. O alvinegro praiano derrotou o time mais forte da Itália à época e se sagrou bicampeão da 
                             <strong style={{color: "#007bff"}}> Copa Intercontinental</strong>, no Maracanã. O Milan voltaria a disputar a competição – e vencê-la – em 1969. 
                             A esta altura, o árbitro Juan Brozzi já estava aposentado e cuidava da luxuosa loja de flores e 
                             artigos para jardinagem que abriu em Buenos Aires pouco após o Mundial.</p>
                     </AnimatedScroll>

                     <AnimatedScroll animationClass="animate-hidden">
                        <img src={CampeaoMundial1963} className="img-section" alt="Campeao Mundial 1963" />
                        <p className="p-subsection"> Caneco Do Campeão Mundial 1963</p>
                     </AnimatedScroll>
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Mundial1963;