import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import useSound from "use-sound";
import Screens from "../Screens/Screens";
import A from "../../assets/a.svg";
import B from "../../assets/b.svg";
import Up from "../../assets/caret-up.svg";
import Down from "../../assets/caret-down.svg";
import Left from "../../assets/caret-left.svg";
import Right from "../../assets/caret-right.svg";
import PressSound from "../../assets/audio/press.wav";
import ClickSound from "../../assets/audio/click.ogg";

export default function GameBoy() {
  const [startBtnClicked, setStartBtnClicked] = useState(false);
  const [menuNum, setMenuNum] = useState(3);
  const [contactSlideNum, setContactSlideNum] = useState(0);
  const [projectSlideNum, setProjectSlideNum] = useState(0);
  const [currentScreen, setCurrentScreen] = useState("start");
  const [playClick] = useSound(ClickSound);
  const [playPress] = useSound(PressSound);

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

  const handleUpClick = () => {
    if (startBtnClicked && currentScreen === "menu") {
      if (menuNum < 3) {
        setMenuNum(menuNum + 1);
      }
    }
    playClick();
  };

  const handleDownClick = () => {
    if (startBtnClicked && currentScreen === "menu") {
      if (menuNum > 0) {
        setMenuNum(menuNum - 1);
        playClick();
      }
    }
    playClick();
  };

  const handleRightBtn = () => {
    if (startBtnClicked && currentScreen === "contact") {
      if (contactSlideNum < 3) {
        setContactSlideNum(contactSlideNum + 1);
      }
    }
    if (startBtnClicked && currentScreen === "projects") {
      if (projectSlideNum < 2) {
        setProjectSlideNum(projectSlideNum + 1);
      }
    }
    playClick();
  };

  const handleLeftBtn = () => {
    if (startBtnClicked && currentScreen === "contact") {
      if (contactSlideNum > 0) {
        setContactSlideNum(contactSlideNum - 1);
      }
    }
    if (startBtnClicked && currentScreen === "projects") {
      if (projectSlideNum > 0) {
        setProjectSlideNum(projectSlideNum - 1);
      }
    }
    playClick();
  };

  const handleAButtonClick = () => {
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
    playPress();
  };

  const handleBButtonClick = () => {
    if (startBtnClicked) {
      setCurrentScreen("menu");
      setContactSlideNum(0);
      setProjectSlideNum(0);
    }
    playPress();
  };

  return (
    <Container
      fluid
      className="home-page d-flex justify-content-center align-items-center p-0"
    >
      <Row className="gameboy-shell d-flex flex-column bg-dark p-0 m-0 mx-auto shadow">
        {/* Gameboy top screen section */}
        <Screens
          startBtnClicked={startBtnClicked}
          menuNum={menuNum}
          currentScreen={currentScreen}
          contactSlideNum={contactSlideNum}
          projectSlideNum={projectSlideNum}
        />
        {/* Gameboy bottom control section */}
        <Col className="gameboy-inner-bottom">
          <Row className="px-3" style={{ height: "60%" }}>
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
                    onClick={handleUpClick}
                  >
                    <img src={Up} alt="" width="15px" />
                  </Button>
                  <Button
                    className="p-0 bg-light border-0 d-flex justify-content-between align-items-center"
                    onClick={handleDownClick}
                  >
                    <img src={Down} alt="" width="15px" />
                  </Button>
                </div>
              </div>
            </Col>
            {/* A and B buttons section */}
            <Col className="col-5 d-flex flex-column justify-content-center">
              <Button
                className="play-btns btn-light d-flex justify-content-center align-items-center ms-auto"
                onClick={handleAButtonClick}
              >
                <img src={A} alt="" width="20px" />
              </Button>
              <Button
                className="play-btns btn-light d-flex justify-content-center align-items-center"
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
