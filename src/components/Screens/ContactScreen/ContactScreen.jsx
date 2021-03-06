import React from "react";
import { Col, Form } from "react-bootstrap";
import RightArrow from "../../../assets/caret-right.svg";

export default function ContactScreen({
  contactSlideNum,
  handleSubmit,
  setInputField,
  inputField
}) {
  const handleChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value.trim() });
  };

  return (
    <Col className="gameboy-inner-top__screen d-flex flex-column justify-content-center align-items-center text-secondary">
      <Form id="contact-form" action="" onSubmit={handleSubmit}>
        {contactSlideNum === 0 && (
          <Form.Group
            className="form-question text-danger mb-3"
            controlId="name"
          >
            <Form.Label>What may I call you?</Form.Label>
            <Form.Control
              className="shadow"
              name="name"
              type="text"
              placeholder="Name"
              value={inputField.name}
              onChange={handleChange}
            />
            {inputField.name ? (
              <img className="next-arrow" src={RightArrow} alt="" />
            ) : (
              ""
            )}
          </Form.Group>
        )}
        {contactSlideNum === 1 && (
          <Form.Group
            className="form-question text-danger mb-3"
            controlId="email"
          >
            <Form.Label>How may I reach you?</Form.Label>
            <Form.Control
              className="shadow"
              name="email"
              type="email"
              placeholder="Email"
              value={inputField.email}
              onChange={handleChange}
            />
            {inputField.email ? (
              <img className="next-arrow" src={RightArrow} alt="" />
            ) : (
              ""
            )}
          </Form.Group>
        )}
        {contactSlideNum === 2 && (
          <Form.Group
            className="form-question text-danger mb-3"
            controlId="message"
          >
            <Form.Label>How may I help you?</Form.Label>
            <Form.Control
              className="shadow"
              name="message"
              rows="4"
              as="textarea"
              type="text"
              placeholder="Message.."
              value={inputField.message}
              onChange={handleChange}
            />
            {inputField.message ? (
              <img className="next-arrow" src={RightArrow} alt="" />
            ) : (
              ""
            )}
          </Form.Group>
        )}
        {contactSlideNum === 3 && (
          <div className="text-center">
            <p className="form-question text-danger">
              Press A button to contact
            </p>
          </div>
        )}
      </Form>
    </Col>
  );
}
