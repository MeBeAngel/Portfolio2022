import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.scss";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import ResumePage from "./components/ResumePage";
import ContactPage from "./components/ContactPage";
import GameBoy from "./components/GameBoy";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GameBoy />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}
