import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuSection from "./MenuSection";
import Angel from "../../assets/Angel-Dark.png";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <Container className="home-page d-flex flex-column justify-content-center align-items-center">
      <Row className="profile-img mb-3">
        <Col>
          <img
            className="shadow border border-secondary bg-dark border-4"
            src={Angel}
            alt=""
          />
        </Col>
      </Row>

      <Row className="text-light text-center bg-dark rounded shadow border border-secondary border-4 py-4 px-2 mx-1">
        <Col>
          <p className="mb-3">
            Hi my name is Angel! I'm a web developer who loves programming,
            video games and anime. If you'd like to hire me or just collaborate
            on a fun project, feel free to contact me!
          </p>
          <MenuSection />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
