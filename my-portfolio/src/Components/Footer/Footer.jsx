import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="text-center">
          <Col>
            <h5
              className="fw-bold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Connect with Me
            </h5>
            <div className="d-flex justify-content-center my-3">
              <a
                href="https://www.linkedin.com/in/aarti-kale-758897282"
                className="text-white mx-2"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/Aarti-kale"
                className="text-white mx-2"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.instagram.com/aartikale4420"
                className="text-white mx-2"
              >
                <FaInstagram size={30} />
              </a>
            </div>
            <p style={{ fontFamily: "Open Sans, sans-serif" }}>
              &copy; 2024 Aarti Kale. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
