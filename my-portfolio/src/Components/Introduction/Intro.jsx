import { Container, Button } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import MyPicture from "../../Images/MyPicture.jpeg";

const Intro = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-white"
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom right, #E0F7FA, #FFEBEE)",
          clipPath: "inset(0% round 30px)",
          zIndex: -1,
        }}
      ></div>

      <Container className="text-center position-relative">
        <Slide triggerOnce direction="down">
          <div className="mb-4">
            <img
              src={MyPicture}
              alt="Aarti Kale"
              className="rounded-circle border border-light shadow-lg"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
          </div>
          <h1
            className="display-4 fw-bold"
            style={{
              fontFamily: "Poppins, sans-serif",
              letterSpacing: "2px",
              color: "#00796B",
            }}
          >
            Hi! I’m Aarti Kale
          </h1>
        </Slide>
        <Slide triggerOnce direction="up">
          <p
            className="lead"
            style={{
              fontFamily: "Open Sans, sans-serif",
              color: "#333333",
              marginTop: "20px",
            }}
          >
            A passionate Full-Stack Developer specializing in modern web
            applications.
          </p>
          <Button
            href="#projects"
            variant="light"
            size="lg"
            className="mt-3"
            style={{ fontWeight: "600", padding: "10px 25px" }}
          >
            View My Work
          </Button>
        </Slide>
      </Container>
    </div>
  );
};

export default Intro;
