import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BackBtn from "../BackBtn";
import PageTitle from "../PageTitle";

export default function ProjectsPage() {
  return (
    <Container>
      <BackBtn />
      <PageTitle text="Projects" />
    </Container>
  );
}
