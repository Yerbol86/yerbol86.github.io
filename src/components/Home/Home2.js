import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               Позвольте мне <span className="purple"> Представится </span> 
            </h1>
            <p className="home-about-body">
              Я люблю програмировать и думаю, что чему то научился 🤷‍♂️
              <br />
              <br /> Я учусь всегда чему то новому и уже владею инструментами такими как
              <i>
                <b className="purple"> Javascript and HTML. </b>
              </i>
              <br />
              <br />
              В сферу моих интересов входят создание новых &nbsp;
              <i>
                <b className="purple">веб-технологий и продуктов  </b>
                а также в областях, связанных с {" "}
                <b className="purple">
                Стать "синьором девелопером", создать крутой прект.
                </b>
              </i>
              <br />
              <br />
              когда это возможно я учусь применять новые фишки в <b className="purple">Node.js</b> и
              <i>
                <b className="purple">
                  {" "}
                  Современная библиотека Javascript и фреймворки
                </b>
              </i>
              &nbsp; нравится
              <i>
                <b className="purple"> React.js и Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Я В СОЦСЕТЯХ</h1>
            <p>
              Не стесняйся <span className="purple">нажми </span>  меня
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Yerbol86"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Esaranzhipov"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yerbol-saranzhipov-60439b57/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yerbol86/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
