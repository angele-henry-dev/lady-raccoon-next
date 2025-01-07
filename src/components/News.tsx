import React from 'react';
import news from '@/data/news.json';
import styles from './News.module.css';
import Image from 'next/image';

const News = () => {
  return (
    <div className={styles.newsContainer}>
      <h1>Latest News</h1>
      <div className={styles.newsGrid}>
        {news.map((item, index) => (
          <div key={index} className={styles.newsCard}>
            <Image src={`/images/${item.src}`} alt={item.title} className={styles.image} />
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <h3 className={styles.subtitle}>{item.subtitle}</h3>
              <p className={styles.date}>{item.when}</p>
              <div className={`${styles.technologies} mb-5`}>
                {item.technologies?.map((tech, i) => (
                  <span key={i} className={styles.tech}>{tech}</span>
                ))}
              </div>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
