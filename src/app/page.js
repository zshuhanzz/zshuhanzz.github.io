"use client";

import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";
import HomePage from "../components/HomePage";
import AboutSection from "../components/AboutSection";
import ExperiencesSection from "../components/ExperiencesSection";
import ProjectsSection from "../components/ProjectsSection";
import LifeButton from "../components/LifeButton";

export default function MainPage() {
  // fade in sections when they scroll into view
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fadeIn");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Sidebar />
      <ThemeToggle />

      <main style={{ marginLeft: "200px" }}>
        <section id="home">
          <HomePage />
        </section>

        <section id="about" className="section fadeIn">
          <AboutSection />
        </section>

        <section id="experiences" className="section fadeIn">
          <ExperiencesSection />
        </section>

        <section id="projects" className="section fadeIn">
          <ProjectsSection />
        </section>

        <LifeButton />
      </main>
    </>
  );
}
