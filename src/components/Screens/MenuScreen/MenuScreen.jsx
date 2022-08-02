import React from "react";
import Cursor from "../../../assets/Cursor.png";
import Linkedin from "../../../assets/linkedin.svg";
import Github from "../../../assets/github-red.svg";
import CodeSandbox from "../../../assets/code-sandbox.svg";

export default function MenuScreen({ menuNum }) {
  return (
    <div className="menu-screen">
      <div className="menu-wrapper">
        <div className="menu-item">
          <span>
            <h2 className={menuNum === 3 ? "active" : ""}>
              ABOUT
            </h2>
            {menuNum === 3 ? (
              <img className="menu-cursor" src={Cursor} alt="" />
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="menu-item">
          <span>
            <h2 className={menuNum === 2 ? "active" : ""}>
              PROJECTS
            </h2>
            {menuNum === 2 ? (
              <img className="menu-cursor" src={Cursor} alt="" />
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="menu-item">
          <span>
            <h2 className={menuNum === 1 ? "active" : ""}>
              RESUME
            </h2>
            {menuNum === 1 ? (
              <img className="menu-cursor" src={Cursor} alt="" />
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="menu-item">
          <span>
            <h2 className={menuNum === 0 ? "active" : ""}>
              CONTACT
            </h2>
            {menuNum === 0 ? (
              <img className="menu-cursor" src={Cursor} alt="" />
            ) : (
              ""
            )}
          </span>
        </div>
        {/* Social Media Section */}
        <div className="menu-item social">
          <a className="github" href="https://github.com/MeBeAngel" target="_blank" rel="noreferrer">
            <img src={Github} alt="" width="35px" />
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/angel-g-702311122" target="_blank" rel="noreferrer">
            <img src={Linkedin} alt="" width="35px" />
          </a>
          <a className="codesandbox" href="https://codesandbox.io/u/mebeangel" target="_blank" rel="noreferrer">
            <img src={CodeSandbox} alt="" width="35px" />
          </a>
        </div>
      </div>
    </div>
  );
}
