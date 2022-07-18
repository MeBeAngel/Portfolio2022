import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cursor from "../../../assets/Cursor.png";

export default function MenuSection() {
  const [isHovered, setIsHovered] = useState({
    projects: false,
    resume: false,
    contact: false
  });

  return (
    <div className="menu">
      <div
        className="menu-item"
        onMouseEnter={() => {
          setIsHovered({ projects: true });
        }}
        onMouseLeave={() => {
          setIsHovered({ projects: false });
        }}
      >
        <span>
          <Link to="/projects">
            <h2 className="text-light">Projects</h2>
          </Link>
          {isHovered.projects && (
            <img className="menu-cursor" src={Cursor} alt="" />
          )}
        </span>
      </div>
      <div
        className="menu-item"
        onMouseEnter={() => {
          setIsHovered({ resume: true });
        }}
        onMouseLeave={() => {
          setIsHovered({ resume: false });
        }}
      >
        <span>
          <Link to="/resume">
            <h2 className="text-light">Resume</h2>
          </Link>
          {isHovered.resume && (
            <img className="menu-cursor" src={Cursor} alt="" />
          )}
        </span>
      </div>
      <div
        className="menu-item"
        onMouseEnter={() => {
          setIsHovered({ contact: true });
        }}
        onMouseLeave={() => {
          setIsHovered({ contact: false });
        }}
      >
        <span>
          <Link to="/contact">
            <h2 className="text-light">Contact</h2>
          </Link>
          {isHovered.contact && (
            <img className="menu-cursor" src={Cursor} alt="" />
          )}
        </span>
      </div>
    </div>
  );
}
