import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const WelcomeJourney = () => {
  const panels = [
    {
      title: "A Humble Beginning",
      content:
        "I am a college student exploring the world of tech. I believe learning never ends, and I respect the journey of everyone I meet.",
    },
    {
      title: "Grateful for Mentorship",
      content:
        "Guidance and wisdom from others inspire me. I’m always open to learning from experiences and advice shared by those more experienced.",
    },
    {
      title: "Driven by Curiosity",
      content:
        "My path in web development, particularly in the MERN stack, is fueled by curiosity and a desire to create something meaningful.",
    },
    {
      title: "Let’s Learn Together",
      content:
        "Whether you’re a peer or mentor, I’d love to connect, share knowledge, and collaborate on projects that inspire growth and innovation.",
    },
  ];

  return (
    <Container
      id="contact"
      className="py-5"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Fade triggerOnce direction="down">
        <h2
          className="text-center mb-4"
          style={{ color: "#2E7D32", fontWeight: "bold" }}
        >
          Welcome to My Journey
        </h2>
      </Fade>
      <Row className="justify-content-center">
        {panels.map((panel, idx) => (
          <Col md={6} lg={3} key={idx} className="mb-4">
            <Fade triggerOnce direction="up" delay={idx * 150}>
              <Card
                className="h-100 text-center p-3"
                style={{
                  background: "linear-gradient(120deg, #E0F7FA, #FFEBEE)",
                  color: "#2E7D32",
                  border: "none",
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold", color: "#1B5E20" }}>
                    {panel.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                    {panel.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Fade triggerOnce direction="up" delay={200}>
          <p style={{ color: "#004D40" }}>Or reach me directly at:</p>
          <p style={{ fontWeight: "bold", color: "#004D40" }}>
            Email: aartikale750@gmail.com
          </p>
        </Fade>
      </div>
    </Container>
  );
};

export default WelcomeJourney;
