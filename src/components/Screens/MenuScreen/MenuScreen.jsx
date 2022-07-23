import React from "react";
import { Col } from "react-bootstrap";
import Cursor from "../../../assets/Cursor.png";
import Linkedin from "../../../assets/linkedin.svg";
import Github from "../../../assets/github-red.svg";
import CodeSandbox from "../../../assets/code-sandbox.svg";

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
        <div className="menu-item">
          <a href="www.github.com" target="_blank">
            <img src={Github} alt="" width="35px" />
          </a>
          <a className="mx-3" href="www.linkedin.com" target="_blank">
            <img src={Linkedin} alt="" width="35px" />
          </a>
          <a href="www.codesandbox.com" target="_blank">
            <img src={CodeSandbox} alt="" width="35px" />
          </a>
        </div>
      </div>
    </Col>
  );
}
