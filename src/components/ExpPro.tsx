"use client";

import React from 'react';
import experience from '@/data/experience.json';
import styles from "./ExpPro.module.css";

const ExpPro = () => {
  return (
    <div className={`${styles.cards}`}>
        <ul>
          {experience.map((item, i) => (
            <li key={`item_${i}`}>
              <div className={styles.card}>
                <h3>{item.what}</h3>
                <p>
                  {item.from}
                  {item.to && ` - ${item.to}`}, {item.where}
                </p>
                <div>
                  {item.descriptions.map((description, j) => (
                    <p key={`desc_${j}`}>{description}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default ExpPro;
