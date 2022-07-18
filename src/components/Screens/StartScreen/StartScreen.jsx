import React from "react";
import { Col } from "react-bootstrap";
import Angel from "../../../assets/AngelGameboy.png";

export default function StartScreen() {
  return (
    <Col
      className="gameboy-inner-top__screen d-flex justify-content-center align-items-center text-danger"
      style={{ backgroundImage: `url(${Angel})` }}
    >
      <h1>PRESS START</h1>
    </Col>
  );
}
