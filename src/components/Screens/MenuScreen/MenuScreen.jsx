import React from "react";
import { Col } from "react-bootstrap";
import Cursor from "../../../assets/Cursor.png";

export default function MenuScreen({ menuNum }) {
  return (
    <Col className="gameboy-inner-top__screen d-flex justify-content-center align-items-center text-danger">
      <div className="menu">
        <div className="menu-item">
          <span>
            <h2 className="text-light">Projects</h2>
            {menuNum === 2 ? (
              <img className="menu-cursor" src={Cursor} alt="" />
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="menu-item">
          <span>
            <h2 className="text-light">Resume</h2>
            {menuNum === 1 ? (
              <img className="menu-cursor" src={Cursor} alt="" />
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="menu-item">
          <span>
            <h2 className="text-light">Contact</h2>
            {menuNum === 0 ? (
              <img className="menu-cursor" src={Cursor} alt="" />
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
    </Col>
  );
}
