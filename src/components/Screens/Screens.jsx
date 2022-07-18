import React, { useState } from "react";
import StartScreen from "./StartScreen/StartScreen";
import MenuScreen from "./MenuScreen/MenuScreen";
import { Row, Col } from "react-bootstrap";

export default function Screen({ startClicked, menuNum }) {
  return (
    <Col className="gameboy-inner-top p-4">
      <Row className="p-0 m-0" style={{ width: "100%", height: "100%" }}>
        {!startClicked ? <StartScreen /> : ""}
        {startClicked ? <MenuScreen menuNum={menuNum} /> : ""}
      </Row>
    </Col>
  );
}
