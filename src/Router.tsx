import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import OverviewPage from "./pages/OverviewPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

const Router = () => (
  <Routes>
    <Route element={<HomePage />} path="/" />
    <Route element={<OverviewPage />} path="/overview" />
    <Route element={<ProjectsPage />} path="/projects" />
    <Route element={<ExperiencePage />} path="/experience" />
    <Route element={<SkillsPage />} path="/skills" />
    <Route element={<ContactPage />} path="/contact" />
  </Routes>
);

export default Router;
