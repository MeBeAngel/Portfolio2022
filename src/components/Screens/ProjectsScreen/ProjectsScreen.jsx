import React from "react";
import { Col } from "react-bootstrap";
import ProjectItem from "./ProjectItem";
import LeftArrow from "../../../assets/caret-left.svg";
import RightArrow from "../../../assets/caret-right.svg";

export default function ProjectsScreen({ projectSlideNum }) {
  return (
    <Col className="gameboy-inner-top__screen d-flex justify-content-center align-items-center w-100">
      {projectSlideNum > 0 && (
        <img className="left-arrow" src={LeftArrow} alt="" width="10px" />
      )}
      {projectSlideNum === 0 && (
        <ProjectItem
          title="MHA Battle Game"
          description="A 2-player card battle game built with React.js and Bootstrap.
        Optimized for medium and large screens."
          url="https://csb-2225uq.vercel.app/"
          github="https://github.com/MeBeAngel/My_Hero_Academia_Card_Game"
          codesandbox="https://codesandbox.io/s/my-hero-academia-card-game-2225uq"
        />
      )}
      {projectSlideNum === 1 && (
        <ProjectItem
          title="Slide 2"
          description="A description goes here."
          url="https://csb-2225uq.vercel.app/"
          github="https://github.com/MeBeAngel/My_Hero_Academia_Card_Game"
          codesandbox="https://codesandbox.io/s/my-hero-academia-card-game-2225uq"
        />
      )}
      {projectSlideNum === 2 && (
        <ProjectItem
          title="Slide 3"
          description="A description goes here."
          url="https://csb-2225uq.vercel.app/"
          github="https://github.com/MeBeAngel/My_Hero_Academia_Card_Game"
          codesandbox="https://codesandbox.io/s/my-hero-academia-card-game-2225uq"
        />
      )}
      {projectSlideNum < 2 && (
        <img className="right-arrow" src={RightArrow} alt="" width="10px" />
      )}
    </Col>
  );
}
