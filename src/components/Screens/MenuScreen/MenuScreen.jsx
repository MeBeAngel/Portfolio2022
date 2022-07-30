import React from "react";
import Cursor from "../../../assets/Cursor.png";
import Linkedin from "../../../assets/linkedin.svg";
import Github from "../../../assets/github-red.svg";
import CodeSandbox from "../../../assets/code-sandbox.svg";

export default function MenuScreen({ menuNum }) {
  return (
      <div className="menu">
        <div className="menu-item">
          <span>
            <h2 className={menuNum === 3 ? "" : ""}>
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
            <h2 className={menuNum === 2 ? "" : ""}>
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
            <h2 className={menuNum === 1 ? "" : ""}>
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
            <h2 className={menuNum === 0 ? "" : ""}>
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
          <a className="github" href="www.github.com" target="_blank">
            <img src={Github} alt="" width="35px" />
          </a>
          <a className="linkedin" href="www.linkedin.com" target="_blank">
            <img src={Linkedin} alt="" width="35px" />
          </a>
          <a className="codesandbox" href="www.codesandbox.com" target="_blank">
            <img src={CodeSandbox} alt="" width="35px" />
          </a>
        </div>
      </div>
  );
}
