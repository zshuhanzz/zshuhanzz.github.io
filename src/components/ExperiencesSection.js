"use client";

import styles from "../styles/Sections.module.css";

// TODO: Replace these with your actual experiences
const experiences = [
  {
    icon: "🏢",
    company: "Company One",
    position: "Software Engineering Intern",
    description: "Coming soon...",
  },
  {
    icon: "💻",
    company: "Company Two",
    position: "Research Assistant",
    description: "Coming soon...",
  },
  {
    icon: "🔬",
    company: "Company Three",
    position: "Teaching Assistant",
    description: "Coming soon...",
  },
  {
    icon: "🚀",
    company: "Company Four",
    position: "Developer",
    description: "Coming soon...",
  },
];

export default function ExperiencesSection() {
  return (
    <div className={styles.terminalWrapper}>
      <h2 className={styles.sectionHeading} style={{ marginBottom: "30px" }}>
        Experiences
      </h2>

      {/* terminal window */}
      <div className={styles.terminal}>
        {/* title bar */}
        <div className={styles.terminalBar}>
          <div className={styles.terminalDots}>
            <span className={styles.dotRed}></span>
            <span className={styles.dotYellow}></span>
            <span className={styles.dotGreen}></span>
          </div>
          <span className={styles.terminalPath}>
            C:\Users\shuhan\experiences
          </span>
        </div>

        {/* terminal body - 2x2 grid */}
        <div className={styles.terminalBody}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.terminalCell}>
              <div className={styles.cellIcon}>{exp.icon}</div>
              <h4 className={styles.cellCompany}>{exp.company}</h4>
              <p className={styles.cellPosition}>{exp.position}</p>
              <p className={styles.cellDesc}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
