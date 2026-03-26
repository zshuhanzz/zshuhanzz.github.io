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
    title: "Project Three",
    tech: "Next.js | Firebase | Bootstrap",
    description: "Coming soon...",
    link: "https://github.com",
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
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
