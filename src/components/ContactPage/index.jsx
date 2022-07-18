import React from "react";
import BackBtn from "../BackBtn";
import PageTitle from "../PageTitle";
import FormSection from "./FormSection";
import Footer from "../Footer";
import { Container } from "react-bootstrap";

export default function ContactPage() {
  return (
    <Container>
      <BackBtn />
      <PageTitle text="Contact" />
      <FormSection />
      <Footer />
    </Container>
  );
}
