import React from "react";
import { Container } from "react-bootstrap";
import BackBtn from "../BackBtn";
import PageTitle from "../PageTitle";

export default function ResumePage() {
  return (
    <Container>
      <BackBtn />
      <PageTitle text="Resume" />
    </Container>
  );
}
