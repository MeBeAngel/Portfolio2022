import React from "react";
import StartScreen from "./StartScreen/StartScreen";
import MenuScreen from "./MenuScreen/MenuScreen";
import AboutScreen from "./AboutScreen/AboutScreen";
import ProjectsScreen from "./ProjectsScreen/ProjectsScreen";
import ResumeScreen from "./ResumeScreen/ResumeScreen";
import ContactScreen from "./ContactScreen/ContactScreen";

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
    <>
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
    </>
  );
}
