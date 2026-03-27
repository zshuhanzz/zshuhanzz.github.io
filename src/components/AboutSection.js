"use client";

import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Sections.module.css";

export default function AboutSection() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={7}>
          <h2 className={styles.sectionHeading}>
            Hello Beautiful People!
          </h2>

          <p className={styles.aboutText}>
            My name is Shuhan. I am a computer science student at McMaster University. I enjoy building practical, impactful full stack applications and am always exploring new tools and technologies to improve how I build. And of course, I&apos;m excited to try on novel experiences and take on difficult challenges presented to me.
          </p>

          <p className={styles.aboutText}>
            Outside of school, I&apos;m a big foodie, so I burn off the calories by going to the gym or playing my favorite sports, basketball and volleyball. One of my goals right now is to train plyometrics consistently and be able to dunk by the end of the year.
          </p>
          <p className={styles.aboutText}>
            Also, I like making tiktok videos, not to get famous and rich, but just to show my friends a funnier side of me. If you want to watch me embarrass myself, feel free to check it out linked at the bottom left.
          </p>

          <a href="#projects" className={styles.aboutLink}>
            My Projects!
          </a>
        </Col>

        <Col md={5}>
          <div className={styles.aboutLabel}>About Me</div>

          <img
            src="/images/websiteprofilepic.jpg"
            alt="Profile"
            className={styles.aboutImage}
          />
        </Col>
      </Row>
    </Container>
  );
}
