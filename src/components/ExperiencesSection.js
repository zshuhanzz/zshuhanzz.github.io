"use client";

import styles from "../styles/Sections.module.css";

const experiences = [
  {
    company: "Teamcal AI",
    icon: "/images/teamcal.png",
    position: "Software Engineering Intern",
    period: "2025",
    description: "Supported the AI scheduling agent by building Python data pipelines with Pandas to process 14,000+ user availability records, handling time zones and scheduling patterns to reduce model training time and improve automated booking success",
  },
  {
    company: "Lillup",
    icon: "/images/lillup.jpeg",
    position: "Frontend Developer Intern",
    period: "2025",
    description: "Built Next.js/TypeScript components from Figma designs, maintained Jest and Cypress testing, and improved performance by up to 10% through Lighthouse based optimizations",
  },
  {
    company: "Coming soon",
    icon: null,
    position: null,
    period: null,
    description: "Coming soon...",
  },
];

export default function ExperiencesSection() {
  return (
    <div className={styles.experiencesWrapper}>
      <h2 className={styles.sectionHeading} style={{ marginBottom: "40px" }}>
        Experiences
      </h2>

      <div className={styles.experienceList}>
        {experiences.map((exp, i) => (
          <div key={i} className={styles.experienceItem}>
            {exp.icon && (
              <img
                src={exp.icon}
                alt={exp.company}
                className={styles.experienceIcon}
              />
            )}
            <div className={styles.experienceContent}>
              <div className={styles.experienceMeta}>
                <span className={styles.experienceCompany}>{exp.company}</span>
                {exp.period && <span className={styles.experiencePeriod}>{exp.period}</span>}
              </div>
              {exp.position && (
                <p className={styles.experiencePosition}>{exp.position}</p>
              )}
              <p className={styles.experienceDesc}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
