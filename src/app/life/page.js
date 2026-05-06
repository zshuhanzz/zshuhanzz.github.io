"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../../components/ThemeToggle";
import styles from "../../styles/Life.module.css";

// Ordered to distribute landscapes across columns for visual balance
// landscape: p1, p4, p5, p11 | portrait: p2, p3, p6, p7, p8, p9, p10
const photos = [
  { src: "p1.jpg",  w: 2880, h: 2160, caption: "" }, // landscape — col 1
  { src: "p2.jpg",  w: 1620, h: 2160, caption: "" }, // portrait  — col 2
  { src: "p6.jpg",  w: 2160, h: 2880, caption: "" }, // portrait  — col 3
  { src: "p3.jpg",  w: 1215, h: 1620, caption: "" }, // portrait  — col 1
  { src: "p4.jpg",  w: 1440, h: 1080, caption: "" }, // landscape — col 2
  { src: "p9.jpg",  w: 2160, h: 2880, caption: "" }, // portrait  — col 3
  { src: "p7.jpg",  w: 1217, h: 2160, caption: "" }, // portrait  — col 1
  { src: "p5.jpg",  w: 2880, h: 2160, caption: "" }, // landscape — col 2
  { src: "p10.jpg", w: 2125, h: 2160, caption: "" }, // portrait  — col 3
  { src: "p8.jpg",  w: 1620, h: 2160, caption: "" }, // portrait  — col 1
  { src: "p11.jpg", w: 2880, h: 2160, caption: "" }, // landscape — col 2
];

const rotations = [-1.5, 1, -1, 2, -0.5, 1.5, -2, 0.5, -1, 1, -1.5];

export default function LifePage() {
  return (
    <div className={styles.lifePage}>
      <ThemeToggle />

      <div className={styles.lifeHeader}>
        <Link href="/" className={styles.backLink}>
          ← Back
        </Link>
        <h1 className={styles.lifeTitle}>Life</h1>
        <p className={styles.lifeSubtitle}>a collection of my most precious moments and memories</p>
      </div>

      <div className={styles.collage}>
        {photos.map((photo, i) => (
          <div
            key={i}
            className={styles.photoItem}
            style={{ transform: `rotate(${rotations[i]}deg)` }}
          >
            <Image
              src={`/images/Life_pics/${photo.src}`}
              alt={photo.caption || `photo ${i + 1}`}
              width={photo.w}
              height={photo.h}
              className={styles.photoFrame}
              style={{ width: "100%", height: "auto" }}
            />
            {photo.caption && (
              <p className={styles.caption}>{photo.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
