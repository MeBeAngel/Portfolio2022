import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import useSound from "use-sound";
import Screens from "../Screens/Screens";
import DPad from "./DPad";
import PlayBtns from "./PlayBtns";
import StartAndSelect from "./StartAndSelect";

import PressSound from "../../assets/audio/press.mp3";
import ClickSound from "../../assets/audio/click.mp3";
import projects from '../Screens/ProjectsScreen/projects';
import CornerVent from './CornerVent';

export default function GameBoy() {
  const [startBtnClicked, setStartBtnClicked] = useState(false);
  const [menuNum, setMenuNum] = useState(3);
  const [projectSlideNum, setProjectSlideNum] = useState(0);
  const [resumeSlideNum, setResumeSlideNum] = useState(0);
  const [currentScreen, setCurrentScreen] = useState("start");
  const [playClick] = useSound(ClickSound);
  const [playPress] = useSound(PressSound);
  const [inputField, setInputField] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const formRef = useRef();


  const handleStartBtnClick = () => {
    if (!startBtnClicked) {
      setStartBtnClicked(true);
      setCurrentScreen("menu");
    }
    playPress();
  };

  const handleSelectBtnClick = () => {
    playPress();
  };

  const handleUpBtn = () => {
    if (startBtnClicked && currentScreen === "menu") {
      if (menuNum < 3) {
        setMenuNum(menuNum + 1);
      }
    }
    playClick();
  };

  const handleDownBtn = () => {
    if (startBtnClicked && currentScreen === "menu") {
      if (menuNum > 0) {
        setMenuNum(menuNum - 1);
        playClick();
      }
    }
    playClick();
  };

  const handleRightBtn = () => {
    if (startBtnClicked && currentScreen === "projects") {
      if (projectSlideNum < (projects.length - 1)) {
        setProjectSlideNum(projectSlideNum + 1);
      }
    }
    if (startBtnClicked && currentScreen === "resume") {
      if (resumeSlideNum < 3) {
        setResumeSlideNum(resumeSlideNum + 1);
      }
    }
    playClick();
  };

  const handleLeftBtn = () => {
    if (startBtnClicked && currentScreen === "projects") {
      if (projectSlideNum > 0) {
        setProjectSlideNum(projectSlideNum - 1);
      }
    }
    if (startBtnClicked && currentScreen === "resume") {
      if (resumeSlideNum > 0) {
        setResumeSlideNum(resumeSlideNum - 1);
      }
    }
    playClick();
  };

  const handleAButtonClick = (e) => {
    if (startBtnClicked && currentScreen === "menu") {
      if (menuNum === 3) {
        setCurrentScreen("about");
      }
      if (menuNum === 2) {
        setCurrentScreen("projects");
      }
      if (menuNum === 1) {
        setCurrentScreen("resume");
      }
      if (menuNum === 0) {
        setCurrentScreen("contact");
      }
    }
    if (
      startBtnClicked &&
      currentScreen === "contact" &&
      inputField.user_name &&
      inputField.user_email &&
      inputField.message
    ) {
      e.preventDefault();
      handleSubmit();
      setCurrentScreen("menu");
    }
    playPress();
  };

  const handleBButtonClick = () => {
    if (startBtnClicked) {
      setCurrentScreen("menu");
      setProjectSlideNum(0);
      setResumeSlideNum(0);
      setInputField({ user_name: "", user_email: "", message: "" });
    }
    playPress();
  };

  const handleSubmit = () => {
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setInputField({ user_name: "", user_email: "", message: "" });
  };

  return (
    <div className="gameboy-shell">

      <div className="inner-top">
        <div className="screen">
          <Screens
            startBtnClicked={startBtnClicked}
            menuNum={menuNum}
            currentScreen={currentScreen}
            projectSlideNum={projectSlideNum}
            resumeSlideNum={resumeSlideNum}
            handleSubmit={handleSubmit}
            setInputField={setInputField}
            inputField={inputField}
            formRef={formRef}
          />
        </div>
      </div>

      <div className="inner-bottom">
        <div className="btn-row-1">
          <DPad
            handleLeftBtn={handleLeftBtn}
            handleRightBtn={handleRightBtn}
            handleUpBtn={handleUpBtn}
            handleDownBtn={handleDownBtn} />
          <PlayBtns
            currentScreen={currentScreen}
            handleAButtonClick={handleAButtonClick}
            handleBButtonClick={handleBButtonClick} />
        </div>
        <div className="btn-row-2">
          <StartAndSelect
            handleSelectBtnClick={handleSelectBtnClick}
            handleStartBtnClick={handleStartBtnClick} />
        </div>
      </div>
      <CornerVent />
    </div>
  );
}
