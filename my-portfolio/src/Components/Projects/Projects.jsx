import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
import Project1 from "../../Images/Project1.png";
import Project2 from "../../Images/Project2.png";

const projects = [
  {
    title: "Project 1",
    description:
      "An awesome portfolio project that showcases my skills in React and Bootstrap.",
    imageUrl: Project2,
    link: "https://link-to-project1.com",
  },
  {
    title: "Project 2",
    description:
      "A full-stack web application developed using the MERN stack. User friendly website for ordering foods in simple way.",
    imageUrl: Project1,
    link: "https://food-delivery-frontend-rleg.onrender.com",
  },
];

const Projects = () => {
  return (
    <Container
      id="projects"
      className="py-5"
      style={{
        background: "linear-gradient(120deg, #E0F7FA, #FFEBEE)",
        color: "#004D40",
      }}
    >
      <h2
        className="text-center mb-4 fw-bold"
        style={{ fontFamily: "Poppins, sans-serif", color: "#00796B" }}
      >
        Projects
      </h2>
      <Row>
        {projects.map((project, idx) => (
          <Col md={6} key={idx} className="mb-4">
            <Zoom triggerOnce>
              <Card className="shadow-sm" style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={project.imageUrl}
                  style={{ width: "100%", height: "250px", objectFit: "cover" }} 
                />
                <Card.Body>
                  <Card.Title className="fw-bold" style={{ color: "#00796B" }}>
                    {project.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#004D40" }}>
                    {project.description}
                  </Card.Text>
                  <a
                    href={project.link}
                    className="btn btn-outline-success fw-bold"
                    style={{ borderColor: "#00796B", color: "#00796B" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </Card.Body>
              </Card>
            </Zoom>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
