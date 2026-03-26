"use client";

import styles from "../styles/Sections.module.css";

export default function ProjectCard({ title, tech, description, link }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardInner}>
        {/* TODO: Replace this with an actual project screenshot */}
        <div className={styles.projectImage}>
          <span>Project Image</span>
        </div>

        <div className={styles.projectInfo}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectTech}>{tech}</p>
          <p className={styles.projectDesc}>{description}</p>

          {/* TODO: Replace with your actual GitHub link */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectView}
          >
            View →
          </a>
        </div>
      </div>
    </div>
  );
}
