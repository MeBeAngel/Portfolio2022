import React, { useState } from "react";
import StartScreen from "./StartScreen/StartScreen";
import MenuScreen from "./MenuScreen/MenuScreen";
import AboutScreen from "./AboutScreen/AboutScreen";
import ProjectsScreen from "./ProjectsScreen/ProjectsScreen";
import ResumeScreen from "./ResumeScreen/ResumeScreen";
import ContactScreen from "./ContactScreen/ContactScreen";
import { Row, Col } from "react-bootstrap";

export default function Screen({
  startBtnClicked,
  menuNum,
  currentScreen,
  projectSlideNum,
  resumeSlideNum,
  handleSubmit,
  setInputField,
  inputField,
  formRef
}) {
  return (
    <Col className="gameboy-inner-top p-4">
      <Row className="p-0 m-0" style={{ width: "100%", height: "100%" }}>
        {!startBtnClicked ? <StartScreen /> : ""}
        {currentScreen === "menu" ? <MenuScreen menuNum={menuNum} /> : ""}
        {currentScreen === "about" ? <AboutScreen /> : ""}
        {currentScreen === "projects" ? (
          <ProjectsScreen projectSlideNum={projectSlideNum} />
        ) : (
          ""
        )}
        {currentScreen === "resume" ? (
          <ResumeScreen resumeSlideNum={resumeSlideNum} />
        ) : (
          ""
        )}
        {currentScreen === "contact" ? (
          <ContactScreen
            handleSubmit={handleSubmit}
            setInputField={setInputField}
            inputField={inputField}
            formRef={formRef}
          />
        ) : (
          ""
        )}
      </Row>
    </Col>
  );
}
