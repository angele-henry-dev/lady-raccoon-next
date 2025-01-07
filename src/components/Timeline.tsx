"use client";

import React, { useEffect, useRef } from 'react';
import experience from '@/data/experience.json';
import styles from './Timeline.module.css';

const Timeline = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const element = itemsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    element.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      element.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
    return (
      <div className={`${styles.timelineContainer}`}>
        <h1>Professional experience</h1>
        <div className={`${styles.timeline} my-0 mx-auto px-0 py-5`}>
          {experience.map((item, index) => (
            <div
              key={index}
              ref={(el) => { if (el) itemsRef.current[index] = el; }}
              className={`mb-5 ${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.timelineContent}>
                <h2 className={styles.what}>{item.what}</h2>
                <h3 className={styles.where}>{item.where}</h3>
                <p className={styles.date}>{item.from} - {item.to || 'Present'}</p>
                <ul className={styles.descriptions}>
                  {item.descriptions.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className={styles.technologies}>
                  {item.technologies.map((tech, i) => (
                    <span key={i} className={styles.tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className={styles.timelineDot}></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Timeline;
