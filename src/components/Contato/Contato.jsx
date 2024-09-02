import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { ThemeContext } from "../common/ThemeProvider/ThemeContext";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import AnimatedScroll from "../../components/common/AnimatedScroll/AnimatedScroll";

// Import CSS
import "../Contato/Contato.css";

//Import Imagens
import Perfil from "../../assets/Contato/Imagens.jpeg";

const Contato = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`contato ${theme}`}>
      <Container>
        <div className="content-wrapper">
          <div>
            <img src={Perfil} className="img-section-contato" alt="Niccolas" />
            <div className="contact-icons">
              <a href="https://linkedin.com/in/niccolas-cente-ba989b23b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} />
              </a>
              <a href="https://github.com/NiccolasCente" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} />
              </a>
              <a href="mailto:niccolas.dev@hotmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={40} />
              </a>
            </div>
          </div>
          <div className="text-content">
            <AnimatedScroll animationClass="animate-hidden">
              <h1 className="h1-subsection">Olá, me Chamo Niccolas e sou o Desenvolvedor desse Site!</h1>
              <p className="p-subsection">
                Nasci em 2003, sou santista nascido e residente em Santo André. 
                Tornei-me torcedor em 2010 ao ir à Vila Belmiro ver Neymar, Robinho, Ganso e André.
                <br></br>
                <br></br>

                Estudo Sistemas de Informação desde 2021 e Desenvolvimento Front End desde junho de 2022.
                Este site foi uma junção dos meus dois principais amores: o Santos Futebol Clube e o Web Design.
                <br></br>
                <br></br>
                Se você deseja colaborar ou apenas trocar ideias, sinta-se à vontade para me contatar através das redes abaixo.
              </p>
            </AnimatedScroll>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contato;
