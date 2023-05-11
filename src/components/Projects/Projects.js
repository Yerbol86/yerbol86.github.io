import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Мои недавние <strong className="purple"> Работы </strong>
        </h1>
        <p style={{ color: "white" }}>
        Вот несколько проектов, над которыми я работал в последнее время.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Скоро добавлю много хороших проектов на GitHub, пока ссылка не работает"

            />
          </Col>

          <Col md={4} className="project-card">

          </Col>

          <Col md={4} className="project-card">

          </Col>

          <Col md={4} className="project-card">

          </Col>

          <Col md={4} className="project-card">

          </Col>

          <Col md={4} className="project-card">
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
