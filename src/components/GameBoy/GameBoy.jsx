import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Button } from "react-bootstrap";
import useSound from "use-sound";
import Screens from "../Screens/Screens";
import A from "../../assets/a.svg";
import B from "../../assets/b.svg";
import Up from "../../assets/caret-up.svg";
import Down from "../../assets/caret-down.svg";
import Left from "../../assets/caret-left.svg";
import Right from "../../assets/caret-right.svg";
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
    <Container
      fluid
      className="home-page d-flex justify-content-center align-items-center p-0"
    >
      <Row className="gameboy-shell d-flex bg-dark p-0 m-0">
        {/* Gameboy top screen section */}
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
        {/* Gameboy bottom control section */}
        <Col className="gameboy-inner-bottom">
        <CornerVent />
          <Row className="play-btn-row px-3" style={{ height: "60%" }}>
            {/* Directional buttons section */}
            <Col className="col-5 me-auto p-0">
              <div className="d-pad">
                <div className="horizontal-btn bg-light d-flex justify-content-between align-items-center p-2">
                  <Button
                    className="p-0 bg-light border-0 d-flex justify-content-between align-items-center"
                    onClick={handleLeftBtn}
                  >
                    <img src={Left} alt="" width="12px" />
                  </Button>
                  <Button
                    className="p-0 bg-light border-0 d-flex justify-content-between align-items-center"
                    onClick={handleRightBtn}
                  >
                    <img src={Right} alt="" width="12px" />
                  </Button>
                </div>
                <div className="vertical-btn bg-light d-flex flex-column justify-content-between align-items-center p-2">
                  <Button
                    className="p-0 bg-light border-0 d-flex justify-content-between align-items-center"
                    onClick={handleUpBtn}
                  >
                    <img src={Up} alt="" width="15px" />
                  </Button>
                  <Button
                    className="p-0 bg-light border-0 d-flex justify-content-between align-items-center"
                    onClick={handleDownBtn}
                  >
                    <img src={Down} alt="" width="15px" />
                  </Button>
                </div>
              </div>
            </Col>
            {/* A and B buttons section */}
            <Col className="col-5 play-btns d-flex flex-column justify-content-center">
              <Button
                className="play-btn__A btn-light d-flex justify-content-center align-items-center"
                onClick={handleAButtonClick}
                type={ currentScreen === "contact" ? "submit" : "" } >
                <img src={A} alt="" width="20px" />
              </Button>
              <Button
                className="play-btn__B btn-light d-flex justify-content-center align-items-center"
                onClick={handleBButtonClick}
              >
                <img src={B} alt="" width="20px" />
              </Button>
            </Col>
          </Row>
          {/* Start and Select buttons section */}
          <Row className="start-and-select-btn-section">
            <Col className="d-flex justify-content-center align-items-center">
              <div
                className="text-center me-4"
                style={{ transform: "rotate(-25deg)" }}
              >
                <Button
                  className="select-btn btn-light"
                  onClick={handleSelectBtnClick}
                ></Button>
                <p className="select-text m-0 text-danger">SELECT</p>
              </div>
              <div
                className="text-center"
                style={{ transform: "rotate(-25deg)" }}
              >
                <Button
                  className="start-btn btn-light"
                  onClick={handleStartBtnClick}
                ></Button>
                <p className="start-text m-0 text-danger">START</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
