import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaPhp, FaReact, FaVuejs, FaNodeJs, FaAngular } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiSymfony, SiDjango, SiFlutter } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const iconStyles = {
  html: { color: "#E44D26" },
  css: { color: "#1572B6" }, // Example color for CSS
  tailwind: { color: "#06B6D4" }, // Example color for Tailwind
  bootstrap: { color: "#563D7C" }, // Example color for Bootstrap
  node: { color: "#8CC84B" }, // Example color for Node.js
  react: { color: "#61DAFB" }, // Example color for React
  next: { color: "#000000" }, // Example color for Next.js
  vue: { color: "#42b883" }, // Example color for Vue.js
  angular: { color: "#DD0031" }, // Example color for Angular
  django: { color: "#0C4B33" }, // Example color for Django
  php: { color: "#777BBF" }, // Example color for PHP
  symfony: { color: "#000000" }, // Example color for Symfony
  git: { color: "#F05032" }, // Example color for Git
  flutter: { color: "#02569B" }, // Example color for Flutter
  reactNative: { color: "#61DAFB" },
};

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.html}>
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.css}>
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.tailwind}>
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.bootstrap}>
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.node}>
        <FaNodeJs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.react}>
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.next}>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.vue}>
        <FaVuejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.angular}>
        <FaAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.django}>
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.php}>
        <FaPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.symfony}>
        <SiSymfony />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.git}>
        <FaGitAlt />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.flutter}>
        <SiFlutter />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons" style={iconStyles.reactNative}>
        <TbBrandReactNative />
      </Col> */}
    </Row>
  );
}

export default Techstack;
