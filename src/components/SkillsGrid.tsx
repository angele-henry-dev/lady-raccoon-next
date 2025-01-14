"use client";

import React, { useState, useMemo } from "react";
import skillsData from "@/data/skills.json";
import styles from "./SkillsGrid.module.css";
import { Tags } from "@/types/tags";

const SkillsGrid = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter skills depending on the selected tags
  const filteredSkills = useMemo(() => {
    if (!selectedTag) return skillsData;
    return skillsData.filter((skill) => 
      skill.tags.some((tag: string) => tag === selectedTag)
    );
  }, [selectedTag]);

  // Get tags
  const tags = Object.values(Tags);

  // Number of skills for each tag
  const tagCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    skillsData.forEach((skill) => {
      skill.tags.forEach((tag: string) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return counts;
  }, []);

  return (
    <div className={styles.container}>
      <h1>Skills at your service</h1>
      {/* Filters */}
      <div className={styles.filters}>
        <button
          className={`button ${!selectedTag ? 'active' : ""}`}
          onClick={() => setSelectedTag(null)}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`button ${selectedTag === tag ? 'active' : ""}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag} ({tagCounts[tag] || 0})
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className={styles.grid}>
        {filteredSkills.map((skill, index) => (
          <div key={index} className={styles.card}>
            <span className={styles.cardTitle}>{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
