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
import CursorSound from "../../assets/audio/cursor-sound.mp3";

export default function GameBoy() {
  const [startBtnClicked, setStartBtnClicked] = useState(false);
  const [menuNum, setMenuNum] = useState(3);
  const [contactSlideNum, setContactSlideNum] = useState(0);
  const [currentScreen, setCurrentScreen] = useState("start");
  const [play] = useSound(CursorSound);

  const handleStartBtnClick = () => {
    setStartBtnClicked(true);
    setCurrentScreen("menu");
  };

  const handleUpClick = () => {
    if (menuNum < 3 && startBtnClicked && currentScreen === "menu") {
      setMenuNum(menuNum + 1);
      play();
    }
  };

  const handleDownClick = () => {
    if (menuNum > 0 && startBtnClicked && currentScreen === "menu") {
      setMenuNum(menuNum - 1);
      play();
    }
  };

  const handleRightBtn = () => {
    if (contactSlideNum < 3 && startBtnClicked && currentScreen === "contact") {
      setContactSlideNum(contactSlideNum + 1);
    }
  };

  const handleLeftBtn = () => {
    if (contactSlideNum > 0 && startBtnClicked && currentScreen === "contact") {
      setContactSlideNum(contactSlideNum - 1);
    }
  };

  const handleAButtonClick = () => {
    if (menuNum === 3 && currentScreen === "menu") {
      setCurrentScreen("about");
    }
    if (menuNum === 2 && currentScreen === "menu") {
      setCurrentScreen("projects");
    }
    if (menuNum === 1 && currentScreen === "menu") {
      setCurrentScreen("resume");
    }
    if (menuNum === 0 && currentScreen === "menu") {
      setCurrentScreen("contact");
    }
  };

  const handleBButtonClick = () => {
    setCurrentScreen("menu");
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
        />
        {/* Gameboy bottom control section */}
        <Col className="gameboy-inner-bottom">
          <Row className="px-3" style={{ height: "60%" }}>
            {/* Directional buttons section */}
            <Col className="col-5 me-auto p-0">
              <div className="d-pad">
                <div className="horizontal-btn bg-secondary d-flex justify-content-between align-items-center shadow p-2">
                  <Button
                    className="p-0 bg-secondary border-0 d-flex justify-content-between align-items-center"
                    onClick={handleLeftBtn}
                  >
                    <img src={Left} alt="" width="12px" />
                  </Button>
                  <Button
                    className="p-0 bg-secondary border-0 d-flex justify-content-between align-items-center"
                    onClick={handleRightBtn}
                  >
                    <img src={Right} alt="" width="12px" />
                  </Button>
                </div>
                <div className="vertical-btn bg-secondary d-flex flex-column justify-content-between align-items-center p-2">
                  <Button
                    className="p-0 bg-secondary border-0 d-flex justify-content-between align-items-center"
                    onClick={handleUpClick}
                  >
                    <img src={Up} alt="" width="15px" />
                  </Button>
                  <Button
                    className="p-0 bg-secondary border-0 d-flex justify-content-between align-items-center"
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
                className="play-btns btn-secondary d-flex justify-content-center align-items-center shadow ms-auto"
                onClick={handleAButtonClick}
              >
                <img src={A} alt="" width="20px" />
              </Button>
              <Button
                className="play-btns btn-secondary d-flex justify-content-center align-items-center shadow"
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
                <Button className="select-btn btn-secondary shadow"></Button>
                <p className="m-0 text-danger">Select</p>
              </div>
              <div
                className="text-center"
                style={{ transform: "rotate(-25deg)" }}
              >
                <Button
                  className="start-btn btn-secondary shadow"
                  onClick={handleStartBtnClick}
                ></Button>
                <p className="m-0 text-danger">Start</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
