"use client";

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useWindowSize, useWindowScroll, useMouse } from 'react-use';
import styles from './BackgroundRetro.module.css';

interface BackgroundRetroProps {
  play?: boolean;
}

export default function BackgroundRetro({ play = false }: BackgroundRetroProps) {
  const retroLinesRef = useRef<HTMLDivElement>(null!);
  const [isVisible, setIsVisible] = useState(false);
  const { width } = useWindowSize();
  const { docX: mouseX } = useMouse(retroLinesRef);
  const { y: scrollY } = useWindowScroll();

  // Check visibility
  useEffect(() => {
    const element = retroLinesRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
  
    if (element) {
      observer.observe(element);
    }
  
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Computed values
  const displayY = useMemo(() => (isVisible ? scrollY % 100 : 0), [isVisible, scrollY]);

  const motoX = useMemo(() => {
    if (!play || !isVisible) return 0;
    return mouseX;
  }, [play, isVisible, mouseX]);

  const motoZ = useMemo(() => {
    if (!play || !isVisible) return 0;
    return (-70 / (width / 2)) * mouseX + 70;
  }, [play, isVisible, mouseX, width]);

  return (
    <div className={styles.retro} aria-hidden="true">
      <div className={styles.retroSky}>
        <div className={styles.retroSunWrap}>
          <div className={styles.retroSunShadow}></div>
          <div className={styles.retroSun}></div>
        </div>
        <div className={styles.retroMountains}>
          <div className={`${styles.retroMountain} ${styles.retroMountainsLeft}`}></div>
          <div className={`${styles.retroMountain} ${styles.retroMountainsRight}`}></div>
        </div>
      </div>

      <div className={styles.retroGround}>
        <div className={styles.retroLinesWrap}>
          <div className={`${styles.retroLines} ${play ? styles.retroLinesAnim : ""}`} style={!play ? { transform: `rotateX(84deg) translateY(${displayY}px)` } : {}}>
            <div className={styles.retroVlines}>
              {Array.from({ length: 53 }).map((_, index) => (
                <div key={index} className={styles.retroVline}></div>
              ))}
            </div>
            <div className={styles.retroHlines}>
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className={styles.retroHline}></div>
              ))}
            </div>
          </div>
        </div>
        <div ref={retroLinesRef} className={styles.retroGroundShadow}></div>

        {play && (
          <div className={styles.motoWrapper}>
            <div
              className={styles.moto}
              style={{ transform: `translateX(${motoX}px) translateZ(${motoZ}px)` }}
            >
              <div className={`${styles.wheel} ${styles.front}`}></div>
              <div className={`${styles.wheelShadow} ${styles.front}`}></div>
              <div className={`${styles.wheel} ${styles.back}`}></div>
              <div className={`${styles.wheelShadow} ${styles.back}`}></div>
              <div className={styles.frame}></div>
              <div className={styles.seat}></div>
              <div className={`${styles.handlebar} ${styles.left}`}>
                <div className={styles.headlight}></div>
              </div>
              <div className={`${styles.handlebar} ${styles.right}`}>
                <div className={styles.headlight}></div>
              </div>
              <div className={styles.motoTail}></div>
            </div>
          </div>
        )}
      </div>

      <svg height="0" width="0">
        <defs>
          <clipPath id="stripes" clipPathUnits="objectBoundingBox">
            <rect x="0" y="0" width="1" height="0.175" />
            <rect x="0" y="0.178" width="1" height="0.075" />
            <rect x="0" y="0.259" width="1" height="0.075" />
            <rect x="0" y="0.343" width="1" height="0.075" />
            <rect x="0" y="0.430" width="1" height="0.075" />
            <rect x="0" y="0.520" width="1" height="0.1" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
