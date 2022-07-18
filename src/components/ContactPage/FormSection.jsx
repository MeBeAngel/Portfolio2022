import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function FormSection() {
  return (
    <Row>
      <Col>
        <Form>
          <Form.Group className="mb-3 shadow" controlId="name">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3 shadow" controlId="email">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3 shadow" controlId="name">
            <Form.Control
              as="textarea"
              rows="4"
              type="text"
              placeholder="Message.."
            />
          </Form.Group>

          <Button type="submit" className="btn-dark shadow">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
