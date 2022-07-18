import React from "react";
import { Row, Col } from "react-bootstrap";

export default function PageTitle({ text }) {
  return (
    <Row className="page-title text-center">
      <Col>
        <h1 className="m-0">{text}</h1>
      </Col>
    </Row>
  );
}
