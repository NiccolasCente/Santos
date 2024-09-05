//Componentes React
import React, {useContext} from "react";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedScroll from "../common/AnimatedScroll/AnimatedScroll";

//Componentes CSS
import "../../assets/styles/SubSection.css";

//Componentes Imagens
import PrimeiroTime from "../../assets/Historia/PrimeiroTime.jpg";
import PrimeiroTreino from "../../assets/Historia/PrimeiroTreino.jpg";
import PrimeiroTitulo from "../../assets/Historia/PrimeiroTitulo.jpg";
import PeleHistoria from "../../assets/Historia/Pelé.webp";
import PeleCoutinhoPepe from "../../assets/Historia/Trio.webp";
import JuaryPita from "../../assets/Historia/JuaryPita.jpg";
import SerginhoChulapa from "../../assets/Historia/SerginhoChulapa.jpg";
import DiegoRobinho from "../../assets/Historia/DiegoRobinho.webp";
import NeymarGanso from "../../assets/Historia/NeymarGanso.jpg";
import Gabigol from "../../assets/Historia/Gabriel.jpeg";
import MarcosLeonardo from "../../assets/Historia/MarcosLeonardo.webp";
import JoaoPaulo from "../../assets/Historia/JoaoPaulo.jfif";
import Santos2024 from "../../assets/Historia/Santos2024.avif";

const Historia = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <section className={`historia ${theme}`}>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                  <div className="text-center">
                    <AnimatedScroll animationClass="animate-hidden">
                        <h1 className="h1-subsection">A Fundação do Santos Futebol Clube</h1>
                        <img src={PrimeiroTime} className="img-section" alt="Primeiro Time do Alvinegro Praiano"/>
                        <p className="p-subsection">Primeiro Time do Alvinegro Praiano</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">Fundação e Primeiros Anos (1912-1940)</h2>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">O Santos Futebol Clube, um dos mais tradicionais clubes do futebol brasileiro e mundial, foi fundado em 14 de abril de 1912 na cidade de Santos, litoral do 
                            estado de São Paulo. A ideia de criar o clube surgiu em uma reunião realizada por três esportistas locais: Raimundo Marques, Mário Ferraz de Campos e 
                            Argemiro de Souza Júnior. Eles desejavam formar uma equipe de futebol que representasse a cidade de Santos, já que na época o esporte estava se 
                            popularizando rapidamente no Brasil.</p>

                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">A primeira reunião oficial aconteceu na sede do Clube Concórdia, no centro de Santos. Durante o encontro, foi decidido que o nome do novo 
                            clube seria "Santos Foot-Ball Club" e as cores escolhidas para o uniforme seriam o branco e o azul celeste. Entretanto, o azul celeste foi posteriormente abandonado, 
                            e o clube passou a adotar o uniforme totalmente branco, que se tornaria uma de suas marcas registradas.</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                    <img src={PrimeiroTreino} className="img-section" alt="Primeiro Time do Alvinegro Praiano"/>
                    <p className="p-subsection">Primeiro Treino do Santos</p>
                    <p className="p-subsection">Créditos da Imagem: Santos FC</p>

                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                    <p className="p-subsection">
                     O clube conquistou seu primeiro título em 1935, apenas um ano após sua fundação, ao vencer
                     o <strong style={{color: "#007bff"}}> Campeonato Paulista de 2013</strong>. Com o passar dos anos, o Santos continuou a crescer e a se destacar no cenário regional.
                    </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                    <img src={PrimeiroTitulo} className="img-section" alt="Primeiro Time do Alvinegro Praiano"/>
                    <p className="p-subsection">Elenco Do Primeiro Titulo Grande Da História Do Santos</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2  className="h2-subsection">A Era Pelé e a Glória Mundial (1950-1974)</h2>                
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                    <img src={PeleHistoria} className="img-section" alt="Pelé"/>
                    <p className="p-subsection">Rei Pelé, O Maior De Todos Os Tempos</p>
                    </AnimatedScroll>


                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">O grande salto para o reconhecimento nacional e internacional veio nas décadas de 1950 e 1960, quando o Santos revelou ao mundo o
                             maior jogador de todos os tempos: Pelé. Com Pelé, que é o maior da história do futebol e o maior atleta de todos os tempos, e outros grandes jogadores como
                              Coutinho, Pepe e Zito, o Santos dominou o futebol brasileiro e internacional, conquistando inúmeros títulos. Durante a "Era Pelé", o Santos conquistou 
                              seis <strong style={{color: "#007bff"}}> Campeonatos Brasileiros</strong>, dez <strong style={{color: "#007bff"}}> Campeonatos Paulistas</strong>, duas 
                              <strong style={{color: "#007bff"}}> Taças Libertadores da América</strong> (1962 e 1963) e dois 
                              <strong style={{color: "#007bff"}}> Mundiais Interclubes</strong> (1962 e 1963).
                              </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                    <img src={PeleCoutinhoPepe} className="img-section" alt="Pelé"/>
                    <p className="p-subsection">O Maior Trio De Ataque Da História: Pelé, Pepé e Coutinho</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">Pós-Pelé e a Primeira Geração de Meninos da Vila (1978-1984)</h2>                     
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                    <img src={JuaryPita} className="img-section" alt="Juary e Pita"/>
                    <p className="p-subsection">Juary e Pita Pelo Campeonato Paulista de 1978</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Após a saída de Pelé em 1974, o Santos passou por um período difícil, mas conseguiu se reerguer em 1978 com a primeira geração de "Meninos da Vila", 
                        composta por jovens talentos como Juary e Pita, e liderada pelo experiente Clodoaldo. Esse time conquistou o <strong style={{color: "#007bff"}}> Campeonato Paulista de 1978</strong>,
                        contra o São Paulo, trazendo de volta a
                         alegria para a torcida santista.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Nos anos 1980 e 1990, o Santos voltou a viver um período de escassez de títulos, conquistando apenas o <strong style={{color: "#007bff"}}> Campeonato Paulista
                         de 1984</strong>, contra o Corinthians, com Serginho Chulapa como destaque.
                         Após esse título, o clube enfrentou uma longa seca, permanecendo sem conquistar títulos de grande expressão até 2002.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                    <img src={SerginhoChulapa} className="img-section" alt="Serginho Chulapa"/>
                    <p className="p-subsection">Serginho Chulapa Atuando Pelo Santos</p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">A Segunda Geração de Meninos da Vila (2002-2005)</h2>
                        <img src={DiegoRobinho} className="img-section" alt="Diego e Robinho"/>
                        <p className="p-subsection">Diego e Robinho Comemorando O Título Brasileiro De 2002</p>                       
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Em 2002, a segunda geração de "Meninos da Vila", formada por Diego, Robinho, Alex e Elano, levou o Santos à conquista do <strong style={{color: "#007bff"}}> 
                            Campeonato Brasileiro de 2002</strong>, repetindo o 
                        feito em 2004. Eles também foram vice-campeões da <strong style={{color: "#007bff"}}> Taça Libertadores da América de 2003</strong>, um feito notável, já que o clube estava há 19 anos sem disputar a competição.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">A Terceira Geração de Meninos da Vila (2010-2013)</h2>
                        <img src={NeymarGanso} className="img-section" alt="Neymar e Ganso"/>
                        <p className="p-subsection">Ganso e Neymar, Os Craques Do Santos Na Década De 2010</p>  
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Após boas campanhas entre 2006 e 2007, e um período ruim em 2008 e 2009, a magia voltou à Vila Belmiro em 2010 com a explosão de Neymar, Ganso, André e o 
                        retorno de Robinho. Esse quarteto encantou o Brasil, conquistando o <strong style={{color: "#007bff"}}> Campeonato Paulista 2010</strong> e a 
                        <strong style={{color: "#007bff"}}> Copa do Brasil 2010</strong>, formando o melhor ataque do Paulista no século
                         e o melhor ataque da história da Copa do Brasil.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Em 2011, Neymar e Ganso lideraram a campanha vitoriosa na <strong style={{color: "#007bff"}}> Copa Libertadores da América 2011</strong>, 
                        conquistando um título que, até então, só Pelé, Coutinho e Pepe haviam ganho
                         pelo Santos.
                         <br></br>
                         <br></br>
                          Em 2012, vieram os últimos títulos dessa geração: o tricampeonato Paulista seguido e o título inédito da 
                         <strong style={{color: "#007bff"}}> Recopa Sul-Americana 2012</strong>. Esses títulos marcaram o fim de
                          uma era, pois Ganso foi vendido em 2012 e Neymar saiu em 2013.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">A Geração do Quase(2014-2016) </h2>
                        <img src={Gabigol} className="img-section" alt="Gabigol"/>
                        <p className="p-subsection">Gabigol Em 2015 Pelo Santos</p>                      
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Entre 2014 e 2016, o Santos teve a chamada "geração do quase", liderada por Ricardo Oliveira e Gabriel Barbosa. Esse time foi vice-campeão do
                        <strong style={{color: "#007bff"}}> Campeonato Paulista
                         de 2014</strong>, campeão do Paulista em 2015 e 2016, vice-campeão da <strong style={{color: "#007bff"}}>Copa do Brasil 2015 </strong>
                          e vice-campeão do <strong style={{color: "#007bff"}}> Campeonato Brasileiro 2016</strong>. Apesar dos sucessos nos
                          Paulistas, essa geração ficou marcada pelas derrotas em momentos decisivos nas competições mais importantes. 
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">Período de Oscilação, Crise e Rebaixamento Histórico(2017-2023)</h2>
                        <img src={MarcosLeonardo} className="img-section" alt="Marcos Leonardo"/>
                        <p className="p-subsection">Marcos Leonardo, Principal Jogador Do Santos No Pior Período Da História</p>                         
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Entre 2017 e 2021, o Santos viveu uma fase com alguns resultados positivos, semelhantes aos de 2006-2007, mas nada que marcasse profundamente a memória do
                         torcedor. Nesse período, o clube alcançou o terceiro lugar no <strong style={{color: "#007bff"}}> Campeonato Brasileiro 2017</strong>,
                          teve um ano terrível em 2018, foi vice-campeão do 
                          <strong style={{color: "#007bff"}}> Campeonato Brasileiro 2019</strong> e vice-campeão da 
                          <strong style={{color: "#007bff"}}> Copa Libertadores da América 2020</strong>, perdendo a final para o 
                          Palmeiras.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Entre 2021 e 2023, o Santos passou pela pior fase de sua história. Sob a presidência de Andrés Rueda, o clube lutou contra o rebaixamento durante três anos
                         consecutivos. Infelizmente, apesar dos esforços, o Santos não conseguiu escapar e foi rebaixado pela primeira vez em sua história ao final de 2023.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                    <img src={JoaoPaulo} className="img-section" alt="Joao Paulo"/>
                    <p className="p-subsection">João Paulo, Goleiro Do Santos Chorando Após O Rebaixamento Do Santos</p>     
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h2 className="h2-subsection">2024: Um Ano de Dificuldades e Série B</h2>
                        <img src={Santos2024} className="img-section" alt="Elenco do Santos em 2024"/>
                        <p className="p-subsection">Elenco do Santos Vice-Paulista em 2024</p> 
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Em 2024, o Santos viveu um ano estranho e difícil. O time foi vice-campeão do <strong style={{color: "#007bff"}}> Campeonato Paulista 2024</strong>, perdendo 
                        mais uma vez para o rival Palmeiras. 
                        Além disso, o Santos disputou a Série B do Campeonato Brasileiro com um futebol medíocre, refletindo a crise que se abateu sobre o clube.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <p className="p-subsection">
                        Essa sequência de eventos representa um dos períodos mais desafiadores para o Santos Futebol Clube, que, apesar de sua rica história, enfrenta agora a difícil
                         tarefa de se reerguer e retornar aos seus dias de glória.
                        </p>
                    </AnimatedScroll>

                    <AnimatedScroll animationClass="animate-hidden">
                        <h1 className="h1-subsection">#VOLTA NEYMAR, PELO AMOR DE DEUS!</h1>
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

                    <AnimatedScroll animationClass="animate-hidden">
                        
                    </AnimatedScroll>
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Historia;