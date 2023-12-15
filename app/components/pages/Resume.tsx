import React from "react";
import { Book } from "lucide-react";

export default function Resume() {
  return (
    <div>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Book />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Intermediate in Computer Science @ Students&apos; Inn College
            </h4>

            <span>2021 — 2023</span>

            <p className="timeline-text">
              I embarked on my academic journey at Students Inn College, where I
              pursued a Bachelor&apos;s degree in Computer Science. 🎓
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Design Principles - Web Design - Graphic Design
            </h4>

            <span>2020 — 2021</span>

            <p className="timeline-text">
              A creative mind at the intersection of Design Principles, Web
              Design, and Graphic Design. 🌟
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Book />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Full Stack Developer - Basic DevOps
            </h4>

            <span>January,2023 — Present</span>

            <p className="timeline-text">
              a passionate Full Stack Developer who is not just about crafting
              elegant front-end experiences and robust back-end solutions but
              also has a knack for basic DevOps practices. 💻🔧.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">MERN Stack Developer</h4>

            <span>2021 — 2023</span>

            <p className="timeline-text">
              I am a developer with a wealth of experience in the MERN &quot;
              MongoDB, Express.js, React, Node.js &quot; stack.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Wordpress Developer</h4>

            <span>2020 — 2021</span>

            <p className="timeline-text">
              A dedicated developer with a specialization in the dynamic world
              of WordPress. 🚀{" "}
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Frontend Development</h5>
              <data value="80">80%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Backend Development</h5>
              <data value="70">70%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web Design</h5>
              <data value="90">90%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "90%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">React.js</h5>
              <data value="70">70%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">JavaScript</h5>
              <data value="90">90%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "90%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
