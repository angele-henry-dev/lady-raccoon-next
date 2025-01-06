"use client";

import React, { useState, useMemo } from "react";
import skillsData from "@/data/skills.json";
import styles from "./SkillsGrid.module.css";

const SkillsGrid = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter skills depending on the selected tags
  const filteredSkills = useMemo(() => {
    if (!selectedTag) return skillsData;
    return skillsData.filter((skill) => skill.tags.includes(selectedTag));
  }, [selectedTag]);

  // Extract unique categories for filters
  const tags = useMemo(() => {
    const allTags = skillsData.flatMap((skill) => skill.tags);
    return Array.from(new Set(allTags)); // Unicity of tags
  }, []);

  return (
    <div className={styles.container}>
      {/* Filters */}
      <div className={styles.filters}>
        <button
          className={`${styles.filterButton} ${!selectedTag ? styles.active : ""}`}
          onClick={() => setSelectedTag(null)}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`${styles.filterButton} ${selectedTag === tag ? styles.active : ""}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className={styles.grid}>
        {filteredSkills.map((skill, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{skill.title}</h3>
            <div className={styles.tags}>
              {skill.tags.map((tag, i) => (
                <span key={i} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
