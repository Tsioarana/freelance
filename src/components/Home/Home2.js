import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/developpeur.png";
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
            <h1 style={{ fontSize: "3.6em" }}>
              Je suis <span className="purple"> ANGELOT </span> Développeur Freelance
            </h1>
            <p className="home-about-body">
            Je suis développeur web freelance basé à Madagascar et toujours disponible pour vos projets.
        Avec mon équipe de développeurs, rédacteurs et graphistes, nous créons des solutions numériques complètes.
        N’hésitez pas à me contacter pour discuter de vos besoins et concrétiser vos idées !

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
