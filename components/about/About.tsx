import Intro from "./Intro";
import Services from "./Services";
import Clients from "./Clients";
import styles from "./About.module.css";
import HeaderTitle from "../HeaderTitle";

const About = () => {
  return (
    <article className={`${styles.about}`}>
      <HeaderTitle>About me</HeaderTitle>
      <Intro />
      <Services />
      <Clients />
    </article>
  );
};

export default About;
