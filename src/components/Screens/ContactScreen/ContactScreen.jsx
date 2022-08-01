import React from "react";
import { Form } from "react-bootstrap";

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
    <div className="contact-screen">

      <Form ref={formRef} id="contact-form" action="" onSubmit={handleSubmit}>
        {/* Title */}
        <h2 className="title">Let's Connect!</h2>

        {/* Name Input */}
        <Form.Group
          className="form-question mb-3 shadow"
          controlId="name"
        >
          <Form.Control
            className=""
            name="user_name"
            type="text"
            placeholder="Name"
            value={inputField.user_name}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Email Input */}
        <Form.Group
          className="form-question mb-3 shadow"
          controlId="email"
        >
          <Form.Control
            className=""
            name="user_email"
            type="email"
            placeholder="Email"
            value={inputField.user_email}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Message Input */}
        <Form.Group
          className="form-question shadow"
          controlId="message"
        >
          <Form.Control
            className=""
            name="message"
            rows="3"
            as="textarea"
            type="text"
            placeholder="Message.."
            value={inputField.message}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Submit Message */}
        <h6 className="submit-message">
        {inputField.user_name && inputField.user_email && inputField.message ? (
          "Press A to send!"
        ) : (
          ""
        )}
        </h6>
      </Form>
    </div>
  );
}
