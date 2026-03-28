"use client";

import { Row, Col, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Sections.module.css";

// TODO: Replace these with your actual projects
const projects = [
  {
    title: "Project One",
    tech: "React | Node.js | MongoDB",
    description: "Coming soon...",
    link: "https://github.com",
  },
  {
    title: "Project Two",
    tech: "Python | FastAPI | PostgreSQL",
    description: "Coming soon...",
    link: "https://github.com",
  },
  {
    title: "Automated Container Recycling System",
    tech: "Python, SIL/HIL testing, Quanser",
    description: "Built a real-time recycling system that uses sensor fusion to detect and sort containers, achieving reliable performance data across both simulation and physical hardware",
    link: "https://github.com/zshuhanzz/Automated-Container-Recycling-System",
    image: "/images/containervisual.png",
  },
  {
    title: "Project Four",
    tech: "TypeScript | Three.js | WebGL",
    description: "Coming soon...",
    link: "https://github.com",
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
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
