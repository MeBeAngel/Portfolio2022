import React from "react";
import { Col } from "react-bootstrap";
import ProjectItem from "./ProjectItem";
import LeftArrow from "../../../assets/caret-left.svg";
import RightArrow from "../../../assets/caret-right.svg";

export default function ProjectsScreen({ projectSlideNum }) {
  return (
    <Col className="gameboy-inner-top__screen d-flex justify-content-center align-items-center w-100">
      {projectSlideNum > 0 && (
        <img className="prev-arrow" src={LeftArrow} alt="" width="10px" />
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
          title="Creative Login Form"
          description="Built with React and showcases form validation and custom graphics."
          url=""
          github="https://github.com/MeBeAngel/React_Creative_Login_Form.git"
          codesandbox="https://codesandbox.io/s/react-user-login-form-5xgky?file=/src/components/LoginForm.jsx"
        />
      )}
      {projectSlideNum === 2 && (
        <ProjectItem
          title="Sortable Profile Gallery"
          description="Built with React and showcasing custom sorting options, CSS animations, Module SCSS"
          url=""
          github="https://github.com/MeBeAngel/React_Animated_Profile_Gallery.git"
          codesandbox="https://codesandbox.io/s/react-css-animated-profile-card-gallery-9nmxc?file=/src/components/ProfileGallery.jsx"
        />
      )}
      {projectSlideNum === 3 && (
        <ProjectItem
          title="Mock Rental Web App"
          description="This web app was built with React and showcases react-router, CSS animations, and SCSS."
          url=""
          github="https://github.com/MeBeAngel/React_Home_Rental_Site.git"
          codesandbox="https://codesandbox.io/s/react-web-app-w-router-custom-carousels-59mry"
        />
      )}
      {projectSlideNum === 4 && (
        <ProjectItem
          title="To-Do List"
          description="Built with React."
          url=""
          github="https://github.com/MeBeAngel/React_Todo_List.git"
          codesandbox="https://codesandbox.io/s/react-todo-list-livch?file=/src/components/App.jsx"
        />
      )}
      {projectSlideNum < 4 && (
        <img className="next-arrow" src={RightArrow} alt="" width="10px" />
      )}
    </Col>
  );
}
