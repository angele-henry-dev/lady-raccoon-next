import React from 'react';
import experience from '@/data/experience.json';
import styles from "./IsometricCity.module.css";

const IsometricCity = () => {
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
    <div className={`${styles.isometricCity} flex flex-row justify-center`}>
      <div className={styles.isoContainer} aria-hidden="true">
        <div className={`${styles.ground} ${styles.night}`}>
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
          <div>
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
                <div className={styles.roof}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsometricCity;

