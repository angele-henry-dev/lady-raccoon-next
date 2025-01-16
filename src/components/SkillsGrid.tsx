"use client";

import React, { useMemo } from "react";
import skillsData from "@/data/skills.json";
import styles from "./SkillsGrid.module.css";

const SkillsGrid = () => {
  const frontendSkills = useMemo(() => {
    return skillsData.filter((skill) => 
      skill.tags.some((tag: string) => tag === "Frontend")
    );
  }, []);
  const backendSkills = useMemo(() => {
    return skillsData.filter((skill) => 
      skill.tags.some((tag: string) => tag === "Backend")
    );
  }, []);
  const cloudSkills = useMemo(() => {
    return skillsData.filter((skill) => 
      skill.tags.some((tag: string) => tag === "Cloud")
    );
  }, []);
  const otherSkills = useMemo(() => {
    return skillsData.filter((skill) => 
      skill.tags.some((tag: string) => tag === "Other")
    );
  }, []);

  return (
    <div className={styles.container}>
      <h1>Skills</h1>
      <div className="grid sm:border-x sm:grid-cols-4 sm:divide-x">
        <article>
          <div className={styles.stretch}>Front</div>
          <ul className="py-5">
            {frontendSkills.map((skill, index) => (
              <li key={index}>
                {skill.title}
              </li>
            ))}
          </ul>
        </article>
        <article>
          <div className={styles.stretch}>Back</div>
          <ul className="py-5">
            {backendSkills.map((skill, index) => (
              <li key={index}>
                {skill.title}
              </li>
            ))}
          </ul>
        </article>
        <article>
          <div className={styles.stretch}>AWS</div>
          <ul className="py-5">
            {cloudSkills.map((skill, index) => (
              <li key={index}>
                {skill.title}
              </li>
            ))}
          </ul>
        </article>
        <article>
          <div className={styles.stretch}>Other</div>
          <ul className="py-5">
            {otherSkills.map((skill, index) => (
              <li key={index}>
                {skill.title}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
};

export default SkillsGrid;
