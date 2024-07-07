import React from "react";
import styles from "./MySkills.module.css";

type SkillsProps = {
  title: string;
  amount: number;
};

const skills = [
  {
    title: "React.js + Nextjs",
    amount: 80,
  },
  {
    title: "JavaScript",
    amount: 90,
  },
  {
    title: "Frontend Development",
    amount: 80,
  },
  {
    title: "Backend Development",
    amount: 85,
  },
  {
    title: "Web Design",
    amount: 90,
  },
  {
    title: "Python + Django",
    amount: 40,
  },
];

const MySkills = () => {
  return (
    <section className={styles.skill}>
      <h3 className={`h3 ${styles.skillsTitle}`}>My skills</h3>

      <ul className={`${styles.skillsList} ${styles.contentCard}`}>
        {skills.map((skill: SkillsProps, index: number) => (
          <li className={styles.skillsItem} key={index}>
            <div className={styles.titleWrapper}>
              <h5 className="h5">{skill.title}</h5>
              <data value={skill.amount}>{skill.amount}%</data>
            </div>

            <div className={styles.skillProgressBg}>
              <div
                className={styles.skillProgressFill}
                style={{ width: `${skill.amount}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MySkills;
