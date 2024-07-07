import React from "react";
import { Book } from "lucide-react";
import styles from "./Resume.module.css";
import HeaderTitle from "../HeaderTitle";
import MySkills from "./MySkills";
import Timeline from "./Timeline/Timeline";
type Props = {};

function Resume() {
  return (
    <article className={`${styles.about}`}>
      <HeaderTitle>About me</HeaderTitle>
      <Timeline />
      <MySkills />
    </article>
  );
}

export default Resume;
