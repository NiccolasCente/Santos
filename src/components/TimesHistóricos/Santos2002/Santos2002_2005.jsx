//Componente React
import React, {useContext} from "react";
import { ThemeContext } from "../../common/ThemeProvider/ThemeContext";

//Componente Bootstrap
import { Container, Row, Col } from "react-bootstrap";

//Componentes CSS
import "../Santos2002/Santos2002.css";

//Componentes Imagens
import Time2002 from "../../../assets/Santos2002/2002_time.webp";


const Santos2002_2005 = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <section className={`meninos-da-vila-2002-2005 ${theme}`}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="text-center">
              <h1>Geração Diego e Robinho (2002-2005)</h1>
              <img src={Time2002} className="img1-section" alt="Time de 2002"/>
              <p>Escalação do time titular na final de 2002!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Santos2002_2005;