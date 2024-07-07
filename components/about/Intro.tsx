import React from "react";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <section className={styles.aboutText}>
      <h4>Abdul Haseeb - Web Developer 🌐</h4>
      <br />
      <p>
        I&lsquo;m a <strong>Web Developer</strong> based in Faisalabad,
        Pakistan! 🇵🇰 My work focuses on creating simple, beautiful, and
        intuitive web solutions from complex challenges.
      </p>
      <p>
        💻 Crafting Digital Experiences: My primary expertise lies in{" "}
        <strong>React</strong>. I aim to build functional, user-friendly, and
        visually appealing websites and applications using Javascript and
        ReactJS⚛️. I enjoy turning intricate problems into elegant solutions,
        ensuring each line of code I write adds value to the project.
      </p>
    </section>
  );
};
export default Intro;
