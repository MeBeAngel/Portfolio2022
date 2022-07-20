import React from "react";
import { Col } from "react-bootstrap";

export default function AboutScreen() {
  return (
    <Col className="gameboy-inner-top__screen d-flex flex-column justify-content-center align-items-center text-center text-light">
      <h2 className="">ABOUT</h2>
      <p>
        Right, Crocubot. So, you're half cold unfeeling reptile, half also cold
        equally unfeeling machine? Listen to your sister Morty; to live is to
        risk it all; otherwise you're just an inert chunk of randomly assembled
        molecules drifting wherever the universe blows you.
      </p>
    </Col>
  );
}
