import React from "react";
import Projects from './projects';
import ProjectItem from "./ProjectItem";
import LeftArrow from "../../../assets/caret-left.svg";
import RightArrow from "../../../assets/caret-right.svg";

export default function ProjectsScreen({ projectSlideNum }) {
  return (
    <div className="gameboy-inner-top__screen d-flex justify-content-center align-items-center w-100">
      {projectSlideNum > 0 && (
        <img className="prev-arrow" src={LeftArrow} alt="" width="10px" />
      )}


      {Projects.map((project, index) => {
        return projectSlideNum === index && (
          <ProjectItem
            title={project.title}
            description={project.description}
            url={project.url}
            github={project.github}
            codesandbox={project.codesandbox}
          />
        )
      })}

      {projectSlideNum < (Projects.length - 1) && (
        <img className="next-arrow" src={RightArrow} alt="" width="10px" />
      )}
    </div>
  );
}
