"use client";

import React, { useState, useEffect } from "react";
import styles from "./BackgroundStars.module.css";

interface Star {
    size: number;
    top: string;
    left: string;
    opacity: number;
    animationDelay: string;
}

interface BackgroundStarsProps {
    smallCount?: number;
    mediumCount?: number;
    largeCount?: number;
    shootingStarCount?: number;
}
  

export default function BackgroundStars({
    smallCount = 200,
    mediumCount = 100,
    largeCount = 50,
  }: BackgroundStarsProps) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = (count: number, size: number): Star[] => {
      return Array.from({ length: count }).map(() => ({
        size,
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        opacity: 0.5 + Math.random() * 0.5,
        animationDelay: `${Math.random() * 2}s`,
      }));
    };

    setStars([
      ...generateStars(smallCount, 1), // Little stars
      ...generateStars(mediumCount, 2), // Medium stars
      ...generateStars(largeCount, 3),  // Big stars
    ]);
  }, [smallCount, mediumCount, largeCount]);

  return (
    <div className={styles.retrobgStars} aria-hidden="true">
      {stars.map((star, i) => (
        <div
          key={i}
          className={styles.star}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            opacity: star.opacity,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
      <div className={styles.shootingStar}></div>
    </div>
  );
}
