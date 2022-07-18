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
  const [startBtn, setStartBtn] = useState(false);
  const [menuNum, setMenuNum] = useState(2);
  const [play] = useSound(CursorSound);

  const handleStartBtnClick = () => {
    setStartBtn(true);
  };

  const handleUpClick = () => {
    if (menuNum < 2 && startBtn) {
      setMenuNum(menuNum + 1);
      play();
    }
  };

  const handleDownClick = () => {
    if (menuNum > 0 && startBtn) {
      setMenuNum(menuNum - 1);
      play();
    }
  };

  return (
    <Container fluid className="home-page p-0">
      <Row className="gameboy-shell d-flex flex-column bg-dark p-0 m-0 mx-auto">
        {/* Gameboy top screen section */}
        <Screens startClicked={startBtn} menuNum={menuNum} />
        {/* Gameboy bottom control section */}
        <Col className="gameboy-inner-bottom">
          <Row className="px-3" style={{ height: "60%" }}>
            {/* Directional buttons section */}
            <Col className="col-5 me-auto p-0">
              <div className="d-pad">
                <div className="horizontal-btn bg-secondary d-flex justify-content-between align-items-center shadow p-2">
                  <Button className="p-0 bg-secondary border-0 d-flex justify-content-between align-items-center">
                    <img src={Left} alt="" width="10px" />
                  </Button>
                  <Button className="p-0 bg-secondary border-0 d-flex justify-content-between align-items-center">
                    <img src={Right} alt="" width="10px" />
                  </Button>
                </div>
                <div className="vertical-btn bg-secondary d-flex flex-column justify-content-between align-items-center p-2">
                  <Button
                    className="p-0 bg-secondary border-0 d-flex justify-content-between align-items-center"
                    onClick={handleUpClick}
                  >
                    <img src={Up} alt="" width="13px" />
                  </Button>
                  <Button
                    className="p-0 bg-secondary border-0 d-flex justify-content-between align-items-center"
                    onClick={handleDownClick}
                  >
                    <img src={Down} alt="" width="13px" />
                  </Button>
                </div>
              </div>
            </Col>
            {/* A and B buttons section */}
            <Col className="col-5 d-flex flex-column justify-content-center">
              <Button className="play-btns btn-secondary d-flex justify-content-center align-items-center shadow ms-auto">
                <img src={A} alt="" width="20px" />
              </Button>
              <Button className="play-btns btn-secondary d-flex justify-content-center align-items-center shadow">
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
