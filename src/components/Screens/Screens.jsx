import React from "react";
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
    <Col className="gameboy-inner-top p-3">
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
    </Col>
  );
}
