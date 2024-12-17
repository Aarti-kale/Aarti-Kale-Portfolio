import { Container, Row, Col, Button } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import MyPicture from "../../Images/MyPicture.jpeg";

const About = () => {
  return (
    <div
      className="text-white py-5"
      style={{
        background: "linear-gradient(120deg, #E0F7FA, #FFEBEE)",
        minHeight: "100vh",
        color: "#00796B",
      }}
    >
      <Container id="about">
        <Row className="align-items-center">
          <Col md={5} className="text-center">
            <Fade triggerOnce direction="left">
              <img
                src={MyPicture}
                alt="Aarti Kale"
                className="rounded-circle border border-light shadow-sm mb-4"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </Fade>
          </Col>
          <Col md={7}>
            <Fade triggerOnce direction="right">
              <h2
                className="text-center fw-bold mb-5"
                style={{ fontFamily: "Poppins, sans-serif", color: "#00796B" }}
              >
                About Me
              </h2>

              <p
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "1.1em",
                  color: "#004D40",
                  lineHeight: "1.6",
                }}
              >
                Hi there! I’m Aarti Kale, a passionate student and aspiring
                Full-Stack Developer with a strong focus on the MERN stack
                (MongoDB, Express.js, React, and Node.js). Currently pursuing my
                studies, I'm dedicated to applying my technical knowledge to
                real-world projects and constantly learning in this dynamic
                field.
              </p>
              <p
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "1.1em",
                  color: "#004D40",
                  lineHeight: "1.6",
                }}
              >
                My journey with MERN has given me hands-on experience in
                building responsive and user-friendly applications. I am
                curious, eager, and ready to take on new challenges where I can
                learn, contribute, and grow. I’m excited to start my
                professional journey, apply my skills, and bring fresh energy to
                a development team.
              </p>
              <p
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "1.1em",
                  color: "#004D40",
                  lineHeight: "1.6",
                }}
              >
                I am actively looking for opportunities to work with experienced
                developers, learn best practices, and contribute to meaningful
                projects. I look forward to connecting and exploring how I can
                make an impact.
              </p>
              <Button
                href="#contact"
                variant="outline-dark"
                size="lg"
                className="mt-3"
                style={{ fontWeight: "600", padding: "10px 25px" }}
              >
                Connect with Me
              </Button>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
