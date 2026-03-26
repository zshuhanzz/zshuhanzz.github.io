"use client";

import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Sections.module.css";

export default function AboutSection() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={7}>
          <h2 className={styles.sectionHeading}>
            Welcome!
          </h2>

          {/* TODO: Replace this with your actual bio/about text */}
          <p className={styles.aboutText}>
            Coming soon...
          </p>

          {/* TODO: Add more paragraphs about yourself here */}
          <p className={styles.aboutText}>
            Coming soon...
          </p>

          <a href="#projects" className={styles.aboutLink}>
            &#10148; Check out my Projects!
          </a>
        </Col>

        <Col md={5}>
          <div className={styles.aboutLabel}>About Me</div>

          {/* TODO: Replace this placeholder with your actual photo */}
          <div className={styles.aboutImagePlaceholder}>
            <span>Photo</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
