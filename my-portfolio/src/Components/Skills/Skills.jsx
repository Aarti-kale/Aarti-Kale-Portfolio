import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Fade } from "react-awesome-reveal";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiVite,
  SiPostman,
  SiThunderbird,
} from "react-icons/si";

const skillCategories = {
  Frontend: [
    {
      name: "React",
      icon: <FaReact size={50} className="text-info" />,
      proficiency: 100,
      color: "#61DBFB",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 size={50} className="text-danger" />,
      proficiency: 100,
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={50} className="text-primary" />,
      proficiency: 100,
      color: "#2965F1",
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare size={50} className="text-warning" />,
      proficiency: 100,
      color: "#F0DB4F",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap size={50} className="text-purple" />,
      proficiency: 95,
      color: "#7952B3",
    },
    {
      name: "Vite",
      icon: <SiVite size={50} className="text-info" />,
      proficiency: 85,
      color: "#646CFF",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs size={50} className="text-success" />,
      proficiency: 100,
      color: "#3C873A",
    },
    {
      name: "Express.js",
      icon: <SiExpress size={50} className="text-dark" />,
      proficiency: 90,
      color: "#000000",
    },
  ],
  Database: [
    {
      name: "MongoDB",
      icon: <SiMongodb size={50} className="text-success" />,
      proficiency: 100,
      color: "#4DB33D",
    },
  ],
  Tools: [
    {
      name: "Git",
      icon: <FaGitAlt size={50} className="text-danger" />,
      proficiency: 95,
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={50} className="text-dark" />,
      proficiency: 95,
      color: "#181717",
    },
    {
      name: "Thunder Client",
      icon: <SiThunderbird size={50} className="text-primary" />,
      proficiency: 85,
      color: "#0052CC",
    },
    {
      name: "Postman",
      icon: <SiPostman size={50} className="text-warning" />,
      proficiency: 85,
      color: "#FF6C37",
    },
  ],
};

const Skills = () => {
  return (
    <Container id="skills" className="py-5">
      <Fade triggerOnce>
        <h2
          className="text-center fw-bold mb-5"
          style={{ fontFamily: "Poppins, sans-serif", color: "#00796B" }}
        >
          My Skills
        </h2>
      </Fade>

      {Object.keys(skillCategories).map((category, idx) => (
        <div key={idx} className="mb-5">
          <Fade triggerOnce>
            <h3
              className="text-center mb-4"
              style={{ fontFamily: "Poppins, sans-serif", color: "#00796B" }}
            >
              {category}
            </h3>
          </Fade>
          <Row>
            {skillCategories[category].map((skill, index) => (
              <Col md={4} key={index} className="mb-4">
                <Fade
                  triggerOnce
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <Card
                    className="text-center shadow-sm border-0"
                    style={{
                      background: "linear-gradient(135deg, #E0F7FA, #FFEBEE)",
                      borderRadius: "15px",
                    }}
                  >
                    <Card.Body>
                      <div className="mb-3">{skill.icon}</div>
                      <h5
                        className="fw-bold"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          color: skill.color,
                        }}
                      >
                        {skill.name}
                      </h5>
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          margin: "0 auto",
                        }}
                      >
                        <CircularProgressbar
                          value={skill.proficiency}
                          text={`${skill.proficiency}%`}
                          styles={buildStyles({
                            pathColor: skill.color,
                            textColor: "#333",
                            trailColor: "#d6d6d6",
                            textSize: "16px",
                          })}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default Skills;
