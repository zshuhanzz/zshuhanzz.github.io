"use client";

import Link from "next/link";
import styles from "../styles/Sections.module.css";

export default function LifeButton() {
  return (
    <div className={styles.lifeButtonWrapper}>
      <Link href="/life" className={styles.lifeButton}>
        Explore My Life ✦
      </Link>
    </div>
  );
}
