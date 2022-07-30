import React from "react";
import CodeSandbox from "../../../assets/code-sandbox.svg";
import Github from "../../../assets/github-red.svg";
import wwwLogo from "../../../assets/www.svg";

export default function ProjectItem({
  title,
  description,
  url,
  github,
  codesandbox
}) {
  return (
    <div className="project-item">
      <h3 className="">{title}</h3>
      <p>{description}</p>
      <div className="project-item__links">
        {url && (
          <a className="www" href={url} target="_blank" rel="noreferrer">
            <img src={wwwLogo} alt="" width="40px" />
          </a>
        )}
        <a className="github" href={github} target="_blank" rel="noreferrer">
          <img src={Github} alt="" width="40px" />
        </a>
        <a className="codesandbox" href={codesandbox} target="_blank" rel="noreferrer">
          <img src={CodeSandbox} alt="" width="40px" />
        </a>
      </div>
    </div>
  );
}
