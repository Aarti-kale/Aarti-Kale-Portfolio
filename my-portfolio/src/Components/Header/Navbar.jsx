import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className="shadow-sm"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className=" font-weight-bold"
            style={{ color: "#00796B", fontWeight: "bold" }}
          >
            Aarti Kale
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" className="px-3 text-light">
                About Me
              </Nav.Link>
              <Nav.Link href="#skills" className="px-3 text-light">
                My Skills
              </Nav.Link>
              <Nav.Link href="#projects" className="px-3 text-light">
                {" "}
                My Projects
              </Nav.Link>
              <Nav.Link href="#contact" className="px-3 text-light">
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
