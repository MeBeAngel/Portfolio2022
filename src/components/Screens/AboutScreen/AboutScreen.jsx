import React from "react";
import { Col } from "react-bootstrap";

export default function AboutScreen() {
  return (
    <Col className="gameboy-inner-top__screen d-flex flex-column justify-content-center align-items-center text-center text-secondary">
      <h3 className="text-danger">HI, I'm Angel!</h3>
      <p>
        I'm a Jr. Software engineer with the ability to learn and collaborate in
        rapidly changing environments. I Worked through hundreds of hours of
        bootcamp structure, learning JavaScript, React.Js, Node.Js, and MongoDB.
        Whenever I'm not coding, I'm probably playing video games, writing or
        reading a good book.
      </p>
    </Col>
  );
}
