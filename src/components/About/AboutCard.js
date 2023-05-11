import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Привет всем, Я <span className="purple"> Saranzhipov Yerbol </span>
            из <span className="purple"> Астана, Казахстан.</span>
            <br />Я junior разработчик, учусь разработке сайтов и приложений.
            <br />
            <br />
            Кроме разработке я люблю!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Играть игры
            </li>
            <li className="about-activity">
              <ImPointRight /> Увликаюсь различной техникой
            </li>
            <li className="about-activity">
              <ImPointRight /> Путишествовать
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Стремлюсь быть послезным и состоятельным!"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
