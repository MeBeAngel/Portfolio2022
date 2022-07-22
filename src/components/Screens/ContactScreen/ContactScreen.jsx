import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import NextArrow from "../../../assets/next-arrow.svg";

export default function ContactScreen({ contactSlideNum }) {
  const [inputFilled, setInputFilled] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    if (e.target.value && e.target.id === "name") {
      setInputFilled({ ...inputFilled, name: e.target.value });
      console.log(inputFilled.name.trim().length);
    }
  };

  return (
    <Col className="gameboy-inner-top__screen d-flex flex-column justify-content-center align-items-center text-light">
      <Form>
        {contactSlideNum === 0 && (
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>What is your name?</Form.Label>
            <Form.Control
              type="text"
              placeholder="name.."
              onChange={handleChange}
            />
            {inputFilled.name ? (
              <div className="text-end">
                <img src={NextArrow} alt="" width="20px" />
              </div>
            ) : (
              ""
            )}
          </Form.Group>
        )}
        {contactSlideNum === 1 && (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>What is your email?</Form.Label>
            <Form.Control
              type="email"
              placeholder="email.."
              onChange={(e) => {
                setInputFilled({ ...inputFilled, email: e.target.value });
              }}
            />
            {inputFilled.email && (
              <div className="text-end">
                <img src={NextArrow} alt="" width="20px" />
              </div>
            )}
          </Form.Group>
        )}
        {contactSlideNum === 2 && (
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>What is your message?</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="message.."
              onChange={(e) => {
                setInputFilled({ ...inputFilled, message: e.target.value });
              }}
            />
            {inputFilled.message && (
              <div className="text-end">
                <img src={NextArrow} alt="" width="20px" />
              </div>
            )}
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
