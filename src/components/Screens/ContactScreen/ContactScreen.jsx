import React from "react";
import { Col, Form, Button } from "react-bootstrap";

export default function ContactScreen({ contactSlideNum }) {
  return (
    <Col className="gameboy-inner-top__screen d-flex flex-column justify-content-center align-items-center text-light">
      <Form>
        {contactSlideNum === 0 && (
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>What is your name?</Form.Label>
            <Form.Control type="text" placeholder="name.." />
          </Form.Group>
        )}
        {contactSlideNum === 1 && (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>What is your email?</Form.Label>
            <Form.Control type="email" placeholder="email.." />
          </Form.Group>
        )}
        {contactSlideNum === 2 && (
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>What is your message?</Form.Label>
            <Form.Control as="textarea" type="text" placeholder="message.." />
          </Form.Group>
        )}
        {contactSlideNum === 3 && (
          <Button variant="warning" type="submit">
            Submit
          </Button>
        )}
      </Form>
    </Col>
  );
}
