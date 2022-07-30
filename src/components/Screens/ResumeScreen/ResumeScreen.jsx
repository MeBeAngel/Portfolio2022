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
          <h3 className="">
            Skills
          </h3>
          <div className="">
            <p>React</p>
            <p>HTML</p>
            <p>CSS / SCSS</p>
            <p>Javascript</p>
            <p>React Native</p>
            <p className="">Git</p>
          </div>
          <div className="">
            <p>Node</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>Postman</p>
            <p>VS Code</p>
            <p className="">Adobe XD</p>
          </div>
        </div>
      )}

      {/* Resume slide #3 / Experience */}
      {resumeSlideNum === 1 && (
        <div className="experience-section">
          <h3 className="">
            Experience
          </h3>
          {/* Experience Item */}
          <div>
            <h6 className="">Freelance Web Developer</h6>
            <p className="">Kode & Kolor - Present</p>
            <ul className="">
              <li>Front-End website development using React and Next.js</li>
            </ul>
          </div>
          {/* Experience Item */}
          <div>
            <h6 className="">Web Dev Intern</h6>
            <p className="">
              Hammerspot Marketing - 08/2020 – 10/2020
            </p>
            <ul className="">
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
          <h3 className="">
            Education
          </h3>
          <div>
            <h6 className="">Nucamp Coding Bootcamp</h6>
            <p className="sub">
              Full Stack Web Development
            </p>
            <p className="">
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
            <Button className="">
              Download Resume
            </Button>
          </a>
        </div>
      )}
    </div>
  );
}
