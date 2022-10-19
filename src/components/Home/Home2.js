import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a senior web developer, who can complete your project with
              100% honesty. <b className="purple">Win2Win</b> is my main working
              style.
              <br />
              When I work for my clients, I push myself to create high-quality
              work while keeping an eye for the most minutes details to ensure a
              product that won't fail. Furthermore, I really enjoy this type of
              work, as I make new and awesome projects come to life for clients
              with a dream. I will do my best to provide the perfect product for
              you.🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript, php and Python </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Node.js and Modern Javascript Library and Frameworks.
                </b>
              </i>
              <br />
              <br />I mad at &nbsp;
              <i>
                <b className="purple">FULLSTACK </b> and &nbsp;
                <b className="purple">Blockchain </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">MCU, AI</b>
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
