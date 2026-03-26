"use client";

import Link from "next/link";
import ThemeToggle from "../../components/ThemeToggle";
import styles from "../../styles/Life.module.css";

// TODO: Replace these placeholders with your actual photos
// For each photo:
//   - Change height to whatever looks good
//   - Replace "bg" color with an actual <img> tag
//   - Edit or remove the caption
const photos = [
  { height: 250, color: "#c4b5a2", caption: "caption" },
  { height: 320, color: "#a8c5d6", caption: "caption" },
  { height: 200, color: "#d4a5a5", caption: "" },
  { height: 280, color: "#b5c4a8", caption: "caption" },
  { height: 350, color: "#c5a8d4", caption: "caption" },
  { height: 220, color: "#a8d4c5", caption: "" },
  { height: 300, color: "#d4c5a8", caption: "caption" },
  { height: 260, color: "#a8a8d4", caption: "" },
  { height: 230, color: "#d4a8b5", caption: "caption" },
  { height: 310, color: "#b5d4a8", caption: "caption" },
  { height: 270, color: "#d4b5c5", caption: "" },
  { height: 240, color: "#a8c5b5", caption: "caption" },
];

// slight rotations for scrapbook feel
const rotations = [-2, 1, -1, 2, 0, -1.5, 1.5, -0.5, 1, -2, 0.5, -1];

export default function LifePage() {
  return (
    <div className={styles.lifePage}>
      <ThemeToggle />

      <div className={styles.lifeHeader}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
        <h1 className={styles.lifeTitle}>Life</h1>
        <p className={styles.lifeSubtitle}>moments & memories</p>
      </div>

      <div className={styles.collage}>
        {photos.map((photo, i) => (
          <div
            key={i}
            className={styles.photoItem}
            style={{ transform: `rotate(${rotations[i]}deg)` }}
          >
            {/* TODO: Replace this div with an <img> tag pointing to your photo */}
            <div
              className={styles.photoFrame}
              style={{
                height: `${photo.height}px`,
                background: photo.color,
              }}
            />
            {/* Remove or edit this caption as needed */}
            {photo.caption && (
              <p className={styles.caption}>{photo.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
