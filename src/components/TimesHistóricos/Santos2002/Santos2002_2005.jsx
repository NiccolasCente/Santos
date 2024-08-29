// Componente React
import React, { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";

//Componentes CSS
import "../Santos2002/Santos2002.css";
import "../../../assets/styles/SubSection.css";

//Componentes Imagens
import Time2002 from "../../../assets/Santos2002/2002_time.webp";
import TimeFoto01 from "../../../assets/Santos2002/comemorando.png";
import Diego from "../../../assets/Santos2002/diego_santos.webp";
import Robinho from "../../../assets/Santos2002/robinho_2002.webp";

const Santos2002_2005 = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`meninos-da-vila-2002-2005 ${theme}`}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="text-center">
              <h1 className="h1-subsection">Geração Diego e Robinho (2002-2005)</h1>
              <img src={Time2002} className="img-section" alt="Time de 2002" />
              <p className="p-subsection">Escalação do time titular na final de 2002!</p>
              <h4 className="h4-subsection">Títulos Ganhos:<br /></h4>
              <p className="p-subsection">Campeonato Brasileiro 2002</p>
              <p className="p-subsection">Campeonato Brasileiro 2004</p>
              <h2 className="h2-subsection">
                Antes do raio cair novamente no mesmo lugar.<br></br> <span className="upercase">PELA SEGUNDA VEZ!</span>
              </h2>
              <img src={TimeFoto01} className="img-section" alt="Time Comemorando"/>
              <br></br>
              <p className="p-subsection">Após anos e anos de marasmo, aquele time que encantou o Brasil na década de 60 com O Rei Pelé e seu parceiro Coutinho, na década de 2000, não passava de um clube pobre e que não disputava nada.</p>
              <br></br>
              <p className="p-subsection">Pelo fato de ter comprado jogadores caros e que não renderam nenhum título e consequentemente dinheiro, o Santos começou a entrar em falência, fazendo com que assim,<br></br>
                 voltassem a usar a única coisa que deu sucesso para o clube em seus 110 anos(90 na época), 
                 <span className="highlight">A BASE.</span></p>
              <h2 className="h2-subsection">O Surgimento de Diego, Robinho, Alex e Elano.</h2>  
              <div className="text-center">
              <img src={Diego} className="img-section" alt="Diego Ribas"/>
              </div> 

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Santos2002_2005;
