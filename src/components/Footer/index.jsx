import React from "react";
import { Row, Col } from "react-bootstrap";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

export default function Footer() {
  return (
    <Row className="footer w-100 text-end mt-3">
      <Col>
        {/* Link to Linkedin */}
        <a
          className="me-2"
          href="https://linkedin.com/in/angel-g-702311122"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="" width="25px" />
        </a>
        {/* Link to Github */}
        <a href="https://github.com/MeBeAngel" target="_blank" rel="noreferrer">
          <img src={Github} alt="" width="25px" />
        </a>
      </Col>
    </Row>
  );
}
