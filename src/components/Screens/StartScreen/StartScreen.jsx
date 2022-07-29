import React from "react";
import { Col } from "react-bootstrap";
import Angel from "../../../assets/Angel-dark.png";

export default function StartScreen() {
  return (
    <div
      className="gameboy-inner-top__screen d-flex justify-content-center align-items-center text-danger"
      style={{ backgroundImage: `url(${Angel})` }}
    >
      <h1 className="screen-title">PRESS START</h1>
    </div>
  );
}
