"use client";

import React, { useState, useRef } from 'react';
import experience from '@/data/experience.json';
import styles from "./IsometricCity.module.css";

const IsometricCity = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isoDescriptionContainer = useRef<HTMLUListElement>(null);
  const ground = useRef<HTMLDivElement>(null);
  const buildings = useRef<(HTMLDivElement | null)[]>([]);

  const parseStyle = (styleString: string): React.CSSProperties => {
    return styleString.split(';').reduce((acc: Record<string, string>, style) => {
      const [key, value] = style.split(':').map(s => s.trim());
      if (key && value) {
        const camelCaseKey = key.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        acc[camelCaseKey] = value;
      }
      return acc;
    }, {});
  };  

  return (
    <div className={styles.isometricCity}>
      <div className={`${styles.isoDescription} ${styles.grow}`}>
        <ul ref={isoDescriptionContainer}>
          {experience.map((item, i) => (
            <input
              key={`iso_${i}`}
              type="radio"
              id={`iso_${i}`}
              className={styles.carouselActivator}
              name="activator"
              checked={selectedIndex === i}
              onChange={() => setSelectedIndex(i)}
            />
          ))}
          {experience.map((item, i) => (
            <div key={`controls_${i}`} className={styles.carouselControls}>
              <label
                className={`${styles.carouselControl} ${styles.carouselControlBackward}`}
                htmlFor={
                  i === 0
                    ? `iso_${experience.length - 1}`
                    : `iso_${i - 1}`
                }
              >
                &#10148;
              </label>
              <label
                className={`${styles.carouselControl} ${styles.carouselControlForward}`}
                htmlFor={
                  i === experience.length - 1 ? 'iso_0' : `iso_${i + 1}`
                }
              >
                &#10148;
              </label>
            </div>
          ))}
          {experience.map((item, i) => (
            <li key={`item_${i}`}>
              <div className={styles.card}>
                <h2>{item.what}</h2>
                <p>
                  {item.from}
                  {item.to && ` - ${item.to}`}, {item.where}
                </p>
                <div className={styles.pins}>
                  {item.technologies.map((techno, j) => (
                    <span key={`tech_${j}`}>{techno}</span>
                  ))}
                </div>
                <div>
                  {item.descriptions.map((description, j) => (
                    <p key={`desc_${j}`}>{description}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
          <div className={styles.carouselIndicators}>
            {experience.map((item, i) => (
              <label
                key={`indicator_${i}`}
                className={styles.carouselIndicator}
                htmlFor={`iso_${i}`}
              >
                &#9679;
              </label>
            ))}
          </div>
        </ul>
      </div>
      <div className={styles.isoContainer}>
        <div ref={ground} className={`${styles.ground} ${styles.night}`}>
          <div className={styles.shadowRight}></div>
          <div className={styles.shadowLeft}></div>
          <div className={styles.grass}>
            {[...Array(5)].map((_, i) => (
              <div key={`grass_${i}`} className={styles[`grass${i + 1}`]}></div>
            ))}
          </div>
          <div className={styles.parking}>
            {[...Array(3)].map((_, i) => (
              <div key={`parking_${i}`} className={styles[`parking${i + 1}`]}></div>
            ))}
          </div>
          <div className={styles.water}>
            <div className={styles.one}>
              <div className={styles.waterDrops}>
                {[...Array(4)].map((_, i) => (
                  <div key={`drop_${i}`}></div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.road}>
            {[...Array(5)].map((_, i) => (
              <div key={`road_${i}`} className={styles[`road${i + 1}`]}></div>
            ))}
          </div>
          <div className={styles.car}>
            {[...Array(2)].map((_, i) => (
              <div key={`car_${i}`} className={styles[`car${i + 1}`]}></div>
            ))}
          </div>
          <div className={styles.tree}>
            {[...Array(11)].map((_, i) => (
              <div key={`tree_${i}`} className={styles[`tree${i + 1}`]}></div>
            ))}
          </div>
          <div ref={(el) => {
            if (el) buildings.current.push(el);
          }}>
            {experience.map((item, i) => (
              <div
                key={`building_${i}`}
                className={styles[item.building]}
                style={parseStyle(item.position)}
              >
                <div className={styles.wallOne}>
                  <div></div>
                </div>
                <div className={styles.wallTwo}>
                  <div></div>
                </div>
                <div
                  ref={(el) => {
                    if (el) buildings.current[i] = el;
                  }}
                  className={styles[`roof${selectedIndex === i ? 'Selected' : ''}`]}
                  onClick={() => setSelectedIndex(i)}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsometricCity;

