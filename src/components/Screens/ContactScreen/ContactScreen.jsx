import React from "react";
import { Col, Form } from "react-bootstrap";

export default function ContactScreen({
  handleSubmit,
  setInputField,
  inputField,
  formRef,
}) {
  const handleChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  return (
    <Col className="contact-screen gameboy-inner-top__screen d-flex flex-column justify-content-center align-items-center text-secondary">
      <h4 className="title text-danger mb-0">Let's Connect!</h4>
      <Form ref={formRef} id="contact-form" action="" onSubmit={handleSubmit}>
        <Form.Group
          className="form-question text-danger mb-3 visible"
          controlId="name"
        >
          <Form.Control
            className="shadow"
            name="user_name"
            type="text"
            placeholder="Name"
            value={inputField.user_name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group
          className="form-question text-danger mb-3 visible"
          controlId="email"
        >
          <Form.Control
            className="shadow"
            name="user_email"
            type="email"
            placeholder="Email"
            value={inputField.user_email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group
          className="form-question text-danger mb-3 visible"
          controlId="message"
        >
          <Form.Control
            className="shadow"
            name="message"
            rows="3"
            as="textarea"
            type="text"
            placeholder="Message.."
            value={inputField.message}
            onChange={handleChange}
          />
        </Form.Group>

        {inputField.user_name && inputField.user_email && inputField.message ? (
          <div className="submit-message text-center">
            <p className="text-danger">Press A to submit</p>
          </div>
        ) : (
          ""
        )}
      </Form>
    </Col>
  );
}
