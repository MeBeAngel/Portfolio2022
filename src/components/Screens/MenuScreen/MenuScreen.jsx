import React from "react";
import { Col } from "react-bootstrap";
import Cursor from "../../../assets/Cursor.png";

export default function MenuScreen({ menuNum }) {
  return (
    <Col className="gameboy-inner-top__screen d-flex justify-content-center align-items-center text-danger">
      <div className="menu">
        <div className="menu-item">
          <span>
            <h2 className="text-secondary">ABOUT</h2>
            {menuNum === 3 ? (
              <img className="menu-cursor" src={Cursor} alt="" />
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="menu-item">
          <span>
            <h2 className="text-secondary">PROJECTS</h2>
            {menuNum === 2 ? (
              <img className="menu-cursor" src={Cursor} alt="" />
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="menu-item">
          <span>
            <h2 className="text-secondary">RESUME</h2>
            {menuNum === 1 ? (
              <img className="menu-cursor" src={Cursor} alt="" />
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="menu-item">
          <span>
            <h2 className="text-secondary">CONTACT</h2>
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
