"use client";

import { useState, useCallback } from "react";
import { FaHome, FaInstagram, FaLinkedin, FaGithub, FaBars, FaTimes, FaEnvelope } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import styles from "../styles/Nav.module.css";

// Add more dog images here when you have them
const dogImages = [
  "/images/drip dog.png",
];

const sections = [
  { id: "about", label: "About" },
  { id: "experiences", label: "Experiences" },
  { id: "projects", label: "Projects" },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dogIndex, setDogIndex] = useState(0);

  const nextDog = useCallback(() => {
    setDogIndex((i) => (i + 1) % dogImages.length);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* mobile hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <nav className={`${styles.sidebar} ${mobileOpen ? styles.open : ""}`}>
        {/* home icon at the top */}
        <button
          className={styles.homeIcon}
          onClick={() => scrollTo("home")}
        >
          <FaHome size={22} />
        </button>

        {/* section links */}
        <div className={styles.navLinks}>
          {sections.map((s) => (
            <button
              key={s.id}
              className={styles.navLink}
              onClick={() => scrollTo(s.id)}
            >
              {s.label}
            </button>
          ))}

          {/* TODO: Replace with your Google Drive resume link */}
          <a
            href="https://drive.google.com/your-resume-link"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            Resume
          </a>
        </div>

        {/* dog image */}
        <div className={styles.dogWrapper} onClick={nextDog}>
          <img
            src={dogImages[dogIndex]}
            alt="drip dog"
            className={styles.dogImage}
          />
          <span className={styles.dogCaption}>Click for doggo</span>
        </div>

        {/* social icons at bottom */}
        <div className={styles.socials}>
          {/* TODO: Replace with your social media links */}
          <a href="https://www.instagram.com/zshuhanzz/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={18} />
          </a>
          <a href="https://ca.linkedin.com/in/shuhan-zhang-21260927a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={18} />
          </a>
          <a href="https://github.com/zshuhanzz" target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} />
          </a>
          <a href="mailto:sshhuu135@gmail.com">
            <FaEnvelope size={18} />
          </a>
          <a href="https://www.tiktok.com/@abysser11" target="_blank" rel="noopener noreferrer">
            <SiTiktok size={18} />
          </a>
        </div>
      </nav>
    </>
  );
}
