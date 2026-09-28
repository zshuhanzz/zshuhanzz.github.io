"use client";

import styles from "../styles/Sections.module.css";

const experiences = [
  {
    company: "Zenai International",
    icon: "/images/zenai_logo.png",
    position: "Software Engineering Intern",
    period: "May 2026 – Sep 2026",
    description: "Worked across Zenai's backend to strengthen 63+ AI voice agents for automotive dealerships, tune a large-scale inventory crawler across 650K+ listings for a 14.4% speed boost, and build an ML model that cut vehicle price estimation error by 24.7% against KBB benchmarks.",
  },
  {
    company: "AnswerX",
    icon: "/images/answerx_logo.png",
    position: "Software Engineering Intern",
    period: "Jan 2026 – May 2026",
    description: "Built infrastructure for AnswerX's GEO platform by expanding AI prompt tracing, cutting P95 load times by 30%. Shipped an AI powered content agent to generate client targeted articles that boosted AI visibility by 18.6%. And automated custom domain infrastructure on GCP with Terraform.",
  },
  {
    company: "ANCI AI",
    icon: "/images/teamcal.png",
    position: "Full Stack Software Developer Intern",
    period: "May 2025 – Sep 2025",
    description: "Supported the AI scheduling agent by building Python data pipelines with Pandas to process 14,000+ user availability records, handling time zones and scheduling patterns to reduce model training time and improve automated booking success",
  },
  {
    company: "Lillup",
    icon: "/images/lillup.jpeg",
    position: "Frontend Developer Intern",
    period: "Mar 2025 – May 2025",
    description: "Built Next.js/TypeScript components from Figma designs, maintained Jest and Cypress testing, and improved performance by up to 10% through Lighthouse based optimizations",
  },
  {
    company: "McMaster Engineering Society Sustainability Committee",
    icon: "/images/MES.jpeg",
    position: "Vice President of Finance",
    period: "2024 - present",
    description: "Managed budgeting and operations for sustainability-focused engineering initiatives, working closely with other committees to track expenses. Prepared and submitted financial reports to MES for funding approval",
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
