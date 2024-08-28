// Componentes React
import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import { ThemeContext } from "../../components/common/ThemeProvider/ThemeContext";

// Componentes CSS
import "../Main/Main.css"; 

// Componentes Imagens
import Main1 from "../../assets/main1.jpeg";
import Main2 from "../../assets/main2.jpeg";
import Main3 from "../../assets/main3.jpeg";
import Main4 from "../../assets/main4.jpeg";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`inicio ${theme}`}>
      <Container>
        <Row>
          {/* esquerda */}
          <Col xs={6} className="d-flex flex-column align-items-center left-column">
            <div className="image-wrapper mb-3">
              <img src={Main1} alt="Imagem 1" className="img-fluid" />
              <Link to="/pele" className="link-text">
                <div className="image-text">Pelé</div>
              </Link>
            </div>
            <div className="image-wrapper">
              <img src={Main3} alt="Imagem 2" className="img-fluid" />
              <Link to="/meninos-da-vila" className="link-text">
                <div className="image-text">Times Históricos - Meninos da Vila 2002 - 2005</div>
              </Link>
            </div>
          </Col>

          {/* direita */}
          <Col xs={6} className="d-flex flex-column align-items-center right-column">
            <div className="image-wrapper mb-3">
              <img src={Main2} alt="Imagem 3" className="img-fluid" />
              <Link to="/libertadores-2011" className="link-text">
                <div className="image-text">Títulos Históricos - Copa Libertadores da América 2011</div>
              </Link>
            </div>
            <div className="image-wrapper">
              <img src={Main4} alt="Imagem 4" className="img-fluid" />
              <Link to="/neymar-jr" className="link-text">
                <div className="image-text">Neymar Jr.</div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
