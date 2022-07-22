import React from "react";
import { Col } from "react-bootstrap";
import ProjectItem from "./ProjectItem";

export default function ProjectsScreen() {
  return (
    <Col className="gameboy-inner-top__screen d-flex justify-content-center align-items-center">
      <ProjectItem
        title="MHA Battle Game"
        description="A 2-player card battle game built with React.js and Bootstrap.
        Optimized for medium and large screens."
        url="https://csb-2225uq.vercel.app/"
        github="https://github.com/MeBeAngel/My_Hero_Academia_Card_Game"
        codesandbox="https://codesandbox.io/s/my-hero-academia-card-game-2225uq"
      />
    </Col>
  );
}
