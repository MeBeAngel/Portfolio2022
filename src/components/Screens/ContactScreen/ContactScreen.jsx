import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function ContactScreen({
  handleSubmit,
  setInputField,
  inputField,
  formRef,
}) {
  const [touched, setTouched] = useState({
    user_name: false,
    user_email: false,
    message: false
  });
  const [errorMessage, setErrorMessage] = useState([]);

  const handleChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
    if (inputField.user_name) {
      setTouched({ ...touched, user_name: false });
    }
    if (inputField.user_email) {
      setTouched({ ...touched, user_email: false });
    }
    if (inputField.message) {
      setTouched({ ...touched, message: false });
    }
  };

  const handleBlur = (e) => {
    let target = e.target.name;
    if (target === "user_name") {
      if (!inputField.user_name) {
        console.log(`${target} was touched`);
        setTouched({ ...touched, user_name: true });
      }
    }
    if (target === "user_email") {
      if (!inputField.user_email) {
        console.log(`${target} was touched`);
        setTouched({ ...touched, user_email: true });
      }
    }
    if (target === "message") {
      if (!inputField.message) {
        console.log(`${target} was touched`);
        setTouched({ ...touched, message: true });
      }
    }
  }

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
            className={touched.user_name ? "border-danger" : ""}
            name="user_name"
            type="text"
            placeholder="Name"
            value={inputField.user_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>

        {/* Email Input */}
        <Form.Group
          className="form-question mb-3 shadow"
          controlId="email"
        >
          <Form.Control
            className={touched.user_email ? "border-danger" : ""}
            name="user_email"
            type="email"
            placeholder="Email"
            value={inputField.user_email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>

        {/* Message Input */}
        <Form.Group
          className="form-question shadow"
          controlId="message"
        >
          <Form.Control
            className={touched.message ? "border-danger" : ""}
            name="message"
            rows="3"
            as="textarea"
            type="text"
            placeholder="Message.."
            value={inputField.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>

        {/* Submit Message */}
        <h6 className="submit-message">
          {errorMessage[0]}
        </h6>
      </Form>
    </div>
  );
}
