import React from "react";
import { Col, Button } from "react-bootstrap";
import Location from "../../../assets/location.svg";
import Email from "../../../assets/email.svg";
import Phone from "../../../assets/phone.svg";
import NextArrow from "../../../assets/caret-right.svg";
import PrevArrow from "../../../assets/caret-left.svg";

export default function ResumeScreen({ resumeSlideNum }) {
  return (
    <Col className="resume-screen gameboy-inner-top__screen d-flex justify-content-center align-items-center">
      {/* Arrows positioned absolutely */}
      {resumeSlideNum > 0 && (
        <img className="prev-arrow" src={PrevArrow} alt="" width="10px" />
      )}
      {resumeSlideNum < 4 && (
        <img className="next-arrow" src={NextArrow} alt="" width="10px" />
      )}

      {/* Resume slide #1 / Contact Info */}
      {resumeSlideNum === 0 && (
        <div className="contact-info-section">
          <h3 className="mb-4 text-danger">Web Developer</h3>
          <p className="d-flex align-items-center text-secondary">
            <img className="me-2" src={Location} alt="" width="10px" />
            Maybrook, NY, 12543
          </p>
          <p className="d-flex align-items-center text-secondary">
            <img className="me-2" src={Email} alt="" width="10px" />
            Angelgonzalez2118@gmail.com
          </p>
          <p className="d-flex align-items-center mb-0 text-secondary">
            <img className="me-2" src={Phone} alt="" width="10px" />
            845-798-5842
          </p>
        </div>
      )}

      {/* Resume slide #2 / Skills */}
      {resumeSlideNum === 1 && (
        <div className="skills-section d-flex flex-wrap justify-content-around">
          <h3 className="text-center text-danger" style={{ width: "100%" }}>
            Skills
          </h3>
          <div className="text-center text-secondary">
            <p>React</p>
            <p>HTML</p>
            <p>CSS / SCSS</p>
            <p>Javascript</p>
            <p>React Native</p>
            <p className="mb-0">Git</p>
          </div>
          <div className="text-center text-secondary">
            <p>Node</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>Postman</p>
            <p>VS Code</p>
            <p className="mb-0">Adobe XD</p>
          </div>
        </div>
      )}

      {/* Resume slide #3 / Experience */}
      {resumeSlideNum === 2 && (
        <div className="experience-section d-flex flex-column px-3">
          <h3 className="text-center text-danger" style={{ width: "100%" }}>
            Experience
          </h3>
          {/* Experience Item */}
          <div>
            <h6 className="mb-0 text-danger">Freelance Web Developer</h6>
            <p className="mb-0 text-secondary">Kode & Kolor - Present</p>
            <ul className="text-secondary">
              <li>Front-End website development using React and Next.js</li>
            </ul>
          </div>
          {/* Experience Item */}
          <div>
            <h6 className="mb-0 text-danger">Web Dev Intern</h6>
            <p className="mb-0 text-secondary">
              Hammerspot Marketing - 08/2020 – 10/2020
            </p>
            <ul className="text-secondary">
              <li>
                Built website content using React, HTML, CSS, and Bootstrap
                under technical lead supervision.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Resume slide #4 / Education */}
      {resumeSlideNum === 3 && (
        <div className="education-section d-flex flex-column text-center px-2">
          <h3
            className="text-center text-danger mb-4"
            style={{ width: "100%" }}
          >
            Education
          </h3>
          <div>
            <h6 className="mb-0 text-danger">Nucamp Coding Bootcamp</h6>
            <p className="sub text-secondary mb-1 text-danger">
              Full Stack Web Development
            </p>
            <p className="text-secondary">
              Coding bootcamp with courses Boostrap, React, Redux, React Native,
              NodeJS, and MongoDB
            </p>
          </div>
        </div>
      )}

      {/* Resume slide #5 / Resume Download */}
      {resumeSlideNum === 4 && (
        <div className="download-resume-section d-flex flex-column text-center px-2">
          <Button className="shadow btn-danger text-light py-4 px-2">
            Download Resume
          </Button>
        </div>
      )}
    </Col>
  );
}
