import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BackBtn() {
  return (
    <Row className="text-start py-4">
      <Col>
        <Link to="/">
          <Button variant="dark">Back</Button>
        </Link>
      </Col>
    </Row>
  );
}
