"use client";

import { Row, Col, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Sections.module.css";

// TODO: Replace these with your actual projects
const projects = [
  {
    title: "Tradealytics",
    tech: "Python, C++, XGBoost, FastAPI, PostgreSQL, Next.js, Pybind, Pandas",
    description: "Developed a full-stack trading analysis platform that identifies cognitive biases using ML (XGBoost), runs counterfactual simulations to evaluate decision impact, and visualizes long term performance trends",
    link: "https://github.com/zshuhanzz/Tradealytics",
  },
  {
    title: "My Mind",
    tech: "React, TypeScript, Node.js, Express, PostgreSQL, Gemini API, Tailwind",
    description: "Created an AI powered mental wellness app that integrates context aware chat, journaling, and mood tracking analytics. Used caching strategies to reduce response latency and improve user experience.",
    link: "https://github.com/zshuhanzz/MyMind",
    image: "/images/mymindvisual.png",
    imagePosition: "top",
  },
  {
    title: "Automated Container Recycling System",
    tech: "Python, SIL/HIL testing, Quanser",
    description: "Built a real-time recycling system that uses sensor fusion to detect and sort containers, achieving reliable performance data across both simulation and physical hardware",
    link: "https://github.com/zshuhanzz/Automated-Container-Recycling-System",
    image: "/images/containervisual.png",
  },
  {
    title: "Game Modification Development for CS:GO",
    tech: "C/C++, DirectX",
    description: "Created a C++ game modification framework for CS:GO by combining DLL injection, reverse engineering with Ghidra, and a custom DirectX overlay for real-time data visualization",
    link: "https://github.com/zshuhanzz?tab=repositories",
    image: "/images/csgocheatvisual.png",
  },
];

export default function ProjectsSection() {
  return (
    <Container>
      <h2 className={styles.sectionHeading} style={{ marginBottom: "40px" }}>
        Projects
      </h2>

      <Row>
        {projects.map((project, i) => (
          <Col md={6} key={i} style={{ marginBottom: "30px" }}>
            <ProjectCard
              title={project.title}
              tech={project.tech}
              description={project.description}
              link={project.link}
              image={project.image}
              imagePosition={project.imagePosition}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
