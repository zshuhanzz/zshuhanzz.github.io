"use client";

import styles from "../styles/Sections.module.css";

export default function ProjectCard({ title, tech, description, link, image }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardInner}>
        <div className={styles.projectImage}>
          {image ? (
            <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <span>Project Image</span>
          )}
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
