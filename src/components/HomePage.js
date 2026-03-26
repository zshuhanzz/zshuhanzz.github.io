"use client";

import dynamic from "next/dynamic";
import { FaChevronDown } from "react-icons/fa";
import styles from "../styles/Sections.module.css";

// load the 3D scene only on client side (three.js needs the browser)
const Background3D = dynamic(() => import("./Background3D"), { ssr: false });

export default function HomePage() {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.hero}>
      <Background3D />

      <div className={styles.heroContent}>
        <p className={styles.heroSubtitle}>Hi, I&apos;m</p>
        <h1 className={styles.heroName}>SHUHAN ZHANG</h1>
        <p className={styles.heroTitle}>Software Developer</p>
      </div>

      <button className={styles.scrollArrow} onClick={scrollToAbout}>
        <FaChevronDown size={24} />
      </button>
    </div>
  );
}
