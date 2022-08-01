import React from "react";
import { Button } from "react-bootstrap";
import NextArrow from "../../../assets/caret-right.svg";
import PrevArrow from "../../../assets/caret-left.svg";
import Resume from "../../../assets/Resume_2022.pdf";

export default function ResumeScreen({ resumeSlideNum }) {
  return (
    <div className="resume-screen">
      {/* Arrows positioned absolutely */}
      {resumeSlideNum > 0 && (
        <img className="prev-arrow" src={PrevArrow} alt="" width="10px" />
      )}
      {resumeSlideNum < 3 && (
        <img className="next-arrow" src={NextArrow} alt="" width="10px" />
      )}

      {/* Resume slide #2 / Skills */}
      {resumeSlideNum === 0 && (
        <div className="skills-section">
          <h3 className="title">
            Skills
          </h3>
          <div className="skill-group">
            <p>React</p>
            <p>HTML</p>
            <p>CSS / SCSS</p>
            <p>Javascript</p>
            <p>React Native</p>
            <p>Git</p>
          </div>
          <div className="skill-group">
            <p>Node</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>Postman</p>
            <p>VS Code</p>
            <p>Adobe XD</p>
          </div>
        </div>
      )}

      {/* Resume slide #3 / Experience */}
      {resumeSlideNum === 1 && (
        <div className="experience-section">
          <h3 className="title">
            Experience
          </h3>
          {/* Experience Item */}
          <div className="exp-item">
            <h6 className="exp-item__title">Freelance Web Developer</h6>
            <p className="exp-item__sub-title">Kode & Kolor - Present</p>
            <ul className="exp-item__list">
              <li>Front-End website development using React and Next.js</li>
            </ul>
          </div>
          {/* Experience Item */}
          <div className="exp-item">
            <h6 className="exp-item__title">Web Dev Intern</h6>
            <p className="exp-item__sub-title">
              Hammerspot Marketing - 08/2020 – 10/2020
            </p>
            <ul className="exp-item__list">
              <li>
                Built website content using React, HTML, CSS, and Bootstrap
                under technical lead supervision.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Resume slide #4 / Education */}
      {resumeSlideNum === 2 && (
        <div className="education-section">
          <h3 className="title">
            Education
          </h3>
          <div className="edu-item">
            <h6 className="edu-item__title">Nucamp Coding Bootcamp</h6>
            <p className="edu-item__sub-title">
              Full Stack Web Development
            </p>
            <p className="edu-item__description">
              Coding bootcamp with courses Boostrap, React, Redux, React Native,
              NodeJS, and MongoDB
            </p>
          </div>
        </div>
      )}

      {/* Resume slide #5 / Resume Download */}
      {resumeSlideNum === 3 && (
        <div className="download-resume-section">
          <a
            href={Resume}
            download="Angel_Gonzalez_Resume"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bg-danger border-0 py-4">
              Download Resume
            </Button>
          </a>
        </div>
      )}
    </div>
  );
}
